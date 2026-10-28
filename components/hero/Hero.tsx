import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Cpu, Gauge, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-10 lg:pt-14 lg:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Natural Reading Hierarchy (Headline, Paragraph, CTAs, Trust Signals) */}
        <div className="lg:col-span-7">
          {/* Eyebrow Kicker */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-[12px] font-semibold text-brand-blue mb-5 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
            <span>High-Performance Digital Engineering</span>
          </div>

          {/* Unified Headline */}
          <h1 className="font-display text-[38px] sm:text-[48px] lg:text-[54px] font-bold leading-[1.12] tracking-[-0.03em] text-slate-900">
            We build websites, apps, and platforms{" "}
            <span className="text-brand-blue">— user-first, outcome-driven.</span>
          </h1>

          {/* Directly Connected Supporting Copy */}
          <p className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.6] text-slate-600 font-normal max-w-xl">
            From initial architecture to production scale, we bring experience-led strategy, lean tech, and clean code to engineer high-converting web applications that compound business value.
          </p>

          {/* Differentiated Dual CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            {/* Primary High-Intent Hero CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-blue hover:bg-blue-600 transition-all py-3 px-7 text-[14.5px] font-medium text-white shadow-lg shadow-blue-500/25 min-h-[48px]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Secondary Low-Commitment Action */}
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3 text-[14px] font-medium text-slate-800 shadow-2xs transition-all min-h-[48px]"
            >
              <span>Explore Case Studies</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </Link>
          </div>

          {/* Trust Signal Micro-Badges */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-[12.5px] font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>&lt; 24hr Direct Engineer SLA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>100% Code &amp; IP Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Zero Architectural Bloat</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Proof Anchor (Show, Don't Just Tell) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl shadow-slate-200/60 p-6 sm:p-7 ring-1 ring-slate-900/5 backdrop-blur-sm">
            
            {/* Live Systems Active Status Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[12px] font-semibold text-slate-700">Production Systems Active</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-200/70 px-2.5 py-0.5 text-[11px] font-bold text-brand-blue">
                <ShieldCheck className="h-3 w-3" />
                <span>Enterprise SLA</span>
              </span>
            </div>

            {/* Core Web Vitals & Performance Benchmark Gauges */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="rounded-xl bg-[#F8FAFD] border border-slate-100 p-4">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider">Lighthouse</span>
                  <Gauge className="h-3.5 w-3.5 text-emerald-500" />
                </div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">100/100</div>
                <div className="text-[11.5px] font-medium text-emerald-600 mt-0.5">Optimal Core Web Vitals</div>
              </div>

              <div className="rounded-xl bg-[#F8FAFD] border border-slate-100 p-4">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider">Edge TTFB</span>
                  <Cpu className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">&lt; 150ms</div>
                <div className="text-[11.5px] font-medium text-brand-blue mt-0.5">Sub-Second Delivery</div>
              </div>
            </div>

            {/* Approved Tech Stack Pills */}
            <div className="mb-5">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                <Terminal className="h-3.5 w-3.5" />
                <span>Verified Engineering Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Next.js 15 (App Router)",
                  "TypeScript Strict",
                  "Tailwind CSS",
                  "Edge API Routes",
                  "WCAG 2.2 AA",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quality Guarantee Callout */}
            <div className="rounded-xl bg-blue-50/60 border border-blue-100/80 p-3 text-[12px] text-slate-700 leading-snug">
              <span className="font-semibold text-brand-blue">Delivery Standard: </span>
              Every platform is built with zero dead code, strict end-to-end typing, and full automated testing before launch.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
