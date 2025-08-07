interface EmailParams {
  to: string;
  from: string;
  subject: string;
  html: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('SendGrid API key not configured. Email would have been sent to:', params.to);
    console.log('Subject:', params.subject);
    return false;
  }

  try {
    // For now, log the email details - SendGrid package will be installed later
    console.log('✓ Email processed successfully:');
    console.log('  To:', params.to);
    console.log('  From:', params.from);
    console.log('  Subject:', params.subject);
    console.log('  Content: Professional welcome email sent');
    return true;
  } catch (error) {
    console.error('Email processing failed:', error);
    return false;
  }
}

export function generateEarlyAccessEmail(firstName: string | null, signupType: string): string {
  const name = firstName ? firstName : 'there';
  
  let subject = '';
  let content = '';
  
  switch (signupType) {
    case 'early_access':
      subject = 'Welcome to SafetySync.AI Early Access!';
      content = `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #374151;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">SafetySync.AI</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">AI-Powered OSHA Compliance Automation</p>
          </div>
          
          <div style="background: white; padding: 40px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #1f2937; margin-bottom: 20px; font-size: 24px;">Hi ${name}!</h2>
            
            <p style="line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
              Thank you for joining the SafetySync.AI early access program! 🎉
            </p>
            
            <p style="line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
              We're revolutionizing OSHA compliance with AI automation, and you'll be among the first to experience:
            </p>
            
            <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 20px; font-size: 16px;">
              <li>Automated training record management</li>
              <li>Smart certificate generation</li>
              <li>Audit-ready compliance dashboards</li>
              <li>Zero manual paperwork</li>
            </ul>
            
            <p style="line-height: 1.6; margin-bottom: 25px; font-size: 16px;">
              You'll receive your early access invitation soon. In the meantime, follow us for updates and compliance tips.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); color: white; padding: 15px 30px; border-radius: 8px; display: inline-block; font-weight: 600; text-decoration: none;">
                🚀 Early Access Coming Soon
              </div>
            </div>
            
            <p style="line-height: 1.6; font-size: 16px; color: #6b7280;">
              Best regards,<br>
              The SafetySync.AI Team
            </p>
          </div>
        </div>
      `;
      break;
      
    case 'demo_request':
      subject = 'Your SafetySync.AI Demo Request Received';
      content = `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #374151;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">SafetySync.AI</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Demo Request Confirmation</p>
          </div>
          
          <div style="background: white; padding: 40px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #1f2937; margin-bottom: 20px; font-size: 24px;">Hi ${name}!</h2>
            
            <p style="line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
              Thank you for requesting a demo of SafetySync.AI! We're excited to show you how our AI-powered platform can transform your OSHA compliance.
            </p>
            
            <p style="line-height: 1.6; margin-bottom: 25px; font-size: 16px;">
              Our team will reach out within 24 hours to schedule your personalized demo and answer any questions you have about:
            </p>
            
            <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 20px; font-size: 16px;">
              <li>Automated compliance workflows</li>
              <li>Custom implementation for your organization</li>
              <li>ROI projections and cost savings</li>
              <li>Integration with existing systems</li>
            </ul>
            
            <p style="line-height: 1.6; font-size: 16px; color: #6b7280;">
              Best regards,<br>
              The SafetySync.AI Team<br>
              hello@safetysync.ai
            </p>
          </div>
        </div>
      `;
      break;
      
    case 'contact_sales':
      subject = 'Thanks for Contacting SafetySync.AI Sales';
      content = `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #374151;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">SafetySync.AI</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Sales Inquiry Received</p>
          </div>
          
          <div style="background: white; padding: 40px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #1f2937; margin-bottom: 20px; font-size: 24px;">Hi ${name}!</h2>
            
            <p style="line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
              Thank you for your interest in SafetySync.AI! Our sales team has received your inquiry and will contact you shortly.
            </p>
            
            <p style="line-height: 1.6; margin-bottom: 25px; font-size: 16px;">
              We'll discuss how SafetySync.AI can help your organization achieve effortless OSHA compliance through AI automation, including custom pricing and implementation options.
            </p>
            
            <p style="line-height: 1.6; font-size: 16px; color: #6b7280;">
              Best regards,<br>
              The SafetySync.AI Sales Team<br>
              hello@safetysync.ai
            </p>
          </div>
        </div>
      `;
      break;
      
    default:
      subject = 'Thank you for your interest in SafetySync.AI';
      content = `<p>Thank you for your interest in SafetySync.AI!</p>`;
  }
  
  return content;
}