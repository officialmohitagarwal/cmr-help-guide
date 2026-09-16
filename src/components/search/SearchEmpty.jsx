import { Search } from "lucide-react";

export default function SearchEmpty({
  title = "No results found",
  description = "Try a different keyword or search phrase.",
}) {
  return (
    <div className="px-4 py-12 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--surface-subtle)]">
        <Search
          size={18}
          className="text-[var(--text-tertiary)]"
        />
      </div>

      <p className="mt-4 text-[13px] font-medium text-[var(--text-primary)]">
        {title}
      </p>

      <p className="mt-1.5 text-[12px] text-[var(--text-tertiary)]">
        {description}
      </p>
    </div>
  );
}