import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="relative px-6 py-4 backdrop-blur-sm bg-gray-950/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold text-white">SafetySync.ai</span>
        </div>
        
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
            variant="ghost" 
            className="text-gray-300 hover:text-white transition-colors"
            data-testid="button-signin"
          >
            Sign In
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-500 transition-colors text-white font-medium"
            data-testid="button-request-demo"
          >
            Request Demo
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden text-white" data-testid="button-mobile-menu">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
}
