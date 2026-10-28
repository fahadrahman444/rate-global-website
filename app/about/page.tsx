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
    <main className="min-h-screen bg-slate-50/70 py-4 sm:py-8 px-3 sm:px-6 space-y-12">
      {/* Header Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 pt-6 pb-4 overflow-hidden relative">
          <Navbar />
          <SubpageHeader
            currentLabel="About Us"
            badge="Company Overview & Culture"
            icon={Code2}
            title="Engineering digital products that compound business value."
            description="Rate Global is a modern web development and digital engineering partner. We design, architect, and deploy high-speed web platforms, enterprise SaaS products, and bespoke user experiences for growth-driven companies worldwide."
          />
        </div>
      </div>

      {/* Narrative & Purpose Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2.5">
                Our Purpose
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Eliminating engineering slop to deliver clean, durable software.
              </h2>
              <div className="mt-5 space-y-4 text-base text-slate-600 leading-relaxed">
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
                  <div key={item} className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((item) => (
                <div
                  key={item.metric}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 text-center sm:text-left hover:border-blue-200 transition"
                >
                  <div className="font-display text-3xl sm:text-4xl font-bold text-brand-blue tracking-tight">
                    {item.metric}
                  </div>
                  <div className="mt-2 text-xs font-medium text-slate-600 leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 p-8 sm:p-12 lg:p-14">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2.5">
              Core Principles
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Standards that shape our engineering culture.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We measure our success by the uptime, speed, and business growth of the platforms we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 shadow-2xs hover:border-blue-200 transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Island */}
      <div className="mx-auto max-w-[1140px] pb-6">
        <Footer />
      </div>
    </main>
  );
}
