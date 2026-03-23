import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-text py-14 px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-5 gap-9 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 cursor-pointer mb-1">
              <div className="w-[30px] h-[30px] bg-accent rounded-[7px] flex items-center justify-center font-display font-extrabold text-sm text-white">
                F
              </div>
              <span className="font-display font-bold text-base text-[#f1f5f9] tracking-tight ml-2.5">
                FluxWorks
              </span>
            </Link>
            <p className="text-[13px] text-[#94a3b8] leading-relaxed my-3 max-w-[230px]">
              Building scalable SaaS for modern Indian businesses — pharmacy, clinic, and retail.
            </p>
            <div className="flex gap-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[#64748b] text-xs transition-all hover:border-white/25 hover:text-[#94a3b8]"
              >
                X
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[#64748b] text-xs transition-all hover:border-white/25 hover:text-[#94a3b8]"
              >
                in
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[#64748b] text-xs transition-all hover:border-white/25 hover:text-[#94a3b8]"
              >
                D
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[#64748b] text-xs transition-all hover:border-white/25 hover:text-[#94a3b8]"
              >
                G
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="font-display text-[13px] font-bold mb-3.5 text-[#f1f5f9]">
              Company
            </div>
            <Link href="/why-us" className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8]">
              About
            </Link>
            <a className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8] cursor-pointer">
              Blog
            </a>
            <a className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8] cursor-pointer">
              Careers
            </a>
            <Link href="/contact" className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8]">
              Contact
            </Link>
          </div>

          {/* Product */}
          <div>
            <div className="font-display text-[13px] font-bold mb-3.5 text-[#f1f5f9]">
              Product
            </div>
            <Link href="/products" className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8]">
              Overview
            </Link>
            <a className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8] cursor-pointer">
              Roadmap
            </a>
            <a className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8] cursor-pointer">
              Changelog
            </a>
            <Link href="/contact" className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8]">
              Book a demo
            </Link>
          </div>

          {/* Suites */}
          <div>
            <div className="font-display text-[13px] font-bold mb-3.5 text-[#f1f5f9]">
              Suites
            </div>
            <Link href="/products" className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8]">
              Pharmacy Suite
            </Link>
            <Link href="/products" className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8]">
              Clinic Suite
            </Link>
            <Link href="/products" className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8]">
              Retail Suite
            </Link>
          </div>

          {/* Resources */}
          <div>
            <div className="font-display text-[13px] font-bold mb-3.5 text-[#f1f5f9]">
              Resources
            </div>
            <a className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8] cursor-pointer">
              Documentation
            </a>
            <a className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8] cursor-pointer">
              GitHub
            </a>
            <Link href="/contact" className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8]">
              Support
            </Link>
            <a className="block text-[13px] text-[#64748b] mb-2.5 transition-colors hover:text-[#94a3b8] cursor-pointer">
              Status
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.07] pt-5">
          <p className="text-[13px] text-[#475569]">
            © 2025 FluxWorks. All rights reserved.
          </p>
          <p className="text-[13px] text-[#475569]">
            Made with care in Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
