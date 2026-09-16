import Breadcrumbs from "../layout/Breadcrumbs";
import TableOfContents from "../navigation/TableOfContents";

export default function ArticleLayout({
  children,
  breadcrumbs = [],
  toc = [],
}) {
  return (
    <div className="min-w-0 flex-1">
      <div className="mx-auto flex max-w-[1180px] gap-10 px-6 py-8 lg:px-10">
        <main className="min-w-0 flex-1">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-8 max-w-[760px]">
            {children}
          </div>
        </main>

        <TableOfContents items={toc} />
      </div>
    </div>
  );
}