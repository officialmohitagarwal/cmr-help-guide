import { useEffect, useMemo, useRef, useState } from "react";
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
import { troubleshootingGroups } from "../../data/troubleshooting";

/* ============================================================
   Search Utilities
============================================================ */

function normalizeText(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function getSearchTerms(query) {
  return normalizeText(query)
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * Recursively extracts searchable text from any article block.
 *
 * This is intentionally generic so new article block types do not
 * need to be added to the search every time.
 */
function extractSearchText(value, visited = new WeakSet()) {
  if (value === null || value === undefined) {
    return [];
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return [String(value)];
  }

  if (typeof value !== "object") {
    return [];
  }

  /*
   * Protect against accidental circular references.
   */
  if (visited.has(value)) {
    return [];
  }

  visited.add(value);

  const values = [];

  if (Array.isArray(value)) {
    value.forEach((item) => {
      values.push(...extractSearchText(item, visited));
    });

    return values;
  }

  Object.entries(value).forEach(([key, childValue]) => {
    /*
     * These are normally identifiers or UI metadata rather than
     * useful natural-language search content.
     */
    const ignoredKeys = new Set([
      "src",
      "href",
      "url",
      "id",
      "slug",
      "number",
      "score",
      "icon",
      "component",
    ]);

    if (ignoredKeys.has(key)) {
      return;
    }

    values.push(...extractSearchText(childValue, visited));
  });

  return values;
}

/**
 * Build the complete searchable text for an article.
 */
function getArticleSearchText(article) {
  if (!article) {
    return "";
  }

  const values = [];

  /*
   * Explicitly include important article-level fields.
   */
  values.push(
    article.title || "",
    article.description || "",
    article.introduction || "",
    article.author || "",
    article.updated || "",
    article.category?.label || "",
    article.category?.title || "",
    article.category?.description || ""
  );

  /*
   * Search the complete article structure recursively.
   *
   * This catches:
   * - section titles
   * - section descriptions
   * - paragraphs
   * - headings
   * - steps
   * - callouts
   * - learn-more items
   * - FAQ blocks
   * - screenshot captions
   * - labels
   * - nested content
   */
  values.push(...extractSearchText(article.sections || []));

  /*
   * Also support any future article structures that may store
   * content outside sections.
   */
  values.push(...extractSearchText(article.content || []));
  values.push(...extractSearchText(article.blocks || []));

  return normalizeText(values.join(" "));
}

/* ============================================================
   Search Scoring
============================================================ */

function scoreSearchMatch({
  query,
  terms,
  title,
  description,
  category,
  searchableText,
}) {
  let score = 0;

  const normalizedQuery = normalizeText(query);
  const normalizedTitle = normalizeText(title);
  const normalizedDescription = normalizeText(description);
  const normalizedCategory = normalizeText(category);
  const normalizedSearchableText = normalizeText(searchableText);

  if (!normalizedQuery) {
    return 0;
  }

  /*
   * Exact title match.
   */
  if (normalizedTitle === normalizedQuery) {
    score += 1000;
  }

  /*
   * Title starts with the query.
   */
  if (
    normalizedTitle &&
    normalizedTitle.startsWith(normalizedQuery)
  ) {
    score += 300;
  }

  /*
   * Title contains the complete query.
   */
  if (
    normalizedTitle &&
    normalizedTitle.includes(normalizedQuery)
  ) {
    score += 200;
  }

  /*
   * Description contains the complete query.
   */
  if (
    normalizedDescription &&
    normalizedDescription.includes(normalizedQuery)
  ) {
    score += 100;
  }

  /*
   * Category contains the complete query.
   */
  if (
    normalizedCategory &&
    normalizedCategory.includes(normalizedQuery)
  ) {
    score += 80;
  }

  /*
   * Full article content contains the complete phrase.
   */
  if (
    normalizedSearchableText &&
    normalizedSearchableText.includes(normalizedQuery)
  ) {
    score += 50;
  }

  /*
   * Score individual terms.
   *
   * We deliberately give title/category matches more weight than
   * general article content.
   */
  terms.forEach((term) => {
    if (normalizedTitle.includes(term)) {
      score += 60;
    }

    if (normalizedDescription.includes(term)) {
      score += 30;
    }

    if (normalizedCategory.includes(term)) {
      score += 25;
    }

    if (normalizedSearchableText.includes(term)) {
      score += 10;
    }
  });

  /*
   * Bonus when every query term exists somewhere in the article.
   *
   * This makes searches such as:
   *
   * "export mailbox"
   *
   * rank articles containing both words above articles containing
   * only one of the words.
   */
  const allTermsMatch =
    terms.length > 0 &&
    terms.every((term) =>
      normalizedSearchableText.includes(term)
    );

  if (allTermsMatch) {
    score += 100;
  }

  return score;
}

/* ============================================================
   Article Search
============================================================ */

function searchArticles(query) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [];
  }

  const terms = getSearchTerms(query);

  return articles
    .map((article) => {
      const title = normalizeText(article.title);
      const description = normalizeText(
        article.description
      );
      const category = normalizeText(
        article.category?.label ||
          article.category?.title ||
          ""
      );

      const searchableText =
        getArticleSearchText(article);

      const score = scoreSearchMatch({
        query,
        terms,
        title,
        description,
        category,
        searchableText,
      });

      return {
        ...article,
        type: "article",
        score,
      };
    })
    .filter((article) => article.score > 0);
}

/* ============================================================
   FAQ Search
============================================================ */

function searchFAQs(query) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [];
  }

  const terms = getSearchTerms(query);

  return faqGroups.flatMap((group) =>
    (group.items || [])
      .map((item) => {
        const title = normalizeText(
          item.question
        );

        const answer = normalizeText(
          item.answer
        );

        const groupTitle = normalizeText(
          group.title
        );

        const groupDescription = normalizeText(
          group.description
        );

        const searchableText = [
          title,
          answer,
          groupTitle,
          groupDescription,
          ...extractSearchText(item),
        ]
          .join(" ")
          .toLowerCase();

        const score = scoreSearchMatch({
          query,
          terms,
          title,
          description: answer,
          category: groupTitle,
          searchableText,
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

/* ============================================================
   Troubleshooting Search
============================================================ */

function searchTroubleshooting(query) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [];
  }

  const terms = getSearchTerms(query);

  return troubleshootingGroups.flatMap(
    (group) =>
      (group.items || [])
        .map((item) => {
          const title = normalizeText(
            item.problem
          );

          const cause = normalizeText(
            item.cause
          );

          const groupTitle = normalizeText(
            group.title
          );

          const groupDescription = normalizeText(
            group.description
          );

          const searchableText = [
            title,
            cause,
            item.note || "",
            ...(Array.isArray(item.steps)
              ? item.steps
              : []),
            groupTitle,
            groupDescription,
            ...extractSearchText(item),
          ]
            .join(" ")
            .toLowerCase();

          const score = scoreSearchMatch({
            query,
            terms,
            title,
            description: cause,
            category: groupTitle,
            searchableText,
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

/* ============================================================
   Combined Search
============================================================ */

function searchDocumentation(query) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [];
  }

  const results = [
    ...searchArticles(query),
    ...searchFAQs(query),
    ...searchTroubleshooting(query),
  ];

  /*
   * Remove duplicate results.
   */
  const uniqueResults = Array.from(
    new Map(
      results.map((result) => [
        `${result.type}:${result.id}`,
        result,
      ])
    ).values()
  );

  /*
   * Sort:
   *
   * 1. Highest relevance
   * 2. Article title alphabetically when scores match
   */
  return uniqueResults.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    return (a.title || "").localeCompare(
      b.title || ""
    );
  });
}

/* ============================================================
   Result Helpers
============================================================ */

function getCategoryLabel(result) {
  if (result.type === "faq") {
    return `FAQ · ${
      result.category?.label || "FAQs"
    }`;
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

/* ============================================================
   Search Modal
============================================================ */

export default function SearchModal({
  open,
  onClose,
}) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const inputRef = useRef(null);

  const results = useMemo(
    () => searchDocumentation(query),
    [query]
  );

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
    if (!slug) {
      return;
    }

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
        <div className="max-h-[70vh] overflow-y-auto p-2">
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
              <div className="flex items-center justify-between px-3 pb-2 pt-2">
                <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
                  {results.length}{" "}
                  {results.length === 1
                    ? "result"
                    : "results"}
                </div>
              </div>

              <div className="space-y-0.5">
                {results.map((result) => {
                  const Icon = getResultIcon(
                    result.type
                  );

                  return (
                    <button
                      key={`${result.type}-${result.id}`}
                      type="button"
                      onClick={() =>
                        handleResultClick(
                          result.slug
                        )
                      }
                      className="group flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-[var(--surface-subtle)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cmr-brand)]"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                        <Icon
                          size={14}
                          strokeWidth={1.7}
                          className="text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--cmr-brand-strong)]"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-2">
                          <div className="min-w-0 flex-1 text-[13px] font-medium text-[var(--text-primary)]">
                            {result.title}
                          </div>
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