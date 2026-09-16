export const webhookEventsArticle = {
  id: "settings-webhook-events",
  slug: "/settings/events",

  title: "How to Check Recent Webhook Payloads and Delivery Events",

  description:
    "Learn how to review recent webhook payloads and delivery events, inspect webhook activity, and troubleshoot or verify webhook notifications.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "The Events section provides a place to review recent webhook payloads and delivery events. You can use it to understand what events were sent and review their delivery activity.",

  sections: [
    {
      id: "check-webhook-events",
      title: "Review recent webhook activity",
      description:
        "Use the Events section to review recent webhook payloads and delivery events.",

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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552967/eventCheckWebhook1.jpg",
          alt: "CMR Settings page",
        },

        {
          type: "step",
          number: 2,
          title: "Open Events",
          description:
            "Click Events from the sidebar inside the Settings page.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552967/eventCheckWebhook2.png",
          alt: "Events section",
        },

        {
          type: "step",
          number: 3,
          title: "Review webhook payloads and delivery events",
          description:
            "Review your recent webhook payloads and delivery events. You can also filter the events by event type, a specific date range, or event status.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552968/eventCheckWebhook3.png",
          alt: "Recent webhook payloads and delivery events",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Review recent webhook payloads and delivery events to verify activity and troubleshoot delivery issues.",
        },
      ],
    },
  ],
};