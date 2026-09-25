export const eventReferenceArticle = {
  id: "event-reference",
  slug: "/concepts/webhooks-events/event-reference",
  category: {
    id: "webhooks-events",
    label: "Webhooks & Events",
    slug: "/concepts/webhooks-events",
  },
  title: "Event Reference by Category",
  description:
    "Explore CMR webhook events by lifecycle category, including domain, mailbox, subscription, pre-warmup, DNS, and mailbox warmup events.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "CMR uses webhooks to report the results of asynchronous operations and important lifecycle changes. Events are grouped around domains, mailboxes, subscriptions, pre-warmup, mailbox warmup, and DNS-related changes. Each webhook identifies the event type and includes event-specific data. Use this reference to understand which event to listen for and what workflow it represents.",

  sections: [
    {
      id: "webhook-structure",
      title: "How CMR webhook events are structured",
      description:
        "Understand the common structure shared by CMR webhook events.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR webhook payloads contain an event identifier, a unique eventId, and a data object containing fields specific to that event.",
        },
        {
          type: "code",
          language: "json",
          content: `{
  "event": "domain.order.success",
  "eventId": "6SSHBXWQ3N3JEKHRQ763KW3D76N6",
  "data": {
    "userId": "PWM7Y25RYZ450YNM8K8FX9GK5AHX",
    "userEmail": "johndoe@company.com",
    "...event-specific fields..."
  }
}`,
        },
        {
          type: "steps",
          items: [
            {
              id: "event-field",
              title: "event",
              description:
                "Identifies the type of lifecycle event, such as domain.order.success or mailbox.created.",
            },
            {
              id: "event-id-field",
              title: "eventId",
              description:
                "Uniquely identifies the webhook event and should be stored for idempotent processing and deduplication.",
            },
            {
              id: "data-field",
              title: "data",
              description:
                "Contains the fields relevant to the specific event.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Do not assume every event has the same data fields",
          content:
            "The event name determines which fields are available in data. Validate the fields required for the specific event before processing it.",
        },
      ],
    },

    {
      id: "domain-events",
      title: "Domain Events",
      description:
        "Domain events report registration, renewal, grace-period, and expiration changes.",
      content: [
        {
          type: "paragraph",
          content:
            "Domain events cover the lifecycle of domain registration and renewal. They also indicate when a domain enters its registrar grace period or becomes expired.",
        },
        {
          type: "steps",
          items: [
            {
              id: "domain-order-success",
              title: "domain.order.success",
              description:
                "Fired when a domain is successfully registered with the registrar and added to the user's account.",
            },
            {
              id: "domain-order-failed",
              title: "domain.order.failed",
              description:
                "Fired when a domain registration fails, such as because the domain is unavailable, restricted, or the registrar returns an error.",
            },
            {
              id: "domain-renewal-success",
              title: "domain.renewal.success",
              description:
                "Fired when an existing domain registration is successfully renewed.",
            },
            {
              id: "domain-renewal-failed",
              title: "domain.renewal.failed",
              description:
                "Fired when a domain renewal attempt fails.",
            },
            {
              id: "domain-grace-period",
              title: "domain.grace_period",
              description:
                "Fired when the domain reaches its registrar expiry date and enters the documented 7-day renewal grace window.",
            },
            {
              id: "domain-expired",
              title: "domain.expired",
              description:
                "Fired when the registrar grace period closes without successful renewal and the domain becomes expired.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Domain renewal and subscription renewal are different",
          content:
            "A domain is the registration itself, while a subscription represents the mailbox service associated with that domain. Their renewal events are separate and should be handled independently.",
        },
      ],
    },

    {
      id: "domain-lifecycle",
      title: "Domain event flow",
      description:
        "See how the main domain lifecycle events relate to one another.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "domain-registration",
              title: "1. Registration",
              description:
                "A new domain order results in either domain.order.success or domain.order.failed.",
            },
            {
              id: "domain-renewal",
              title: "2. Renewal",
              description:
                "As the registration approaches expiry, renewal can produce domain.renewal.success or domain.renewal.failed.",
            },
            {
              id: "domain-grace",
              title: "3. Grace period",
              description:
                "If the domain reaches registrar expiry without renewal, domain.grace_period indicates that the documented renewal grace window has started.",
            },
            {
              id: "domain-expiration",
              title: "4. Expiration",
              description:
                "If the grace period closes without renewal, domain.expired indicates that the registration is no longer recoverable through the API.",
            },
          ],
        },
      ],
    },

    {
      id: "mailbox-events",
      title: "Mailbox Events",
      description:
        "Mailbox events report mailbox order processing, individual mailbox creation, updates, and OAuth export completion.",
      content: [
        {
          type: "paragraph",
          content:
            "Mailbox events represent different stages of the mailbox lifecycle. An order-level event indicates whether provisioning was submitted successfully, while mailbox.created reports each individual mailbox becoming available.",
        },
        {
          type: "steps",
          items: [
            {
              id: "mailbox-order-success",
              title: "mailbox.order.success",
              description:
                "Fired when a mailbox provisioning order is successfully submitted to the Google Workspace or Microsoft 365 provider and confirmed as processing.",
            },
            {
              id: "mailbox-order-failed",
              title: "mailbox.order.failed",
              description:
                "Fired when the mailbox provisioning order fails.",
            },
            {
              id: "mailbox-created",
              title: "mailbox.created",
              description:
                "Fired when an individual mailbox has been created and activated.",
            },
            {
              id: "mailbox-updated",
              title: "mailbox.updated",
              description:
                "Fired when mailbox details such as first name, last name, username, or profile picture are updated.",
            },
            {
              id: "mailbox-exported",
              title: "mailbox.exported",
              description:
                "Fired when a mailbox OAuth export to a sending platform completes successfully.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "One mailbox.created event per mailbox",
          content:
            "If an order creates five mailboxes, CMR sends five separate mailbox.created events. Use the mailbox identifiers in each event to track the individual accounts.",
        },
      ],
    },

    {
      id: "mailbox-order-flow",
      title: "Mailbox provisioning event flow",
      description:
        "Understand the order-level and mailbox-level events in a normal provisioning workflow.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "mailbox-domain-success",
              title: "1. Domain registration succeeds",
              description:
                "For a workflow that includes a new domain, domain.order.success indicates that the domain registration succeeded.",
            },
            {
              id: "mailbox-order",
              title: "2. Mailbox order is submitted",
              description:
                "CMR sends the mailbox provisioning request to the relevant workspace provider.",
            },
            {
              id: "mailbox-order-result",
              title: "3. Mailbox order result",
              description:
                "You receive either mailbox.order.success or mailbox.order.failed.",
            },
            {
              id: "individual-mailboxes",
              title: "4. Individual mailboxes are created",
              description:
                "For each successfully created mailbox, CMR sends a separate mailbox.created event.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "A failed domain order stops the normal mailbox flow",
          content:
            "In the documented normal order lifecycle, if domain registration fails, the mailbox provisioning stage is skipped and no mailbox events are sent for that workflow.",
        },
      ],
    },

    {
      id: "subscription-events",
      title: "Subscription Events",
      description:
        "Subscription events report renewal processing, payment outcomes, past-due states, expiration, cancellation, and pricing updates.",
      content: [
        {
          type: "paragraph",
          content:
            "Subscription events represent the billing lifecycle of mailbox subscriptions. Subscription renewal is separate from domain registration and renewal.",
        },
        {
          type: "steps",
          items: [
            {
              id: "subscription-renewing",
              title: "subscription.renewing",
              description:
                "Fired when subscription renewal is initiated and payment processing begins.",
            },
            {
              id: "subscription-renewal-success",
              title: "subscription.renewal.success",
              description:
                "Fired when the subscription renewal succeeds.",
            },
            {
              id: "subscription-renewal-failed",
              title: "subscription.renewal.failed",
              description:
                "Fired when subscription renewal is blocked, including documented cases involving the linked domain's status.",
            },
            {
              id: "subscription-past-due",
              title: "subscription.past_due",
              description:
                "Fired when the subscription enters a past-due state after a renewal payment failure or when the period ends without successful renewal.",
            },
            {
              id: "subscription-expired",
              title: "subscription.expired",
              description:
                "Fired when the subscription reaches expiration after the applicable grace period and the subscription is not recovered.",
            },
            {
              id: "subscription-cancelled",
              title: "subscription.cancelled",
              description:
                "Fired when the cancellation endpoint is explicitly called.",
            },
            {
              id: "subscription-updated",
              title: "subscription.updated",
              description:
                "Fired when the subscription record is updated. The documented one-plus-year pricing transition uses this event when the subscription first qualifies for the updated pricing tier.",
            },
          ],
        },
      ],
    },

    {
      id: "subscription-flow",
      title: "Subscription event flow",
      description:
        "The events you receive depend on how the renewal or cancellation workflow progresses.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "renewal-start",
              title: "1. Renewal starts",
              description:
                "subscription.renewing indicates that renewal processing has begun.",
            },
            {
              id: "renewal-success",
              title: "2. Renewal succeeds",
              description:
                "subscription.renewal.success confirms successful renewal.",
            },
            {
              id: "renewal-failure",
              title: "3. Renewal fails",
              description:
                "subscription.renewal.failed indicates a documented renewal-blocking condition, while subscription.past_due is used for a payment-related past-due state.",
            },
            {
              id: "subscription-recovery",
              title: "4. Recovery or expiration",
              description:
                "The subscription can recover when the underlying issue is resolved, or it can eventually reach subscription.expired when it is not recovered.",
            },
            {
              id: "subscription-cancellation",
              title: "5. Explicit cancellation",
              description:
                "Calling the cancellation endpoint produces subscription.cancelled.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Do not use subscription events as domain events",
          content:
            "A domain's registration lifecycle and a mailbox subscription's billing lifecycle are separate. Your integration should process their events independently.",
        },
      ],
    },

    {
      id: "prewarmup-events",
      title: "Pre-Warmup Events",
      description:
        "Pre-warmup events report assignment results for pre-warmed mailbox orders.",
      content: [
        {
          type: "paragraph",
          content:
            "Pre-warmup orders use a separate event flow because the mailboxes are assigned from an available pre-warmed pool rather than provisioned as standard new mailboxes.",
        },
        {
          type: "steps",
          items: [
            {
              id: "prewarmup-success",
              title: "prewarmup.order.success",
              description:
                "Fired when pre-warmed mailbox accounts are successfully assigned to the user.",
            },
            {
              id: "prewarmup-failed",
              title: "prewarmup.order.failed",
              description:
                "Fired when pre-warmed mailbox assignment fails.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "A single pre-warmup order can contain multiple domains. Some domains can succeed while others fail, so the same order can produce both success and failure events. Use the domain information in the event payload to determine which allocations succeeded or failed.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not assume one order has one outcome",
          content:
            "For multi-domain pre-warmup orders, process the result at the domain level rather than treating the entire order as universally successful or failed.",
        },
      ],
    },

    {
      id: "warmup-events",
      title: "Mailbox Warmup Events",
      description:
        "Warmup events report when mailbox warmup starts or is permanently removed.",
      content: [
        {
          type: "paragraph",
          content:
            "The documented mailbox warmup event lifecycle covers two specific state changes: warmup becoming active and warmup being permanently removed.",
        },
        {
          type: "steps",
          items: [
            {
              id: "warmup-started",
              title: "mailbox.warmup.started",
              description:
                "Fired when warmup is enabled and the mailbox moves to the ACTIVE warmup state.",
            },
            {
              id: "warmup-removed",
              title: "mailbox.warmup.removed",
              description:
                "Fired when warmup is permanently disabled and removed from the mailbox.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Paused is not removed",
          content:
            "The documented mailbox.warmup.removed event represents permanent warmup removal. Pausing warmup does not fire this event.",
        },
      ],
    },

    {
      id: "dns-events",
      title: "DNS Events",
      description:
        "DNS-related events can be used to track asynchronous DNS and forwarding changes.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR's broader event-driven documentation includes DNS-related updates. For example, domain forwarding changes are applied asynchronously and can be confirmed through the dns-record.updated webhook.",
        },
        {
          type: "steps",
          items: [
            {
              id: "dns-record-updated",
              title: "dns-record.updated",
              description:
                "Used to report that a DNS-related record or forwarding change has been updated.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "The documented forwarding example includes fields such as the action performed, domain name, userId, and the affected record.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Use the DNS event for asynchronous confirmation",
          content:
            "When an API response indicates that a DNS or forwarding change will happen asynchronously, use the corresponding webhook to confirm the resulting change rather than assuming that the initial HTTP response means the DNS change has already completed.",
        },
      ],
    },

    {
      id: "event-selection",
      title: "Which events should your integration handle?",
      description:
        "Subscribe to the events that correspond to the workflows your platform actually uses.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "domain-integration",
              title: "If you provision domains",
              description:
                "Handle domain.order.success and domain.order.failed, and support the domain renewal and expiry events relevant to your domain lifecycle.",
            },
            {
              id: "mailbox-integration",
              title: "If you provision mailboxes",
              description:
                "Handle mailbox.order.success, mailbox.order.failed, and mailbox.created. Add mailbox.updated when your application needs to synchronize mailbox profile changes.",
            },
            {
              id: "subscription-integration",
              title: "If you manage subscriptions",
              description:
                "Handle subscription.renewing, renewal outcomes, past-due, expiration, cancellation, and update events relevant to your billing workflow.",
            },
            {
              id: "prewarmup-integration",
              title: "If you sell pre-warmed mailboxes",
              description:
                "Handle both prewarmup.order.success and prewarmup.order.failed.",
            },
            {
              id: "warmup-integration",
              title: "If you manage mailbox warmup",
              description:
                "Handle mailbox.warmup.started and mailbox.warmup.removed.",
            },
            {
              id: "dns-integration",
              title: "If you manage asynchronous DNS changes",
              description:
                "Handle the documented DNS events required to confirm asynchronous DNS-related changes.",
            },
          ],
        },
      ],
    },

    {
      id: "success-failure-pairs",
      title: "Always handle success and failure paths",
      description:
        "An integration should not listen only for successful events.",
      content: [
        {
          type: "paragraph",
          content:
            "For asynchronous operations, the initial HTTP response can indicate that the request was accepted while the actual operation is still being processed. The final result can arrive later through a success or failure webhook.",
        },
        {
          type: "steps",
          items: [
            {
              id: "domain-pair",
              title: "Domain registration",
              description:
                "domain.order.success ↔ domain.order.failed",
            },
            {
              id: "mailbox-pair",
              title: "Mailbox provisioning",
              description:
                "mailbox.order.success ↔ mailbox.order.failed",
            },
            {
              id: "renewal-pair",
              title: "Domain renewal",
              description:
                "domain.renewal.success ↔ domain.renewal.failed",
            },
            {
              id: "subscription-pair",
              title: "Subscription renewal",
              description:
                "subscription.renewal.success ↔ subscription.renewal.failed",
            },
            {
              id: "prewarmup-pair",
              title: "Pre-warmup order",
              description:
                "prewarmup.order.success ↔ prewarmup.order.failed",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not update the final UI state from the initial HTTP 200 alone",
          content:
            "For documented asynchronous workflows, use the eventual webhook result to determine whether the operation actually succeeded or failed.",
        },
      ],
    },

    {
      id: "event-processing",
      title: "Process every event idempotently",
      description:
        "Design your webhook handler so repeated deliveries do not create repeated business actions.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents webhook retries and recommends storing eventId so duplicate deliveries can be identified. Your application should check whether an event has already been processed before executing its business logic.",
        },
        {
          type: "steps",
          items: [
            {
              id: "receive-event",
              title: "1. Receive the event",
              description:
                "Accept the webhook request and validate its authenticity.",
            },
            {
              id: "identify-event",
              title: "2. Read eventId",
              description:
                "Use eventId as the unique identifier for the webhook event.",
            },
            {
              id: "dedupe-event",
              title: "3. Check for previous processing",
              description:
                "Look up the eventId in your idempotency store.",
            },
            {
              id: "process-new-event",
              title: "4. Process only new events",
              description:
                "Run your business logic only when the event has not already been processed.",
            },
            {
              id: "record-event",
              title: "5. Record the result",
              description:
                "Persist the eventId and processing outcome so repeated deliveries can be handled safely.",
            },
          ],
        },
      ],
    },

    {
      id: "event-reference-summary",
      title: "Quick event reference",
      description:
        "Use this summary to find the event family relevant to your workflow.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "summary-domain",
              title: "Domain",
              description:
                "domain.order.success, domain.order.failed, domain.renewal.success, domain.renewal.failed, domain.grace_period, domain.expired",
            },
            {
              id: "summary-mailbox",
              title: "Mailbox",
              description:
                "mailbox.order.success, mailbox.order.failed, mailbox.created, mailbox.updated, mailbox.exported",
            },
            {
              id: "summary-subscription",
              title: "Subscription",
              description:
                "subscription.renewing, subscription.renewal.success, subscription.renewal.failed, subscription.past_due, subscription.expired, subscription.cancelled, subscription.updated",
            },
            {
              id: "summary-prewarmup",
              title: "Pre-Warmup",
              description:
                "prewarmup.order.success, prewarmup.order.failed",
            },
            {
              id: "summary-warmup",
              title: "Mailbox Warmup",
              description:
                "mailbox.warmup.started, mailbox.warmup.removed",
            },
            {
              id: "summary-dns",
              title: "DNS",
              description:
                "dns-record.updated is documented for asynchronous DNS-related updates such as domain forwarding changes.",
            },
          ],
        },
      ],
    },

    {
      id: "important-payload-notes",
      title: "Important payload considerations",
      description:
        "Some webhook payloads contain credentials or sensitive mailbox information.",
      content: [
        {
          type: "paragraph",
          content:
            "Certain mailbox and pre-warmup events can contain account credentials or authentication-related values in their payloads. Treat these payloads as sensitive data and avoid exposing them in logs, browser responses, or unnecessary application records.",
        },
        {
          type: "paragraph",
          content:
            "For mailbox.updated, the documented updatedFields object contains only the fields that changed. Do not assume that every possible mailbox field will be present in that object.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Never log webhook credentials casually",
          content:
            "Mailbox creation and pre-warmup payloads can contain sensitive account information. Store and expose only the information your application actually needs.",
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
                "Configure your endpoint, verify webhook requests, and acknowledge deliveries correctly.",
              href: "/concepts/webhooks-events/setup-webhook",
            },
            {
              id: "action-id",
              title: "Matching Webhooks Back to Requests via actionId",
              description:
                "Connect asynchronous API requests with their eventual webhook results.",
              href: "/concepts/webhooks-events/action-id",
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
                "Troubleshoot missing, delayed, failed, and duplicate webhook deliveries.",
              href: "/concepts/webhooks-events/debugging-events",
            },
          ],
        },
      ],
    },
  ],
};