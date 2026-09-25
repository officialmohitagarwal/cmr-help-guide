export const asyncRetriesArticle = {
  id: "async-retries",
  slug: "/concepts/webhooks-events/async-retries",
  category: {
    id: "webhooks-events",
    label: "Webhooks & Events",
    slug: "/concepts/webhooks-events",
  },
  title: "Why You Should Never Retry an Async Call Blindly",
  description:
    "Understand why an accepted asynchronous request is not the same as a completed operation and how blind retries can create duplicate operations and charges.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Many CMR API operations are asynchronous. When CMR accepts one of these requests, the API can return an actionId while the actual operation continues in the background. The final result is reported through a webhook. Because the original operation may still be running, submitting the same request again before establishing that it failed can create duplicate operations, duplicate resources, or additional charges.",

  sections: [
    {
      id: "accepted-is-not-complete",
      title: "An accepted request is not a completed request",
      description:
        "Understand what the initial API response means for an asynchronous CMR operation.",
      content: [
        {
          type: "paragraph",
          content:
            "For asynchronous operations, CMR can accept the request immediately and continue processing it in the background. The API response indicates that the operation has been accepted, while the final outcome is reported later through a webhook.",
        },
        {
          type: "paragraph",
          content:
            "The presence of an actionId is an important signal that CMR has accepted the operation. It should not be interpreted as proof that the operation has succeeded or failed.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not retry just because the webhook has not arrived",
          content:
            "A missing or delayed webhook does not by itself prove that the underlying CMR operation failed. Investigate the original operation and webhook delivery path before submitting the same operation again.",
        },
      ],
    },

    {
      id: "why-blind-retries-are-dangerous",
      title: "Why blind retries are dangerous",
      description:
        "Understand what can happen when an asynchronous operation is submitted again without establishing that the original failed.",
      content: [
        {
          type: "paragraph",
          content:
            "When an asynchronous operation is already being processed, submitting the same request again can result in two independent operations instead of one retry of a failed operation.",
        },
        {
          type: "steps",
          items: [
            {
              id: "original-request",
              title: "1. The original request is accepted",
              description:
                "CMR accepts the asynchronous operation and returns an actionId.",
            },
            {
              id: "background-operation",
              title: "2. The original operation continues",
              description:
                "CMR processes the operation in the background while your application waits for the result.",
            },
            {
              id: "missing-webhook",
              title: "3. Your application does not receive the webhook yet",
              description:
                "The webhook may be delayed, rejected by your endpoint, or otherwise not yet visible to your application.",
            },
            {
              id: "blind-retry",
              title: "4. Your application submits the operation again",
              description:
                "Without establishing that the original operation failed, the application creates another asynchronous request.",
            },
            {
              id: "duplicate-result",
              title: "5. Both operations can produce results",
              description:
                "The original operation may still complete, while the second request can also be processed.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Duplicate operations can have real consequences",
          content:
            "CMR's documentation specifically warns that blindly retrying asynchronous operations can result in duplicate operations, including duplicate domain registrations and charges.",
        },
      ],
    },

    {
      id: "action-id-signal",
      title: "Use actionId to track the original operation",
      description:
        "The actionId gives your application a reference to the asynchronous operation that is already in progress.",
      content: [
        {
          type: "paragraph",
          content:
            "When CMR returns an actionId, store it with the operation in your application. The corresponding webhook can later be matched to that same actionId.",
        },
        {
          type: "steps",
          items: [
            {
              id: "store-action",
              title: "Store the actionId",
              description:
                "Persist the actionId returned by the original asynchronous request.",
            },
            {
              id: "pending-status",
              title: "Keep the operation pending",
              description:
                "Treat the operation as pending until the asynchronous result is received or the operation is otherwise confirmed as failed.",
            },
            {
              id: "wait-webhook",
              title: "Wait for the webhook",
              description:
                "Allow CMR to finish processing and report the result through the configured webhook endpoint.",
            },
            {
              id: "match-result",
              title: "Match the result",
              description:
                "Use the webhook's actionId to find the original operation record.",
            },
          ],
        },
      ],
    },

    {
      id: "webhook-delay",
      title: "A delayed webhook is not necessarily a failed operation",
      description:
        "Separate operation state from webhook delivery state.",
      content: [
        {
          type: "paragraph",
          content:
            "There are two different things to investigate when your application does not see the expected webhook: the underlying CMR operation and the delivery or processing of the webhook.",
        },
        {
          type: "heading",
          content: "The CMR operation may still be processing",
        },
        {
          type: "paragraph",
          content:
            "The asynchronous operation may simply not have reached its final state yet. In this case, submitting the request again can create a duplicate operation.",
        },
        {
          type: "heading",
          content: "The operation may have completed but your endpoint did not process the webhook",
        },
        {
          type: "paragraph",
          content:
            "A problem with your webhook endpoint can prevent your application from observing an event even though CMR has already generated it.",
        },
        {
          type: "heading",
          content: "The webhook may have been delivered but rejected",
        },
        {
          type: "paragraph",
          content:
            "Check your webhook endpoint logs and HTTP responses before deciding that the underlying operation needs to be submitted again.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Troubleshoot the delivery path first",
          content:
            "Before retrying an asynchronous API operation, determine whether the problem is with the operation itself or with receiving and processing its webhook.",
        },
      ],
    },

    {
      id: "safe-retry-process",
      title: "A safer retry process",
      description:
        "Use a controlled process instead of automatically resubmitting an asynchronous request.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "step-one",
              title: "1. Check the original API response",
              description:
                "Confirm whether CMR accepted the request and returned an actionId.",
            },
            {
              id: "step-two",
              title: "2. Check your operation record",
              description:
                "Find the stored operation using your internal identifier and actionId.",
            },
            {
              id: "step-three",
              title: "3. Check webhook delivery",
              description:
                "Review your webhook endpoint logs, request logs, signature validation, HTTP response, and processing result.",
            },
            {
              id: "step-four",
              title: "4. Check whether the webhook was already processed",
              description:
                "Make sure the event was not received and processed successfully but missed by the application UI or another downstream component.",
            },
            {
              id: "step-five",
              title: "5. Establish that the original operation failed",
              description:
                "Only consider a new API request after the original operation has been established as failed rather than merely delayed.",
            },
            {
              id: "step-six",
              title: "6. Retry only when appropriate",
              description:
                "Submit a new request only when the operation is known to require another attempt and the retry is safe for that specific operation.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not build retries around a timeout alone",
          content:
            "A client-side timeout or missing webhook should not automatically trigger a second CMR operation. The original asynchronous request may still be running.",
        },
      ],
    },

    {
      id: "idempotency-and-events",
      title: "Keep operation correlation and event deduplication separate",
      description:
        "Use actionId and eventId for their respective purposes.",
      content: [
        {
          type: "paragraph",
          content:
            "Safe asynchronous processing requires your application to distinguish between the operation that was requested and the webhook event that reports its result.",
        },
        {
          type: "steps",
          items: [
            {
              id: "action-id",
              title: "actionId — operation correlation",
              description:
                "Use actionId to connect the asynchronous webhook result to the original API request.",
            },
            {
              id: "event-id",
              title: "eventId — webhook deduplication",
              description:
                "Use eventId to identify a webhook event and prevent duplicate deliveries from being processed more than once.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Both identifiers belong in your integration",
          content:
            "Store actionId with the operation record and eventId with the webhook processing record. They solve different problems.",
        },
      ],
    },

    {
      id: "example-domain-registration",
      title: "Example: domain registration",
      description:
        "See why retrying a domain operation while waiting for its webhook can be problematic.",
      content: [
        {
          type: "paragraph",
          content:
            "Consider a domain registration request. Your application submits the request and receives an actionId. The domain registration continues asynchronously.",
        },
        {
          type: "steps",
          items: [
            {
              id: "domain-request",
              title: "1. Submit the domain registration",
              description:
                "Your application sends the domain registration request.",
            },
            {
              id: "domain-action",
              title: "2. Receive the actionId",
              description:
                "CMR accepts the request and returns an actionId.",
            },
            {
              id: "domain-wait",
              title: "3. Wait for the result",
              description:
                "CMR continues processing the registration.",
            },
            {
              id: "domain-webhook",
              title: "4. Receive the webhook",
              description:
                "CMR reports the result through the appropriate domain event.",
            },
            {
              id: "domain-bad-retry",
              title: "5. What not to do",
              description:
                "Do not submit another registration simply because the webhook has not arrived. The original registration may still be processing.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Duplicate domain operations can result in duplicate charges",
          content:
            "CMR specifically uses duplicate domain registrations and charges as an example of what can happen when asynchronous operations are blindly retried.",
        },
      ],
    },

    {
      id: "example-mailbox-provisioning",
      title: "Example: mailbox provisioning",
      description:
        "The same principle applies to asynchronous mailbox operations.",
      content: [
        {
          type: "paragraph",
          content:
            "Mailbox provisioning is also an asynchronous workflow. After the order is accepted, mailbox creation continues in the background and the mailbox.created event reports the result.",
        },
        {
          type: "steps",
          items: [
            {
              id: "mailbox-order",
              title: "1. Submit the mailbox order",
              description:
                "Create the mailbox order through the appropriate CMR order endpoint.",
            },
            {
              id: "mailbox-action",
              title: "2. Store the actionId",
              description:
                "Persist the actionId returned by the asynchronous operation.",
            },
            {
              id: "mailbox-wait",
              title: "3. Wait for provisioning",
              description:
                "Allow CMR to complete the mailbox provisioning process.",
            },
            {
              id: "mailbox-created",
              title: "4. Process mailbox.created",
              description:
                "Use the mailbox.created event to update your application when the mailbox has been created.",
            },
            {
              id: "mailbox-no-resubmit",
              title: "5. Do not resubmit while waiting",
              description:
                "Do not create another mailbox order merely because mailbox.created has not arrived yet.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "One mailbox can generate its own completion event",
          content:
            "For mailbox provisioning workflows, track the original order and resulting mailbox events rather than creating another order whenever an event is delayed.",
        },
      ],
    },

    {
      id: "client-timeouts",
      title: "Do not confuse client timeout with CMR failure",
      description:
        "A request timing out in your application does not necessarily mean CMR stopped processing it.",
      content: [
        {
          type: "paragraph",
          content:
            "Your HTTP client can time out or lose its connection even after CMR has accepted an asynchronous operation. If an actionId was already returned, the operation may continue independently of the original client connection.",
        },
        {
          type: "steps",
          items: [
            {
              id: "client-timeout",
              title: "Client connection ends",
              description:
                "Your application no longer has the original HTTP connection.",
            },
            {
              id: "cmr-processing",
              title: "CMR may continue processing",
              description:
                "The accepted asynchronous operation can continue in the background.",
            },
            {
              id: "webhook-result",
              title: "The result can still arrive through the webhook",
              description:
                "The webhook provides the asynchronous completion path.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not automatically resubmit after every timeout",
          content:
            "First determine whether CMR accepted the operation. If an actionId exists, preserve it and investigate the operation and webhook path before creating another request.",
        },
      ],
    },

    {
      id: "retry-checklist",
      title: "Before retrying an asynchronous operation",
      description:
        "Use this checklist before submitting another request.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "check-action",
              title: "1. Do I have an actionId?",
              description:
                "If yes, the original asynchronous operation was accepted. Do not assume it failed.",
            },
            {
              id: "check-webhook",
              title: "2. Did my webhook endpoint receive the event?",
              description:
                "Check server logs, request logs, and webhook processing records.",
            },
            {
              id: "check-event",
              title: "3. Was the event already processed?",
              description:
                "Check eventId and your idempotency records before taking another action.",
            },
            {
              id: "check-operation",
              title: "4. Is the original operation actually failed?",
              description:
                "Establish failure instead of treating a delay as failure.",
            },
            {
              id: "check-impact",
              title: "5. Could retrying create a duplicate resource or charge?",
              description:
                "Consider the operation's side effects before submitting it again.",
            },
            {
              id: "safe-retry",
              title: "6. Is a retry appropriate?",
              description:
                "Only retry after the original operation has been established as failed and the operation is safe to submit again.",
            },
          ],
        },
      ],
    },

    {
      id: "recommended-architecture",
      title: "Recommended asynchronous architecture",
      description:
        "Design your integration around durable operation tracking rather than request timeouts.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "architecture-request",
              title: "Submit the request",
              description:
                "Send the asynchronous CMR API request.",
            },
            {
              id: "architecture-store",
              title: "Persist the operation",
              description:
                "Store your internal operation ID, CMR actionId, operation type, and pending status.",
            },
            {
              id: "architecture-return",
              title: "Return control to the application",
              description:
                "Do not keep the original request open while waiting for the background operation to finish.",
            },
            {
              id: "architecture-webhook",
              title: "Receive the webhook",
              description:
                "Process the asynchronous result through your webhook endpoint.",
            },
            {
              id: "architecture-correlate",
              title: "Correlate by actionId",
              description:
                "Find the original operation using the actionId in the webhook.",
            },
            {
              id: "architecture-dedupe",
              title: "Deduplicate by eventId",
              description:
                "Prevent duplicate webhook deliveries from running the same business logic twice.",
            },
            {
              id: "architecture-retry",
              title: "Retry only established failures",
              description:
                "Create a new asynchronous request only after determining that the original operation actually failed and can safely be retried.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid the most common asynchronous retry problems.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-timeout",
              title: "Retrying after a client timeout",
              description:
                "A client timeout does not prove that CMR rejected or stopped the asynchronous operation.",
            },
            {
              id: "mistake-webhook",
              title: "Retrying because the webhook is delayed",
              description:
                "Investigate webhook delivery before assuming that the underlying operation failed.",
            },
            {
              id: "mistake-action",
              title: "Ignoring actionId",
              description:
                "If CMR returned an actionId, store it and use it to track the original operation.",
            },
            {
              id: "mistake-event",
              title: "Processing duplicate webhook deliveries as new operations",
              description:
                "Use eventId and idempotent processing so repeated webhook deliveries do not repeat the same business action.",
            },
            {
              id: "mistake-side-effects",
              title: "Ignoring operation side effects",
              description:
                "Consider whether another request could create a duplicate resource or additional charge before retrying.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with actionId correlation, webhook setup, and event troubleshooting.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "action-id",
              title: "Matching Webhooks Back to Requests via actionId",
              description:
                "Learn how to correlate asynchronous requests with their webhook results.",
              href: "/concepts/webhooks-events/action-id",
            },
            {
              id: "setup-webhook",
              title: "Setting Up Your Webhook Endpoint",
              description:
                "Configure and securely process CMR webhook deliveries.",
              href: "/concepts/webhooks-events/setup-webhook",
            },
            {
              id: "event-reference",
              title: "Event Reference by Category",
              description:
                "Explore CMR events across the different lifecycle categories.",
              href: "/concepts/webhooks-events/event-reference",
            },
            {
              id: "debugging-events",
              title: "Debugging Missed or Duplicate Events",
              description:
                "Troubleshoot missed, delayed, and duplicate webhook events.",
              href: "/concepts/webhooks-events/debugging-events",
            },
          ],
        },
      ],
    },
  ],
};