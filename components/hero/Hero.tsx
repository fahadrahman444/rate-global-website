import Link from "next/link";
import { User, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-20">
      <div className="mt-8 lg:mt-16 relative">
          
          {/* Upper-Right Block: The Big Headline (Col 6 to 12) */}
          <div className="lg:ml-[44%] max-w-[580px]">
            <h1 className="font-display text-[36px] sm:text-[46px] lg:text-[52px] font-medium leading-[1.14] tracking-[-0.03em] text-brand-charcoal">
              We build websites, apps, and platforms{" "}
              <span className="text-brand-blue">— user-first, outcome-driven.</span>
            </h1>
          </div>

          {/* Lower-Left Block: Supporting Value Prop + Buttons */}
          <div className="mt-8 lg:mt-2 max-w-[340px] lg:w-[340px]">
            <p className="text-[14.5px] leading-[1.62] text-brand-slate font-normal">
              From launch to scale, we bring experience-led strategy, lean tech, and just the right structure to get it live.
            </p>

            {/* Dual Pill Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {/* Primary Blue CTA with Avatar */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-brand-blue hover:bg-brand-darkblue transition-all py-2 pr-5 pl-2 text-[13px] font-medium text-white shadow-md shadow-blue-500/25 min-h-[44px]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white">
                  <User className="h-4 w-4" />
                </span>
                <span>Book a Discovery Call</span>
              </Link>

              {/* Secondary Outlined Glass Pill */}
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-brand-charcoal bg-white/60 hover:bg-white px-5 py-2 text-[13px] font-medium text-brand-charcoal backdrop-blur-sm transition-all min-h-[44px]"
              >
                <span>See Our Impact</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-brand-slate" />
              </Link>
            </div>
          </div>

        </div>
    </section>
  );
}
