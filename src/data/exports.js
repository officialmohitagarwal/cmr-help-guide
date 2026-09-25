export const exportsCategory = {
  id: "exports",
  label: "Exports",
  slug: "/concepts/exporting-mailboxes",
  title: "Exporting Mailboxes to Sending Platforms",
  description:
    "Understand how to export CMR mailboxes to sending platforms using platform credentials or Google and Microsoft OAuth.",

  articles: [
    {
      id: "platform-vs-oauth",
      title: "Platform Exports vs OAuth Exports: Which One Do I Need",
      slug: "/exports/platform-vs-oauth",
      description:
        "Understand the difference between Platform Exports and OAuth Exports, what each method connects, and when to use each export flow.",
    },

    {
      id: "platform-credential-export",
      title: "Connecting a Platform Credential & Exporting Mailboxes",
      slug: "/exports/platform-credential-export",
      description:
        "Learn how to connect a sending platform account, receive a credentialId, and export one or more CMR mailboxes.",
    },

    {
      id: "oauth-exports",
      title: "OAuth Exports: Connecting Directly to Google/Microsoft",
      slug: "/exports/oauth-exports",
      description:
        "Learn how OAuth exports work with Google and Microsoft mailboxes, including order-time exports, existing mailbox exports, and domain client IDs.",
    },

    {
      id: "platform-credentials",
      title: "Updating or Removing a Platform Credential",
      slug: "/exports/platform-credentials",
      description:
        "Learn how to update stored platform credentials, switch workspaces, rotate credentials, and remove a connected platform credential.",
    },

    {
      id: "export-troubleshooting",
      title: "Troubleshooting a Failed Export",
      slug: "/exports/export-troubleshooting",
      description:
        "Troubleshoot failed platform and OAuth exports, including invalid credentials, incorrect provider configuration, mailbox health issues, and asynchronous export jobs.",
    },
  ],
};