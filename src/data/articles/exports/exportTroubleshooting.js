export const exportTroubleshootingArticle = {
  id: "export-troubleshooting",
  slug: "/exports/export-troubleshooting",
  category: {
    id: "exports",
    label: "Exports",
    slug: "/exports",
  },
  title: "Troubleshooting a Failed Export",
  description:
    "Troubleshoot failed platform and OAuth exports, including invalid credentials, incorrect provider configuration, mailbox health issues, and asynchronous export jobs.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Export failures can come from the sending platform, mailbox configuration, OAuth configuration, or the asynchronous export process. Start by identifying whether the export uses Platform Exports or OAuth, then check the corresponding credential, mailbox, and provider requirements before retrying.",

  sections: [
    {
      id: "start-diagnosis",
      title: "Start by identifying the export type",
      description:
        "The first troubleshooting step is determining which export mechanism was used.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "platform-check",
              title: "Platform Export",
              description:
                "Check the stored credential, credentialId, platform requirements, and destination workspace.",
            },
            {
              id: "oauth-check",
              title: "OAuth Export",
              description:
                "Check the mailbox provider, OAuth configuration, mailbox health, and OAuth client settings.",
            },
          ],
        },
      ],
    },

    {
      id: "platform-credential-errors",
      title: "Platform credential problems",
      description:
        "Check the credential when a Platform Export fails.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "invalid-credentials",
              title: "Credentials are invalid",
              description:
                "CMR validates platform credentials before storing them. Recheck the email, password, and platform-specific configuration.",
            },
            {
              id: "reachinbox-plan",
              title: "ReachInbox account does not have an active paid plan",
              description:
                "ReachInbox free or expired accounts can be rejected even when the credentials themselves authenticate successfully.",
            },
            {
              id: "instantly-workspace",
              title: "Instantly credential has no workspace",
              description:
                "Retrieve available workspaces using GET /exports/platform-workspaces and associate the credential with the selected orgId using PUT /exports/platform-credential.",
            },
            {
              id: "emailbison-metadata",
              title: "EmailBison metadata is incomplete",
              description:
                "EmailBison requires the documented metadata fields. Check the appBaseUrl, clientId, appName, and workspace values.",
            },
          ],
        },
      ],
    },

    {
      id: "oauth-errors",
      title: "OAuth export problems",
      description:
        "Check provider configuration and mailbox health when an OAuth export fails.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "wrong-provider",
              title: "Wrong provider configuration",
              description:
                "The provider is determined by the mailbox serviceProvider. Use Google configuration only for Google mailboxes and Microsoft configuration only for Microsoft mailboxes.",
            },
            {
              id: "missing-google",
              title: "Google OAuth configuration is incomplete",
              description:
                "Check that the documented Google OAuth route, clientId, and appName are provided.",
            },
            {
              id: "missing-microsoft",
              title: "Microsoft OAuth route is missing",
              description:
                "Check that the documented Microsoft OAuth route is provided for the Microsoft mailbox.",
            },
            {
              id: "client-id",
              title: "Domain client ID is invalid",
              description:
                "If using the domain client ID flow, confirm that the client ID is valid and that the app name matches the registered application.",
            },
          ],
        },
      ],
    },

    {
      id: "mailbox-validation",
      title: "Validate the mailbox before exporting",
      description:
        "Mailbox health can affect OAuth export success.",
      content: [
        {
          type: "paragraph",
          content:
            "For existing mailbox OAuth exports, CMR recommends validating the mailbox before queuing the export.",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /mailboxes/validate-mailbox?userId=<userId>",
        },
        {
          type: "paragraph",
          content:
            "The validation flow checks the mailbox's SMTP and DNS health before the OAuth export is queued.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not skip mailbox validation",
          content:
            "Exporting a misconfigured mailbox can result in failures or incomplete connections on the receiving platform.",
        },
      ],
    },

    {
      id: "queued-not-complete",
      title: "The request succeeded, but the mailbox is not exported yet",
      description:
        "A successful API response does not necessarily mean that the export has completed.",
      content: [
        {
          type: "paragraph",
          content:
            "Platform and OAuth export operations are asynchronous. The API response can confirm that the job has been queued while the actual export is still being processed.",
        },
        {
          type: "steps",
          items: [
            {
              id: "queued",
              title: "Request is accepted",
              description:
                "CMR accepts and queues the export request.",
            },
            {
              id: "processing",
              title: "Export is processed",
              description:
                "The external platform or OAuth flow processes the mailbox connection.",
            },
            {
              id: "completion",
              title: "Confirm the destination",
              description:
                "Check the receiving platform or relevant completion mechanism before treating the export as complete.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Do not immediately retry",
          content:
            "Do not submit another export simply because the mailbox is not visible immediately. First confirm whether the existing export is still in progress.",
        },
      ],
    },

    {
      id: "duplicate-export",
      title: "Avoid duplicate export requests",
      description:
        "Re-submitting an export that is already in progress can create unnecessary duplicate work.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR's OAuth documentation specifically advises against re-queuing an export while another export is already in progress.",
        },
        {
          type: "steps",
          items: [
            {
              id: "check-status",
              title: "1. Check the existing export",
              description:
                "Confirm whether the previous request is still being processed.",
            },
            {
              id: "check-platform",
              title: "2. Check the destination platform",
              description:
                "Look for the mailbox connection on the receiving platform.",
            },
            {
              id: "retry",
              title: "3. Retry only after confirming failure",
              description:
                "If the original export has actually failed, address the underlying issue before submitting another request.",
            },
          ],
        },
      ],
    },

    {
      id: "error-codes",
      title: "OAuth export error codes",
      description:
        "Use the response status to identify the general class of OAuth export failure.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "400",
              title: "400 — Invalid request",
              description:
                "Common causes include missing required fields, invalid request format, or failed client ID validation.",
            },
            {
              id: "401",
              title: "401 — Authentication problem",
              description:
                "Check the API key or userId.",
            },
            {
              id: "403",
              title: "403 — Resource ownership problem",
              description:
                "The mailbox or domain may not belong to the specified user.",
            },
            {
              id: "404",
              title: "404 — Resource not found",
              description:
                "Check the mailbox, domain, or other referenced resource.",
            },
            {
              id: "500",
              title: "500 — Provider connection error",
              description:
                "The external provider connection failed. The OAuth documentation identifies this as a retry-safe error.",
            },
          ],
        },
      ],
    },

    {
      id: "troubleshooting-checklist",
      title: "Export troubleshooting checklist",
      description:
        "Use this checklist before retrying a failed export.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "check-type",
              title: "1. Confirm the export type",
              description:
                "Determine whether the request uses Platform Export or OAuth Export.",
            },
            {
              id: "check-mailbox",
              title: "2. Confirm the mailbox",
              description:
                "Verify the mailboxId and confirm that the mailbox belongs to the expected user.",
            },
            {
              id: "check-health",
              title: "3. Check mailbox health",
              description:
                "For existing OAuth exports, validate SMTP and DNS before retrying.",
            },
            {
              id: "check-provider",
              title: "4. Check provider configuration",
              description:
                "Make sure Google and Microsoft configurations are being used with the correct mailbox provider.",
            },
            {
              id: "check-credential",
              title: "5. Check platform credentials",
              description:
                "For Platform Exports, verify the credentialId and platform-specific requirements.",
            },
            {
              id: "check-workspace",
              title: "6. Check workspace configuration",
              description:
                "For Instantly, confirm that the stored credential is associated with the intended orgId.",
            },
            {
              id: "check-progress",
              title: "7. Check whether the export is already in progress",
              description:
                "Do not submit another request until you know the previous export has failed.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Return to the export guides for detailed setup instructions.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "platform-vs-oauth",
              title: "Platform Exports vs OAuth Exports: Which One Do I Need",
              description:
                "Choose the appropriate export method.",
              href: "/exports/platform-vs-oauth",
            },
            {
              id: "platform-export",
              title: "Connecting a Platform Credential & Exporting Mailboxes",
              description:
                "Set up a Platform Export from start to finish.",
              href: "/exports/platform-credential-export",
            },
            {
              id: "oauth",
              title: "OAuth Exports: Connecting Directly to Google/Microsoft",
              description:
                "Configure Google and Microsoft OAuth exports.",
              href: "/exports/oauth-exports",
            },
            {
              id: "credentials",
              title: "Updating or Removing a Platform Credential",
              description:
                "Manage existing platform credentials.",
              href: "/exports/platform-credentials",
            },
          ],
        },
      ],
    },
  ],
};