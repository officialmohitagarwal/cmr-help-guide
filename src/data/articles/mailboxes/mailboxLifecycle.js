export const mailboxLifecycleArticle = {
  id: "mailbox-lifecycle",
  slug: "/concepts/mailboxes-provisioning/mailbox-lifecycle",
  category: {
    id: "mailboxes-provisioning",
    label: "Mailboxes and Provisioning",
    slug: "/concepts/mailboxes-provisioning",
  },
  title: "Mailbox Lifecycle Explained",
  description:
    "Understand how CMR mailboxes move from provisioning to active use, what each mailbox status means, and how subscription expiry affects mailbox availability.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "A mailbox is an email account hosted on a CMR-managed domain. Mailboxes are provisioned automatically as part of an order and move through several states before they are ready to use. Understanding these states helps you know when a mailbox is still being provisioned, when it is ready, and when sending has been disabled.",

  sections: [
    {
      id: "what-is-mailbox",
      title: "What a mailbox represents",
      description:
        "A mailbox is the email account that your customer uses for sending and receiving email.",
      content: [
        {
          type: "paragraph",
          content:
            "A CMR mailbox is an email account such as alice@mycoldoutreach.com hosted on a CMR-managed domain. Mailboxes are the core resource used for cold email outreach.",
        },
        {
          type: "paragraph",
          content:
            "A mailbox is provisioned automatically when an order completes its mailbox provisioning flow. It is not immediately available the moment an order API request is accepted.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Order accepted does not mean mailbox ready",
          content:
            "An HTTP 200 response from an order request confirms that the order was accepted for processing. It does not mean that the mailbox has finished provisioning. Wait for the mailbox to become ACTIVE or receive the mailbox.created webhook before treating it as ready.",
        },
      ],
    },

    {
      id: "mailbox-states",
      title: "The mailbox states",
      description:
        "CMR uses four documented mailbox statuses to represent the mailbox lifecycle.",
      content: [
        {
          type: "heading",
          content: "IN_PROGRESS",
        },
        {
          type: "paragraph",
          content:
            "IN_PROGRESS means the mailbox account is being created with the email provider. Provisioning has started, but the mailbox is not ready for normal use yet.",
        },

        {
          type: "heading",
          content: "CREATING_PASSWORD",
        },
        {
          type: "paragraph",
          content:
            "CREATING_PASSWORD means the mailbox account has been created with the email provider and the initial password is being configured.",
        },

        {
          type: "heading",
          content: "ACTIVE",
        },
        {
          type: "paragraph",
          content:
            "ACTIVE means the mailbox is fully provisioned and ready to send email.",
        },

        {
          type: "heading",
          content: "EXPIRED",
        },
        {
          type: "paragraph",
          content:
            "EXPIRED means the mailbox's subscription has expired. Sending is disabled until the subscription is renewed.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not confuse mailbox status with subscription status",
          content:
            "Mailbox status describes the state of the email account itself. Subscription status describes the billing and renewal lifecycle associated with the mailbox. They are related, but they are not the same status.",
        },
      ],
    },

    {
      id: "provisioning-flow",
      title: "The mailbox provisioning lifecycle",
      description:
        "A newly ordered mailbox passes through provisioning stages before it becomes available.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "order-accepted",
              title: "1. Order is accepted",
              description:
                "CMR accepts the order and begins mailbox provisioning. The mailbox enters IN_PROGRESS while the account is being created with the email provider.",
            },
            {
              id: "creating-password",
              title: "2. Password is configured",
              description:
                "The mailbox account has been created and CMR configures the initial password. The mailbox moves to CREATING_PASSWORD.",
            },
            {
              id: "mailbox-active",
              title: "3. Mailbox becomes ACTIVE",
              description:
                "The mailbox is fully provisioned and ready for use. CMR sends the mailbox.created webhook at this point.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "ACTIVE is the ready state",
          content:
            "Only treat the mailbox as fully provisioned when its status is ACTIVE or when the mailbox.created event confirms that the mailbox is ready.",
        },
      ],
    },

    {
      id: "mailbox-created-webhook",
      title: "When mailbox.created is sent",
      description:
        "CMR uses mailbox.created to notify your application that an individual mailbox is ready.",
      content: [
        {
          type: "paragraph",
          content:
            "The mailbox.created webhook is sent when the mailbox is fully provisioned and ready to use.",
        },
        {
          type: "paragraph",
          content:
            "The event is sent once per mailbox. If an order creates three mailboxes successfully, CMR sends three separate mailbox.created events.",
        },
        {
          type: "steps",
          items: [
            {
              id: "provisioning-starts",
              title: "Provisioning begins",
              description:
                "The mailbox enters the provisioning lifecycle after the order is accepted.",
            },
            {
              id: "mailbox-ready",
              title: "Mailbox reaches ACTIVE",
              description:
                "The mailbox is fully provisioned and ready to send email.",
            },
            {
              id: "webhook-sent",
              title: "mailbox.created is delivered",
              description:
                "CMR sends the mailbox.created webhook for that individual mailbox.",
            },
            {
              id: "platform-updates",
              title: "Your platform updates its state",
              description:
                "Use the event to mark the mailbox as ready in your own application and make it available for the next workflow.",
            },
          ],
        },
      ],
    },

    {
      id: "when-mailbox-ready",
      title: "What you can do when the mailbox is ACTIVE",
      description:
        "ACTIVE is the point at which CMR considers the mailbox ready for use.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR recommends waiting until the mailbox is ACTIVE before attempting to use it for normal sending workflows.",
        },
        {
          type: "steps",
          items: [
            {
              id: "send-email",
              title: "Send email",
              description:
                "The mailbox is fully provisioned and ready to send email.",
            },
            {
              id: "export-credentials",
              title: "Export credentials",
              description:
                "You can proceed with credential-related workflows once the mailbox is ready.",
            },
            {
              id: "connect-outreach",
              title: "Connect to an outreach platform",
              description:
                "Only connect the mailbox to your outreach platform after provisioning has completed.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not use a mailbox while it is provisioning",
          content:
            "CMR specifically recommends waiting for ACTIVE before attempting to send email, export credentials, or connect the mailbox to an outreach platform.",
        },
      ],
    },

    {
      id: "expired-mailbox",
      title: "What happens when a mailbox expires",
      description:
        "Mailbox expiry is associated with the expiration of its subscription.",
      content: [
        {
          type: "paragraph",
          content:
            "A mailbox enters EXPIRED when its associated subscription has expired. In this state, sending is disabled until the subscription is renewed.",
        },
        {
          type: "steps",
          items: [
            {
              id: "subscription-expires",
              title: "Subscription expires",
              description:
                "The subscription reaches the end of its recovery lifecycle and becomes EXPIRED.",
            },
            {
              id: "mailbox-expires",
              title: "Mailbox becomes EXPIRED",
              description:
                "The associated mailbox is no longer available for sending.",
            },
            {
              id: "renew-subscription",
              title: "Renew the subscription",
              description:
                "Resolve the subscription issue and successfully renew the subscription.",
            },
            {
              id: "restore-use",
              title: "Mailbox becomes available again",
              description:
                "Once the subscription has been successfully renewed, the mailbox can return to an available state according to the subscription lifecycle.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Mailbox expiry is not the same as deletion",
          content:
            "EXPIRED means sending has been disabled because the subscription has expired. It is different from permanently deleting the mailbox through the mailbox deletion endpoint.",
        },
      ],
    },

    {
      id: "mailbox-vs-subscription",
      title: "Mailbox lifecycle vs subscription lifecycle",
      description:
        "The two lifecycles are connected but should be handled separately.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents mailbox provisioning and subscription renewal as separate lifecycles. Mailbox provisioning determines when an individual email account becomes ready, while the subscription lifecycle determines whether the mailbox remains covered by an active subscription.",
        },
        {
          type: "steps",
          items: [
            {
              id: "mailbox-provisioning",
              title: "Mailbox provisioning",
              description:
                "The mailbox moves through IN_PROGRESS, CREATING_PASSWORD, and ACTIVE before becoming ready.",
            },
            {
              id: "subscription-renewal",
              title: "Subscription renewal",
              description:
                "The associated subscription separately moves through its billing and renewal lifecycle.",
            },
            {
              id: "subscription-expiry",
              title: "Subscription expiry affects mailbox availability",
              description:
                "If the subscription expires, the mailbox becomes EXPIRED and sending is disabled.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Keep the two statuses separate in your application",
          content:
            "Do not use a mailbox status field as a substitute for subscription status. Store and handle mailbox lifecycle state and subscription lifecycle state independently.",
        },
      ],
    },

    {
      id: "multiple-mailboxes",
      title: "When an order contains multiple mailboxes",
      description:
        "Each mailbox has its own provisioning completion event.",
      content: [
        {
          type: "paragraph",
          content:
            "An order can contain multiple mailboxes. CMR does not treat the entire mailbox set as one mailbox resource.",
        },
        {
          type: "steps",
          items: [
            {
              id: "order-multiple",
              title: "Multiple mailboxes are ordered",
              description:
                "The order contains the requested mailbox accounts for the domain.",
            },
            {
              id: "provision-individual",
              title: "Mailboxes are provisioned",
              description:
                "Each mailbox moves through its own provisioning lifecycle.",
            },
            {
              id: "individual-webhooks",
              title: "Individual mailbox.created events are sent",
              description:
                "CMR sends a separate mailbox.created event for every mailbox that becomes ready.",
            },
            {
              id: "track-individual",
              title: "Track each mailbox independently",
              description:
                "Your application should use the mailbox information in each event to update the corresponding mailbox record.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Do not assume all mailboxes become ready together",
          content:
            "If you order multiple mailboxes, handle mailbox.created per mailbox rather than assuming that one event means every mailbox in the order is ready.",
        },
      ],
    },

    {
      id: "mailbox-updates",
      title: "Mailbox updates after provisioning",
      description:
        "The mailbox lifecycle continues after the mailbox becomes ACTIVE.",
      content: [
        {
          type: "paragraph",
          content:
            "Once a mailbox is ACTIVE, its details can be updated through the mailbox update API. CMR sends the mailbox.updated webhook when a user modifies supported mailbox details.",
        },
        {
          type: "paragraph",
          content:
            "This means mailbox.created and mailbox.updated represent different lifecycle events: mailbox.created signals initial provisioning completion, while mailbox.updated signals a later change to mailbox details.",
        },
        {
          type: "steps",
          items: [
            {
              id: "created-event",
              title: "mailbox.created",
              description:
                "Sent when the mailbox is fully provisioned and ready.",
            },
            {
              id: "update-details",
              title: "Mailbox details are changed",
              description:
                "Supported mailbox information is updated after provisioning.",
            },
            {
              id: "updated-event",
              title: "mailbox.updated",
              description:
                "CMR sends the mailbox.updated webhook for the mailbox update.",
            },
          ],
        },
      ],
    },

    {
      id: "warmup-status",
      title: "Mailbox status vs warmup status",
      description:
        "Warmup has its own lifecycle and should not be confused with mailbox status.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents a separate set of warmup statuses for mailboxes with warmup enabled. These statuses describe the warmup process rather than the mailbox's provisioning state.",
        },
        {
          type: "steps",
          items: [
            {
              id: "warmup-pending",
              title: "PENDING",
              description:
                "Warmup has been queued but has not started yet.",
            },
            {
              id: "warmup-active",
              title: "ACTIVE",
              description:
                "Warmup is currently running.",
            },
            {
              id: "warmup-paused",
              title: "PAUSED",
              description:
                "Warmup has been manually paused.",
            },
            {
              id: "warmup-stopped",
              title: "STOPPED",
              description:
                "Warmup has finished or has been stopped.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Two different ACTIVE states",
          content:
            "A mailbox can have mailbox status ACTIVE while its warmup status is PENDING, ACTIVE, PAUSED, or STOPPED. Mailbox status and warmup status describe different things.",
        },
      ],
    },

    {
      id: "recommended-integration",
      title: "Recommended integration flow",
      description:
        "Use the mailbox lifecycle events to keep your Partner platform synchronized.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "accept-order",
              title: "1. Accept the order",
              description:
                "Submit the mailbox order and store the returned order information.",
            },
            {
              id: "wait-provisioning",
              title: "2. Wait for provisioning",
              description:
                "Do not treat the mailbox as ready while it is still IN_PROGRESS or CREATING_PASSWORD.",
            },
            {
              id: "listen-created",
              title: "3. Listen for mailbox.created",
              description:
                "Subscribe to the mailbox.created webhook to receive the ready notification for each mailbox.",
            },
            {
              id: "mark-active",
              title: "4. Mark the mailbox as ready",
              description:
                "Update your local mailbox record when mailbox.created confirms that the mailbox has been provisioned.",
            },
            {
              id: "handle-updates",
              title: "5. Listen for mailbox.updated",
              description:
                "Synchronize supported mailbox detail changes after the mailbox has been provisioned.",
            },
            {
              id: "handle-expiry",
              title: "6. Handle subscription expiry",
              description:
                "If the associated subscription expires, reflect that the mailbox is no longer available for sending.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common lifecycle mistakes",
      description:
        "Avoid these common mistakes when working with CMR mailboxes.",
      content: [
        {
          type: "heading",
          content: "Treating an accepted order as a ready mailbox",
        },
        {
          type: "paragraph",
          content:
            "An accepted order only means that CMR has accepted the request for processing. Wait for mailbox.created or ACTIVE before using the mailbox.",
        },

        {
          type: "heading",
          content: "Using a mailbox while it is still provisioning",
        },
        {
          type: "paragraph",
          content:
            "IN_PROGRESS and CREATING_PASSWORD are provisioning states. The mailbox is not yet fully ready for normal use.",
        },

        {
          type: "heading",
          content: "Using polling as the primary provisioning mechanism",
        },
        {
          type: "paragraph",
          content:
            "CMR recommends subscribing to mailbox.created instead of continuously polling the Mailboxes API for provisioning updates.",
        },

        {
          type: "heading",
          content: "Treating EXPIRED as deleted",
        },
        {
          type: "paragraph",
          content:
            "EXPIRED means the subscription has expired and sending is disabled. Permanent deletion is a separate mailbox action.",
        },

        {
          type: "heading",
          content: "Treating warmup status as mailbox status",
        },
        {
          type: "paragraph",
          content:
            "Warmup has its own statuses. Do not use PENDING, PAUSED, or STOPPED warmup status as a replacement for the mailbox lifecycle status.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with Mailboxes and Provisioning",
      description:
        "Use these guides for the next steps in managing CMR mailboxes.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "provisioning-mailbox",
              title: "Provisioning a Mailbox",
              description:
                "Learn how to place a mailbox order and understand when provisioning is complete.",
              href: "/concepts/mailboxes-provisioning/provisioning-mailbox",
            },
            {
              id: "adding-existing-domain",
              title: "Adding Mailboxes to an Existing Domain",
              description:
                "Learn how to add additional mailboxes to a domain that already exists in CMR.",
              href: "/concepts/mailboxes-provisioning/adding-mailboxes-to-existing-domain",
            },
            {
              id: "get-mailbox-details",
              title: "Finding and Retrieving Mailbox Details",
              description:
                "Learn how to list mailboxes, retrieve a specific mailbox, and access mailbox details.",
              href: "/concepts/mailboxes-provisioning/get-mailbox-details",
            },
            {
              id: "webhooks-vs-polling",
              title: "Why You Should Subscribe to Webhooks Instead of Polling",
              description:
                "Understand how mailbox.created can keep your platform synchronized without continuous polling.",
              href: "/concepts/mailboxes-provisioning/webhooks-vs-polling",
            },
            {
              id: "deleting-mailbox",
              title: "Deleting a Mailbox: What's Reversible and What Isn't",
              description:
                "Understand the consequences of permanently removing a mailbox.",
              href: "/concepts/mailboxes-provisioning/deleting-mailbox",
            },
          ],
        },
      ],
    },
  ],
};