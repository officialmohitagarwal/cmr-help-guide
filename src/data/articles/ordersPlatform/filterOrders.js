export const filterOrdersArticle = {
  id: "filter-orders",
  slug: "/orders/filter-orders",
  title: "Filter Orders by Status",
  description:
    "Learn how to filter orders by their current status from the Orders section.",

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
        "The Orders section provides status filters that help you narrow the orders displayed in the table.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the status filters at the top of the Orders table to view orders belonging to a specific status. The available filters include All, Paid, Pending, Failed, Refund, and Partial Refund.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=CMR+Filter+Orders",
          alt: "CMR Orders status filters",
          caption:
            "Use the status filters to narrow the orders displayed in the Orders table.",
        },
      ],
    },

    {
      id: "available-filters",
      title: "Available Status Filters",
      description:
        "Review the status filters available in the Orders section.",
      content: [
        {
          type: "step",
          number: 1,
          title: "All",
          description:
            "Displays all orders available in the Orders section.",
        },

        {
          type: "step",
          number: 2,
          title: "Paid",
          description:
            "Displays orders marked as Paid.",
        },

        {
          type: "step",
          number: 3,
          title: "Pending",
          description:
            "Displays orders marked as Pending.",
        },

        {
          type: "step",
          number: 4,
          title: "Failed",
          description:
            "Displays orders marked as Failed.",
        },

        {
          type: "step",
          number: 5,
          title: "Refund",
          description:
            "Displays orders marked as Refund.",
        },

        {
          type: "step",
          number: 6,
          title: "Partial Refund",
          description:
            "Displays orders marked as Partial Refund.",
        },
      ],
    },

    {
      id: "filter-orders",
      title: "Apply a Status Filter",
      description:
        "Use the status filter bar to narrow the orders displayed in the table.",
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
          title: "Locate the status filters",
          description:
            "Find the status filter bar above the Orders table.",
        },

        {
          type: "step",
          number: 3,
          title: "Select a status",
          description:
            "Select All, Paid, Pending, Failed, Refund, or Partial Refund.",
        },

        {
          type: "step",
          number: 4,
          title: "Review the results",
          description:
            "The Orders table displays the orders matching the selected status.",
        },
      ],
    },

    {
      id: "switch-filters",
      title: "Switch Between Filters",
      description:
        "Change the selected status filter when you need to review a different group of orders.",
      content: [
        {
          type: "paragraph",
          content:
            "Select another status from the filter bar to switch the orders displayed in the table. Select All when you want to return to the complete order list.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Tip",
          content:
            "The selected filter is highlighted in the status filter bar so you can identify the current view.",
        },
      ],
    },
  ],
};