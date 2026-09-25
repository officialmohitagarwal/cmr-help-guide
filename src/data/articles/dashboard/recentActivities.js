export const recentActivitiesArticle = {
  id: "recent-activities",
  slug: "/dashboard/recent-activities",
  title: "Recent Activities",
  description:
    "Understand the activity summary shown on the CMR dashboard and what each activity type represents.",

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
        "Recent Activities provides a summary of important activity across your CMR platform.",
      content: [
        {
          type: "paragraph",
          content:
            "The Recent Activities section gives you a quick view of important activity across your CMR platform. It summarizes activity for the selected period and helps you understand what has recently happened across users, domains, mailboxes, orders, and exports.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1790321727/Dashboard_recentActivities.png",
          alt: "CMR Dashboard Recent Activities",
          caption:
            "Recent Activities shows a summary of platform activity for the selected period.",
        },
      ],
    },

    {
      id: "activity-types",
      title: "Activity Types",
      description:
        "The dashboard reports several types of platform activity.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Orders Placed",
          description:
            "Shows checkout orders completed across all users on the platform.",
        },

        {
          type: "step",
          number: 2,
          title: "Domain Orders",
          description:
            "Shows new domain registrations processed for customers.",
        },

        {
          type: "step",
          number: 3,
          title: "Mailbox Orders",
          description:
            "Shows mailbox seats ordered and queued for provisioning.",
        },

        {
          type: "step",
          number: 4,
          title: "Exports Initiated",
          description:
            "Shows export jobs started by users on the platform.",
        },
      ],
    },

    {
      id: "activity-period",
      title: "Activity Period",
      description:
        "The activity table reflects the selected reporting period.",
      content: [
        {
          type: "paragraph",
          content:
            "The activity table displays the time period covered by the current summary. Use the selected period to understand when the reported activity occurred.",
        },
      ],
    },

    {
      id: "downloading-activity-data",
      title: "Downloading Activity Data",
      description:
        "Activity rows can provide a Download action.",
      content: [
        {
          type: "paragraph",
          content:
            "Each activity type can include a Download action. Use it when you need to download the corresponding activity information from the dashboard.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Tip",
          content:
            "Use Recent Activities for a quick operational overview. For detailed information about individual users, orders, domains, or mailboxes, open the corresponding section from the sidebar.",
        },
      ],
    },
  ],
};