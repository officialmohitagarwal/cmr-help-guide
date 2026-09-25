export const subscriptionPastDueArticle = {
  id: "subscription-past-due",

  slug: "/concepts/billing-wallet/subscription-past-due",

  category: {
    id: "billing-wallet",
    label: "Billing and Wallet",
    slug: "/concepts/billing-wallet",
  },

  title: "What Happens When a Subscription Goes PAST_DUE",

  description:
    "Understand what PAST_DUE means, how the 7-day grace period works, how renewal recovery works, and how domain-related renewal failures are handled.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "A subscription enters PAST_DUE when its renewal does not complete successfully. PAST_DUE does not immediately deactivate the mailbox. Instead, the subscription enters a 7-day grace period while the renewal issue can be resolved. This guide explains the PAST_DUE lifecycle, mailbox behavior, recovery process, auto-renew behavior, and the difference between payment failures and domain-related renewal failures.",

  sections: [
    {
      id: "what-is-past-due",
      title: "What does PAST_DUE mean?",

      description:
        "PAST_DUE is a subscription state that indicates a renewal did not complete successfully.",

      content: [
        {
          type: "paragraph",
          content:
            "When a subscription renewal payment fails, CMR moves the subscription into PAST_DUE. The subscription is not immediately treated as expired.",
        },

        {
          type: "paragraph",
          content:
            "A 7-day grace period begins when the subscription enters PAST_DUE. During this period, the mailbox remains in a limited-functionality state while the renewal issue can be resolved.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "PAST_DUE is not the same as EXPIRED",
          content:
            "PAST_DUE is a recovery state. EXPIRED means the subscription was not successfully renewed within the applicable recovery period and the mailbox has been deactivated.",
        },
      ],
    },

    {
      id: "subscription-lifecycle",
      title: "Where PAST_DUE fits into the subscription lifecycle",

      description:
        "Understanding the surrounding subscription states makes the PAST_DUE flow easier to implement correctly.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR documents five important subscription states: ACTIVE, RENEWING, PAST_DUE, CANCELLED, and EXPIRED.",
        },

        {
          type: "steps",
          items: [
            {
              id: "active",
              title: "ACTIVE",
              description:
                "The subscription is current and the mailbox is operational.",
            },
            {
              id: "renewing",
              title: "RENEWING",
              description:
                "The subscription renewal has started and payment is being processed.",
            },
            {
              id: "past-due",
              title: "PAST_DUE",
              description:
                "The renewal failed and the 7-day grace period is running.",
            },
            {
              id: "renewed",
              title: "ACTIVE after recovery",
              description:
                "If the renewal issue is resolved and the renewal succeeds, the subscription returns to ACTIVE.",
            },
            {
              id: "expired",
              title: "EXPIRED",
              description:
                "If the subscription is not successfully renewed within the applicable recovery period, it becomes EXPIRED and the mailbox is deactivated.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "CANCELLED is a separate state",
          content:
            "CANCELLED is caused by an explicit Partner cancellation. It should not be treated as another version of PAST_DUE or EXPIRED.",
        },
      ],
    },

    {
      id: "past-due-sequence",
      title: "The PAST_DUE sequence",

      description:
        "The documented payment-failure flow follows a predictable sequence.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "billing-period",
              title: "1. The billing period ends",
              description:
                "The current subscription period reaches its renewal point.",
            },
            {
              id: "payment-fails",
              title: "2. The renewal payment fails",
              description:
                "The subscription cannot complete its renewal.",
            },
            {
              id: "past-due-starts",
              title: "3. The subscription becomes PAST_DUE",
              description:
                "The subscription enters PAST_DUE and the documented 7-day grace period begins.",
            },
            {
              id: "resolve-issue",
              title: "4. The renewal issue is resolved",
              description:
                "The payment issue or other renewal problem is corrected.",
            },
            {
              id: "renewal-success",
              title: "5. The subscription is renewed",
              description:
                "A successful renewal moves the subscription back to ACTIVE.",
            },
            {
              id: "subscription-expires",
              title: "6. The subscription can become EXPIRED",
              description:
                "If the subscription is not successfully recovered within the applicable period, it can progress to EXPIRED and the associated mailboxes are deactivated.",
            },
          ],
        },
      ],
    },

    {
      id: "mailbox-behavior",
      title: "What happens to the mailbox while PAST_DUE?",

      description:
        "PAST_DUE does not immediately deactivate the mailbox.",

      content: [
        {
          type: "paragraph",
          content:
            "A mailbox associated with a PAST_DUE subscription enters a limited-functionality state while the 7-day grace period is running.",
        },

        {
          type: "paragraph",
          content:
            "This differs from EXPIRED, where the subscription was not renewed in time and the mailbox is deactivated.",
        },

        {
          type: "steps",
          items: [
            {
              id: "limited-functionality",
              title: "During PAST_DUE",
              description:
                "The mailbox remains in a limited-functionality state while the subscription can still be recovered.",
            },
            {
              id: "successful-recovery",
              title: "After successful recovery",
              description:
                "The subscription returns to ACTIVE after the renewal succeeds.",
            },
            {
              id: "after-expiry",
              title: "After EXPIRED",
              description:
                "The mailbox is deactivated because the subscription was not successfully renewed.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not treat PAST_DUE as immediate deactivation",
          content:
            "Your customer-facing application should distinguish PAST_DUE from EXPIRED because PAST_DUE represents an active recovery window.",
        },
      ],
    },

    {
      id: "recover-payment-failure",
      title: "Recovering a PAST_DUE subscription",

      description:
        "Follow this flow when the subscription entered PAST_DUE because of a payment failure.",

      content: [
        {
          type: "paragraph",
          content:
            "The documented recovery process starts with identifying the affected subscription and resolving the underlying payment problem through your own customer-facing billing flow.",
        },

        {
          type: "steps",
          items: [
            {
              id: "receive-event",
              title: "1. Receive subscription.past_due",
              description:
                "Listen for the subscription.past_due webhook and identify the affected subscriptionIds.",
            },
            {
              id: "resolve-payment",
              title: "2. Resolve the payment issue",
              description:
                "Have the customer update or correct their payment method through your own billing interface or payment provider.",
            },
            {
              id: "renew-subscription",
              title: "3. Trigger the renewal",
              description:
                "Call POST /subscriptions/renew-subscriptions with the affected subscription IDs, or enable auto-renew using POST /subscriptions/toggle-autorenewal.",
            },
            {
              id: "confirm-renewal",
              title: "4. Confirm the renewal",
              description:
                "Listen for subscription.renewal.success to confirm that the renewal completed successfully.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Payment methods are handled outside CMR",
          content:
            "The documented recovery flow does not provide a CMR payment-method endpoint. Payment-method changes happen through your own billing interface or payment provider.",
        },
      ],
    },

    {
      id: "auto-renew",
      title: "How auto-renew affects PAST_DUE",

      description:
        "The subscription's auto-renew setting affects what happens when the grace period ends.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR documents different behavior depending on whether auto-renew is enabled.",
        },

        {
          type: "steps",
          items: [
            {
              id: "auto-renew-false",
              title: "autoRenew = false",
              description:
                "If the subscription is not recovered during the applicable grace period, it progresses to subscription.expired and the associated mailboxes are deactivated.",
            },
            {
              id: "auto-renew-true",
              title: "autoRenew = true",
              description:
                "The subscription can remain PAST_DUE while renewal is retried after the underlying issue has been resolved.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Auto-renew does not resolve the underlying problem",
          content:
            "Auto-renew controls renewal behavior. It does not replace the need to resolve a failed payment or another condition preventing renewal.",
        },
      ],
    },

    {
      id: "domain-related-failure",
      title: "When the domain causes the renewal failure",

      description:
        "A PAST_DUE or renewal failure can also be related to the domain rather than the payment method.",

      content: [
        {
          type: "paragraph",
          content:
            "Not every renewal failure is caused by a payment problem. CMR also documents a separate renewal-failure path when the domain associated with the subscription is in GRACE_PERIOD or EXPIRED.",
        },

        {
          type: "paragraph",
          content:
            "In this situation, the subscription renewal cannot complete normally because the linked domain itself needs to be addressed.",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-renewal-attempt",
              title: "1. Subscription renewal is attempted",
              description:
                "The subscription reaches its renewal point.",
            },
            {
              id: "domain-blocks",
              title: "2. The domain blocks renewal",
              description:
                "The linked domain is in GRACE_PERIOD or EXPIRED.",
            },
            {
              id: "renewal-failed",
              title: "3. Renewal failure is reported",
              description:
                "The subscription.renewal.failed event reports the failed renewal.",
            },
            {
              id: "resolve-domain",
              title: "4. Resolve the domain issue",
              description:
                "The domain must be renewed or otherwise brought back into a valid state before the subscription renewal can succeed.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not repeatedly retry the subscription",
          content:
            "If the linked domain is the cause of the renewal failure, repeatedly calling the subscription renewal endpoint will not resolve the underlying domain problem.",
        },
      ],
    },

    {
      id: "domain-safety-window",
      title: "The domain-related 26-hour safety window",

      description:
        "The domain-related renewal failure has a separate safety window that should not be confused with the normal PAST_DUE grace period.",

      content: [
        {
          type: "paragraph",
          content:
            "The CMR documentation describes a 26-hour safety window for the domain-related renewal-failure path.",
        },

        {
          type: "paragraph",
          content:
            "This is separate from the standard 7-day PAST_DUE grace period. The two windows apply to different parts of the renewal lifecycle.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Keep the two time windows separate",
          content:
            "7 days refers to the documented PAST_DUE subscription grace period. 26 hours refers to the documented safety window associated with certain domain-related renewal failures.",
        },
      ],
    },

    {
      id: "webhooks",
      title: "Subscription webhooks to handle",

      description:
        "Use subscription webhooks to keep your application synchronized with the actual renewal state.",

      content: [
        {
          type: "paragraph",
          content:
            "The subscription lifecycle documentation includes several webhook events that can be used to track renewal progress and final outcomes.",
        },

        {
          type: "steps",
          items: [
            {
              id: "webhook-renewing",
              title: "subscription.renewing",
              description:
                "The renewal process has started and payment is being processed.",
            },
            {
              id: "webhook-past-due",
              title: "subscription.past_due",
              description:
                "The payment failed or the subscription period ended without a successful renewal.",
            },
            {
              id: "webhook-renewal-success",
              title: "subscription.renewal.success",
              description:
                "The subscription renewal completed successfully.",
            },
            {
              id: "webhook-renewal-failed",
              title: "subscription.renewal.failed",
              description:
                "The renewal was blocked, including cases where the linked domain prevents renewal.",
            },
            {
              id: "webhook-expired",
              title: "subscription.expired",
              description:
                "The subscription reached EXPIRED after the applicable recovery period and the mailboxes were deactivated.",
            },
            {
              id: "webhook-cancelled",
              title: "subscription.cancelled",
              description:
                "The subscription was explicitly cancelled through the cancellation flow.",
            },
          ],
        },

        {
          type: "callout",
          variant: "tip",
          title: "Use the webhook to confirm the final state",
          content:
            "Renewal operations can be asynchronous. Use the relevant webhook event to determine the final subscription state rather than assuming that an initial API response means the renewal has completed.",
        },
      ],
    },

    {
      id: "customer-experience",
      title: "How to represent PAST_DUE in your platform",

      description:
        "A clear customer-facing state helps users understand that a subscription can still be recovered.",

      content: [
        {
          type: "paragraph",
          content:
            "If you are building your own API Partner platform, PAST_DUE should be represented as a distinct subscription state rather than being grouped together with EXPIRED or CANCELLED.",
        },

        {
          type: "steps",
          items: [
            {
              id: "show-status",
              title: "Show the PAST_DUE state",
              description:
                "Make it clear that the subscription renewal did not complete successfully.",
            },
            {
              id: "show-recovery",
              title: "Explain that recovery is still possible",
              description:
                "The documented 7-day grace period means the subscription has not immediately become EXPIRED.",
            },
            {
              id: "show-payment",
              title: "Guide payment recovery",
              description:
                "For payment failures, direct the customer to the payment-method flow provided by your own platform or billing provider.",
            },
            {
              id: "show-domain",
              title: "Handle domain failures separately",
              description:
                "If the linked domain is causing the renewal failure, guide the user toward resolving the domain issue instead of repeatedly retrying payment.",
            },
            {
              id: "remove-warning",
              title: "Clear the warning after successful renewal",
              description:
                "When subscription.renewal.success is received, update the customer-facing subscription state accordingly.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes to avoid",

      description:
        "These mistakes can make subscription recovery harder or create unnecessary operations.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-immediate-disable",
              title: "Treating PAST_DUE as immediate expiry",
              description:
                "PAST_DUE has a documented 7-day grace period and should not automatically be represented as EXPIRED.",
            },
            {
              id: "mistake-blind-retry",
              title: "Repeatedly retrying renewal without checking the cause",
              description:
                "Identify whether the failure is payment-related or domain-related before submitting additional renewal requests.",
            },
            {
              id: "mistake-ignore-domain",
              title: "Ignoring the linked domain",
              description:
                "A domain in GRACE_PERIOD or EXPIRED can prevent the subscription from renewing.",
            },
            {
              id: "mistake-cancel",
              title: "Cancelling the subscription to solve PAST_DUE",
              description:
                "Cancellation is a separate action and should not be used as a recovery mechanism for a failed renewal.",
            },
            {
              id: "mistake-assume-success",
              title: "Assuming an API response means renewal is complete",
              description:
                "Use subscription webhooks to confirm the final result of asynchronous renewal operations.",
            },
          ],
        },
      ],
    },

    {
      id: "recovery-checklist",
      title: "PAST_DUE recovery checklist",

      description:
        "Use this checklist when your platform receives a PAST_DUE event.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "check-subscription",
              title: "1. Identify the subscription",
              description:
                "Capture the affected subscriptionId from the subscription.past_due event.",
            },
            {
              id: "check-cause",
              title: "2. Identify the cause",
              description:
                "Determine whether the issue is a failed payment or a domain-related renewal failure.",
            },
            {
              id: "check-payment",
              title: "3. Resolve payment problems",
              description:
                "If payment failed, have the customer correct the payment method through your own billing flow.",
            },
            {
              id: "check-domain",
              title: "4. Resolve domain problems",
              description:
                "If the domain is in GRACE_PERIOD or EXPIRED, address the domain renewal issue first.",
            },
            {
              id: "check-renew",
              title: "5. Renew the subscription",
              description:
                "Use POST /subscriptions/renew-subscriptions or enable auto-renew where appropriate.",
            },
            {
              id: "check-success",
              title: "6. Confirm the result",
              description:
                "Wait for subscription.renewal.success before treating the subscription as successfully recovered.",
            },
            {
              id: "check-expiry",
              title: "7. Handle EXPIRED if recovery fails",
              description:
                "If the subscription reaches EXPIRED, update your platform's state and follow the applicable recovery process.",
            },
          ],
        },
      ],
    },

    {
      id: "important-notes",
      title: "Important notes",

      description:
        "Keep these rules in mind when implementing subscription renewal handling.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "note-one",
              title: "PAST_DUE means the renewal did not complete",
              description:
                "It is a subscription recovery state following an unsuccessful renewal.",
            },
            {
              id: "note-two",
              title: "The documented grace period is 7 days",
              description:
                "The subscription has a 7-day recovery window before it can progress to EXPIRED.",
            },
            {
              id: "note-three",
              title: "The mailbox is not immediately deactivated",
              description:
                "PAST_DUE represents limited functionality while recovery is possible.",
            },
            {
              id: "note-four",
              title: "Payment recovery happens outside CMR",
              description:
                "The customer payment-method flow is handled through your own billing interface or payment provider.",
            },
            {
              id: "note-five",
              title: "Domain status can block renewal",
              description:
                "A linked domain in GRACE_PERIOD or EXPIRED can cause subscription.renewal.failed.",
            },
            {
              id: "note-six",
              title: "The domain path has a separate safety window",
              description:
                "The documented domain-related safety window is 26 hours and should not be confused with the 7-day PAST_DUE grace period.",
            },
            {
              id: "note-seven",
              title: "Use webhooks to confirm renewal",
              description:
                "subscription.renewal.success confirms that the subscription renewal completed successfully.",
            },
            {
              id: "note-eight",
              title: "CANCELLED is different from PAST_DUE",
              description:
                "CANCELLED is an explicit Partner action and is documented as permanent.",
            },
          ],
        },
      ],
    },

    {
      id: "common-scenarios",
      title: "Common scenarios",

      description:
        "Use these scenarios to identify the correct recovery path.",

      content: [
        {
          type: "heading",
          content: "The renewal payment failed",
        },

        {
          type: "paragraph",
          content:
            "The subscription enters PAST_DUE and the 7-day grace period begins. Resolve the payment issue through your own billing flow and then renew the affected subscription or allow auto-renew to retry.",
        },

        {
          type: "heading",
          content: "The payment method is fine, but the subscription is still PAST_DUE",
        },

        {
          type: "paragraph",
          content:
            "Check the linked domain. If the domain is in GRACE_PERIOD or EXPIRED, the domain may be preventing the subscription renewal from completing.",
        },

        {
          type: "heading",
          content: "The subscription has been PAST_DUE for several days",
        },

        {
          type: "paragraph",
          content:
            "Check the remaining recovery window and the auto-renew setting. Resolve the underlying issue and confirm the renewal result through the appropriate webhook.",
        },

        {
          type: "heading",
          content: "The subscription became EXPIRED",
        },

        {
          type: "paragraph",
          content:
            "The subscription was not successfully renewed within the applicable recovery period. The associated mailbox is deactivated and should no longer be represented as an active subscription.",
        },

        {
          type: "heading",
          content: "Can I keep calling the renewal endpoint?",
        },

        {
          type: "paragraph",
          content:
            "Do not retry blindly. First identify why the renewal failed. If the domain is the underlying problem, repeated subscription-renewal requests will not fix the domain.",
        },

        {
          type: "heading",
          content: "Is PAST_DUE the same as CANCELLED?",
        },

        {
          type: "paragraph",
          content:
            "No. PAST_DUE is a recovery state caused by an unsuccessful renewal. CANCELLED is an explicit Partner cancellation.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",

      description:
        "Continue with the related billing and subscription documentation.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "wallet-balance",
              title: "How Wallet Balance & Charges Work",
              description:
                "Understand how the Partner wallet is used for CMR charges and how wallet balance can affect renewal operations.",
              href: "/concepts/billing-wallet/wallet-balance-charges",
            },
            {
              id: "mailbox-pricing",
              title: "Mailbox Pricing Explained",
              description:
                "Understand standard mailbox pricing, warmup charges, and the 12-month pricing lifecycle.",
              href: "/concepts/billing-wallet/mailbox-pricing",
            },
            {
              id: "reset-pricing",
              title: "Resetting Long-Running Subscription Pricing",
              description:
                "Understand how the documented subscription recreation flow resets the long-running mailbox pricing cycle.",
              href: "/concepts/billing-wallet/reset-subscription-pricing",
            },
            {
              id: "cancel-pause",
              title: "Cancel vs Pause: Choosing the Right Action",
              description:
                "Understand the difference between cancelling a subscription, disabling auto-renew, and pausing warmup.",
              href: "/concepts/billing-wallet/cancel-vs-pause",
            },
            {
              id: "domain-status",
              title: "Domain Status Lifecycle Explained",
              description:
                "Understand GRACE_PERIOD, EXPIRED, renewal, and how domain status can affect mailbox subscription renewal.",
              href: "/concepts/domains/status-lifecycle",
            },
          ],
        },
      ],
    },
  ],
};