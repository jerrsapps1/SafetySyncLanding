import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By accessing or using SafetySync.AI services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SafetySync.AI provides AI-powered OSHA compliance automation services, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Automated training record management</li>
              <li>Smart certificate generation</li>
              <li>Compliance monitoring and reporting</li>
              <li>Audit preparation tools</li>
              <li>AI-powered safety recommendations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service in compliance with applicable laws and regulations</li>
              <li>Not misuse or attempt to breach our systems</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Service Availability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We strive to maintain high service availability but cannot guarantee uninterrupted access. 
              We reserve the right to modify, suspend, or discontinue any part of our service with appropriate notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Payment and Billing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For paid services:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Fees are charged according to your selected plan</li>
              <li>Payments are processed securely through third-party providers</li>
              <li>Refunds are subject to our refund policy</li>
              <li>We reserve the right to change pricing with notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SafetySync.AI provides tools to assist with OSHA compliance but does not guarantee compliance. 
              Users remain responsible for ensuring their workplace safety programs meet all applicable regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Either party may terminate this agreement at any time. Upon termination, 
              your access to the service will cease, and we will handle your data according to our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@safetysync.ai" className="text-blue-400 hover:text-blue-300">
                legal@safetysync.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}