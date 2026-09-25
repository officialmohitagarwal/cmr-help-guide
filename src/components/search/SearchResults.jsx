import { ArrowUpRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchResults({
  results = [],
  onClose,
}) {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    if (!slug) return;

    onClose?.();
    navigate(slug);
  };

  if (!Array.isArray(results) || results.length === 0) {
    return null;
  }

  return (
    <div className="space-y-1">
      {results.map((article) => {
        if (!article?.id || !article?.slug) {
          return null;
        }

        return (
          <button
            key={article.id}
            type="button"
            onClick={() => handleClick(article.slug)}
            className="group flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-150 hover:bg-[var(--surface-subtle)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cmr-brand)]"
          >
            {/* Article icon */}
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-colors duration-150 group-hover:border-[var(--cmr-brand)]">
              <Search
                size={14}
                strokeWidth={1.7}
                className="text-[var(--text-tertiary)] transition-colors duration-150 group-hover:text-[var(--cmr-brand-strong)]"
              />
            </div>

            {/* Article information */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <div className="min-w-0 flex-1 truncate text-[13px] font-medium text-[var(--text-primary)]">
                  {article.title}
                </div>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.7}
                  className="shrink-0 text-[var(--text-tertiary)] opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </div>

              {/* Category */}
              {article.category?.label && (
                <div className="mt-1 text-[11px] font-medium text-[var(--text-tertiary)]">
                  {article.category.label}
                </div>
              )}

              {/* Description */}
              {article.description && (
                <p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-[var(--text-secondary)]">
                  {article.description}
                </p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}