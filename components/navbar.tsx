"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", key: "home" },
    { href: "/products", label: "Products", key: "products" },
    { href: "/why-us", label: "Why us", key: "why-us" },
    { href: "/contact", label: "Contact", key: "contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] h-16 flex items-center justify-between px-12 bg-white/95 backdrop-blur-md border-b border-border">
      <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-display font-extrabold text-[15px] text-white shrink-0">
          F
        </div>
        <span className="font-display font-bold text-[17px] text-text tracking-tight">
          FluxWorks
        </span>
      </Link>

      <div className="flex items-center">
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`text-sm font-medium px-3.5 py-1.5 rounded-[10px] transition-colors ${
              isActive(link.href)
                ? "text-accent"
                : "text-text2 hover:text-text hover:bg-bg2"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <Link
          href="/login"
          className="text-[13.5px] font-medium text-text2 bg-transparent border border-border rounded-[10px] px-4 py-1.5 transition-all hover:text-text hover:border-border2 hover:bg-bg2"
        >
          Log in
        </Link>
        <Link
          href="/contact"
          className="text-[13.5px] font-semibold text-white bg-accent border-none rounded-[10px] px-4.5 py-2 transition-all hover:bg-accent-hover tracking-tight"
        >
          Book a demo
        </Link>
      </div>
    </nav>
  );
}
