export const editMemberRoleArticle = {
  id: "settings-edit-member-role",
  slug: "/settings/edit-member-role",

  title: "How to Edit a Member's Role",

  description:
    "Learn how to update an existing workspace member's role and manage their level of access.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Workspace roles determine the level of access a member has within your workspace. You can update an existing member's role from Workspace Members.",

  sections: [
    {
      id: "edit-member-role",
      title: "Change a member's role",
      description:
        "Follow these steps to update the role assigned to an existing workspace member.",

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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552960/editMemberRole1.jpg",
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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552961/editMemberRole2.png",
          alt: "Workspace Members section",
        },

        {
          type: "step",
          number: 3,
          title: "Open the member's role dropdown",
          description:
            "Locate the user whose role you want to change and click the dropdown under the Role column.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552961/editMemberRole3.jpg",
          alt: "Member role dropdown",
        },

        {
          type: "step",
          number: 4,
          title: "Choose the appropriate role",
          description:
            "Choose the appropriate role from the available options. The member's access will be changed accordingly.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552962/editMemberRole4.jpg",
          alt: "Workspace role options",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Update a member's workspace role to give them the appropriate level of access and permissions for their responsibilities.",
        },
      ],
    },
  ],
};