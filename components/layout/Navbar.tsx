"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/services", label: "Services", active: pathname === "/services" },
    { href: "/work", label: "Our Work", active: pathname === "/work" },
    { href: "/about", label: "About Us", active: pathname === "/about" },
    { href: "/contact", label: "Contact", active: pathname === "/contact" },
  ];

  return (
    <header className="relative z-50 flex justify-center pt-2 w-full max-w-[1080px] mx-auto">
      <nav className="flex h-[58px] w-full items-center justify-between rounded-full border border-white/80 bg-white/70 px-5 sm:px-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="font-display text-[22px] font-semibold tracking-[-0.03em] flex items-center transition hover:opacity-90"
          aria-label="Rate Global Homepage"
        >
          <span className="text-brand-blue">Rate</span>
          <span className="text-brand-charcoal">Global</span>
        </Link>

        {/* Desktop Nav Links — Pure Classy Typography Matching Homepage (Zero Bubble Pills) */}
        <div className="hidden md:flex items-center gap-9 text-[13.5px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors font-medium ${
                link.active
                  ? "text-brand-charcoal"
                  : "text-brand-slate hover:text-brand-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white py-1.5 pr-4 pl-1.5 text-[12.5px] font-medium text-brand-charcoal shadow-sm transition hover:bg-slate-50 hover:border-slate-300 min-h-[44px]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E3EFFF] text-brand-blue">
              <User className="h-4 w-4" />
            </span>
            <span>Book a Discovery Call</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden transition hover:bg-slate-50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 right-0 z-50 rounded-3xl border border-white/80 bg-white/95 p-6 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3 text-[15px] font-medium text-brand-charcoal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-xl transition ${
                  link.active
                    ? "text-brand-blue font-semibold"
                    : "text-brand-charcoal hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-brand-blue py-3 px-5 text-[14px] font-medium text-white shadow-sm transition hover:bg-blue-600 min-h-[44px]"
              >
                <span>Book a Discovery Call</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
