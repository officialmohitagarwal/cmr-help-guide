export const webhooksCategory = {
  id: "webhooks-events",
  label: "Webhooks & Events",
  slug: "/concepts/webhooks-events",
  title: "Webhooks & Events",
  description:
    "Learn how CMR reports asynchronous operations through webhooks, how to correlate events with API requests, handle retries safely, and process lifecycle events reliably.",

  articles: [
    {
      id: "setup-webhook",
      title: "Setting Up Your Webhook Endpoint",
      slug: "/concepts/webhooks-events/setup-webhook",
      description:
        "Learn how to configure a webhook endpoint, verify CMR webhook signatures, acknowledge deliveries correctly, and make webhook processing idempotent.",
    },
    {
      id: "action-id",
      title: "Matching Webhooks Back to Requests via actionId",
      slug: "/concepts/webhooks-events/action-id",
      description:
        "Understand how actionId connects asynchronous API requests with their eventual webhook results and how to track operations reliably.",
    },
    {
      id: "event-reference",
      title: "Event Reference by Category",
      slug: "/concepts/webhooks-events/event-reference",
      description:
        "Explore CMR webhook events by lifecycle category, including domain, mailbox, subscription, pre-warmup, DNS, and mailbox warmup events.",
    },
    {
      id: "async-retries",
      title: "Why You Should Never Retry an Async Call Blindly",
      slug: "/concepts/webhooks-events/async-retries",
      description:
        "Understand why an accepted asynchronous request is not the same as a completed operation and how blind retries can create duplicate operations and charges.",
    },
    {
      id: "debugging-events",
      title: "Debugging Missed or Duplicate Events",
      slug: "/concepts/webhooks-events/debugging-events",
      description:
        "Troubleshoot missing, delayed, failed, or duplicate webhook deliveries using actionId, eventId, delivery logs, retry behavior, and idempotent processing.",
    },
  ],
};