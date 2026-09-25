export const platformVsOauthArticle = {
  id: "platform-vs-oauth",
  slug: "/exports/platform-vs-oauth",
  category: {
    id: "exports",
    label: "Exports",
    slug: "/exports",
  },
  title: "Platform Exports vs OAuth Exports: Which One Do I Need",
  description:
    "Understand the difference between Platform Exports and OAuth Exports, what each method connects, and when to use each export flow.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "CMR supports two different mailbox export approaches. Platform Exports use stored credentials for supported sending platforms, while OAuth Exports use Google or Microsoft OAuth to connect mailboxes without handling mailbox passwords directly. The right method depends on the sending platform and the authentication method it supports.",

  sections: [
    {
      id: "two-export-methods",
      title: "CMR supports two export methods",
      description:
        "Understand the difference between Platform Exports and OAuth Exports before starting an export.",
      content: [
        {
          type: "heading",
          content: "Platform Exports",
        },
        {
          type: "paragraph",
          content:
            "Platform Exports connect CMR mailboxes to supported sending platforms using platform account credentials. CMR validates the credentials before storing them and returns a credentialId that is used for subsequent export operations.",
        },
        {
          type: "heading",
          content: "OAuth Exports",
        },
        {
          type: "paragraph",
          content:
            "OAuth Exports connect mailboxes using Google or Microsoft OAuth instead of handling mailbox passwords directly. OAuth configuration can be provided when the mailbox is ordered or used later to export an existing mailbox.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The authentication model is different",
          content:
            "Platform Exports authenticate against the sending platform using stored platform credentials. OAuth Exports use Google or Microsoft OAuth configuration for the mailbox connection.",
        },
      ],
    },

    {
      id: "platform-export",
      title: "When to use Platform Exports",
      description:
        "Platform Exports are used when the destination is a supported sending platform that accepts platform credentials.",
      content: [
        {
          type: "paragraph",
          content:
            "Use Platform Exports when you want to export CMR mailboxes to a supported sequencing or sending platform using that platform's account credentials.",
        },
        {
          type: "steps",
          items: [
            {
              id: "platform-credentials",
              title: "Connect the sending platform account",
              description:
                "Provide the credentials required by the supported platform.",
            },
            {
              id: "credential-id",
              title: "Receive a credentialId",
              description:
                "CMR validates the credentials and returns a unique credentialId for the stored credential.",
            },
            {
              id: "export-mailboxes",
              title: "Export mailboxes",
              description:
                "Pass the credentialId and the mailboxIds you want to export.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "Current supported Platform Export integrations include ReachInbox, Smartlead, Instantly, and EmailBison, with platform-specific requirements for each.",
        },
      ],
    },

    {
      id: "oauth-export",
      title: "When to use OAuth Exports",
      description:
        "OAuth Exports are used when the mailbox should connect through Google or Microsoft OAuth.",
      content: [
        {
          type: "paragraph",
          content:
            "Use OAuth Exports when the mailbox's sending-platform connection uses Google or Microsoft OAuth rather than stored platform account credentials.",
        },
        {
          type: "steps",
          items: [
            {
              id: "oauth-order-time",
              title: "Export during mailbox provisioning",
              description:
                "Provide the OAuth configuration in the mailbox order so the mailbox can be exported as part of provisioning.",
            },
            {
              id: "oauth-existing",
              title: "Export an existing mailbox",
              description:
                "Use POST /mailboxes/oauth to queue an OAuth export for an already provisioned mailbox.",
            },
            {
              id: "oauth-domain-client",
              title: "Attach a client ID to domains",
              description:
                "Use POST /domains/add-client-id to attach a third-party OAuth client ID to domains so their mailboxes can use that configuration.",
            },
          ],
        },
      ],
    },

    {
      id: "quick-decision",
      title: "Which export method should you use?",
      description:
        "Use the destination and authentication method to choose the export flow.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "decision-platform",
              title: "Your destination requires platform credentials",
              description:
                "Use Platform Exports. Store the platform credentials, receive a credentialId, and use that ID to export mailboxes.",
            },
            {
              id: "decision-google",
              title: "Your mailbox uses Google OAuth",
              description:
                "Use OAuth Exports with the documented Google OAuth configuration.",
            },
            {
              id: "decision-microsoft",
              title: "Your mailbox uses Microsoft OAuth",
              description:
                "Use OAuth Exports with the documented Microsoft OAuth route.",
            },
            {
              id: "decision-order",
              title: "You want export during provisioning",
              description:
                "Provide the supported OAuth configuration in the order payload when using the OAuth export flow.",
            },
          ],
        },
      ],
    },

    {
      id: "important-difference",
      title: "The key difference",
      description:
        "The two flows solve the same broad problem using different authentication models.",
      content: [
        {
          type: "callout",
          variant: "info",
          title: "Platform Export",
          content:
            "Sending platform credentials → CMR validates and stores them → credentialId is returned → mailboxIds are exported using that credentialId.",
        },
        {
          type: "callout",
          variant: "info",
          title: "OAuth Export",
          content:
            "Google or Microsoft OAuth configuration → CMR queues the OAuth export → the mailbox is connected through the OAuth flow without directly handling its password.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with exports",
      description:
        "Choose the guide for the export method you are implementing.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "platform-credential-export",
              title: "Connecting a Platform Credential & Exporting Mailboxes",
              description:
                "Connect a supported sending platform and export mailboxes.",
              href: "/exports/platform-credential-export",
            },
            {
              id: "oauth-exports",
              title: "OAuth Exports: Connecting Directly to Google/Microsoft",
              description:
                "Configure Google or Microsoft OAuth mailbox exports.",
              href: "/exports/oauth-exports",
            },
            {
              id: "platform-credentials",
              title: "Updating or Removing a Platform Credential",
              description:
                "Update, rotate, switch, or remove stored platform credentials.",
              href: "/exports/platform-credentials",
            },
            {
              id: "export-troubleshooting",
              title: "Troubleshooting a Failed Export",
              description:
                "Resolve common Platform and OAuth export failures.",
              href: "/exports/export-troubleshooting",
            },
          ],
        },
      ],
    },
  ],
};