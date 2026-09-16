import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Breadcrumbs from "../components/layout/Breadcrumbs";

export default function CategoryPage({
  category,
}) {
  return (
    <div className="min-w-0 flex-1">
      <div className="mx-auto max-w-[920px] px-6 py-10 lg:px-10">
        <Breadcrumbs
          items={[
            {
              label: category.title,
            },
          ]}
        />

        <header className="mt-10">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
            {category.title}
          </h1>

          <p className="mt-4 max-w-[700px] text-[16px] leading-7 text-[var(--text-secondary)]">
            {category.description}
          </p>

          <p className="mt-5 text-[12px] text-[var(--text-tertiary)]">
            {category.articles.length}{" "}
            {category.articles.length === 1
              ? "article"
              : "articles"}
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
          {category.articles.map(
            (article, index) => (
              <Link
                key={article.id}
                to={article.slug}
                className={[
                  "group flex items-center gap-5 px-6 py-5 transition-colors",
                  "hover:bg-[var(--surface-subtle)]",
                  index !==
                    category.articles.length - 1
                    ? "border-b border-[var(--border)]"
                    : "",
                ].join(" ")}
              >
                <div className="min-w-0 flex-1">
                  <h2 className="text-[14px] font-medium text-[var(--text-primary)]">
                    {article.title}
                  </h2>

                  {article.description && (
                    <p className="mt-1.5 text-[12px] leading-5 text-[var(--text-tertiary)]">
                      {article.description}
                    </p>
                  )}
                </div>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="shrink-0 text-[var(--text-tertiary)] transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text-primary)]"
                />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}