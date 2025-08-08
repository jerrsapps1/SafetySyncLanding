import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Navigation() {
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
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-gray-300 hover:text-white transition-colors"
            data-testid="link-features"
          >
            Features
          </button>
          <button 
            onClick={() => alert('Pricing page coming soon!')}
            className="text-gray-300 hover:text-white transition-colors"
            data-testid="link-pricing"
          >
            Pricing
          </button>
          <button 
            onClick={() => alert('About page coming soon!')}
            className="text-gray-300 hover:text-white transition-colors"
            data-testid="link-about"
          >
            About
          </button>
          <Button 
            onClick={() => alert('Sign in functionality coming soon!')}
            className="text-gray-300 hover:bg-transparent hover:text-gray-200 transition-colors bg-transparent border-none"
            data-testid="button-signin"
          >
            Sign In
          </Button>
        </div>
        
        <Button 
          onClick={() => alert('Mobile menu coming soon!')}
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white" 
          data-testid="button-mobile-menu"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
}
