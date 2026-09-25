export const ordersOverviewArticle = {
  id: "orders-overview",
  slug: "/orders/overview",
  title: "Orders Overview",
  description:
    "Understand the Orders section, the information shown for each order, and the actions available from the Orders page.",

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
        "The Orders section gives you a central view of orders placed through your CMR platform.",
      content: [
        {
          type: "paragraph",
          content:
            "The Orders section displays your orders in a table along with their customer, status, date, revenue, and charged amount. You can search for specific orders, filter them by status, and open an individual order for more details.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=CMR+Orders+Overview",
          alt: "CMR Orders overview",
          caption:
            "The Orders section provides a central view of orders, their status, customer, revenue, and charged amount.",
        },
      ],
    },

    {
      id: "orders-table",
      title: "Orders Table",
      description:
        "Review the information displayed for each order.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Order",
          description:
            "Displays the Order ID. A copy icon is available next to the Order ID.",
        },

        {
          type: "step",
          number: 2,
          title: "Customer",
          description:
            "Displays the customer email address associated with the order.",
        },

        {
          type: "step",
          number: 3,
          title: "Status",
          description:
            "Displays the current status of the order.",
        },

        {
          type: "step",
          number: 4,
          title: "Date",
          description:
            "Displays the date and time associated with the order.",
        },

        {
          type: "step",
          number: 5,
          title: "Revenue",
          description:
            "Displays the revenue amount associated with the order.",
        },

        {
          type: "step",
          number: 6,
          title: "Charged",
          description:
            "Displays the amount charged for the order.",
        },

        {
          type: "step",
          number: 7,
          title: "Action",
          description:
            "Use the action button at the end of an order row to open the individual order.",
        },
      ],
    },

    {
      id: "order-statuses",
      title: "Order Statuses",
      description:
        "Use the status filters to view orders grouped by their current status.",
      content: [
        {
          type: "paragraph",
          content:
            "The Orders page provides filters for the different order statuses available in the interface.",
        },

        {
          type: "step",
          number: 1,
          title: "All",
          description:
            "View all orders.",
        },

        {
          type: "step",
          number: 2,
          title: "Paid",
          description:
            "View orders marked as Paid.",
        },

        {
          type: "step",
          number: 3,
          title: "Pending",
          description:
            "View orders marked as Pending.",
        },

        {
          type: "step",
          number: 4,
          title: "Failed",
          description:
            "View orders marked as Failed.",
        },

        {
          type: "step",
          number: 5,
          title: "Refund",
          description:
            "View orders marked as Refund.",
        },

        {
          type: "step",
          number: 6,
          title: "Partial Refund",
          description:
            "View orders marked as Partial Refund.",
        },
      ],
    },

    {
      id: "search-orders",
      title: "Search Orders",
      description:
        "Use the Orders search field to find a specific order.",
      content: [
        {
          type: "paragraph",
          content:
            "The Orders page includes a dedicated search field that lets you search using an email address, Order ID, or domain.",
        },

        {
          type: "step",
          number: 1,
          title: "Search by Email",
          description:
            "Enter the customer's email address to find matching orders.",
        },

        {
          type: "step",
          number: 2,
          title: "Search by Order ID",
          description:
            "Enter the Order ID to locate a specific order.",
        },

        {
          type: "step",
          number: 3,
          title: "Search by Domain",
          description:
            "Enter the relevant domain to find matching orders.",
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
          type: "paragraph",
          content:
            "When you find the order you need, use the action button at the right side of its row to open the individual order.",
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

    {
      id: "missing-order",
      title: "Missing Order",
      description:
        "Use the Missing Order? option when an expected order is not visible in the Orders list.",
      content: [
        {
          type: "paragraph",
          content:
            "The Orders page includes a Missing Order? option in the top-right area of the page for cases where an expected order cannot be found.",
        },

        {
          type: "learn-more",
          items: [
            {
              title: "Missing Order",
              description:
                "Learn where to find the Missing Order? option and check the Orders list before using it.",
              href: "/orders/missing-order",
            },
          ],
        },
      ],
    },
  ],
};