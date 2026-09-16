export const toggleWebhookArticle = {
  id: "settings-toggle-webhook",
  slug: "/settings/webhook/enable-disable",

  title: "How to Enable or Disable a Webhook Endpoint",

  description:
    "Learn how to control whether a configured webhook destination is active and able to receive webhook events.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "You can enable or disable a configured webhook endpoint without deleting its configuration. This allows you to control whether the destination is active.",

  sections: [
    {
      id: "toggle-webhook",
      title: "Enable or disable a webhook",
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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552965/enableWebhook1.jpg",
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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552965/enableWebhook2.png",
          alt: "Webhook settings",
        },

        {
          type: "step",
          number: 3,
          title: "Toggle the endpoint status",
          description:
            "Locate the desired endpoint and use the toggle button under the Status column to enable or disable the Webhook Endpoint.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552966/enableWebhook3.jpg",
          alt: "Webhook endpoint status toggle",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Control whether a configured webhook destination is active and able to receive webhook events.",
        },
      ],
    },
  ],
};