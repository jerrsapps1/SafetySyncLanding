import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-6 py-24 text-center max-w-5xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent rounded-3xl -z-10"></div>
      
      <div className="relative">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Now in Early Access
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-8">
          Simplify OSHA Compliance<br />
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
            with AI Automation
          </span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          SafetySync.ai keeps your training records audit-ready — automatically. 
          Eliminate manual paperwork, reduce compliance risks, and save countless hours with intelligent automation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 transition-all duration-200 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            data-testid="button-early-access"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            className="inline-flex items-center justify-center backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 text-white font-semibold py-4 px-8 rounded-xl"
            data-testid="button-watch-demo"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-6">Trusted by safety professionals at</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-gray-400 font-semibold">ACME Corp</div>
            <div className="text-gray-400 font-semibold">BuildSafe Inc</div>
            <div className="text-gray-400 font-semibold">Industrial Partners</div>
            <div className="text-gray-400 font-semibold">SafetyFirst Ltd</div>
          </div>
        </div>
      </div>
    </section>
  );
}
