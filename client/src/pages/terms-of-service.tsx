import React from 'react';
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
        
        <main className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Terms of Service</h1>
          <p className="text-gray-300 text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement</h2>
          <p className="text-gray-300 leading-relaxed mb-6">These Terms govern your use of SafetySync.ai. By accessing or using the services, you agree to these Terms.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">2. Accounts & Access</h2>
          <p className="text-gray-300 leading-relaxed mb-6">You must provide accurate information and maintain the security of your account credentials. You are responsible for activities under your account.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">3. Acceptable Use</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>No illegal, harmful, or infringing content or activity.</li>
            <li>No attempts to disrupt or reverse engineer the service.</li>
            <li>Compliance with all applicable laws and regulations (including OSHA and data protection laws as relevant).</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">4. Customer Content</h2>
          <p className="text-gray-300 leading-relaxed mb-6">You retain ownership of content you upload. You grant us a limited license to host and process content to provide the services. You represent you have rights to the content you upload.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">5. Privacy</h2>
          <p className="text-gray-300 leading-relaxed mb-6">Your use is subject to our <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>, which explains how we handle personal data.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">6. Fees</h2>
          <p className="text-gray-300 leading-relaxed mb-6">Paid plans, invoices, taxes, and payment terms (e.g., Net 30, POs) are described at purchase. Fees are non‑refundable except as required by law or expressly stated.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">7. Service Availability & Support</h2>
          <p className="text-gray-300 leading-relaxed mb-6">We aim for high availability but do not guarantee uninterrupted service. Support channels and response targets may be defined in your plan or support policy.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">8. Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed mb-6">We retain all rights in the services and underlying technology. No license is granted except as expressly set forth.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">9. Disclaimers</h2>
          <p className="text-gray-300 leading-relaxed mb-6">Services are provided "as is" without warranties of any kind, to the maximum extent permitted by law.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">10. Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed mb-6">To the maximum extent permitted by law, our aggregate liability arising out of or related to the services shall not exceed the amounts paid by you in the 12 months prior to the claim.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">11. Indemnification</h2>
          <p className="text-gray-300 leading-relaxed mb-6">You agree to indemnify and hold us harmless from claims arising from your use or violation of these Terms.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">12. Suspension & Termination</h2>
          <p className="text-gray-300 leading-relaxed mb-6">We may suspend or terminate access for violations or risks to the service. You may terminate per your plan terms; certain sections survive termination.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">13. Governing Law & Disputes</h2>
          <p className="text-gray-300 leading-relaxed mb-6">These Terms are governed by the laws of the State of Delaware, USA. Any disputes will be resolved in the courts of Delaware.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">14. Changes to Terms</h2>
          <p className="text-gray-300 leading-relaxed mb-6">We may update these Terms. Continued use after changes constitutes acceptance.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">15. Contact</h2>
          <p className="text-gray-300 leading-relaxed">Questions? <a href="mailto:legal@safetysync.ai" className="text-blue-400 hover:text-blue-300">legal@safetysync.ai</a></p>
        </main>
      </div>
    </div>
  );
}