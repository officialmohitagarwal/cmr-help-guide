export const platformCredentialsArticle = {
  id: "platform-credentials",
  slug: "/exports/platform-credentials",
  category: {
    id: "exports",
    label: "Exports",
    slug: "/exports",
  },
  title: "Updating or Removing a Platform Credential",
  description:
    "Learn how to update stored platform credentials, switch workspaces, rotate credentials, and remove a connected platform credential.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "After a platform credential has been connected, you can retrieve stored credential information, update the credential, switch an Instantly workspace, or remove the credential. CMR identifies each stored credential with a credentialId, so subsequent operations use that identifier instead of resending the original credentials.",

  sections: [
    {
      id: "view-credentials",
      title: "View connected platform credentials",
      description:
        "Retrieve the platform credentials currently stored for the Partner.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the Platform Credentials endpoint to retrieve connected platform accounts and their credential IDs.",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /exports/platform-credentials",
        },
        {
          type: "paragraph",
          content:
            "The response groups connected accounts by supported platform and includes the credentialId for stored credentials.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Sensitive values are not returned",
          content:
            "Stored platform credentials should not be treated as a source for retrieving the original password. Use the credentialId for subsequent export operations.",
        },
      ],
    },

    {
      id: "update-credential",
      title: "Update a platform credential",
      description:
        "Use PUT to rotate credentials or update platform-specific configuration.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the Update Platform Credential endpoint when you need to change a stored credential or update platform-specific configuration.",
        },
        {
          type: "code",
          language: "http",
          content:
            "PUT /exports/platform-credential",
        },
        {
          type: "paragraph",
          content:
            "The update flow uses the existing credentialId. This lets you update a credential without deleting it and creating a new credential record.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Prefer PUT over delete and re-add",
          content:
            "Updating the existing credential preserves its credentialId. Deleting and adding a new credential creates a new identifier and can break references stored by your application.",
        },
      ],
    },

    {
      id: "instantly-workspace-update",
      title: "Switch an Instantly workspace",
      description:
        "Change the Instantly organization associated with an existing credential.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "get-workspaces",
              title: "1. Retrieve available workspaces",
              description:
                "Use GET /exports/platform-workspaces with the existing credentialId.",
            },
            {
              id: "choose-workspace",
              title: "2. Select the workspace",
              description:
                "Choose the Instantly workspace into which the mailboxes should be exported.",
            },
            {
              id: "update-org",
              title: "3. Update the credential",
              description:
                "Use PUT /exports/platform-credential and provide the selected orgId.",
            },
            {
              id: "reuse-credential",
              title: "4. Continue using the same credentialId",
              description:
                "The credential remains the same stored credential while its workspace association is updated.",
            },
          ],
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "orgId": "<selected-org-id>"\n}',
        },
      ],
    },

    {
      id: "remove-credential",
      title: "Remove a platform credential",
      description:
        "Delete a stored platform credential when it is no longer required.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the Remove Platform Credential endpoint to remove a stored platform credential.",
        },
        {
          type: "code",
          language: "http",
          content:
            "DELETE /exports/platform-credential",
        },
        {
          type: "paragraph",
          content:
            "After removing the credential, the credentialId associated with that stored credential should no longer be used for new exports.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Check dependencies before removal",
          content:
            "Before removing a credential, confirm that your application and users no longer depend on that stored platform connection.",
        },
      ],
    },

    {
      id: "credential-management-flow",
      title: "Recommended credential management flow",
      description:
        "Keep your Partner platform's credential references synchronized with CMR.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "save-id",
              title: "Store the credentialId",
              description:
                "Save the credentialId returned when the platform credential is created.",
            },
            {
              id: "reuse-id",
              title: "Reuse the credentialId",
              description:
                "Use the stored credentialId for future export operations rather than resending raw credentials.",
            },
            {
              id: "update-in-place",
              title: "Update credentials in place",
              description:
                "Use PUT when credentials or platform-specific configuration need to change.",
            },
            {
              id: "remove-when-needed",
              title: "Remove unused credentials",
              description:
                "Use DELETE when a stored platform credential is no longer required.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with mailbox exports and troubleshooting.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "platform-export",
              title: "Connecting a Platform Credential & Exporting Mailboxes",
              description:
                "Connect a platform and export mailboxes.",
              href: "/exports/platform-credential-export",
            },
            {
              id: "troubleshooting",
              title: "Troubleshooting a Failed Export",
              description:
                "Troubleshoot failed Platform and OAuth Exports.",
              href: "/exports/export-troubleshooting",
            },
          ],
        },
      ],
    },
  ],
};