import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work & Case Studies — Rate Global",
  description:
    "Explore Rate Global's portfolio of custom SaaS platforms, high-performance web applications, headless e-commerce storefronts, and design systems.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 py-4 sm:py-8 px-3 sm:px-6 space-y-12">
      {/* Header Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 pt-6 pb-4 overflow-hidden relative">
          <Navbar />
          <SubpageHeader
            currentLabel="Our Work"
            badge="Selected Portfolio & Case Studies"
            icon={Briefcase}
            title="Proven software engineering, measured in verified outcomes."
            description="Explore our archive of production web applications, multi-tenant SaaS architectures, and headless digital storefronts engineered for high-growth teams."
          />
        </div>
      </div>

      {/* Main Content Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
          <PortfolioSection isPage={true} />
        </div>
      </div>

      {/* Footer Island */}
      <div className="mx-auto max-w-[1140px] pb-6">
        <Footer />
      </div>
    </main>
  );
}
