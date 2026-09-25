export const oauthExportsArticle = {
  id: "oauth-exports",
  slug: "/exports/oauth-exports",
  category: {
    id: "exports",
    label: "Exports",
    slug: "/exports",
  },
  title: "OAuth Exports: Connecting Directly to Google/Microsoft",
  description:
    "Learn how OAuth exports work with Google and Microsoft mailboxes, including order-time exports, existing mailbox exports, and domain client IDs.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "OAuth Exports let CMR connect mailboxes to supported sending platforms using Google or Microsoft OAuth without handling mailbox passwords directly. OAuth can be configured during mailbox provisioning, added to an existing mailbox, or associated with domains through a third-party client ID.",

  sections: [
    {
      id: "oauth-overview",
      title: "How OAuth Exports work",
      description:
        "OAuth provides an alternative to exporting mailbox credentials directly.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR supports OAuth exports for Google and Microsoft mailboxes. Instead of directly handling the mailbox password, the export uses the OAuth configuration required by the provider and destination platform.",
        },
        {
          type: "steps",
          items: [
            {
              id: "google-oauth",
              title: "Google",
              description:
                "Google exports use the documented Google OAuth route, clientId, and appName configuration.",
            },
            {
              id: "microsoft-oauth",
              title: "Microsoft",
              description:
                "Microsoft exports use the documented Microsoft OAuth route.",
            },
          ],
        },
      ],
    },

    {
      id: "order-time",
      title: "Export at order time",
      description:
        "Configure OAuth as part of mailbox provisioning.",
      content: [
        {
          type: "paragraph",
          content:
            "OAuth can be included in the mailbox order payload so that the mailbox is exported as part of the provisioning workflow.",
        },
        {
          type: "steps",
          items: [
            {
              id: "order-config",
              title: "1. Add OAuth configuration to the order",
              description:
                "Include the appropriate Google or Microsoft OAuth configuration in the order payload.",
            },
            {
              id: "mailbox-created",
              title: "2. Wait for mailbox provisioning",
              description:
                "The mailbox is provisioned as part of the normal order flow.",
            },
            {
              id: "export-complete",
              title: "3. Confirm the export",
              description:
                "Use the mailbox.created event and the destination platform to confirm that the mailbox has been exported.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "OAuth export is asynchronous",
          content:
            "The mailbox export is part of an asynchronous workflow. Do not assume that receiving the original order response means the export has already completed.",
        },
      ],
    },

    {
      id: "existing-mailbox",
      title: "Export an existing mailbox",
      description:
        "Add OAuth export to a mailbox that has already been provisioned.",
      content: [
        {
          type: "paragraph",
          content:
            "You can also export an existing mailbox using the OAuth export endpoint.",
        },
        {
          type: "steps",
          items: [
            {
              id: "validate-mailbox",
              title: "1. Validate the mailbox",
              description:
                "Use POST /mailboxes/validate-mailbox?userId= to confirm that the mailbox's SMTP and DNS configuration is healthy before exporting.",
            },
            {
              id: "queue-oauth",
              title: "2. Queue the OAuth export",
              description:
                "Use POST /mailboxes/oauth?userId= and provide the mailboxId together with the appropriate provider configuration.",
            },
            {
              id: "confirm-destination",
              title: "3. Confirm the export",
              description:
                "Check the connected sending platform or the relevant completion flow to confirm that the mailbox has been exported.",
            },
          ],
        },
      ],
    },

    {
      id: "google-config",
      title: "Google OAuth configuration",
      description:
        "Google OAuth exports require the documented Google configuration fields.",
      content: [
        {
          type: "paragraph",
          content:
            "For Google mailboxes, the OAuth configuration includes the Google OAuth route, client ID, and application name.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "google": {\n    "googleOauthRoute": "<oauth-route>",\n    "clientId": "<client-id>",\n    "appName": "<app-name>"\n  }\n}',
        },
        {
          type: "callout",
          variant: "warning",
          title: "Use the configuration for the correct provider",
          content:
            "The provider is determined by the mailbox's serviceProvider. Do not send Google OAuth configuration for a Microsoft mailbox.",
        },
      ],
    },

    {
      id: "microsoft-config",
      title: "Microsoft OAuth configuration",
      description:
        "Microsoft OAuth exports use the documented Microsoft OAuth route.",
      content: [
        {
          type: "paragraph",
          content:
            "For Microsoft mailboxes, provide the documented Microsoft OAuth route.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "microsoft": {\n    "microsoftOauthRoute": "<oauth-route>"\n  }\n}',
        },
      ],
    },

    {
      id: "domain-client-id",
      title: "Attach a client ID to domains",
      description:
        "Associate a third-party OAuth client ID with domains so their mailboxes can use the configured client.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR also supports attaching a third-party OAuth client ID to domains. Once attached, mailboxes on those domains can use the client ID during the export workflow.",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /domains/add-client-id",
        },
        {
          type: "paragraph",
          content:
            "The request includes the userId, domains array, clientId, and app name. CMR validates the client ID before queuing the operation.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Domain-level OAuth configuration",
          content:
            "Use the domain client ID flow when the OAuth client should be associated with domains rather than configured individually for each mailbox export.",
        },
      ],
    },

    {
      id: "common-oauth-issues",
      title: "Common OAuth export issues",
      description:
        "Avoid the most common OAuth configuration problems.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "wrong-provider",
              title: "Wrong provider configuration",
              description:
                "Do not send Google configuration for a Microsoft mailbox or Microsoft configuration for a Google mailbox.",
            },
            {
              id: "skip-validation",
              title: "Exporting before validating the mailbox",
              description:
                "Validate the mailbox before exporting an existing mailbox to reduce failures caused by unhealthy SMTP or DNS configuration.",
            },
            {
              id: "immediate-completion",
              title: "Assuming immediate completion",
              description:
                "A successful request queues the export. Allow the OAuth handshake and destination platform processing to complete.",
            },
            {
              id: "duplicate-export",
              title: "Re-submitting an in-progress export",
              description:
                "Do not queue another OAuth export while an existing export is already in progress.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with Platform Exports or export troubleshooting.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "platform-vs-oauth",
              title: "Platform Exports vs OAuth Exports: Which One Do I Need",
              description:
                "Compare the two CMR export methods.",
              href: "/exports/platform-vs-oauth",
            },
            {
              id: "platform-export",
              title: "Connecting a Platform Credential & Exporting Mailboxes",
              description:
                "Connect a sending platform using stored credentials.",
              href: "/exports/platform-credential-export",
            },
            {
              id: "troubleshooting",
              title: "Troubleshooting a Failed Export",
              description:
                "Troubleshoot failed OAuth and Platform Exports.",
              href: "/exports/export-troubleshooting",
            },
          ],
        },
      ],
    },
  ],
};