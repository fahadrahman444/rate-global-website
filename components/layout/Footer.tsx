import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-900/5 py-8 px-6 sm:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-slate-500">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-display font-semibold text-[18px] text-slate-900 hover:opacity-90 transition">
            <span className="text-brand-blue">Rate</span>Global
          </Link>
          <span className="text-slate-300">|</span>
          <span>© {new Date().getFullYear()} Rate Global. All rights reserved.</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/services" className="transition hover:text-slate-900">
            Services
          </Link>
          <Link href="/work" className="transition hover:text-slate-900">
            Our Work
          </Link>
          <Link href="/about" className="transition hover:text-slate-900">
            About Us
          </Link>
          <Link href="/contact" className="transition hover:text-slate-900">
            Contact
          </Link>
          <Link href="/privacy-policy" className="transition hover:text-slate-900">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
