import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchResults({
  results = [],
  onClose,
}) {
  const navigate = useNavigate();

  if (!results.length) {
    return null;
  }

  const handleClick = (slug) => {
    onClose?.();
    navigate(slug);
  };

  return (
    <div className="space-y-0.5">
      {results.map((article) => (
        <button
          key={article.id}
          type="button"
          onClick={() =>
            handleClick(article.slug)
          }
          className="group flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-[var(--surface-subtle)]"
        >
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <Search
              size={14}
              strokeWidth={1.7}
              className="text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--cmr-brand-strong)]"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-medium text-[var(--text-primary)]">
              {article.title}
            </div>

            {article.category?.label && (
              <div className="mt-1 text-[11px] text-[var(--text-tertiary)]">
                {article.category.label}
              </div>
            )}

            {article.description && (
              <p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-[var(--text-secondary)]">
                {article.description}
              </p>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}