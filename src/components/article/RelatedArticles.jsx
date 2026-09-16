import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RelatedArticles({
  articles = [],
}) {
  if (!articles.length) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-[var(--border)] pt-8">
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
        Related articles
      </h2>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={article.slug}
            className="group flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--cmr-brand-strong)] hover:shadow-[var(--shadow-sm)]"
          >
            <div className="min-w-0">
              <h3 className="truncate text-[13px] font-semibold text-[var(--text-primary)]">
                {article.title}
              </h3>

              {article.description && (
                <p className="mt-1 line-clamp-2 text-[11px] leading-5 text-[var(--text-tertiary)]">
                  {article.description}
                </p>
              )}
            </div>

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="shrink-0 text-[var(--text-tertiary)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text-primary)]"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}