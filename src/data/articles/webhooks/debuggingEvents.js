export const debuggingEventsArticle = {
  id: "debugging-events",
  slug: "/concepts/webhooks-events/debugging-events",
  category: {
    id: "webhooks-events",
    label: "Webhooks & Events",
    slug: "/concepts/webhooks-events",
  },
  title: "Debugging Missed or Duplicate Events",
  description:
    "Troubleshoot missing, delayed, failed, or duplicate webhook deliveries using actionId, eventId, delivery logs, retry behavior, and idempotent processing.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Webhook problems usually fall into one of two categories: an event was generated but your application did not successfully process it, or the same event was delivered or processed more than once. Debugging becomes much easier when you separate the CMR operation from webhook delivery, correlate asynchronous operations using actionId, and make webhook processing idempotent.",

  sections: [
    {
      id: "start-with-operation",
      title: "Start with the original operation",
      description:
        "Before debugging the webhook itself, establish what happened to the CMR operation that produced the event.",
      content: [
        {
          type: "paragraph",
          content:
            "For asynchronous operations, the API can return an actionId before the operation has completed. The actionId confirms that the request was accepted; it does not by itself confirm that the operation succeeded.",
        },
        {
          type: "steps",
          items: [
            {
              id: "find-action-id",
              title: "1. Find the actionId",
              description:
                "Locate the actionId returned when the asynchronous request was submitted.",
            },
            {
              id: "find-operation",
              title: "2. Identify the operation",
              description:
                "Determine which CMR operation produced the actionId, such as domain registration, mailbox provisioning, or another asynchronous workflow.",
            },
            {
              id: "check-result",
              title: "3. Look for the corresponding event",
              description:
                "Search your webhook records for an event containing the same actionId.",
            },
            {
              id: "compare-state",
              title: "4. Compare the operation and webhook state",
              description:
                "Determine whether the operation is still pending, completed successfully, failed, or whether the webhook delivery is the part that requires investigation.",
            },
          ],
        },
      ],
    },

    {
      id: "missed-event",
      title: "When an event appears to be missing",
      description:
        "A missing event in your application does not necessarily mean that CMR did not generate the event.",
      content: [
        {
          type: "paragraph",
          content:
            "If an expected webhook does not appear in your application, first determine whether the problem is with the underlying operation or with webhook delivery and processing.",
        },
        {
          type: "heading",
          content: "Check your webhook endpoint",
        },
        {
          type: "paragraph",
          content:
            "Review your server logs to determine whether CMR sent a request to your webhook endpoint. Check the request timestamp, event name, actionId, and HTTP response returned by your application.",
        },
        {
          type: "heading",
          content: "Check whether your endpoint accepted the delivery",
        },
        {
          type: "paragraph",
          content:
            "Your webhook handler should acknowledge the delivery promptly. If your endpoint returns an error or does not respond successfully, the delivery may require another attempt according to CMR's webhook delivery behavior.",
        },
        {
          type: "heading",
          content: "Check application processing",
        },
        {
          type: "paragraph",
          content:
            "A webhook can reach your server successfully but still fail later in your application. Check validation, database writes, background jobs, and downstream processing separately from the initial HTTP request.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Separate delivery from processing",
          content:
            "A successful HTTP delivery only tells you that your webhook endpoint received and acknowledged the request. Your application still needs to validate, store, and process the event successfully.",
        },
      ],
    },

    {
      id: "action-id-correlation",
      title: "Use actionId to find the original request",
      description:
        "actionId is the primary correlation point between an asynchronous API request and its eventual webhook result.",
      content: [
        {
          type: "paragraph",
          content:
            "When CMR returns an actionId from an asynchronous API request, store it with your internal operation record. When the corresponding webhook arrives, use the actionId from the event to locate the original request.",
        },
        {
          type: "code",
          language: "json",
          content: `{
  "status": 200,
  "data": {
    "actionId": "ACT_7a078272-0fa7-4db4-a85b-c78697dacea1"
  },
  "actionId": "ACT_7a078272-0fa7-4db4-a85b-c78697dacea1"
}`,
        },
        {
          type: "paragraph",
          content:
            "The corresponding webhook can contain the same actionId. This lets your application connect the final asynchronous result to the request that originally created the operation.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Do not create a new operation just to obtain a new actionId",
          content:
            "If you already have an actionId and are waiting for the webhook, investigate the original operation and webhook delivery before submitting the same asynchronous operation again.",
        },
      ],
    },

    {
      id: "duplicate-events",
      title: "When the same event appears more than once",
      description:
        "Duplicate webhook deliveries should not result in duplicate business actions.",
      content: [
        {
          type: "paragraph",
          content:
            "Your webhook endpoint should be designed to handle the possibility of receiving the same event more than once. A duplicate delivery does not necessarily represent a second CMR operation.",
        },
        {
          type: "steps",
          items: [
            {
              id: "receive-event",
              title: "1. Receive the webhook",
              description:
                "Your endpoint receives an event from CMR.",
            },
            {
              id: "identify-event",
              title: "2. Identify the event",
              description:
                "Use the event's eventId to determine whether your application has already processed that event.",
            },
            {
              id: "check-processed",
              title: "3. Check your idempotency record",
              description:
                "Look up the eventId in the records used by your webhook processor.",
            },
            {
              id: "skip-duplicate",
              title: "4. Ignore already-processed events",
              description:
                "If the event has already been processed successfully, do not execute the same business action again.",
            },
            {
              id: "process-new",
              title: "5. Process new events",
              description:
                "If the event has not been processed, validate it, perform the required business operation, and record the event as processed.",
            },
          ],
        },
      ],
    },

    {
      id: "event-id-vs-action-id",
      title: "actionId and eventId solve different problems",
      description:
        "Keep operation correlation and webhook deduplication separate.",
      content: [
        {
          type: "heading",
          content: "actionId",
        },
        {
          type: "paragraph",
          content:
            "Use actionId to connect an asynchronous API request with the eventual result of that operation.",
        },
        {
          type: "heading",
          content: "eventId",
        },
        {
          type: "paragraph",
          content:
            "Use eventId to identify a webhook event and prevent the same event from being processed repeatedly.",
        },
        {
          type: "steps",
          items: [
            {
              id: "operation-correlation",
              title: "Operation correlation",
              description:
                "API request → actionId → webhook result.",
            },
            {
              id: "event-deduplication",
              title: "Event deduplication",
              description:
                "Webhook delivery → eventId → idempotent processing.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Store both when your integration needs them",
          content:
            "actionId helps you understand which asynchronous operation produced an event. eventId helps you determine whether that particular event has already been processed.",
        },
      ],
    },

    {
      id: "webhook-retries",
      title: "Understand webhook retries",
      description:
        "A repeated webhook delivery can be caused by delivery failure rather than a second API operation.",
      content: [
        {
          type: "paragraph",
          content:
            "Webhook delivery and API operation retries are separate concerns. If CMR cannot successfully deliver or receive an acknowledgement from your webhook endpoint, the same event may be delivered again.",
        },
        {
          type: "paragraph",
          content:
            "Your application should therefore assume that webhook delivery can be repeated and should make event processing idempotent.",
        },
        {
          type: "steps",
          items: [
            {
              id: "delivery-failure",
              title: "Delivery fails",
              description:
                "Your endpoint does not successfully acknowledge the webhook.",
            },
            {
              id: "delivery-retry",
              title: "CMR attempts delivery again",
              description:
                "The same event may be delivered again.",
            },
            {
              id: "deduplicate",
              title: "Your application identifies the event",
              description:
                "Use eventId to determine whether the event has already been processed.",
            },
            {
              id: "safe-processing",
              title: "Your application processes it safely",
              description:
                "Only perform the business action once, even if the delivery is repeated.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Never treat every webhook delivery as a new operation",
          content:
            "A repeated event delivery does not mean that you should create another domain, mailbox, subscription, or other resource.",
        },
      ],
    },

    {
      id: "signature-validation",
      title: "Check webhook signature validation",
      description:
        "Authentication and signature validation problems can make an otherwise valid webhook appear to be missing.",
      content: [
        {
          type: "paragraph",
          content:
            "If your endpoint receives webhook requests but rejects them during authentication or signature validation, the event may never reach your business logic.",
        },
        {
          type: "steps",
          items: [
            {
              id: "check-signature",
              title: "1. Check the signature headers",
              description:
                "Verify that your webhook handler is reading the CMR signature information from the incoming request.",
            },
            {
              id: "check-timestamp",
              title: "2. Check the timestamp",
              description:
                "Make sure timestamp validation is handled correctly when validating webhook authenticity.",
            },
            {
              id: "check-secret",
              title: "3. Check the configured secret",
              description:
                "Confirm that your application is using the expected webhook signing secret.",
            },
            {
              id: "check-raw-body",
              title: "4. Check request-body handling",
              description:
                "If your signature calculation depends on the original request body, make sure your framework has not modified the payload before verification.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Log validation failures",
          content:
            "Record enough diagnostic information to identify signature-validation failures without logging sensitive secrets or credentials.",
        },
      ],
    },

    {
      id: "endpoint-response",
      title: "Check your webhook HTTP response",
      description:
        "The response from your webhook endpoint is an important part of webhook delivery debugging.",
      content: [
        {
          type: "paragraph",
          content:
            "A webhook handler should acknowledge the request promptly. Long-running application work should not block the initial webhook response.",
        },
        {
          type: "steps",
          items: [
            {
              id: "receive",
              title: "Receive the event",
              description:
                "Accept the incoming webhook request.",
            },
            {
              id: "validate",
              title: "Validate the request",
              description:
                "Perform the required authentication and payload validation.",
            },
            {
              id: "acknowledge",
              title: "Acknowledge promptly",
              description:
                "Return a successful HTTP response without waiting for unrelated long-running processing.",
            },
            {
              id: "process",
              title: "Process asynchronously",
              description:
                "Queue or otherwise process heavier business logic separately from the initial webhook acknowledgement.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "A fast acknowledgement reduces delivery problems",
          content:
            "Your webhook endpoint should acknowledge a valid delivery quickly and handle longer processing separately.",
        },
      ],
    },

    {
      id: "debugging-checklist",
      title: "Webhook debugging checklist",
      description:
        "Use this checklist when an expected event is missing, delayed, or duplicated.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "check-one",
              title: "1. Find the original actionId",
              description:
                "Confirm that the asynchronous API request was accepted and record its actionId.",
            },
            {
              id: "check-two",
              title: "2. Search webhook logs",
              description:
                "Look for an event containing the same actionId.",
            },
            {
              id: "check-three",
              title: "3. Check eventId",
              description:
                "For a repeated delivery, determine whether the eventId has already been processed.",
            },
            {
              id: "check-four",
              title: "4. Check HTTP responses",
              description:
                "Review the status code returned by your webhook endpoint.",
            },
            {
              id: "check-five",
              title: "5. Check signature validation",
              description:
                "Look for authentication or signature-validation failures.",
            },
            {
              id: "check-six",
              title: "6. Check application processing",
              description:
                "Determine whether the event reached your application but failed during database or business-logic processing.",
            },
            {
              id: "check-seven",
              title: "7. Check for duplicate processing",
              description:
                "Review your idempotency records before repeating any downstream action.",
            },
            {
              id: "check-eight",
              title: "8. Do not blindly retry the original API request",
              description:
                "If the original asynchronous operation was accepted, investigate it before creating another operation.",
            },
          ],
        },
      ],
    },

    {
      id: "recommended-event-record",
      title: "What to record for each webhook",
      description:
        "Keep enough information to reconstruct what happened during a webhook incident.",
      content: [
        {
          type: "paragraph",
          content:
            "A useful webhook processing record should let you answer three questions: which CMR operation produced the event, which event was delivered, and whether your application already processed it.",
        },
        {
          type: "steps",
          items: [
            {
              id: "record-action",
              title: "actionId",
              description:
                "The identifier connecting the webhook to the original asynchronous operation.",
            },
            {
              id: "record-event",
              title: "eventId",
              description:
                "The identifier used to recognize the webhook event and support idempotent processing.",
            },
            {
              id: "record-event-name",
              title: "Event name",
              description:
                "The CMR event type received by your webhook endpoint.",
            },
            {
              id: "record-received",
              title: "Received timestamp",
              description:
                "When your webhook endpoint received the event.",
            },
            {
              id: "record-response",
              title: "HTTP response",
              description:
                "The response status returned by your webhook endpoint.",
            },
            {
              id: "record-processing",
              title: "Processing status",
              description:
                "Whether your application validated, processed, or rejected the event.",
            },
          ],
        },
      ],
    },

    {
      id: "do-not-log-secrets",
      title: "Do not expose sensitive mailbox data in logs",
      description:
        "Webhook debugging should provide enough information to diagnose failures without exposing credentials or secrets.",
      content: [
        {
          type: "paragraph",
          content:
            "Some CMR mailbox-related events can contain mailbox details and sensitive information. Your debugging logs should therefore capture identifiers and processing metadata without unnecessarily storing passwords, credentials, tokens, or other secrets.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Log identifiers, not secrets",
          content:
            "Use actionId, eventId, event name, timestamps, HTTP status, and processing status for troubleshooting. Avoid logging sensitive credentials or secret values.",
        },
      ],
    },

    {
      id: "when-to-retry",
      title: "When should you retry?",
      description:
        "Separate webhook delivery recovery from resubmitting the original CMR operation.",
      content: [
        {
          type: "paragraph",
          content:
            "If webhook delivery fails, the problem is generally in the webhook delivery or processing path. Fix that path and allow the event delivery mechanism to handle the event rather than automatically creating another CMR operation.",
        },
        {
          type: "paragraph",
          content:
            "If the original CMR operation itself has been established as failed, a new API request may be appropriate depending on the operation and its documented behavior.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "These are different retry decisions",
          content:
            "Retrying webhook processing is not the same as retrying the original asynchronous API operation. Do not use one as a substitute for the other.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with webhook configuration, event correlation, and asynchronous operation handling.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "setup-webhook",
              title: "Setting Up Your Webhook Endpoint",
              description:
                "Configure your webhook endpoint and establish reliable event processing.",
              href: "/concepts/webhooks-events/setup-webhook",
            },
            {
              id: "action-id",
              title: "Matching Webhooks Back to Requests via actionId",
              description:
                "Learn how to correlate asynchronous API requests with their webhook results.",
              href: "/concepts/webhooks-events/action-id",
            },
            {
              id: "event-reference",
              title: "Event Reference by Category",
              description:
                "Explore CMR webhook events across domain, mailbox, subscription, DNS, and warmup workflows.",
              href: "/concepts/webhooks-events/event-reference",
            },
            {
              id: "async-retries",
              title: "Why You Should Never Retry an Async Call Blindly",
              description:
                "Understand why a missing webhook does not automatically mean an asynchronous operation failed.",
              href: "/concepts/webhooks-events/async-retries",
            },
          ],
        },
      ],
    },
  ],
};