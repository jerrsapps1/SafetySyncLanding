import { FileText, Award, BarChart3, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Automated Recordkeeping",
    description: "Capture, verify, and store OSHA training records with zero manual effort. Our AI handles everything from data entry to validation.",
    icon: FileText,
    color: "blue"
  },
  {
    title: "Smart Certificate Generator",
    description: "Instantly create professional certificates & wallet cards that meet compliance standards. No design skills required.",
    icon: Award,
    color: "green"
  },
  {
    title: "Audit-Ready Dashboard",
    description: "Track expirations, instructor uploads, and more in one powerful admin view. Always prepared for inspections.",
    icon: BarChart3,
    color: "purple"
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-gray-950 to-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What You Get with SafetySync.ai
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to streamline OSHA compliance and eliminate manual record-keeping forever.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              blue: "from-blue-500 to-blue-600 group-hover:text-blue-300 text-blue-400",
              green: "from-green-500 to-green-600 group-hover:text-green-300 text-green-400",
              purple: "from-purple-500 to-purple-600 group-hover:text-purple-300 text-purple-400"
            };
            
            return (
              <div
                key={index}
                className="group backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-8 text-left shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-testid={`card-feature-${index}`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[1]} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold text-white mb-4 ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[2]} transition-colors`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className={`flex items-center ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[4]} font-medium text-sm`}>
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
