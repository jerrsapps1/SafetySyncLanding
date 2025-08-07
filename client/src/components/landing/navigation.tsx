import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "@/components/ui/logo";
import EarlyAccessForm from "@/components/ui/early-access-form";
import { useState } from "react";

export default function Navigation() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  
  return (
    <nav className="relative px-6 py-4 backdrop-blur-xl bg-gray-950/90 border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        <a href="/" className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105" data-testid="link-home-logo">
          <div className="group-hover:drop-shadow-lg transition-all duration-300">
            <Logo width={32} height={32} className="group-hover:brightness-110" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">SafetySync.ai</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-gray-300 hover:text-white transition-colors"
            data-testid="link-features"
          >
            Features
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors"
            data-testid="link-pricing"
          >
            Pricing
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors"
            data-testid="link-about"
          >
            About
          </a>
          <Button 
            className="text-gray-300 hover:bg-transparent hover:text-transparent transition-colors bg-transparent border-none"
            data-testid="button-signin"
          >
            Sign In
          </Button>
          <Button 
            onClick={() => setShowDemoForm(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
            data-testid="button-request-demo"
          >
            Request Demo
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden text-white" data-testid="button-mobile-menu">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
      
      <EarlyAccessForm
        signupType="demo_request"
        isOpen={showDemoForm}
        onClose={() => setShowDemoForm(false)}
      />
    </nav>
  );
}
