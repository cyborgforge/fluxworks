import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center px-12 py-16 pb-20 overflow-hidden bg-gradient-to-br from-white via-[#f0f5ff] to-[#e8f0fe]">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, #c7d7f5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
        }}
      />
      
      {/* Glow effect */}
      <div className="absolute -top-[200px] -right-[100px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.07)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-2 gap-18 items-center relative">
        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 rounded-full py-1.5 px-3.5 pl-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-accent2 animate-blink" />
            <span className="text-xs font-mono text-accent font-medium">
              Pharmacy Suite v2.0 — Now live
            </span>
          </div>
          
          <h1 className="font-display text-[clamp(36px,5vw,62px)] font-extrabold tracking-[-2.5px] leading-[1.03] mb-5 text-text">
            We build <span className="text-accent">scalable</span>
            <br />
            SaaS for <span className="text-accent2">modern</span>
            <br />
            businesses
          </h1>
          
          <p className="text-[17px] text-text2 leading-relaxed max-w-[440px] mb-9">
            Modular, production-ready software for pharmacy, clinic and retail — built for the way Indian businesses actually operate.
          </p>
          
          <div className="flex gap-3 flex-wrap mb-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-white bg-accent border-none rounded-[10px] px-6 py-3 transition-all tracking-tight hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
            >
              View Products
              <ArrowRight className="w-[15px] h-[15px]" strokeWidth={2.5} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[14.5px] font-medium text-text bg-white border-[1.5px] border-border rounded-[10px] px-6 py-3 transition-all hover:border-border2 hover:bg-bg2"
            >
              Book a Demo
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex">
              <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white bg-gradient-to-br from-[#2563eb] to-[#06b6d4]">
                RK
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[10px] font-bold text-white bg-gradient-to-br from-[#059669] to-[#10b981]">
                PN
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[10px] font-bold text-white bg-gradient-to-br from-[#7c3aed] to-[#a855f7]">
                SM
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[10px] font-bold text-white bg-gradient-to-br from-[#dc2626] to-[#f97316]">
                AT
              </div>
            </div>
            <span className="text-[13px] text-text3 font-medium">
              <strong className="text-text2">450+ businesses</strong> trust FluxWorks
            </span>
          </div>
        </div>
        
        {/* Right content - Dashboard card */}
        <div className="relative p-6 pr-0">
          <div className="bg-white border border-border rounded-[22px] shadow-[var(--shadow-md)] p-6 animate-float relative">
            <div className="flex items-center justify-between mb-4.5">
              <span className="font-display font-bold text-sm tracking-tight">
                Pharmacy Suite — Dashboard
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-accent2-dim border border-accent2/20 text-accent2">
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-blink" />
                Live
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-bg2 border border-border rounded-[10px] p-3">
                <div className="font-display text-xl font-extrabold leading-none mb-0.5 tracking-tight text-accent">
                  2,847
                </div>
                <div className="text-[11px] text-text3 font-mono">Orders today</div>
              </div>
              <div className="bg-bg2 border border-border rounded-[10px] p-3">
                <div className="font-display text-xl font-extrabold leading-none mb-0.5 tracking-tight text-accent2">
                  ₹84K
                </div>
                <div className="text-[11px] text-text3 font-mono">Revenue</div>
              </div>
              <div className="bg-bg2 border border-border rounded-[10px] p-3">
                <div className="font-display text-xl font-extrabold leading-none mb-0.5 tracking-tight text-accent3">
                  1,234
                </div>
                <div className="text-[11px] text-text3 font-mono">Customers</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1.5 mb-3.5">
              <span className="text-xs font-medium text-text2 bg-bg2 border border-border rounded-md px-2.5 py-0.5">
                POS
              </span>
              <span className="text-xs font-medium text-text2 bg-bg2 border border-border rounded-md px-2.5 py-0.5">
                Inventory
              </span>
              <span className="text-xs font-medium text-text2 bg-bg2 border border-border rounded-md px-2.5 py-0.5">
                Delivery
              </span>
              <span className="text-xs font-medium text-text2 bg-bg2 border border-border rounded-md px-2.5 py-0.5">
                HRMS
              </span>
            </div>
            
            <div className="text-xs text-text3 font-mono font-medium mb-1.5">Monthly growth</div>
            <div className="h-1.5 bg-bg3 rounded-full overflow-hidden my-3.5 mb-1.5">
              <div className="h-full w-0 rounded-full bg-gradient-to-r from-accent to-accent2 animate-grow" />
            </div>
            <div className="flex justify-between text-[11px] text-text3 font-mono">
              <span>Jan</span>
              <span className="text-accent2 font-semibold">+72%</span>
            </div>
            
            {/* Floating mini cards */}
            <div className="absolute -top-5 -right-4 bg-white border border-border rounded-[16px] px-3.5 py-2.5 shadow-[var(--shadow-md)] flex items-center gap-2.5 text-[12.5px] font-medium whitespace-nowrap animate-float-delay-1">
              <div className="w-7 h-7 rounded-lg bg-accent2-dim flex items-center justify-center text-sm shrink-0">
                ✓
              </div>
              <div>
                <div className="text-text font-semibold">Order synced</div>
                <div className="text-[11px] text-text3">Real-time across all outlets</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4.5 -left-4 bg-white border border-border rounded-[16px] px-3.5 py-2.5 shadow-[var(--shadow-md)] flex items-center gap-2.5 text-[12.5px] font-medium whitespace-nowrap animate-float-delay-2">
              <div className="w-7 h-7 rounded-lg bg-accent-dim flex items-center justify-center text-sm shrink-0">
                📦
              </div>
              <div>
                <div className="text-text font-semibold">Low stock alert</div>
                <div className="text-[11px] text-text3">Paracetamol — 12 units left</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
