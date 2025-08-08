import { Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";
import Logo from "@/components/ui/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center space-x-3 mb-4 group transition-all duration-300 hover:scale-105" data-testid="link-home-logo-footer">
              <div className="group-hover:drop-shadow-lg transition-all duration-300">
                <Logo width={32} height={32} className="group-hover:brightness-110" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">SafetySync.ai</span>
            </a>
            <p className="text-gray-400 max-w-md mb-6">
              Automate your OSHA compliance with AI-powered training record management. 
              Keep your workplace safe and audit-ready.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-features-footer">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-pricing-footer">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-integrations">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-api">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-about-footer">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-careers">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-contact">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-blog">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm" data-testid="text-copyright">
            © {currentYear} SafetySync.ai — All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors" data-testid="link-privacy">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors" data-testid="link-terms">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors" data-testid="link-cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
