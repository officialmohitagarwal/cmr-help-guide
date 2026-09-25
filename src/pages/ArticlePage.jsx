
import { useMemo } from "react";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../components/layout/Breadcrumbs";
import ArticleHeader from "../components/article/ArticleHeader";
import ArticleNavigation from "../components/article/ArticleNavigation";
import RelatedArticles from "../components/article/RelatedArticles";
import Screenshot from "../components/article/Screenshot";
import TableOfContents from "../components/navigation/TableOfContents";
import BackToTop from "../components/navigation/BackToTop";

import ArticleRenderer from "../components/article/ArticleRenderer";

import {
  articles,
  getArticleBySlug,
} from "../data";

export default function ArticlePage() {
  const { "*": articlePath } = useParams();

  const article = useMemo(() => {
    if (!articlePath) {
      return null;
    }

    return getArticleBySlug(`/${articlePath}`);
  }, [articlePath]);

  const articleIndex = useMemo(() => {
    if (!article) {
      return -1;
    }

    return articles.findIndex(
      (item) => item.id === article.id
    );
  }, [article]);

  const previousArticle =
    articleIndex > 0
      ? articles[articleIndex - 1]
      : null;

  const nextArticle =
    articleIndex >= 0 &&
    articleIndex < articles.length - 1
      ? articles[articleIndex + 1]
      : null;

  const relatedArticles = useMemo(() => {
    if (!article) {
      return [];
    }

    return articles
      .filter((item) => item.id !== article.id)
      .filter(
        (item) =>
          item.category?.id === article.category?.id
      )
      .slice(0, 2);
  }, [article]);

  if (!article) {
    return (
      <div className="flex min-h-[60vh] flex-1 items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
            Article not found
          </h1>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            The article you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const toc = [
    {
      id: "introduction",
      label: "Introduction",
    },
    ...article.sections.map((section) => ({
      id: section.id,
      label: section.title,
    })),
  ];

  return (
    <>
      <div className="min-w-0 flex-1">
        <div className="mx-auto flex max-w-[1180px] gap-10 px-6 py-8 lg:px-10">
          <main className="min-w-0 flex-1">
            <Breadcrumbs
              items={[
                {
                  label: article.category.label,
                  href:
                    article.category.slug ||
                    article.category.id,
                },
                {
                  label: article.title,
                },
              ]}
            />

            <article className="mt-8 max-w-[760px] pb-24">
              <ArticleHeader
                title={article.title}
                description={article.description}
                author={article.author}
                updated={article.updated}
              />

              {/* Article hero image */}
              {article.heroImage?.src && (
                <div className="mt-8">
                  <Screenshot
                    src={article.heroImage.src}
                    alt={article.heroImage.alt}
                    caption={article.heroImage.caption}
                  />
                </div>
              )}

              {/* Introduction */}
              {article.introduction && (
                <div
                  id="introduction"
                  className="mt-8 scroll-mt-28"
                >
                  <p className="text-[15px] leading-7 text-[var(--text-secondary)]">
                    {article.introduction}
                  </p>
                </div>
              )}

              <div className="mt-14">
                <ArticleRenderer
                  sections={article.sections}
                />
              </div>

              <RelatedArticles
                articles={relatedArticles}
              />

              <ArticleNavigation
                previous={previousArticle}
                next={nextArticle}
              />
            </article>
          </main>

          <TableOfContents items={toc} />
        </div>
      </div>

      <BackToTop />
    </>
  );
}