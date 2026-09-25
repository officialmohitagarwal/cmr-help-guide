export const oneYearPlusPricingArticle = {
  id: "one-year-plus-pricing",
  slug: "/concepts/subscriptions-renewals/one-year-plus-pricing",
  category: {
    id: "subscriptions-renewals",
    label: "Subscriptions and Renewals",
    slug: "/concepts/subscriptions-renewals",
  },
  title: "The 1+ Year Price Increase and How to Reset It",
  description:
    "Understand why mailbox pricing changes after 12 months, the two available paths after the pricing threshold, what subscription recreation preserves and removes, and how to start a new 12-month pricing cycle.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "CMR mailbox subscriptions start at $3.00 per mailbox per month. When a subscription reaches the 1+ year pricing tier, it renews at $5.00 per mailbox per month. At that point, Partners have two paths: continue with the existing subscription at the new pricing, or recreate the subscription to start a new 12-month pricing cycle at $3.00 per mailbox per month. Recreation provisions new mailbox accounts, so mailbox contents and email history from the old accounts are not preserved, while documented OAuth routes and client credentials are retained.",

  sections: [
    {
      id: "pricing-change",
      title: "What changes after 12 months",
      description:
        "Understand when the 1+ year pricing tier applies and what happens at renewal.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR starts mailbox subscriptions at $3.00 per mailbox per month. Once a subscription crosses the 12-month threshold, the subscription automatically renews at $5.00 per mailbox per month.",
        },
        {
          type: "paragraph",
          content:
            "The pricing change takes effect when the subscription reaches the 1+ year tier at renewal. You do not need to manually change the subscription price.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The price change happens at renewal",
          content:
            "A subscription does not switch to $5.00 per mailbox per month simply because 12 months have passed during an active billing period. The documented pricing change occurs when the subscription crosses the 12-month threshold and renews.",
        },
      ],
    },

    {
      id: "pricing-comparison",
      title: "Standard pricing vs 1+ year pricing",
      description:
        "The mailbox price depends on how long the subscription has been active.",
      content: [
        {
          type: "heading",
          content: "Standard pricing",
        },
        {
          type: "paragraph",
          content:
            "New mailbox subscriptions start at $3.00 per mailbox per month.",
        },
        {
          type: "heading",
          content: "1+ year pricing",
        },
        {
          type: "paragraph",
          content:
            "Subscriptions that have crossed the 12-month threshold automatically renew at $5.00 per mailbox per month.",
        },
        {
          type: "steps",
          items: [
            {
              id: "standard-cycle",
              title: "1. Subscription starts at standard pricing",
              description:
                "The mailbox subscription starts at $3.00 per mailbox per month.",
            },
            {
              id: "cross-threshold",
              title: "2. Subscription crosses the 12-month threshold",
              description:
                "The subscription reaches the point where the 1+ year pricing tier applies.",
            },
            {
              id: "renew-new-price",
              title: "3. Renewal uses 1+ year pricing",
              description:
                "At renewal, the mailbox price changes to $5.00 per mailbox per month.",
            },
          ],
        },
      ],
    },

    {
      id: "two-options",
      title: "Your two options after the 12-month threshold",
      description:
        "Partners can either continue the existing subscription or recreate it to begin a new pricing cycle.",
      content: [
        {
          type: "paragraph",
          content:
            "Once the subscription reaches the 1+ year pricing tier, there are two ways to proceed. You can continue using the existing subscription at $5.00 per mailbox per month, or recreate the subscription to start a new 12-month cycle at the standard $3.00 per mailbox per month pricing.",
        },
        {
          type: "heading",
          content: "Option 1: Continue with the existing subscription",
        },
        {
          type: "paragraph",
          content:
            "If you continue with the existing subscription, nothing needs to be recreated. The existing mailboxes remain under the subscription and future renewals use the applicable 1+ year price of $5.00 per mailbox per month.",
        },
        {
          type: "heading",
          content: "Option 2: Recreate the subscription",
        },
        {
          type: "paragraph",
          content:
            "If you do not want to continue at the $5.00 per mailbox per month price, you can use the documented subscription recreation flow. Recreation starts a new subscription and a new 12-month pricing cycle at the standard $3.00 per mailbox per month price.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Recreation affects the mailbox accounts",
          content:
            "Recreation is not simply a price change on the same mailbox accounts. The existing mailbox accounts are removed and new mailbox accounts are provisioned. Plan for the loss of mailbox contents and email history before starting the recreation process.",
        },
      ],
    },

    {
      id: "continue-existing",
      title: "Option 1: Continue with the existing subscription",
      description:
        "Keep the existing mailbox accounts and continue at the 1+ year pricing.",
      content: [
        {
          type: "paragraph",
          content:
            "The simplest option is to continue with the existing subscription. No recreation is required.",
        },
        {
          type: "steps",
          items: [
            {
              id: "continue-existing-price",
              title: "Continue the existing subscription",
              description:
                "The existing subscription remains active and the existing mailboxes continue under it.",
            },
            {
              id: "continue-five-dollar",
              title: "Renew at $5.00 per mailbox per month",
              description:
                "Once the subscription is in the 1+ year pricing tier, renewal uses the $5.00 per mailbox per month price.",
            },
            {
              id: "retain-mailboxes",
              title: "Keep the existing mailbox accounts",
              description:
                "Because the subscription is not recreated, the existing mailbox accounts continue rather than being replaced.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "No migration is required",
          content:
            "Continuing the subscription avoids the mailbox recreation process. Existing mailbox accounts remain in use, with the applicable 1+ year pricing.",
        },
      ],
    },

    {
      id: "recreate-option",
      title: "Option 2: Recreate the subscription",
      description:
        "Recreate the subscription when you want to start a fresh 12-month pricing cycle.",
      content: [
        {
          type: "paragraph",
          content:
            "If you do not want to continue paying $5.00 per mailbox per month, CMR provides a subscription recreation flow that starts a new 12-month pricing cycle.",
        },
        {
          type: "steps",
          items: [
            {
              id: "recreate-old-subscription",
              title: "1. Start subscription recreation",
              description:
                "Submit the documented recreation request for the existing subscription or domain.",
            },
            {
              id: "remove-old-mailboxes",
              title: "2. Existing mailbox accounts are removed",
              description:
                "The existing mailbox accounts are removed as part of the recreation process.",
            },
            {
              id: "provision-new-mailboxes",
              title: "3. New mailbox accounts are provisioned",
              description:
                "CMR provisions new mailbox accounts for the recreated subscription.",
            },
            {
              id: "new-pricing-cycle",
              title: "4. A new 12-month pricing cycle begins",
              description:
                "The recreated subscription starts again at the standard $3.00 per mailbox per month pricing.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Recreation is a mailbox replacement process",
          content:
            "Do not treat recreation as a simple subscription-price reset. The old mailbox accounts are removed and new mailbox accounts are created. Existing mailbox contents and email history are therefore not carried into the new mailbox accounts.",
        },
      ],
    },

    {
      id: "what-recreation-preserves",
      title: "What subscription recreation preserves",
      description:
        "Some subscription and OAuth configuration is retained even though new mailbox accounts are provisioned.",
      content: [
        {
          type: "paragraph",
          content:
            "Recreation creates a new subscription and new mailbox accounts, but the documented recreation flow preserves important configuration used to maintain the Partner integration.",
        },
        {
          type: "steps",
          items: [
            {
              id: "preserve-oauth-routes",
              title: "OAuth routes are preserved",
              description:
                "The OAuth routes associated with the integration are preserved during recreation.",
            },
            {
              id: "preserve-client-credentials",
              title: "OAuth client credentials are preserved",
              description:
                "The documented OAuth client credentials are retained, so the Partner does not need to recreate the OAuth application configuration from scratch.",
            },
            {
              id: "preserve-autorenew",
              title: "Auto-renew setting is preserved",
              description:
                "The subscription's auto-renew configuration is carried over to the recreated subscription.",
            },
            {
              id: "new-subscription",
              title: "A new subscription is created",
              description:
                "The recreated setup receives a new subscriptionId and begins a fresh pricing cycle.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Configuration is retained, mailbox accounts are not",
          content:
            "The key distinction is that OAuth and integration configuration can be preserved while the actual mailbox accounts are replaced. Do not interpret preserved OAuth configuration as preserved mailbox contents.",
        },
      ],
    },

    {
      id: "what-is-lost",
      title: "What happens to mailbox data",
      description:
        "Understand what is not carried over when existing mailbox accounts are removed.",
      content: [
        {
          type: "paragraph",
          content:
            "Because recreation removes the existing mailbox accounts and provisions new mailbox accounts, the new mailboxes do not contain the mailbox data that existed in the old accounts.",
        },
        {
          type: "steps",
          items: [
            {
              id: "old-mailbox-removed",
              title: "Existing mailbox is removed",
              description:
                "The original mailbox account is removed as part of the recreation process.",
            },
            {
              id: "email-history",
              title: "Existing email history is not carried over",
              description:
                "Messages and mailbox contents belonging to the old mailbox account are not available in the newly provisioned mailbox.",
            },
            {
              id: "new-mailbox",
              title: "A new mailbox account is created",
              description:
                "The new mailbox starts as a newly provisioned account under the recreated subscription.",
            },
            {
              id: "oauth-retained",
              title: "OAuth integration remains configured",
              description:
                "OAuth routes and client credentials are retained even though the mailbox accounts themselves have been replaced.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Important: protect any data you need before recreation",
          content:
            "If mailbox contents, historical messages, or other mailbox-level data are important to your customer, do not begin recreation without first handling the data that needs to be retained. Recreation replaces the mailbox accounts.",
        },
      ],
    },

    {
      id: "subscription-updated",
      title: "The subscription.updated webhook",
      description:
        "CMR sends an event when a subscription first enters the 1+ year pricing tier.",
      content: [
        {
          type: "paragraph",
          content:
            "When a subscription crosses the 12-month threshold and its pricing is updated, CMR sends a subscription.updated webhook event to your registered webhook endpoint.",
        },
        {
          type: "paragraph",
          content:
            "The 1+ Year Subscriptions documentation states that this webhook fires exactly once per subscription — the first time the subscription crosses the 12-month mark. It does not fire again on later renewals.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Use the event as a pricing-change signal",
          content:
            "If your Partner platform tracks subscription pricing locally, use subscription.updated to synchronize the subscription when it first enters the 1+ year pricing tier.",
        },
      ],
    },

    {
      id: "what-if-no-action",
      title: "What happens if you take no action",
      description:
        "The existing subscription continues at the 1+ year pricing.",
      content: [
        {
          type: "paragraph",
          content:
            "You do not have to recreate a subscription when it reaches the 1+ year pricing tier. If you take no action, the existing subscription continues and renews at $5.00 per mailbox per month.",
        },
        {
          type: "steps",
          items: [
            {
              id: "no-action-price",
              title: "Pricing changes at renewal",
              description:
                "The subscription crosses the 12-month threshold and the renewal uses $5.00 per mailbox per month.",
            },
            {
              id: "subscription-continues",
              title: "Existing subscription continues",
              description:
                "The existing subscription remains in place and the existing mailboxes continue under it.",
            },
            {
              id: "future-renewals",
              title: "Future renewals continue",
              description:
                "The subscription continues to renew at the applicable 1+ year pricing.",
            },
          ],
        },
      ],
    },

    {
      id: "recreation-api",
      title: "Recreate a subscription",
      description:
        "Use the recreation API to start a new subscription and reset the pricing cycle.",
      content: [
        {
          type: "paragraph",
          content:
            "The CMR 1+ Year Subscriptions documentation provides a Recreation API for this operation.",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /component/subscriptions/recreate",
        },
        {
          type: "paragraph",
          content:
            "The request can identify subscriptions by subscription ID or by domain name.",
        },
        {
          type: "heading",
          content: "By subscription ID",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "subscriptionIds": ["<subscription_id>"]\n}',
        },
        {
          type: "heading",
          content: "By domain name",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "domainNames": ["yourdomain.com"]\n}',
        },
        {
          type: "callout",
          variant: "warning",
          title: "Check the current API endpoint before implementation",
          content:
            "The 1+ Year Subscriptions page shows POST /component/subscriptions/recreate in its Recreation API section, while the main Subscriptions documentation lists POST /subscriptions/recreate. Treat the endpoint shown in the current API reference as the source of truth when implementing the integration.",
        },
      ],
    },

    {
      id: "async-recreation",
      title: "Recreation is asynchronous",
      description:
        "The recreation request queues the operation rather than completing it immediately.",
      content: [
        {
          type: "paragraph",
          content:
            "Subscription recreation happens asynchronously. A successful API response confirms that the recreation request has been queued; it does not mean that the new subscription or mailboxes have already finished provisioning.",
        },
        {
          type: "steps",
          items: [
            {
              id: "queue-recreation",
              title: "1. Submit the recreation request",
              description:
                "Send the subscription IDs or domain names to the recreation endpoint.",
            },
            {
              id: "recreation-queued",
              title: "2. CMR queues the operation",
              description:
                "The API response confirms that the recreation request has been queued.",
            },
            {
              id: "temporary-expiry",
              title: "3. Existing mailboxes become temporarily unavailable",
              description:
                "During reprovisioning, the mailbox accounts can be temporarily unavailable. CMR documents the reprovisioning period as typically lasting a few minutes.",
            },
            {
              id: "new-mailboxes",
              title: "4. New mailboxes are provisioned",
              description:
                "CMR provisions new mailbox accounts under the recreated subscription.",
            },
            {
              id: "new-subscription",
              title: "5. The new subscription becomes available",
              description:
                "The recreated subscription begins its new pricing cycle at the standard $3.00 per mailbox per month pricing.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not treat recreation as an instant operation",
          content:
            "Your application should account for the asynchronous reprovisioning period instead of assuming that the new subscription and mailboxes are available immediately after the API request.",
        },
      ],
    },

    {
      id: "new-subscription-id",
      title: "The recreated subscription gets a new subscriptionId",
      description:
        "Update stored references after recreation.",
      content: [
        {
          type: "paragraph",
          content:
            "Recreation provisions a new subscription, so the new subscription receives a new subscriptionId.",
        },
        {
          type: "paragraph",
          content:
            "The CMR documentation states that the old subscriptionId no longer resolves after recreation. Any system that stores subscription IDs must therefore update its stored reference after the new subscription has been provisioned.",
        },
        {
          type: "steps",
          items: [
            {
              id: "old-id",
              title: "Existing subscription has an old ID",
              description:
                "Your database or application may contain the subscriptionId belonging to the original subscription.",
            },
            {
              id: "recreate",
              title: "Recreate the subscription",
              description:
                "CMR processes the recreation and provisions the new subscription.",
            },
            {
              id: "new-id",
              title: "New subscriptionId is issued",
              description:
                "The recreated subscription receives a new subscriptionId.",
            },
            {
              id: "update-reference",
              title: "Update your stored reference",
              description:
                "Replace the old subscriptionId in your system with the new subscriptionId.",
            },
          ],
        },
      ],
    },

    {
      id: "billing-behavior",
      title: "Billing behavior during recreation",
      description:
        "Understand the documented billing behavior associated with recreation.",
      content: [
        {
          type: "paragraph",
          content:
            "The CMR 1+ Year Subscriptions documentation states that no new charge is applied during recreation and that the new subscription inherits the billing context of the original subscription.",
        },
        {
          type: "paragraph",
          content:
            "The purpose of recreation is to reset the subscription's pricing cycle. The new subscription then begins the standard pricing cycle at $3.00 per mailbox per month.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Pricing reset vs mailbox replacement",
          content:
            "Recreation has two distinct effects: it resets the subscription's pricing cycle and it replaces the old mailbox accounts with newly provisioned accounts.",
        },
      ],
    },

    {
      id: "decision-guide",
      title: "Which option should you use?",
      description:
        "Use the subscription state, pricing requirements, and mailbox data requirements to determine the appropriate path.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "continue-option",
              title: "Continue the subscription when existing mailbox data must remain",
              description:
                "Keep the existing subscription if preserving the current mailbox accounts and their contents is important. The subscription continues at $5.00 per mailbox per month after entering the 1+ year pricing tier.",
            },
            {
              id: "recreate-option",
              title: "Recreate when starting a fresh pricing cycle is required",
              description:
                "Use recreation when you want the subscription to start a new 12-month cycle at $3.00 per mailbox per month and you are prepared for the existing mailbox accounts and their contents to be replaced.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Confirm the data impact before recreation",
          content:
            "The pricing benefit of recreation comes with a mailbox replacement process. Make sure the Partner understands that existing mailbox contents and email history will not be available in the newly provisioned mailbox accounts.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid the most common problems when handling 1+ year pricing.",
      content: [
        {
          type: "heading",
          content: "Assuming the price stays at $3 indefinitely",
        },
        {
          type: "paragraph",
          content:
            "Subscriptions that cross the 12-month threshold automatically renew at $5.00 per mailbox per month unless the pricing cycle is reset through recreation.",
        },

        {
          type: "heading",
          content: "Assuming recreation keeps mailbox contents",
        },
        {
          type: "paragraph",
          content:
            "Recreation replaces the old mailbox accounts. Existing mailbox contents and email history are not carried over to the newly provisioned accounts.",
        },

        {
          type: "heading",
          content: "Thinking OAuth is deleted with the mailbox",
        },
        {
          type: "paragraph",
          content:
            "The documented recreation flow preserves OAuth routes and client credentials. Preserved OAuth configuration should not be confused with preserved mailbox data.",
        },

        {
          type: "heading",
          content: "Expecting the subscription.updated webhook on every renewal",
        },
        {
          type: "paragraph",
          content:
            "The 1+ Year Subscriptions documentation states that subscription.updated fires once when the subscription first crosses the 12-month threshold. It does not fire again on later renewals.",
        },

        {
          type: "heading",
          content: "Treating recreation as an instant operation",
        },
        {
          type: "paragraph",
          content:
            "Recreation is asynchronous. Account for the temporary reprovisioning period before assuming the new subscription and mailboxes are ready.",
        },

        {
          type: "heading",
          content: "Continuing to use the old subscriptionId",
        },
        {
          type: "paragraph",
          content:
            "The recreated subscription receives a new subscriptionId. Update stored references after recreation.",
        },

        {
          type: "heading",
          content: "Using cancellation to reset pricing",
        },
        {
          type: "paragraph",
          content:
            "Cancellation is different from recreation. Use the documented recreation flow when the goal is to start a new 12-month pricing cycle.",
        },
      ],
    },

    {
      id: "pricing-flow",
      title: "The complete pricing lifecycle",
      description:
        "Use this sequence to understand both paths after the initial 12-month pricing cycle.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "start-three",
              title: "1. Subscription starts at $3.00",
              description:
                "The mailbox subscription begins at the standard $3.00 per mailbox per month pricing.",
            },
            {
              id: "reach-one-year",
              title: "2. Subscription crosses 12 months",
              description:
                "The subscription reaches the 1+ year pricing threshold.",
            },
            {
              id: "updated-event",
              title: "3. subscription.updated is sent",
              description:
                "CMR sends the subscription.updated webhook when the pricing tier is updated.",
            },
            {
              id: "five-dollar-renewal",
              title: "4. Existing subscription renews at $5.00",
              description:
                "If you continue the existing subscription, it renews at $5.00 per mailbox per month.",
            },
            {
              id: "continue-or-recreate",
              title: "5. Choose how to proceed",
              description:
                "Continue the existing subscription at $5.00, or use recreation to begin a new 12-month pricing cycle.",
            },
            {
              id: "recreate-mailboxes",
              title: "6. Recreation replaces the mailboxes",
              description:
                "If recreation is selected, the existing mailbox accounts are removed and new mailbox accounts are provisioned.",
            },
            {
              id: "new-three-dollar-cycle",
              title: "7. New cycle starts at $3.00",
              description:
                "The recreated subscription begins a new 12-month pricing cycle at $3.00 per mailbox per month.",
            },
          ],
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
                "Understand the recovery process when a subscription renewal fails.",
              href: "/concepts/subscriptions-renewals/recover-past-due",
            },
            {
              id: "auto-renew-manual",
              title: "Auto-Renew vs Manual Renew",
              description:
                "Understand automatic renewal, manual renewal, and how auto-renewal affects subscription behavior.",
              href: "/concepts/subscriptions-renewals/auto-renew-vs-manual-renew",
            },
          ],
        },
      ],
    },
  ],
};