export default function Testimonial() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto text-center relative backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10">
        <blockquote className="text-xl md:text-2xl font-medium text-gray-300 mb-8 leading-relaxed" data-testid="text-testimonial-quote">
          "SafetySync.ai has transformed how we handle OSHA compliance. What used to take our team weeks now happens automatically. It's been a game-changer for our operations."
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/25" data-testid="img-testimonial-avatar">
            JH
          </div>
          <div className="text-left">
            <div className="text-white font-semibold" data-testid="text-testimonial-name">Jerry Hernandez SHEP, CSHO</div>
            <div className="text-gray-400 text-sm" data-testid="text-testimonial-title">Safety Director, Alamo Environmental</div>
          </div>
        </div>
      </div>
    </section>
  );
}
