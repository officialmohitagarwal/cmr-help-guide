export const provisioningMailboxArticle = {
  id: "provisioning-mailbox",
  slug: "/concepts/mailboxes-provisioning/provisioning-mailbox",
  category: {
    id: "mailboxes-provisioning",
    label: "Mailboxes and Provisioning",
    slug: "/concepts/mailboxes-provisioning",
  },
  title: "Provisioning a Mailbox",
  description:
    "Learn how mailbox provisioning works from placing an order to receiving the mailbox.created event and using the mailbox once it is fully provisioned.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "CMR provisions mailboxes automatically as part of an order. The order request is accepted first, and the mailbox is then created asynchronously with the email provider. A mailbox moves through provisioning states before becoming ACTIVE. Your application should wait for the mailbox.created webhook before treating the mailbox as ready.",

  sections: [
    {
      id: "what-provisioning-means",
      title: "What mailbox provisioning means",
      description:
        "Provisioning is the process of creating and configuring the mailbox with the email provider.",
      content: [
        {
          type: "paragraph",
          content:
            "When you place an order containing mailbox information, CMR starts the process of creating those mailbox accounts with the selected email provider.",
        },
        {
          type: "paragraph",
          content:
            "Provisioning is asynchronous. The HTTP response from the order API confirms that the order has been accepted or queued for processing; it does not mean that the mailbox is already ready to use.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Order accepted does not mean mailbox ready",
          content:
            "Wait for the mailbox provisioning process to complete. CMR recommends using the mailbox.created webhook to know when an individual mailbox is fully provisioned.",
        },
      ],
    },

    {
      id: "before-you-start",
      title: "Before you place a mailbox order",
      description:
        "Make sure the required Partner and customer information is available before starting provisioning.",
      content: [
        {
          type: "paragraph",
          content:
            "Every domain and mailbox in CMR belongs to a user. The user's ID is passed as userId on subsequent requests for that customer.",
        },
        {
          type: "steps",
          items: [
            {
              id: "partner-api-key",
              title: "Have your Partner API key",
              description:
                "Use your CMR Partner API key to authenticate requests to the integration API.",
            },
            {
              id: "user-id",
              title: "Identify the customer user",
              description:
                "Use the CMR user ID associated with the customer who will own the domain and mailbox.",
            },
            {
              id: "domain",
              title: "Choose the domain",
              description:
                "For a new domain order, include the domain in the order. For an existing domain, use the mailbox-only order flow.",
            },
            {
              id: "mailbox-details",
              title: "Prepare mailbox details",
              description:
                "Each mailbox requires its username, first name, and last name.",
            },
          ],
        },
      ],
    },

    {
      id: "place-order",
      title: "Place a mailbox order",
      description:
        "Use the appropriate order endpoint depending on whether the domain is new or already exists.",
      content: [
        {
          type: "heading",
          content: "New domain and mailbox order",
        },
        {
          type: "paragraph",
          content:
            "When you are registering a new domain and provisioning mailboxes on it, use the main order endpoint:",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /orders/json?userId=",
        },
        {
          type: "paragraph",
          content:
            "The order can contain the domain to register and the mailboxes that should be created on that domain.",
        },
        {
          type: "heading",
          content: "Mailbox order on an existing domain",
        },
        {
          type: "paragraph",
          content:
            "When the domain already exists in CMR, use the mailbox-only order endpoint:",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /orders/create-mailbox-order/json?userId=",
        },
        {
          type: "paragraph",
          content:
            "The existing-domain flow uses either subscriptionId or domainId depending on the subscription state.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Use the correct order flow",
          content:
            "The main order endpoint is used when placing the domain and mailbox order together. The mailbox-only endpoint is used when the domain already exists and you are adding mailboxes.",
        },
      ],
    },

    {
      id: "order-request",
      title: "Build the mailbox order",
      description:
        "The mailboxes field contains the mailbox accounts to provision for each domain.",
      content: [
        {
          type: "paragraph",
          content:
            "The mailboxes field is an object keyed by the actual domain name. Each domain contains an array of mailbox objects.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "billingCycle": "MONTHLY",\n  "domains": [\n    {\n      "domain": "alicesender.com",\n      "years": 1\n    }\n  ],\n  "mailboxes": {\n    "alicesender.com": [\n      {\n        "username": "alice",\n        "firstName": "Alice",\n        "lastName": "Johnson"\n      },\n      {\n        "username": "alice.j",\n        "firstName": "Alice",\n        "lastName": "Johnson"\n      }\n    ]\n  }\n}',
        },
        {
          type: "paragraph",
          content:
            "There is no mailbox count field in the documented order format. List every mailbox you want to provision explicitly under the corresponding domain.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Use the domain name as the mailboxes key",
          content:
            "The mailboxes object is keyed by the actual domain name, such as alicesender.com. Do not use domainId as the key inside the mailboxes object.",
        },
      ],
    },

    {
      id: "order-response",
      title: "What the order response means",
      description:
        "The initial API response confirms order acceptance, not mailbox completion.",
      content: [
        {
          type: "paragraph",
          content:
            "When the order is accepted and queued for processing, CMR returns an orderId and an actionId in the response.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "status": 200,\n  "message": "Order created and queued for processing",\n  "data": {\n    "orderId": "ord_R8K2LQPZA9XM",\n    "unavailableDomains": []\n  },\n  "actionId": "ACT_7a078272-0fa7-4db4-a85b-c78697dacea1"\n}',
        },
        {
          type: "paragraph",
          content:
            "Store the orderId so that your application can correlate the order with subsequent status information and webhook events.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not mark the mailbox as ready from HTTP 200",
          content:
            "A successful order response means the order was accepted or queued. It does not mean the mailbox has completed provisioning.",
        },
      ],
    },

    {
      id: "provisioning-stages",
      title: "The mailbox provisioning stages",
      description:
        "A mailbox passes through multiple states before becoming ready.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "in-progress",
              title: "1. IN_PROGRESS",
              description:
                "The order has been accepted and the mailbox account is being created with the email provider.",
            },
            {
              id: "creating-password",
              title: "2. CREATING_PASSWORD",
              description:
                "The mailbox account has been created with the email provider and its initial password is being configured.",
            },
            {
              id: "active",
              title: "3. ACTIVE",
              description:
                "The mailbox is fully provisioned and ready to send email.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ACTIVE is the ready state",
          content:
            "Do not use the mailbox for normal sending workflows while it is still IN_PROGRESS or CREATING_PASSWORD. Wait until it reaches ACTIVE.",
        },
      ],
    },

    {
      id: "webhook-completion",
      title: "Wait for mailbox.created",
      description:
        "The mailbox.created webhook is the recommended completion signal for mailbox provisioning.",
      content: [
        {
          type: "paragraph",
          content:
            "Once the mailbox is fully provisioned and reaches ACTIVE, CMR sends the mailbox.created webhook.",
        },
        {
          type: "paragraph",
          content:
            "The webhook is sent once per mailbox. If an order creates three mailboxes, your webhook endpoint receives three separate mailbox.created events.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "event": "mailbox.created",\n  "eventId": "7TTIBYXS4O5KFLHSRTG4LX4E87O7",\n  "data": {\n    "userId": "usr_abc123",\n    "orderId": "NQ682GAVFTMYC2H6C87PPKPG5WXV",\n    "mailboxId": "mbx_001",\n    "email": "alice@alicesender.com"\n  }\n}',
        },
        {
          type: "steps",
          items: [
            {
              id: "receive-event",
              title: "Receive mailbox.created",
              description:
                "Your webhook endpoint receives the event when the individual mailbox is fully provisioned.",
            },
            {
              id: "correlate-order",
              title: "Correlate the mailbox with the order",
              description:
                "Use the orderId and mailbox information in the event to identify the corresponding mailbox in your system.",
            },
            {
              id: "mark-ready",
              title: "Mark the mailbox as ready",
              description:
                "Update your local mailbox state so that downstream workflows know the mailbox can be used.",
            },
          ],
        },
      ],
    },

    {
      id: "multiple-mailboxes",
      title: "When provisioning multiple mailboxes",
      description:
        "Each mailbox is provisioned and reported independently.",
      content: [
        {
          type: "paragraph",
          content:
            "An order can contain multiple mailboxes under the same domain. Each mailbox has its own provisioning lifecycle.",
        },
        {
          type: "steps",
          items: [
            {
              id: "submit-multiple",
              title: "Submit the mailbox list",
              description:
                "Include each requested mailbox explicitly in the mailboxes object.",
            },
            {
              id: "provision-individually",
              title: "CMR provisions the mailboxes",
              description:
                "The individual mailbox accounts are created and configured with the email provider.",
            },
            {
              id: "individual-events",
              title: "Receive individual mailbox.created events",
              description:
                "CMR sends one mailbox.created event for each mailbox when that mailbox becomes ready.",
            },
            {
              id: "track-each",
              title: "Track each mailbox separately",
              description:
                "Your application should update each mailbox independently rather than assuming the entire order completed at once.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not assume all mailboxes are ready together",
          content:
            "The mailbox.created event is emitted per mailbox. One mailbox becoming ACTIVE does not by itself confirm that every mailbox in the order is ready.",
        },
      ],
    },

    {
      id: "warmup-at-order",
      title: "Optionally enable warmup during provisioning",
      description:
        "Warmup can be enrolled automatically as part of the mailbox order.",
      content: [
        {
          type: "paragraph",
          content:
            "The mailbox order API supports an optional onWarmup field on individual mailbox objects.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "mailboxes": {\n    "example.org": [\n      {\n        "username": "alice",\n        "firstName": "Alice",\n        "lastName": "Smith",\n        "onWarmup": true\n      }\n    ]\n  }\n}',
        },
        {
          type: "paragraph",
          content:
            "When onWarmup is true, CMR automatically enrolls that mailbox in email warmup after provisioning. The documented default is false.",
        },
        {
          type: "paragraph",
          content:
            "Warmup can also be added later to an already active mailbox through the dedicated warmup endpoint.",
        },
        {
          type: "learn-more",
          items: [
            {
              id: "warmup",
              title: "Warmup and Deliverability",
              description:
                "Learn how mailbox warmup works and how to manage warmup after provisioning.",
              href: "/concepts/warmup-deliverability",
            },
          ],
        },
      ],
    },

    {
      id: "confirmed-vs-unconfirmed",
      title: "Confirmed vs unconfirmed orders",
      description:
        "The confirm parameter determines whether CMR processes the order immediately.",
      content: [
        {
          type: "heading",
          content: "confirm: true",
        },
        {
          type: "paragraph",
          content:
            "When confirm is true, the order is created and automatically queued for processing. Processing begins immediately after creation.",
        },
        {
          type: "paragraph",
          content:
            "The Partner wallet must have sufficient balance to cover the order cost when the order is processed immediately.",
        },

        {
          type: "heading",
          content: "confirm: false",
        },
        {
          type: "paragraph",
          content:
            "When confirm is false, the order is created but is not processed immediately. It can be processed later through the Process Order endpoint.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Use confirm: false when you need a review step",
          content:
            "An unconfirmed order allows your application to create the order without immediately processing it. This can be useful when your workflow requires reviewing the order before committing it.",
        },
      ],
    },

    {
      id: "quick-start-flow",
      title: "Complete provisioning flow",
      description:
        "The full CMR flow connects user creation, domain selection, order placement, and mailbox provisioning.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "create-user",
              title: "1. Create the user",
              description:
                "Create the customer user and store the returned user ID. This user owns the domain and mailbox resources.",
            },
            {
              id: "check-domain",
              title: "2. Check domain availability",
              description:
                "For a new domain, check that the requested domain is available before placing the order.",
            },
            {
              id: "place-order",
              title: "3. Place the order",
              description:
                "Submit the order with the domain and mailbox information.",
            },
            {
              id: "store-order",
              title: "4. Store the order ID",
              description:
                "Store data.orderId from the order response so your application can correlate later events and status checks.",
            },
            {
              id: "wait-webhook",
              title: "5. Wait for provisioning events",
              description:
                "Listen for the webhook sequence associated with the order and wait for mailbox.created for each mailbox.",
            },
            {
              id: "mailbox-ready",
              title: "6. Use the mailbox",
              description:
                "Once mailbox.created confirms that the mailbox is fully provisioned, the mailbox can be used for its downstream workflow.",
            },
          ],
        },
      ],
    },

    {
      id: "polling-vs-webhooks",
      title: "Why webhooks are preferred over polling",
      description:
        "Use mailbox.created as the primary provisioning completion signal.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR recommends subscribing to the mailbox.created webhook instead of continuously polling the Mailboxes API for provisioning updates.",
        },
        {
          type: "paragraph",
          content:
            "Polling can still be used to retrieve order status when needed. CMR's Quick Start documentation provides GET /orders/status?userId=&orderId= for checking order progress.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Use events for completion, APIs for retrieval",
          content:
            "Use mailbox.created to react when a mailbox becomes ready. Use the mailbox and order APIs when your application needs to retrieve current resource information.",
        },
      ],
    },

    {
      id: "avoid-duplicate-orders",
      title: "Do not resubmit while waiting",
      description:
        "An asynchronous order can take time to complete, so avoid creating duplicate orders.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR's Quick Start documentation specifically warns against resubmitting an order while waiting for webhooks. Duplicate submissions can create duplicate domain registrations and charges.",
        },
        {
          type: "steps",
          items: [
            {
              id: "store-order-id",
              title: "Store the orderId",
              description:
                "Keep the order ID returned when the order is created.",
            },
            {
              id: "wait",
              title: "Wait for the webhook flow",
              description:
                "Allow the asynchronous provisioning process to complete instead of submitting the same order again.",
            },
            {
              id: "check-status",
              title: "Check status when necessary",
              description:
                "Use the order status endpoint if your application needs to inspect progress while waiting.",
            },
            {
              id: "handle-created",
              title: "Process mailbox.created",
              description:
                "Treat the mailbox.created event as the signal that an individual mailbox is fully provisioned.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not create a second order just because provisioning takes time",
          content:
            "An HTTP 200 response means the order was accepted, not that provisioning has completed. Wait for the documented asynchronous events instead of resubmitting the order.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common provisioning mistakes",
      description:
        "Avoid the most common problems when provisioning CMR mailboxes.",
      content: [
        {
          type: "heading",
          content: "Treating HTTP 200 as mailbox completion",
        },
        {
          type: "paragraph",
          content:
            "The order response confirms acceptance or queueing. It does not confirm that the mailbox is ready.",
        },

        {
          type: "heading",
          content: "Using the mailbox before it is ACTIVE",
        },
        {
          type: "paragraph",
          content:
            "Wait until the mailbox is fully provisioned and mailbox.created has been received before using it for sending, exporting credentials, or connecting it to an outreach platform.",
        },

        {
          type: "heading",
          content: "Polling continuously for provisioning",
        },
        {
          type: "paragraph",
          content:
            "CMR recommends subscribing to mailbox.created instead of repeatedly polling the Mailboxes API for provisioning updates.",
        },

        {
          type: "heading",
          content: "Resubmitting the same order",
        },
        {
          type: "paragraph",
          content:
            "Do not create another order while waiting for the first order to finish. Store the orderId and wait for the webhook flow.",
        },

        {
          type: "heading",
          content: "Assuming multiple mailboxes finish together",
        },
        {
          type: "paragraph",
          content:
            "Each mailbox generates its own mailbox.created event. Track provisioning at the mailbox level.",
        },

        {
          type: "heading",
          content: "Using an incorrect mailboxes structure",
        },
        {
          type: "paragraph",
          content:
            "The mailboxes field must be an object keyed by the actual domain name, with an array of mailbox objects underneath it.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with Mailboxes and Provisioning",
      description:
        "Use these guides for the next steps after understanding mailbox provisioning.",
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
                "Learn how to retrieve mailbox information after provisioning.",
              href: "/concepts/mailboxes-provisioning/get-mailbox-details",
            },
            {
              id: "webhooks-vs-polling",
              title: "Why You Should Subscribe to Webhooks Instead of Polling",
              description:
                "Learn why mailbox.created is the preferred provisioning completion signal.",
              href: "/concepts/mailboxes-provisioning/webhooks-vs-polling",
            },
            {
              id: "deleting-mailbox",
              title: "Deleting a Mailbox: What's Reversible and What Isn't",
              description:
                "Understand the permanent consequences of deleting a mailbox.",
              href: "/concepts/mailboxes-provisioning/deleting-mailbox",
            },
          ],
        },
      ],
    },
  ],
};