export function PartnerLogos() {
  return (
    <div className="mt-8 lg:mt-16 text-center">
      <p className="text-[12px] font-semibold text-brand-muted mb-8 tracking-wider uppercase">
        Technologies &amp; Platforms We Build With
      </p>

      <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-10 opacity-85 text-brand-charcoal">
        {/* Webflow */}
        <div className="flex items-center gap-2 font-display text-[16px] font-bold tracking-tight">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.47 7.57l-3.32 9.29-2.61-7.24a5.1 5.1 0 0 0-.61-1.22 3.2 3.2 0 0 0-2.45-1.22H4.5v1.23h2.61a1.86 1.86 0 0 1 1.4.65c.34.42.59 1 .74 1.76l2.12 5.92-2.88 8.04h3.31l1.7-4.8 1.69 4.8h3.31l4.88-13.6h-3.41z"/>
          </svg>
          <span>Webflow</span>
        </div>

        {/* WordPress */}
        <div className="flex items-center gap-2 font-display text-[15px] font-bold tracking-tight">
          <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.04 14.54l-2.73-7.51h1.49l1.83 5.41 1.63-5.41h1.48l-2.71 7.51h-1z"/>
          </svg>
          <span>WORDPRESS</span>
        </div>

        {/* Umbraco */}
        <div className="font-display text-[16px] font-bold tracking-tight">
          umbraco
        </div>

        {/* Laravel */}
        <div className="flex items-center gap-2 font-display text-[16px] font-bold tracking-tight">
          <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 6.5l-9.5-5.5L3 6.5v11L12.5 23l9.5-5.5V6.5zm-2 1.15v8.7l-7.5 4.35-7.5-4.35v-8.7L12.5 3.3l7.5 4.35z"/>
          </svg>
          <span>Laravel</span>
        </div>

        {/* Webflow repeated for balance */}
        <div className="flex items-center gap-2 font-display text-[16px] font-bold tracking-tight">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.47 7.57l-3.32 9.29-2.61-7.24a5.1 5.1 0 0 0-.61-1.22 3.2 3.2 0 0 0-2.45-1.22H4.5v1.23h2.61a1.86 1.86 0 0 1 1.4.65c.34.42.59 1 .74 1.76l2.12 5.92-2.88 8.04h3.31l1.7-4.8 1.69 4.8h3.31l4.88-13.6h-3.41z"/>
          </svg>
          <span>Webflow</span>
        </div>

        {/* Umbraco repeated */}
        <div className="font-display text-[16px] font-bold tracking-tight">
          umbraco
        </div>
      </div>
    </div>
  );
}
