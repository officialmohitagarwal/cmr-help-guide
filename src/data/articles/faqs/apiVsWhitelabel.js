export const apiVsWhitelabelArticle = {
  id: "faq-api-vs-whitelabel",

  slug: "/faqs/api-vs-whitelabel",

  title: "API Partner vs Whitelabel Dashboard",

  description:
    "Understand the difference between the CMR API and the Whitelabel Dashboard and how each approach works.",

  category: {
    id: "faqs",
    label: "FAQs",
    slug: "/faqs",
  },

  introduction:
    "CMR provides two ways to access its underlying email infrastructure: the CMR API and the Whitelabel Dashboard. Both provide access to the same underlying infrastructure, but they give you different levels of control over the product experience.",

  sections: [
    {
      id: "cmr-api",

      title: "CMR API",

      description:
        "The API provides programmatic access to CMR infrastructure.",

      content: [
        {
          type: "paragraph",
          content:
            "The CMR API is a REST API that allows you to programmatically work with domains, mailboxes, subscriptions, warmup, webhooks, exports, and other platform operations.",
        },

        {
          type: "heading",
          content: "The API is designed for",
        },

        {
          type: "paragraph",
          content:
            "Teams that already have a product or dashboard, need custom workflows or automation, or want to integrate CMR with their own systems.",
        },
      ],
    },

    {
      id: "whitelabel-dashboard",

      title: "Whitelabel Dashboard",

      description:
        "The Whitelabel Dashboard provides a ready-made branded experience.",

      content: [
        {
          type: "paragraph",
          content:
            "The Whitelabel Dashboard is a pre-built branded experience intended for partners who want to resell CMR infrastructure without building their own software.",
        },

        {
          type: "heading",
          content: "The Whitelabel Dashboard includes",
        },

        {
          type: "paragraph",
          content:
            "A branded customer experience with features such as a custom logo, login page, client emails, marketplace, billing visibility, and client onboarding.",
        },
      ],
    },

    {
      id: "key-difference",

      title: "The key difference",

      description:
        "The main difference is the amount of product control and development required.",

      content: [
        {
          type: "paragraph",
          content:
            "The API gives you programmatic control and lets you build the customer-facing experience yourself. The Whitelabel Dashboard provides a ready-made branded experience so you can start without building and maintaining your own integration.",
        },
      ],
    },

    {
      id: "same-infrastructure",

      title: "Same underlying infrastructure",

      description:
        "The API and Whitelabel Dashboard are different ways of accessing CMR rather than separate infrastructure products.",

      content: [
        {
          type: "paragraph",
          content:
            "Both approaches sit on top of the same underlying infrastructure for domains, mailboxes, DNS, warmup, and subscriptions.",
        },
      ],
    },
  ],
};