"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

const SUITES = {
  pharmacy: {
    label: "Pharmacy Management Suite",
    emoji: "💊",
    statusCls: "bg-accent2-dim border-accent2/20 text-accent2",
    status: "Active",
    desc: "End-to-end pharmacy operations — POS, inventory, delivery, and staff management. Go fully digital in days.",
    stats: [
      { v: "2,847", l: "Orders/day", c: "text-accent" },
      { v: "₹84.2K", l: "Daily revenue", c: "text-accent2" },
      { v: "1,234", l: "Customers", c: "text-text" },
      { v: "Real-time", l: "Sync across devices", c: "text-accent3" },
    ],
    modules: [
      { i: "🖥", t: "POS & Billing", d: "Counter sales, barcode, GST billing, multi-tender.", tag: "core" },
      { i: "📦", t: "Inventory Management", d: "Real-time stock, reorder alerts, expiry tracking.", tag: "core" },
      { i: "🏪", t: "Outlet Management", d: "Multi-branch control and centralised reporting.", tag: "core" },
      { i: "🔐", t: "User Management", d: "Roles, permissions, audit logs, multi-user login.", tag: "core" },
      { i: "🚕", t: "Online Ordering & Delivery", d: "Branded ordering portal with delivery tracking.", tag: "addon" },
      { i: "👥", t: "HRMS", d: "Attendance, payroll, leave management, shifts.", tag: "addon" },
      { i: "📄", t: "Invoice & Billing", d: "GST-compliant invoicing, credit notes, payment tracking.", tag: "core" },
      { i: "🤝", t: "Vendor Management", d: "Supplier orders, payment terms, purchase history.", tag: "addon" },
      { i: "🌐", t: "Modern Website", d: "Branded pharmacy website with online product catalogue.", tag: "addon" },
    ],
  },
  clinic: {
    label: "Clinic Management Suite",
    emoji: "🏥",
    statusCls: "bg-accent2-dim border-accent2/20 text-accent2",
    status: "Active",
    desc: "Healthcare practice management — digital records, appointments, prescriptions, and billing that work together.",
    stats: [
      { v: "500+", l: "Appointments/day", c: "text-accent" },
      { v: "₹1.2L", l: "Billing processed", c: "text-accent2" },
      { v: "8,000+", l: "Patient records", c: "text-text" },
      { v: "HIPAA", l: "Compliant storage", c: "text-accent3" },
    ],
    modules: [
      { i: "📋", t: "EMR / Patient Records", d: "Digital health records, visit history, lab results.", tag: "core" },
      { i: "📅", t: "Appointments", d: "Online & walk-in scheduling, reminders, waitlist.", tag: "core" },
      { i: "💳", t: "Billing & Invoicing", d: "OPD/IPD billing, insurance claims, reconciliation.", tag: "core" },
      { i: "🔐", t: "User Management", d: "Doctor, nurse, admin roles with module permissions.", tag: "core" },
      { i: "💊", t: "Digital Prescription", d: "e-Rx with drug interaction checks and dosage guides.", tag: "addon" },
      { i: "🔬", t: "Lab Integration", d: "Test requests, result uploads, patient notifications.", tag: "addon" },
      { i: "📹", t: "Teleconsultation", d: "Built-in video consultation with follow-up tools.", tag: "addon" },
      { i: "🏥", t: "In-house Pharmacy", d: "Clinic-attached dispensary with inventory and billing.", tag: "addon" },
    ],
  },
  retail: {
    label: "Retail Suite",
    emoji: "🏪",
    statusCls: "bg-accent3-dim border-accent3/20 text-accent3",
    status: "Coming Q3 2025",
    desc: "Multi-store retail management with inventory sync, CRM, and online ordering — built for Indian retail chains.",
    stats: [
      { v: "Multi", l: "Store management", c: "text-accent" },
      { v: "Real-time", l: "Inventory sync", c: "text-accent2" },
      { v: "CRM", l: "Customer profiles", c: "text-text" },
      { v: "Q3 2025", l: "Launch date", c: "text-accent3" },
    ],
    modules: [
      { i: "🖥", t: "POS & Billing", d: "Counter sales, multi-tender, GST billing, close reports.", tag: "core" },
      { i: "📦", t: "Inventory Management", d: "Multi-store sync, reorder points, variants & SKUs.", tag: "core" },
      { i: "🏪", t: "Admin Panel", d: "Multi-store dashboard, cross-branch analytics.", tag: "core" },
      { i: "🔐", t: "User Management", d: "Role-based access across all stores and modules.", tag: "core" },
      { i: "🛒", t: "Online Ordering", d: "E-commerce with home delivery and store pickup.", tag: "addon" },
      { i: "👤", t: "CRM", d: "Customer profiles, purchase history, loyalty programs.", tag: "addon" },
      { i: "📈", t: "Analytics Dashboard", d: "Sales trends, margin analysis, bestseller reports.", tag: "addon" },
      { i: "👥", t: "HRMS", d: "Staff attendance, payroll, shift scheduling.", tag: "addon" },
    ],
  },
};

type SuiteKey = keyof typeof SUITES;

export default function ProductsPage() {
  const [activeSuite, setActiveSuite] = useState<SuiteKey>("pharmacy");
  const suite = SUITES[activeSuite];

  return (
    <div className="pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f8faff] to-[#eef3ff] border-b border-border">
        <div className="py-22 px-12 pb-13">
          <div className="max-w-[1200px] mx-auto w-full">
            {/* Suite Tabs */}
            <div className="flex gap-1 bg-background border-[1.5px] border-border rounded-[16px] p-1.5 w-fit mb-9 shadow-[var(--shadow)]">
              {(Object.keys(SUITES) as SuiteKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSuite(key)}
                  className={`px-5.5 py-2.5 rounded-[10px] text-sm font-semibold cursor-pointer transition-all border-none flex items-center gap-2 tracking-tight ${
                    activeSuite === key
                      ? "bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]"
                      : "bg-transparent text-text2 hover:text-text hover:bg-bg2"
                  }`}
                >
                  {SUITES[key].emoji} {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>

            {/* Hero Content */}
            <div className="mb-4.5">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${suite.statusCls}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-blink" />
                {suite.status}
              </span>
            </div>
            <h1 className="font-display text-[clamp(30px,4.5vw,54px)] font-extrabold tracking-[-2px] leading-[1.06] mb-3.5 text-text">
              {suite.emoji} {suite.label}
            </h1>
            <p className="text-[17px] text-text2 leading-relaxed max-w-[540px] mb-7">
              {suite.desc}
            </p>
            <div className="flex gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-white bg-accent border-none rounded-[10px] px-6 py-3 transition-all tracking-tight hover:bg-accent-hover">
                Request demo
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[14.5px] font-medium text-text bg-white border-[1.5px] border-border rounded-[10px] px-6 py-3 transition-all hover:border-border2 hover:bg-bg2">
                Contact sales
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3.5 mt-11">
              {suite.stats.map((stat, index) => (
                <div key={index} className="bg-background border-[1.5px] border-border rounded-[16px] py-5 px-5.5 shadow-[var(--shadow)]">
                  <div className={`font-display text-[28px] font-extrabold tracking-tight mb-1 ${stat.c}`}>
                    {stat.v}
                  </div>
                  <div className="text-xs text-text3 font-mono">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-22 px-12 bg-background border-b border-border">
        <div className="max-w-[1200px] mx-auto w-full">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
            Modules included
          </span>
          <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold tracking-[-1.2px] leading-[1.1] mb-3.5 text-text">
            Everything you need, all in one place
          </h2>
          <p className="text-base text-text2 leading-relaxed font-normal max-w-[580px]">
            Fully integrated — no stitching third-party tools together.
          </p>

          <div className="grid grid-cols-3 bg-border rounded-[16px] overflow-hidden border-[1.5px] border-border gap-px mt-12">
            {suite.modules.map((module, index) => (
              <div key={index} className="bg-background p-6.5 transition-colors hover:bg-bg2">
                <div className="text-[22px] mb-3">{module.i}</div>
                <div className="font-display text-[15px] font-bold mb-1.5 tracking-tight">
                  {module.t}
                </div>
                <div className="text-[13px] text-text2 leading-relaxed">{module.d}</div>
                <div className={`mt-2.5 text-[11px] font-mono font-semibold ${module.tag === "core" ? "text-accent2" : "text-accent3"}`}>
                  → {module.tag === "core" ? "Core module" : "Add-on module"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-22 px-12 bg-bg2">
        <div className="max-w-[1200px] mx-auto w-full">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
            How it works
          </span>
          <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold tracking-[-1.2px] leading-[1.1] text-text">
            Go live in days, not months
          </h2>

          <div className="grid grid-cols-4 gap-5 mt-12 relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-[12%] right-[12%] h-[1.5px] bg-gradient-to-r from-transparent via-border2 to-transparent" />
            
            {[
              { n: "1", title: "Subscribe", desc: "Pick a plan and subscribe online in minutes." },
              { n: "2", title: "Get access", desc: "Receive credentials instantly after payment." },
              { n: "3", title: "Activate", desc: "Enter the code to unlock all selected modules." },
              { n: "4", title: "Grow", desc: "Add modules as you scale. We support you all the way." },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 rounded-full border-[1.5px] border-border bg-background flex items-center justify-center font-display text-[17px] font-extrabold text-accent mx-auto mb-4.5 relative z-10 shadow-[var(--shadow)]">
                  {step.n}
                </div>
                <div className="font-display text-[15px] font-bold mb-1.5 tracking-tight">
                  {step.title}
                </div>
                <div className="text-[13px] text-text2 leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-22 px-12 bg-background">
        <div className="max-w-[1200px] mx-auto w-full">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
            Pricing
          </span>
          <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold tracking-[-1.2px] leading-[1.1] mb-3.5 text-text">
            Simple, transparent pricing
          </h2>
          <p className="text-base text-text2 leading-relaxed font-normal max-w-[580px]">
            No hidden costs. We build a plan around your business.
          </p>

          <div className="grid grid-cols-3 gap-5 mt-12">
            {/* Starter */}
            <div className="bg-background border-[1.5px] border-border rounded-[22px] p-7.5 relative overflow-hidden transition-all hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5">
              <div className="font-display text-[19px] font-extrabold mb-1.5 tracking-tight">Starter</div>
              <div className="text-[13px] text-text2 mb-5">Perfect for small businesses getting started</div>
              <div className="font-display text-[28px] font-extrabold tracking-tight mb-1.5 text-text">
                Contact Us <span className="text-[13px] text-text3 font-normal font-body">/ per month</span>
              </div>
              <hr className="border-none border-t border-border my-4.5" />
              <div className="flex flex-col gap-1.5 mb-6">
                {["Up to 3 users", "Core modules included", "Email support", "Basic analytics"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13.5px] text-text2 py-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent2 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full inline-flex items-center justify-center gap-2 text-[14.5px] font-medium text-text bg-white border-[1.5px] border-border rounded-[10px] px-6 py-3 transition-all hover:border-border2 hover:bg-bg2">
                Get started
              </Link>
            </div>

            {/* Growth */}
            <div className="bg-background border-[1.5px] border-accent rounded-[22px] p-7.5 relative overflow-hidden shadow-[0_0_0_4px_var(--accent-dim)] transition-all hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5">
              <div className="absolute top-4.5 right-4.5 bg-accent text-white text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded-full">
                Most popular
              </div>
              <div className="font-display text-[19px] font-extrabold mb-1.5 tracking-tight">Growth</div>
              <div className="text-[13px] text-text2 mb-5">For growing businesses with expanding needs</div>
              <div className="font-display text-[28px] font-extrabold tracking-tight mb-1.5 text-text">
                Contact Us <span className="text-[13px] text-text3 font-normal font-body">/ per month</span>
              </div>
              <hr className="border-none border-t border-border my-4.5" />
              <div className="flex flex-col gap-1.5 mb-6">
                {["Up to 15 users", "All modules included", "Priority support", "Advanced analytics + API"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13.5px] text-text2 py-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent2 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full inline-flex items-center justify-center gap-2 text-[14.5px] font-semibold text-white bg-accent border-none rounded-[10px] px-6 py-3 transition-all tracking-tight hover:bg-accent-hover">
                Get started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-background border-[1.5px] border-border rounded-[22px] p-7.5 relative overflow-hidden transition-all hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5">
              <div className="font-display text-[19px] font-extrabold mb-1.5 tracking-tight">Enterprise</div>
              <div className="text-[13px] text-text2 mb-5">Custom solutions for large organisations</div>
              <div className="font-display text-[28px] font-extrabold tracking-tight mb-1.5 text-text">
                Custom <span className="text-[13px] text-text3 font-normal font-body">/ tailored plan</span>
              </div>
              <hr className="border-none border-t border-border my-4.5" />
              <div className="flex flex-col gap-1.5 mb-6">
                {["Unlimited users", "Custom modules & integrations", "Dedicated account manager", "On-premise deployment option"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13.5px] text-text2 py-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent2 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full inline-flex items-center justify-center gap-2 text-[14.5px] font-medium text-text bg-white border-[1.5px] border-border rounded-[10px] px-6 py-3 transition-all hover:border-border2 hover:bg-bg2">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
