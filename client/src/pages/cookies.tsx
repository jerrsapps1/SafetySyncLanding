import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
          data-testid="link-back-home"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. What Are Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit SafetySync.AI. 
              They help us provide you with a better experience by remembering your preferences and improving our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-blue-300">Essential Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                These cookies are necessary for the website to function properly:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                <li>Authentication and session management</li>
                <li>Security and fraud prevention</li>
                <li>Basic functionality and navigation</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-blue-300">Performance Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                These cookies help us understand how visitors interact with our website:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                <li>Page visit analytics</li>
                <li>Error tracking and reporting</li>
                <li>Performance monitoring</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-blue-300">Functional Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                These cookies enable enhanced functionality and personalization:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                <li>User preferences and settings</li>
                <li>Language and region preferences</li>
                <li>Customized user experience</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may use third-party services that set their own cookies:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Analytics:</strong> Google Analytics to understand website usage</li>
              <li><strong>Support:</strong> Customer support chat services</li>
              <li><strong>Payment:</strong> Secure payment processing services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Managing Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You can control cookies through:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
              <li><strong>Opt-out Tools:</strong> Use third-party opt-out tools for advertising cookies</li>
              <li><strong>Our Settings:</strong> Manage your preferences in your account settings</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Note:</strong> Disabling essential cookies may affect the functionality of our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Cookie Retention</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Different cookies have different retention periods:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Stored for a specific period (usually 30 days to 2 years)</li>
              <li><strong>Analytics Cookies:</strong> Typically retained for 2 years</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time. We will notify you of any significant changes 
              by posting the new policy on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at{" "}
              <a href="mailto:privacy@safetysync.ai" className="text-blue-400 hover:text-blue-300">
                privacy@safetysync.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}