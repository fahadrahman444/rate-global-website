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
  variant?: "dark" | "light";
}

export function PortfolioSection({
  isPage = false,
  maxItems,
  variant = "light",
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const isDark = variant === "dark";

  const matchingProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const displayedProjects = maxItems ? matchingProjects.slice(0, maxItems) : matchingProjects;

  return (
    <section
      id="work"
      className={`relative px-6 lg:px-12 transition-colors duration-300 ${
        isDark
          ? "bg-[#0B1528] text-white py-24 border-t border-slate-800"
          : isPage
          ? "bg-white py-16"
          : "bg-white py-24 border-t border-slate-100"
      }`}
    >
      {/* Dark mode atmospheric glow */}
      {isDark && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(37,99,235,0.18),transparent_75%)]"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 mx-auto max-w-[1080px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11.5px] font-semibold uppercase tracking-wider mb-3 ${
                isDark
                  ? "border border-blue-400/30 bg-blue-950/70 text-blue-300"
                  : "border border-blue-200/80 bg-blue-50/80 text-brand-blue"
              }`}
            >
              <span>{isPage ? "Case Study Archive" : "02 // Selected Case Studies"}</span>
            </div>
            <h2
              className={`font-display text-[32px] sm:text-[42px] font-bold tracking-tight leading-[1.15] ${
                isDark ? "text-white" : "text-brand-charcoal"
              }`}
            >
              {isPage
                ? "Engineered solutions delivering verified business impact."
                : "Proven results, engineered for impact."}
            </h2>
            <p className={`mt-2 text-[14.5px] max-w-xl ${isDark ? "text-slate-300" : "text-brand-slate"}`}>
              Real production outcomes built with strict type safety, zero architectural bloat, and sub-second performance.
            </p>
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
                      ? isDark
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 font-semibold"
                        : "bg-brand-charcoal text-white shadow-sm"
                      : isDark
                      ? "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
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
              className={`group relative rounded-[24px] p-7 transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? "border border-white/10 bg-[#121E36]/90 backdrop-blur-sm shadow-xl hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10"
                  : "border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 shadow-sm hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5"
              }`}
            >
              <div>
                {/* Top Row: Category Pill & Metric Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-medium ${
                      isDark
                        ? "bg-blue-950/80 border border-blue-500/30 text-blue-300"
                        : "bg-[#E5F0FF] border border-[#BFDBFE]/60 text-brand-blue"
                    }`}
                  >
                    <Layers className="h-3 w-3" />
                    {project.category}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      isDark
                        ? "bg-emerald-950/90 border border-emerald-500/40 text-emerald-300"
                        : "bg-emerald-50 border border-emerald-200/80 text-emerald-700"
                    }`}
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    {project.metric}
                  </span>
                </div>

                {/* Title & Client */}
                <h3
                  className={`font-display text-[22px] font-semibold mb-1.5 flex items-center justify-between transition-colors ${
                    isDark
                      ? "text-white group-hover:text-blue-300"
                      : "text-brand-charcoal group-hover:text-brand-blue"
                  }`}
                >
                  <span>{project.title}</span>
                  <ArrowUpRight
                    className={`h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isDark ? "text-slate-400 group-hover:text-blue-300" : "text-slate-400 group-hover:text-brand-blue"
                    }`}
                  />
                </h3>
                <p className={`text-[12px] font-medium mb-4 ${isDark ? "text-slate-400" : "text-slate-400"}`}>
                  Client: {project.client}
                </p>

                {/* Description */}
                <p className={`text-[14px] leading-relaxed mb-5 ${isDark ? "text-slate-300" : "text-brand-slate"}`}>
                  {project.description}
                </p>

                {/* Outcome Statement */}
                <div
                  className={`rounded-xl p-3.5 mb-6 ${
                    isDark
                      ? "bg-blue-950/60 border border-blue-500/25 text-blue-100"
                      : "bg-blue-50/60 border border-blue-100/70 text-brand-charcoal"
                  }`}
                >
                  <p className="text-[12.5px] font-medium">
                    <span className={isDark ? "text-blue-300 font-semibold" : "text-brand-blue font-semibold"}>
                      Key Impact:{" "}
                    </span>
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Bottom: Tech Stack Tags */}
              <div className={`flex flex-wrap gap-1.5 pt-4 border-t ${isDark ? "border-white/10" : "border-slate-100"}`}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-md px-2.5 py-1 text-[11px] font-medium ${
                      isDark
                        ? "bg-white/5 border border-white/10 text-slate-300"
                        : "bg-white border border-slate-200/80 text-slate-600 shadow-2xs"
                    }`}
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
          <div
            className={`mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isDark ? "border-white/10" : "border-slate-100"
            }`}
          >
            <p className={`text-[14px] text-center sm:text-left ${isDark ? "text-slate-300" : "text-brand-slate"}`}>
              Want to see all projects, tech stacks, and industry-specific metrics?
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/work"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-medium transition min-h-[44px] ${
                  isDark
                    ? "bg-white text-slate-900 hover:bg-blue-50 hover:text-brand-blue shadow-lg shadow-black/20"
                    : "border border-slate-200 bg-[#F8FAFD] hover:bg-white hover:border-blue-300 hover:text-brand-blue text-brand-charcoal shadow-2xs"
                }`}
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
