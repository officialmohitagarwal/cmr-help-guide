export const dashboardSupportArticle = {
  id: "dashboard-support",
  slug: "/dashboard/support",
  title: "Getting Support from the Dashboard",
  description:
    "Learn how to access CMR support directly from the dashboard.",

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
        "CMR provides support directly from the dashboard.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides a support chat directly from the dashboard so you can get assistance while working on the platform.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1790321727/Dashboard_support.png",
          alt: "CMR Dashboard support chat",
          caption:
            "The support chat button is available in the bottom-right corner of the dashboard.",
        },
      ],
    },

    {
      id: "opening-support",
      title: "Opening Support",
      description:
        "Open the support chat directly from the dashboard.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Open the dashboard",
          description:
            "Navigate to the CMR dashboard.",
        },

        {
          type: "step",
          number: 2,
          title: "Open the support chat",
          description:
            "Select the support chat button in the bottom-right corner of the dashboard.",
        },

        {
          type: "step",
          number: 3,
          title: "Describe your issue",
          description:
            "Provide the relevant details about the issue or question you need help with.",
        },
      ],
    },

    {
      id: "when-to-use-support",
      title: "When to Use Support",
      description:
        "Use support when you need assistance with an issue you cannot resolve from the documentation.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the support chat when you need assistance with an issue that you cannot resolve using the available documentation or platform workflows.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Tip",
          content:
            "When contacting support, include relevant user, order, mailbox, domain, or export details whenever applicable.",
        },
      ],
    },
  ],
};