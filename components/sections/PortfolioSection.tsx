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
  variant?: "inset-dark" | "light";
}

export function PortfolioSection({
  isPage = false,
  maxItems,
  variant = "light",
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const isDark = variant === "inset-dark";

  const matchingProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const displayedProjects = maxItems ? matchingProjects.slice(0, maxItems) : matchingProjects;

  if (isDark) {
    return (
      <section id="work" className="site-container">
        {/* Inset Framed Island — Physically breaks the page edge with high contrast */}
        <div className="relative overflow-hidden rounded-[32px] bg-slate-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl ring-1 ring-white/10">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.25),transparent_70%)]"
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2.5">
                  02 // Key Product &amp; Case Study Showcase
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Proven results, engineered for impact.
                </h2>
                <p className="mt-3 text-base text-slate-400 max-w-xl leading-relaxed">
                  Deep architectural case studies delivering verified performance metrics, zero-downtime reliability, and measurable business growth.
                </p>
              </div>

              {/* Category Filter Pills (Dark Glass) */}
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
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 font-semibold"
                          : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inset Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedProjects.map((project) => (
                <article
                  key={project.id}
                  className="group relative rounded-2xl bg-slate-800/80 border border-white/10 p-7 shadow-lg hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Category & Metric */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 px-3 py-1 text-[11.5px] font-medium text-blue-300">
                        <Layers className="h-3 w-3" />
                        {project.category}
                      </span>

                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                        <CheckCircle2 className="h-3 w-3" />
                        {project.metric}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-[22px] font-semibold text-white group-hover:text-blue-300 transition-colors mb-1.5 flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-blue-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-[12px] font-medium text-slate-400 mb-4">
                      Client: {project.client}
                    </p>

                    <p className="text-[14px] leading-relaxed text-slate-300 mb-5">
                      {project.description}
                    </p>

                    {/* Outcome Box */}
                    <div className="rounded-xl bg-blue-950/60 border border-blue-500/25 p-3.5 mb-6">
                      <p className="text-[12.5px] font-medium text-blue-100">
                        <span className="text-blue-300 font-semibold">Key Impact: </span>
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Pathway Bar */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[14px] text-slate-300 text-center sm:text-left">
                Want to examine our complete repository of case studies, tech stacks, and benchmarks?
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 hover:bg-blue-50 hover:text-blue-600 transition px-6 py-2.5 text-[13px] font-medium shadow-md shrink-0 min-h-[44px]"
              >
                <span>View All Case Studies ({portfolioProjects.length})</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Light Mode (used on /work page)
  return (
    <section id="work" className="bg-white px-6 lg:px-10 py-10 lg:py-12">
      <div className="mx-auto max-w-[1080px]">
        {/* Filter Pills Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
          <div className="text-sm font-medium text-slate-500">
            Showing <span className="font-semibold text-slate-900">{displayedProjects.length}</span> verified case {displayedProjects.length === 1 ? "study" : "studies"}
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
                      ? "bg-slate-900 text-white shadow-sm font-semibold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
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
              className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
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

                <h3 className="font-display text-[22px] font-semibold text-slate-900 group-hover:text-brand-blue transition-colors mb-1.5 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-brand-blue transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-[12px] font-medium text-slate-400 mb-4">
                  Client: {project.client}
                </p>

                <p className="text-[14px] leading-relaxed text-slate-600 mb-5">
                  {project.description}
                </p>

                <div className="rounded-xl bg-blue-50/60 border border-blue-100/70 p-3.5 mb-6">
                  <p className="text-[12.5px] font-medium text-slate-800">
                    <span className="text-brand-blue font-semibold">Key Impact: </span>
                    {project.outcome}
                  </p>
                </div>
              </div>

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

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-slate-100 bg-[#F8FAFD] rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Custom Architecture Available</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Have a similar product vision?
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 max-w-xl">
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
      </div>
    </section>
  );
}
