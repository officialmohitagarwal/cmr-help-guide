export const deletingMailboxArticle = {
  id: "deleting-mailbox",
  slug: "/concepts/mailboxes-provisioning/deleting-mailbox",
  category: {
    id: "mailboxes-provisioning",
    label: "Mailboxes and Provisioning",
    slug: "/concepts/mailboxes-provisioning",
  },
  title: "Deleting a Mailbox: What's Reversible and What Isn't",
  description:
    "Understand what happens when a mailbox is permanently deleted, what can and cannot be recovered, and what to verify before removing a mailbox.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Deleting a mailbox is a permanent operation in CMR. Unlike an EXPIRED mailbox, which represents a mailbox whose subscription has expired and whose sending is disabled until renewal, a deleted mailbox is removed permanently and its email address cannot be recovered.",

  sections: [
    {
      id: "deletion-means",
      title: "What deleting a mailbox means",
      description:
        "Mailbox deletion is different from temporarily disabling or expiring a mailbox.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides a dedicated DELETE endpoint for permanently removing a mailbox from the Partner account.",
        },
        {
          type: "code",
          language: "http",
          content:
            "DELETE /mailboxes/remove?userId=",
        },
        {
          type: "paragraph",
          content:
            "The Mailboxes documentation explicitly describes this operation as permanent. Once the mailbox is removed, the email address cannot be recovered.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Deletion is irreversible",
          content:
            "Once a mailbox has been deleted, the email address cannot be recovered. Make sure the mailbox is no longer needed before calling the deletion endpoint.",
        },
      ],
    },

    {
      id: "expired-vs-deleted",
      title: "EXPIRED vs deleted",
      description:
        "An expired mailbox should not be confused with a permanently deleted mailbox.",
      content: [
        {
          type: "heading",
          content: "EXPIRED",
        },
        {
          type: "paragraph",
          content:
            "An EXPIRED mailbox is associated with an expired subscription. CMR documents that sending is disabled until the subscription is renewed.",
        },

        {
          type: "heading",
          content: "Deleted",
        },
        {
          type: "paragraph",
          content:
            "A deleted mailbox has been permanently removed. CMR explicitly states that the email address cannot be recovered after deletion.",
        },

        {
          type: "steps",
          items: [
            {
              id: "expired-state",
              title: "Mailbox is EXPIRED",
              description:
                "The associated subscription has expired and sending is disabled.",
            },
            {
              id: "renewal-option",
              title: "Subscription recovery may still be possible",
              description:
                "The subscription lifecycle can provide a path to renewal, depending on its current state.",
            },
            {
              id: "delete-action",
              title: "Mailbox is deleted",
              description:
                "The mailbox is permanently removed through the mailbox deletion endpoint.",
            },
            {
              id: "no-recovery",
              title: "Email address cannot be recovered",
              description:
                "After deletion, CMR documents the mailbox and its email address as permanently removed.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Do not delete a mailbox just because it is EXPIRED",
          content:
            "EXPIRED and deleted are different states. An expired mailbox has a subscription problem; deleting a mailbox permanently removes the mailbox itself.",
        },
      ],
    },

    {
      id: "before-deleting",
      title: "Before you delete a mailbox",
      description:
        "Deletion should be treated as a final operation.",
      content: [
        {
          type: "paragraph",
          content:
            "Because mailbox deletion cannot be reversed, verify that the mailbox is no longer required before sending the deletion request.",
        },
        {
          type: "steps",
          items: [
            {
              id: "identify-mailbox",
              title: "1. Identify the correct mailbox",
              description:
                "Confirm the mailbox you intend to remove and verify its details before performing the deletion.",
            },
            {
              id: "check-usage",
              title: "2. Confirm that the mailbox is no longer needed",
              description:
                "Make sure the mailbox is not required for current outreach, customer workflows, or downstream integrations.",
            },
            {
              id: "check-references",
              title: "3. Check your own application references",
              description:
                "If your Partner platform stores the mailbox information, identify any records or workflows that reference the mailbox before removing it.",
            },
            {
              id: "confirm-deletion",
              title: "4. Treat the operation as permanent",
              description:
                "Proceed only when you are certain that the mailbox and its email address are no longer required.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Double-check before sending DELETE",
          content:
            "CMR does not provide a documented recovery mechanism for a deleted mailbox. Once removed, the email address cannot be recovered.",
        },
      ],
    },

    {
      id: "find-correct-mailbox",
      title: "Identify the mailbox before deletion",
      description:
        "Use the mailbox retrieval APIs to make sure you are deleting the intended mailbox.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides several mailbox retrieval endpoints. Use the appropriate endpoint to locate the mailbox before performing a destructive operation.",
        },

        {
          type: "steps",
          items: [
            {
              id: "list-all",
              title: "List mailboxes across the Partner account",
              description:
                "Use GET /mailboxes when you need to locate mailboxes across all users under your Partner account.",
            },
            {
              id: "list-user",
              title: "List mailboxes for one user",
              description:
                "Use GET /mailboxes/single?userId= when you want the mailboxes associated with a specific user.",
            },
            {
              id: "get-mailbox",
              title: "Retrieve a specific mailbox",
              description:
                "Use GET /mailboxes/mailbox?mailboxId= when you need to inspect one mailbox by mailbox ID.",
            },
            {
              id: "verify",
              title: "Verify the mailbox",
              description:
                "Confirm that the mailbox you found is the one you actually intend to remove.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Do not confuse the mailbox listing endpoints",
          content:
            "GET /mailboxes returns mailboxes across the Partner account, while GET /mailboxes/single?userId= returns the mailboxes for one user. For a specific mailbox by ID, use GET /mailboxes/mailbox?mailboxId=.",
        },
      ],
    },

    {
      id: "delete-request",
      title: "Delete the mailbox",
      description:
        "Use the mailbox removal endpoint only after verifying the mailbox.",
      content: [
        {
          type: "paragraph",
          content:
            "Once you have confirmed that the mailbox should be permanently removed, call the mailbox removal endpoint.",
        },

        {
          type: "code",
          language: "http",
          content:
            "DELETE /mailboxes/remove?userId=",
        },

        {
          type: "steps",
          items: [
            {
              id: "request-user",
              title: "Provide the user context",
              description:
                "Send the required userId query parameter for the mailbox removal request.",
            },
            {
              id: "identify-target",
              title: "Identify the mailbox to remove",
              description:
                "Use the mailbox information required by the current API reference to target the intended mailbox.",
            },
            {
              id: "submit-delete",
              title: "Submit the DELETE request",
              description:
                "Send the request only after confirming that the mailbox is no longer required.",
            },
            {
              id: "update-local",
              title: "Update your application",
              description:
                "Remove or mark the mailbox as deleted in your own system so that your application does not continue treating it as an active mailbox.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "There is no mailbox recovery step",
          content:
            "CMR documents mailbox deletion as irreversible. Do not design your application around restoring a deleted mailbox or recovering its previous email address.",
        },
      ],
    },

    {
      id: "what-is-not-reversible",
      title: "What cannot be reversed",
      description:
        "Deletion permanently removes the mailbox and its email address.",
      content: [
        {
          type: "paragraph",
          content:
            "The CMR Mailboxes documentation explicitly states that once a mailbox is removed, its email address cannot be recovered.",
        },

        {
          type: "steps",
          items: [
            {
              id: "email-address",
              title: "The email address cannot be recovered",
              description:
                "The deleted mailbox's email address cannot be restored through the mailbox deletion workflow.",
            },
            {
              id: "mailbox",
              title: "The mailbox cannot be restored",
              description:
                "CMR does not document a reverse or restore operation for a deleted mailbox.",
            },
            {
              id: "deletion",
              title: "The DELETE operation cannot be undone",
              description:
                "Treat the removal operation as permanent rather than as a temporary deactivation.",
            },
          ],
        },
      ],
    },

    {
      id: "what-can-be-managed-without-deletion",
      title: "Use mailbox management instead of deletion when appropriate",
      description:
        "Not every mailbox change requires permanently removing the mailbox.",
      content: [
        {
          type: "paragraph",
          content:
            "Before deleting a mailbox, consider whether the actual requirement is to manage the mailbox or its subscription instead.",
        },

        {
          type: "steps",
          items: [
            {
              id: "update-details",
              title: "Update mailbox details",
              description:
                "If the mailbox should remain in use but its supported details need to change, use the mailbox update workflow instead of deleting it.",
            },
            {
              id: "subscription-expiry",
              title: "Handle an expired subscription",
              description:
                "If the mailbox is EXPIRED because its subscription expired, investigate the subscription recovery or renewal flow instead of deleting the mailbox.",
            },
            {
              id: "warmup",
              title: "Manage warmup separately",
              description:
                "If the issue concerns mailbox warmup, use the dedicated warmup management operations rather than deleting the mailbox.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Deletion should be the final option",
          content:
            "Use mailbox update, subscription management, or warmup management when those actions solve the underlying problem. Delete the mailbox only when the mailbox itself is no longer required.",
        },
      ],
    },

    {
      id: "deletion-and-domain",
      title: "Deleting a mailbox does not mean deleting the domain",
      description:
        "Mailbox removal and domain management are separate operations.",
      content: [
        {
          type: "paragraph",
          content:
            "A mailbox is an email account hosted on a CMR domain. Removing a mailbox is a mailbox-level operation and should not be treated as a request to remove the domain itself.",
        },
        {
          type: "paragraph",
          content:
            "If the domain is still required for other mailboxes or other domain-related workflows, deleting one mailbox should not be used as a substitute for domain management.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Mailbox and domain are separate resources",
          content:
            "Before deleting a mailbox, verify that you are removing only the intended mailbox and not making a broader domain-level change.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common deletion mistakes",
      description:
        "Avoid the most common mistakes when permanently removing a mailbox.",
      content: [
        {
          type: "heading",
          content: "Deleting an EXPIRED mailbox unnecessarily",
        },
        {
          type: "paragraph",
          content:
            "EXPIRED means the subscription has expired and sending is disabled. It does not mean the mailbox must be permanently deleted.",
        },

        {
          type: "heading",
          content: "Deleting before checking the mailbox identity",
        },
        {
          type: "paragraph",
          content:
            "Always retrieve and verify the target mailbox before performing a destructive operation.",
        },

        {
          type: "heading",
          content: "Assuming deletion can be undone",
        },
        {
          type: "paragraph",
          content:
            "CMR explicitly documents deletion as permanent. The email address cannot be recovered after removal.",
        },

        {
          type: "heading",
          content: "Continuing to reference the deleted mailbox",
        },
        {
          type: "paragraph",
          content:
            "After deletion, remove or update the corresponding mailbox record in your own application so downstream workflows do not continue treating it as available.",
        },

        {
          type: "heading",
          content: "Deleting a mailbox when the actual issue is warmup",
        },
        {
          type: "paragraph",
          content:
            "Warmup has separate management operations. If the issue concerns warmup rather than the mailbox itself, use the warmup controls instead of permanently deleting the mailbox.",
        },
      ],
    },

    {
      id: "safe-deletion-workflow",
      title: "Safe deletion workflow",
      description:
        "Follow this sequence whenever a mailbox needs to be permanently removed.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "safe-find",
              title: "1. Find the mailbox",
              description:
                "Use the mailbox listing or retrieval APIs to identify the exact mailbox.",
            },
            {
              id: "safe-verify",
              title: "2. Verify the mailbox",
              description:
                "Confirm the mailbox address, user, and other available details match the mailbox you intend to remove.",
            },
            {
              id: "safe-check",
              title: "3. Check whether another action is more appropriate",
              description:
                "Determine whether updating the mailbox, recovering its subscription, or managing warmup would solve the actual problem.",
            },
            {
              id: "safe-confirm",
              title: "4. Confirm permanent removal",
              description:
                "Make sure the mailbox and its email address are no longer required.",
            },
            {
              id: "safe-delete",
              title: "5. Call the removal endpoint",
              description:
                "Use DELETE /mailboxes/remove?userId= to permanently remove the mailbox.",
            },
            {
              id: "safe-local",
              title: "6. Update your application",
              description:
                "Remove or update the corresponding mailbox record in your own database and prevent future workflows from using the deleted mailbox.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Final check",
          content:
            "Once the mailbox is removed, its email address cannot be recovered. Treat the final deletion request as irreversible.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with Mailboxes and Provisioning",
      description:
        "Use these guides to understand the mailbox lifecycle and other management operations.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "mailbox-lifecycle",
              title: "Mailbox Lifecycle Explained",
              description:
                "Understand IN_PROGRESS, CREATING_PASSWORD, ACTIVE, and EXPIRED mailbox states.",
              href: "/concepts/mailboxes-provisioning/mailbox-lifecycle",
            },
            {
              id: "get-mailbox-details",
              title: "Finding and Retrieving Mailbox Details",
              description:
                "Learn how to find the correct mailbox before performing management operations.",
              href: "/concepts/mailboxes-provisioning/get-mailbox-details",
            },
            {
              id: "updating-mailbox",
              title: "Updating Mailbox Details and Resetting a Password",
              description:
                "Learn when to update a mailbox instead of permanently deleting it.",
              href: "/concepts/mailboxes-provisioning/updating-mailbox-details",
            },
            {
              id: "webhooks-vs-polling",
              title: "Why You Should Subscribe to Webhooks Instead of Polling",
              description:
                "Understand the event-driven approach CMR recommends for mailbox provisioning.",
              href: "/concepts/mailboxes-provisioning/webhooks-vs-polling",
            },
          ],
        },
      ],
    },
  ],
};