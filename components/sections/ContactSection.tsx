"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail, Clock, ShieldCheck, CheckCircle, Loader2, ArrowRight } from "lucide-react";

const budgetOptions = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k+"];

const serviceOptions = [
  "Custom Web Application",
  "SaaS Platform Engineering",
  "UI/UX & Design System",
  "Web Performance Optimization",
  "Full Web Redesign",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: serviceOptions[0],
    budget: budgetOptions[1],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return; // Mutation lock prevents double submission race condition

    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        service: serviceOptions[0],
        budget: budgetOptions[1],
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-white py-24 px-6 lg:px-12 border-t border-slate-100">
      <div className="mx-auto max-w-[1080px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Trust Signals */}
          <div className="lg:col-span-5">
            <div className="text-[12.5px] font-semibold uppercase tracking-wider text-brand-blue mb-2.5">
              Let&apos;s Build Together
            </div>
            <h2 className="font-display text-[36px] sm:text-[44px] font-bold text-brand-charcoal tracking-tight leading-[1.15] mb-5">
              Start your project with a senior technical team.
            </h2>
            <p className="text-[15px] leading-relaxed text-brand-slate mb-8">
              Tell us about your product vision, timeline, and goals. We review every inquiry carefully and reply with technical feedback within 24 hours.
            </p>

            {/* Trust Points */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-brand-charcoal">Rapid Response SLA</h4>
                  <p className="text-[12.5px] text-brand-slate">Direct reply from an engineering lead within 1 business day.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-brand-charcoal">NDA & IP Protection</h4>
                  <p className="text-[12.5px] text-brand-slate">Strict confidentiality and 100% client intellectual property ownership.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-brand-charcoal">Direct Inquiry Email</h4>
                  <p className="text-[12.5px] text-brand-blue font-medium">hello@rateglobal.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/60 p-7 sm:p-9 shadow-sm">
              
              {success ? (
                <div className="py-12 text-center" role="alert" aria-live="polite">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <CheckCircle className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-[22px] font-bold text-brand-charcoal mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-[14px] text-brand-slate max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out. A Rate Global lead architect is reviewing your specifications and will follow up with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-[13px] font-medium text-brand-charcoal hover:bg-slate-50"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {error && (
                    <div
                      className="rounded-xl bg-red-50 border border-red-200 p-3.5 text-[13px] text-red-700"
                      role="alert"
                    >
                      {error}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[12.5px] font-medium text-brand-charcoal mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Johnson"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-brand-charcoal placeholder-slate-400 focus:border-brand-blue focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20 transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[12.5px] font-medium text-brand-charcoal mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-brand-charcoal placeholder-slate-400 focus:border-brand-blue focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20 transition"
                      />
                    </div>
                  </div>

                  {/* Service Requirement Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-[12.5px] font-medium text-brand-charcoal mb-1.5">
                      Required Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-brand-charcoal focus:border-brand-blue focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20 transition"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Budget Pills */}
                  <div>
                    <label className="block text-[12.5px] font-medium text-brand-charcoal mb-2">
                      Estimated Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition min-h-[44px] inline-flex items-center ${
                              isSelected
                                ? "bg-brand-blue text-white shadow-xs"
                                : "bg-white border border-slate-200 text-brand-slate hover:border-slate-300"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[12.5px] font-medium text-brand-charcoal mb-1.5">
                      Project Details & Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you are building, your expected timeline, and any specific requirements..."
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-brand-charcoal placeholder-slate-400 focus:border-brand-blue focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20 transition resize-y"
                    />
                  </div>

                  {/* Submit Button with Mutation Lock */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue hover:bg-brand-darkblue disabled:opacity-60 disabled:cursor-not-allowed transition py-3 px-6 text-[14px] font-medium text-white shadow-md shadow-blue-500/25 min-h-[48px]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11.5px] text-slate-400">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Pathway to FAQ & Full Contact Hub */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-brand-slate text-center sm:text-left">
            Have questions about pricing, IP ownership, sprint timelines, or our tech stack?
          </p>
          <Link
            href="/contact#faq"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:border-blue-300 hover:text-brand-blue px-6 py-2.5 text-[13px] font-medium text-brand-charcoal shadow-2xs transition min-h-[44px]"
          >
            <span>Read Client FAQs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
