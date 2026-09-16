export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-2 px-6 py-7 text-center">
        <p className="text-[13px] font-medium text-[var(--text-secondary)]">
          Cold Mail Reseller Help Guide
        </p>

        <p className="text-[11px] text-[var(--text-tertiary)]">
          © 2026 CMR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}