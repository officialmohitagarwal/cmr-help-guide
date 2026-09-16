export default function Step({
  number,
  title,
  description,
}) {
  return (
    <div className="relative">
      <div className="flex items-start gap-4">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-subtle)] text-[11px] font-semibold text-[var(--text-secondary)]">
          {number}
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="text-[15px] font-semibold tracking-[-0.015em] text-[var(--text-primary)]">
            {title}
          </h3>

          {description && (
            <p className="mt-2 max-w-[700px] text-[14px] leading-7 text-[var(--text-secondary)]">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}