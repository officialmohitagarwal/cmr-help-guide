import { navigation } from "../../data/navigation";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  const gettingStarted =
    navigation.find(
      (section) => section.id === "getting-started"
    );

  const platform =
    navigation.find(
      (section) => section.id === "platform"
    );

  const resources =
    navigation.find(
      (section) => section.id === "resources"
    );

  return (
    <section className="mx-auto max-w-[1180px] px-6 py-14 lg:px-8 lg:py-16">
      {gettingStarted && (
        <div>
          <SectionHeading
            eyebrow="GETTING STARTED"
            title="Start here"
            description="New to CMR? Begin with the basics and learn how everything fits together."
          />

          <div className="mt-7">
            {gettingStarted.items.map((item) => (
              <CategoryCard
                key={item.id}
                category={item}
                featured
              />
            ))}
          </div>
        </div>
      )}

      {platform && (
        <div className="mt-16 lg:mt-20">
          <SectionHeading
            eyebrow="EXPLORE CMR"
            title="Explore the platform"
            description="Learn how each part of CMR works and discover the tools available to you."
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platform.items.map((item) => (
              <CategoryCard
                key={item.id}
                category={item}
              />
            ))}
          </div>
        </div>
      )}

      {resources && (
        <div className="mt-16 lg:mt-20">
          <SectionHeading
            eyebrow="RESOURCES"
            title="Need some help?"
            description="Find quick answers or solutions to common questions."
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {resources.items.map((item) => (
              <CategoryCard
                key={item.id}
                category={item}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="max-w-[620px]">
      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--cmr-brand-strong)]">
        {eyebrow}
      </div>

      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[var(--text-primary)]">
        {title}
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[var(--text-tertiary)]">
        {description}
      </p>
    </div>
  );
}