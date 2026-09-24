import { useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  ChevronDown,
  CircleHelp,
  Search,
  Wrench,
} from "lucide-react";
import {
  Link,
  useLocation,
} from "react-router-dom";

function FAQItem({
  item,
  open,
  onToggle,
}) {
  return (
    <div
      id={item.id}
      className="scroll-mt-28 border-b border-[var(--border)] last:border-b-0"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-[var(--surface-subtle)]"
      >
        <span className="text-[14px] font-medium leading-6 text-[var(--text-primary)]">
          {item.question}
        </span>

        <ChevronDown
          size={17}
          strokeWidth={1.8}
          className={[
            "shrink-0 text-[var(--text-tertiary)] transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {open && (
        <div className="px-6 pb-6">
          <div className="max-w-[760px] text-[13px] leading-6 text-[var(--text-secondary)]">
            <div>{item.answer}</div>

            {item.article?.slug && (
              <Link
                to={item.article.slug}
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--text-secondary)]"
              >
                Read the full guide
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function TroubleshootingItem({
  item,
  open,
  onToggle,
}) {
  return (
    <div
      id={item.id}
      className="scroll-mt-28 border-b border-[var(--border)] last:border-b-0"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition hover:bg-[var(--surface-subtle)]"
      >
        <div className="flex min-w-0 gap-3">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--surface-subtle)] text-[var(--text-secondary)]">
            <AlertCircle size={15} />
          </div>

          <span className="text-[14px] font-medium leading-6 text-[var(--text-primary)]">
            {item.problem}
          </span>
        </div>

        <ChevronDown
          size={17}
          strokeWidth={1.8}
          className={[
            "mt-1 shrink-0 text-[var(--text-tertiary)] transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {open && (
        <div className="px-6 pb-7 pl-16">
          <div className="max-w-[760px]">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
                Why this happens
              </div>

              <p className="mt-2 text-[13px] leading-6 text-[var(--text-secondary)]">
                {item.cause}
              </p>
            </div>

            <div className="mt-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
                What to check
              </div>

              <ol className="mt-3 space-y-2.5">
                {item.steps.map((step, index) => (
                  <li
                    key={`${item.id}-${index}`}
                    className="flex gap-3 text-[13px] leading-6 text-[var(--text-secondary)]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[10px] font-medium text-[var(--text-tertiary)]">
                      {index + 1}
                    </span>

                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {item.note && (
              <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] px-4 py-3 text-[12px] leading-5 text-[var(--text-secondary)]">
                <span className="font-medium text-[var(--text-primary)]">
                  Note:
                </span>{" "}
                {item.note}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SupportPage({
  type = "faq",
  title,
  description,
  groups = [],
}) {
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const isFaq = type === "faq";

  /*
   * Open the FAQ / troubleshooting entry when
   * navigating from global search using #id.
   */
  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (!hash) {
      return;
    }

    const matchingItem = groups
      .flatMap((group) => group.items)
      .find((item) => item.id === hash);

    if (!matchingItem) {
      return;
    }

    setOpenId(hash);

    requestAnimationFrame(() => {
      document
        .getElementById(hash)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    });
  }, [location.hash, groups]);

  const normalizedQuery = query
    .trim()
    .toLowerCase();

  const filteredGroups = groups
    .map((group) => {
      const matchingItems = group.items.filter(
        (item) => {
          const searchableText = isFaq
            ? `${item.question} ${item.answer}`
            : `${item.problem} ${item.cause} ${item.steps.join(
                " "
              )}`;

          return searchableText
            .toLowerCase()
            .includes(normalizedQuery);
        }
      );

      return {
        ...group,
        items: matchingItems,
      };
    })
    .filter(
      (group) => group.items.length > 0
    );

  const totalItems = groups.reduce(
    (total, group) =>
      total + group.items.length,
    0
  );

  return (
    <div className="min-w-0 flex-1">
      <div className="mx-auto max-w-[920px] px-6 py-10 lg:px-10">
        <header>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] shadow-[var(--shadow-sm)]">
            {isFaq ? (
              <CircleHelp size={19} />
            ) : (
              <Wrench size={19} />
            )}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-[var(--text-primary)]">
            {title}
          </h1>

          <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-[var(--text-secondary)]">
            {description}
          </p>

          <div className="mt-7 flex items-center gap-3 text-[11px] text-[var(--text-tertiary)]">
            <span>
              {groups.length} topics
            </span>

            <span>•</span>

            <span>
              {totalItems} entries
            </span>
          </div>
        </header>

        <div className="relative mt-10">
          <Search
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
          />

          <input
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder={
              isFaq
                ? "Search frequently asked questions..."
                : "Search troubleshooting topics..."
            }
            className="h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] pl-10 pr-4 text-[13px] text-[var(--text-primary)] outline-none shadow-[var(--shadow-sm)] placeholder:text-[var(--text-tertiary)] transition focus:border-[var(--cmr-brand-strong)] focus:ring-2 focus:ring-[rgba(194,190,231,0.22)]"
          />
        </div>

        <div className="mt-10 space-y-12">
          {filteredGroups.map((group) => (
            <section key={group.id}>
              <div className="mb-4">
                <h2 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                  {group.title}
                </h2>

                {group.description && (
                  <p className="mt-1.5 max-w-[720px] text-[12px] leading-5 text-[var(--text-tertiary)]">
                    {group.description}
                  </p>
                )}
              </div>

              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
                {group.items.map((item) =>
                  isFaq ? (
                    <FAQItem
                      key={item.id}
                      item={item}
                      open={
                        openId === item.id
                      }
                      onToggle={() =>
                        setOpenId(
                          (current) =>
                            current === item.id
                              ? null
                              : item.id
                        )
                      }
                    />
                  ) : (
                    <TroubleshootingItem
                      key={item.id}
                      item={item}
                      open={
                        openId === item.id
                      }
                      onToggle={() =>
                        setOpenId(
                          (current) =>
                            current === item.id
                              ? null
                              : item.id
                        )
                      }
                    />
                  )
                )}
              </div>
            </section>
          ))}

          {filteredGroups.length === 0 && (
            <div className="rounded-xl border border-dashed border-[var(--border)] px-6 py-12 text-center">
              <div className="text-sm font-medium text-[var(--text-primary)]">
                No results found
              </div>

              <p className="mt-2 text-[12px] text-[var(--text-tertiary)]">
                Try a different search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import {
//   AlertCircle,
//   ChevronDown,
//   CircleHelp,
//   Search,
//   Wrench,
// } from "lucide-react";
// import { useLocation } from "react-router-dom";

// function FAQItem({
//   item,
//   open,
//   onToggle,
// }) {
//   return (
//     <div
//       id={item.id}
//       className="scroll-mt-28 border-b border-[var(--border)] last:border-b-0"
//     >
//       <button
//         type="button"
//         onClick={onToggle}
//         className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-[var(--surface-subtle)]"
//       >
//         <span className="text-[14px] font-medium leading-6 text-[var(--text-primary)]">
//           {item.question}
//         </span>

//         <ChevronDown
//           size={17}
//           className={[
//             "shrink-0 text-[var(--text-tertiary)] transition-transform duration-200",
//             open ? "rotate-180" : "",
//           ].join(" ")}
//         />
//       </button>

//       {open && (
//         <div className="px-6 pb-6">
//           <div className="max-w-[760px] text-[13px] leading-6 text-[var(--text-secondary)]">
//             {item.answer}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function TroubleshootingItem({
//   item,
//   open,
//   onToggle,
// }) {
//   return (
//     <div
//       id={item.id}
//       className="scroll-mt-28 border-b border-[var(--border)] last:border-b-0"
//     >
//       <button
//         type="button"
//         onClick={onToggle}
//         className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition hover:bg-[var(--surface-subtle)]"
//       >
//         <div className="flex min-w-0 gap-3">
//           <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--surface-subtle)] text-[var(--text-secondary)]">
//             <AlertCircle size={15} />
//           </div>

//           <span className="text-[14px] font-medium leading-6 text-[var(--text-primary)]">
//             {item.problem}
//           </span>
//         </div>

//         <ChevronDown
//           size={17}
//           className={[
//             "mt-1 shrink-0 text-[var(--text-tertiary)] transition-transform duration-200",
//             open ? "rotate-180" : "",
//           ].join(" ")}
//         />
//       </button>

//       {open && (
//         <div className="px-6 pb-7 pl-16">
//           <div className="max-w-[760px]">
//             <div>
//               <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
//                 Why this happens
//               </div>

//               <p className="mt-2 text-[13px] leading-6 text-[var(--text-secondary)]">
//                 {item.cause}
//               </p>
//             </div>

//             <div className="mt-6">
//               <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
//                 What to check
//               </div>

//               <ol className="mt-3 space-y-2.5">
//                 {item.steps.map((step, index) => (
//                   <li
//                     key={`${item.id}-${index}`}
//                     className="flex gap-3 text-[13px] leading-6 text-[var(--text-secondary)]"
//                   >
//                     <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[10px] font-medium text-[var(--text-tertiary)]">
//                       {index + 1}
//                     </span>

//                     <span>{step}</span>
//                   </li>
//                 ))}
//               </ol>
//             </div>

//             {item.note && (
//               <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] px-4 py-3 text-[12px] leading-5 text-[var(--text-secondary)]">
//                 <span className="font-medium text-[var(--text-primary)]">
//                   Note:
//                 </span>{" "}
//                 {item.note}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function SupportPage({
//   type = "faq",
//   title,
//   description,
//   groups = [],
// }) {
//   const location = useLocation();

//   const [query, setQuery] = useState("");
//   const [openId, setOpenId] = useState(null);

//   const isFaq = type === "faq";

//   /*
//    * Open the FAQ / troubleshooting entry when
//    * navigating from global search using #id.
//    */
//   useEffect(() => {
//     const hash = location.hash.replace("#", "");

//     if (!hash) {
//       return;
//     }

//     const matchingItem = groups
//       .flatMap((group) => group.items)
//       .find((item) => item.id === hash);

//     if (!matchingItem) {
//       return;
//     }

//     setOpenId(hash);

//     requestAnimationFrame(() => {
//       document
//         .getElementById(hash)
//         ?.scrollIntoView({
//           behavior: "smooth",
//           block: "center",
//         });
//     });
//   }, [location.hash, groups]);

//   const normalizedQuery = query
//     .trim()
//     .toLowerCase();

//   const filteredGroups = groups
//     .map((group) => {
//       const matchingItems = group.items.filter(
//         (item) => {
//           const searchableText = isFaq
//             ? `${item.question} ${item.answer}`
//             : `${item.problem} ${item.cause} ${item.steps.join(
//                 " "
//               )}`;

//           return searchableText
//             .toLowerCase()
//             .includes(normalizedQuery);
//         }
//       );

//       return {
//         ...group,
//         items: matchingItems,
//       };
//     })
//     .filter((group) => group.items.length > 0);

//   const totalItems = groups.reduce(
//     (total, group) =>
//       total + group.items.length,
//     0
//   );

//   return (
//     <div className="min-w-0 flex-1">
//       <div className="mx-auto max-w-[920px] px-6 py-10 lg:px-10">
//         <header>
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] shadow-[var(--shadow-sm)]">
//             {isFaq ? (
//               <CircleHelp size={19} />
//             ) : (
//               <Wrench size={19} />
//             )}
//           </div>

//           <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-[var(--text-primary)]">
//             {title}
//           </h1>

//           <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-[var(--text-secondary)]">
//             {description}
//           </p>

//           <div className="mt-7 flex items-center gap-3 text-[11px] text-[var(--text-tertiary)]">
//             <span>
//               {groups.length} topics
//             </span>

//             <span>•</span>

//             <span>
//               {totalItems} entries
//             </span>
//           </div>
//         </header>

//         <div className="relative mt-10">
//           <Search
//             size={16}
//             className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
//           />

//           <input
//             value={query}
//             onChange={(event) =>
//               setQuery(event.target.value)
//             }
//             placeholder={
//               isFaq
//                 ? "Search frequently asked questions..."
//                 : "Search troubleshooting topics..."
//             }
//             className="h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] pl-10 pr-4 text-[13px] text-[var(--text-primary)] outline-none shadow-[var(--shadow-sm)] placeholder:text-[var(--text-tertiary)] transition focus:border-[var(--cmr-brand-strong)] focus:ring-2 focus:ring-[rgba(194,190,231,0.22)]"
//           />
//         </div>

//         <div className="mt-10 space-y-12">
//           {filteredGroups.map((group) => (
//             <section key={group.id}>
//               <div className="mb-4">
//                 <h2 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
//                   {group.title}
//                 </h2>

//                 {group.description && (
//                   <p className="mt-1.5 max-w-[720px] text-[12px] leading-5 text-[var(--text-tertiary)]">
//                     {group.description}
//                   </p>
//                 )}
//               </div>

//               <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
//                 {group.items.map((item) =>
//                   isFaq ? (
//                     <FAQItem
//                       key={item.id}
//                       item={item}
//                       open={openId === item.id}
//                       onToggle={() =>
//                         setOpenId((current) =>
//                           current === item.id
//                             ? null
//                             : item.id
//                         )
//                       }
//                     />
//                   ) : (
//                     <TroubleshootingItem
//                       key={item.id}
//                       item={item}
//                       open={openId === item.id}
//                       onToggle={() =>
//                         setOpenId((current) =>
//                           current === item.id
//                             ? null
//                             : item.id
//                         )
//                       }
//                     />
//                   )
//                 )}
//               </div>
//             </section>
//           ))}

//           {filteredGroups.length === 0 && (
//             <div className="rounded-xl border border-dashed border-[var(--border)] px-6 py-12 text-center">
//               <div className="text-sm font-medium text-[var(--text-primary)]">
//                 No results found
//               </div>

//               <p className="mt-2 text-[12px] text-[var(--text-tertiary)]">
//                 Try a different search term.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }