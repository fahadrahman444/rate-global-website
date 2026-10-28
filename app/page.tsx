import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50/70 py-4 sm:py-8 space-y-16 sm:space-y-24">
      {/* 1. Hero Island — Floating Elevated Canvas */}
      <div className="site-container">
        <div className="hero-canvas relative overflow-hidden rounded-[32px] bg-white pt-6 pb-8 lg:pb-12 shadow-sm ring-1 ring-slate-900/5 px-6 lg:px-10">
          {/* Architectural Grid Overlay */}
          <div
            className="hero-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_92%_85%_at_50%_45%,#000_70%,transparent_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1080px]">
            <Navbar />
            <Hero />
            <PartnerLogos />
          </div>
        </div>
      </div>

      {/* 2. Core Services Island (Structural Bento Card) */}
      <ServicesPreview />

      {/* 3. Selected Case Studies (The High-Contrast Inset Framed Island) */}
      <PortfolioSection maxItems={2} variant="inset-dark" />

      {/* 4. 4-Step Engineering Delivery Process (Floating Bento Step Cards) */}
      <ProcessSection />

      {/* 5. Lead Inquiry & Contact Form Island */}
      <ContactSection />

      {/* 6. Company Footer */}
      <div className="site-container pb-6">
        <Footer />
      </div>
    </main>
  );
}
