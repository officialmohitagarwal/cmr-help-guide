export const cmrApiKeyArticle = {
  id: "settings-cmr-api-key",
  slug: "/settings/cmr-api-key",

  title: "How to Get Your CMR API Key",

  description:
    "Learn where to find your CMR API Key and retrieve the key needed to authenticate API requests and integrations with Cold Mail Reseller.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Your CMR API Key is available from the Integrations section of Settings. You can reveal the key and copy it for use when connecting Cold Mail Reseller with external applications and services.",

  sections: [
    {
      id: "get-api-key",
      title: "Get your CMR API Key",
      description:
        "Follow these steps to access and copy your CMR API Key.",

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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552968/getcmrAPI1.jpg",
          alt: "CMR Settings page",
        },

        {
          type: "step",
          number: 2,
          title: "Open Integrations",
          description:
            "Click Integrations from the sidebar inside the Settings page.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552969/getcmrAPI2.png",
          alt: "CMR Integrations settings",
        },

        {
          type: "step",
          number: 3,
          title: "Reveal your API Key",
          description:
            "Click the eye icon if you want to view your CMR API Key.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552969/getcmrAPI3.jpg",
          alt: "Show CMR API Key",
        },

        {
          type: "step",
          number: 4,
          title: "Copy your API Key",
          description:
            "Click the Copy API Key button to copy your CMR API Key.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552970/getcmrAPI4.png",
          alt: "Copy CMR API Key button",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Find your CMR API Key to authenticate API requests and connect Cold Mail Reseller with your applications.",
        },
      ],
    },
  ],
};