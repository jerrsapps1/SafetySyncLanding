import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { db } from "./db";
import { earlyAccessSignups, insertEarlyAccessSchema, consentEvents, insertConsentSchema } from "@shared/schema";
import { sendEmail, generateEarlyAccessEmail } from "./email";
import { eq, sql } from "drizzle-orm";

export async function registerRoutes(app: Express): Promise<Server> {
  // Early Access Signup endpoint
  app.post("/api/early-access", async (req, res) => {
    try {
      const signupData = insertEarlyAccessSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await db
        .select()
        .from(earlyAccessSignups)
        .where(eq(earlyAccessSignups.email, signupData.email))
        .limit(1);
      
      if (existing.length > 0) {
        return res.status(400).json({ 
          error: "This email is already registered for early access" 
        });
      }
      
      // Insert the signup
      const [newSignup] = await db
        .insert(earlyAccessSignups)
        .values(signupData)
        .returning();
      
      // Send welcome email
      try {
        const emailContent = generateEarlyAccessEmail(signupData.firstName || null, signupData.signupType);
        let subject = '';
        switch (signupData.signupType) {
          case 'early_access':
            subject = 'Welcome to SafetySync.AI Early Access!';
            break;
          case 'demo_request':
            subject = 'Your SafetySync.AI Demo Request Received';
            break;
          case 'contact_sales':
            subject = 'Thanks for Contacting SafetySync.AI Sales';
            break;
          default:
            subject = 'Thank you for your interest in SafetySync.AI';
        }
          
        const emailSent = await sendEmail({
          to: signupData.email,
          from: 'hello@safetysync.ai',
          subject,
          html: emailContent
        });
        
        // Update email sent status
        if (emailSent) {
          await db
            .update(earlyAccessSignups)
            .set({ emailSent: true })
            .where(eq(earlyAccessSignups.id, newSignup.id));
        }
        
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Don't fail the signup if email fails
      }
      
      res.status(201).json({ 
        message: "Successfully signed up for early access!",
        id: newSignup.id 
      });
      
    } catch (error) {
      console.error('Early access signup error:', error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Invalid signup data", 
          details: error.errors 
        });
      }
      res.status(500).json({ error: "Failed to process signup" });
    }
  });
  
  // Get early access signups (for admin use)
  app.get("/api/early-access", async (req, res) => {
    try {
      const signups = await db
        .select({
          id: earlyAccessSignups.id,
          email: earlyAccessSignups.email,
          firstName: earlyAccessSignups.firstName,
          lastName: earlyAccessSignups.lastName,
          company: earlyAccessSignups.company,
          jobTitle: earlyAccessSignups.jobTitle,
          signupType: earlyAccessSignups.signupType,
          emailSent: earlyAccessSignups.emailSent,
          createdAt: earlyAccessSignups.createdAt
        })
        .from(earlyAccessSignups)
        .orderBy(earlyAccessSignups.createdAt);
      
      res.json(signups);
    } catch (error) {
      console.error('Failed to fetch signups:', error);
      res.status(500).json({ error: "Failed to fetch signups" });
    }
  });

  // Health check endpoint
  app.get("/api/health", async (req, res) => {
    try {
      await db.select().from(earlyAccessSignups).limit(1);
      res.json({ ok: true });
    } catch (error) {
      console.error('Health check failed:', error);
      res.status(500).json({ ok: false, error: "db_unreachable" });
    }
  });

  // Consent logging endpoint
  app.post("/api/consent", async (req, res) => {
    try {
      const { categories, action, sessionId, userId, page } = req.body || {};
      
      if (!categories || !action) {
        return res.status(400).json({ error: "Missing categories or action" });
      }

      const ip = (req.headers['cf-connecting-ip'] as string) || 
                 (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 
                 req.ip || 
                 undefined;
      const userAgent = req.headers['user-agent'] as string || undefined;

      const consentData = {
        sessionId: sessionId || null,
        userId: userId || null,
        action,
        categories,
        page: page || null,
        ip,
        userAgent
      };

      await db.insert(consentEvents).values(consentData);
      res.json({ ok: true });
    } catch (error) {
      console.error('Consent insert failed:', error);
      res.status(500).json({ error: "server_error" });
    }
  });

  // Get recent consent events (for admin use)
  app.get("/api/consent/recent", async (req, res) => {
    try {
      const events = await db
        .select()
        .from(consentEvents)
        .orderBy(sql`${consentEvents.createdAt} DESC`)
        .limit(50);
      
      res.json(events);
    } catch (error) {
      console.error('Failed to fetch consent events:', error);
      res.status(500).json({ error: "Failed to fetch consent events" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
