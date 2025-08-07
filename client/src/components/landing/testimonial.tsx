export default function Testimonial() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-xl md:text-2xl font-medium text-gray-300 mb-8 leading-relaxed" data-testid="text-testimonial-quote">
          "SafetySync.ai has transformed how we handle OSHA compliance. What used to take our team weeks now happens automatically. It's been a game-changer for our operations."
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold" data-testid="img-testimonial-avatar">
            JD
          </div>
          <div className="text-left">
            <div className="text-white font-semibold" data-testid="text-testimonial-name">John Doe</div>
            <div className="text-gray-400 text-sm" data-testid="text-testimonial-title">Safety Director, ACME Corp</div>
          </div>
        </div>
      </div>
    </section>
  );
}
