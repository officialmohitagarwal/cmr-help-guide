export const deletingUserArticle = {
  id: "deleting-user",
  slug: "/users/deleting-user",
  category: {
    id: "users",
    label: "Users & Partner Administration",
    slug: "/users",
  },
  title: "Deleting a User: Requirements, Cleanup & Permanence",
  description:
    "Understand when a CMR User can be deleted, which resources must be cleared first, and what happens when a User is permanently removed.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Deleting a User in CMR is a permanent operation and is gated by the resources still associated with that customer. Before deleting the User, you must clear the customer's domains and mailboxes. This article explains the required cleanup sequence and how to handle deletion failures.",

  sections: [
    {
      id: "before-you-delete",
      title: "Understand the deletion requirements",
      description:
        "CMR does not allow a User to be deleted while domains or mailboxes are still associated with that User.",
      content: [
        {
          type: "paragraph",
          content:
            "User deletion is gated rather than immediate. CMR checks whether the User still has domains or mailboxes associated with the account before allowing the deletion to proceed.",
        },
        {
          type: "steps",
          items: [
            {
              id: "no-domains",
              title: "No domains",
              description:
                "The User must have no domains associated with the account.",
            },
            {
              id: "no-mailboxes",
              title: "No mailboxes",
              description:
                "The User must have no mailboxes associated with the account.",
            },
            {
              id: "subscriptions",
              title: "Clear active subscriptions",
              description:
                "Cancel active subscriptions as part of the documented cleanup sequence before deleting the User.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Deletion is permanent",
          content:
            "CMR documents User deletion as permanent. Once the User is deleted, the operation cannot be undone through the User API.",
        },
      ],
    },

    {
      id: "deletion-sequence",
      title: "Follow the required cleanup sequence",
      description:
        "Clear the resources that prevent deletion before sending the User deletion request.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "cancel-subscriptions",
              title: "1. Cancel active subscriptions",
              description:
                "Cancel the customer's active subscriptions before proceeding with User deletion.",
            },
            {
              id: "clear-domains",
              title: "2. Delete or transfer every domain",
              description:
                "Remove the customer's domains from the User or transfer them where the applicable domain workflow supports it.",
            },
            {
              id: "clear-mailboxes",
              title: "3. Remove remaining mailboxes",
              description:
                "Make sure there are no mailboxes remaining under the User.",
            },
            {
              id: "verify-resources",
              title: "4. Verify the User is clear",
              description:
                "Confirm that the User has zero domains and zero mailboxes before attempting deletion.",
            },
            {
              id: "delete-user",
              title: "5. Delete the User",
              description:
                "Send the User deletion request after all required resources have been cleared.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Clear resources before retrying",
          content:
            "If CMR rejects the deletion because resources remain, do not repeatedly submit the same deletion request. First clear the domains and mailboxes reported by the API, then retry.",
        },
      ],
    },

    {
      id: "delete-endpoint",
      title: "Delete the User",
      description:
        "Once the User has no remaining domains or mailboxes, send the deletion request.",
      content: [
        {
          type: "paragraph",
          content:
            "The documented User deletion endpoint is DELETE /users?userId=. Use the exact CMR userId associated with the customer you intend to remove.",
        },
        {
          type: "code",
          language: "http",
          content: `DELETE /users?userId=usr_abc123
cmr-x-api-key: your_partner_api_key`,
        },
        {
          type: "steps",
          items: [
            {
              id: "identify",
              title: "1. Identify the correct userId",
              description:
                "Use the CMR-generated userId for the customer. Do not substitute an internal customer UUID.",
            },
            {
              id: "verify",
              title: "2. Verify associated resources",
              description:
                "Confirm that the User has no remaining domains or mailboxes.",
            },
            {
              id: "send",
              title: "3. Send the DELETE request",
              description:
                "Call DELETE /users?userId= with the customer's CMR userId.",
            },
            {
              id: "confirm",
              title: "4. Confirm the deletion",
              description:
                "Treat a successful deletion response as final because the User and associated data cannot be restored through the documented User API.",
            },
          ],
        },
      ],
    },

    {
      id: "deletion-failure",
      title: "When User deletion fails",
      description:
        "Use the resource counts returned by CMR to determine what is blocking deletion.",
      content: [
        {
          type: "paragraph",
          content:
            "If the deletion request fails, the CMR documentation recommends checking the returned mailboxCount and domainCount values. These counts indicate which associated resources still need to be cleared.",
        },
        {
          type: "steps",
          items: [
            {
              id: "check-domain-count",
              title: "1. Check domainCount",
              description:
                "If domainCount is greater than zero, identify and delete or transfer the remaining domains.",
            },
            {
              id: "check-mailbox-count",
              title: "2. Check mailboxCount",
              description:
                "If mailboxCount is greater than zero, identify and remove the remaining mailboxes.",
            },
            {
              id: "clear-subscriptions",
              title: "3. Check subscription state",
              description:
                "Make sure active subscriptions have been cancelled as part of the cleanup process.",
            },
            {
              id: "retry",
              title: "4. Retry after cleanup",
              description:
                "Once the required resources have been cleared, retry the User deletion request.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not interpret a failed deletion as a partial deletion",
          content:
            "A failed deletion means the documented deletion prerequisites have not been satisfied. Clear the resources identified by the API before trying again.",
        },
      ],
    },

    {
      id: "what-is-removed",
      title: "What happens after deletion",
      description:
        "User deletion removes the customer's associated data from CMR.",
      content: [
        {
          type: "paragraph",
          content:
            "The CMR documentation states that deleting a User removes all associated data, including billing records, wallet balance, workspaces, orders, and related resources.",
        },
        {
          type: "steps",
          items: [
            {
              id: "billing",
              title: "Billing records",
              description:
                "Associated billing records are removed as part of the User deletion.",
            },
            {
              id: "wallet",
              title: "Wallet balance",
              description:
                "The documentation states that the User's associated wallet balance is removed.",
            },
            {
              id: "workspaces",
              title: "Workspaces",
              description:
                "Associated workspaces are removed.",
            },
            {
              id: "orders",
              title: "Orders",
              description:
                "Associated orders are removed.",
            },
            {
              id: "related",
              title: "Related resources",
              description:
                "Other resources associated with the User are removed as part of the permanent deletion.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Treat deletion as irreversible",
          content:
            "Do not use User deletion as a temporary disable or archival mechanism. The documented operation permanently removes the User and associated data.",
        },
      ],
    },

    {
      id: "safe-deletion-checklist",
      title: "Safe deletion checklist",
      description:
        "Run through these checks before permanently removing a customer.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "check-customer",
              title: "1. Confirm the customer",
              description:
                "Verify that the userId belongs to the customer you intend to delete.",
            },
            {
              id: "check-subscriptions",
              title: "2. Cancel active subscriptions",
              description:
                "Complete the subscription cleanup required before User deletion.",
            },
            {
              id: "check-domains",
              title: "3. Clear all domains",
              description:
                "Delete or transfer every domain associated with the User.",
            },
            {
              id: "check-mailboxes",
              title: "4. Clear all mailboxes",
              description:
                "Make sure the User has no remaining mailboxes.",
            },
            {
              id: "check-counts",
              title: "5. Verify domainCount and mailboxCount",
              description:
                "If the API previously rejected deletion, use the returned counts to confirm that the blocking resources have been removed.",
            },
            {
              id: "final-delete",
              title: "6. Perform the deletion",
              description:
                "Send DELETE /users?userId= only after the cleanup is complete.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid the most common problems when deleting a CMR User.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "delete-too-early",
              title: "Trying to delete before clearing resources",
              description:
                "A User with domains or mailboxes cannot be deleted.",
            },
            {
              id: "skip-subscriptions",
              title: "Skipping subscription cleanup",
              description:
                "The documented deletion sequence starts by cancelling active subscriptions before clearing domains and completing User deletion.",
            },
            {
              id: "wrong-user-id",
              title: "Using the wrong userId",
              description:
                "Always verify the CMR-generated userId before performing a destructive operation.",
            },
            {
              id: "retry-without-cleanup",
              title: "Retrying without clearing the reported resources",
              description:
                "If CMR returns mailboxCount or domainCount values, clear those resources before retrying.",
            },
            {
              id: "treat-as-archive",
              title: "Using deletion as an archive operation",
              description:
                "Deletion is permanent and removes associated data. It should not be treated as a temporary account-disable mechanism.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with User management and customer resource administration.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "creating-managing-users",
              title: "Creating and Managing Users (Your Customer)",
              description:
                "Learn how to create, retrieve, list, and update customers and manage their CMR userId.",
              href: "/users/creating-managing-users",
            },
            {
              id: "user-vs-partner",
              title: "User-Level vs Partner-Level Operations",
              description:
                "Understand how Partner and User scopes affect authentication and customer resource operations.",
              href: "/users/user-vs-partner-operations",
            },
            {
              id: "geo-reference",
              title: "Geo Reference: Countries & States",
              description:
                "Use CMR's country and state reference endpoints when building customer address flows.",
              href: "/users/geo-reference",
            },
          ],
        },
      ],
    },
  ],
};