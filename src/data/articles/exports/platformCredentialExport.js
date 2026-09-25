export const platformCredentialExportArticle = {
  id: "platform-credential-export",
  slug: "/exports/platform-credential-export",
  category: {
    id: "exports",
    label: "Exports",
    slug: "/exports",
  },
  title: "Connecting a Platform Credential & Exporting Mailboxes",
  description:
    "Learn how to connect a sending platform account, receive a credentialId, and export one or more CMR mailboxes.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Platform Exports let you connect CMR mailboxes to supported sending platforms using platform credentials. CMR validates the credentials against the external platform before saving them. Once the credential is stored, CMR returns a credentialId that you use when exporting mailboxes.",

  sections: [
    {
      id: "platform-export-flow",
      title: "How Platform Exports work",
      description:
        "The export process has three main stages: connect the platform, receive a credentialId, and export mailboxes.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "connect-account",
              title: "1. Connect the platform account",
              description:
                "Submit the platform identifier and the credentials required by that platform.",
            },
            {
              id: "receive-credential",
              title: "2. Receive the credentialId",
              description:
                "CMR validates the credentials and stores them only when validation succeeds. The response contains a unique credentialId.",
            },
            {
              id: "export-mailboxes",
              title: "3. Export the mailboxes",
              description:
                "Use the credentialId together with the mailboxIds you want to export.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "You do not resend raw credentials for every export",
          content:
            "Once a platform credential has been stored successfully, use its credentialId for subsequent export operations.",
        },
      ],
    },

    {
      id: "supported-platforms",
      title: "Supported sending platforms",
      description:
        "Each supported platform has its own credential requirements.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "reachinbox",
              title: "ReachInbox",
              description:
                "Requires credentials.email and credentials.password. The account must have an active paid plan.",
            },
            {
              id: "smartlead",
              title: "Smartlead",
              description:
                "Requires credentials.email and credentials.password.",
            },
            {
              id: "instantly",
              title: "Instantly",
              description:
                "Requires credentials.email, credentials.password, and an orgId identifying the workspace.",
            },
            {
              id: "emailbison",
              title: "EmailBison",
              description:
                "Requires credentials plus the documented metadata block for the EmailBison workspace.",
            },
          ],
        },
      ],
    },

    {
      id: "add-credential",
      title: "Add a platform credential",
      description:
        "Store and validate a sending platform account before exporting mailboxes.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the Add Platform Credential endpoint to submit the supported platform identifier and required credentials.",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /exports/platform-credential",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "app": "SMARTLEAD",\n  "credentials": {\n    "email": "user@example.com",\n    "password": "secret"\n  }\n}',
        },
        {
          type: "paragraph",
          content:
            "If validation succeeds, CMR stores the credential and returns a credentialId.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Invalid credentials are rejected",
          content:
            "CMR validates platform credentials before saving them. A broken credential is not stored for later correction.",
        },
      ],
    },

    {
      id: "instantly-workspace",
      title: "Configure an Instantly workspace",
      description:
        "Instantly requires an additional workspace selection before mailboxes can be exported.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "instantly-add",
              title: "1. Add the Instantly credential",
              description:
                "Create the credential using the Instantly email and password.",
            },
            {
              id: "instantly-workspaces",
              title: "2. Retrieve available workspaces",
              description:
                "Use GET /exports/platform-workspaces with the credentialId to retrieve available Instantly organizations.",
            },
            {
              id: "instantly-select",
              title: "3. Select the workspace",
              description:
                "Let the user choose the workspace into which the mailboxes should be exported.",
            },
            {
              id: "instantly-update",
              title: "4. Associate the credential with the workspace",
              description:
                "Use PUT /exports/platform-credential to update the credential with the selected orgId.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not skip workspace association",
          content:
            "An Instantly credential without an associated workspace cannot be used for the export flow.",
        },
      ],
    },

    {
      id: "export-mailboxes",
      title: "Export mailboxes",
      description:
        "Queue one or more mailboxes for export using the stored platform credential.",
      content: [
        {
          type: "paragraph",
          content:
            "Once the platform credential is connected, use the Export Mailboxes to Platform endpoint and pass the credentialId together with the mailboxIds to export.",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /exports/platform-exports",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "credentialId": "<credentialId>",\n  "mailboxIds": ["<mailboxId-1>", "<mailboxId-2>"]\n}',
        },
        {
          type: "paragraph",
          content:
            "The export request is asynchronous. A successful response confirms that the export has been queued rather than that the mailbox has already finished exporting.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Batch your mailboxes",
          content:
            "Pass multiple mailboxIds in a single export request when they should be exported using the same credential.",
        },
      ],
    },

    {
      id: "recommended-flow",
      title: "Recommended export workflow",
      description:
        "Use this sequence when implementing Platform Exports in your Partner platform.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "workflow-one",
              title: "1. Make sure the mailbox is ready",
              description:
                "Confirm that the mailbox has completed provisioning and is ready for the export workflow.",
            },
            {
              id: "workflow-two",
              title: "2. Connect the sending platform",
              description:
                "Add and validate the platform credential.",
            },
            {
              id: "workflow-three",
              title: "3. Store the credentialId",
              description:
                "Associate the returned credentialId with the appropriate user or platform account in your application.",
            },
            {
              id: "workflow-four",
              title: "4. Configure the workspace if required",
              description:
                "For Instantly, retrieve the available workspaces and associate the credential with the selected orgId.",
            },
            {
              id: "workflow-five",
              title: "5. Queue the mailbox export",
              description:
                "Send the credentialId and mailboxIds to the platform export endpoint.",
            },
            {
              id: "workflow-six",
              title: "6. Wait for completion",
              description:
                "Treat the export as asynchronous and allow the external platform to complete the connection.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with credential management or export troubleshooting.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "platform-credentials",
              title: "Updating or Removing a Platform Credential",
              description:
                "Update, rotate, switch, or remove stored credentials.",
              href: "/exports/platform-credentials",
            },
            {
              id: "troubleshooting",
              title: "Troubleshooting a Failed Export",
              description:
                "Troubleshoot common platform and OAuth export failures.",
              href: "/exports/export-troubleshooting",
            },
          ],
        },
      ],
    },
  ],
};