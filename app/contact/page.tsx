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
    <main className="py-6 sm:py-10 px-3 sm:px-6">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-300/60 border border-slate-200/80">
        
        {/* Navigation Bar */}
        <div className="pt-4 px-6 lg:px-10">
          <Navbar />
        </div>

        {/* Distinct Subpage Header with Breadcrumbs */}
        <SubpageHeader
          currentLabel="Contact"
          badge="Direct Engineering Channel"
          icon={MessageSquare}
          title="Tell us about your project, vision, and timeline."
          description="Whether you need a full greenfield web application, an enterprise SaaS overhaul, or senior engineering muscle, we're here to help."
        />

        {/* Quick Contact Info Strip */}
        <div className="border-b border-slate-100 bg-[#F8FAFD] py-6 px-6 lg:px-12">
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
        <ContactSection />

        {/* FAQ Accordion */}
        <FAQSection />

        <Footer />
      </div>
    </main>
  );
}
