"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioProjects, type ProjectCaseStudy } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2, Layers, ArrowRight, Sparkles } from "lucide-react";

type CategoryFilter = "All" | ProjectCaseStudy["category"];

const categories: CategoryFilter[] = [
  "All",
  "SaaS Platform",
  "Web App",
  "E-Commerce",
  "Design System",
];

interface PortfolioSectionProps {
  isPage?: boolean;
  maxItems?: number;
}

export function PortfolioSection({ isPage = false, maxItems }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const matchingProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const displayedProjects = maxItems ? matchingProjects.slice(0, maxItems) : matchingProjects;

  return (
    <section id="work" className={`bg-white px-6 lg:px-12 ${isPage ? "py-16" : "py-24 border-t border-slate-100"}`}>
      <div className="mx-auto max-w-[1080px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[12.5px] font-semibold uppercase tracking-wider text-brand-blue mb-2.5">
              {isPage ? "Case Study Archive" : "Selected Case Studies"}
            </div>
            <h2 className="font-display text-[32px] sm:text-[42px] font-bold text-brand-charcoal tracking-tight leading-[1.15]">
              {isPage ? "Engineered solutions delivering verified business impact." : "Proven results, engineered for impact."}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-[12.5px] font-medium transition-all min-h-[44px] inline-flex items-center ${
                    isActive
                      ? "bg-brand-charcoal text-white shadow-sm"
                      : "bg-slate-100 text-brand-slate hover:bg-slate-200 hover:text-brand-charcoal"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-[24px] border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Category Pill & Metric Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E5F0FF] border border-[#BFDBFE]/60 px-3 py-1 text-[11.5px] font-medium text-brand-blue">
                    <Layers className="h-3 w-3" />
                    {project.category}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3 w-3" />
                    {project.metric}
                  </span>
                </div>

                {/* Title & Client */}
                <h3 className="font-display text-[22px] font-semibold text-brand-charcoal group-hover:text-brand-blue transition-colors mb-1.5 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-brand-blue transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-[12px] font-medium text-slate-400 mb-4">
                  Client: {project.client}
                </p>

                {/* Description */}
                <p className="text-[14px] leading-relaxed text-brand-slate mb-5">
                  {project.description}
                </p>

                {/* Outcome Statement */}
                <div className="rounded-xl bg-blue-50/60 border border-blue-100/70 p-3 mb-6">
                  <p className="text-[12.5px] font-medium text-brand-charcoal">
                    <span className="text-brand-blue font-semibold">Key Impact: </span>
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Bottom: Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white border border-slate-200/80 px-2.5 py-1 text-[11px] font-medium text-slate-600 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Multi-Page Pathway on Homepage OR Contact CTA on Dedicated Work Page */}
        {!isPage ? (
          <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[14px] text-brand-slate text-center sm:text-left">
              Want to see all projects, tech stacks, and industry-specific metrics?
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#F8FAFD] hover:bg-white hover:border-blue-300 hover:text-brand-blue px-6 py-2.5 text-[13px] font-medium text-brand-charcoal shadow-2xs transition min-h-[44px]"
              >
                <span>View All Case Studies ({portfolioProjects.length})</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-16 pt-10 border-t border-slate-100 bg-[#F8FAFD] rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-blue uppercase tracking-wider mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Custom Architecture Available</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-brand-charcoal">
                Have a similar product vision?
              </h3>
              <p className="mt-1.5 text-[14px] text-brand-slate max-w-xl">
                We design and engineer bespoke web platforms with strict type safety, sub-second response times, and 100% IP ownership.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue hover:bg-blue-600 transition px-6 py-3 text-[13.5px] font-medium text-white shadow-md shadow-blue-500/20 shrink-0 min-h-[44px]"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
