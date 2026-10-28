import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileQuestion, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50/70 py-4 sm:py-8 px-3 sm:px-6 space-y-12">
      {/* Header Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 pt-6 pb-4 overflow-hidden relative">
          <Navbar />
          
          <div className="pt-16 pb-14 text-center max-w-xl mx-auto px-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-50 text-brand-blue mb-6 border border-blue-100">
              <FileQuestion className="h-8 w-8" />
            </div>
            
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2">
              404 Error — Page Not Found
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              The page you are looking for does not exist.
            </h1>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              The resource or link you followed may have been updated, moved, or temporarily retired. Let&apos;s get you back on track.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-2.5 text-[14px] font-medium text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-600 min-h-[44px]"
              >
                <Home className="h-4 w-4" />
                <span>Return to Homepage</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-[14px] font-medium text-slate-800 transition hover:bg-slate-50 min-h-[44px]"
              >
                <Compass className="h-4 w-4" />
                <span>Explore Services</span>
              </Link>
            </div>
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
