export const viewWebhookArticle = {
  id: "settings-view-webhook",
  slug: "/settings/webhook/view-details",

  title: "How to View the Details of a Webhook Endpoint",

  description:
    "Learn how to access an existing webhook endpoint and review its configuration and event details.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "You can inspect an existing webhook endpoint to review its configuration and the events associated with it.",

  sections: [
    {
      id: "view-webhook",
      title: "View webhook endpoint details",
      content: [
        {
          type: "step",
          number: 1,
          title: "Open Settings",
          description:
            "Go to the CMR Settings page at partners.coldmailreseller.com/settings.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552979/viewDetailsWebhook1.jpg",
          alt: "CMR Settings page",
        },

        {
          type: "step",
          number: 2,
          title: "Open Webhook",
          description:
            "Click Webhook from the sidebar inside the Settings page.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552981/viewDetailsWebhook2.png",
          alt: "Webhook settings",
        },

        {
          type: "step",
          number: 3,
          title: "Open endpoint details",
          description:
            "Locate the desired endpoint and click the Show button under the Show Details column.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552980/viewDetailsWebhook3.png",
          alt: "Show webhook endpoint details",
        },

        {
          type: "step",
          number: 4,
          title: "Review event details",
          description:
            "Review the details of all events that occurred for the selected endpoint, along with the Log Details report.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552981/viewDetailsWebhook4.png",
          alt: "Webhook event details and logs",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Review the configuration and details of an existing webhook endpoint to verify that it is set up correctly and ready to receive events.",
        },
      ],
    },
  ],
};