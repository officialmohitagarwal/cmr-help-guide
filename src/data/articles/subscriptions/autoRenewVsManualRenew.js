export const autoRenewVsManualRenewArticle = {
  id: "auto-renew-vs-manual-renew",
  slug: "/concepts/subscriptions-renewals/auto-renew-vs-manual-renew",
  category: {
    id: "subscriptions-renewals",
    label: "Subscriptions and Renewals",
    slug: "/concepts/subscriptions-renewals",
  },
  title: "Auto-Renew vs Manual Renew",
  description:
    "Understand how automatic and manual subscription renewal work, when each approach is used, how to enable or disable auto-renewal, and how renewal recovery works.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "CMR subscriptions can be renewed automatically when autoRenew is enabled, or manually through the renewal API. Understanding the difference helps you control how subscriptions are renewed, how PAST_DUE subscriptions are recovered, and how to stop future renewals without immediately cancelling a mailbox.",

  sections: [
    {
      id: "two-renewal-methods",
      title: "Two ways to renew a subscription",
      description:
        "CMR supports automatic renewal and explicit manual renewal.",
      content: [
        {
          type: "paragraph",
          content:
            "Every mailbox receives a subscription when it is provisioned. The subscription can renew automatically when autoRenew is enabled, or it can be renewed manually by calling the renewal API.",
        },

        {
          type: "heading",
          content: "Automatic renewal",
        },
        {
          type: "paragraph",
          content:
            "When autoRenew is enabled, CMR handles the renewal process automatically according to the subscription's billing cycle.",
        },

        {
          type: "heading",
          content: "Manual renewal",
        },
        {
          type: "paragraph",
          content:
            "Manual renewal means your Partner platform explicitly requests renewal by calling POST /subscriptions/renew-subscriptions with the subscriptions that should be renewed.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Both methods renew the same subscription",
          content:
            "Auto-renewal and manual renewal are two different ways of initiating the subscription renewal process. They do not create different types of subscriptions.",
        },
      ],
    },

    {
      id: "automatic-renewal",
      title: "How automatic renewal works",
      description:
        "With auto-renewal enabled, CMR handles renewal without requiring a manual renewal request for every billing period.",
      content: [
        {
          type: "paragraph",
          content:
            "When autoRenew is enabled on a subscription, CMR automatically attempts to renew the subscription when its billing period reaches its renewal point.",
        },

        {
          type: "steps",
          items: [
            {
              id: "auto-renew-start",
              title: "The subscription reaches renewal",
              description:
                "The current billing period ends and the subscription enters the renewal process.",
            },
            {
              id: "auto-renew-processing",
              title: "Renewal is processed",
              description:
                "The subscription moves through the renewal process while the renewal payment is being processed.",
            },
            {
              id: "auto-renew-success",
              title: "Renewal succeeds",
              description:
                "If the renewal payment succeeds, the subscription continues into its next billing period.",
            },
            {
              id: "auto-renew-failure",
              title: "Renewal can enter PAST_DUE",
              description:
                "If the renewal payment fails, the subscription enters PAST_DUE and requires recovery.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "CMR exposes subscription lifecycle webhook events such as subscription.renewing, subscription.renewal.success, subscription.renewal.failed, and subscription.past_due so your application can track what happens during renewal.",
        },
      ],
    },

    {
      id: "manual-renewal",
      title: "How manual renewal works",
      description:
        "Use the renewal API when your platform needs to explicitly request renewal.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides the following endpoint for manually renewing one or more subscriptions:",
        },

        {
          type: "code",
          language: "http",
          content:
            "POST /subscriptions/renew-subscriptions",
        },

        {
          type: "paragraph",
          content:
            "The request identifies the subscriptions that should be renewed using their subscription IDs.",
        },

        {
          type: "steps",
          items: [
            {
              id: "identify-subscriptions",
              title: "Identify the subscriptions",
              description:
                "Find the subscription IDs that need to be renewed.",
            },
            {
              id: "send-renewal",
              title: "Send the renewal request",
              description:
                "Call POST /subscriptions/renew-subscriptions with the affected subscription IDs.",
            },
            {
              id: "process-renewal",
              title: "CMR processes the renewal",
              description:
                "The renewal request is processed and the subscription moves through the renewal lifecycle.",
            },
            {
              id: "confirm-renewal",
              title: "Confirm the result",
              description:
                "Listen for subscription.renewal.success to confirm that the renewal completed successfully.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "A renewal request is not the final confirmation",
          content:
            "Use subscription.renewal.success as the confirmation that the renewal actually succeeded. Do not treat a successful API request alone as proof that the subscription has already been renewed.",
        },
      ],
    },

    {
      id: "when-manual-renewal-useful",
      title: "When manual renewal is useful",
      description:
        "Manual renewal is particularly useful when you want explicit control over which subscriptions are renewed.",
      content: [
        {
          type: "paragraph",
          content:
            "Manual renewal gives your Partner platform an explicit way to initiate renewal for selected subscriptions instead of relying only on the automatic renewal cycle.",
        },

        {
          type: "steps",
          items: [
            {
              id: "past-due-recovery",
              title: "Recovering a PAST_DUE subscription",
              description:
                "After resolving the underlying payment or domain issue, you can explicitly request renewal for the affected subscription.",
            },
            {
              id: "selected-renewal",
              title: "Renewing selected subscriptions",
              description:
                "Use the renewal endpoint when your application needs to request renewal for specific subscription IDs.",
            },
            {
              id: "controlled-flow",
              title: "Building a controlled renewal flow",
              description:
                "A Partner platform can expose its own renewal action and trigger the CMR renewal API when the customer or operator chooses to renew.",
            },
          ],
        },
      ],
    },

    {
      id: "auto-renew-toggle",
      title: "Enabling or disabling auto-renewal",
      description:
        "The auto-renewal setting can be changed per subscription.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides a dedicated endpoint for enabling or disabling automatic renewal for a subscription:",
        },

        {
          type: "code",
          language: "http",
          content:
            "POST /subscriptions/toggle-autorenewal",
        },

        {
          type: "paragraph",
          content:
            "The endpoint changes the auto-renewal setting for the specified subscription.",
        },

        {
          type: "steps",
          items: [
            {
              id: "choose-subscription",
              title: "Choose the subscription",
              description:
                "Identify the subscription whose auto-renewal setting you want to change.",
            },
            {
              id: "toggle-setting",
              title: "Toggle auto-renewal",
              description:
                "Call POST /subscriptions/toggle-autorenewal for the subscription.",
            },
            {
              id: "verify-setting",
              title: "Verify the updated setting",
              description:
                "Confirm that the subscription now has the intended autoRenew configuration.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Disabling auto-renewal does not immediately cancel the subscription",
          content:
            "CMR specifically documents the auto-renewal toggle as the way to stop future renewals without immediately expiring the mailbox. The current subscription continues through its existing billing period.",
        },
      ],
    },

    {
      id: "auto-renew-vs-cancel",
      title: "Disabling auto-renewal vs cancelling",
      description:
        "These actions have very different effects on the subscription.",
      content: [
        {
          type: "heading",
          content: "Disable auto-renewal",
        },
        {
          type: "paragraph",
          content:
            "Disabling auto-renewal prevents the subscription from being automatically renewed at the next renewal point. The current subscription is not immediately cancelled.",
        },

        {
          type: "heading",
          content: "Cancel the subscription",
        },
        {
          type: "paragraph",
          content:
            "Cancellation is an explicit action that immediately ends the subscription and deactivates the mailbox.",
        },

        {
          type: "code",
          language: "http",
          content:
            "POST /subscriptions/cancel",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Use the correct action",
          content:
            "If the goal is only to prevent a future automatic renewal, use the auto-renewal toggle. Do not use the cancellation endpoint, because cancellation immediately deactivates the subscription.",
        },
      ],
    },

    {
      id: "past-due-recovery",
      title: "Auto-renewal and PAST_DUE recovery",
      description:
        "Auto-renewal affects how an unresolved PAST_DUE subscription behaves.",
      content: [
        {
          type: "paragraph",
          content:
            "When a renewal payment fails, the subscription enters PAST_DUE. CMR documents a 7-day grace window for recovery.",
        },

        {
          type: "steps",
          items: [
            {
              id: "past-due-event",
              title: "Subscription enters PAST_DUE",
              description:
                "The renewal payment fails and CMR sends subscription.past_due.",
            },
            {
              id: "resolve-payment",
              title: "Resolve the underlying issue",
              description:
                "Update the payment method or resolve the domain issue that prevented renewal.",
            },
            {
              id: "renew-option",
              title: "Choose a renewal path",
              description:
                "Renew manually using POST /subscriptions/renew-subscriptions or use enabled auto-renewal.",
            },
            {
              id: "success-event",
              title: "Confirm recovery",
              description:
                "Listen for subscription.renewal.success to confirm that the subscription has been successfully renewed.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Auto-renewal changes the recovery behavior",
          content:
            "With auto-renewal enabled, CMR documents that a PAST_DUE subscription can remain in PAST_DUE and retry renewal after the underlying issue is resolved. With auto-renewal disabled, an unresolved subscription can eventually become EXPIRED.",
        },
      ],
    },

    {
      id: "manual-vs-auto-flow",
      title: "Choosing between automatic and manual renewal",
      description:
        "The right approach depends on how much control your Partner platform needs over renewal.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "automatic-choice",
              title: "Use automatic renewal",
              description:
                "Use auto-renewal when subscriptions should renew automatically without requiring your platform to explicitly initiate each renewal.",
            },
            {
              id: "manual-choice",
              title: "Use manual renewal",
              description:
                "Use manual renewal when your platform needs to explicitly trigger renewal for selected subscriptions.",
            },
            {
              id: "recovery-choice",
              title: "Use manual renewal for explicit recovery",
              description:
                "After resolving a PAST_DUE issue, you can explicitly call the renewal endpoint instead of waiting for an automatic retry.",
            },
            {
              id: "stop-choice",
              title: "Disable auto-renewal to stop future automatic renewals",
              description:
                "If you want the current subscription to continue but do not want it to automatically renew in the future, disable auto-renewal.",
            },
            {
              id: "cancel-choice",
              title: "Cancel only when the subscription should end immediately",
              description:
                "Use the cancellation endpoint only when immediate subscription termination is intended.",
            },
          ],
        },
      ],
    },

    {
      id: "renewal-events",
      title: "Webhook events to monitor",
      description:
        "Use subscription events to keep your platform synchronized with renewal activity.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR exposes webhook events for important points in the subscription renewal lifecycle.",
        },

        {
          type: "steps",
          items: [
            {
              id: "renewing-event",
              title: "subscription.renewing",
              description:
                "The renewal payment is being processed.",
            },
            {
              id: "success-event",
              title: "subscription.renewal.success",
              description:
                "The renewal payment succeeded.",
            },
            {
              id: "failed-event",
              title: "subscription.renewal.failed",
              description:
                "The renewal payment failed and the subscription enters the failure/recovery flow.",
            },
            {
              id: "past-due-event",
              title: "subscription.past_due",
              description:
                "The subscription has entered the PAST_DUE state.",
            },
            {
              id: "expired-event",
              title: "subscription.expired",
              description:
                "The subscription was not renewed and became EXPIRED.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Synchronize from events",
          content:
            "Use the webhook lifecycle events to update your application's subscription state instead of assuming that an API request has completed synchronously.",
        },
      ],
    },

    {
      id: "recommended-renewal-flow",
      title: "A practical renewal flow",
      description:
        "Use this sequence when implementing subscription renewal in a Partner platform.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "get-subscription",
              title: "1. Get the subscription",
              description:
                "Retrieve the subscription and inspect its current status and autoRenew setting.",
            },
            {
              id: "determine-path",
              title: "2. Determine the renewal path",
              description:
                "Use automatic renewal when autoRenew is enabled, or initiate renewal manually when your application needs explicit control.",
            },
            {
              id: "resolve-failure",
              title: "3. Resolve renewal failures",
              description:
                "If the subscription enters PAST_DUE, resolve the underlying payment or domain issue before attempting recovery.",
            },
            {
              id: "trigger-renewal",
              title: "4. Trigger or wait for renewal",
              description:
                "Call POST /subscriptions/renew-subscriptions for manual renewal, or allow enabled auto-renewal to handle the renewal.",
            },
            {
              id: "confirm",
              title: "5. Confirm the outcome",
              description:
                "Use subscription.renewal.success to confirm successful renewal and update your application's subscription state.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid common implementation and operational mistakes around subscription renewal.",
      content: [
        {
          type: "heading",
          content: "Using cancel when you only want to stop future renewals",
        },
        {
          type: "paragraph",
          content:
            "Cancellation immediately ends the subscription. Use the auto-renewal toggle when the intention is to stop future automatic renewals while allowing the current subscription period to continue.",
        },

        {
          type: "heading",
          content: "Assuming a renewal request means renewal succeeded",
        },
        {
          type: "paragraph",
          content:
            "A renewal request initiates the renewal process. Confirm the actual result through subscription.renewal.success.",
        },

        {
          type: "heading",
          content: "Ignoring the autoRenew setting during PAST_DUE recovery",
        },
        {
          type: "paragraph",
          content:
            "The subscription's behavior after the grace period depends on its auto-renewal configuration. Make sure your application understands whether automatic renewal is enabled.",
        },

        {
          type: "heading",
          content: "Waiting for automatic recovery when manual recovery is required",
        },
        {
          type: "paragraph",
          content:
            "If your platform needs immediate and explicit recovery after resolving a renewal problem, use the manual renewal endpoint rather than relying only on automatic renewal.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with subscription management",
      description:
        "Use these guides to understand the rest of the subscription lifecycle.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "subscription-states",
              title: "Subscription States Explained",
              description:
                "Understand ACTIVE, RENEWING, PAST_DUE, CANCELLED, and EXPIRED subscription states.",
              href: "/concepts/subscriptions-renewals/subscription-states",
            },
            {
              id: "recover-past-due",
              title: "Recovering a PAST_DUE Subscription",
              description:
                "Understand how to resolve a failed renewal and recover the subscription.",
              href: "/concepts/subscriptions-renewals/recover-past-due",
            },
            {
              id: "one-year-pricing",
              title: "The 1+ Year Price Increase and How to Reset It",
              description:
                "Understand the pricing change after 12 months and how subscription recreation resets the pricing cycle.",
              href: "/concepts/subscriptions-renewals/one-year-plus-pricing",
            },
          ],
        },
      ],
    },
  ],
};