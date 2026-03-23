import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProductsSection() {
  const products = [
    {
      gradient: "from-accent2 to-accent",
      status: "Active",
      statusClass: "bg-accent2-dim border-accent2/20 text-accent2",
      icon: "💊",
      title: "Pharmacy Suite",
      desc: "End-to-end pharmacy ops — POS, inventory, delivery, online orders, and staff management.",
      tags: ["Outlet", "POS", "HRMS", "Inventory", "Delivery"],
      isActive: true,
    },
    {
      gradient: "from-accent3 to-[#f59e0b]",
      status: "Coming soon",
      statusClass: "bg-accent3-dim border-accent3/20 text-accent3",
      icon: "🏪",
      title: "Retail Suite",
      desc: "Multi-store retail with inventory sync, CRM, analytics, and online ordering.",
      tags: ["Multi-Store", "CRM", "Analytics", "Billing"],
      isActive: false,
      launchDate: "Launching Q3 2025",
    },
    {
      gradient: "from-accent to-purple",
      status: "Active",
      statusClass: "bg-accent2-dim border-accent2/20 text-accent2",
      icon: "🏥",
      title: "Clinic Suite",
      desc: "Healthcare practice management with digital records, appointments, prescriptions, and billing.",
      tags: ["EMR", "Prescription", "Billing", "Appointments"],
      isActive: true,
    },
  ];

  return (
    <section className="py-22 px-12 bg-bg2">
      <div className="max-w-[1200px] mx-auto w-full">
        <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
          Our products
        </span>
        <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold tracking-[-1.2px] leading-[1.1] mb-3.5 text-text">
          Suites built for your industry
        </h2>
        <p className="text-base text-text2 leading-relaxed font-normal max-w-[580px]">
          Pick the suite that fits. Start with core, add modules as you grow.
        </p>

        <div className="grid grid-cols-3 gap-5 mt-13">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-background border-[1.5px] border-border rounded-[22px] p-7.5 relative overflow-hidden transition-all cursor-default hover:border-accent hover:shadow-[var(--shadow-md)] hover:-translate-y-1"
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-[22px] bg-gradient-to-r ${product.gradient}`}
              />

              <div className="mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${product.statusClass}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-blink" />
                  {product.status}
                </span>
              </div>

              <div className="text-[30px] mb-3.5 mt-2">{product.icon}</div>
              <div className="font-display text-[19px] font-extrabold mb-2 tracking-tight">
                {product.title}
              </div>
              <div className="text-[13.5px] text-text2 leading-relaxed mb-4.5">
                {product.desc}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {product.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium text-text2 bg-bg2 border border-border rounded-md px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {product.isActive ? (
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent transition-all hover:gap-2.5"
                >
                  View product
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </Link>
              ) : (
                <span className="text-[13px] text-text3 font-medium">
                  {product.launchDate}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
