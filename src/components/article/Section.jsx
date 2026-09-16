export default function Section({
  id,
  title,
  description,
  children,
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 pb-16 last:pb-0"
    >
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-[var(--text-secondary)]">
          {description}
        </p>
      )}

      <div>{children}</div>
    </section>
  );
}