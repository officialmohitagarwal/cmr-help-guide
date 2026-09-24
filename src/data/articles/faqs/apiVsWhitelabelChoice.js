export const apiVsWhitelabelChoiceArticle = {
  id: "faq-api-vs-whitelabel-choice",

  slug: "/faqs/api-vs-whitelabel-choice",

  title: "When Should I Use the CMR API Instead of the Whitelabel Dashboard?",

  description:
    "Understand when the CMR API or Whitelabel Dashboard is appropriate for your partner setup.",

  category: {
    id: "faqs",
    label: "FAQs",
    slug: "/faqs",
  },

  introduction:
    "The right CMR surface depends on how much of the customer experience and infrastructure workflow you want to build yourself.",

  sections: [
    {
      id: "use-api",

      title: "Use the CMR API when",

      description:
        "The API is designed for partners who need programmatic control.",

      content: [
        {
          type: "paragraph",
          content:
            "The API is intended for teams that already have a product or dashboard and want to use CMR as the underlying infrastructure.",
        },

        {
          type: "steps",

          items: [
            {
              id: "existing-product",
              title: "You already have a product or dashboard",
              description:
                "Use the API when you want to connect CMR infrastructure to your existing customer-facing product.",
            },

            {
              id: "custom-workflows",
              title: "You need custom workflows",
              description:
                "The API supports custom workflows, automation, integrations, and programmatic operations.",
            },

            {
              id: "webhooks",
              title: "You need event-driven integrations",
              description:
                "The API provides webhooks and programmatic control for workflows that need to react to CMR events.",
            },

            {
              id: "automation",
              title: "You need automation or bulk operations",
              description:
                "The API is suited to workflows that need programmatic provisioning, automation, or integration with other systems.",
            },
          ],
        },
      ],
    },

    {
      id: "use-whitelabel",

      title: "Use the Whitelabel Dashboard when",

      description:
        "The Whitelabel Dashboard is designed for partners who want a ready-made branded experience.",

      content: [
        {
          type: "steps",

          items: [
            {
              id: "ready-made",
              title: "You want a ready-made experience",
              description:
                "The Whitelabel Dashboard lets you use a pre-built branded experience without building your own software.",
            },

            {
              id: "no-engineering",
              title: "You do not want to build an integration",
              description:
                "The dashboard provides the product surface without requiring you to maintain your own API integration.",
            },

            {
              id: "built-in-experience",
              title: "The built-in customer experience meets your needs",
              description:
                "Use the dashboard when its marketplace, billing visibility, onboarding, and branding capabilities provide the experience you need.",
            },
          ],
        },
      ],
    },

    {
      id: "important-consideration",

      title: "Before choosing a partner model",

      content: [
        {
          type: "callout",
          variant: "info",
          title: "Choose based on the product experience you need",
          content:
            "The API and Whitelabel Dashboard provide different levels of control over the customer experience. Review the capabilities and development requirements of each approach before setting up your partner platform.",
        },
      ],
    },
  ],
};