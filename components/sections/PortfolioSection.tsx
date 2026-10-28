"use client";

import { useState } from "react";
import { portfolioProjects, type ProjectCaseStudy } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";

type CategoryFilter = "All" | ProjectCaseStudy["category"];

const categories: CategoryFilter[] = [
  "All",
  "SaaS Platform",
  "Web App",
  "E-Commerce",
  "Design System",
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="bg-white py-24 px-6 lg:px-12 border-t border-slate-100">
      <div className="mx-auto max-w-[1080px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[12.5px] font-semibold uppercase tracking-wider text-brand-blue mb-2.5">
              Selected Case Studies
            </div>
            <h2 className="font-display text-[36px] sm:text-[44px] font-bold text-brand-charcoal tracking-tight leading-[1.15]">
              Proven results, engineered for impact.
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
          {filteredProjects.map((project) => (
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

      </div>
    </section>
  );
}
