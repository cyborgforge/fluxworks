"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.business.trim()) newErrors.business = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setSubmitError(payload?.error ?? "Failed to send message");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  return (
    <div className="pt-16">
      <Navbar />

      <section className="py-22 px-12 bg-background">
        <div className="max-w-[1200px] mx-auto w-full">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] mb-3.5 block font-medium">
            Contact us
          </span>
          <h1 className="font-display text-[clamp(30px,5vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.08] mb-4 text-text">
            Let's start a
            <br />
            <span className="text-accent">conversation</span>
          </h1>
          <p className="text-base text-text2 leading-relaxed font-normal max-w-[580px] mt-3">
            Questions about our products? Want a demo? Fill in the form — we'll
            get back within 24 hours.
          </p>

          <div className="grid grid-cols-[1fr_1.5fr] gap-12 mt-13">
            {/* Left Column - Contact Info */}
            <div>
              {/* Email */}
              <div className="bg-background border-[1.5px] border-border rounded-[10px] p-4.5 flex items-start gap-3.5 mb-3 transition-colors hover:border-border2">
                <div className="w-9.5 h-9.5 rounded-[9px] bg-accent-dim flex items-center justify-center text-lg shrink-0">
                  ✉️
                </div>
                <div>
                  <div className="font-mono text-[10px] text-text3 uppercase tracking-[0.07em] mb-1 font-medium">
                    Email
                  </div>
                  <div className="text-[13.5px] text-text font-medium leading-relaxed">
                    fluxworks.it@gmail.com
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-background border-[1.5px] border-border rounded-[10px] p-4.5 flex items-start gap-3.5 mb-3 transition-colors hover:border-border2">
                <div className="w-9.5 h-9.5 rounded-[9px] bg-accent2-dim flex items-center justify-center text-lg shrink-0">
                  📞
                </div>
                <div>
                  <div className="font-mono text-[10px] text-text3 uppercase tracking-[0.07em] mb-1 font-medium">
                    Phone
                  </div>
                  <div className="text-[13.5px] text-text font-medium leading-relaxed">
                    +91 97905 09690
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="bg-background border-[1.5px] border-border rounded-[10px] p-4.5 flex items-start gap-3.5 mb-3 transition-colors hover:border-border2">
                <div className="w-9.5 h-9.5 rounded-[9px] bg-accent3-dim flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <div>
                  <div className="font-mono text-[10px] text-text3 uppercase tracking-[0.07em] mb-1 font-medium">
                    Office
                  </div>
                  <div className="text-[13.5px] text-text font-medium leading-relaxed">
                    First Floor, No.176A, Palai Road,
                    <br />
                    Thoothukudi District,
                    <br />
                    Tamil Nadu — 628008
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-background border-[1.5px] border-border rounded-[10px] p-5 mt-1">
                <div className="font-display text-sm font-bold mb-3 tracking-tight">
                  Working hours
                </div>
                <div className="flex justify-between text-[13px] text-text2 py-2 border-b border-border">
                  <span>Monday – Friday</span>
                  <span className="text-text font-medium">
                    9:00 AM – 6:00 PM IST
                  </span>
                </div>
                <div className="flex justify-between text-[13px] text-text2 py-2 border-b border-border">
                  <span>Saturday</span>
                  <span className="text-text font-medium">
                    10:00 AM – 4:00 PM IST
                  </span>
                </div>
                <div className="flex justify-between text-[13px] text-text2 py-2">
                  <span>Sunday</span>
                  <span className="text-text3">Closed</span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-background border-[1.5px] border-border rounded-[22px] p-8.5 shadow-[var(--shadow-md)]">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="font-display text-[22px] font-extrabold mb-1.5 tracking-tight">
                    Send us a message
                  </div>
                  <div className="text-[13.5px] text-text2 mb-6">
                    We respond to all enquiries within one business day.
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3.5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11.5px] font-mono text-text2 font-medium">
                        Full name *
                      </label>
                      <input
                        type="text"
                        placeholder="Ravi Kumar"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`bg-bg2 border-[1.5px] rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)] ${
                          errors.name
                            ? "border-accent3 bg-[#fff7f5]"
                            : "border-border"
                        }`}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11.5px] font-mono text-text2 font-medium">
                        Business name *
                      </label>
                      <input
                        type="text"
                        placeholder="Apollo Pharmacy"
                        value={formData.business}
                        onChange={(e) =>
                          handleChange("business", e.target.value)
                        }
                        className={`bg-bg2 border-[1.5px] rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)] ${
                          errors.business
                            ? "border-accent3 bg-[#fff7f5]"
                            : "border-border"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3.5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11.5px] font-mono text-text2 font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="you@business.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`bg-bg2 border-[1.5px] rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)] ${
                          errors.email
                            ? "border-accent3 bg-[#fff7f5]"
                            : "border-border"
                        }`}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11.5px] font-mono text-text2 font-medium">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98xxx xxxxx"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="bg-bg2 border-[1.5px] border-border rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mb-3.5">
                    <label className="text-[11.5px] font-mono text-text2 font-medium">
                      Product interested in
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => handleChange("product", e.target.value)}
                      className="bg-bg2 border-[1.5px] border-border rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)]"
                    >
                      <option value="">Select a product</option>
                      <option>Pharmacy Management Suite</option>
                      <option>Clinic Management Suite</option>
                      <option>Retail Suite</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 mb-3.5">
                    <label className="text-[11.5px] font-mono text-text2 font-medium">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us about your business..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-bg2 border-[1.5px] border-border rounded-[9px] py-2.5 px-3.5 text-text text-sm transition-all placeholder:text-text4 focus:border-accent focus:bg-background focus:shadow-[0_0_0_3px_var(--accent-dim)] resize-y min-h-24"
                    />
                  </div>

                  {submitError ? (
                    <p className="text-xs text-accent3 mt-1 mb-1.5">
                      {submitError}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 text-[14.5px] font-semibold text-white bg-accent border-none rounded-[10px] px-6 py-3 mt-1.5 transition-all tracking-tight hover:bg-accent-hover cursor-pointer"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>

                  <p className="text-xs text-text3 mt-3 text-center">
                    By submitting you agree to our{" "}
                    <a href="#" className="text-accent">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-accent">
                      Terms of Service
                    </a>
                    .
                  </p>
                </form>
              ) : (
                <div className="text-center py-10 px-6">
                  <div className="text-[44px] mb-3.5">🎉</div>
                  <div className="font-display text-[22px] font-extrabold mb-2 tracking-tight">
                    Message sent!
                  </div>
                  <div className="text-sm text-text2 leading-relaxed">
                    Thanks for reaching out. We'll get back to you within 24
                    hours.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
