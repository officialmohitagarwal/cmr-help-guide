import { useEffect, useState } from "react";

export default function useScrollSpy(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] || "");

  useEffect(() => {
    if (!ids.length) {
      setActiveId("");
      return;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -65% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [ids]);

  return activeId;
}