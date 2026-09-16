export default function ArticleHeader({
  title,
  description,
  author,
  updated,
}) {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-[42px]">
        {title}
      </h1>

      {description && (
        <p className="mt-4 max-w-[680px] text-[17px] leading-8 text-[var(--text-secondary)]">
          {description}
        </p>
      )}

      {(author || updated) && (
        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[var(--text-tertiary)]">
          {author && (
            <span>
              Written by {author}
            </span>
          )}

          {author && updated && (
            <span aria-hidden="true">·</span>
          )}

          {updated && (
            <span>
              Updated {updated}
            </span>
          )}
        </div>
      )}
    </header>
  );
}