const DASHBOARD_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789497537/Dashboard1.png";

const WALLET_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789497537/Dashboard2.png";

const ACTIVITY_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789497538/Dashboard3.png";

const SEARCH_IMAGE =
  "https://placehold.co/1200x500/f7f7fa/686773?text=Quick+Search";

const SUPPORT_IMAGE =
  "https://placehold.co/1200x500/f7f7fa/686773?text=Support+Chat";

export const dashboardArticle = {
  id: "dashboard",
  slug: "/dashboard",

  category: {
    id: "platform",
    label: "Platform",
  },

  title: "Dashboard",

  description:
    "Learn how to navigate the CMR dashboard, understand key account metrics, track activity, check your balance, and export data.",

  author: "CMR Team",

  updated: "September 2026",

  introduction: `
    The CMR Dashboard gives you a centralized view of your reseller
    platform. From the Overview screen, you can monitor key account
    metrics, check your available wallet balance, review recent
    activities, download reports, and quickly access users and orders.
  `,

  sections: [
    {
      id: "dashboard-overview",
      title: "Dashboard overview",

      description:
        "Get familiar with the main areas of the Dashboard and the information available at a glance.",

      content: [
        {
          type: "paragraph",
          content:
            "After logging in to your reseller portal, you'll land on the main Overview screen. This is your starting point for monitoring the activity and resources associated with your platform.",
        },

        {
          type: "paragraph",
          content:
            "The Overview screen brings your most important account information together in one place, so you can quickly understand the current state of your domains, mailboxes, wallet, and customers.",
        },

        {
          type: "screenshot",
          src: DASHBOARD_IMAGE,
          alt: "CMR Dashboard overview",
          caption:
            "Dashboard Overview — temporary placeholder image. Replace this URL with your Cloudinary screenshot.",
        },
      ],
    },

    {
      id: "main-dashboard-metrics",
      title: "Access your main dashboard metrics",

      description:
        "Use the four primary metric cards at the top of the Dashboard to quickly review your account.",

      content: [
        {
          type: "paragraph",
          content:
            "At the top of the Overview screen, you'll find four primary metric cards. Each card provides a quick summary of an important part of your reseller platform.",
        },

        {
          type: "steps",
          items: [
            {
              id: "domains-metric",
              title: "Review Domains",
              description:
                "The Domains card shows the total number of domains purchased by your users. Use this metric to quickly understand the number of domains currently associated with your platform.",
            },

            {
              id: "mailboxes-metric",
              title: "Review Mailboxes",
              description:
                "The Mailboxes card shows the number of active mailboxes across all users. This gives you a quick view of the active mailbox volume on your platform.",
            },

            {
              id: "wallet-metric",
              title: "Review Wallet Balance",
              description:
                "The Wallet Balance card displays your current available wallet balance. This is the balance available for purchasing domains and mailboxes.",
            },

            {
              id: "customers-metric",
              title: "Review Total Customers",
              description:
                "The Total Customers card displays the number of registered users currently on your platform.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "Each metric card includes an arrow that takes you directly to the corresponding section's full view. This makes it easy to move from the Dashboard summary into the detailed information behind each metric.",
        },

        {
          type: "screenshot",
          src: DASHBOARD_IMAGE,
          alt: "CMR dashboard showing the four primary metric cards",
          caption:
            "The four primary Dashboard metrics: Domains, Mailboxes, Wallet Balance, and Total Customers.",
        },
      ],
    },

    {
      id: "wallet-balance",
      title: "Check your wallet balance",

      description:
        "Check your available funds directly from the Dashboard before purchasing domains or mailboxes.",

      content: [
        {
          type: "paragraph",
          content:
            "Your current wallet balance is displayed in the Wallet Balance card at the top right of the Dashboard.",
        },

        {
          type: "paragraph",
          content:
            "The balance shown on the card represents your real-time available funds. You can use this information to keep track of the funds available for purchasing domains and mailboxes.",
        },

        {
          type: "steps",
          items: [
            {
              id: "view-wallet-balance",
              title: "Locate the Wallet Balance card",
              description:
                "From the Overview screen, look at the Wallet Balance card in the top-right area of the Dashboard.",
            },

            {
              id: "check-available-funds",
              title: "Check your available funds",
              description:
                "Review the balance displayed on the card to see your current available wallet funds.",
            },
          ],
        },

        {
          type: "screenshot",
          src: WALLET_IMAGE,
          alt: "CMR Dashboard Wallet Balance card",
          caption:
            "The Wallet Balance card displays your current available funds.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Tip",
          content:
            "Check your Wallet Balance before purchasing domains or mailboxes to make sure you have sufficient available funds.",
        },
      ],
    },

    {
      id: "recent-activities",
      title: "Review recent activities",

      description:
        "Use Recent Activities to keep track of activity and access historical reports.",

      content: [
        {
          type: "paragraph",
          content:
            "The Recent Activities section gives you access to activity information from your reseller platform. It provides a convenient way to review historical activity and related data.",
        },

        {
          type: "paragraph",
          content:
            "When you need a copy of your activity information, you can use the Download option available in this section.",
        },

        {
          type: "screenshot",
          src: ACTIVITY_IMAGE,
          alt: "CMR Recent Activities section",
          caption:
            "Recent Activities — temporary placeholder image. Replace this URL with your Cloudinary screenshot.",
        },
      ],
    },

    {
      id: "download-activity-reports",
      title: "Download activity reports",

      description:
        "Export historical logs and reports directly from the Recent Activities section.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "open-recent-activities",
              title: "Go to Recent Activities",
              description:
                "From the Dashboard Overview screen, scroll to the Recent Activities section.",
            },

            {
              id: "find-download",
              title: "Select Download",
              description:
                "Locate the Download option within Recent Activities.",
            },

            {
              id: "download-report",
              title: "Download your data",
              description:
                "Use the export option to download historical logs and data reports, such as orders and account activities, directly to your local device.",
            },
          ],
        },

        {
          type: "screenshot",
          src: ACTIVITY_IMAGE,
          alt: "CMR Recent Activities Download option",
          caption:
            "Use Download in Recent Activities to export historical activity data.",
        },

        {
          type: "callout",
          variant: "info",
          title: "What can you export?",
          content:
            "The export feature can be used to download historical logs and data reports, including information such as orders and account activities.",
        },
      ],
    },

    {
      id: "quick-search",
      title: "Use Quick Search",

      description:
        "Quickly find users or orders without navigating through multiple sections of the platform.",

      content: [
        {
          type: "paragraph",
          content:
            "The Quick Search feature is available through the search bar at the top of the Dashboard. It provides a faster way to locate users or orders within your reseller platform.",
        },

        {
          type: "steps",
          items: [
            {
              id: "open-quick-search",
              title: "Open Quick Search",
              description:
                "Select the search bar at the top of the Dashboard, or use the keyboard shortcut ⌘K on Mac or Ctrl+K on Windows.",
            },

            {
              id: "search-user-order",
              title: "Search for a user or order",
              description:
                "Enter your search query to quickly find the user or order you're looking for.",
            },
          ],
        },

        {
          type: "screenshot",
          src: SEARCH_IMAGE,
          alt: "CMR Dashboard Quick Search",
          caption:
            "Use the Dashboard search bar or keyboard shortcut to quickly find users and orders.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Keyboard shortcut",
          content:
            "Use ⌘K on Mac or Ctrl+K on Windows to open Quick Search quickly.",
        },
      ],
    },

    {
      id: "support",
      title: "Get support",

      description:
        "Use the support chat to submit questions, report issues, or request assistance.",

      content: [
        {
          type: "paragraph",
          content:
            "If you need help while using CMR, you can access support directly from the Dashboard using the blue chat bubble icon.",
        },

        {
          type: "steps",
          items: [
            {
              id: "open-support",
              title: "Open the support chat",
              description:
                "Select the blue chat bubble icon located at the bottom-right of the Dashboard.",
            },

            {
              id: "submit-request",
              title: "Submit your request",
              description:
                "Use the support chat to open a support ticket and provide the details of your question, issue, bug report, or feature request.",
            },
          ],
        },

        {
          type: "screenshot",
          src: SUPPORT_IMAGE,
          alt: "CMR Dashboard support chat icon",
          caption:
            "Select the blue chat bubble in the bottom-right corner to access support.",
        },
      ],
    },

    {
      id: "youre-all-set",
      title: "You're all set",

      description:
        "You now know how to use the main Dashboard features.",

      content: [
        {
          type: "paragraph",
          content:
            "The Dashboard provides real-time visibility into your wallet balance, platform activity, account metrics, and quick-access tools.",
        },

        {
          type: "paragraph",
          content:
            "Use the metric cards to review your domains, mailboxes, wallet balance, and customers; use Recent Activities to review or export historical data; and use Quick Search and support tools whenever you need to find information or get assistance.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "You now have a complete overview of the CMR Dashboard and its key navigation and monitoring tools.",
        },
      ],
    },
  ],
};