export const setupWebhookArticle = {
  id: "setup-webhook",
  slug: "/concepts/webhooks-events/setup-webhook",
  category: {
    id: "webhooks-events",
    label: "Webhooks & Events",
    slug: "/concepts/webhooks-events",
  },
  title: "Setting Up Your Webhook Endpoint",
  description:
    "Learn how to configure a webhook endpoint, verify CMR webhook signatures, acknowledge deliveries correctly, and make webhook processing idempotent.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "CMR uses webhooks to deliver the final results of asynchronous operations and report important lifecycle changes. Your webhook endpoint should be publicly reachable, accept POST requests with JSON payloads, verify the CMR signature before trusting the request, acknowledge valid deliveries with HTTP 200, and process longer-running work asynchronously. A reliable webhook integration also stores eventId so repeated deliveries can be handled safely.",

  sections: [
    {
      id: "how-webhooks-work",
      title: "How CMR webhooks work",
      description:
        "Understand where webhooks fit into an asynchronous CMR workflow.",
      content: [
        {
          type: "paragraph",
          content:
            "Some CMR operations are processed in the background. The initial API request can return an actionId immediately while CMR continues processing the operation. Once the operation reaches its final state, CMR sends the corresponding result to your configured webhook URL.",
        },
        {
          type: "steps",
          items: [
            {
              id: "submit-request",
              title: "1. Submit the API request",
              description:
                "Your application sends an asynchronous request to CMR.",
            },
            {
              id: "receive-action",
              title: "2. Receive the actionId",
              description:
                "CMR accepts the operation and returns an actionId. This confirms acceptance, not completion.",
            },
            {
              id: "background-processing",
              title: "3. CMR processes the operation",
              description:
                "The operation continues in the background.",
            },
            {
              id: "webhook-delivery",
              title: "4. CMR sends the webhook",
              description:
                "CMR POSTs the final result to your configured webhook endpoint.",
            },
            {
              id: "process-result",
              title: "5. Your application processes the event",
              description:
                "Validate the webhook, acknowledge it, correlate it with the original operation, and update your application state.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The initial HTTP 200 is not the final result",
          content:
            "For asynchronous operations, the API response indicates that CMR accepted the request. Your application should use the resulting webhook to determine the final success or failure state.",
        },
      ],
    },

    {
      id: "create-endpoint",
      title: "Create your webhook endpoint",
      description:
        "Create a publicly reachable POST endpoint that CMR can call.",
      content: [
        {
          type: "paragraph",
          content:
            "Create an HTTPS POST endpoint on your server that accepts webhook requests from CMR. The endpoint must be publicly reachable so CMR can deliver events to it.",
        },
        {
          type: "code",
          language: "http",
          content: `POST https://your-domain.com/webhooks`,
        },
        {
          type: "steps",
          items: [
            {
              id: "endpoint-post",
              title: "Accept POST requests",
              description:
                "Configure the route to accept incoming HTTP POST requests.",
            },
            {
              id: "endpoint-json",
              title: "Accept JSON payloads",
              description:
                "Parse the webhook request body as JSON.",
            },
            {
              id: "endpoint-public",
              title: "Make the endpoint publicly reachable",
              description:
                "CMR must be able to reach the endpoint from its webhook delivery infrastructure.",
            },
            {
              id: "endpoint-https",
              title: "Use HTTPS",
              description:
                "Expose the production webhook endpoint over a secure HTTPS connection.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "A localhost URL cannot receive production webhooks directly",
          content:
            "If you are testing locally, use a publicly reachable development endpoint such as an appropriate tunneling service, or use the CMR Sandbox environment for webhook testing.",
        },
      ],
    },

    {
      id: "configure-dashboard",
      title: "Configure the webhook in CMR",
      description:
        "Register your endpoint and choose which events CMR should send.",
      content: [
        {
          type: "paragraph",
          content:
            "After creating your endpoint, configure it in the CMR admin dashboard.",
        },
        {
          type: "steps",
          items: [
            {
              id: "dashboard-settings",
              title: "1. Open Settings",
              description:
                "Sign in to the CMR admin dashboard and open Settings.",
            },
            {
              id: "dashboard-webhooks",
              title: "2. Open Webhooks",
              description:
                "Go to Settings → Webhooks.",
            },
            {
              id: "webhook-url",
              title: "3. Enter your webhook URL",
              description:
                "Add the publicly reachable URL of the POST endpoint you created.",
            },
            {
              id: "select-events",
              title: "4. Select the events to receive",
              description:
                "Choose the CMR events your integration needs to process.",
            },
            {
              id: "copy-api-key",
              title: "5. Copy the API key",
              description:
                "Use the API key provided for webhook signature verification.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Subscribe only to events your application needs",
          content:
            "Select the event categories that correspond to the workflows your application actually uses. This keeps webhook processing focused and makes debugging easier.",
        },
      ],
    },

    {
      id: "webhook-headers",
      title: "Understand the security headers",
      description:
        "CMR sends two headers that are used to validate webhook authenticity and protect against replayed requests.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "signature-header",
              title: "cmr-x-signature",
              description:
                "Contains the HMAC-SHA256 signature generated for the webhook payload.",
            },
            {
              id: "timestamp-header",
              title: "cmr-x-timestamp",
              description:
                "Contains the Unix timestamp representing when CMR sent the webhook.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "Your application should verify both values before trusting and processing the webhook.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not skip signature verification",
          content:
            "Signature verification helps confirm that the webhook originated from CMR and that the payload was not tampered with.",
        },
      ],
    },

    {
      id: "verify-signature",
      title: "Verify the webhook signature",
      description:
        "Validate the HMAC-SHA256 signature before processing the webhook payload.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR signs webhook payloads using HMAC-SHA256. Your server should calculate the expected signature using the configured API key and compare it with the cmr-x-signature header received with the request.",
        },
        {
          type: "steps",
          items: [
            {
              id: "read-body",
              title: "1. Read the webhook payload",
              description:
                "Obtain the request body used for signature verification.",
            },
            {
              id: "read-signature",
              title: "2. Read cmr-x-signature",
              description:
                "Extract the signature supplied by CMR from the request headers.",
            },
            {
              id: "read-timestamp",
              title: "3. Read cmr-x-timestamp",
              description:
                "Extract the Unix timestamp supplied with the webhook.",
            },
            {
              id: "calculate",
              title: "4. Calculate the expected signature",
              description:
                "Use the documented CMR signature verification process with your API key.",
            },
            {
              id: "compare",
              title: "5. Compare the signatures",
              description:
                "Only continue processing when the calculated signature matches the received signature.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Validate before processing",
          content:
            "Do not update your database, trigger downstream jobs, or perform other business actions until the webhook has passed signature validation.",
        },
      ],
    },

    {
      id: "replay-protection",
      title: "Add replay protection",
      description:
        "Use cmr-x-timestamp to reject old webhook requests.",
      content: [
        {
          type: "paragraph",
          content:
            "The cmr-x-timestamp header contains the Unix timestamp at which CMR sent the webhook. CMR documents a five-minute replay-protection window.",
        },
        {
          type: "steps",
          items: [
            {
              id: "timestamp-read",
              title: "1. Read the timestamp",
              description:
                "Extract cmr-x-timestamp from the incoming webhook request.",
            },
            {
              id: "timestamp-current",
              title: "2. Compare it with the current time",
              description:
                "Calculate the age of the webhook request.",
            },
            {
              id: "timestamp-window",
              title: "3. Apply the five-minute window",
              description:
                "Reject requests that are older than five minutes.",
            },
            {
              id: "timestamp-process",
              title: "4. Continue only when valid",
              description:
                "Process the webhook after the timestamp and signature checks succeed.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Replay protection is separate from event deduplication",
          content:
            "Timestamp validation protects against old requests being replayed. eventId-based idempotency protects against the same valid event being delivered or processed more than once.",
        },
      ],
    },

    {
      id: "acknowledge-quickly",
      title: "Respond with HTTP 200 quickly",
      description:
        "Acknowledge the webhook before performing long-running application work.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR expects your webhook endpoint to acknowledge a valid delivery with HTTP 200. The endpoint should respond promptly rather than waiting for long-running business logic to finish.",
        },
        {
          type: "steps",
          items: [
            {
              id: "receive",
              title: "1. Receive the webhook",
              description:
                "Accept the incoming request.",
            },
            {
              id: "validate",
              title: "2. Validate it",
              description:
                "Verify the signature and timestamp before trusting the event.",
            },
            {
              id: "acknowledge",
              title: "3. Return HTTP 200",
              description:
                "Acknowledge successful receipt promptly.",
            },
            {
              id: "queue",
              title: "4. Process longer work separately",
              description:
                "Queue or otherwise handle time-consuming application logic asynchronously.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Do not block the webhook request",
          content:
            "If processing requires database-heavy work, external API calls, exports, or other long-running operations, acknowledge the webhook first and process the work separately.",
        },
      ],
    },

    {
      id: "idempotency",
      title: "Implement idempotency with eventId",
      description:
        "Prevent duplicate webhook deliveries from triggering duplicate business actions.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR can retry webhook deliveries when your endpoint does not successfully acknowledge the event. Your application should therefore assume that the same event can arrive more than once.",
        },
        {
          type: "steps",
          items: [
            {
              id: "receive-event",
              title: "1. Receive the event",
              description:
                "Accept and validate the webhook request.",
            },
            {
              id: "read-event-id",
              title: "2. Read eventId",
              description:
                "Extract the eventId from the webhook payload.",
            },
            {
              id: "lookup-event",
              title: "3. Check whether it was processed",
              description:
                "Look up the eventId in your idempotency or webhook-processing store.",
            },
            {
              id: "skip-duplicate",
              title: "4. Skip an already-processed event",
              description:
                "If the eventId has already been successfully processed, do not repeat the business operation.",
            },
            {
              id: "process-new",
              title: "5. Process new events",
              description:
                "Run your business logic for an eventId that has not yet been processed.",
            },
            {
              id: "store-event",
              title: "6. Record the event",
              description:
                "Persist the eventId and processing result so future duplicate deliveries can be identified.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Duplicate webhook delivery does not mean duplicate CMR operation",
          content:
            "A repeated event can be a webhook delivery retry. Use eventId to distinguish duplicate delivery from a genuinely separate operation.",
        },
      ],
    },

    {
      id: "retry-policy",
      title: "Understand CMR's webhook retry policy",
      description:
        "Know what happens when your webhook endpoint does not return a successful response.",
      content: [
        {
          type: "paragraph",
          content:
            "According to the CMR documentation, if your webhook endpoint returns a non-2xx response, CMR automatically retries the delivery.",
        },
        {
          type: "steps",
          items: [
            {
              id: "attempt-one",
              title: "Attempt 1",
              description:
                "Immediate retry behavior begins when the delivery requires another attempt.",
            },
            {
              id: "attempt-two",
              title: "Attempt 2",
              description:
                "The next documented attempt occurs after 30 seconds.",
            },
            {
              id: "attempt-three",
              title: "Attempt 3",
              description:
                "The final documented automatic attempt occurs after 5 minutes.",
            },
            {
              id: "failed-delivery",
              title: "After three attempts",
              description:
                "The webhook is marked as failed. CMR documents that it can then be retried manually from the dashboard.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Design for repeated delivery",
          content:
            "Because webhook deliveries can be retried, your handler must be idempotent. Never assume that receiving an event means it will only ever be delivered once.",
        },
      ],
    },

    {
      id: "local-development",
      title: "Testing webhooks during development",
      description:
        "Use a publicly reachable endpoint or the CMR Sandbox when developing locally.",
      content: [
        {
          type: "paragraph",
          content:
            "A webhook service running only on localhost cannot receive production CMR webhook requests directly. For local development, expose your endpoint through a suitable public tunnel or use CMR's Sandbox environment.",
        },
        {
          type: "steps",
          items: [
            {
              id: "local-endpoint",
              title: "1. Create your local webhook route",
              description:
                "Build and test the POST endpoint in your local application.",
            },
            {
              id: "public-url",
              title: "2. Expose it publicly",
              description:
                "Use a development tunneling service when you need CMR to reach your local server.",
            },
            {
              id: "configure-test",
              title: "3. Configure the webhook destination",
              description:
                "Register the reachable URL in the appropriate CMR webhook configuration.",
            },
            {
              id: "sandbox",
              title: "4. Consider Sandbox for integration testing",
              description:
                "CMR Sandbox provides isolated test data and webhook behavior without real domain registrations or billing.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Production and Sandbox webhook destinations are separate",
          content:
            "CMR documents separate webhook destinations for production and Sandbox. Sandbox events do not arrive at your production webhook receiver.",
        },
      ],
    },

    {
      id: "production-checklist",
      title: "Production webhook checklist",
      description:
        "Verify the endpoint before relying on it for customer operations.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "check-public",
              title: "Publicly reachable",
              description:
                "CMR can reach the endpoint from outside your infrastructure.",
            },
            {
              id: "check-json",
              title: "JSON supported",
              description:
                "The endpoint accepts the JSON webhook payload.",
            },
            {
              id: "check-signature",
              title: "Signature verified",
              description:
                "cmr-x-signature is validated before the event is trusted.",
            },
            {
              id: "check-timestamp",
              title: "Timestamp verified",
              description:
                "cmr-x-timestamp is checked and requests older than five minutes are rejected.",
            },
            {
              id: "check-200",
              title: "HTTP 200 returned promptly",
              description:
                "Valid webhook deliveries are acknowledged without waiting for long-running processing.",
            },
            {
              id: "check-idempotency",
              title: "eventId stored",
              description:
                "Duplicate webhook deliveries can be identified and skipped safely.",
            },
            {
              id: "check-logging",
              title: "Delivery logging enabled",
              description:
                "Your application records enough information to troubleshoot delivery and processing failures.",
            },
            {
              id: "check-secrets",
              title: "Sensitive data protected",
              description:
                "Webhook payloads and credentials are not unnecessarily exposed in logs or client responses.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common webhook setup mistakes",
      description:
        "Avoid the issues that most often cause missed or repeated events.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-localhost",
              title: "Using localhost as the production webhook URL",
              description:
                "CMR cannot reach an endpoint that is only available on your local machine.",
            },
            {
              id: "mistake-no-signature",
              title: "Skipping signature verification",
              description:
                "Never trust the webhook payload before verifying its authenticity.",
            },
            {
              id: "mistake-no-timestamp",
              title: "Skipping replay protection",
              description:
                "The documented cmr-x-timestamp check helps reject old webhook requests.",
            },
            {
              id: "mistake-slow-response",
              title: "Performing all business logic before returning 200",
              description:
                "Long-running processing can prevent timely acknowledgement and cause delivery retries.",
            },
            {
              id: "mistake-no-idempotency",
              title: "Processing every delivery as a new event",
              description:
                "Webhook retries can cause duplicate business actions if eventId is not used for deduplication.",
            },
            {
              id: "mistake-async-confusion",
              title: "Retrying the original API operation because a webhook is delayed",
              description:
                "An asynchronous operation can still be processing. Correlate the original actionId and investigate webhook delivery before submitting another operation.",
            },
          ],
        },
      ],
    },

    {
      id: "recommended-flow",
      title: "Recommended webhook processing flow",
      description:
        "A practical sequence for a production webhook handler.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "flow-receive",
              title: "1. Receive",
              description:
                "Accept the incoming POST request.",
            },
            {
              id: "flow-verify",
              title: "2. Verify",
              description:
                "Validate cmr-x-signature and cmr-x-timestamp.",
            },
            {
              id: "flow-identify",
              title: "3. Identify",
              description:
                "Read event, eventId, actionId, and the event-specific data.",
            },
            {
              id: "flow-dedupe",
              title: "4. Deduplicate",
              description:
                "Check whether eventId has already been processed.",
            },
            {
              id: "flow-ack",
              title: "5. Acknowledge",
              description:
                "Return HTTP 200 promptly for a valid delivery.",
            },
            {
              id: "flow-process",
              title: "6. Process",
              description:
                "Run the required business logic asynchronously when it is long-running.",
            },
            {
              id: "flow-record",
              title: "7. Record",
              description:
                "Persist the event and processing result for future correlation and troubleshooting.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with actionId correlation, event reference, and webhook troubleshooting.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "action-id",
              title: "Matching Webhooks Back to Requests via actionId",
              description:
                "Learn how to connect an asynchronous API request with its eventual webhook result.",
              href: "/concepts/webhooks-events/action-id",
            },
            {
              id: "event-reference",
              title: "Event Reference by Category",
              description:
                "Explore CMR webhook events across domains, mailboxes, subscriptions, DNS, and warmup.",
              href: "/concepts/webhooks-events/event-reference",
            },
            {
              id: "async-retries",
              title: "Why You Should Never Retry an Async Call Blindly",
              description:
                "Understand why a delayed webhook does not automatically mean the original operation failed.",
              href: "/concepts/webhooks-events/async-retries",
            },
            {
              id: "debugging-events",
              title: "Debugging Missed or Duplicate Events",
              description:
                "Troubleshoot missed, delayed, failed, and duplicate webhook deliveries.",
              href: "/concepts/webhooks-events/debugging-events",
            },
          ],
        },
      ],
    },
  ],
};