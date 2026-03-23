"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const switchAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
  };

  return (
    <div className="grid grid-cols-2 min-h-screen">
      {/* Left Side - Branding */}
      <div className="bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#2563eb] px-15 py-20 flex flex-col justify-center relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Brand */}
        <div className="flex items-center gap-2.5 mb-11 relative">
          <div className="w-8 h-8 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center font-display font-extrabold text-[15px] text-white">
            F
          </div>
          <span className="font-display font-bold text-[17px] text-white tracking-tight">
            FluxWorks
          </span>
        </div>

        <h1 className="font-display text-[clamp(26px,3vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.08] mb-4 text-white relative">
          Manage your
          <br />
          <span className="text-[#93c5fd]">business</span>
          <br />
          from anywhere
        </h1>

        <p className="text-[15px] text-white/65 leading-relaxed mb-9 max-w-[340px] relative">
          Log in to access all your modules, analytics, and team settings in one
          place.
        </p>

        <div className="flex flex-col gap-3 relative">
          {[
            "All modules in one dashboard",
            "Real-time analytics & reports",
            "Multi-branch management",
            "Role-based access control",
            "24/7 support access",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-white/70"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7] shrink-0" />
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col justify-center items-center px-12 py-20 bg-background">
        <div className="w-full max-w-[400px]">
          <div className="font-display text-[26px] font-extrabold tracking-tight mb-1.5 text-text">
            {authMode === "login" ? "Welcome back" : "Create account"}
          </div>
          <div className="text-sm text-text2 mb-6.5">
            {authMode === "login"
              ? "Sign in to your FluxWorks account"
              : "Start your FluxWorks journey"}
          </div>

          {/* Auth Tabs */}
          <div className="flex bg-bg2 border-[1.5px] border-border rounded-[10px] p-1 mb-5.5">
            <button
              onClick={() => switchAuth("login")}
              className={`flex-1 py-2 text-center text-[13.5px] font-semibold cursor-pointer rounded-[7px] transition-all border-none tracking-tight ${
                authMode === "login"
                  ? "bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]"
                  : "bg-transparent text-text2"
              }`}
            >
              Log in
            </button>
            <button
              onClick={() => switchAuth("signup")}
              className={`flex-1 py-2 text-center text-[13.5px] font-semibold cursor-pointer rounded-[7px] transition-all border-none tracking-tight ${
                authMode === "signup"
                  ? "bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]"
                  : "bg-transparent text-text2"
              }`}
            >
              Sign up
            </button>
          </div>

          {authMode === "login" ? (
            <div>
              {/* Google Button */}
              <button className="w-full flex items-center justify-center gap-2.5 py-3 bg-background border-[1.5px] border-border rounded-[9px] text-text text-sm font-medium cursor-pointer transition-all hover:border-border2 hover:bg-bg2 mb-1">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>

              {/* Or Divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-text3 font-mono">
                  or continue with email
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Login Form */}
              <div className="flex flex-col gap-1.5 mb-3.5">
                <label className="text-[11.5px] font-mono text-text2 font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@business.com"
                  className="bg-bg2 border-[1.5px] border-border rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)]"
                />
              </div>

              <div className="flex flex-col gap-1.5 mb-1">
                <label className="text-[11.5px] font-mono text-text2 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-bg2 border-[1.5px] border-border rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)]"
                />
              </div>

              <div className="text-right mb-4">
                <a className="text-[13px] text-accent font-medium cursor-pointer">
                  Forgot password?
                </a>
              </div>

              <button className="w-full py-3.5 rounded-[9px] text-[15px] font-bold bg-accent text-white border-none cursor-pointer transition-all tracking-tight hover:bg-accent-hover hover:shadow-[0_4px_14px_rgba(37,99,235,0.35)]">
                Sign in
              </button>

              <div className="text-center mt-4 text-[13.5px] text-text2">
                Don't have an account?{" "}
                <a
                  onClick={() => switchAuth("signup")}
                  className="text-accent font-semibold cursor-pointer"
                >
                  Sign up free
                </a>
              </div>
            </div>
          ) : (
            <div>
              {/* Sign Up Form */}
              <div className="grid grid-cols-2 gap-3 mb-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11.5px] font-mono text-text2 font-medium">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Ravi Kumar"
                    className="bg-bg2 border-[1.5px] border-border rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11.5px] font-mono text-text2 font-medium">
                    Business name
                  </label>
                  <input
                    type="text"
                    placeholder="Apollo Pharmacy"
                    className="bg-bg2 border-[1.5px] border-border rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-3.5">
                <label className="text-[11.5px] font-mono text-text2 font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@business.com"
                  className="bg-bg2 border-[1.5px] border-border rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)]"
                />
              </div>

              <div className="flex flex-col gap-1.5 mb-3.5">
                <label className="text-[11.5px] font-mono text-text2 font-medium">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98xxx xxxxx"
                  className="bg-bg2 border-[1.5px] border-border rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)]"
                />
              </div>

              <div className="flex flex-col gap-1.5 mb-3.5">
                <label className="text-[11.5px] font-mono text-text2 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  className="bg-bg2 border-[1.5px] border-border rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)]"
                />
              </div>

              <button className="w-full py-3.5 rounded-[9px] text-[15px] font-bold bg-accent text-white border-none cursor-pointer transition-all tracking-tight hover:bg-accent-hover hover:shadow-[0_4px_14px_rgba(37,99,235,0.35)]">
                Create account
              </button>

              <div className="text-center mt-4 text-[13.5px] text-text2">
                Already have an account?{" "}
                <a
                  onClick={() => switchAuth("login")}
                  className="text-accent font-semibold cursor-pointer"
                >
                  Log in
                </a>
              </div>
            </div>
          )}

          <div className="mt-7 text-center text-xs text-text3">
            © 2025 FluxWorks ·{" "}
            <Link href="#" className="text-text3 hover:text-text2">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="#" className="text-text3 hover:text-text2">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
