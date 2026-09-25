export const billingCategory = {
  id: "billing-wallet",

  label: "Billing and Wallet",

  slug: "/concepts/billing-wallet",

  title: "Billing and Wallet",

  description:
    "Understand how CMR billing works, including Partner wallet charges, mailbox pricing, volume pricing, subscription renewals, and cancellation or pause controls.",

  articles: [
    {
      id: "wallet-balance-charges",

      title: "How Wallet Balance & Charges Work",

      slug: "/concepts/billing-wallet/wallet-balance-charges",

      description:
        "Understand how the Partner wallet works, what CMR charges against it, how wallet balance relates to customer pricing, and what happens when the available balance is insufficient.",
    },

    {
      id: "mailbox-pricing",

      title: "Mailbox Pricing Explained",

      slug: "/concepts/billing-wallet/mailbox-pricing",

      description:
        "Understand CMR mailbox subscription pricing, the 12-month pricing change, warmup charges, proration, and renewal billing.",
    },

    {
      id: "volume-discounts",

      title: "Volume Discounts & Custom Pricing",

      slug: "/concepts/billing-wallet/volume-discounts",

      description:
        "Understand how negotiated pricing works for Partners with high mailbox volumes and how custom pricing differs from standard mailbox pricing.",
    },

    {
      id: "reset-subscription-pricing",

      title: "Resetting Long-Running Subscription Pricing",

      slug: "/concepts/billing-wallet/reset-subscription-pricing",

      description:
        "Understand why long-running mailbox subscriptions move to 1+ year pricing and how the documented subscription recreation flow starts a fresh pricing cycle.",
    },

    {
      id: "subscription-past-due",

      title: "What Happens When a Subscription Goes PAST_DUE",

      slug: "/concepts/billing-wallet/subscription-past-due",

      description:
        "Understand what PAST_DUE means, how the 7-day grace period works, how subscription recovery works, and what happens when a subscription becomes EXPIRED.",
    },

    {
      id: "cancel-vs-pause",

      title: "Cancel vs Pause: Choosing the Right Action",

      slug: "/concepts/billing-wallet/cancel-vs-pause",

      description:
        "Understand the difference between cancelling a subscription, disabling auto-renew, pausing warmup, and permanently disabling warmup.",
    },
  ],
};