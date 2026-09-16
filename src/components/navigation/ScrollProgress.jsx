import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage =
        (scrollTop / documentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-16 z-40 h-[2px] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-[var(--cmr-brand-strong)] transition-[width] duration-75"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}