export const searchExportsArticle = {
  id: "search-exports",
  slug: "/exports/search-exports",
  title: "Find and Search Exports",
  description:
    "Find export records using a user's email address or mailbox information.",

  category: {
    id: "platform-exports",
    label: "Exports",
    slug: "/exports",
  },

  author: "CMR",
  updated: "October 2026",

  introduction:
    "The Exports page includes a search field that helps you locate export records by email or mailbox.",

  sections: [
    {
      id: "search-export-records",
      title: "Search export records",
      description:
        "Use the search field above the export history table.",

      content: [
        {
          type: "steps",
          items: [
            {
              title: "Open Exports",
              description:
                "Navigate to the Exports section from the sidebar.",
            },
            {
              title: "Enter a search term",
              description:
                "Use the Search by Email or Mailbox field to enter the relevant email address or mailbox information.",
            },
            {
              title: "Review the results",
              description:
                "Review the export records displayed and identify the matching user, mailbox, provider, date, and status.",
            },
          ],
        },
        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1791115529/exports_findSearch.png",
          alt: "Exports search field",
          caption:
            "Use the search field to find relevant export records.",
        },
      ],
    },
  ],
};