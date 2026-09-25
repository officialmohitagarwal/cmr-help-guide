import Section from "./Section";
import Step from "./Step";
import Screenshot from "./Screenshot";
import Video from "./Video";
import Callout from "./Callout";
import LearnMore from "./LearnMore";
import FAQ from "./FAQ";
import CodeBlock from "./CodeBlock";

export default function ArticleRenderer({ sections = [] }) {
  return (
    <div>
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
        >
          {section.content?.map((block, index) => (
            <ContentBlock
              key={`${section.id}-${index}`}
              block={block}
              index={index}
            />
          ))}
        </Section>
      ))}
    </div>
  );
}

function ContentBlock({ block, index }) {
  if (!block) {
    return null;
  }

  switch (block.type) {
    case "paragraph":
      return (
        <p className="mt-5 text-[15px] leading-7 text-[var(--text-secondary)]">
          {block.content}
        </p>
      );

    case "heading":
      return (
        <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
          {block.content}
        </h3>
      );

    case "step":
      return (
        <div className="mt-8">
          <Step
            number={block.number ?? index + 1}
            title={block.title}
            description={block.description ?? block.content}
          />
        </div>
      );

    case "steps":
      return (
        <div className="mt-7 space-y-8">
          {block.items?.map((step, stepIndex) => (
            <Step
              key={step.id || stepIndex}
              number={stepIndex + 1}
              title={step.title}
              description={step.description ?? step.content}
            />
          ))}
        </div>
      );

    case "screenshot":
      return (
        <div className="mt-5">
          <Screenshot
            src={block.src}
            alt={block.alt}
            caption={block.caption}
          />
        </div>
      );

    case "video":
      return (
        <div className="mt-7">
          <Video
            src={block.src}
            title={block.title}
            caption={block.caption}
          />
        </div>
      );

    case "code":
      return (
        <CodeBlock
          code={block.content ?? block.code ?? ""}
          language={block.language ?? "text"}
        />
      );

    case "callout":
      return (
        <div className="mt-7">
          <Callout
            type={block.variant}
            title={block.title}
            content={block.content}
          />
        </div>
      );

    case "learn-more":
      return (
        <div className="mt-7">
          <LearnMore items={block.items} />
        </div>
      );

    case "external-link":
      return (
        <div className="mt-8">
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] p-5 transition-all duration-200 hover:border-[var(--cmr-brand-strong)] hover:bg-[var(--surface-hover)]"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
              {block.title}
            </div>

            <div className="mt-2 text-[17px] font-semibold tracking-[-0.025em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--cmr-brand-strong)]">
              {block.label}
            </div>

            {block.description && (
              <p className="mt-2 max-w-[680px] text-[13px] leading-6 text-[var(--text-secondary)]">
                {block.description}
              </p>
            )}
          </a>
        </div>
      );

    case "faq":
      return (
        <div className="mt-8">
          <FAQ items={block.items} />
        </div>
      );

    default:
      return null;
  }
}