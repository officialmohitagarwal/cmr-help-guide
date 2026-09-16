import { Command, Search } from "lucide-react";

export default function SearchBar({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-[52px] w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-left shadow-[var(--shadow-sm)] transition-all duration-200 hover:border-[var(--cmr-brand-strong)] hover:shadow-[var(--shadow-md)]"
    >
      <Search
        size={18}
        strokeWidth={1.8}
        className="shrink-0 text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--cmr-brand-strong)]"
      />

      <span className="flex-1 text-[13px] text-[var(--text-tertiary)]">
        Search guides, articles, and answers...
      </span>

      <span className="hidden items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--surface-subtle)] px-2 py-1 text-[10px] font-medium text-[var(--text-tertiary)] sm:flex">
        <Command size={10} />
        K
      </span>
    </button>
  );
}