export const removeMemberArticle = {
  id: "settings-remove-member",
  slug: "/settings/remove-member",

  title: "How to Remove a Member",

  description:
    "Learn how to remove a member from your Cold Mail Reseller workspace when they no longer need access.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "You can remove workspace members directly from the Workspace Members section when they no longer need access to your workspace.",

  sections: [
    {
      id: "remove-member",
      title: "Remove a workspace member",
      description:
        "Follow these steps to remove a member from your workspace.",

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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552975/removeMember1.jpg",
          alt: "CMR Settings page",
        },

        {
          type: "step",
          number: 2,
          title: "Open Workspace Members",
          description:
            "Click Workspace Members from the sidebar inside the Settings page.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552975/removeMember2.png",
          alt: "Workspace Members section",
        },

        {
          type: "step",
          number: 3,
          title: "Remove the member",
          description:
            "Locate the user you want to remove and click the Remove button associated with that user.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552976/removeMember3.png",
          alt: "Remove workspace member",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Remove members from your workspace when they no longer need access.",
        },
      ],
    },
  ],
};