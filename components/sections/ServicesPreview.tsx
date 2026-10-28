"use client";

import { useState } from "react";
import Link from "next/link";
import { Rocket, Zap, Shield, ArrowRight } from "lucide-react";

interface ServiceTier {
  id: string;
  badge: string;
  title: string;
  icon: typeof Rocket;
  description: string;
  tags: string[];
}

const serviceTiers: ServiceTier[] = [
  {
    id: "startups",
    badge: "01",
    title: "Startups",
    icon: Rocket,
    description:
      "We help startups move fast with rapid MVPs, low-code prototypes, and UX-first validation. Our lean process supports you from idea to launch, building scalable foundations without heavy infrastructure or unnecessary agency complexity.",
    tags: ["MVP Development", "Rapid Prototyping", "UX Strategy"],
  },
  {
    id: "scaleups",
    badge: "02",
    title: "Scale-ups & Growth",
    icon: Zap,
    description:
      "For growing teams outgrowing their legacy tech stack. We re-architect web applications for sub-second speeds, implement cohesive multi-brand design systems, and eliminate engineering debt.",
    tags: ["Next.js Migration", "Design Systems", "Web Performance"],
  },
  {
    id: "enterprise",
    badge: "03",
    title: "Enterprise Platforms",
    icon: Shield,
    description:
      "Mission-critical web portals, custom SaaS architectures, and compliant integrations engineered for 99.99% reliability, strict WCAG 2.2 accessibility, and enterprise security standards.",
    tags: ["Custom SaaS", "Enterprise Security", "API Integrations"],
  },
];

export function ServicesPreview() {
  const [activeTierId, setActiveTierId] = useState<string>("startups");
  const activeTier = serviceTiers.find((t) => t.id === activeTierId) || serviceTiers[0];
  const IconComponent = activeTier.icon;

  return (
    <section id="services" className="site-container">
      {/* Structural Card Island */}
      <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 p-8 sm:p-12 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading + Selector Pills */}
          <div className="lg:col-span-5 pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2.5">
              01 // Core Disciplines &amp; Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3 leading-tight">
              Services for
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-sm">
              Tailored engineering partnerships calibrated to your growth stage and technical maturity.
            </p>

            {/* Interactive Tier Buttons */}
            <div className="flex flex-wrap gap-2">
              {serviceTiers.map((tier) => {
                const isActive = tier.id === activeTierId;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setActiveTierId(tier.id)}
                    className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all min-h-[44px] inline-flex items-center ${
                      isActive
                        ? "bg-slate-900 text-white shadow-sm font-semibold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {tier.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Frosted Glass Modal Card */}
          <div className="lg:col-span-7">
            <div className="glass-service-card relative rounded-2xl p-7 sm:p-8 max-w-[480px] overflow-hidden transition-all duration-300 ring-1 ring-slate-900/5 shadow-sm">
              {/* Top-Left Dot Matrix Texture */}
              <div className="card-dots pointer-events-none absolute top-0 left-0 w-[150px] h-[75px] opacity-45" />

              <div className="relative z-10">
                {/* Card Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F0FF] text-brand-blue">
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="font-display text-[21px] font-semibold text-slate-900">
                      {activeTier.title}
                    </h3>
                  </div>

                  {/* Badge Number */}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D6E6FB] text-brand-blue text-[11px] font-bold">
                    {activeTier.badge}
                  </span>
                </div>

                {/* Card Body Copy */}
                <p className="text-[14px] leading-[1.65] text-slate-600 mb-5">
                  {activeTier.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60">
                  {activeTier.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white border border-slate-200/80 px-2.5 py-1 text-[11.5px] font-medium text-slate-600 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Multi-Page Pathway to Dedicated Services Page */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 text-center sm:text-left">
            Looking for full technical specifications, engagement models, and enterprise deliverables?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 hover:text-brand-blue px-6 py-2.5 text-[13px] font-medium text-slate-800 shadow-2xs transition min-h-[44px]"
          >
            <span>Explore All 4 Service Pillars</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
