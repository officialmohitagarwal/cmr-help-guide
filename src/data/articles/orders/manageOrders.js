const ORDERS_IMAGE =
  "https://placehold.co/1200x700/f7f7fa/686773?text=CMR+Order+Management";

const STATUS_FILTER_IMAGE =
  "https://placehold.co/1200x600/f7f7fa/686773?text=Order+Status+Filters";

const SEARCH_ORDERS_IMAGE =
  "https://placehold.co/1200x600/f7f7fa/686773?text=Search+Orders";

const ORDER_DETAILS_IMAGE =
  "https://placehold.co/1200x700/f7f7fa/686773?text=Expanded+Order+Details";

const MISSING_ORDER_IMAGE =
  "https://placehold.co/1200x650/f7f7fa/686773?text=Diagnose+a+Domain";

export const manageOrdersArticle = {
  id: "orders-manage-orders",

  slug: "/orders/manage-orders",

  category: {
    id: "orders",
    label: "Orders",
  },

  title: "How to Manage Orders and Expand Transaction Details",

  description:
    "Learn how to view, filter, search, and inspect customer orders, understand transaction details, and diagnose missing or failed domain orders.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "The Order Management page gives you a centralized view of customer transactions in Cold Mail Reseller. From here, you can review order history, filter transactions by status, search for specific orders, expand individual transactions to view their details and profit breakdown, and use the built-in domain diagnostic tool when an order is missing or fails to provision.",

  sections: [
    {
      id: "order-statuses",

      title: "Understand order statuses",

      description:
        "Use the order status to quickly understand the current state of a transaction.",

      content: [
        {
          type: "paragraph",

          content:
            "Each order in the Order Management table has a status that indicates the current outcome or processing state of the transaction. Understanding these statuses makes it easier to identify completed orders, transactions that are still processing, and orders that may require attention.",
        },

        {
          type: "heading",

          content: "Order status meanings",
        },

        {
          type: "paragraph",

          content:
            "Paid means the order succeeded and was charged. Pending means the order is still processing. Failed means the order did not complete. Refund means the order was fully refunded, while Partial Refund means the order was partially refunded.",
        },

        {
          type: "callout",

          variant: "info",

          title: "Order statuses at a glance",

          content:
            "Paid — order succeeded and was charged. Pending — still processing. Failed — did not complete. Refund — fully refunded. Partial Refund — partially refunded.",
        },
      ],
    },

    {
      id: "revenue-vs-charged",

      title: "Understand Revenue vs. Charged",

      description:
        "Understand the two dollar figures shown for each order and what they mean for your margin.",

      content: [
        {
          type: "paragraph",

          content:
            "Each order displays two important dollar figures: Revenue and Charged. These figures represent different sides of the transaction and can help you understand the margin associated with an order.",
        },

        {
          type: "heading",

          content: "Revenue",

        },

        {
          type: "paragraph",

          content:
            "Revenue is the amount the customer was billed for the order.",
        },

        {
          type: "heading",

          content: "Charged",

        },

        {
          type: "paragraph",

          content:
            "Charged is the amount that was actually deducted from your wallet to fulfill the order.",
        },

        {
          type: "heading",

          content: "Your margin",

        },

        {
          type: "paragraph",

          content:
            "The difference between Revenue and Charged represents your margin on that order. If Charged is higher than Revenue, the order was sold at a loss under your current pricing. In that situation, reviewing your Pricing settings may be worthwhile.",
        },

        {
          type: "callout",

          variant: "warning",

          title: "Check orders sold at a loss",

          content:
            "If the Charged amount is higher than Revenue, the transaction was sold at a loss under your current pricing. Review the order details and consider checking your Pricing settings.",
        },

        {
          type: "callout",

          variant: "info",

          title: "Demo account note",

          content:
            'In the demo account, most sample orders show as "Failed". This is expected test-environment behavior and should not be treated as a real success-rate benchmark.',
        },
      ],
    },

    {
      id: "view-order-history",

      title: "View your order history",

      description:
        "Open Order Management to review customer transactions and their key details.",

      content: [
        {
          type: "paragraph",

          content:
            "The Order Management table provides a centralized view of your customer transactions. The table contains the key information you need to identify an order and understand its current status and financial details.",
        },

        {
          type: "step",

          number: 1,

          title: "Open the Orders section",

          description:
            "From the CMR partner portal, click the Orders icon, represented by the shopping cart, in the left sidebar. This opens the Order Management page.",
        },

        {
          type: "screenshot",

          src: ORDERS_IMAGE,

          alt: "CMR Order Management page",

          caption:
            "Click Orders in the left sidebar to open Order Management.",
        },

        {
          type: "step",

          number: 2,

          title: "Review the order history table",

          description:
            "The main Order Management table displays important information for each transaction, including Order ID, Customer Email, Status, Date, Revenue, and Charged Amount.",
        },

        {
          type: "screenshot",

          src: ORDERS_IMAGE,

          alt: "CMR order history table",

          caption:
            "Review Order ID, Customer Email, Status, Date, Revenue, and Charged Amount.",
        },

        {
          type: "callout",

          variant: "tip",

          title: "Start with the order table",

          content:
            "The main table gives you a quick overview of your transactions before you open an individual order for more details.",
        },
      ],
    },

    {
      id: "filter-orders",

      title: "Filter orders by status",

      description:
        "Quickly narrow your order history using the available transaction status filters.",

      content: [
        {
          type: "paragraph",

          content:
            "When you want to focus on a particular type of transaction, use the status filters displayed above the Order Management table. Filtering can make it easier to review successful orders, pending transactions, failed orders, or refunded transactions.",
        },

        {
          type: "step",

          number: 3,

          title: "Choose an order status",

          description:
            "Use the status pills at the top-right above the table to filter the transactions. The available options are All, Paid, Pending, Failed, Refund, and Partial Refund.",
        },

        {
          type: "screenshot",

          src: STATUS_FILTER_IMAGE,

          alt: "Order status filters",

          caption:
            "Use All, Paid, Pending, Failed, Refund, or Partial Refund to filter transactions.",
        },

        {
          type: "step",

          number: 4,

          title: "Review the filtered transactions",

          description:
            "After selecting a status, the order table is filtered to help you focus on transactions matching the selected status.",
        },

        {
          type: "screenshot",

          src: STATUS_FILTER_IMAGE,

          alt: "Filtered order transactions",

          caption:
            "Review the transactions displayed after applying a status filter.",
        },
      ],
    },

    {
      id: "search-orders",

      title: "Search for a specific order",

      description:
        "Find a customer purchase quickly using an email address, Order ID, or domain.",

      content: [
        {
          type: "paragraph",

          content:
            "If you already know information associated with the order, you can use the search field above the table instead of browsing through the complete order history. The search supports customer and transaction identifiers.",
        },

        {
          type: "step",

          number: 5,

          title: "Use the order search bar",

          description:
            "Locate the Search by Email, Order ID, or Domain input bar above the Order Management table.",
        },

        {
          type: "screenshot",

          src: SEARCH_ORDERS_IMAGE,

          alt: "Search orders by email Order ID or domain",

          caption:
            "Use the search bar to locate an order by Email, Order ID, or Domain.",
        },

        {
          type: "step",

          number: 6,

          title: "Enter the order information",

          description:
            "Enter the customer's email address, Order ID, or associated domain to locate the relevant transaction.",
        },

        {
          type: "screenshot",

          src: SEARCH_ORDERS_IMAGE,

          alt: "Order search results",

          caption:
            "Enter an Email, Order ID, or Domain to find the relevant transaction.",
        },

        {
          type: "callout",

          variant: "tip",

          title: "Search tip",

          content:
            "Use the Order ID when you have it available, or search using the customer email or domain associated with the transaction.",
        },
      ],
    },

    {
      id: "expand-order-details",

      title: "Expand order details",

      description:
        "Open an individual order to see the product, domain, pricing, profit, and renewal information.",

      content: [
        {
          type: "paragraph",

          content:
            "The Order Management table provides a summary of each transaction, but you can expand an individual order when you need a more detailed view. The expanded section provides the transaction-level information behind the order.",
        },

        {
          type: "step",

          number: 7,

          title: "Locate the order",

          description:
            "Find the transaction you want to inspect in the Order Management table. You can use the status filters or search field if needed.",
        },

        {
          type: "screenshot",

          src: ORDERS_IMAGE,

          alt: "Order row in Order Management",

          caption:
            "Locate the order you want to inspect.",
        },

        {
          type: "step",

          number: 8,

          title: "Expand the order",

          description:
            "Click the Chevron or Arrow button on the far right of the order row to expand the transaction and reveal its detailed information.",
        },

        {
          type: "screenshot",

          src: ORDER_DETAILS_IMAGE,

          alt: "Expanded order details",

          caption:
            "Click the Chevron or Arrow button to expand an order and view its transaction details.",
        },

        {
          type: "step",

          number: 9,

          title: "Review the product and domain",

          description:
            "The expanded order details show the Product associated with the transaction and the Domain associated with that product.",
        },

        {
          type: "screenshot",

          src: ORDER_DETAILS_IMAGE,

          alt: "Product and domain in expanded order",

          caption:
            "Review the Product and associated Domain in the expanded transaction.",
        },

        {
          type: "step",

          number: 10,

          title: "Review pricing and profit",

          description:
            "Compare the User Price with the Partner Price to understand the retail amount charged to the user versus your wholesale reseller cost. The expanded details also show the Profit calculation for the item.",
        },

        {
          type: "screenshot",

          src: ORDER_DETAILS_IMAGE,

          alt: "Order pricing and profit breakdown",

          caption:
            "Review User Price, Partner Price, and Profit in the expanded order details.",
        },

        {
          type: "step",

          number: 11,

          title: "Check the renewal cycle",

          description:
            "Review the Renewal Cycle shown for the order to understand its billing frequency, such as Monthly.",
        },

        {
          type: "screenshot",

          src: ORDER_DETAILS_IMAGE,

          alt: "Order renewal cycle",

          caption:
            "Review the Renewal Cycle and billing frequency for the order.",
        },

        {
          type: "callout",

          variant: "info",

          title: "What the expanded view shows",

          content:
            "The expanded transaction details include Product, Domain, User Price, Partner Price, Profit, and Renewal Cycle information.",
        },
      ],
    },

    {
      id: "diagnose-missing-orders",

      title: "Diagnose failed or missing orders",

      description:
        "Use the built-in domain diagnostic tool when an order fails or does not provision as expected.",

      content: [
        {
          type: "paragraph",

          content:
            "If a domain order is missing or an order fails to provision, the Order Management page provides a built-in diagnostic option. The Missing Order? action opens a domain diagnostic flow that allows you to search for the domain and investigate the issue.",
        },

        {
          type: "step",

          number: 12,

          title: "Select Missing Order?",

          description:
            'From the top-right area of the Order Management page, click the "Missing Order?" button to open the Diagnose a Domain modal.',
        },

        {
          type: "screenshot",

          src: MISSING_ORDER_IMAGE,

          alt: "Missing Order button",

          caption:
            'Click "Missing Order?" to open the domain diagnostic tool.',
        },

        {
          type: "step",

          number: 13,

          title: "Enter the domain name",

          description:
            "In the Diagnose a Domain modal, enter the domain name associated with the missing or failed order.",
        },

        {
          type: "screenshot",

          src: MISSING_ORDER_IMAGE,

          alt: "Diagnose a Domain modal",

          caption:
            "Enter the domain name in the Diagnose a Domain modal.",
        },

        {
          type: "step",

          number: 14,

          title: "Run the diagnostic search",

          description:
            'Click "Search" to run the diagnostic test. The diagnostic flow helps you understand why an order failed or why the domain was not provisioned.',
        },

        {
          type: "screenshot",

          src: MISSING_ORDER_IMAGE,

          alt: "Search in Diagnose a Domain",

          caption:
            'Click "Search" to run the domain diagnostic test.',
        },

        {
          type: "callout",

          variant: "info",

          title: "When to use the diagnostic tool",

          content:
            'Use Missing Order? when you need to investigate a domain order that failed or did not provision as expected.',
        },
      ],
    },

    {
      id: "youre-all-set",

      title: "You're all set",

      description:
        "You now know how to manage and investigate customer orders in CMR.",

      content: [
        {
          type: "paragraph",

          content:
            "The Order Management page gives you visibility into customer transactions from a single place. You can review order history, filter transactions by status, search for specific orders, and expand individual transactions to understand their product, pricing, profit, and renewal details.",
        },

        {
          type: "paragraph",

          content:
            "When a domain order fails or does not provision as expected, use the Missing Order? diagnostic flow to search for the domain and investigate the issue.",
        },

        {
          type: "callout",

          variant: "success",

          title: "You're all set",

          content:
            "You now know how to view, filter, search, inspect, and troubleshoot customer orders from Order Management.",
        },
      ],
    },
  ],
};