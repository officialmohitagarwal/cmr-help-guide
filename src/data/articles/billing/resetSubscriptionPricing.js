export const resetSubscriptionPricingArticle = {
  id: "reset-subscription-pricing",

  slug: "/concepts/billing-wallet/reset-subscription-pricing",

  category: {
    id: "billing-wallet",
    label: "Billing and Wallet",
    slug: "/concepts/billing-wallet",
  },

  title: "Resetting Long-Running Subscription Pricing",

  description:
    "Understand why mailbox pricing changes after 12 months and how CMR's documented subscription recreation flow starts a new pricing cycle.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "CMR mailbox subscriptions use a different price after a subscription crosses 12 months. The standard price is $3 per mailbox per month, while the price becomes $5 per mailbox per month at the renewal that crosses the 12-month mark. CMR documents subscription recreation as the mechanism for starting a new subscription at the standard pricing tier.",

  sections: [
    {
      id: "why-pricing-changes",
      title: "Why does the subscription price change after 12 months?",

      description:
        "The mailbox pricing lifecycle includes a standard rate and a 1+ year rate.",

      content: [
        {
          type: "paragraph",
          content:
            "According to the CMR documentation, a mailbox subscription starts at $3 per mailbox per month. That pricing applies until the subscription crosses the 12-month mark.",
        },

        {
          type: "paragraph",
          content:
            "At the renewal that crosses 12 months of active subscription time, the mailbox subscription price changes to $5 per mailbox per month.",
        },

        {
          type: "steps",
          items: [
            {
              id: "standard-price",
              title: "$3/mailbox/month",
              description:
                "The standard mailbox subscription price applies from provisioning until the subscription crosses 12 months.",
            },
            {
              id: "twelve-month-renewal",
              title: "12-month renewal",
              description:
                "The renewal that crosses the 12-month active mark applies the 1+ year pricing tier.",
            },
            {
              id: "long-running-price",
              title: "$5/mailbox/month",
              description:
                "The subscription moves to the documented 1+ year price after crossing the 12-month mark.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "The price change happens at renewal",
          content:
            "The documented $5 pricing is automatically applied at the renewal that crosses the 12-month mark. It is not described as a manual price change performed by the Partner.",
        },
      ],
    },

    {
      id: "what-reset-does",
      title: "What does resetting the subscription pricing mean?",

      description:
        "The documented reset process creates a new subscription for the same domain.",

      content: [
        {
          type: "paragraph",
          content:
            "Once a subscription has crossed 12 months and is using the $5 per mailbox per month pricing tier, CMR documents subscription recreation as the mechanism for starting a new subscription at the standard $3 pricing tier.",
        },

        {
          type: "paragraph",
          content:
            "The recreation process cancels the existing workspace subscription and provisions a new subscription for the same domain.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "This is not a simple price-field update",
          content:
            "The documented process creates a new subscription. It does not modify the existing subscription's 12-month pricing tier in place.",
        },
      ],
    },

    {
      id: "what-is-preserved",
      title: "What is preserved during recreation?",

      description:
        "The documented recreation flow preserves important mailbox and authentication configuration.",

      content: [
        {
          type: "paragraph",
          content:
            "Although the existing subscription is replaced, the documentation states that several important resources and settings are preserved.",
        },

        {
          type: "steps",
          items: [
            {
              id: "preserve-mailboxes",
              title: "Mailboxes",
              description:
                "The existing mailboxes are preserved when the new subscription is provisioned.",
            },
            {
              id: "preserve-oauth",
              title: "OAuth routes and client credentials",
              description:
                "The documented OAuth routes and client credentials are preserved.",
            },
            {
              id: "preserve-autorenew",
              title: "Auto-renew setting",
              description:
                "The existing auto-renew setting is preserved on the recreated subscription.",
            },
            {
              id: "same-domain",
              title: "Same domain",
              description:
                "The new subscription is provisioned for the same domain.",
            },
          ],
        },
      ],
    },

    {
      id: "what-is-not-preserved",
      title: "What changes after recreation?",

      description:
        "The purpose of recreation is to start a fresh subscription pricing lifecycle.",

      content: [
        {
          type: "paragraph",
          content:
            "The 12-month pricing tier is not preserved. The newly created subscription starts again at the standard pricing tier.",
        },

        {
          type: "steps",
          items: [
            {
              id: "new-standard-price",
              title: "The new subscription starts at standard pricing",
              description:
                "The recreated subscription starts at the documented $3 per mailbox per month standard price.",
            },
            {
              id: "clock-restarts",
              title: "The 12-month clock starts again",
              description:
                "The new subscription has its own pricing lifecycle, so the 12-month period starts again from the new subscription.",
            },
            {
              id: "new-id",
              title: "A new subscriptionId is created",
              description:
                "The recreated subscription receives a new subscriptionId.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Update stored subscription references",
          content:
            "The documentation explicitly warns that references to the old subscriptionId stop resolving after recreation. Update stored references after the asynchronous recreation completes.",
        },
      ],
    },

    {
      id: "async-behavior",
      title: "Recreation is asynchronous",

      description:
        "The reset does not complete as a single synchronous operation.",

      content: [
        {
          type: "paragraph",
          content:
            "Subscription recreation runs asynchronously. The API request starts the process, but the new subscription is created later.",
        },

        {
          type: "paragraph",
          content:
            "The documentation notes that mailboxes are temporarily expired during reprovisioning, typically for a few minutes, while the new subscription is being created.",
        },

        {
          type: "steps",
          items: [
            {
              id: "async-start",
              title: "1. Start recreation",
              description:
                "Submit the subscription recreation request for the subscription or domain.",
            },
            {
              id: "async-reprovision",
              title: "2. CMR reprovisions the subscription",
              description:
                "The existing workspace subscription is cancelled and a new subscription is provisioned for the same domain.",
            },
            {
              id: "async-temporary",
              title: "3. Temporary provisioning state",
              description:
                "The documentation notes that mailboxes can be temporarily expired during reprovisioning, typically for a few minutes.",
            },
            {
              id: "async-complete",
              title: "4. New subscription is created",
              description:
                "The recreated subscription receives a new subscriptionId and starts its pricing lifecycle from the beginning.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Do not assume the operation is complete immediately",
          content:
            "Because recreation is asynchronous, do not update stored subscription identifiers before the recreation has completed.",
        },
      ],
    },

    {
      id: "request-options",
      title: "How can a subscription be recreated?",

      description:
        "The documented request supports identifying subscriptions by subscription ID or domain name.",

      content: [
        {
          type: "paragraph",
          content:
            "The documentation provides two request approaches: recreate subscriptions using subscription IDs or recreate subscriptions using domain names.",
        },

        {
          type: "heading",
          content: "Using subscription IDs",
        },

        {
          type: "code",
          language: "http",
          code:
            "POST /component/subscriptions/recreate\n\n{\n  \"subscriptionIds\": [\"<subscription_id>\"]\n}",
        },

        {
          type: "heading",
          content: "Using domain names",
        },

        {
          type: "code",
          language: "http",
          code:
            "POST /component/subscriptions/recreate\n\n{\n  \"domainNames\": [\"yourdomain.com\"]\n}",
        },

        {
          type: "paragraph",
          content:
            "The documented request format also allows multiple subscriptions or domains to be included in a single request.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Endpoint naming in the documentation",
          content:
            "The pricing explanation refers to POST /subscriptions/recreate, while the request examples use POST /component/subscriptions/recreate. Use the endpoint path provided by the API reference version you are integrating against.",
        },
      ],
    },

    {
      id: "no-extra-charge",
      title: "Does recreation create an additional charge?",

      description:
        "The documentation describes the recreated subscription as inheriting the original billing context.",

      content: [
        {
          type: "paragraph",
          content:
            "The documentation states that subscription recreation does not charge anything extra because the new subscription inherits the billing context of the original subscription.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Billing context is inherited",
          content:
            "The documented recreation flow does not introduce an additional recreation charge. The new subscription inherits the billing context of the original.",
        },
      ],
    },

    {
      id: "subscription-updated",
      title: "The subscription.updated event",

      description:
        "The subscription lifecycle includes an event when the 12-month pricing threshold is crossed.",

      content: [
        {
          type: "paragraph",
          content:
            "The subscription lifecycle documentation states that subscription.updated fires when a subscription crosses the 12-month mark and the price changes to $5 per mailbox per month.",
        },

        {
          type: "paragraph",
          content:
            "The event fires once for this pricing transition. It does not fire again on later renewals simply because the subscription remains in the 1+ year pricing tier.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Use the event to synchronize your platform",
          content:
            "If your platform stores subscription pricing or lifecycle information, use the documented subscription.updated event to keep your records synchronized when the 12-month pricing transition occurs.",
        },
      ],
    },

    {
      id: "when-to-use",
      title: "When does the documented reset flow apply?",

      description:
        "The reset mechanism is specifically associated with the long-running subscription pricing tier.",

      content: [
        {
          type: "paragraph",
          content:
            "The documented reset flow applies after a subscription has crossed the 12-month mark and is using the $5 per mailbox per month pricing tier.",
        },

        {
          type: "steps",
          items: [
            {
              id: "before-twelve-months",
              title: "Before 12 months",
              description:
                "The subscription remains on the documented standard $3 per mailbox per month pricing tier.",
            },
            {
              id: "after-twelve-months",
              title: "After the 12-month pricing transition",
              description:
                "The subscription uses the documented $5 per mailbox per month 1+ year pricing tier.",
            },
            {
              id: "reset",
              title: "Recreate the subscription",
              description:
                "The documented recreation flow creates a new subscription that starts a fresh pricing lifecycle.",
            },
            {
              id: "new-cycle",
              title: "New subscription lifecycle",
              description:
                "The new subscription starts at the standard pricing tier and begins a new 12-month clock.",
            },
          ],
        },
      ],
    },

    {
      id: "important-considerations",
      title: "Important considerations before recreation",

      description:
        "The documented behavior has several implications for an integration.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "consider-new-id",
              title: "Expect a new subscriptionId",
              description:
                "The recreated subscription does not retain the old subscriptionId.",
            },
            {
              id: "consider-async",
              title: "Treat recreation as asynchronous",
              description:
                "Do not assume the new subscription exists immediately after submitting the request.",
            },
            {
              id: "consider-references",
              title: "Update stored references after completion",
              description:
                "References to the old subscriptionId stop resolving after recreation.",
            },
            {
              id: "consider-mailboxes",
              title: "Account for the reprovisioning state",
              description:
                "The documentation notes that mailboxes can be temporarily expired during reprovisioning.",
            },
            {
              id: "consider-pricing",
              title: "The pricing clock restarts",
              description:
                "The new subscription starts a fresh 12-month pricing lifecycle.",
            },
            {
              id: "consider-config",
              title: "Preserved configuration remains available",
              description:
                "Mailboxes, OAuth routes/client credentials, and auto-renew settings are documented as preserved.",
            },
          ],
        },
      ],
    },

    {
      id: "common-scenarios",
      title: "Common scenarios",

      description:
        "Use these scenarios to understand how the documented pricing reset behaves.",

      content: [
        {
          type: "heading",
          content: "A subscription has just crossed 12 months",
        },

        {
          type: "paragraph",
          content:
            "At the renewal that crosses the 12-month mark, the documented mailbox subscription price changes from $3 to $5 per mailbox per month.",
        },

        {
          type: "heading",
          content: "I want the subscription to start a fresh pricing cycle",
        },

        {
          type: "paragraph",
          content:
            "The documented mechanism is subscription recreation. The new subscription starts at the standard pricing tier and receives a new subscriptionId.",
        },

        {
          type: "heading",
          content: "Will I lose the existing mailboxes?",
        },

        {
          type: "paragraph",
          content:
            "The documentation states that mailboxes are preserved during recreation. It also states that OAuth routes/client credentials and the auto-renew setting are preserved.",
        },

        {
          type: "heading",
          content: "Will the old subscriptionId still work?",
        },

        {
          type: "paragraph",
          content:
            "No. The documentation explicitly states that the recreated subscription receives a new subscriptionId and stored references to the old ID stop resolving.",
        },

        {
          type: "heading",
          content: "Does recreation happen instantly?",
        },

        {
          type: "paragraph",
          content:
            "No. The operation is asynchronous. The documentation notes that mailboxes can be temporarily expired during reprovisioning, typically for a few minutes.",
        },

        {
          type: "heading",
          content: "Does recreation preserve the 12-month pricing tier?",
        },

        {
          type: "paragraph",
          content:
            "No. The new subscription starts at the standard pricing tier and the 12-month pricing clock starts again.",
        },
      ],
    },

    {
      id: "implementation-flow",
      title: "Recommended integration flow",

      description:
        "A practical implementation should account for the asynchronous nature of recreation and the new subscription identifier.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "implementation-identify",
              title: "1. Identify the subscription",
              description:
                "Determine the subscription or domain that needs to be recreated.",
            },
            {
              id: "implementation-request",
              title: "2. Submit the recreation request",
              description:
                "Use the documented recreation endpoint with subscriptionIds or domainNames.",
            },
            {
              id: "implementation-wait",
              title: "3. Wait for completion",
              description:
                "Treat the operation as asynchronous and wait for the new subscription to be provisioned.",
            },
            {
              id: "implementation-new-id",
              title: "4. Capture the new subscriptionId",
              description:
                "Update your records with the new subscription identifier after recreation completes.",
            },
            {
              id: "implementation-verify",
              title: "5. Verify preserved configuration",
              description:
                "Confirm that the expected mailboxes and OAuth configuration remain associated with the recreated subscription.",
            },
            {
              id: "implementation-pricing",
              title: "6. Track the new pricing lifecycle",
              description:
                "Treat the recreated subscription as a new 12-month pricing cycle starting at the standard tier.",
            },
          ],
        },
      ],
    },

    {
      id: "important-notes",
      title: "Important notes",

      description:
        "Keep these documented behaviors in mind when implementing subscription recreation.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "note-price",
              title: "Standard pricing is $3/mailbox/month",
              description:
                "The documented standard price applies before the subscription crosses the 12-month mark.",
            },
            {
              id: "note-long-running",
              title: "1+ year pricing is $5/mailbox/month",
              description:
                "The documented 1+ year price is applied at the renewal that crosses 12 months.",
            },
            {
              id: "note-reset",
              title: "Recreation starts a new pricing cycle",
              description:
                "The recreated subscription starts at standard pricing and gets a fresh 12-month clock.",
            },
            {
              id: "note-mailboxes",
              title: "Mailboxes are preserved",
              description:
                "The documentation states that existing mailboxes are preserved.",
            },
            {
              id: "note-oauth",
              title: "OAuth configuration is preserved",
              description:
                "OAuth routes and client credentials are documented as preserved.",
            },
            {
              id: "note-autorenew",
              title: "Auto-renew is preserved",
              description:
                "The existing auto-renew setting is carried over to the recreated subscription.",
            },
            {
              id: "note-new-id",
              title: "A new subscriptionId is generated",
              description:
                "Stored references to the old subscriptionId must be updated after completion.",
            },
            {
              id: "note-async",
              title: "Recreation is asynchronous",
              description:
                "Do not assume the new subscription is available immediately after submitting the request.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",

      description:
        "Continue with the billing and subscription documentation related to mailbox pricing.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "mailbox-pricing",
              title: "Mailbox Pricing Explained",
              description:
                "Understand the standard mailbox price, 1+ year pricing, and warmup billing behavior.",
              href: "/concepts/billing-wallet/mailbox-pricing",
            },
            {
              id: "volume-discounts",
              title: "Volume Discounts & Custom Pricing",
              description:
                "Understand how negotiated pricing for high-volume Partners differs from standard mailbox pricing.",
              href: "/concepts/billing-wallet/volume-discounts",
            },
            {
              id: "subscription-past-due",
              title: "What Happens When a Subscription Goes PAST_DUE",
              description:
                "Understand failed renewals, the 7-day grace period, and subscription recovery.",
              href: "/concepts/billing-wallet/subscription-past-due",
            },
            {
              id: "cancel-vs-pause",
              title: "Cancel vs Pause: Choosing the Right Action",
              description:
                "Understand the difference between cancellation, disabling auto-renew, and pausing warmup.",
              href: "/concepts/billing-wallet/cancel-vs-pause",
            },
          ],
        },
      ],
    },
  ],
};