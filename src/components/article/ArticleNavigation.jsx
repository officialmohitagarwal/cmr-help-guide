import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticleNavigation({
  previous,
  next,
}) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Article navigation"
      className="mt-16 grid gap-3 border-t border-[var(--border)] pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          to={previous.slug}
          className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--cmr-brand-strong)] hover:shadow-[var(--shadow-sm)]"
        >
          <div className="flex items-center gap-2 text-[11px] font-medium text-[var(--text-tertiary)]">
            <ArrowLeft
              size={13}
              className="transition-transform group-hover:-translate-x-0.5"
            />

            Previous
          </div>

          <div className="mt-2 text-[13px] font-semibold text-[var(--text-primary)]">
            {previous.title}
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          to={next.slug}
          className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-right transition hover:border-[var(--cmr-brand-strong)] hover:shadow-[var(--shadow-sm)]"
        >
          <div className="flex items-center justify-end gap-2 text-[11px] font-medium text-[var(--text-tertiary)]">
            Next

            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </div>

          <div className="mt-2 text-[13px] font-semibold text-[var(--text-primary)]">
            {next.title}
          </div>
        </Link>
      )}
    </nav>
  );
}