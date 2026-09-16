import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryCard({
  category,
  featured = false,
}) {
  const Icon = category.icon;

  return (
    <Link
      to={category.slug}
      className={[
        "group relative block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-[var(--cmr-brand-strong)] hover:shadow-[var(--shadow-md)]",
        featured
          ? "p-7 sm:p-8"
          : "p-5 sm:p-6",
      ].join(" ")}
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[var(--cmr-brand)] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"
      />

      <div className="relative">
        {/* Icon */}
        <div
          className={[
            "flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text-secondary)] transition-all duration-200 group-hover:border-[var(--cmr-brand)] group-hover:bg-[var(--cmr-brand)] group-hover:text-[#4F4A75]",
            featured
              ? "h-11 w-11"
              : "h-10 w-10",
          ].join(" ")}
        >
          {Icon && (
            <Icon
              size={featured ? 19 : 17}
              strokeWidth={1.8}
            />
          )}
        </div>

        {/* Content */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              className={[
                "font-semibold tracking-[-0.02em] text-[var(--text-primary)]",
                featured
                  ? "text-[17px]"
                  : "text-[15px]",
              ].join(" ")}
            >
              {category.title}
            </h3>

            {category.description && (
              <p className="mt-2 max-w-[420px] text-[12px] leading-5 text-[var(--text-tertiary)]">
                {category.description}
              </p>
            )}

            {category.articleCount !== undefined && (
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
                {category.articleCount}{" "}
                {category.articleCount === 1
                  ? "article"
                  : "articles"}
              </p>
            )}
          </div>

          <ArrowUpRight
            size={17}
            strokeWidth={1.7}
            className="mt-0.5 shrink-0 text-[var(--text-tertiary)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text-primary)]"
          />
        </div>
      </div>
    </Link>
  );
}