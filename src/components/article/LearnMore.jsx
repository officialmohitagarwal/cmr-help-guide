import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LearnMore({
  items = [],
}) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="border-t border-[var(--border)] pt-7">
      <h3 className="text-[13px] font-semibold text-[var(--text-primary)]">
        Learn more
      </h3>

      <div className="mt-3 space-y-1">
        {items.map((item, index) => {
          const content = (
            <>
              <span className="min-w-0 flex-1">
                {item.title}
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
                className="shrink-0 text-[var(--text-tertiary)] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text-primary)]"
              />
            </>
          );

          if (item.href) {
            return item.external ? (
              <a
                key={item.id || index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-[var(--text-secondary)] transition hover:bg-[var(--surface-subtle)] hover:text-[var(--text-primary)]"
              >
                {content}
              </a>
            ) : (
              <Link
                key={item.id || index}
                to={item.href}
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-[var(--text-secondary)] transition hover:bg-[var(--surface-subtle)] hover:text-[var(--text-primary)]"
              >
                {content}
              </Link>
            );
          }

          return (
            <div
              key={item.id || index}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-[var(--text-secondary)]"
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}