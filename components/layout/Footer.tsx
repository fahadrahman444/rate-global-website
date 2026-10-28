import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-[1080px] flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-brand-slate">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-display font-semibold text-[18px] text-brand-charcoal hover:opacity-90 transition">
            <span className="text-brand-blue">Rate</span>Global
          </Link>
          <span className="text-slate-300">|</span>
          <span>© {new Date().getFullYear()} Rate Global. All rights reserved.</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/services" className="transition hover:text-brand-charcoal">
            Services
          </Link>
          <Link href="/work" className="transition hover:text-brand-charcoal">
            Our Work
          </Link>
          <Link href="/about" className="transition hover:text-brand-charcoal">
            About Us
          </Link>
          <Link href="/contact" className="transition hover:text-brand-charcoal">
            Contact
          </Link>
          <Link href="/privacy-policy" className="transition hover:text-brand-charcoal">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
