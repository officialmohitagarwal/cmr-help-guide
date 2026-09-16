import { useEffect, useRef, useState } from "react";
import {
  CircleHelp,
  Command,
  Search,
  Wrench,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { articles } from "../../data";
import { faqGroups } from "../../data/faqs";
import {
  troubleshootingGroups,
} from "../../data/troubleshooting";

function getArticleSearchText(article) {
  const sectionText = (article.sections || [])
    .flatMap((section) => [
      section.title || "",
      ...(section.blocks || []).map((block) => {
        if (typeof block.content === "string") {
          return block.content;
        }

        if (Array.isArray(block.content)) {
          return block.content.join(" ");
        }

        return "";
      }),
    ])
    .join(" ");

  return [
    article.title || "",
    article.description || "",
    article.introduction || "",
    sectionText,
  ]
    .join(" ")
    .toLowerCase();
}

function searchArticles(query) {
  const normalizedQuery = query
    .trim()
    .toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery
    .split(/\s+/)
    .filter(Boolean);

  return articles
    .map((article) => {
      const searchableText =
        getArticleSearchText(article);

      const title = (
        article.title || ""
      ).toLowerCase();

      const description = (
        article.description || ""
      ).toLowerCase();

      let score = 0;

      if (title === normalizedQuery) {
        score += 100;
      }

      if (title.includes(normalizedQuery)) {
        score += 50;
      }

      if (
        description.includes(
          normalizedQuery
        )
      ) {
        score += 20;
      }

      terms.forEach((term) => {
        if (title.includes(term)) {
          score += 10;
        }

        if (description.includes(term)) {
          score += 5;
        }

        if (searchableText.includes(term)) {
          score += 2;
        }
      });

      return {
        ...article,
        type: "article",
        score,
      };
    })
    .filter((article) => article.score > 0);
}

function searchFAQs(query) {
  const normalizedQuery = query
    .trim()
    .toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery
    .split(/\s+/)
    .filter(Boolean);

  return faqGroups.flatMap((group) =>
    group.items
      .map((item) => {
        const title = (
          item.question || ""
        ).toLowerCase();

        const answer = (
          item.answer || ""
        ).toLowerCase();

        const groupTitle = (
          group.title || ""
        ).toLowerCase();

        const searchableText = [
          title,
          answer,
          groupTitle,
          group.description || "",
        ]
          .join(" ")
          .toLowerCase();

        let score = 0;

        if (title === normalizedQuery) {
          score += 100;
        }

        if (title.includes(normalizedQuery)) {
          score += 50;
        }

        if (
          answer.includes(
            normalizedQuery
          )
        ) {
          score += 20;
        }

        terms.forEach((term) => {
          if (title.includes(term)) {
            score += 10;
          }

          if (answer.includes(term)) {
            score += 5;
          }

          if (searchableText.includes(term)) {
            score += 2;
          }
        });

        return {
          id: `faq-${item.id}`,
          type: "faq",
          title: item.question,
          description: item.answer,
          category: {
            label: group.title,
          },
          slug: `/faqs#${item.id}`,
          score,
        };
      })
      .filter((item) => item.score > 0)
  );
}

function searchTroubleshooting(query) {
  const normalizedQuery = query
    .trim()
    .toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery
    .split(/\s+/)
    .filter(Boolean);

  return troubleshootingGroups.flatMap(
    (group) =>
      group.items
        .map((item) => {
          const title = (
            item.problem || ""
          ).toLowerCase();

          const cause = (
            item.cause || ""
          ).toLowerCase();

          const steps = (
            item.steps || []
          )
            .join(" ")
            .toLowerCase();

          const note = (
            item.note || ""
          ).toLowerCase();

          const groupTitle = (
            group.title || ""
          ).toLowerCase();

          const searchableText = [
            title,
            cause,
            steps,
            note,
            groupTitle,
            group.description || "",
          ]
            .join(" ")
            .toLowerCase();

          let score = 0;

          if (title === normalizedQuery) {
            score += 100;
          }

          if (title.includes(normalizedQuery)) {
            score += 50;
          }

          if (
            cause.includes(
              normalizedQuery
            )
          ) {
            score += 20;
          }

          if (
            steps.includes(
              normalizedQuery
            )
          ) {
            score += 15;
          }

          terms.forEach((term) => {
            if (title.includes(term)) {
              score += 10;
            }

            if (cause.includes(term)) {
              score += 5;
            }

            if (
              searchableText.includes(term)
            ) {
              score += 2;
            }
          });

          return {
            id: `troubleshooting-${item.id}`,
            type: "troubleshooting",
            title: item.problem,
            description: item.cause,
            category: {
              label: group.title,
            },
            slug: `/troubleshooting#${item.id}`,
            score,
          };
        })
        .filter((item) => item.score > 0)
  );
}

function searchDocumentation(query) {
  const results = [
    ...searchArticles(query),
    ...searchFAQs(query),
    ...searchTroubleshooting(query),
  ];

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

function getCategoryLabel(result) {
  if (result.type === "faq") {
    return `FAQ · ${result.category?.label || "FAQs"}`;
  }

  if (result.type === "troubleshooting") {
    return `Troubleshooting · ${
      result.category?.label ||
      "Troubleshooting"
    }`;
  }

  return (
    result.category?.label ||
    result.category?.title ||
    "Documentation"
  );
}

function getResultIcon(type) {
  if (type === "faq") {
    return CircleHelp;
  }

  if (type === "troubleshooting") {
    return Wrench;
  }

  return Search;
}

export default function SearchModal({
  open,
  onClose,
}) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const inputRef = useRef(null);

  const results = searchDocumentation(query);

  useEffect(() => {
    if (!open) {
      return;
    }

    setQuery("");

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  const handleResultClick = (slug) => {
    onClose();
    navigate(slug);
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/35 px-4 pt-[10vh] backdrop-blur-sm"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search documentation"
        className="w-full max-w-[680px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_80px_rgba(0,0,0,0.16)]"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        {/* Search input */}
        <div className="flex h-14 items-center gap-3 border-b border-[var(--border)] px-4">
          <Search
            size={18}
            strokeWidth={1.8}
            className="shrink-0 text-[var(--text-tertiary)]"
          />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search guides, articles, and answers..."
            className="min-w-0 flex-1 bg-transparent text-[14px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
          />

          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[var(--text-tertiary)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            aria-label="Close search"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {!query.trim() ? (
            <div className="px-4 py-10 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--surface-subtle)]">
                <Search
                  size={18}
                  className="text-[var(--text-tertiary)]"
                />
              </div>

              <p className="mt-4 text-[13px] font-medium text-[var(--text-primary)]">
                Search CMR documentation
              </p>

              <p className="mt-1.5 text-[12px] text-[var(--text-tertiary)]">
                Find guides, articles, FAQs, and
                troubleshooting answers.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-10 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--surface-subtle)]">
                <Search
                  size={18}
                  className="text-[var(--text-tertiary)]"
                />
              </div>

              <p className="mt-4 text-[13px] font-medium text-[var(--text-primary)]">
                No results found
              </p>

              <p className="mt-1.5 text-[12px] text-[var(--text-tertiary)]">
                Try a different keyword or search
                phrase.
              </p>
            </div>
          ) : (
            <>
              <div className="px-3 pb-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
                {results.length}{" "}
                {results.length === 1
                  ? "result"
                  : "results"}
              </div>

              <div className="space-y-0.5">
                {results.map((result) => {
                  const Icon =
                    getResultIcon(
                      result.type
                    );

                  return (
                    <button
                      key={result.id}
                      type="button"
                      onClick={() =>
                        handleResultClick(
                          result.slug
                        )
                      }
                      className="group flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-[var(--surface-subtle)]"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                        <Icon
                          size={14}
                          strokeWidth={1.7}
                          className="text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--cmr-brand-strong)]"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="text-[13px] font-medium text-[var(--text-primary)]">
                          {result.title}
                        </div>

                        <div className="mt-1 text-[11px] text-[var(--text-tertiary)]">
                          {getCategoryLabel(
                            result
                          )}
                        </div>

                        {result.description && (
                          <p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-[var(--text-secondary)]">
                            {result.description}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[var(--border)] px-4 py-2.5">
          <span className="text-[10px] text-[var(--text-tertiary)]">
            Search documentation, FAQs, and
            troubleshooting
          </span>

          <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-tertiary)]">
            <span className="flex items-center gap-1 rounded border border-[var(--border)] bg-[var(--surface-subtle)] px-1.5 py-1">
              <Command size={9} />
              K
            </span>

            <span>to open</span>

            <span className="ml-2 flex items-center gap-1 rounded border border-[var(--border)] bg-[var(--surface-subtle)] px-1.5 py-1">
              Esc
            </span>

            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}