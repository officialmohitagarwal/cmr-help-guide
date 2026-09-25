export const actionIdArticle = {
  id: "action-id",
  slug: "/concepts/webhooks-events/action-id",
  category: {
    id: "webhooks-events",
    label: "Webhooks & Events",
    slug: "/concepts/webhooks-events",
  },
  title: "Matching Webhooks Back to Requests via actionId",
  description:
    "Understand how actionId connects asynchronous API requests with their eventual webhook results and how to track operations reliably.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Many CMR operations are processed asynchronously. When you submit one of these operations, CMR returns an actionId immediately and continues processing the request in the background. When the operation finishes, the corresponding webhook includes that same actionId, allowing your application to match the webhook back to the original API request.",

  sections: [
    {
      id: "what-action-id-is",
      title: "What actionId means",
      description:
        "Understand what the identifier represents and what it does not mean.",
      content: [
        {
          type: "paragraph",
          content:
            "An actionId identifies an asynchronous operation submitted through the CMR API. It is returned when CMR accepts the request and can later be used to correlate the resulting webhook with the original API call.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "actionId does not mean the operation is complete",
          content:
            "Receiving an actionId confirms that CMR accepted the asynchronous operation. It does not confirm that the operation has finished successfully.",
        },
        {
          type: "paragraph",
          content:
            "The actual result is delivered later through a webhook. Your application should treat the webhook as the completion signal for the asynchronous operation.",
        },
      ],
    },

    {
      id: "async-flow",
      title: "How the actionId flow works",
      description:
        "Follow the lifecycle from the original API request to the final webhook.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "submit-request",
              title: "1. Submit the API request",
              description:
                "Your application calls an endpoint that performs an asynchronous operation, such as domain registration, mailbox provisioning, or another background operation.",
            },
            {
              id: "receive-action-id",
              title: "2. Receive the actionId",
              description:
                "CMR accepts the request and returns an actionId in the response.",
            },
            {
              id: "store-action-id",
              title: "3. Store the actionId",
              description:
                "Save the actionId with the operation or request record in your application so it can be matched later.",
            },
            {
              id: "background-processing",
              title: "4. CMR processes the operation",
              description:
                "CMR continues processing the requested operation in the background.",
            },
            {
              id: "receive-webhook",
              title: "5. Receive the webhook",
              description:
                "CMR sends the resulting event to your configured webhook endpoint.",
            },
            {
              id: "match-action-id",
              title: "6. Match the webhook to the original request",
              description:
                "Read the actionId from the webhook payload and match it against the actionId stored for the original API request.",
            },
          ],
        },
      ],
    },

    {
      id: "request-example",
      title: "The API response contains actionId",
      description:
        "Store the identifier returned by the asynchronous API request.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR's asynchronous operation response includes an actionId. The Overview documentation uses the following structure as an example.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "status": 200,\n  "data": {\n    "actionId": "ACT_7a078272-0fa7-4db4-a85b-c78697dacea1"\n  },\n  "actionId": "ACT_7a078272-0fa7-4db4-a85b-c78697dacea1"\n}',
        },
        {
          type: "paragraph",
          content:
            "The important value for correlation is the actionId. Your application should retain it until the asynchronous operation reaches its final state.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Persist the actionId",
          content:
            "Do not rely only on temporary in-memory state for actionId values. Persist the identifier with the operation record if the result needs to be tracked after the original API request has completed.",
        },
      ],
    },

    {
      id: "webhook-example",
      title: "The webhook contains the same actionId",
      description:
        "Use the actionId in the webhook payload to identify the original asynchronous request.",
      content: [
        {
          type: "paragraph",
          content:
            "When the asynchronous operation finishes, CMR sends a webhook containing the actionId associated with the original request.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "event": "domain.order.success",\n  "data": {\n    "actionId": "ACT_7a078272-0fa7-4db4-a85b-c78697dacea1",\n    "domains": [\n      {\n        "domain": "mycoldoutreach.com",\n        "status": "ACTIVE"\n      }\n    ]\n  }\n}',
        },
        {
          type: "paragraph",
          content:
            "The actionId in the webhook matches the actionId returned when the original asynchronous request was accepted.",
        },
        {
          type: "callout",
          variant: "info",
          title: "This is the correlation point",
          content:
            "Use the matching actionId to connect the webhook result to the operation record created when the API request was submitted.",
        },
      ],
    },

    {
      id: "correlation-workflow",
      title: "How to correlate an operation in your application",
      description:
        "A practical pattern for tracking asynchronous CMR operations.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "create-operation",
              title: "1. Create an operation record",
              description:
                "Before or immediately after submitting the asynchronous request, create a record representing the operation in your application.",
            },
            {
              id: "save-action-id",
              title: "2. Save the actionId",
              description:
                "Store the actionId returned by CMR against that operation record.",
            },
            {
              id: "mark-pending",
              title: "3. Mark the operation as pending",
              description:
                "Treat the operation as pending because the API response only confirms acceptance.",
            },
            {
              id: "receive-event",
              title: "4. Receive the webhook",
              description:
                "Your webhook endpoint receives the event when CMR reports the asynchronous result.",
            },
            {
              id: "find-operation",
              title: "5. Find the operation by actionId",
              description:
                "Read the actionId from the webhook and locate the matching operation record.",
            },
            {
              id: "update-result",
              title: "6. Update the operation",
              description:
                "Update your internal status and store the relevant result data from the webhook.",
            },
          ],
        },
      ],
    },

    {
      id: "success-and-failure",
      title: "Matching both successful and failed outcomes",
      description:
        "The same correlation approach applies whether the asynchronous operation succeeds or fails.",
      content: [
        {
          type: "paragraph",
          content:
            "Your application should not assume that an accepted asynchronous request will succeed. The eventual webhook identifies the outcome, and the actionId lets you connect that outcome to the original request.",
        },
        {
          type: "steps",
          items: [
            {
              id: "accepted",
              title: "Request accepted",
              description:
                "CMR returns an actionId and begins processing the operation.",
            },
            {
              id: "success",
              title: "Successful completion",
              description:
                "A success webhook contains the corresponding actionId and the resulting resource information.",
            },
            {
              id: "failure",
              title: "Failed completion",
              description:
                "A failure webhook can also be correlated with the original operation through its actionId.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Do not use the initial HTTP 200 as the final business status",
          content:
            "For asynchronous operations, the initial successful HTTP response means the request was accepted. Your application's final business status should be based on the resulting webhook.",
        },
      ],
    },

    {
      id: "action-id-vs-event-id",
      title: "actionId vs eventId",
      description:
        "These identifiers serve different purposes and should not be treated as interchangeable.",
      content: [
        {
          type: "heading",
          content: "actionId",
        },
        {
          type: "paragraph",
          content:
            "actionId identifies the asynchronous operation. It is used to match a webhook result back to the API request that initiated the operation.",
        },
        {
          type: "heading",
          content: "eventId",
        },
        {
          type: "paragraph",
          content:
            "eventId identifies the webhook event itself. It should be used by your webhook handler to detect and safely ignore duplicate deliveries of the same event.",
        },
        {
          type: "steps",
          items: [
            {
              id: "action-purpose",
              title: "Use actionId for correlation",
              description:
                "Match the webhook to the original asynchronous API operation.",
            },
            {
              id: "event-purpose",
              title: "Use eventId for idempotency",
              description:
                "Track webhook events that have already been processed so duplicate deliveries do not execute the same business action twice.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not use actionId as your webhook deduplication key",
          content:
            "An actionId identifies an operation, while eventId identifies a webhook event. Keep these concepts separate in your integration.",
        },
      ],
    },

    {
      id: "database-model",
      title: "A practical database model",
      description:
        "Store enough information to track an asynchronous operation from request to webhook completion.",
      content: [
        {
          type: "paragraph",
          content:
            "A simple operation record can keep the CMR actionId alongside your own internal request identifier and the current operation status.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "id": "internal_operation_123",\n  "actionId": "ACT_7a078272-0fa7-4db4-a85b-c78697dacea1",\n  "type": "domain.order",\n  "status": "PENDING",\n  "createdAt": "2026-09-24T10:30:00Z",\n  "completedAt": null\n}',
        },
        {
          type: "paragraph",
          content:
            "When the webhook arrives, find the record using actionId, update the status, store the result, and record the completion time.",
        },
      ],
    },

    {
      id: "do-not-retry",
      title: "Do not retry while waiting for the webhook",
      description:
        "An actionId means the request was accepted and is being processed.",
      content: [
        {
          type: "paragraph",
          content:
            "If CMR has already returned an actionId, do not automatically submit the same asynchronous operation again simply because the webhook has not arrived yet.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Never retry an async operation blindly",
          content:
            "CMR explicitly warns that retrying an asynchronous operation while waiting for its webhook can result in duplicate operations, including duplicate domain registrations and charges.",
        },
        {
          type: "steps",
          items: [
            {
              id: "wait",
              title: "1. Keep the original actionId",
              description:
                "Treat the original request as still in progress.",
            },
            {
              id: "inspect",
              title: "2. Investigate the webhook delivery",
              description:
                "Check your webhook endpoint, logs, signature validation, and event processing before assuming that the CMR operation failed.",
            },
            {
              id: "retry-only-failure",
              title: "3. Retry only when failure is established",
              description:
                "Only submit another operation when you have established that the original operation failed and the operation is safe to retry.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid the most common actionId correlation problems.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-one",
              title: "Treating actionId as a completion signal",
              description:
                "An actionId confirms acceptance, not successful completion.",
            },
            {
              id: "mistake-two",
              title: "Failing to persist actionId",
              description:
                "If the identifier is lost after the original API response, your application may not be able to correlate the later webhook reliably.",
            },
            {
              id: "mistake-three",
              title: "Using eventId for request correlation",
              description:
                "eventId identifies the webhook event. Use actionId to match the event to the original asynchronous request.",
            },
            {
              id: "mistake-four",
              title: "Retrying because the webhook is delayed",
              description:
                "A delayed webhook does not necessarily mean the underlying operation failed. Investigate the delivery path before submitting another request.",
            },
            {
              id: "mistake-five",
              title: "Updating the wrong operation",
              description:
                "Always match the webhook's actionId against the stored operation identifier before changing the operation status.",
            },
          ],
        },
      ],
    },

    {
      id: "recommended-pattern",
      title: "Recommended integration pattern",
      description:
        "Use actionId as the bridge between synchronous API acceptance and asynchronous completion.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "pattern-submit",
              title: "Submit",
              description:
                "Send the asynchronous API request.",
            },
            {
              id: "pattern-store",
              title: "Store",
              description:
                "Persist the returned actionId and mark the operation as pending.",
            },
            {
              id: "pattern-wait",
              title: "Wait",
              description:
                "Allow CMR to process the operation in the background.",
            },
            {
              id: "pattern-receive",
              title: "Receive",
              description:
                "Accept the webhook at your configured endpoint.",
            },
            {
              id: "pattern-correlate",
              title: "Correlate",
              description:
                "Match the webhook's actionId with the stored operation.",
            },
            {
              id: "pattern-update",
              title: "Update",
              description:
                "Apply the resulting status and data to your application.",
            },
            {
              id: "pattern-deduplicate",
              title: "Deduplicate",
              description:
                "Use eventId separately to prevent duplicate webhook processing.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with webhook configuration, event reference, and troubleshooting.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "setup-webhook",
              title: "Setting Up Your Webhook Endpoint",
              description:
                "Configure your webhook endpoint and safely process CMR deliveries.",
              href: "/concepts/webhooks-events/setup-webhook",
            },
            {
              id: "event-reference",
              title: "Event Reference by Category",
              description:
                "Explore CMR events across domains, mailboxes, subscriptions, DNS, pre-warmup, and warmup.",
              href: "/concepts/webhooks-events/event-reference",
            },
            {
              id: "async-retries",
              title: "Why You Should Never Retry an Async Call Blindly",
              description:
                "Understand safe retry behavior for asynchronous CMR operations.",
              href: "/concepts/webhooks-events/async-retries",
            },
            {
              id: "debugging-events",
              title: "Debugging Missed or Duplicate Events",
              description:
                "Troubleshoot webhook delivery and duplicate event processing.",
              href: "/concepts/webhooks-events/debugging-events",
            },
          ],
        },
      ],
    },
  ],
};