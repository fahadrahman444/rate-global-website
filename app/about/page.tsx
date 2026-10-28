import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — High-Performing Digital Engineering",
  description:
    "Discover Rate Global's engineering philosophy, minimalist code standards, and how we build enterprise-grade web applications for modern brands.",
};

const values = [
  {
    icon: Zap,
    title: "Minimalist Code Architecture",
    description:
      "We adhere to pragmatic engineering: zero unnecessary abstractions, zero bloat, and minimal diffs. The cleanest code is the code that is simple, resilient, and easy to maintain.",
  },
  {
    icon: ShieldCheck,
    title: "Type Safety & Security First",
    description:
      "Strict TypeScript guarantees, automated security testing, sanitization, and enterprise compliance protect your digital assets and end-user data from vulnerabilities.",
  },
  {
    icon: Cpu,
    title: "Sub-Second Performance",
    description:
      "Every millisecond impacts conversion. We architect around Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms) with modern edge caching and modern bundle optimization.",
  },
  {
    icon: Sparkles,
    title: "Accessible & User-First",
    description:
      "Design systems built to WCAG 2.2 Level AA accessibility. Intuitive micro-interactions, responsive mobile-first typography, and seamless cross-browser resilience.",
  },
];

const milestones = [
  { metric: "99.99%", label: "System Uptime Delivered Across Client Work" },
  { metric: "<24 hrs", label: "Direct Engineering Response Guarantee" },
  { metric: "100%", label: "Client Codebase Ownership & IP Transfer" },
  { metric: "40%+", label: "Average Performance & Conversion Improvement" },
];

export default function AboutPage() {
  return (
    <main className="py-6 sm:py-10 px-3 sm:px-6">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-300/60 border border-slate-200/80">
        
        {/* Navigation Bar */}
        <div className="pt-4 px-6 lg:px-10">
          <Navbar />
        </div>

        {/* Distinct Subpage Header with Breadcrumb */}
        <SubpageHeader
          currentLabel="About Us"
          badge="Company Overview & Culture"
          icon={Code2}
          title="Engineering digital products that compound business value."
          description="Rate Global is a modern web development and digital engineering partner. We design, architect, and deploy high-speed web platforms, enterprise SaaS products, and bespoke user experiences for growth-driven companies worldwide."
        />

        {/* Narrative & Mission */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="mx-auto max-w-[1080px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-blue mb-2">
                Our Purpose
              </div>
              <h2 className="font-display text-3xl font-semibold text-brand-charcoal tracking-tight">
                Eliminating engineering slop to deliver clean, durable software.
              </h2>
              <div className="mt-6 space-y-4 text-[15px] text-brand-slate leading-relaxed">
                <p>
                  Most web projects suffer from architectural bloat, fragile dependencies, and over-engineered abstractions that slow teams down. At Rate Global, we take the opposite approach.
                </p>
                <p>
                  We operate with a minimalist senior engineering mindset: building exactly what moves the needle, selecting battle-tested tools like Next.js and TypeScript, and ensuring every line of code adds measurable performance and conversion value.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "No offshore junior hand-offs",
                  "Direct senior engineer comms",
                  "Continuous sprint previews",
                  "Production-grade test coverage",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[14px] text-brand-charcoal font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((item) => (
                <div
                  key={item.metric}
                  className="rounded-2xl border border-slate-100 bg-[#F8FAFD] p-6 text-center sm:text-left hover:border-blue-100 transition"
                >
                  <div className="font-display text-3xl sm:text-4xl font-bold text-brand-blue tracking-tight">
                    {item.metric}
                  </div>
                  <div className="mt-2 text-[13px] font-medium text-brand-slate leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-6 lg:px-12 bg-[#F8FAFD] border-t border-slate-100">
          <div className="mx-auto max-w-[1080px]">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-blue mb-2">
                Core Principles
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brand-charcoal tracking-tight">
                Standards that shape our engineering culture.
              </h2>
              <p className="mt-4 text-[15px] text-brand-slate">
                We measure our success by the uptime, speed, and business growth of the platforms we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm hover:border-blue-200 transition"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-brand-charcoal mb-3">
                      {v.title}
                    </h3>
                    <p className="text-[14px] text-brand-slate leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-16 px-6 lg:px-12 bg-white border-t border-slate-100 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-charcoal">
              Have a project in mind? Let&apos;s build it together.
            </h2>
            <p className="mt-3 text-[15px] text-brand-slate">
              Book a 30-minute discovery session with our senior engineers to review your technical scope, architecture, and timeline.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-7 py-3 text-[14px] font-medium text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-600 min-h-[44px]"
              >
                <span>Initiate Your Inquiry</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[14px] font-medium text-brand-charcoal transition hover:bg-slate-50 min-h-[44px]"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
