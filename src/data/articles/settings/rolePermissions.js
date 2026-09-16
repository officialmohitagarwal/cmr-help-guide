export const rolePermissionsArticle = {
  id: "settings-role-permissions",
  slug: "/settings/role-permissions",

  title: "Workspace Role Permissions",

  description:
    "Understand the different workspace roles in Cold Mail Reseller and the permissions available to each role.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Workspace roles help determine what members can access and which actions they can perform within the workspace. Use the role permissions below to understand the access associated with each role.",

  sections: [
    {
      id: "workspace-roles",
      title: "Workspace Role Permissions",
      description:
        "Review the access and permissions associated with each workspace role.",

      content: [
        {
          type: "heading",
          content: "Admin",
        },

        {
          type: "paragraph",
          content:
            "Admin has full control over the workspace.",
        },

        {
          type: "paragraph",
          content:
            "Admins can invite, remove, and manage members; update billing, pricing, and all settings; manage orders, users, exports, and subscriptions; and access integrations, webhooks, and events.",
        },

        {
          type: "heading",
          content: "Editor",
        },

        {
          type: "paragraph",
          content:
            "Editor can manage most things, but the source specifies restrictions around members and billing.",
        },

        {
          type: "paragraph",
          content:
            "Editors can manage orders, users, exports, and subscriptions; update general settings, domains, and configuration; access integrations, webhooks, and events; invite or remove members; and modify pricing or payment settings.",
        },

        {
          type: "heading",
          content: "Viewer",
        },

        {
          type: "paragraph",
          content:
            "Viewer has read-only access across the dashboard.",
        },

        {
          type: "paragraph",
          content:
            "Viewers can view the dashboard, orders, users, and subscriptions. The provided source also states that Viewers cannot change settings, manage members, or access billing or pricing.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Understand the different workspace roles and the level of access and permissions available to each member.",
        },
      ],
    },
  ],
};