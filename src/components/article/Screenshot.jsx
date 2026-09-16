import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function Screenshot({
  src,
  alt = "",
  caption,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!src) {
    return null;
  }

  return (
    <>
      <figure className="overflow-hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group block w-full cursor-zoom-in text-left"
          aria-label={`Enlarge image${alt ? `: ${alt}` : ""}`}
        >
          <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] shadow-[var(--shadow-sm)]">
            <img
              src={src}
              alt={alt}
              className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />

            {/* Zoom icon — visible only on hover */}
            <div className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-black/45 text-white opacity-0 shadow-sm backdrop-blur-sm transition-all duration-200 group-hover:opacity-100">
              <ZoomIn
                size={16}
                strokeWidth={1.8}
              />
            </div>
          </div>
        </button>

        {caption && (
          <figcaption className="mt-3 text-center text-[11px] leading-5 text-[var(--text-tertiary)]">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Enlarged image */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Close enlarged image"
          >
            <X
              size={19}
              strokeWidth={1.8}
            />
          </button>

          <div
            className="relative flex max-h-full max-w-full items-center justify-center"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[94vw] rounded-lg object-contain shadow-2xl sm:max-h-[88vh] sm:max-w-[90vw]"
            />
          </div>
        </div>
      )}
    </>
  );
}