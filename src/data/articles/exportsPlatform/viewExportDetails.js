export const viewExportDetailsArticle = {
  id: "view-export-details",
  slug: "/exports/view-export-details",
  title: "View Export Details",
  description:
    "Open an export record to review its available details.",

  category: {
    id: "platform-exports",
    label: "Exports",
    slug: "/exports",
  },

  author: "CMR",
  updated: "October 2026",

  introduction:
    "Each export record includes a Show control in the Details column. Use it to open the details available for that record.",

  sections: [
    {
      id: "open-export-details",
      title: "Open an export record",
      description:
        "Use the Show control in the export history table.",

      content: [
        {
          type: "steps",
          items: [
            {
              title: "Find the export record",
              description:
                "Use the search field or filters to locate the export you want to review.",
            },
            {
              title: "Select Show",
              description:
                "In the Details column, click Show on the relevant export row.",
            },
            {
              title: "Review the displayed details",
              description:
                "Inspect the information made available for the selected export.",
            },
          ],
        },
        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1791115529/exports_showExportDetails.png",
          alt: "Show control in the export history table",
          caption:
            "Use Show in the Details column to open an export record.",
        },
      ],
    },
  ],
};