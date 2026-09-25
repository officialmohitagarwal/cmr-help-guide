export const orderDetailsArticle = {
  id: "order-details",
  slug: "/orders/order-details",
  title: "View Order Details",
  description:
    "Learn how to open an individual order from the Orders section and review its details.",

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
        "The Orders section lets you open an individual order directly from the orders table.",
      content: [
        {
          type: "paragraph",
          content:
            "Each order in the Orders table has an action button on the right side of the row. Use this action to open the selected order and review its details.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=CMR+Order+Details",
          alt: "CMR Order Details",
          caption:
            "Open an individual order from the action button at the end of its row.",
        },
      ],
    },

    {
      id: "open-order",
      title: "Open an Order",
      description:
        "Open an individual order from the Orders table.",
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
          title: "Find the order",
          description:
            "Locate the order you want to review in the Orders table. You can use the available search field or status filters to narrow the list.",
        },

        {
          type: "step",
          number: 3,
          title: "Select the order action",
          description:
            "Select the arrow button at the right side of the order row.",
        },

        {
          type: "step",
          number: 4,
          title: "Review the order",
          description:
            "The selected order opens so you can review its available details.",
        },
      ],
    },

    {
      id: "identify-order",
      title: "Identify an Order",
      description:
        "Use the information shown in the Orders table to identify the correct order before opening it.",
      content: [
        {
          type: "paragraph",
          content:
            "The Orders table provides several pieces of information that can help you identify the order you need.",
        },

        {
          type: "step",
          number: 1,
          title: "Order ID",
          description:
            "Use the Order ID to identify the order. A copy icon is available next to the Order ID.",
        },

        {
          type: "step",
          number: 2,
          title: "Customer",
          description:
            "Review the customer email associated with the order.",
        },

        {
          type: "step",
          number: 3,
          title: "Status",
          description:
            "Review the current order status shown in the status column.",
        },

        {
          type: "step",
          number: 4,
          title: "Date",
          description:
            "Review the date and time associated with the order.",
        },

        {
          type: "step",
          number: 5,
          title: "Revenue",
          description:
            "Review the revenue amount shown for the order.",
        },

        {
          type: "step",
          number: 6,
          title: "Charged",
          description:
            "Review the amount charged for the order.",
        },
      ],
    },

    {
      id: "order-details-information",
      title: "Order Details",
      description:
        "Review the information available after opening an individual order.",
      content: [
        {
          type: "paragraph",
          content:
            "The specific information and actions available after opening an order depend on the order details screen configured in your CMR platform.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Note",
          content:
            "Add the Order Details screenshot here once the individual order screen is available. This keeps the documentation aligned with the actual CMR interface.",
        },
      ],
    },
  ],
};