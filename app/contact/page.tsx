import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Mail, Clock, ShieldCheck, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries — Rate Global",
  description:
    "Get in touch with Rate Global. Request a project quote, schedule a technical architecture review, or speak directly with our senior engineering team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 py-4 sm:py-8 space-y-12 sm:space-y-16">
      {/* 1. Hero Island — Floating Elevated Canvas */}
      <div className="site-container">
        <div className="hero-canvas relative overflow-hidden rounded-[32px] bg-white pt-6 pb-10 sm:pb-12 shadow-sm ring-1 ring-slate-900/5 px-6 lg:px-10">
          {/* Architectural Grid Overlay */}
          <div
            className="hero-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_92%_85%_at_50%_45%,#000_70%,transparent_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />

            {/* Distinct Subpage Header with Breadcrumbs */}
            <SubpageHeader
              currentLabel="Contact"
              badge="Direct Engineering Channel"
              icon={MessageSquare}
              title="Tell us about your project, vision, and timeline."
              description="Whether you need a full greenfield web application, an enterprise SaaS overhaul, or senior engineering muscle, we're here to help."
            />
          </div>
        </div>
      </div>

      {/* 2. Contact Section & Interactive Channels */}
      <div className="site-container">
        <div className="rounded-[32px] bg-white shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
          {/* Quick Contact Info Strip */}
          <div className="border-b border-slate-100 bg-[#F8FAFD] py-6 px-6 lg:px-10">
          <div className="mx-auto max-w-[1080px] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand-blue shadow-sm">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-slate">Direct Inquiries</div>
                <a href="mailto:hello@rateglobal.com" className="text-[14px] font-medium text-brand-charcoal hover:text-brand-blue transition">
                  hello@rateglobal.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand-blue shadow-sm">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-slate">Response Guarantee</div>
                <div className="text-[14px] font-medium text-brand-charcoal">&lt; 24-Hour Business SLA</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand-blue shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-slate">Confidentiality</div>
                <div className="text-[14px] font-medium text-brand-charcoal">NDA &amp; Strict IP Protection</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Interactive Contact Section */}
        <ContactSection embedded={true} />

        {/* FAQ Accordion */}
        <FAQSection />
        </div>
      </div>

      {/* Consistent Company Footer */}
      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
