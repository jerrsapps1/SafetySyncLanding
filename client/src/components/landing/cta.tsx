import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "20px 20px"
          }}
        ></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to automate compliance?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join the SafetySync.ai early access program today and be among the first to experience effortless OSHA compliance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="inline-flex items-center justify-center bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-0.5"
            data-testid="button-request-demo-cta"
          >
            Request a Demo
            <MessageCircle className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            variant="outline"
            className="inline-flex items-center justify-center backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200"
            data-testid="button-contact-sales"
          >
            Contact Sales
          </Button>
        </div>
        
        <p className="text-blue-200 text-sm mt-8">
          No credit card required • 14-day free trial • Setup in minutes
        </p>
      </div>
    </section>
  );
}
