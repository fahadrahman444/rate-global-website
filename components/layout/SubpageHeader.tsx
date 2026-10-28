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
    <div className="pt-6 sm:pt-8">
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
  );
}
