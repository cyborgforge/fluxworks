export function WhySection() {
  const features = [
    {
      icon: "⚪",
      title: "Modular architecture",
      desc: "Pick only what you need. Scale specific modules without disrupting existing workflows.",
    },
    {
      icon: "💳",
      title: "Centralised billing",
      desc: "One dashboard for all subscriptions, payments, and invoices across all products and branches.",
    },
    {
      icon: "🔐",
      title: "Activation-based access control",
      desc: "Granular role-based permissions down to module and branch level. Change instantly.",
    },
    {
      icon: "☁️",
      title: "Scalable & future-ready",
      desc: "Modern cloud infrastructure. No server headaches, no downtime. Built for 10x growth.",
    },
  ];

  const metrics = [
    { value: "50+", label: "Modules", color: "text-accent" },
    { value: "99.9%", label: "Uptime SLA", color: "text-accent2" },
    { value: "<2min", label: "Response time", color: "text-accent" },
    { value: "24/7", label: "Support", color: "text-accent2" },
  ];

  return (
    <section className="py-22 px-12 bg-bg2">
      <div className="max-w-[1200px] mx-auto w-full">
        <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
          Why FluxWorks
        </span>
        <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold tracking-[-1.2px] leading-[1.1] mb-3.5 text-text">
          We don't just ship software —
          <br />
          we build partnerships
        </h2>

        <div className="grid grid-cols-2 gap-14 items-start mt-13">
          {/* Left - Features */}
          <div className="flex flex-col">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`py-5 border-b border-border flex gap-4 items-start cursor-default group ${
                  index === 0 ? "pt-0" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-[10px] bg-bg2 border border-border flex items-center justify-center text-[17px] shrink-0 transition-all group-hover:bg-accent-dim group-hover:border-accent/25">
                  {feature.icon}
                </div>
                <div>
                  <div className="font-display text-[15px] font-bold mb-1.5 tracking-tight">
                    {feature.title}
                  </div>
                  <div className="text-[13.5px] text-text2 leading-relaxed">
                    {feature.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Card */}
          <div className="sticky top-[84px]">
            <div className="bg-background border-[1.5px] border-border rounded-[22px] shadow-[var(--shadow-md)] p-6.5 overflow-hidden">
              <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-2.5 block font-medium">
                Platform metrics
              </span>

              <div className="grid grid-cols-2 gap-2.5 mt-4">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-bg2 border border-border rounded-[10px] p-3.5"
                  >
                    <div
                      className={`font-display text-2xl font-extrabold mb-0.5 tracking-tight ${metric.color}`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-text3 font-mono">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial mini */}
              <div className="mt-4 p-3.5 bg-accent-dim border border-accent/15 rounded-[10px]">
                <div className="text-[12.5px] text-text2 leading-relaxed italic mb-2.5">
                  "FluxWorks cut our billing time by 70% and inventory errors went to near zero in the first month."
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-br from-accent to-accent2 shrink-0" />
                  <div className="text-[12.5px] font-semibold text-text">
                    Apollo Pharmacy, Chennai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
