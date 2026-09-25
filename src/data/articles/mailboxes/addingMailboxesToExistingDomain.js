export const addingMailboxesToExistingDomainArticle = {
  id: "adding-mailboxes-to-existing-domain",
  slug: "/concepts/mailboxes-provisioning/adding-mailboxes-to-existing-domain",
  category: {
    id: "mailboxes-provisioning",
    label: "Mailboxes and Provisioning",
    slug: "/concepts/mailboxes-provisioning",
  },
  title: "Adding Mailboxes to an Existing Domain",
  description:
    "Learn how to add additional mailboxes to a domain that already exists in CMR, when to use subscriptionId or domainId, and how to track mailbox provisioning.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "You can add more mailboxes to a domain that already exists in CMR without registering the domain again. The mailbox-only order flow uses the domain's existing subscription when one is active, or creates a new subscription when the previous subscription has been cancelled.",

  sections: [
    {
      id: "overview",
      title: "Adding mailboxes without registering the domain again",
      description:
        "Use the mailbox-only order flow when the domain is already available in CMR.",
      content: [
        {
          type: "paragraph",
          content:
            "If a domain already exists in CMR, you do not need to create another domain order just to add more mailboxes. CMR provides a dedicated mailbox order endpoint for this workflow.",
        },
        {
          type: "paragraph",
          content:
            "The endpoint is POST /orders/create-mailbox-order/json. The exact request depends on whether the existing domain has an active subscription.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Mailbox-only order",
          content:
            "This workflow adds mailboxes to an existing domain. The domain itself is not registered again.",
        },
      ],
    },

    {
      id: "choose-scenario",
      title: "Choose the correct subscription scenario",
      description:
        "The existing subscription status determines which identifier you should provide.",
      content: [
        {
          type: "heading",
          content: "Scenario 1: The domain has an active subscription",
        },
        {
          type: "paragraph",
          content:
            "When the domain already has an active subscription, use subscriptionId. CMR adds the new mailboxes to the existing subscription.",
        },

        {
          type: "heading",
          content: "Scenario 2: The previous subscription was cancelled",
        },
        {
          type: "paragraph",
          content:
            "When the previous subscription for the domain has been cancelled, use domainId. CMR creates a new subscription for the existing domain and provisions the requested mailboxes under that new subscription.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not provide both identifiers",
          content:
            "The Create Mailbox Order API documents subscriptionId and domainId as mutually exclusive. Provide the identifier that matches the subscription state of the existing domain.",
        },
      ],
    },

    {
      id: "active-subscription",
      title: "Adding mailboxes to an active subscription",
      description:
        "Use subscriptionId when you want to add mailboxes to the domain's existing active plan.",
      content: [
        {
          type: "paragraph",
          content:
            "If the domain has an active subscription, provide the existing subscriptionId in the mailbox order request.",
        },
        {
          type: "paragraph",
          content:
            "CMR then adds the requested mailboxes to that existing subscription instead of creating another subscription for the domain.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "subscriptionId": "sub_XXXXXXXX",\n  "billingCycle": "MONTHLY",\n  "mailboxes": {\n    "example.com": [\n      {\n        "username": "bob",\n        "firstName": "Bob",\n        "lastName": "Smith"\n      },\n      {\n        "username": "bob.s",\n        "firstName": "Bob",\n        "lastName": "Smith"\n      }\n    ]\n  },\n  "confirm": true\n}',
        },
        {
          type: "steps",
          items: [
            {
              id: "active-find-subscription",
              title: "Find the active subscription",
              description:
                "Identify the subscriptionId associated with the existing domain.",
            },
            {
              id: "active-build-order",
              title: "Build the mailbox order",
              description:
                "Add the new mailbox usernames and customer details under the existing domain name.",
            },
            {
              id: "active-submit-order",
              title: "Submit the order",
              description:
                "Call POST /orders/create-mailbox-order/json with the subscriptionId.",
            },
            {
              id: "active-provision",
              title: "Wait for provisioning",
              description:
                "CMR provisions each requested mailbox under the existing subscription.",
            },
          ],
        },
      ],
    },

    {
      id: "cancelled-subscription",
      title: "Adding mailboxes when the previous subscription was cancelled",
      description:
        "Use domainId when the domain remains available but its previous subscription has been cancelled.",
      content: [
        {
          type: "paragraph",
          content:
            "A cancelled subscription does not mean that the domain itself has to be registered again. If the domain still exists in CMR, you can create a new mailbox order using the domainId.",
        },
        {
          type: "paragraph",
          content:
            "In this scenario, CMR automatically creates a new subscription for the existing domain.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "domainId": "dom_XXXXXXXX",\n  "billingCycle": "MONTHLY",\n  "mailboxes": {\n    "example.com": [\n      {\n        "username": "bob",\n        "firstName": "Bob",\n        "lastName": "Smith"\n      }\n    ]\n  },\n  "autoRenew": true,\n  "confirm": true\n}',
        },
        {
          type: "steps",
          items: [
            {
              id: "cancelled-find-domain",
              title: "Find the existing domain",
              description:
                "Identify the domainId for the domain whose previous subscription was cancelled.",
            },
            {
              id: "cancelled-build-order",
              title: "Build the mailbox order",
              description:
                "Specify the existing domain and the mailboxes you want to provision.",
            },
            {
              id: "cancelled-set-renewal",
              title: "Set auto-renewal",
              description:
                "When using domainId to create the new subscription, provide the autoRenew setting for that subscription.",
            },
            {
              id: "cancelled-submit",
              title: "Submit the order",
              description:
                "Call POST /orders/create-mailbox-order/json with the domainId.",
            },
            {
              id: "cancelled-provision",
              title: "Wait for provisioning",
              description:
                "CMR creates the new subscription and provisions the requested mailboxes.",
            },
          ],
        },
      ],
    },

    {
      id: "request-structure",
      title: "Build the mailbox order",
      description:
        "The mailbox list is grouped under the actual domain name.",
      content: [
        {
          type: "paragraph",
          content:
            "The mailboxes field is an object keyed by the domain's actual domain name. Each domain contains an array of mailbox objects.",
        },
        {
          type: "paragraph",
          content:
            "Each mailbox object specifies the username, first name, last name, and can optionally enable warmup using onWarmup.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "mailboxes": {\n    "example.com": [\n      {\n        "username": "alice",\n        "firstName": "Alice",\n        "lastName": "Johnson",\n        "onWarmup": true\n      },\n      {\n        "username": "bob",\n        "firstName": "Bob",\n        "lastName": "Smith",\n        "onWarmup": false\n      }\n    ]\n  }\n}',
        },
        {
          type: "callout",
          variant: "info",
          title: "List each mailbox explicitly",
          content:
            "CMR's Create Mailbox Order documentation does not use a mailbox count field for this workflow. List the mailboxes you want to create under the domain name.",
        },
      ],
    },

    {
      id: "confirm-processing",
      title: "Choose when the order should be processed",
      description:
        "The confirm parameter controls whether CMR starts processing immediately.",
      content: [
        {
          type: "heading",
          content: "confirm: true",
        },
        {
          type: "paragraph",
          content:
            "When confirm is true, CMR creates the order and automatically queues it for processing. Processing begins immediately after creation.",
        },

        {
          type: "heading",
          content: "confirm: false",
        },
        {
          type: "paragraph",
          content:
            "When confirm is false, CMR creates the order but does not process it immediately. The order can be processed later through the Process Order endpoint.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Wallet balance is required for immediate processing",
          content:
            "When confirm is true, your Partner wallet must have sufficient balance to cover the order cost. Insufficient balance causes order creation to fail.",
        },
      ],
    },

    {
      id: "provisioning",
      title: "What happens after the order is submitted",
      description:
        "Mailbox creation continues asynchronously after the order is queued.",
      content: [
        {
          type: "paragraph",
          content:
            "Submitting the mailbox order does not mean that the new mailboxes are immediately ready. CMR provisions each mailbox asynchronously.",
        },
        {
          type: "steps",
          items: [
            {
              id: "order-created",
              title: "Order is created",
              description:
                "CMR creates the mailbox order and, when confirmed, queues it for processing.",
            },
            {
              id: "mailbox-provisioning",
              title: "Mailbox provisioning begins",
              description:
                "Each requested mailbox is provisioned with the selected service provider.",
            },
            {
              id: "mailbox-created",
              title: "mailbox.created is sent",
              description:
                "CMR sends a separate mailbox.created webhook when each individual mailbox is fully provisioned.",
            },
            {
              id: "mailbox-ready",
              title: "Mailbox is ready",
              description:
                "The mailbox is available for normal use once it reaches ACTIVE.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Each mailbox has its own completion event",
          content:
            "If you add multiple mailboxes, CMR sends mailbox.created separately for each mailbox when that mailbox is ready.",
        },
      ],
    },

    {
      id: "existing-domain-checks",
      title: "Before adding mailboxes",
      description:
        "Verify the domain and subscription context before creating the order.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "check-domain",
              title: "Confirm the domain exists",
              description:
                "Make sure the domain you intend to use is already available in CMR.",
            },
            {
              id: "check-subscription",
              title: "Check the subscription state",
              description:
                "Determine whether the domain has an active subscription or whether its previous subscription was cancelled.",
            },
            {
              id: "choose-id",
              title: "Choose the correct identifier",
              description:
                "Use subscriptionId for an active subscription. Use domainId when the previous subscription was cancelled and a new subscription must be created.",
            },
            {
              id: "check-wallet",
              title: "Check wallet balance",
              description:
                "Make sure the Partner wallet can cover the order when the request will be processed immediately.",
            },
          ],
        },
      ],
    },

    {
      id: "warmup",
      title: "Optionally enable warmup during provisioning",
      description:
        "Warmup can be enabled for individual mailboxes as part of the mailbox order.",
      content: [
        {
          type: "paragraph",
          content:
            "The Create Mailbox Order API supports an optional onWarmup field on individual mailbox objects.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "mailboxes": {\n    "example.com": [\n      {\n        "username": "alice",\n        "firstName": "Alice",\n        "lastName": "Johnson",\n        "onWarmup": true\n      }\n    ]\n  }\n}',
        },
        {
          type: "paragraph",
          content:
            "Set onWarmup to true when the mailbox should be enrolled in warmup as part of the order. Warmup is optional and can be managed separately after provisioning.",
        },
        {
          type: "learn-more",
          items: [
            {
              id: "warmup-guide",
              title: "Warmup and Deliverability",
              description:
                "Learn how mailbox warmup works, including warmup states, settings, and management.",
              href: "/concepts/warmup-deliverability",
            },
          ],
        },
      ],
    },

    {
      id: "webhook-tracking",
      title: "Track mailbox provisioning with webhooks",
      description:
        "Use mailbox.created instead of repeatedly checking mailbox status.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR recommends subscribing to the mailbox.created webhook instead of continuously polling the Mailboxes API while the new mailboxes are being provisioned.",
        },
        {
          type: "steps",
          items: [
            {
              id: "subscribe",
              title: "Subscribe to mailbox.created",
              description:
                "Configure your webhook endpoint to receive mailbox creation events.",
            },
            {
              id: "receive",
              title: "Receive one event per mailbox",
              description:
                "Each mailbox generates its own mailbox.created event when provisioning is complete.",
            },
            {
              id: "update-local",
              title: "Update your local mailbox record",
              description:
                "Use the event data to mark the corresponding mailbox as ready in your application.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Do not assume the entire order finishes at once",
          content:
            "Mailbox provisioning is asynchronous. Track individual mailbox.created events rather than assuming that the order response means every mailbox is ready.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid the most common problems when adding mailboxes to an existing domain.",
      content: [
        {
          type: "heading",
          content: "Providing both subscriptionId and domainId",
        },
        {
          type: "paragraph",
          content:
            "These parameters are mutually exclusive. Use subscriptionId for an active subscription or domainId when the previous subscription was cancelled.",
        },

        {
          type: "heading",
          content: "Using domainId when an active subscription already exists",
        },
        {
          type: "paragraph",
          content:
            "For an active subscription, use subscriptionId so the new mailboxes are added to the existing subscription.",
        },

        {
          type: "heading",
          content: "Using subscriptionId after the subscription was cancelled",
        },
        {
          type: "paragraph",
          content:
            "When the previous subscription has been cancelled, use domainId so CMR can create a new subscription for the existing domain.",
        },

        {
          type: "heading",
          content: "Assuming the API response means the mailbox is ready",
        },
        {
          type: "paragraph",
          content:
            "The order is processed asynchronously. Wait for mailbox.created or verify that the mailbox has reached ACTIVE before using it.",
        },

        {
          type: "heading",
          content: "Submitting an empty or incorrectly structured mailboxes object",
        },
        {
          type: "paragraph",
          content:
            "The mailboxes field must contain the actual domain name as the key and an array of mailbox objects as its value. List each mailbox you want to create.",
        },

        {
          type: "heading",
          content: "Processing without enough wallet balance",
        },
        {
          type: "paragraph",
          content:
            "When confirm is true, CMR requires sufficient Partner wallet balance to cover the order cost.",
        },
      ],
    },

    {
      id: "complete-workflow",
      title: "Complete workflow",
      description:
        "Use this sequence when adding mailboxes to an existing domain.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "step-domain",
              title: "1. Identify the existing domain",
              description:
                "Confirm that the domain already exists in CMR.",
            },
            {
              id: "step-subscription",
              title: "2. Check the subscription",
              description:
                "Determine whether the domain has an active subscription or a previously cancelled subscription.",
            },
            {
              id: "step-identifier",
              title: "3. Select subscriptionId or domainId",
              description:
                "Use subscriptionId for an active subscription. Use domainId when CMR needs to create a new subscription after a cancellation.",
            },
            {
              id: "step-mailboxes",
              title: "4. Add the mailbox details",
              description:
                "List each new mailbox under the existing domain name.",
            },
            {
              id: "step-confirm",
              title: "5. Choose confirmation behavior",
              description:
                "Use confirm: true to queue processing immediately or confirm: false to create the order without processing it.",
            },
            {
              id: "step-submit",
              title: "6. Submit the mailbox order",
              description:
                "Call POST /orders/create-mailbox-order/json?userId= with the required request.",
            },
            {
              id: "step-webhook",
              title: "7. Wait for mailbox.created",
              description:
                "Receive a separate mailbox.created event for each mailbox as it becomes ready.",
            },
            {
              id: "step-active",
              title: "8. Use the mailbox after it is ACTIVE",
              description:
                "Only use the newly provisioned mailbox for normal sending and downstream workflows once provisioning is complete.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with Mailboxes and Provisioning",
      description:
        "Use these guides for the next steps in managing existing-domain mailboxes.",
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
              id: "provisioning-mailbox",
              title: "Provisioning a Mailbox",
              description:
                "Learn how mailbox provisioning works from order creation through mailbox readiness.",
              href: "/concepts/mailboxes-provisioning/provisioning-mailbox",
            },
            {
              id: "get-mailbox-details",
              title: "Finding and Retrieving Mailbox Details",
              description:
                "Learn how to find existing mailboxes and retrieve mailbox information.",
              href: "/concepts/mailboxes-provisioning/get-mailbox-details",
            },
            {
              id: "webhooks-vs-polling",
              title: "Why You Should Subscribe to Webhooks Instead of Polling",
              description:
                "Understand why mailbox.created is preferred over repeatedly polling mailbox status.",
              href: "/concepts/mailboxes-provisioning/webhooks-vs-polling",
            },
          ],
        },
      ],
    },
  ],
};