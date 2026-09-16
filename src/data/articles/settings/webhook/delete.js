export const deleteWebhookArticle = {
  id: "settings-delete-webhook",
  slug: "/settings/webhook/delete",

  title: "How to Delete a Webhook Endpoint",

  description:
    "Learn how to remove an existing webhook destination from your workspace.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "When a webhook destination is no longer needed, you can delete it from the Webhook section of Settings.",

  sections: [
    {
      id: "delete-webhook",
      title: "Delete a webhook endpoint",
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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552952/deleteWebhook1.jpg",
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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552953/deleteWebhook2.png",
          alt: "Webhook settings",
        },

        {
          type: "step",
          number: 3,
          title: "Delete the endpoint",
          description:
            "Locate the endpoint you want to remove and click the trash button. The webhook endpoint will be deleted successfully.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552953/deleteWebhook3.jpg",
          alt: "Delete webhook endpoint",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Remove a webhook destination when it is no longer needed, so your workspace stays organized and only active destinations are maintained.",
        },
      ],
    },
  ],
};