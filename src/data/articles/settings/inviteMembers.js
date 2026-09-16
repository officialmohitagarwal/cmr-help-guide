export const inviteMembersArticle = {
  id: "settings-invite-members",
  slug: "/settings/invite-members",

  title: "How to Invite Members",

  description:
    "Learn how to invite new members to your Cold Mail Reseller workspace and give them access to collaborate with your team.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Workspace Members allows you to invite people to your CMR workspace so they can collaborate on your reseller operations.",

  sections: [
    {
      id: "invite-members",
      title: "Invite a workspace member",
      description:
        "Follow these steps to send an invitation to a new workspace member.",

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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552971/inviteMember1.jpg",
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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552971/inviteMember2.png",
          alt: "Workspace Members section",
        },

        {
          type: "step",
          number: 3,
          title: "Click Invite Member",
          description:
            "Click the Invite Member button from the top right of the Workspace Members page.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552972/inviteMember3.png",
          alt: "Invite Member button",
        },

        {
          type: "step",
          number: 4,
          title: "Enter the member's details",
          description:
            "Enter the email ID of the member you want to invite, choose their Role, and then click Send Invite.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552973/inviteMember4.png",
          alt: "Send workspace member invitation",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Add team members to your workspace and give them access to collaborate on your reseller operations.",
        },
      ],
    },
  ],
};