"use client";

import { useState } from "react";
import Link from "next/link";

export function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#2563eb] text-center py-25 px-12">
      <div className="max-w-[600px] mx-auto">
        <div className="font-mono text-[11px] text-white/50 uppercase tracking-[0.1em] mb-3.5">
          Get started
        </div>
        <h2 className="font-display text-[clamp(28px,4vw,50px)] font-extrabold tracking-[-1.5px] text-white mb-3.5">
          Ready to build together?
        </h2>
        <p className="text-[17px] text-white/70 mb-9">
          Join 450+ businesses running on FluxWorks. Go live in days, not months.
        </p>

        <div className="flex gap-2 max-w-[420px] mx-auto mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-white/10 border border-white/25 rounded-[10px] px-4 py-3 text-white text-sm transition-colors backdrop-blur-sm focus:border-white/60 placeholder:text-white/40 outline-none"
          />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent bg-white border-none rounded-[10px] px-5.5 py-3 whitespace-nowrap transition-all hover:bg-[#f0f5ff]"
          >
            Request Demo
          </Link>
        </div>
        <p className="text-xs text-white/35">
          No commitment. We'll reach out within 24 hours.
        </p>
      </div>
    </section>
  );
}
