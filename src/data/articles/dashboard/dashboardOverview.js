export const dashboardOverviewArticle = {
  id: "dashboard-overview",
  slug: "/dashboard/overview",
  title: "Dashboard Overview",
  description:
    "Understand the CMR dashboard and the key information available at a glance.",

  category: {
    id: "dashboard",
    label: "Dashboard",
    slug: "/dashboard",
  },

  sections: [
    {
      id: "overview",
      title: "Introduction",
      description:
        "The CMR dashboard gives you a quick overview of your platform.",
      content: [
        {
          type: "paragraph",
          content:
            "The CMR dashboard brings together key information about your mailboxes, domains, wallet, customers, and recent platform activity in one place.",
        },
        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1790321727/Dashboard_main.png",
          alt: "CMR Dashboard overview",
          caption:
            "The CMR dashboard provides an overview of your platform, activity, wallet, and customers.",
        },
      ],
    },

    {
      id: "dashboard-at-a-glance",
      title: "Dashboard at a Glance",
      description:
        "The dashboard provides quick access to your most important platform information.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Overview Metrics",
          description:
            "View active mailboxes, purchased domains, available wallet balance, and total customers.",
        },
        {
          type: "step",
          number: 2,
          title: "Recent Activities",
          description:
            "Review recent orders, domain orders, mailbox orders, and export activity.",
        },
        {
          type: "step",
          number: 3,
          title: "Quick Search",
          description:
            "Search for users or orders directly from the dashboard.",
        },
        {
          type: "step",
          number: 4,
          title: "Wallet Balance",
          description:
            "Check your currently available wallet balance.",
        },
        {
          type: "step",
          number: 5,
          title: "Support",
          description:
            "Access support from the chat button in the bottom-right corner.",
        },
      ],
    },

    {
      id: "explore-dashboard",
      title: "Explore the Dashboard",
      description:
        "Open a focused guide for each dashboard feature.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              title: "Recent Activities",
              description:
                "Understand the activity information shown on the dashboard.",
              href: "/dashboard/recent-activities",
            },
            {
              title: "Quick Search",
              description:
                "Learn how to find users and orders quickly.",
              href: "/dashboard/quick-search",
            },
            {
              title: "Wallet Balance",
              description:
                "Learn where to find your wallet balance on the dashboard.",
              href: "/dashboard/wallet-balance",
            },
            {
              title: "Getting Support",
              description:
                "Learn how to access support directly from the dashboard.",
              href: "/dashboard/support",
            },
          ],
        },
      ],
    },
  ],
};