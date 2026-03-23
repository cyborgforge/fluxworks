export function StatsSection() {
  const stats = [
    { value: "450", suffix: "+", label: "Clients across India" },
    { value: "45", suffix: "k+", label: "Daily active users" },
    { value: "100", suffix: "+", label: "Softwares shipped" },
    { value: "99.9", suffix: "%", label: "Uptime SLA" },
  ];

  return (
    <section className="py-22 px-12 bg-background">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-4 bg-border rounded-[16px] overflow-hidden border border-border gap-px">
          {stats.map((stat, index) => (
            <div key={index} className="bg-background py-10 px-7 text-center">
              <div className="font-display text-5xl font-extrabold tracking-[-2px] leading-none mb-1.5 text-text">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="text-sm text-text2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
