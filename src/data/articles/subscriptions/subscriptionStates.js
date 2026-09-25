export const subscriptionStatesArticle = {
  id: "subscription-states",
  slug: "/concepts/subscriptions-renewals/subscription-states",
  category: {
    id: "subscriptions-renewals",
    label: "Subscriptions and Renewals",
    slug: "/concepts/subscriptions-renewals",
  },
  title: "Subscription States Explained",
  description:
    "Understand the subscription lifecycle, what each status means, how subscription states affect mailboxes, and what happens when a renewal succeeds, fails, or is cancelled.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "A subscription is the billing record tied to a mailbox. Every mailbox receives a subscription when it is provisioned, and the subscription keeps the mailbox service active through its billing periods. Understanding subscription states helps you identify whether a mailbox is active, currently being renewed, awaiting recovery, cancelled, or expired.",

  sections: [
    {
      id: "what-is-subscription",
      title: "What a subscription represents",
      description:
        "A subscription connects a mailbox to its recurring billing and renewal lifecycle.",
      content: [
        {
          type: "paragraph",
          content:
            "In CMR, a subscription is the billing record associated with a mailbox. A subscription is created when a mailbox is ordered and can renew automatically or be renewed manually.",
        },
        {
          type: "paragraph",
          content:
            "The subscription lifecycle is separate from domain registration, although the linked domain can affect whether a mailbox subscription is able to renew. If a subscription is not successfully renewed, the mailbox can eventually become unavailable.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Subscription and domain are related, but separate",
          content:
            "A domain and a mailbox subscription have separate lifecycles. However, a subscription renewal can be blocked when its linked domain is in GRACE_PERIOD or EXPIRED.",
        },
      ],
    },

    {
      id: "subscription-statuses",
      title: "The subscription states",
      description:
        "Each subscription status represents a different point in the subscription lifecycle.",
      content: [
        {
          type: "heading",
          content: "ACTIVE",
        },
        {
          type: "paragraph",
          content:
            "ACTIVE means the subscription is current and the associated mailbox is working normally.",
        },

        {
          type: "heading",
          content: "RENEWING",
        },
        {
          type: "paragraph",
          content:
            "RENEWING means the renewal process has started and the renewal payment is being processed. The mailbox remains available while the renewal is being processed.",
        },

        {
          type: "heading",
          content: "PAST_DUE",
        },
        {
          type: "paragraph",
          content:
            "PAST_DUE means a subscription renewal payment has failed. CMR provides a 7-day grace window during which the underlying issue can be resolved and the subscription can be renewed.",
        },
        {
          type: "paragraph",
          content:
            "The subscription remains in a recovery state while the payment or other underlying renewal issue is being resolved. The next action depends on whether auto-renewal is enabled.",
        },

        {
          type: "heading",
          content: "CANCELLED",
        },
        {
          type: "paragraph",
          content:
            "CANCELLED means the subscription was explicitly cancelled through the cancellation action. Cancellation takes effect immediately and deactivates the associated mailboxes.",
        },

        {
          type: "heading",
          content: "EXPIRED",
        },
        {
          type: "paragraph",
          content:
            "EXPIRED means the subscription was not successfully renewed and its grace period ended with auto-renewal disabled. The associated mailboxes are deactivated.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "CANCELLED and EXPIRED are different",
          content:
            "CANCELLED is the result of an explicit cancellation action. EXPIRED occurs when a subscription remains unresolved through the renewal and grace-period flow. Do not treat the two states as interchangeable in your application.",
        },
      ],
    },

    {
      id: "state-flow",
      title: "How subscription states change",
      description:
        "The normal subscription lifecycle moves through a small number of predictable states.",
      content: [
        {
          type: "paragraph",
          content:
            "A successfully operating subscription normally starts in ACTIVE. When its renewal is initiated, it moves to RENEWING while the renewal payment is processed.",
        },

        {
          type: "steps",
          items: [
            {
              id: "active-to-renewing",
              title: "ACTIVE → RENEWING",
              description:
                "The subscription reaches its renewal point and the renewal process begins.",
            },
            {
              id: "renewing-to-active",
              title: "RENEWING → ACTIVE",
              description:
                "The renewal payment succeeds and the subscription continues into its next billing period.",
            },
            {
              id: "renewing-to-past-due",
              title: "RENEWING → PAST_DUE",
              description:
                "The renewal payment fails and the subscription enters the past-due recovery state.",
            },
            {
              id: "past-due-to-active",
              title: "PAST_DUE → ACTIVE",
              description:
                "The underlying issue is resolved and the subscription is successfully renewed.",
            },
            {
              id: "past-due-to-expired",
              title: "PAST_DUE → EXPIRED",
              description:
                "The 7-day grace period ends without recovery and auto-renewal is disabled. The mailboxes are deactivated.",
            },
            {
              id: "active-to-cancelled",
              title: "ACTIVE → CANCELLED",
              description:
                "The partner explicitly cancels the subscription. Cancellation takes effect immediately and the mailboxes are deactivated.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Auto-renewal changes the recovery path",
          content:
            "When auto-renewal is enabled, a subscription can remain PAST_DUE after the normal 7-day grace period and retry renewal once the underlying issue is resolved. In this path, CMR does not send subscription.expired.",
        },
      ],
    },

    {
      id: "renewal-success",
      title: "When a renewal succeeds",
      description:
        "A successful renewal keeps the subscription active for the next billing period.",
      content: [
        {
          type: "paragraph",
          content:
            "When the renewal date arrives, CMR initiates the renewal process and the subscription enters RENEWING.",
        },
        {
          type: "steps",
          items: [
            {
              id: "renewal-starts",
              title: "Renewal starts",
              description:
                "The subscription enters RENEWING while the renewal payment is processed.",
            },
            {
              id: "payment-succeeds",
              title: "Payment succeeds",
              description:
                "The renewal completes successfully and the subscription moves back to ACTIVE.",
            },
            {
              id: "next-period",
              title: "The next billing period begins",
              description:
                "The subscription continues into its next billing period with the mailbox remaining available.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "CMR sends the subscription.renewing event when renewal processing begins and subscription.renewal.success when the renewal succeeds.",
        },
      ],
    },

    {
      id: "renewal-failure",
      title: "When a renewal fails",
      description:
        "Not every renewal failure follows the same path. The underlying cause determines what happens next.",
      content: [
        {
          type: "heading",
          content: "Payment failure",
        },
        {
          type: "paragraph",
          content:
            "When a renewal payment fails, CMR moves the subscription into PAST_DUE and starts a 7-day grace window. During this period, the underlying payment issue can be resolved and the subscription can be renewed.",
        },

        {
          type: "heading",
          content: "Domain-related renewal failure",
        },
        {
          type: "paragraph",
          content:
            "A subscription renewal can also be blocked because the linked domain is in GRACE_PERIOD or EXPIRED. In this case, CMR documents a separate renewal-failure path involving subscription.renewal.failed.",
        },
        {
          type: "paragraph",
          content:
            "The CMR event lifecycle documentation describes this domain-related path as having a 26-hour safety net. The linked domain must be renewed at the registrar before the subscription can successfully renew.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "The 26-hour path is not the normal payment-failure grace period",
          content:
            "The normal payment-failure path uses a 7-day grace window. The documented 26-hour safety-net reference applies specifically to the domain-related renewal-failure path.",
        },
      ],
    },

    {
      id: "past-due-and-expired",
      title: "PAST_DUE vs EXPIRED",
      description:
        "These states represent different points in the recovery lifecycle.",
      content: [
        {
          type: "paragraph",
          content:
            "PAST_DUE means the subscription is in a recovery period after a renewal payment failure. It does not mean that the mailbox has immediately been deactivated.",
        },
        {
          type: "paragraph",
          content:
            "EXPIRED means the subscription has reached the end of the documented recovery path with auto-renewal disabled. At this point, the associated mailboxes are deactivated.",
        },
        {
          type: "steps",
          items: [
            {
              id: "past-due-state",
              title: "PAST_DUE",
              description:
                "The renewal has not completed successfully and the subscription is within its recovery flow.",
            },
            {
              id: "resolve-issue",
              title: "Resolve the underlying issue",
              description:
                "Resolve the payment or domain issue that prevented renewal.",
            },
            {
              id: "renew-subscription",
              title: "Renew the subscription",
              description:
                "Trigger renewal manually or allow the auto-renewal mechanism to retry when applicable.",
            },
            {
              id: "expired-state",
              title: "EXPIRED",
              description:
                "If the subscription remains unresolved through the applicable recovery period with auto-renewal disabled, it becomes EXPIRED and the mailboxes are deactivated.",
            },
          ],
        },
      ],
    },

    {
      id: "cancellation",
      title: "Cancellation is different from letting a subscription expire",
      description:
        "Use cancellation only when the subscription should be ended immediately.",
      content: [
        {
          type: "paragraph",
          content:
            "Calling the subscription cancellation endpoint explicitly cancels the subscription immediately. This is different from disabling auto-renewal and allowing the current billing period to continue.",
        },
        {
          type: "paragraph",
          content:
            "Disabling auto-renewal does not itself trigger the subscription.cancelled event. The subscription continues through its current period and follows the renewal and recovery lifecycle when the period ends.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not use cancellation just to stop future renewals",
          content:
            "If the goal is only to prevent the next automatic renewal, disable auto-renewal instead of cancelling the subscription.",
        },
      ],
    },

    {
      id: "webhook-events",
      title: "Subscription events to monitor",
      description:
        "CMR exposes webhook events that allow your application to track subscription lifecycle changes.",
      content: [
        {
          type: "paragraph",
          content:
            "If you integrate CMR webhooks, use subscription events to keep your application state synchronized with the subscription lifecycle.",
        },
        {
          type: "steps",
          items: [
            {
              id: "event-renewing",
              title: "subscription.renewing",
              description:
                "Fired when renewal processing starts and the subscription enters RENEWING.",
            },
            {
              id: "event-success",
              title: "subscription.renewal.success",
              description:
                "Fired when the renewal payment succeeds and the subscription continues into its next billing period.",
            },
            {
              id: "event-failed",
              title: "subscription.renewal.failed",
              description:
                "Fired when renewal is blocked, including when the linked domain is in GRACE_PERIOD or EXPIRED.",
            },
            {
              id: "event-past-due",
              title: "subscription.past_due",
              description:
                "Fired when the subscription enters the PAST_DUE state after a renewal payment failure.",
            },
            {
              id: "event-cancelled",
              title: "subscription.cancelled",
              description:
                "Fired when the cancellation action is explicitly called.",
            },
            {
              id: "event-expired",
              title: "subscription.expired",
              description:
                "Fired when the subscription's recovery period ends with auto-renewal disabled and the subscription becomes EXPIRED.",
            },
            {
              id: "event-updated",
              title: "subscription.updated",
              description:
                "Fired when the subscription crosses the 12-month threshold and enters the one-plus-year pricing tier.",
            },
          ],
        },
      ],
    },

    {
      id: "practical-guidance",
      title: "Handling subscription states in your application",
      description:
        "Use subscription status and lifecycle events consistently when building your Partner platform.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "store-status",
              title: "Store the current subscription status",
              description:
                "Keep your local subscription record synchronized with the current CMR subscription status.",
            },
            {
              id: "handle-renewing",
              title: "Handle RENEWING as an in-progress state",
              description:
                "Do not treat RENEWING as a failed renewal. The payment is still being processed.",
            },
            {
              id: "handle-past-due",
              title: "Treat PAST_DUE as a recovery state",
              description:
                "Surface the issue to the customer and provide a path to resolve the underlying payment or domain problem.",
            },
            {
              id: "handle-cancelled",
              title: "Handle CANCELLED immediately",
              description:
                "Cancellation is an explicit action and takes effect immediately, so your application should update the mailbox availability accordingly.",
            },
            {
              id: "handle-expired",
              title: "Handle EXPIRED as an inactive subscription",
              description:
                "When a subscription becomes EXPIRED, reflect that the associated mailboxes have been deactivated.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Use events for state changes",
          content:
            "Webhook events provide the lifecycle signals needed to keep your application synchronized without relying on repeated polling.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with subscription management",
      description:
        "Use these guides when you need to take action on a subscription.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "recover-past-due",
              title: "Recovering a PAST_DUE Subscription",
              description:
                "Resolve renewal issues and recover a subscription that has entered PAST_DUE.",
              href: "/concepts/subscriptions-renewals/recover-past-due",
            },
            {
              id: "auto-renew-manual",
              title: "Auto-Renew vs Manual Renew",
              description:
                "Understand automatic renewal, manual renewal, and how disabling auto-renewal affects the subscription lifecycle.",
              href: "/concepts/subscriptions-renewals/auto-renew-vs-manual-renew",
            },
            {
              id: "one-plus-year",
              title: "The 1+ Year Price Increase and How to Reset It",
              description:
                "Understand the pricing change after 12 months and the documented subscription recreation flow.",
              href: "/concepts/subscriptions-renewals/one-plus-year-pricing",
            },
          ],
        },
      ],
    },
  ],
};