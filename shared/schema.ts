import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const earlyAccessSignups = pgTable("early_access_signups", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").unique().notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  company: text("company"),
  jobTitle: text("job_title"),
  signupType: text("signup_type").notNull(), // 'early_access', 'demo_request', 'contact_sales'
  emailSent: boolean("email_sent").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const consentEvents = pgTable("consent_events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id"),
  userId: text("user_id"),
  action: text("action").notNull(), // 'accept_all', 'reject_all', 'save'
  categories: json("categories").notNull(),
  page: text("page"),
  ip: text("ip"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertEarlyAccessSchema = createInsertSchema(earlyAccessSignups).omit({
  id: true,
  emailSent: true,
  createdAt: true,
});

export const insertConsentSchema = createInsertSchema(consentEvents).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertEarlyAccess = z.infer<typeof insertEarlyAccessSchema>;
export type EarlyAccessSignup = typeof earlyAccessSignups.$inferSelect;
export type InsertConsentEvent = z.infer<typeof insertConsentSchema>;
export type ConsentEvent = typeof consentEvents.$inferSelect;
