export const filterExportsArticle = {
  id: "filter-exports",
  slug: "/exports/filter-exports",
  title: "Filter Exports",
  description:
    "Narrow export history using the provider and status filters.",

  category: {
    id: "platform-exports",
    label: "Exports",
    slug: "/exports",
  },

  author: "CMR",
  updated: "October 2026",

  introduction:
    "The Exports page provides provider and status filters to help you narrow the export records displayed in the table.",

  sections: [
    {
      id: "filter-export-history",
      title: "Apply export filters",
      description:
        "Use the dropdown filters above the export history table.",

      content: [
        {
          type: "steps",
          items: [
            {
              title: "Open the provider filter",
              description:
                "Select All Providers to view the available provider options.",
            },
            {
              title: "Choose a provider",
              description:
                "Select the provider relevant to the export records you want to review.",
            },
            {
              title: "Open the status filter",
              description:
                "Select All Status to view the available export status options.",
            },
            {
              title: "Choose a status",
              description:
                "Select the status you want to use to narrow the export history.",
            },
            {
              title: "Review the filtered records",
              description:
                "The table displays the records matching the selected filters.",
            },
          ],
        },
        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=Export+Filters",
          alt: "Provider and status filters on the Exports page",
          caption:
            "The Exports page includes separate provider and status filters.",
        },
      ],
    },
    {
      id: "filter-options",
      title: "Available filters",
      description:
        "The screenshot shows two filter controls.",

      content: [
        {
          type: "paragraph",
          content:
            "Provider: The dropdown defaults to All Providers. The screenshot shows Google as a provider in the export table.",
        },
        {
          type: "paragraph",
          content:
            "Status: The dropdown defaults to All Status. The screenshot shows Completed as an export status.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Note",
          content:
            "The exact available provider and status options may depend on the records and options supported by your CMR workspace.",
        },
      ],
    },
  ],
};