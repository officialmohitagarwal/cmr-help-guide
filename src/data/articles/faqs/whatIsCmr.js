export const whatIsCmrArticle = {
  id: "faq-what-is-cmr",

  slug: "/faqs/what-is-cmr",

  title: "What is Cold Mail Reseller (CMR)?",

  description:
    "Understand what CMR is, what infrastructure it provides, and how it supports your cold email platform.",

  category: {
    id: "faqs",
    label: "FAQs",
    slug: "/faqs",
  },

  introduction:
    "Cold Mail Reseller (CMR) provides the infrastructure needed to build and operate a white-labeled cold email platform. It handles the underlying domains, mailboxes, DNS, subscriptions, warmup, and related infrastructure while you build your own customer-facing experience.",

  sections: [
    {
      id: "what-cmr-provides",

      title: "What CMR provides",

      description:
        "CMR handles the infrastructure required to operate a cold email platform.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR provides infrastructure for domains, mailboxes, DNS, subscriptions, warmup, and related platform operations.",
        },
      ],
    },

    {
      id: "how-cmr-fits",

      title: "How CMR fits into your platform",

      description:
        "CMR provides the underlying infrastructure while you control the customer-facing experience.",

      content: [
        {
          type: "paragraph",
          content:
            "In the API model, you build your own product or workflow on top of CMR. Your customers interact with the experience you provide, while CMR handles the underlying infrastructure.",
        },
      ],
    },

    {
      id: "partner-user-resource-model",

      title: "Partner, users, and resources",

      description:
        "CMR organizes resources under your Partner account and the customers you create within it.",

      content: [
        {
          type: "paragraph",
          content:
            "You are the Partner account. Your customers are represented as Users. Domains, DNS records, mailboxes, subscriptions, warmup, and exports belong to a User within your Partner account.",
        },
      ],
    },
  ],
};