import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import {
  Code,
  Layers,
  ShoppingBag,
  Zap,
  Shield,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services — Custom Web & SaaS Development",
  description:
    "Comprehensive web development, enterprise SaaS architecture, headless commerce, and performance engineering by Rate Global.",
};

const serviceOfferings = [
  {
    id: "custom-web-apps",
    icon: Code,
    title: "Custom Web Application Development",
    subtitle: "Scalable, modern web apps engineered with Next.js, React, and TypeScript.",
    description:
      "We build robust web applications tailored to your specific business workflows. From client portals to complex internal operational dashboards, we deliver clean, performant, and secure systems.",
    features: [
      "Next.js App Router & Server Components",
      "Strict TypeScript end-to-end type safety",
      "RESTful & GraphQL API integration",
      "Enterprise authentication & role-based access control (RBAC)",
      "Zero-downtime CI/CD deployment pipelines",
    ],
    deliverables: "Full Source Code, API Documentation, Automated Tests, Deployment Scripts",
  },
  {
    id: "saas-development",
    icon: Layers,
    title: "SaaS Product Engineering",
    subtitle: "Full-lifecycle software-as-a-service architecture from MVP to scale.",
    description:
      "Transform your product vision into a scalable, multi-tenant subscription software platform. We architect resilient databases, Stripe billing workflows, automated user onboarding, and actionable admin dashboards.",
    features: [
      "Multi-tenant database schema isolation",
      "Stripe Customer Portal & metered billing workflows",
      "Real-time event streaming & background queue processing",
      "Granular user permissions & audit logging",
      "Lighthouse 95+ performance benchmarks",
    ],
    deliverables: "Scalable SaaS Architecture, Billing Engine, Analytics Dashboard, Admin Controls",
  },
  {
    id: "headless-ecommerce",
    icon: ShoppingBag,
    title: "High-Performance Headless E-Commerce",
    subtitle: "Sub-second storefronts engineered for maximum conversion and retention.",
    description:
      "Ditch sluggish monolithic e-commerce themes. We build lightning-fast headless storefronts powered by Shopify Storefront API, Medusa, or custom backends with instant filtering and friction-free checkouts.",
    features: [
      "Sub-second global edge caching & catalog rendering",
      "Instant faceted search and live inventory sync",
      "Frictionless, localized one-click checkout flows",
      "Deep analytics & conversion funnel tracking",
      "Omnichannel POS & ERP webhook integration",
    ],
    deliverables: "Headless Storefront, Custom Cart & Checkout Flow, CMS Product Management",
  },
  {
    id: "performance-modernization",
    icon: Gauge,
    title: "Performance & Architecture Modernization",
    subtitle: "Refactoring legacy tech stacks into high-speed, modern web experiences.",
    description:
      "Is your existing web platform suffering from slow load times, poor Google rankings, or fragile code? We audit, refactor, and migrate legacy applications to modern Next.js stacks while preserving your SEO authority.",
    features: [
      "Comprehensive Core Web Vitals optimization (LCP, CLS, INP)",
      "Bundle size reduction & dead code elimination",
      "Accessibility remediation to WCAG 2.2 AA",
      "Database query optimization & indexing reviews",
      "Technical SEO & structured data overhaul",
    ],
    deliverables: "Audit Report, Refactored Repository, Verified 90+ Lighthouse Score",
  },
];

const engagementModels = [
  {
    icon: Clock,
    name: "Fixed-Scope Sprints",
    bestFor: "Clear project milestones, MVPs, and specific feature builds",
    description:
      "Defined timeline, agreed deliverables, and fixed investment with weekly demonstration milestones.",
    features: ["Pre-agreed scope & roadmap", "Weekly demo deployments", "Rigorous QA testing included"],
  },
  {
    icon: Users,
    name: "Dedicated Engineering Pod",
    bestFor: "Fast-moving product companies requiring continuous delivery",
    description:
      "A senior full-stack team embedded directly in your workflow, functioning as your high-velocity engineering department.",
    features: ["Full-time senior engineers", "Direct Slack/Discord communication", "Daily standup visibility"],
  },
  {
    icon: Shield,
    name: "Retainers & SLA Support",
    bestFor: "Post-launch maintenance, security, and continuous evolution",
    description:
      "Guaranteed monthly engineering hours for feature updates, infrastructure monitoring, and rapid emergency support.",
    features: ["< 24hr guaranteed response SLA", "Proactive dependency & security updates", "Monthly performance audits"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 py-4 sm:py-8 space-y-12 sm:space-y-16">
      {/* 1. Hero Island — Floating Elevated Canvas */}
      <div className="site-container">
        <div className="hero-canvas relative overflow-hidden rounded-[32px] bg-white pt-6 pb-10 sm:pb-12 shadow-sm ring-1 ring-slate-900/5 px-6 lg:px-10">
          {/* Architectural Grid Overlay */}
          <div
            className="hero-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_92%_85%_at_50%_45%,#000_70%,transparent_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />

            {/* Distinct Subpage Header with Breadcrumbs */}
            <SubpageHeader
              currentLabel="Services"
              badge="Full-Stack Capabilities"
              icon={Zap}
              title="Full-cycle web development built for speed and durability."
              description="From architectural discovery through production launch, we engineer bespoke digital products using proven modern standards: Next.js, React, TypeScript, and clean cloud infrastructure."
            />
          </div>
        </div>
      </div>

      {/* 2. Detailed Service Offerings & Capabilities */}
      <div className="site-container">
        <div className="rounded-[32px] bg-white shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
          {/* Detailed Service Offerings */}
          <section className="py-12 lg:py-16 px-6 lg:px-10 bg-white">
          <div className="mx-auto max-w-[1080px] space-y-16">
            {serviceOfferings.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-12 first:pt-0 ${
                    idx !== 0 ? "border-t border-slate-100" : ""
                  }`}
                >
                  <div className="lg:col-span-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-charcoal tracking-tight">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-[14px] font-medium text-brand-blue">
                      {service.subtitle}
                    </p>
                    <p className="mt-4 text-[14.5px] text-brand-slate leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 p-4 rounded-xl bg-[#F8FAFD] border border-slate-100 text-[13px] text-brand-slate">
                      <span className="font-semibold text-brand-charcoal">Key Deliverables:</span>{" "}
                      {service.deliverables}
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-[#F8FAFD] border border-slate-100 rounded-2xl p-6 sm:p-8">
                    <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-blue mb-4">
                      Technical Capabilities & Inclusions
                    </div>
                    <div className="space-y-3.5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-[14px] text-brand-charcoal font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
                      <span className="text-[13px] text-brand-slate">
                        Ready to scope your {service.title.toLowerCase()}?
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-blue hover:text-blue-700 transition min-h-[44px]"
                      >
                        <span>Request Scope & Estimate</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-12 lg:py-16 px-6 lg:px-10 bg-[#F8FAFD] border-t border-slate-100">
          <div className="mx-auto max-w-[1080px]">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-blue mb-2">
                Flexible Collaboration
              </div>
              <h2 className="font-display text-3xl font-semibold text-brand-charcoal tracking-tight">
                Engagement models suited to your timeline.
              </h2>
              <p className="mt-4 text-[15px] text-brand-slate">
                Transparent delivery with zero hidden overhead, continuous visibility, and senior developer involvement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((model) => {
                const Icon = model.icon;
                return (
                  <div
                    key={model.name}
                    className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-blue-200 transition"
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand-blue mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-[18px] font-semibold text-brand-charcoal mb-2">
                        {model.name}
                      </h3>
                      <div className="text-[12px] font-medium text-brand-blue mb-3">
                        {model.bestFor}
                      </div>
                      <p className="text-[13.5px] text-brand-slate leading-relaxed mb-6">
                        {model.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-2.5">
                      {model.features.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-[12.5px] text-brand-charcoal">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 lg:py-14 px-6 lg:px-10 bg-white border-t border-slate-100 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-charcoal">
              Need custom technical specifications?
            </h2>
            <p className="mt-3 text-[15px] text-brand-slate">
              Send us your requirements or schedule an architecture review. We respond with a tangible technical scope within 24 hours.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-7 py-3 text-[14px] font-medium text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-600 min-h-[44px]"
              >
                <span>Initiate Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        </div>
      </div>

      {/* Consistent Company Footer */}
      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
