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
        
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you use SafetySync.AI, we may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Personal information you provide (name, email address, company details)</li>
              <li>Training records and compliance data you upload</li>
              <li>Usage data and analytics to improve our service</li>
              <li>Technical information (IP address, browser type, device information)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Provide and maintain our OSHA compliance automation services</li>
              <li>Process and manage your training records</li>
              <li>Send you important updates about your account and compliance status</li>
              <li>Improve our AI-powered features and user experience</li>
              <li>Respond to your support requests and communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your data, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication measures</li>
              <li>Secure cloud infrastructure with reputable providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Sharing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, rent, or share your personal information with third parties except:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>When required by law or government regulations</li>
              <li>With trusted service providers who assist in our operations</li>
              <li>To protect our rights, property, or safety</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Access, update, or delete your personal information</li>
              <li>Request a copy of your data</li>
              <li>Opt out of certain communications</li>
              <li>Request data portability</li>
              <li>File a complaint with relevant authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at{" "}
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