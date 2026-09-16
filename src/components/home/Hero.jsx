import SearchBar from "./SearchBar";

export default function Hero({ onSearchClick }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[620px] -translate-x-1/2 -translate-y-[58%] rounded-full bg-[var(--cmr-brand)] opacity-[0.14] blur-[90px]"
      />

      <div className="relative mx-auto max-w-[880px] px-6 pb-12 pt-11 text-center sm:pb-14 sm:pt-13 lg:px-8 lg:pt-14">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 shadow-[var(--shadow-sm)]">
          {/* Live status indicator */}
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-[#6F68B5] opacity-50" />

            <span className="relative h-1.5 w-1.5 rounded-full bg-[#6F68B5]" />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
            CMR Help Center
          </span>
        </div>

        <h1 className="mx-auto max-w-[700px] text-[36px] font-semibold tracking-[-0.045em] text-[var(--text-primary)] sm:text-[44px] lg:text-[48px]">
          How can we help you?
        </h1>

        <p className="mx-auto mt-4 max-w-[590px] text-[14px] leading-6 text-[var(--text-secondary)] sm:text-[15px]">
          Everything you need to get started with Cold Mail Reseller,
          understand the platform, and make the most of CMR.
        </p>

        <div className="mx-auto mt-7 max-w-[640px]">
          <SearchBar onClick={onSearchClick} />
        </div>
      </div>
    </section>
  );
}