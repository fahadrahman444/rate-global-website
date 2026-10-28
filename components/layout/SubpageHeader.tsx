import Link from "next/link";
import { ChevronRight, Home, type LucideIcon } from "lucide-react";

interface SubpageHeaderProps {
  badge: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  currentLabel: string;
}

export function SubpageHeader({
  badge,
  title,
  description,
  icon: Icon,
  currentLabel,
}: SubpageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#EFF5FF] to-white pt-8 pb-12 px-6 lg:px-12 border-b border-slate-100">
      {/* Subtle architectural dot grid pattern for technical texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1080px]">
        {/* Breadcrumb Navigation Trail */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[12.5px] text-brand-slate font-medium">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 hover:text-brand-blue transition-colors"
              >
                <Home className="h-3.5 w-3.5" />
                <span>Home</span>
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            </li>
            <li className="text-brand-blue font-semibold" aria-current="page">
              {currentLabel}
            </li>
          </ol>
        </nav>

        {/* Header Content */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-3.5 py-1 text-[12px] font-medium text-brand-blue mb-4 shadow-2xs backdrop-blur-sm">
            {Icon && <Icon className="h-3.5 w-3.5" />}
            <span>{badge}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-brand-charcoal leading-[1.18]">
            {title}
          </h1>

          <p className="mt-4 text-[15px] sm:text-[16px] text-brand-slate leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
