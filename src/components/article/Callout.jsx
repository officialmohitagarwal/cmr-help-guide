import {
  AlertCircle,
  CheckCircle2,
  Info,
  Lightbulb,
  TriangleAlert,
} from "lucide-react";

const variants = {
  info: {
    icon: Info,
  },
  tip: {
    icon: Lightbulb,
  },
  success: {
    icon: CheckCircle2,
  },
  warning: {
    icon: TriangleAlert,
  },
  danger: {
    icon: AlertCircle,
  },
};

export default function Callout({
  type = "info",
  title,
  content,
}) {
  const variant = variants[type] || variants.info;
  const Icon = variant.icon;

  return (
    <aside className="rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0 text-[var(--cmr-brand-strong)]">
          <Icon size={17} strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          {title && (
            <h3 className="text-[13px] font-semibold text-[var(--text-primary)]">
              {title}
            </h3>
          )}

          {content && (
            <p
              className={[
                "text-[13px] leading-6 text-[var(--text-secondary)]",
                title ? "mt-1" : "",
              ].join(" ")}
            >
              {content}
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}