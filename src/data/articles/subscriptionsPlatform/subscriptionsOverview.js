
export const subscriptionsOverviewArticle = {
  id: "subscriptions-overview",
  slug: "/subscriptions/overview",
  title: "Subscriptions Overview",
  description:
    "Understand the Subscriptions page and the information displayed for each subscription.",

  category: {
    id: "subscriptions",
    label: "Subscriptions",
    slug: "/subscriptions",
  },

  author: "CMR",
  updated: "October 2026",

  introduction:
    "The Subscriptions section provides a view of customer subscriptions, their associated domains and mailboxes, current status, renewal settings, and billing information.",

  sections: [
    {
      id: "understanding-subscriptions",
      title: "Understanding the Subscriptions page",
      description:
        "Each row represents a subscription and displays information that helps you review its current state and billing details.",

      content: [
        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1791115531/subscriptions_overview.png",
          alt: "CMR Subscriptions overview page",
          caption:
            "The Subscriptions page displays subscription records, renewal settings, and billing information.",
        },
        {
          type: "paragraph",
          content:
            "The subscription table includes the following information:",
        },
        {
          type: "heading",
          content: "Subscription ID",
        },
        {
          type: "paragraph",
          content:
            "The subscription's identifier, displayed alongside its provider icon.",
        },
        {
          type: "heading",
          content: "User",
        },
        {
          type: "paragraph",
          content:
            "The associated User ID and user email address.",
        },
        {
          type: "heading",
          content: "Domain & Mailboxes",
        },
        {
          type: "paragraph",
          content:
            "The domain associated with the subscription and the number of mailboxes shown for it.",
        },
        {
          type: "heading",
          content: "Status",
        },
        {
          type: "paragraph",
          content:
            "The subscription status. The screenshot shows Cancelled, Past Due, and Expired records.",
        },
        {
          type: "heading",
          content: "Auto Renew",
        },
        {
          type: "paragraph",
          content:
            "A toggle indicating the Auto Renew setting displayed for the subscription.",
        },
        {
          type: "heading",
          content: "Billing",
        },
        {
          type: "paragraph",
          content:
            "The billing amount, billing cycle, purchase date, and renewal date associated with the subscription.",
        },
      ],
    },
    
  ],
};
