
export const filterSubscriptionsArticle = {
  id: "filter-subscriptions",
  slug: "/subscriptions/filter-subscriptions",
  title: "Filter Subscriptions",
  description:
    "Narrow subscription records using provider and status filters.",

  category: {
    id: "subscriptions",
    label: "Subscriptions",
    slug: "/subscriptions",
  },

  author: "CMR",
  updated: "October 2026",

  introduction:
    "The Subscriptions page includes provider and status filters to help you narrow the records displayed in the table.",

  sections: [
    {
      id: "apply-subscription-filters",
      title: "Apply subscription filters",
      description:
        "Use the dropdown controls above the subscription table.",

      content: [
        {
          type: "steps",
          items: [
            {
              title: "Open the provider filter",
              description:
                "Select All Providers to view the available provider options.",
            },
            {
              title: "Choose a provider",
              description:
                "Select the provider you want to use to narrow the subscription records.",
            },
            {
              title: "Open the status filter",
              description:
                "Select All Status to view the available subscription statuses.",
            },
            {
              title: "Choose a status",
              description:
                "Select the status you want to review.",
            },
            {
              title: "Review the filtered records",
              description:
                "The table displays the records matching the selected filters.",
            },
          ],
        },
        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1791115531/subscriptions_filter.png",
          alt: "Provider and status filters on the Subscriptions page",
          caption:
            "Use the provider and status dropdowns to narrow subscription records.",
        },
      ],
    },
    {
      id: "visible-subscription-statuses",
      title: "Subscription statuses",
      description:
        "The screenshot shows several statuses in the subscription table.",

      content: [
        {
          type: "heading",
          content: "All Status",
        },
        {
          type: "paragraph",
          content:
            "All the subscriptions are displayed.",
        },
        {
          type: "heading",
          content: "Active",
        },
        {
          type: "paragraph",
          content:
            "The subscription is displayed with a Active status.",
        },
        {
          type: "heading",
          content: "Renewing",
        },
        {
          type: "paragraph",
          content:
            "The subscription is displayed with a Renewing status.",
        },
        {
          type: "heading",
          content: "Past Due",
        },
        {
          type: "paragraph",
          content:
            "The subscription is displayed with a Past Due status.",
        },
        {
          type: "heading",
          content: "Cancelled",
        },
        {
          type: "paragraph",
          content:
            "The subscription is displayed with a Cancelled status.",
        },
        {
          type: "heading",
          content: "Expired",
        },
        {
          type: "paragraph",
          content:
            "The subscription is displayed with an Expired status.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Note",
          content:
            "These are the statuses visible in the supplied screenshot. Check the live filter menu to confirm the complete list of available statuses.",
        },
      ],
    },
  ],
};
