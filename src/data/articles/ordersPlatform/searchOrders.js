export const searchOrdersArticle = {
  id: "search-orders",
  slug: "/orders/search-orders",
  title: "Find and Search Orders",
  description:
    "Learn how to find orders using email, Order ID, or domain from the Orders section.",

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
        "The Orders section includes a dedicated search field for finding specific orders.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the search field at the top of the Orders page to quickly find an order without manually browsing through the order list. The search supports email, Order ID, and domain.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=CMR+Search+Orders",
          alt: "CMR Search Orders",
          caption:
            "Use the Orders search field to find an order by email, Order ID, or domain.",
        },
      ],
    },

    {
      id: "search-fields",
      title: "Search Options",
      description:
        "Use the information you have available to locate the relevant order.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Email",
          description:
            "Search using the customer's email address associated with the order.",
        },

        {
          type: "step",
          number: 2,
          title: "Order ID",
          description:
            "Search using the Order ID to locate a specific order.",
        },

        {
          type: "step",
          number: 3,
          title: "Domain",
          description:
            "Search using the domain associated with the order.",
        },
      ],
    },

    {
      id: "search-order",
      title: "Search for an Order",
      description:
        "Follow these steps to find an order from the Orders section.",
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
          title: "Select the search field",
          description:
            "Select the search field at the top of the Orders page.",
        },

        {
          type: "step",
          number: 3,
          title: "Enter search information",
          description:
            "Enter the customer's email address, Order ID, or domain into the search field.",
        },

        {
          type: "step",
          number: 4,
          title: "Review the results",
          description:
            "Review the orders displayed in the table and identify the order you need.",
        },
      ],
    },

    {
      id: "identify-order",
      title: "Identify the Order",
      description:
        "Review the order information displayed in the table to confirm that you have found the correct order.",
      content: [
        {
          type: "paragraph",
          content:
            "After searching, use the information in the Orders table to identify the relevant order.",
        },

        {
          type: "step",
          number: 1,
          title: "Order ID",
          description:
            "Check the Order ID shown in the Order column.",
        },

        {
          type: "step",
          number: 2,
          title: "Customer",
          description:
            "Check the customer email associated with the order.",
        },

        {
          type: "step",
          number: 3,
          title: "Status",
          description:
            "Check the order status shown in the Status column.",
        },

        {
          type: "step",
          number: 4,
          title: "Date",
          description:
            "Check the order date and time.",
        },
      ],
    },

    {
      id: "open-result",
      title: "Open a Search Result",
      description:
        "Open the order after locating it in the search results.",
      content: [
        {
          type: "paragraph",
          content:
            "Once you have identified the order, use the action button at the right side of the order row to open the individual order.",
        },

        {
          type: "learn-more",
          items: [
            {
              title: "View Order Details",
              description:
                "Learn how to open an individual order and review its available details.",
              href: "/orders/order-details",
            },
          ],
        },
      ],
    },
  ],
};