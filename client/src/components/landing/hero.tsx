import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import EarlyAccessForm from "@/components/ui/early-access-form";
import { useState } from "react";

export default function Hero() {
  const [showEarlyAccessForm, setShowEarlyAccessForm] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <section className="relative px-6 py-24 text-center max-w-5xl mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent rounded-3xl -z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse"></span>
          Now in Early Access
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-8 tracking-tight">
          Simplify OSHA Compliance<br />
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text animate-gradient bg-[length:200%_200%]">
            with AI Automation
          </span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          SafetySync.ai keeps your training records audit-ready — automatically. 
          Eliminate manual paperwork, reduce compliance risks, and save countless hours with intelligent automation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => setShowEarlyAccessForm(true)}
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group"
            data-testid="button-early-access"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Get Early Access</span>
            <ArrowRight className="w-5 h-5 ml-2 relative transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            onClick={() => setShowDemoForm(true)}
            variant="outline" 
            className="inline-flex items-center justify-center backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 transition-all duration-300 text-white font-semibold py-4 px-8 rounded-xl group relative overflow-hidden"
            data-testid="button-watch-demo"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Play className="w-5 h-5 mr-2 relative transition-transform group-hover:scale-110" />
            <span className="relative">Watch Demo</span>
          </Button>
        </div>
        
        <EarlyAccessForm
          signupType="early_access"
          isOpen={showEarlyAccessForm}
          onClose={() => setShowEarlyAccessForm(false)}
        />
        
        <EarlyAccessForm
          signupType="demo_request"
          isOpen={showDemoForm}
          onClose={() => setShowDemoForm(false)}
        />
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-6">Trusted by safety professionals at</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {/* Company Logo Placeholders - Replace with actual logos */}
            <div className="w-24 h-12 bg-gray-800/40 border border-white/10 rounded-lg flex items-center justify-center">
              <div className="text-xs text-gray-500 font-medium">LOGO</div>
            </div>
            <div className="w-24 h-12 bg-gray-800/40 border border-white/10 rounded-lg flex items-center justify-center">
              <div className="text-xs text-gray-500 font-medium">LOGO</div>
            </div>
            <div className="w-24 h-12 bg-gray-800/40 border border-white/10 rounded-lg flex items-center justify-center">
              <div className="text-xs text-gray-500 font-medium">LOGO</div>
            </div>
            <div className="w-24 h-12 bg-gray-800/40 border border-white/10 rounded-lg flex items-center justify-center">
              <div className="text-xs text-gray-500 font-medium">LOGO</div>
            </div>
            <div className="w-24 h-12 bg-gray-800/40 border border-white/10 rounded-lg flex items-center justify-center">
              <div className="text-xs text-gray-500 font-medium">LOGO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
