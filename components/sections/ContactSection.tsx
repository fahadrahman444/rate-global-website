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
    <section id="contact" className="mx-auto max-w-[1140px]">
      {/* Structural Card Island */}
      <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 p-8 sm:p-12 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Trust Signals */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2.5">
              04 // Direct Inquiry &amp; Scoping
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              Start your project with a senior technical team.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Tell us about your product vision, timeline, and goals. We review every inquiry carefully and reply with technical feedback within 24 hours.
            </p>

            {/* Trust Points */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-slate-900">
                    &lt; 24-Hour Response SLA
                  </h4>
                  <p className="text-[13px] text-slate-500">
                    Direct feedback from senior full-stack developers, not automated sales reps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-slate-900">
                    Strict NDA &amp; IP Protection
                  </h4>
                  <p className="text-[13px] text-slate-500">
                    100% of the intellectual property, designs, and code belong entirely to you upon completion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-slate-900">
                    Direct Engineering Channel
                  </h4>
                  <p className="text-[13px] text-slate-500">
                    Reach us directly at <span className="text-brand-blue font-medium">hello@rateglobal.com</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-8">
              
              {success ? (
                <div className="text-center py-10" role="status">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <CheckCircle className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-slate-600 text-[14px] max-w-md mx-auto mb-6">
                    Thank you! An engineer will review your project requirements and respond within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-50 min-h-[44px]"
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
                      <label htmlFor="name" className="block text-[12.5px] font-medium text-slate-900 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[12.5px] font-medium text-slate-900 mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  {/* Service Requirement Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-[12.5px] font-medium text-slate-900 mb-1.5">
                      Required Service Discipline
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[14px] text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    >
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <span className="block text-[12.5px] font-medium text-slate-900 mb-2">
                      Estimated Project Budget
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition min-h-[44px] inline-flex items-center justify-center ${
                              isSelected
                                ? "bg-slate-900 text-white shadow-xs font-semibold"
                                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-[12.5px] font-medium text-slate-900 mb-1.5">
                      Project Goals &amp; Scope Overview
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about what you want to build, current challenges, and ideal timeline..."
                      className="w-full rounded-xl border border-slate-200 bg-white p-4 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed transition py-3 px-6 text-[14px] font-medium text-white shadow-md shadow-blue-500/25 min-h-[48px]"
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
                    We respect your privacy. No marketing spam, ever.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Pathway to FAQ & Full Contact Hub */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 text-center sm:text-left">
            Have questions about pricing, IP ownership, sprint timelines, or our tech stack?
          </p>
          <Link
            href="/contact#faq"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 hover:text-brand-blue px-6 py-2.5 text-[13px] font-medium text-slate-800 shadow-2xs transition min-h-[44px]"
          >
            <span>Read Client FAQs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
