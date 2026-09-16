import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({
  code = "",
  language = "text",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-[var(--border)] bg-[#15151a] shadow-[var(--shadow-sm)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/45">
          {language}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-white/55 transition hover:bg-white/10 hover:text-white"
        >
          {copied ? (
            <>
              <Check size={13} />
              Copied
            </>
          ) : (
            <>
              <Copy size={13} />
              Copy
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto p-5">
        <code className="font-mono text-[13px] leading-6 text-white/85">
          {code}
        </code>
      </pre>
    </div>
  );
}