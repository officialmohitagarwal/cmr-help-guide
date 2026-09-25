export const recoverPastDueArticle = {
  id: "recover-past-due",
  slug: "/concepts/subscriptions-renewals/recover-past-due",
  category: {
    id: "subscriptions-renewals",
    label: "Subscriptions and Renewals",
    slug: "/concepts/subscriptions-renewals",
  },
  title: "Recovering a PAST_DUE Subscription",
  description:
    "Understand why a subscription enters PAST_DUE, how the recovery window works, how to resolve the underlying issue, and how to restore the subscription.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "A subscription enters PAST_DUE when its renewal payment fails. PAST_DUE is a recovery state rather than an immediate deactivation. CMR provides a 7-day grace window for recovery, while subscriptions with auto-renewal enabled can remain PAST_DUE and retry renewal after the underlying issue is resolved.",

  sections: [
    {
      id: "what-past-due-means",
      title: "What PAST_DUE means",
      description:
        "PAST_DUE indicates that the subscription renewal did not complete successfully.",
      content: [
        {
          type: "paragraph",
          content:
            "When a subscription reaches its renewal date and the renewal payment fails, CMR moves the subscription into the PAST_DUE state and sends the subscription.past_due event.",
        },
        {
          type: "paragraph",
          content:
            "The subscription remains in a recovery state while the underlying issue is resolved. The mailbox is not immediately treated as permanently expired.",
        },
        {
          type: "callout",
          variant: "info",
          title: "PAST_DUE is a recovery state",
          content:
            "A PAST_DUE subscription can return to ACTIVE when the underlying issue is resolved and the subscription is successfully renewed.",
        },
      ],
    },

    {
      id: "grace-window",
      title: "The 7-day recovery window",
      description:
        "CMR documents a 7-day grace window after a renewal payment failure.",
      content: [
        {
          type: "paragraph",
          content:
            "When a subscription enters PAST_DUE because its renewal payment failed, CMR provides a 7-day grace window during which recovery is still possible.",
        },
        {
          type: "steps",
          items: [
            {
              id: "payment-fails",
              title: "The renewal payment fails",
              description:
                "The renewal cannot be completed and the subscription enters PAST_DUE.",
            },
            {
              id: "past-due-event",
              title: "subscription.past_due is sent",
              description:
                "Your webhook endpoint receives the subscription.past_due event so your system can identify the affected subscription.",
            },
            {
              id: "resolve-issue",
              title: "Resolve the underlying issue",
              description:
                "Resolve the payment issue or, where applicable, the domain issue preventing renewal.",
            },
            {
              id: "renew",
              title: "Renew the subscription",
              description:
                "Trigger renewal through the renewal API or allow the auto-renewal mechanism to retry when auto-renewal is enabled.",
            },
            {
              id: "confirm",
              title: "Confirm successful recovery",
              description:
                "Listen for subscription.renewal.success to confirm that the subscription has been successfully renewed.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not wait until the grace period ends",
          content:
            "Resolve the underlying issue and initiate recovery as soon as possible. If auto-renewal is disabled and the subscription remains unresolved through the 7-day grace period, it becomes EXPIRED and the mailboxes are deactivated.",
        },
      ],
    },

    {
      id: "identify-cause",
      title: "Identify why the renewal failed",
      description:
        "The recovery action depends on what prevented the subscription from renewing.",
      content: [
        {
          type: "heading",
          content: "Payment failure",
        },
        {
          type: "paragraph",
          content:
            "The normal PAST_DUE flow occurs when the renewal payment fails. The subscription.past_due event is triggered after the failed payment.",
        },
        {
          type: "paragraph",
          content:
            "Check the customer's payment setup and resolve the payment issue before attempting renewal again.",
        },

        {
          type: "heading",
          content: "Domain-related renewal failure",
        },
        {
          type: "paragraph",
          content:
            "A mailbox subscription depends on its linked domain being active. If the linked domain is in GRACE_PERIOD or EXPIRED, CMR documents the renewal as blocked and sends subscription.renewal.failed.",
        },
        {
          type: "paragraph",
          content:
            "In this case, the domain must be renewed at the registrar before the subscription can successfully renew.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Domain problems require domain recovery first",
          content:
            "Renewing the subscription does not replace renewing the linked domain. If the domain is preventing renewal, resolve the domain status at the registrar before triggering the subscription renewal.",
        },
      ],
    },

    {
      id: "payment-resolution",
      title: "Resolve the underlying payment issue",
      description:
        "Make sure the renewal can be charged before attempting recovery.",
      content: [
        {
          type: "paragraph",
          content:
            "The CMR recovery flow instructs the Partner to have the customer update their payment method through the Partner's UI and billing provider when a renewal payment has failed.",
        },
        {
          type: "steps",
          items: [
            {
              id: "identify-subscription",
              title: "Identify the affected subscription",
              description:
                "Use the subscriptionId from the subscription.past_due event to identify the subscription that requires recovery.",
            },
            {
              id: "update-payment",
              title: "Resolve the payment issue",
              description:
                "Have the customer update their payment method through your billing flow and make sure the underlying payment problem has been resolved.",
            },
            {
              id: "prepare-renewal",
              title: "Prepare the subscription for renewal",
              description:
                "Once the payment issue is resolved, the subscription can be sent through the renewal process.",
            },
          ],
        },
      ],
    },

    {
      id: "renew-manually",
      title: "Renew a PAST_DUE subscription manually",
      description:
        "Use the renewal endpoint when you want to explicitly trigger recovery.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides a manual renewal endpoint for renewing one or more subscriptions:",
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
            "Send the affected subscriptionIds in the request. CMR queues the requested subscriptions for renewal processing.",
        },
        {
          type: "steps",
          items: [
            {
              id: "find-subscription-id",
              title: "Find the subscriptionId",
              description:
                "Use the subscription.past_due webhook or the subscription listing API to identify the subscription that needs recovery.",
            },
            {
              id: "call-renewal",
              title: "Call the renewal endpoint",
              description:
                "Call POST /subscriptions/renew-subscriptions with the affected subscription IDs.",
            },
            {
              id: "wait-result",
              title: "Wait for the renewal result",
              description:
                "Renewal processing is asynchronous. A successful API request to queue the renewal does not by itself mean that the subscription has already been renewed.",
            },
            {
              id: "confirm-success",
              title: "Confirm subscription.renewal.success",
              description:
                "Use the subscription.renewal.success webhook to confirm that the renewal completed successfully.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Queueing a renewal is not the same as completing it",
          content:
            "Treat the renewal API response as confirmation that the renewal request was accepted for processing. Use subscription.renewal.success to confirm the actual renewal.",
        },
      ],
    },

    {
      id: "auto-renew-recovery",
      title: "Recover with auto-renewal enabled",
      description:
        "Auto-renewal changes what happens after the normal grace period.",
      content: [
        {
          type: "paragraph",
          content:
            "If autoRenew is true, CMR documents that the subscription remains PAST_DUE after the 7-day grace period instead of becoming EXPIRED.",
        },
        {
          type: "paragraph",
          content:
            "Once the underlying payment or domain issue is resolved, the renewal mechanism can retry the subscription. In this path, subscription.expired is not sent.",
        },
        {
          type: "steps",
          items: [
            {
              id: "auto-renew-past-due",
              title: "Subscription remains PAST_DUE",
              description:
                "The subscription remains in the past-due state while the underlying issue is unresolved.",
            },
            {
              id: "resolve-issue-auto",
              title: "Resolve the underlying issue",
              description:
                "Fix the payment problem or renew the linked domain when the domain is blocking renewal.",
            },
            {
              id: "retry-renewal",
              title: "Renewal is retried",
              description:
                "With auto-renewal enabled, the renewal mechanism retries once the underlying issue has been resolved.",
            },
            {
              id: "return-active",
              title: "Subscription returns to ACTIVE",
              description:
                "When the renewal succeeds, subscription.renewal.success is sent and the subscription becomes ACTIVE.",
            },
          ],
        },
      ],
    },

    {
      id: "auto-renew-disabled",
      title: "What happens when auto-renewal is disabled",
      description:
        "A PAST_DUE subscription with auto-renewal disabled follows a different recovery path.",
      content: [
        {
          type: "paragraph",
          content:
            "If autoRenew is false and the subscription remains unresolved for the 7-day grace period, CMR sends subscription.expired and the mailboxes are deactivated.",
        },
        {
          type: "steps",
          items: [
            {
              id: "disabled-past-due",
              title: "Subscription enters PAST_DUE",
              description:
                "The renewal payment fails and the subscription enters its recovery period.",
            },
            {
              id: "seven-day-window",
              title: "7-day grace period",
              description:
                "The underlying issue can be resolved and the subscription can be renewed during the grace period.",
            },
            {
              id: "expires",
              title: "Subscription becomes EXPIRED",
              description:
                "If the issue remains unresolved after 7 days and auto-renewal is disabled, the subscription becomes EXPIRED.",
            },
            {
              id: "mailbox-deactivated",
              title: "Mailboxes are deactivated",
              description:
                "The associated mailboxes are deactivated when the subscription expires.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not confuse auto-renewal with cancellation",
          content:
            "Disabling auto-renewal does not immediately cancel the subscription. The subscription continues through its current period and follows the renewal and PAST_DUE lifecycle.",
        },
      ],
    },

    {
      id: "domain-recovery",
      title: "Recover when the domain is blocking renewal",
      description:
        "A domain-related renewal failure requires the linked domain to be fixed first.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents a separate renewal-failure path when the linked domain is in GRACE_PERIOD or EXPIRED. In this situation, the mailbox subscription cannot be renewed while the domain remains inactive.",
        },
        {
          type: "steps",
          items: [
            {
              id: "domain-failure",
              title: "Receive subscription.renewal.failed",
              description:
                "The event identifies that renewal was blocked because the linked domain is not active.",
            },
            {
              id: "renew-domain",
              title: "Renew the domain at the registrar",
              description:
                "Resolve the domain status through the domain registrar so that the linked domain becomes active again.",
            },
            {
              id: "trigger-subscription-retry",
              title: "Trigger the subscription renewal",
              description:
                "Once the domain issue has been resolved, trigger the subscription renewal through the appropriate renewal mechanism.",
            },
            {
              id: "verify-success",
              title: "Verify subscription.renewal.success",
              description:
                "Confirm that CMR successfully renewed the subscription and returned it to ACTIVE.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Domain renewal and subscription renewal are separate actions",
          content:
            "The subscription cannot successfully renew while its linked domain is inactive. Renewing the domain resolves the dependency; it does not by itself confirm that the subscription has been renewed.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Domain-related 26-hour safety-net reference",
          content:
            "CMR's subscription lifecycle documentation describes the domain-related renewal-failure path as reaching a 26-hour safety net. This is separate from the normal 7-day payment-failure grace period.",
        },
      ],
    },

    {
      id: "confirm-recovery",
      title: "Confirm that recovery succeeded",
      description:
        "Use the renewal success event as the confirmation signal.",
      content: [
        {
          type: "paragraph",
          content:
            "Do not treat the renewal request itself as proof that the subscription has been restored. CMR documents renewal processing as an asynchronous flow.",
        },
        {
          type: "steps",
          items: [
            {
              id: "listen-success",
              title: "Listen for subscription.renewal.success",
              description:
                "Use the webhook event as the confirmation that the renewal completed successfully.",
            },
            {
              id: "check-status",
              title: "Check the subscription status",
              description:
                "The successful renewal event identifies the subscription as ACTIVE.",
            },
            {
              id: "restore-ui",
              title: "Update your customer-facing UI",
              description:
                "Reflect the recovered subscription state and remove the PAST_DUE recovery messaging.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The success event is your recovery signal",
          content:
            "Use subscription.renewal.success to synchronize your application after recovery rather than assuming that a renewal request has already completed.",
        },
      ],
    },

    {
      id: "recovery-checklist",
      title: "PAST_DUE recovery checklist",
      description:
        "Use this sequence when handling a failed subscription renewal.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "check-event",
              title: "1. Identify the event",
              description:
                "Check whether you received subscription.past_due or subscription.renewal.failed.",
            },
            {
              id: "check-cause",
              title: "2. Identify the underlying issue",
              description:
                "Determine whether the renewal failed because of a payment problem or because the linked domain is inactive.",
            },
            {
              id: "resolve",
              title: "3. Resolve the issue",
              description:
                "Update the payment method or renew the linked domain at the registrar, depending on the failure reason.",
            },
            {
              id: "renew",
              title: "4. Trigger renewal",
              description:
                "Use POST /subscriptions/renew-subscriptions or allow enabled auto-renewal to retry when applicable.",
            },
            {
              id: "verify",
              title: "5. Verify recovery",
              description:
                "Wait for subscription.renewal.success and confirm that the subscription is ACTIVE.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common recovery mistakes",
      description:
        "Avoid these mistakes when handling PAST_DUE subscriptions.",
      content: [
        {
          type: "heading",
          content: "Trying to renew before fixing the underlying issue",
        },
        {
          type: "paragraph",
          content:
            "If the payment problem or domain problem is still unresolved, the subscription may not successfully renew. Resolve the cause first.",
        },

        {
          type: "heading",
          content: "Treating the renewal API response as final success",
        },
        {
          type: "paragraph",
          content:
            "The renewal request is processed asynchronously. Wait for subscription.renewal.success before marking the subscription as recovered in your own system.",
        },

        {
          type: "heading",
          content: "Ignoring auto-renewal state",
        },
        {
          type: "paragraph",
          content:
            "The behavior after the 7-day grace period depends on autoRenew. With auto-renewal disabled, the subscription becomes EXPIRED if unresolved. With auto-renewal enabled, it remains PAST_DUE and retries after the issue is resolved.",
        },

        {
          type: "heading",
          content: "Treating domain renewal as subscription renewal",
        },
        {
          type: "paragraph",
          content:
            "When the domain is blocking renewal, renewing the domain resolves the domain dependency. You still need to ensure that the subscription renewal is successfully processed.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with subscription management",
      description:
        "Use these guides for the next step in managing subscription renewals.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "subscription-states",
              title: "Subscription States Explained",
              description:
                "Understand ACTIVE, RENEWING, PAST_DUE, CANCELLED, and EXPIRED states and how subscriptions move between them.",
              href: "/concepts/subscriptions-renewals/subscription-states",
            },
            {
              id: "auto-renew-manual",
              title: "Auto-Renew vs Manual Renew",
              description:
                "Understand automatic renewal, manual renewal, and how disabling auto-renewal affects the subscription lifecycle.",
              href: "/concepts/subscriptions-renewals/auto-renew-vs-manual-renew",
            },
            {
              id: "one-plus-year-pricing",
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