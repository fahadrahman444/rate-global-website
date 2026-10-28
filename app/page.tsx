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
    <main className="py-6 sm:py-10 px-3 sm:px-6">
      {/* Presentation Container framing the design */}
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-300/60 border border-slate-200/80">
        
        {/* Atmospheric Hero Canvas */}
        <div className="hero-canvas relative overflow-hidden pt-6 pb-20 lg:pb-28">
          {/* Architectural Grid Overlay */}
          <div
            className="hero-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_92%_85%_at_50%_45%,#000_70%,transparent_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1080px] px-6 lg:px-10">
            <Navbar />
            <Hero />
            <PartnerLogos />
          </div>
        </div>

        {/* Core Services Section */}
        <ServicesPreview />

        {/* Selected Portfolio Case Studies (Teaser with Pathway) */}
        <PortfolioSection maxItems={2} />

        {/* 4-Step Engineering Delivery Process */}
        <ProcessSection />

        {/* Lead Inquiry & Contact Form */}
        <ContactSection />

        {/* Company Footer */}
        <Footer />
      </div>
    </main>
  );
}
