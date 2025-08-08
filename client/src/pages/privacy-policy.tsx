import React from 'react';
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Privacy Policy</h1>
          <p className="text-gray-300 text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <p className="text-gray-300 leading-relaxed mb-6">
            SafetySync.ai ("we", "us") provides software that helps businesses manage safety training
            recordkeeping and compliance. This Privacy Policy explains how we collect, use, and share
            information when you use our website and services.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li><strong>Account & Contact Data:</strong> name, email, company, role.</li>
            <li><strong>Usage Data:</strong> pages viewed, actions taken, device/browser info, IP address.</li>
            <li><strong>Customer Content:</strong> training records and documents you upload to the platform.</li>
            <li><strong>Cookies & Similar:</strong> essential, analytics, marketing, and preference cookies as chosen in your settings.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Information</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Provide and secure the services, including authentication and fraud prevention.</li>
            <li>Operate features such as certification tracking and document storage.</li>
            <li>Analyze usage (in aggregate) to improve performance and usability.</li>
            <li>Communicate with you about updates, security notices, and support.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">Legal Bases (EEA/UK users)</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Contract (to provide the services you request)</li>
            <li>Legitimate interests (e.g., service improvement, security)</li>
            <li>Consent (for non‑essential cookies/marketing)</li>
            <li>Legal obligation (where applicable)</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">Sharing</h2>
          <p className="text-gray-300 leading-relaxed mb-6">We may share personal data with service providers who process data on our behalf (e.g., cloud hosting, analytics, support). We require appropriate confidentiality and security commitments. We do not sell personal data.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">Retention</h2>
          <p className="text-gray-300 leading-relaxed mb-6">We retain data for as long as necessary to provide the services, comply with legal obligations, resolve disputes, and enforce agreements. You may request deletion subject to applicable law and contractual obligations.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">Your Choices</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Cookie settings: manage optional cookies via the Cookies link in the footer.</li>
            <li>Marketing: opt out using unsubscribe links or by contacting us.</li>
            <li>Access/Deletion/Correction: contact us to exercise rights under applicable laws (e.g., GDPR/CCPA).</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">Security</h2>
          <p className="text-gray-300 leading-relaxed mb-6">We implement technical and organizational measures to protect information. No system is 100% secure.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">International Transfers</h2>
          <p className="text-gray-300 leading-relaxed mb-6">We may transfer personal data to countries with different data protection laws. Where required, we use appropriate safeguards.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">Children</h2>
          <p className="text-gray-300 leading-relaxed mb-6">Our services are not directed to children under 16. We do not knowingly collect personal data from children.</p>

          <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed mb-6">For questions or privacy requests, contact: <a href="mailto:privacy@safetysync.ai" className="text-blue-400 hover:text-blue-300">privacy@safetysync.ai</a></p>

          <h2 className="text-2xl font-semibold mb-4 text-white">Changes</h2>
          <p className="text-gray-300 leading-relaxed">We may update this policy. Material changes will be posted on this page with a new "Last updated" date.</p>
        </main>
      </div>
    </div>
  );
}