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
    <main className="py-6 sm:py-10 px-3 sm:px-6">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-300/60 border border-slate-200/80">
        
        {/* Navigation Bar */}
        <div className="pt-4 px-6 lg:px-10">
          <Navbar />
        </div>

        {/* Distinct Subpage Header with Breadcrumbs */}
        <SubpageHeader
          currentLabel="Our Work"
          badge="Selected Portfolio & Case Studies"
          icon={Briefcase}
          title="Proven software engineering, measured in verified outcomes."
          description="Explore our archive of production web applications, multi-tenant SaaS architectures, and headless digital storefronts engineered for high-growth teams."
        />

        {/* Full Interactive Portfolio Section */}
        <PortfolioSection isPage={true} />

        <Footer />
      </div>
    </main>
  );
}
