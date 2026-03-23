export function BuildSection() {
  const buildCards = [
    {
      icon: "🖥",
      bg: "bg-accent-dim",
      title: "POS & Billing",
      desc: "Complete point-of-sale with GST billing, barcode scanning, and multi-tender payment support.",
      tag: "Core module",
      tagColor: "text-accent2",
    },
    {
      icon: "📦",
      bg: "bg-accent2-dim",
      title: "Inventory Management",
      desc: "Real-time stock tracking, reorder alerts, expiry management, and multi-location sync.",
      tag: "Core module",
      tagColor: "text-accent2",
    },
    {
      icon: "🛒",
      bg: "bg-accent3-dim",
      title: "Online Ordering",
      desc: "Branded web and mobile ordering portals — no third-party marketplace dependency.",
      tag: "Add-on module",
      tagColor: "text-accent3",
    },
    {
      icon: "👥",
      bg: "bg-purple-dim",
      title: "HRMS & User Management",
      desc: "Attendance, payroll, leave management, and role-based access across all modules.",
      tag: "Add-on module",
      tagColor: "text-accent3",
    },
  ];

  return (
    <section className="py-22 px-12 bg-background">
      <div className="max-w-[1200px] mx-auto w-full">
        <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
          What we build
        </span>
        <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold tracking-[-1.2px] leading-[1.1] mb-3.5 text-text">
          Software that works
          <br />
          the way you do
        </h2>
        <p className="text-base text-text2 leading-relaxed font-normal max-w-[580px]">
          Every module is built ground-up for the Indian market — GST-ready, multi-user, deployable in days.
        </p>

        <div className="grid grid-cols-4 gap-4 mt-13">
          {buildCards.map((card, index) => (
            <div
              key={index}
              className="bg-background border-[1.5px] border-border rounded-[16px] p-7 px-6 transition-all cursor-default hover:border-accent hover:shadow-[0_0_0_4px_var(--accent-dim)] hover:-translate-y-0.5"
            >
              <div
                className={`w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-4 ${card.bg}`}
              >
                {card.icon}
              </div>
              <div className="font-display text-[15.5px] font-bold mb-1.5 tracking-tight">
                {card.title}
              </div>
              <div className="text-[13px] text-text2 leading-relaxed">
                {card.desc}
              </div>
              <div className={`mt-3.5 text-[11px] font-mono font-semibold ${card.tagColor}`}>
                → {card.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
