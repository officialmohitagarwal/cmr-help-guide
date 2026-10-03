
export const searchSubscriptionsArticle = {
  id: "search-subscriptions",
  slug: "/subscriptions/search-subscriptions",
  title: "Find and Search Subscriptions",
  description:
    "Find subscriptions using a Subscription ID, User ID, or User Email.",

  category: {
    id: "subscriptions",
    label: "Subscriptions",
    slug: "/subscriptions",
  },

  author: "CMR",
  updated: "October 2026",

  introduction:
    "Use the search field on the Subscriptions page to locate a subscription using its identifier or associated user information.",

  sections: [
    {
      id: "search-subscription-records",
      title: "Search subscription records",
      description:
        "The search field is located above the subscription table.",

      content: [
        {
          type: "steps",
          items: [
            {
              title: "Open Subscriptions",
              description:
                "Navigate to the Subscriptions section from the sidebar.",
            },
            {
              title: "Enter a search term",
              description:
                "Enter a Subscription ID, User ID, or User Email in the search field.",
            },
            {
              title: "Review the results",
              description:
                "Review the matching records and their associated user, domain, status, and billing information.",
            },
          ],
        },
        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=Search+Subscriptions",
          alt: "Search field on the Subscriptions page",
          caption:
            "Search using a Subscription ID, User ID, or User Email.",
        },
      ],
    },
  ],
};
