export function MarqueeSection() {
  const items = [
    "Pharmacy Management",
    "POS & Billing",
    "Inventory Control",
    "Online Ordering",
    "Delivery Tracking",
    "Clinic EMR",
    "Appointments",
    "HRMS",
    "Retail Suite",
    "User Management",
    "99.9% Uptime",
  ];

  // Duplicate items for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="py-5.5 border-t border-b border-border bg-bg2 overflow-hidden">
      <div className="flex gap-9 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {allItems.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-2.5 text-text3 text-[13px] font-mono font-medium shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-accent opacity-50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
