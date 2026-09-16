import useScrollSpy from "../../hooks/useScrollSpy";

export default function TableOfContents({ items = [] }) {
  const ids = items.map((item) => item.id);

  const activeId = useScrollSpy(ids);

  if (!items.length) {
    return null;
  }

  return (
    <aside className="hidden w-[210px] shrink-0 xl:block">
      <div className="sticky top-28">
        <div className="border-l border-[var(--border)] pl-5">
          <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
            On this page
          </div>

          <nav className="space-y-1">
            {items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={[
                    "relative block rounded-md py-1.5 pl-0 text-[12px] leading-5 transition-all duration-200",
                    isActive
                      ? "font-medium text-[var(--text-primary)]"
                      : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]",
                  ].join(" ")}
                >
                  {isActive && (
                    <span className="absolute -left-[21px] top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-[var(--cmr-brand-strong)]" />
                  )}

                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}