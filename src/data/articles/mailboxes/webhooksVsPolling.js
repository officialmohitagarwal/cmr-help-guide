export const webhooksVsPollingArticle = {
  id: "webhooks-vs-polling",
  slug: "/concepts/mailboxes-provisioning/webhooks-vs-polling",
  category: {
    id: "mailboxes-provisioning",
    label: "Mailboxes and Provisioning",
    slug: "/concepts/mailboxes-provisioning",
  },
  title: "Why You Should Subscribe to Webhooks Instead of Polling",
  description:
    "Understand how CMR webhooks signal mailbox provisioning events, why mailbox.created is preferred over continuous polling, and how to build a reliable event-driven mailbox workflow.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Mailbox provisioning in CMR is asynchronous. An order can be accepted before the individual mailboxes are ready, so your application needs a reliable way to know when each mailbox becomes available. CMR recommends subscribing to the mailbox.created webhook instead of continuously polling the Mailboxes API. Polling can still be used when your application needs to inspect order progress, but webhooks should be the primary mechanism for reacting to mailbox lifecycle events.",

  sections: [
    {
      id: "why-provisioning-is-asynchronous",
      title: "Why mailbox provisioning is asynchronous",
      description:
        "Creating a mailbox involves processing with the underlying Google or Microsoft workspace provider.",
      content: [
        {
          type: "paragraph",
          content:
            "When you submit a mailbox order, CMR accepts the order and begins processing it asynchronously. The mailbox then moves through its provisioning lifecycle before becoming ACTIVE.",
        },
        {
          type: "steps",
          items: [
            {
              id: "order-accepted",
              title: "1. Order is accepted",
              description:
                "The order request is accepted and mailbox provisioning begins.",
            },
            {
              id: "mailbox-processing",
              title: "2. Mailbox provisioning starts",
              description:
                "The mailbox account is created with the email provider and its initial configuration is applied.",
            },
            {
              id: "mailbox-active",
              title: "3. Mailbox becomes ACTIVE",
              description:
                "The mailbox is fully provisioned and ready for use.",
            },
            {
              id: "webhook-sent",
              title: "4. mailbox.created is sent",
              description:
                "CMR sends the mailbox.created webhook for that individual mailbox.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The order response is not the completion signal",
          content:
            "A successful HTTP 200 response from the order endpoint confirms that the order was accepted or queued. It does not mean that the mailbox has finished provisioning.",
        },
      ],
    },

    {
      id: "what-polling-means",
      title: "What polling means",
      description:
        "Polling repeatedly asks the CMR API for the current state of an order or mailbox.",
      content: [
        {
          type: "paragraph",
          content:
            "With polling, your application sends repeated API requests while waiting for the provisioning process to complete.",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /orders/status?userId=&orderId=",
        },
        {
          type: "paragraph",
          content:
            "CMR documents the order status endpoint as a way to inspect order progress. The Quick Start documentation also states that you can poll order status at any point instead of, or alongside, listening for webhooks.",
        },
        {
          type: "steps",
          items: [
            {
              id: "create-order",
              title: "Create the order",
              description:
                "Submit the mailbox order and store the returned orderId.",
            },
            {
              id: "wait",
              title: "Wait for a period of time",
              description:
                "Your application waits before checking the order again.",
            },
            {
              id: "check-status",
              title: "Check order status",
              description:
                "Call GET /orders/status with the userId and orderId.",
            },
            {
              id: "repeat",
              title: "Repeat until complete",
              description:
                "Continue making status requests while the order is still being processed.",
            },
          ],
        },
      ],
    },

    {
      id: "what-webhooks-mean",
      title: "What webhooks mean",
      description:
        "Webhooks allow CMR to notify your application when an event occurs.",
      content: [
        {
          type: "paragraph",
          content:
            "With webhooks, your application provides a publicly reachable endpoint and CMR sends an HTTP request to that endpoint when a subscribed event occurs.",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST https://your-domain.com/webhooks",
        },
        {
          type: "paragraph",
          content:
            "CMR's webhook documentation describes webhooks as the real-time mechanism for receiving notifications about events such as domain registration, mailbox creation, and subscription changes.",
        },
        {
          type: "steps",
          items: [
            {
              id: "endpoint",
              title: "1. Create a webhook endpoint",
              description:
                "Expose a publicly reachable POST endpoint that can receive CMR webhook requests.",
            },
            {
              id: "subscribe",
              title: "2. Subscribe to events",
              description:
                "Configure your webhook URL and select the events your integration needs to receive.",
            },
            {
              id: "verify",
              title: "3. Verify the webhook request",
              description:
                "Verify the webhook signature before trusting the event payload.",
            },
            {
              id: "process",
              title: "4. Process the event",
              description:
                "Use the event type and payload to update your application and trigger the appropriate workflow.",
            },
          ],
        },
      ],
    },

    {
      id: "mailbox-created",
      title: "The mailbox.created event",
      description:
        "mailbox.created is the key event for knowing when an individual mailbox is ready.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR sends mailbox.created when an individual mailbox has been successfully created and is ready to use. The event is sent once per mailbox.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "event": "mailbox.created",\n  "eventId": "7TTIBYXS4O5KFLHSRTG4LX4E87O7",\n  "data": {\n    "userId": "usr_abc123",\n    "orderId": "NQ682GAVFTMYC2H6C87PPKPG5WXV",\n    "mailboxId": "mbx_001",\n    "email": "alice@alicesender.com"\n  }\n}',
        },
        {
          type: "paragraph",
          content:
            "The event contains identifiers that allow your application to connect the newly created mailbox to the customer, order, and mailbox records in your own system.",
        },
        {
          type: "steps",
          items: [
            {
              id: "event-type",
              title: "Check the event type",
              description:
                "Confirm that event is mailbox.created before processing the payload as a newly provisioned mailbox.",
            },
            {
              id: "event-id",
              title: "Store the eventId",
              description:
                "Use the unique eventId to identify the webhook event and support duplicate detection in your integration.",
            },
            {
              id: "order-id",
              title: "Match the order",
              description:
                "Use data.orderId to associate the mailbox with the order that created it.",
            },
            {
              id: "mailbox-id",
              title: "Store the mailboxId",
              description:
                "Use the mailboxId as the identifier for subsequent mailbox operations.",
            },
            {
              id: "mark-ready",
              title: "Mark the mailbox as ready",
              description:
                "Update your application's mailbox state when the mailbox.created event is received.",
            },
          ],
        },
      ],
    },

    {
      id: "multiple-mailboxes",
      title: "One webhook per mailbox",
      description:
        "An order containing multiple mailboxes produces multiple mailbox.created events.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR does not send one combined mailbox.created event for an entire order. The event is emitted separately for each mailbox when that mailbox is ready.",
        },
        {
          type: "code",
          language: "text",
          content:
            "Order with 3 mailboxes\n        │\n        ├── mailbox.created → mailbox 1\n        ├── mailbox.created → mailbox 2\n        └── mailbox.created → mailbox 3",
        },
        {
          type: "steps",
          items: [
            {
              id: "track-order",
              title: "Track the order",
              description:
                "Store the orderId when the order is created.",
            },
            {
              id: "receive-events",
              title: "Receive mailbox.created events",
              description:
                "Handle each mailbox.created event independently as each mailbox becomes ready.",
            },
            {
              id: "track-mailboxes",
              title: "Track mailbox completion",
              description:
                "Store the mailboxId and related details from every successful event.",
            },
            {
              id: "complete-order",
              title: "Determine order completion",
              description:
                "If your application needs to know when all requested mailboxes are ready, track the individual mailbox events against the mailboxes you originally requested.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not assume all mailboxes become ready together",
          content:
            "Each mailbox has its own mailbox.created event. Receiving one event does not mean that every mailbox in the order has finished provisioning.",
        },
      ],
    },

    {
      id: "event-sequence",
      title: "The complete order webhook sequence",
      description:
        "A normal domain and mailbox order produces a sequence of events.",
      content: [
        {
          type: "paragraph",
          content:
            "For an order that includes a new domain and mailboxes, CMR documents a sequence beginning with domain registration, followed by mailbox order processing, and finally individual mailbox creation events.",
        },
        {
          type: "code",
          language: "text",
          content:
            "Order placed\n    ↓\ndomain.order.success\n    ↓\nmailbox.order.success\n    ↓\nmailbox.created (mailbox 1)\nmailbox.created (mailbox 2)\nmailbox.created (mailbox 3)",
        },
        {
          type: "paragraph",
          content:
            "If domain registration fails, the mailbox creation stage is skipped and no mailbox events are sent for that failed domain.",
        },
        {
          type: "code",
          language: "text",
          content:
            "Order placed\n    ↓\ndomain.order.failed\n    ↓\nNo mailbox events",
        },
        {
          type: "callout",
          variant: "info",
          title: "Handle failure events too",
          content:
            "A webhook integration should not only listen for mailbox.created. Track the relevant order and failure events so your application can distinguish successful provisioning from an order that cannot proceed.",
        },
      ],
    },

    {
      id: "webhook-vs-polling",
      title: "Webhooks vs polling",
      description:
        "Both approaches can be useful, but they serve different purposes.",
      content: [
        {
          type: "heading",
          content: "Webhooks",
        },
        {
          type: "steps",
          items: [
            {
              id: "webhook-event-driven",
              title: "Event-driven",
              description:
                "CMR sends a notification when the relevant event occurs instead of your application repeatedly asking for the current state.",
            },
            {
              id: "webhook-timely",
              title: "Receive completion notifications",
              description:
                "mailbox.created tells your application when an individual mailbox is ready.",
            },
            {
              id: "webhook-efficient",
              title: "Avoid continuous status requests",
              description:
                "Your application does not need to repeatedly request mailbox status while waiting for provisioning.",
            },
          ],
        },

        {
          type: "heading",
          content: "Polling",
        },
        {
          type: "steps",
          items: [
            {
              id: "polling-request",
              title: "Application-driven",
              description:
                "Your application decides when to request the current order status.",
            },
            {
              id: "polling-progress",
              title: "Useful for progress checks",
              description:
                "GET /orders/status can be used when your application needs to inspect the current order state.",
            },
            {
              id: "polling-repetition",
              title: "Requires repeated requests",
              description:
                "A polling workflow needs repeated status checks while the asynchronous operation is still in progress.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Use both when appropriate",
          content:
            "CMR recommends webhooks instead of continuously polling for provisioning. The Quick Start documentation also supports polling order status when needed, including alongside webhooks.",
        },
      ],
    },

    {
      id: "recommended-architecture",
      title: "Recommended mailbox provisioning architecture",
      description:
        "Use webhooks as the event-driven completion mechanism and APIs for retrieval or reconciliation.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "architecture-order",
              title: "1. Create the order",
              description:
                "Submit the order and store the returned orderId in your database.",
            },
            {
              id: "architecture-webhook",
              title: "2. Wait for webhook events",
              description:
                "Let CMR notify your webhook endpoint as the order progresses.",
            },
            {
              id: "architecture-mailbox",
              title: "3. Process mailbox.created",
              description:
                "When mailbox.created arrives, create or update the corresponding mailbox record in your application.",
            },
            {
              id: "architecture-store",
              title: "4. Store mailbox identifiers",
              description:
                "Persist the mailboxId, orderId, userId, and other required resource identifiers.",
            },
            {
              id: "architecture-retrieve",
              title: "5. Retrieve current data when needed",
              description:
                "Use the mailbox APIs when your application needs the current resource details rather than using repeated polling as the primary completion mechanism.",
            },
            {
              id: "architecture-reconcile",
              title: "6. Reconcile when necessary",
              description:
                "Use order status or resource retrieval APIs when your application needs to verify or reconcile its local state.",
            },
          ],
        },
      ],
    },

    {
      id: "acknowledge-webhooks",
      title: "Acknowledge webhook requests quickly",
      description:
        "Your webhook endpoint should acknowledge receipt before doing long-running work.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR's Quick Start documentation recommends responding with HTTP 200 immediately when a webhook is received, before processing the event.",
        },
        {
          type: "code",
          language: "text",
          content:
            "Receive webhook\n      ↓\nVerify request\n      ↓\nRespond HTTP 200\n      ↓\nProcess event asynchronously",
        },
        {
          type: "paragraph",
          content:
            "If your handler throws an error before responding with HTTP 200, CMR can retry the webhook delivery.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not block the webhook response with long-running work",
          content:
            "Acknowledge the webhook first. Move longer processing tasks to asynchronous application logic so the webhook endpoint can respond promptly.",
        },
      ],
    },

    {
      id: "verify-signatures",
      title: "Verify webhook signatures",
      description:
        "Webhook payloads should be authenticated before your application trusts them.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR's webhook documentation specifies two security headers on webhook requests: cmr-x-signature and cmr-x-timestamp.",
        },
        {
          type: "steps",
          items: [
            {
              id: "signature-header",
              title: "Check cmr-x-signature",
              description:
                "Use the HMAC-SHA256 signature provided by CMR to verify that the payload came from the expected source and was not modified.",
            },
            {
              id: "timestamp-header",
              title: "Check cmr-x-timestamp",
              description:
                "Use the timestamp provided with the request as part of your webhook verification process.",
            },
            {
              id: "trust-payload",
              title: "Trust the event only after verification",
              description:
                "Do not update your application's mailbox state based on an unverified webhook payload.",
            },
          ],
        },
      ],
    },

    {
      id: "idempotency",
      title: "Handle duplicate webhook deliveries",
      description:
        "Your webhook handler should be safe to run more than once for the same event.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR's webhook documentation recommends storing the eventId and skipping duplicate processing. This makes your integration idempotent if the same webhook is delivered more than once.",
        },
        {
          type: "steps",
          items: [
            {
              id: "receive-event",
              title: "Receive the event",
              description:
                "Read the eventId and event type from the webhook payload.",
            },
            {
              id: "check-event",
              title: "Check whether eventId was already processed",
              description:
                "Look up the eventId in your webhook event store or database.",
            },
            {
              id: "skip-duplicate",
              title: "Skip duplicates",
              description:
                "If the eventId has already been processed, do not execute the mailbox workflow again.",
            },
            {
              id: "process-new",
              title: "Process new events",
              description:
                "For a new eventId, process the event and record the identifier.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "eventId is your deduplication key",
          content:
            "CMR documents eventId as the unique identifier for a webhook event. Store it so your integration can safely recognize duplicate deliveries.",
        },
      ],
    },

    {
      id: "avoid-resubmission",
      title: "Never resubmit an order while waiting",
      description:
        "An asynchronous order can take time to complete, so do not create another order simply because you have not received the webhook yet.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR's Quick Start documentation explicitly warns against resubmitting an order while waiting for webhooks. Duplicate submissions can create duplicate domain registrations and charges with no automatic way to reverse them.",
        },
        {
          type: "steps",
          items: [
            {
              id: "store-id",
              title: "Store the orderId",
              description:
                "Keep the order identifier returned when the order was created.",
            },
            {
              id: "wait-events",
              title: "Wait for events",
              description:
                "Allow the asynchronous provisioning process to continue.",
            },
            {
              id: "check-status-if-needed",
              title: "Check status if necessary",
              description:
                "Use GET /orders/status when your application needs to inspect progress.",
            },
            {
              id: "handle-event",
              title: "Process the webhook",
              description:
                "Use the received event to update your application instead of creating another order.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not create a duplicate order",
          content:
            "Not receiving a webhook immediately does not mean the original order failed. Check the order state or investigate webhook delivery before submitting another order.",
        },
      ],
    },

    {
      id: "when-polling-is-useful",
      title: "When polling is still useful",
      description:
        "Webhooks should be the primary event mechanism, but API polling has valid supporting uses.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR does not require you to choose exclusively between webhooks and API status checks. The Quick Start documentation explicitly states that you can poll order status instead of or alongside listening for webhooks.",
        },
        {
          type: "steps",
          items: [
            {
              id: "debugging",
              title: "Debugging an order",
              description:
                "Use order status when investigating the current state of a specific order.",
            },
            {
              id: "reconciliation",
              title: "State reconciliation",
              description:
                "Use API retrieval when your local application state needs to be compared with the current CMR state.",
            },
            {
              id: "webhook-independent",
              title: "Supporting a webhook workflow",
              description:
                "A status request can provide additional confirmation or context while your application waits for the relevant event.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Polling is a supporting mechanism",
          content:
            "Use polling when you need to inspect state. Do not turn it into a continuous loop when a webhook already provides the event you are waiting for.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common webhook and polling mistakes",
      description:
        "Avoid the most common integration problems when tracking mailbox provisioning.",
      content: [
        {
          type: "heading",
          content: "Treating HTTP 200 from the order API as completion",
        },
        {
          type: "paragraph",
          content:
            "The order API response confirms acceptance, not mailbox readiness. Wait for mailbox.created.",
        },

        {
          type: "heading",
          content: "Polling continuously instead of using mailbox.created",
        },
        {
          type: "paragraph",
          content:
            "CMR specifically recommends subscribing to mailbox.created instead of repeatedly polling the Mailboxes API for provisioning.",
        },

        {
          type: "heading",
          content: "Assuming one webhook represents the entire order",
        },
        {
          type: "paragraph",
          content:
            "mailbox.created is sent once per mailbox. An order containing multiple mailboxes generates multiple mailbox.created events.",
        },

        {
          type: "heading",
          content: "Failing to acknowledge the webhook",
        },
        {
          type: "paragraph",
          content:
            "Respond with HTTP 200 promptly. If the webhook handler fails before acknowledgement, CMR can retry delivery.",
        },

        {
          type: "heading",
          content: "Processing duplicate events twice",
        },
        {
          type: "paragraph",
          content:
            "Store eventId and make your event processing idempotent so duplicate deliveries do not create duplicate application-side actions.",
        },

        {
          type: "heading",
          content: "Trusting an unverified webhook",
        },
        {
          type: "paragraph",
          content:
            "Verify cmr-x-signature and cmr-x-timestamp before trusting webhook data.",
        },

        {
          type: "heading",
          content: "Resubmitting an order while waiting",
        },
        {
          type: "paragraph",
          content:
            "Do not create another order simply because provisioning has not completed yet. Use the existing orderId and webhook or status flow.",
        },
      ],
    },

    {
      id: "recommended-flow",
      title: "Recommended implementation flow",
      description:
        "Use this pattern for a reliable CMR mailbox provisioning integration.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "implementation-order",
              title: "1. Create the order",
              description:
                "Submit the order and store its orderId.",
            },
            {
              id: "implementation-webhook",
              title: "2. Receive webhook",
              description:
                "Accept the incoming CMR webhook at your publicly reachable endpoint.",
            },
            {
              id: "implementation-security",
              title: "3. Verify the request",
              description:
                "Validate the signature and timestamp before trusting the payload.",
            },
            {
              id: "implementation-ack",
              title: "4. Acknowledge with HTTP 200",
              description:
                "Respond promptly before starting long-running processing.",
            },
            {
              id: "implementation-idempotency",
              title: "5. Check eventId",
              description:
                "Ignore the event if it has already been processed.",
            },
            {
              id: "implementation-event",
              title: "6. Process the event",
              description:
                "For mailbox.created, create or update the mailbox in your application.",
            },
            {
              id: "implementation-reconcile",
              title: "7. Retrieve state when necessary",
              description:
                "Use CMR APIs for additional mailbox or order information when your workflow requires it.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with Mailboxes and Provisioning",
      description:
        "Use these guides to build the rest of your mailbox integration.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "provisioning-mailbox",
              title: "Provisioning a Mailbox",
              description:
                "Understand the complete mailbox provisioning flow from order creation to ACTIVE.",
              href: "/concepts/mailboxes-provisioning/provisioning-mailbox",
            },
            {
              id: "mailbox-lifecycle",
              title: "Mailbox Lifecycle Explained",
              description:
                "Understand mailbox states and how provisioning relates to the mailbox lifecycle.",
              href: "/concepts/mailboxes-provisioning/mailbox-lifecycle",
            },
            {
              id: "get-mailbox-details",
              title: "Finding and Retrieving Mailbox Details",
              description:
                "Learn how to retrieve mailbox information after provisioning.",
              href: "/concepts/mailboxes-provisioning/get-mailbox-details",
            },
            {
              id: "updating-mailbox-details",
              title: "Updating Mailbox Details and Resetting a Password",
              description:
                "Learn how mailbox detail changes are submitted and processed asynchronously.",
              href: "/concepts/mailboxes-provisioning/updating-mailbox-details",
            },
            {
              id: "deleting-mailbox",
              title: "Deleting a Mailbox: What's Reversible and What Isn't",
              description:
                "Understand the permanent consequences of removing a mailbox.",
              href: "/concepts/mailboxes-provisioning/deleting-mailbox",
            },
          ],
        },
      ],
    },
  ],
};