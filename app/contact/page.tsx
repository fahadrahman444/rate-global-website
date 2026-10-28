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
    <main className="min-h-screen bg-slate-50/70 py-4 sm:py-8 px-3 sm:px-6 space-y-12">
      {/* Header Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 pt-6 pb-4 overflow-hidden relative">
          <Navbar />
          <SubpageHeader
            currentLabel="Contact"
            badge="Direct Engineering Channel"
            icon={MessageSquare}
            title="Tell us about your project, vision, and timeline."
            description="Whether you need a full greenfield web application, an enterprise SaaS overhaul, or senior engineering muscle, we're here to help."
          />
        </div>
      </div>

      {/* Quick Contact Info Strip Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-[32px] bg-white shadow-sm ring-1 ring-slate-900/5 py-6 px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Direct Inquiries</div>
                <a href="mailto:hello@rateglobal.com" className="text-sm font-semibold text-slate-900 hover:text-brand-blue transition">
                  hello@rateglobal.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Response Guarantee</div>
                <div className="text-sm font-semibold text-slate-900">&lt; 24-Hour Business SLA</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Confidentiality</div>
                <div className="text-sm font-semibold text-slate-900">NDA &amp; Strict IP Protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* FAQ Accordion Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
          <FAQSection />
        </div>
      </div>

      {/* Footer Island */}
      <div className="mx-auto max-w-[1140px] pb-6">
        <Footer />
      </div>
    </main>
  );
}
