export default function Stats() {
  const stats = [
    { value: "10,000+", label: "Hours Saved" },
    { value: "50+", label: "Companies" },
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "100%", label: "Compliance" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 border-y border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
