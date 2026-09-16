export const editBrandDetailsArticle = {
  id: "settings-edit-brand-details",
  slug: "/settings/edit-brand-details",

  title: "How to Edit Brand Details",

  description:
    "Learn how to update your brand name and logo so your white-label workspace reflects your business identity.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Your brand details help keep your white-label experience aligned with your business identity. You can update your brand name and logo from the General section of Settings.",

  sections: [
    {
      id: "edit-brand-details",
      title: "Update your brand details",
      description:
        "Follow these steps to change the brand information displayed across your white-label workspace.",

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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552958/editBrand1.jpg",
          alt: "CMR Settings page",
          caption:
            "Open Settings to manage your workspace and brand details.",
        },

        {
          type: "step",
          number: 2,
          title: "Update your brand information",
          description:
            "Choose the Brand Name or Brand Logo that you want to update. Once you have made your changes, click the Save Settings button.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789553381/editBrand2.png",
          alt: "Brand name and logo settings",
          caption:
            "Update your Brand Name or Brand Logo and save the changes.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Customize your brand name and logo to maintain a consistent white-label experience for your clients.",
        },
      ],
    },
  ],
};