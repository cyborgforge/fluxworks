import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

const values = [
  {
    icon: "○",
    title: "Modular architecture",
    desc: "Pick only what you need. No bloated bundles. Scale without touching what already works.",
    bg: "bg-accent-dim",
  },
  {
    icon: "💳",
    title: "Centralised billing",
    desc: "One dashboard across all products, branches, and subscriptions. Clean and transparent.",
    bg: "bg-accent2-dim",
  },
  {
    icon: "🔐",
    title: "Activation-based access",
    desc: "Granular, role-based permissions to module and branch level. Change instantly.",
    bg: "bg-accent3-dim",
  },
  {
    icon: "☁️",
    title: "Scalable & future-ready",
    desc: "Modern cloud infrastructure. 99.9% uptime, auto backups, built for 10x growth.",
    bg: "bg-purple-dim",
  },
  {
    icon: "🇮🇳",
    title: "Built for India",
    desc: "GST-ready, UPI integration, multi-language support. Indian compliance from day one.",
    bg: "bg-accent-dim",
  },
  {
    icon: "🤝",
    title: "Dedicated onboarding",
    desc: "Every client gets an implementation partner. Data migration, training, go-live support.",
    bg: "bg-accent2-dim",
  },
];

const metrics = [
  { value: "450+", label: "Active clients", color: "text-accent" },
  { value: "45k+", label: "Daily active users", color: "text-accent2" },
  { value: "100+", label: "Softwares shipped", color: "text-accent3" },
  { value: "99.9%", label: "Uptime SLA", color: "text-accent" },
];

const testimonials = [
  {
    stars: 5,
    text: "FluxWorks cut our billing time by 70% and inventory errors went near zero in the first month. The onboarding team was exceptional.",
    name: "Ravi Kumar",
    org: "Apollo Pharmacy, Chennai",
    avatar: "RK",
    gradient: "from-[#2563eb] to-[#06b6d4]",
  },
  {
    stars: 5,
    text: "The clinic suite is exactly what we needed — EMR, appointments, and billing all talking to each other. Our patients notice the difference.",
    name: "Dr. Priya Nair",
    org: "Green Cross Clinic, Kochi",
    avatar: "PN",
    gradient: "from-[#059669] to-[#10b981]",
  },
  {
    stars: 5,
    text: "We went live in under a week. Modular pricing meant we only paid for what we use. Couldn't ask for a better partner.",
    name: "Suresh Mehta",
    org: "MedPlus Pharma, Mumbai",
    avatar: "SM",
    gradient: "from-[#ea580c] to-[#f59e0b]",
  },
];

const team = [
  { initials: "AK", name: "Arjun K.", role: "Founder & CEO", gradient: "from-[#2563eb] to-[#06b6d4]" },
  { initials: "VR", name: "Vanitha R.", role: "Head of Engineering", gradient: "from-[#059669] to-[#10b981]" },
  { initials: "MS", name: "Muthu S.", role: "Product Lead", gradient: "from-[#ea580c] to-[#f59e0b]" },
  { initials: "DL", name: "Deepa L.", role: "Customer Success", gradient: "from-[#7c3aed] to-[#a855f7]" },
];

export default function WhyUsPage() {
  return (
    <div className="pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0f9ff] to-[#e0eeff] border-b border-border">
        <div className="py-22 px-12">
          <div className="max-w-[1200px] mx-auto w-full">
            <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
              Why FluxWorks
            </span>
            <h1 className="font-display text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-1.5px] leading-[1.08] mb-4 text-text max-w-[680px]">
              We don't just ship software — we build{" "}
              <span className="text-accent2">partnerships</span>
            </h1>
            <p className="text-base text-text2 leading-relaxed font-normal max-w-[580px] mt-3">
              Behind every FluxWorks deployment is a team that stays involved — from onboarding to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-22 px-12 bg-background">
        <div className="max-w-[1200px] mx-auto w-full">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
            Our values
          </span>
          <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold tracking-[-1.2px] leading-[1.1] mb-3.5 text-text">
            Built different, by design
          </h2>

          <div className="grid grid-cols-3 gap-4 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background border-[1.5px] border-border rounded-[16px] p-6.5 transition-all cursor-default hover:border-accent hover:shadow-[0_0_0_4px_var(--accent-dim)] hover:-translate-y-0.5"
              >
                <div
                  className={`w-11 h-11 rounded-[10px] ${value.bg} flex items-center justify-center text-xl mb-3.5`}
                >
                  {value.icon}
                </div>
                <div className="font-display text-[15.5px] font-bold mb-2 tracking-tight">
                  {value.title}
                </div>
                <div className="text-[13.5px] text-text2 leading-relaxed">
                  {value.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-22 px-12 bg-bg2 border-t border-border">
        <div className="max-w-[1200px] mx-auto w-full">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
            By the numbers
          </span>
          <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold tracking-[-1.2px] leading-[1.1] mb-3.5 text-text">
            Trusted across India
          </h2>

          <div className="grid grid-cols-4 bg-border rounded-[16px] overflow-hidden border-[1.5px] border-border gap-px mt-12">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-background py-9 px-6 text-center">
                <div
                  className={`font-display text-[44px] font-extrabold tracking-[-2px] leading-none mb-1.5 ${metric.color}`}
                >
                  {metric.value}
                </div>
                <div className="text-[13.5px] text-text2">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-22 px-12 bg-background">
        <div className="max-w-[1200px] mx-auto w-full">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
            Testimonials
          </span>
          <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold tracking-[-1.2px] leading-[1.1] mb-3.5 text-text">
            Results that speak for themselves
          </h2>

          <div className="grid grid-cols-3 gap-4.5 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background border-[1.5px] border-border rounded-[16px] p-6.5 transition-colors hover:border-border2"
              >
                <div className="text-amber-500 text-sm mb-3 tracking-[2px]">
                  {"★".repeat(testimonial.stars)}
                </div>
                <div className="text-[13.5px] text-text2 leading-relaxed italic mb-4.5">
                  "{testimonial.text}"
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-xs font-bold text-white shrink-0`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-[13.5px] font-semibold tracking-tight">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-text3">{testimonial.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-22 px-12 bg-bg2 border-t border-border">
        <div className="max-w-[1200px] mx-auto w-full">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
            The team
          </span>
          <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold tracking-[-1.2px] leading-[1.1] mb-3.5 text-text">
            Engineers who care about your business
          </h2>

          <div className="grid grid-cols-4 gap-4 mt-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-background border-[1.5px] border-border rounded-[16px] p-6 text-center transition-all hover:border-border2 hover:shadow-[var(--shadow)]"
              >
                <div
                  className={`w-17 h-17 rounded-full bg-gradient-to-br ${member.gradient} mx-auto mb-3.5 flex items-center justify-center font-display font-extrabold text-xl text-white`}
                >
                  {member.initials}
                </div>
                <div className="font-display text-[15px] font-bold mb-1 tracking-tight">
                  {member.name}
                </div>
                <div className="text-xs text-text3 font-mono">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#2563eb] text-center py-25 px-12">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-display text-[clamp(28px,4vw,50px)] font-extrabold tracking-[-1.5px] text-white mb-3.5">
            Ready to build together?
          </h2>
          <p className="text-[17px] text-white/70 mb-9">
            Book a demo and go live in days, not months.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent bg-white border-none rounded-[10px] px-5.5 py-3 transition-all hover:bg-[#f0f5ff]"
            >
              Book a demo
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[14.5px] font-medium text-white/70 bg-transparent border-[1.5px] border-white/20 rounded-[10px] px-6 py-3 transition-all hover:border-white/40 hover:text-white"
            >
              View products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
