import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import EarlyAccessForm from "@/components/ui/early-access-form";
import { useState } from "react";

export default function CTA() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showSalesForm, setShowSalesForm] = useState(false);
  
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white py-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "20px 20px"
          }}
        ></div>
      </div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to automate compliance?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join the SafetySync.ai early access program today and be among the first to experience effortless OSHA compliance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => setShowDemoForm(true)}
            className="inline-flex items-center justify-center bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-white/25 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
            data-testid="button-request-demo-cta"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Request a Demo</span>
            <MessageCircle className="w-5 h-5 ml-2 relative transition-transform group-hover:rotate-12" />
          </Button>
          <Button 
            onClick={() => setShowSalesForm(true)}
            variant="outline"
            className="inline-flex items-center justify-center backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 group relative overflow-hidden"
            data-testid="button-contact-sales"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Contact Sales</span>
          </Button>
        </div>
        
        <p className="text-blue-200 text-sm mt-8">
          No credit card required • 14-day free trial • Setup in minutes
        </p>
      </div>
      
      <EarlyAccessForm
        signupType="demo_request"
        isOpen={showDemoForm}
        onClose={() => setShowDemoForm(false)}
      />
      
      <EarlyAccessForm
        signupType="contact_sales"
        isOpen={showSalesForm}
        onClose={() => setShowSalesForm(false)}
      />
    </section>
  );
}
