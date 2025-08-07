export default function Stats() {
  const stats = [
    { value: "10,000+", label: "Hours Saved" },
    { value: "50+", label: "Companies" },
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "100%", label: "Compliance" }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20" data-testid={`stat-${index}`}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
