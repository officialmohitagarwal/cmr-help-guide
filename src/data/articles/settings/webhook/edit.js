export const editWebhookArticle = {
  id: "settings-edit-webhook",
  slug: "/settings/webhook/edit",

  title: "How to Edit a Webhook Endpoint",

  description:
    "Learn how to update an existing webhook destination when your endpoint or configuration changes.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "You can edit an existing webhook destination to update its endpoint URL, description, or event preferences.",

  sections: [
    {
      id: "edit-webhook",
      title: "Edit a webhook endpoint",
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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552963/editWebhook1.jpg",
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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552963/editWebhook2.png",
          alt: "Webhook settings",
        },

        {
          type: "step",
          number: 3,
          title: "Click the pencil button",
          description:
            "Locate the endpoint you want to update and click its pencil button.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552964/editWebhook3.png",
          alt: "Edit webhook button",
        },

        {
          type: "step",
          number: 4,
          title: "Update the endpoint",
          description:
            "Enter your updated Endpoint URL or Description, or change your event preference checkboxes. Then click Save Changes.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552964/editWebhook4.png",
          alt: "Save webhook changes",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Update an existing webhook destination when your endpoint or configuration changes.",
        },
      ],
    },
  ],
};