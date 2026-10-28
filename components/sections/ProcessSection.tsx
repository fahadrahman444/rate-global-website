import Link from "next/link";
import { Search, Compass, Terminal, ShieldCheck, ArrowRight } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  icon: typeof Search;
  description: string;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Architecture",
    duration: "Week 1",
    icon: Search,
    description:
      "We unpack your business objectives, interview technical stakeholders, define API contracts, and establish measurable Core Web Vitals targets.",
    deliverables: ["Technical SRS Document", "System Architecture Blueprint", "Scope & Sprint Roadmap"],
  },
  {
    step: "02",
    title: "UX/UI & Design Systems",
    duration: "Weeks 2–3",
    icon: Compass,
    description:
      "We design responsive, accessible interface prototypes in Figma, establishing atomic component tokens and layout hierarchy before writing code.",
    deliverables: ["Interactive Prototypes", "Design Token System", "WCAG 2.2 AA Audit"],
  },
  {
    step: "03",
    title: "Full-Stack Engineering",
    duration: "Weeks 3–6",
    icon: Terminal,
    description:
      "Iterative Next.js, TypeScript, and API development with continuous integration, unit testing, and weekly staging deployments.",
    deliverables: ["Production Next.js App", "Backend & API Integration", "Test Coverage"],
  },
  {
    step: "04",
    title: "QA & Production Launch",
    duration: "Week 7",
    icon: ShieldCheck,
    description:
      "Rigorous cross-browser verification, sub-second Core Web Vitals optimization, automated security checks, and zero-downtime deployment.",
    deliverables: ["100/100 Lighthouse Score", "Production VPS / CDN Setup", "Post-Launch Warranty"],
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#F8FAFD] py-24 px-6 lg:px-12 border-t border-slate-100">
      <div className="mx-auto max-w-[1080px]">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[12.5px] font-semibold uppercase tracking-wider text-brand-blue mb-2.5">
            How We Deliver
          </div>
          <h2 className="font-display text-[36px] sm:text-[44px] font-bold text-brand-charcoal tracking-tight leading-[1.15]">
            4-step sprint-driven engineering process.
          </h2>
          <p className="mt-4 text-[15px] text-brand-slate leading-relaxed">
            From initial requirements discovery to zero-downtime launch, we adhere to disciplined milestones with continuous stakeholder visibility.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Duration Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-[26px] font-bold text-brand-charcoal">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                      {item.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-[17px] font-semibold text-brand-charcoal leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] leading-[1.6] text-brand-slate mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1.5 text-[12px] text-slate-600">
                    {item.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-brand-blue" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Multi-Page Pathway to About Us */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-brand-slate text-center sm:text-left">
            Curious about our minimalist engineering values, code standards, and technical team?
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:border-blue-300 hover:text-brand-blue px-6 py-2.5 text-[13px] font-medium text-brand-charcoal shadow-2xs transition min-h-[44px]"
          >
            <span>Learn About Our Culture &amp; Values</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
