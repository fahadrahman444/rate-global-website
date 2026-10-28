import { Search, Compass, Terminal, ShieldCheck } from "lucide-react";

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
      "We unpack your business requirements, define user personas, map user flows, and establish the technical stack and system architecture.",
    deliverables: ["Technical SRS Document", "Information Architecture", "Sprint Roadmap"],
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
        <div className="max-w-[620px] mb-16">
          <div className="text-[12.5px] font-semibold uppercase tracking-wider text-brand-blue mb-2.5">
            How We Work
          </div>
          <h2 className="font-display text-[36px] sm:text-[44px] font-bold text-brand-charcoal tracking-tight leading-[1.15] mb-4">
            A transparent, sprint-driven engineering process.
          </h2>
          <p className="text-[15px] leading-relaxed text-brand-slate">
            No endless meetings, no bloated agency overhead. Just senior engineers shipping clean, battle-tested code on schedule.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-[24px] border border-white/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Top: Step Number & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-[26px] font-bold text-brand-blue tracking-tight">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500">
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

      </div>
    </section>
  );
}
