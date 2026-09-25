export const missingOrderArticle = {
  id: "missing-order",
  slug: "/orders/missing-order",
  title: "Missing Order",
  description:
    "Learn where to find the Missing Order option in the Orders section when an expected order is not visible.",

  category: {
    id: "orders",
    label: "Orders",
    slug: "/orders",
  },

  sections: [
    {
      id: "overview",
      title: "Introduction",
      description:
        "The Orders section includes a Missing Order? option for cases where an expected order is not visible in the order list.",
      content: [
        {
          type: "paragraph",
          content:
            "If an order you expect to see is not visible in the Orders table, use the Missing Order? option available at the top-right of the Orders page.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=CMR+Missing+Order",
          alt: "CMR Missing Order option",
          caption:
            "The Missing Order? option is available at the top-right of the Orders page.",
        },
      ],
    },

    {
      id: "locate-missing-order",
      title: "Locate the Missing Order Option",
      description:
        "Find the Missing Order? option from the Orders page.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Open Orders",
          description:
            "Open the Orders section from the platform sidebar.",
        },

        {
          type: "step",
          number: 2,
          title: "Locate Missing Order?",
          description:
            "Look for the Missing Order? button at the top-right of the Orders page.",
        },
      ],
    },

    {
      id: "before-reporting",
      title: "Check the Orders List First",
      description:
        "Use the available search and status filters to check whether the order is already listed.",
      content: [
        {
          type: "paragraph",
          content:
            "Before using the Missing Order? option, check the Orders table using the available search and status filters. The Orders search supports searching by Email, Order ID, or Domain.",
        },

        {
          type: "step",
          number: 1,
          title: "Search by Email",
          description:
            "Use the Orders search field to search using the customer's email address.",
        },

        {
          type: "step",
          number: 2,
          title: "Search by Order ID",
          description:
            "If you have the Order ID, enter it in the Orders search field.",
        },

        {
          type: "step",
          number: 3,
          title: "Search by Domain",
          description:
            "Use the domain associated with the order to search the Orders list.",
        },

        {
          type: "step",
          number: 4,
          title: "Check the status filters",
          description:
            "Review the available status filters, including All, Paid, Pending, Failed, Refund, and Partial Refund.",
        },
      ],
    },

    {
      id: "missing-order-action",
      title: "Use Missing Order?",
      description:
        "Open the Missing Order option when the expected order cannot be found in the Orders list.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Select Missing Order?",
          description:
            "Select the Missing Order? button at the top-right of the Orders page.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Note",
          content:
            "The available next steps after selecting Missing Order? depend on the flow configured in your CMR platform.",
        },
      ],
    },
  ],
};