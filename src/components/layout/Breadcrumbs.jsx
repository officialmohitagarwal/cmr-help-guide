import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({
  items = [],
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex min-w-0 items-center gap-1.5 text-[12px]"
    >
      <Link
        to="/"
        className="flex shrink-0 items-center gap-1.5 text-[var(--text-tertiary)] transition hover:text-[var(--text-secondary)]"
      >
        <Home size={13} />
        <span>Help Center</span>
      </Link>

      {items.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className="flex min-w-0 items-center gap-1.5"
        >
          <ChevronRight
            size={13}
            className="shrink-0 text-[var(--text-tertiary)]"
          />

          {item.href ? (
            <Link
              to={item.href}
              className="truncate text-[var(--text-tertiary)] transition hover:text-[var(--text-secondary)]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="truncate font-medium text-[var(--text-secondary)]">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}