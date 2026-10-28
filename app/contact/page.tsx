import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Mail, Clock, ShieldCheck, MessageSquare, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries — Rate Global",
  description:
    "Get in touch with Rate Global. Request a project quote, schedule a technical architecture review, or speak directly with our senior engineering team.",
};

export default function ContactPage() {
  return (
    <main className="py-6 sm:py-10 px-3 sm:px-6">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-300/60 border border-slate-200/80">
        
        {/* Header Canvas */}
        <div className="hero-canvas relative overflow-hidden pt-6 pb-16 lg:pb-20 border-b border-slate-100">
          <div
            className="hero-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_92%_85%_at_50%_45%,#000_70%,transparent_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1080px] px-6 lg:px-10">
            <Navbar />

            {/* Header Content */}
            <div className="pt-16 pb-6 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-3.5 py-1 text-[12px] font-medium text-brand-blue mb-6">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Let&apos;s Start a Conversation</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-brand-charcoal leading-[1.15]">
                Tell us about your project, vision, and timeline.
              </h1>
              <p className="mt-6 text-[16px] sm:text-[18px] text-brand-slate leading-relaxed">
                Whether you need a full greenfield web application, an enterprise SaaS overhaul, or senior engineering muscle, we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>

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
