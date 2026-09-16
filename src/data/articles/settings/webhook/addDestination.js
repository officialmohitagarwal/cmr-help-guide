export const addWebhookArticle = {
  id: "settings-add-webhook",
  slug: "/settings/webhook/add-destination",

  title: "How to Add a Destination Webhook URL",

  description:
    "Learn how to configure a destination webhook URL to receive webhook notifications from Cold Mail Reseller.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Webhook destinations allow Cold Mail Reseller to send webhook notifications to a configured endpoint. You can add a destination and choose the events you want it to receive.",

  sections: [
    {
      id: "add-webhook",
      title: "Add a destination webhook",
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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552945/AddDestinationWebhook1.jpg",
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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552946/AddDestinationWebhook2.png",
          alt: "Webhook settings",
        },

        {
          type: "step",
          number: 3,
          title: "Click Add Destination",
          description:
            "Click the + Add Destination button from the right side of the Webhook page.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552946/AddDestinationWebhook3.jpg",
          alt: "Add webhook destination",
        },

        {
          type: "step",
          number: 4,
          title: "Configure the destination",
          description:
            "Enter your Endpoint URL and Description, configure your event preferences, and then click Add Destination.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552947/AddDestinationWebhook4.png",
          alt: "Webhook destination configuration",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Configure a destination URL to receive webhook notifications from Cold Mail Reseller.",
        },
      ],
    },
  ],
};