import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ items = [] }) {
  const [openId, setOpenId] = useState(null);

  if (!items.length) {
    return null;
  }

  const toggleItem = (id) => {
    setOpenId((currentId) =>
      currentId === id ? null : id
    );
  };

  return (
    <div className="mt-7">
      <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        {items.map((item, index) => {
          const id = item.id || `faq-${index}`;
          const isOpen = openId === id;

          return (
            <div
              key={id}
              className={
                index !== items.length - 1
                  ? "border-b border-[var(--border)]"
                  : ""
              }
            >
              <button
                type="button"
                onClick={() => toggleItem(id)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--surface-subtle)]"
              >
                <span className="text-[14px] font-medium leading-6 text-[var(--text-primary)]">
                  {item.question}
                </span>

                <ChevronDown
                  size={16}
                  strokeWidth={1.8}
                  className={[
                    "shrink-0 text-[var(--text-tertiary)] transition-transform duration-200",
                    isOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>

              <div
                className={[
                  "grid transition-[grid-template-rows,opacity] duration-200",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5">
                    <p className="text-[13px] leading-6 text-[var(--text-secondary)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}