export const quickSearchArticle = {
  id: "quick-search",
  slug: "/dashboard/quick-search",
  title: "Quick Search",
  description:
    "Learn how to quickly find users and orders from the CMR dashboard.",

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
        "Quick Search lets you find users and orders directly from the dashboard.",
      content: [
        {
          type: "paragraph",
          content:
            "Quick Search lets you find users and orders directly from the CMR dashboard without navigating through individual sections.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1790321727/Dashboard_search.png",
          alt: "CMR Dashboard Quick Search",
          caption:
            "Use the dashboard search bar to quickly find users or orders.",
        },
      ],
    },

    {
      id: "using-quick-search",
      title: "Using Quick Search",
      description:
        "Use the dashboard search field to find the information you need.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Open the search",
          description:
            "Select the Search by Users or Orders field at the top of the dashboard.",
        },

        {
          type: "step",
          number: 2,
          title: "Enter your search",
          description:
            "Enter the relevant user or order information into the search field.",
        },

        {
          type: "step",
          number: 3,
          title: "Review the results",
          description:
            "Review the matching users or orders and select the relevant result.",
        },
      ],
    },

    {
      id: "keyboard-shortcut",
      title: "Keyboard Shortcut",
      description:
        "You can also open Quick Search using a keyboard shortcut.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the ⌘K keyboard shortcut on supported devices to open Quick Search.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Tip",
          content:
            "Quick Search is useful when you already know the user or order you need and want to avoid navigating through the platform manually.",
        },
      ],
    },
  ],
};