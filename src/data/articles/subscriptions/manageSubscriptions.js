export const manageSubscriptionsArticle = {
  id: "subscriptions-manage-subscriptions",
  slug: "/subscriptions/manage-subscriptions",

  title:
    "How to Manage Subscriptions, Providers, and Auto-Renewal Settings",

  description:
    "Learn how to view, search, and manage ongoing domain and mailbox subscriptions, update auto-renewal preferences, and filter subscriptions by provider or status.",

  category: {
    id: "subscriptions",
    label: "Subscriptions",
    slug: "/subscriptions",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Every mailbox has an underlying subscription that controls its billing and renewal. The Subscriptions page brings together subscription records across your customers, making it easier to monitor their current status, renewal settings, billing information, and upcoming renewal dates.",

  sections: [
    {
      id: "subscription-overview",
      title: "Subscription overview",
      description:
        "Subscriptions are closely tied to the availability of a customer's mailbox. Reviewing the subscription status and billing information can help you understand whether a mailbox is currently operational, approaching renewal, or affected by a failed renewal.",

      content: [
        {
          type: "paragraph",
          content:
            "The Subscriptions page lists subscription records across your customers. From here, you can search for a specific subscription, filter records by provider or status, review billing schedules, and control whether a subscription should renew automatically.",
        },

        {
          type: "heading",
          content: "Subscription statuses",
        },

        {
          type: "paragraph",
          content:
            "Each subscription has a lifecycle status that indicates its current state and whether the associated mailbox is expected to remain operational.",
        },

        {
          type: "paragraph",
          content:
            "Active subscriptions are current and fully operational. Past Due subscriptions have encountered a renewal payment failure or reached the end of their billing period without being renewed and remain in an approximately 7-day grace window. Cancelled subscriptions have been explicitly cancelled and their mailboxes are removed immediately. Expired subscriptions have reached the end of the grace period without renewal and their mailboxes are disabled.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Why subscription status matters",
          content:
            "If a customer's mailbox has stopped working, the subscription status is one of the first things to check. A Past Due, Cancelled, or Expired subscription can indicate that the mailbox is no longer fully operational.",
        },
      ],
    },

    {
      id: "open-subscriptions",
      title: "Open the Subscriptions table",
      description:
        "Access the Subscriptions section to view subscription records across all of your customers.",

      content: [
        {
          type: "step",
          number: 1,
          title: "Open the Subscriptions table",
          description:
            "Click the Subscriptions icon, represented by a calendar document, in the left navigation bar. This opens the subscriptions table where you can view and manage customer subscription records.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1200x700/png?text=Subscriptions+Table",
          alt: "Subscriptions table",
          caption:
            "The Subscriptions section displays customer subscription records.",
        },
      ],
    },

    {
      id: "search-subscriptions",
      title: "Search for a specific subscription",
      description:
        "Use the subscription search field to quickly locate a particular customer's subscription record.",

      content: [
        {
          type: "step",
          number: 2,
          title: "Search for a specific subscription",
          description:
            "Use the search bar in the top-left of the Subscriptions table to find a specific subscription. You can search by Sub ID, User ID, or User Email to locate the relevant record quickly.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1200x700/png?text=Search+Subscriptions",
          alt: "Subscription search bar",
          caption:
            "Search by Sub ID, User ID, or User Email.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Tip",
          content:
            "When investigating a customer's subscription, searching by User Email can be a quick way to locate their subscription record.",
        },
      ],
    },

    {
      id: "filter-provider",
      title: "Filter subscriptions by provider",
      description:
        "Narrow the subscription table based on the service provider associated with the subscription.",

      content: [
        {
          type: "step",
          number: 3,
          title: "Filter by provider",
          description:
            "Click the All Providers dropdown at the top right of the table to filter subscription records by service platform.",
        },

        {
          type: "paragraph",
          content:
            "The provider filter includes All Providers, Google, and Microsoft. Selecting a provider limits the table to subscriptions associated with that service platform.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1200x700/png?text=Provider+Filter",
          alt: "Subscription provider filter",
          caption:
            "Use the All Providers dropdown to filter subscriptions by provider.",
        },
      ],
    },

    {
      id: "filter-status",
      title: "Filter subscriptions by status",
      description:
        "Use subscription status filters to focus on active, renewing, past-due, cancelled, or expired subscriptions.",

      content: [
        {
          type: "step",
          number: 4,
          title: "Filter by subscription status",
          description:
            "Click the All Status dropdown to filter the table according to the current lifecycle state of each subscription.",
        },

        {
          type: "paragraph",
          content:
            "The available status filters are All Status, Active, Renewing, Past Due, Cancelled, and Expired.",
        },

        {
          type: "paragraph",
          content:
            "Active indicates a fully operational subscription. Renewing indicates that a renewal is currently being processed. Past Due indicates that a payment attempt was missed or failed. Cancelled indicates that the subscription has been terminated. Expired indicates that the subscription term ended without renewal.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1200x700/png?text=Status+Filter",
          alt: "Subscription status filter",
          caption:
            "Use the All Status dropdown to filter subscriptions by lifecycle state.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Past Due subscriptions",
          content:
            "A Past Due subscription means the renewal payment was missed or failed. These subscriptions remain in an approximately 7-day grace window, so they are important to review before they become Expired.",
        },
      ],
    },

    {
      id: "auto-renew",
      title: "Manage auto-renewal settings",
      description:
        "Control whether individual subscriptions should automatically renew and charge again when their current billing period ends.",

      content: [
        {
          type: "step",
          number: 5,
          title: "Toggle auto-renewal",
          description:
            "Locate the toggle switch in the Auto Renew column next to the subscription you want to update.",
        },

        {
          type: "paragraph",
          content:
            "To enable automatic recurring billing, switch Auto Renew on. The toggle displays a purple indicator when enabled, and a confirmation toast with the message \"Auto-renew enabled\" confirms the change.",
        },

        {
          type: "paragraph",
          content:
            "To stop future automatic charges, switch Auto Renew off. This disables automatic renewal for the subscription.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1200x700/png?text=Auto+Renew+Toggle",
          alt: "Auto Renew subscription setting",
          caption:
            "Use the Auto Renew toggle to enable or disable automatic recurring billing.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Review before changing renewal settings",
          content:
            "Check the subscription and customer record before changing Auto Renew so that the renewal preference matches the customer's intended billing setup.",
        },
      ],
    },

    {
      id: "billing-schedules",
      title: "Review billing schedules",
      description:
        "Check subscription billing information to understand the current recurring amount and upcoming renewal schedule.",

      content: [
        {
          type: "step",
          number: 6,
          title: "Review billing information",
          description:
            "Check the Billing column for each subscription to review its monthly recurring amount, original purchase date, and next scheduled renewal date.",
        },

        {
          type: "paragraph",
          content:
            "The billing information gives you a quick view of when the subscription was originally purchased, what recurring amount is associated with it, and when the next renewal is scheduled.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1200x700/png?text=Billing+Schedule",
          alt: "Subscription billing schedule",
          caption:
            "Review the Billing column to verify recurring amounts and renewal dates.",
        },
      ],
    },

    {
      id: "subscription-troubleshooting",
      title: "When a customer's mailbox stops working",
      description:
        "Use subscription information as an important starting point when investigating mailbox availability issues.",

      content: [
        {
          type: "paragraph",
          content:
            "Because every mailbox has an underlying subscription that controls its billing and renewal, the subscription record is closely connected to mailbox availability.",
        },

        {
          type: "paragraph",
          content:
            "If a customer's mailbox stops working, check the subscription status first. An Active subscription indicates that the subscription is current. A Past Due subscription may indicate a failed renewal payment and remains within an approximately 7-day grace window. Cancelled subscriptions are explicitly terminated and mailboxes are removed immediately, while Expired subscriptions have passed their grace period without renewal and have their mailboxes disabled.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Recommended check",
          content:
            "When investigating a mailbox issue, search for the customer's subscription using their User ID or User Email and review its status, Auto Renew setting, and billing schedule.",
        },
      ],
    },

    {
      id: "whats-next",
      title: "You're all set",
      description:
        "You now have the basics needed to manage subscription records across your customer accounts.",

      content: [
        {
          type: "paragraph",
          content:
            "You now know how to access the Subscriptions table, search for specific subscription records, filter subscriptions by provider or status, manage auto-renewal settings, and review billing schedules.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "You can now monitor subscription billing schedules, verify renewal dates, and control auto-renewal settings across customer accounts.",
        },
      ],
    },
  ],
};