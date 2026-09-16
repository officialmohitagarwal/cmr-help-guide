import Section from "./Section";
import Step from "./Step";
import Screenshot from "./Screenshot";
import Video from "./Video";
import Callout from "./Callout";
import LearnMore from "./LearnMore";
import FAQ from "./FAQ";
import CodeBlock from "./CodeBlock";

export default function ArticleRenderer({
  sections = [],
}) {
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
            description={block.description}
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
              description={step.description}
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
          code={block.content}
          language={block.language}
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
          <LearnMore
            items={block.items}
          />
        </div>
      );

    case "faq":
      return (
        <div className="mt-8">
          <FAQ
            items={block.items}
          />
        </div>
      );

    default:
      return null;
  }
}