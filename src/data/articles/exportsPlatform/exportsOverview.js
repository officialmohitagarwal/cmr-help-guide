
export const exportsOverviewArticle = {
  id: "exports-overview",
  slug: "/exports/overview",
  title: "Exports Overview",
  description:
    "Understand the Exports page and the information available for each export record.",

  category: {
    id: "platform-exports",
    label: "Exports",
    slug: "/exports",
  },

  author: "CMR",
  updated: "October 2026",

  introduction:
    "The Exports section provides a central view of mailbox and domain export history. Use it to find export records, review their status, and open the available details for an export.",

  sections: [
    {
      id: "understanding-exports",
      title: "Understanding the Exports page",
      description:
        "Each row represents an export record and displays information that helps you identify and review it.",

      content: [
        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1791115529/exports_overview.png",
          alt: "CMR Exports overview page",
          caption:
            "The Exports page displays export history with search, filters, and record details.",
        },
        {
          type: "paragraph",
          content:
            "The export history table includes the following information:",
        },
        {
          type: "heading",
          content: "User",
        },
        {
          type: "paragraph",
          content:
            "The email address and user ID associated with the export.",
        },
        {
          type: "heading",
          content: "Mailbox",
        },
        {
          type: "paragraph",
          content:
            "The mailbox email address and mailbox ID included in the export record.",
        },
        {
          type: "heading",
          content: "Export Date",
        },
        {
          type: "paragraph",
          content:
            "The date and time associated with the export.",
        },
        {
          type: "heading",
          content: "Provider",
        },
        {
          type: "paragraph",
          content:
            "The provider associated with the export, such as Google.",
        },
        {
          type: "heading",
          content: "Status",
        },
        {
          type: "paragraph",
          content:
            "The current status displayed for the export record. The screenshot shows exports marked as Completed.",
        },
        {
          type: "heading",
          content: "Details",
        },
        {
          type: "paragraph",
          content:
            "The Show control lets you open the available details for an export record.",
        },
      ],
    },
    
  ],
};
