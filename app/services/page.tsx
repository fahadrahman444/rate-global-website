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
    <main className="min-h-screen bg-slate-50/70 py-4 sm:py-8 px-3 sm:px-6 space-y-12">
      {/* Unified Header Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 pt-6 pb-4 overflow-hidden relative">
          <Navbar />
          <SubpageHeader
            currentLabel="Services"
            badge="Full-Stack Capabilities"
            icon={Zap}
            title="Full-cycle web development built for speed and durability."
            description="From architectural discovery through production launch, we engineer bespoke digital products using proven modern standards: Next.js, React, TypeScript, and clean cloud infrastructure."
          />
        </div>
      </div>

      {/* Main Content Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 p-8 sm:p-12 lg:p-14 space-y-16">
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-brand-blue">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">Key Deliverables:</span>{" "}
                    {service.deliverables}
                  </div>
                </div>

                <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4">
                    Technical Capabilities &amp; Inclusions
                  </div>
                  <div className="space-y-3.5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-800 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Ready to scope your {service.title.toLowerCase()}?
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-blue-700 transition min-h-[44px]"
                    >
                      <span>Request Scope &amp; Estimate</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Engagement Models Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 p-8 sm:p-12 lg:p-14">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2.5">
              Flexible Collaboration
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Engagement models suited to your timeline.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Transparent delivery with zero hidden overhead, continuous visibility, and senior developer involvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.name}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-7 shadow-2xs flex flex-col justify-between hover:border-blue-200 transition"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand-blue mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {model.name}
                    </h3>
                    <div className="text-xs font-semibold text-brand-blue mb-3">
                      {model.bestFor}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {model.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 space-y-2.5">
                    {model.features.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
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
      </div>

      {/* Footer Island */}
      <div className="mx-auto max-w-[1140px] pb-6">
        <Footer />
      </div>
    </main>
  );
}
