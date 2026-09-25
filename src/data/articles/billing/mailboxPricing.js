export const mailboxPricingArticle = {
  id: "mailbox-pricing",

  slug: "/concepts/billing-wallet/mailbox-pricing",

  category: {
    id: "billing-wallet",
    label: "Billing and Wallet",
    slug: "/concepts/billing-wallet",
  },

  title: "Mailbox Pricing Explained",

  description:
    "Understand CMR mailbox subscription pricing, the 12-month pricing change, warmup charges, proration, and how billing is applied throughout the mailbox lifecycle.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "CMR mailbox pricing has two main parts: the mailbox subscription itself and optional warmup billing. A mailbox subscription starts at $3 per mailbox per month and changes to $5 per mailbox per month at the renewal that crosses the 12-month mark. Warmup is billed separately depending on when it is enabled and whether the mailbox is active at renewal.",

  sections: [
    {
      id: "pricing-overview",
      title: "How mailbox pricing works",

      description:
        "CMR separates the base mailbox subscription from optional warmup charges.",

      content: [
        {
          type: "paragraph",
          content:
            "The mailbox subscription is billed per mailbox per month. The documented standard price is $3 per mailbox per month from provisioning until the subscription crosses 12 months.",
        },

        {
          type: "paragraph",
          content:
            "Once the subscription reaches the renewal that crosses the 12-month active mark, the mailbox subscription moves to the documented 1+ year price of $5 per mailbox per month.",
        },

        {
          type: "paragraph",
          content:
            "Warmup is an additional billing component. Its charge depends on whether it is enabled when the mailbox is ordered, added during an existing billing period, or active when the subscription renews.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Mailbox price and warmup price are separate",
          content:
            "The mailbox subscription price covers the mailbox subscription itself. Warmup has its own pricing and billing behavior.",
        },
      ],
    },

    {
      id: "base-mailbox-pricing",
      title: "Mailbox subscription pricing",

      description:
        "The documented mailbox subscription has a standard price and a 1+ year price.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "standard-mailbox-price",
              title: "$3 per mailbox per month",
              description:
                "The standard mailbox subscription price applies from provisioning until the subscription crosses 12 months.",
            },
            {
              id: "twelve-month-crossing",
              title: "Renewal crossing 12 months",
              description:
                "The pricing transition occurs at the renewal that crosses the 12-month active mark.",
            },
            {
              id: "one-year-price",
              title: "$5 per mailbox per month",
              description:
                "The documented 1+ year mailbox subscription price is automatically applied after the renewal crosses the 12-month mark.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "The price change is automatic",
          content:
            "The documentation describes the $5 pricing as automatically applied at the renewal that crosses the 12-month mark.",
        },
      ],
    },

    {
      id: "why-price-changes",
      title: "Why does the price change after 12 months?",

      description:
        "The documentation attributes the 1+ year pricing change to underlying vendor licensing costs.",

      content: [
        {
          type: "paragraph",
          content:
            "The CMR documentation states that the 12-month price increase reflects higher underlying vendor licensing costs from Google Workspace and Microsoft 365 for accounts active for more than a year.",
        },

        {
          type: "paragraph",
          content:
            "The documentation specifically describes this as an underlying vendor-cost change rather than a discretionary CMR markup.",
        },

        {
          type: "callout",
          variant: "info",
          title: "When does the change happen?",
          content:
            "The documented transition occurs at the renewal that crosses the 12-month mark, rather than immediately on the day the mailbox reaches its 12-month anniversary.",
        },
      ],
    },

    {
      id: "warmup-at-order",
      title: "Warmup pricing when ordering a mailbox",

      description:
        "Warmup can be enabled when the mailbox is provisioned.",

      content: [
        {
          type: "paragraph",
          content:
            "Warmup can be enabled at mailbox order time using the onWarmup setting for the mailbox.",
        },

        {
          type: "paragraph",
          content:
            "When onWarmup is set to true, the warmup charge is bundled into the order total. The documented default is false when the setting is omitted.",
        },

        {
          type: "code",
          language: "json",
          code:
            '{\n  "username": "alice",\n  "onWarmup": true\n}',
        },

        {
          type: "callout",
          variant: "info",
          title: "Warmup is optional at order time",
          content:
            "If onWarmup is omitted, the documented default is false. Warmup is therefore not automatically included with every mailbox order.",
        },
      ],
    },

    {
      id: "warmup-mid-period",
      title: "Warmup added during an existing billing period",

      description:
        "Adding warmup to an existing mailbox uses prorated billing.",

      content: [
        {
          type: "paragraph",
          content:
            "If warmup is added after the mailbox has already been provisioned and the current billing period is still active, CMR applies a prorated warmup charge for the remaining portion of that billing period.",
        },

        {
          type: "paragraph",
          content:
            "The documented formula is:",
        },

        {
          type: "code",
          language: "text",
          code:
            "Charge = warmupPrice × (daysRemaining / 30)",
        },

        {
          type: "steps",
          items: [
            {
              id: "mid-period-price",
              title: "Use the warmup price",
              description:
                "Start with the documented warmupPrice for the mailbox.",
            },
            {
              id: "mid-period-days",
              title: "Calculate the remaining days",
              description:
                "Determine how many days remain in the current billing period.",
            },
            {
              id: "mid-period-formula",
              title: "Apply the proration formula",
              description:
                "Multiply warmupPrice by daysRemaining divided by 30.",
            },
            {
              id: "mid-period-charge",
              title: "Apply the resulting charge",
              description:
                "The prorated amount is charged for the remainder of the current billing period.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Mid-period warmup is not a full-period charge",
          content:
            "When warmup is added during an existing billing period, the documented billing rule is prorated rather than charging the full warmup price for the entire period.",
        },
      ],
    },

    {
      id: "warmup-renewal",
      title: "Warmup billing at renewal",

      description:
        "Warmup is billed differently at renewal depending on the mailbox's warmup status.",

      content: [
        {
          type: "paragraph",
          content:
            "At subscription renewal, the documentation states that the full warmup price applies to active warmup mailboxes.",
        },

        {
          type: "paragraph",
          content:
            "Only mailboxes with warmupStatus set to ACTIVE are included in renewal warmup billing. PAUSED mailboxes are excluded according to the billing rule documented in the Billing & Wallet section.",
        },

        {
          type: "steps",
          items: [
            {
              id: "renewal-active",
              title: "warmupStatus = ACTIVE",
              description:
                "The mailbox is included in renewal warmup billing and the full warmup price applies.",
            },
            {
              id: "renewal-paused",
              title: "warmupStatus = PAUSED",
              description:
                "The mailbox is excluded from renewal warmup billing according to the documented billing rule.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "PAUSED is different from permanently disabled",
          content:
            "The billing documentation distinguishes warmup status during renewal. Do not treat a paused warmup mailbox as though its entire mailbox subscription has been paused.",
        },
      ],
    },

    {
      id: "warmup-billing-formulas",
      title: "Warmup billing formulas",

      description:
        "The documentation provides different billing calculations depending on when warmup is applied.",

      content: [
        {
          type: "heading",
          content: "At order time",
        },

        {
          type: "code",
          language: "text",
          code:
            "Total = (mailbox count × mailbox price)\n      + (warmup count × warmup price)",
        },

        {
          type: "paragraph",
          content:
            "At order time, warmup is included in the order total only for mailboxes where onWarmup is set to true.",
        },

        {
          type: "heading",
          content: "When warmup is added mid-period",
        },

        {
          type: "code",
          language: "text",
          code:
            "Charge = warmupPrice × (daysRemaining / 30)",
        },

        {
          type: "paragraph",
          content:
            "The mid-period charge is prorated according to the remaining days in the current billing period.",
        },

        {
          type: "heading",
          content: "At renewal",
        },

        {
          type: "code",
          language: "text",
          code:
            "Renewal warmup total =\nactive warmup mailboxes × warmup price",
        },

        {
          type: "paragraph",
          content:
            "The documented renewal rule applies the full warmup price to active warmup mailboxes. PAUSED mailboxes are excluded from this renewal warmup billing rule.",
        },
      ],
    },

    {
      id: "pricing-lifecycle",
      title: "How mailbox pricing changes over time",

      description:
        "The mailbox and warmup charges follow different lifecycle rules.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "lifecycle-provisioning",
              title: "1. Mailbox is provisioned",
              description:
                "The mailbox starts with the standard $3 per mailbox per month subscription price.",
            },
            {
              id: "lifecycle-warmup",
              title: "2. Warmup can be enabled",
              description:
                "Warmup can be enabled at order time or added later to an existing mailbox.",
            },
            {
              id: "lifecycle-midperiod",
              title: "3. Warmup added mid-period",
              description:
                "If warmup is added during the current billing period, the documented charge is prorated.",
            },
            {
              id: "lifecycle-twelve-month",
              title: "4. Subscription crosses 12 months",
              description:
                "At the renewal that crosses the 12-month active mark, the mailbox subscription price changes to $5 per mailbox per month.",
            },
            {
              id: "lifecycle-renewal",
              title: "5. Subsequent renewals",
              description:
                "The mailbox remains on the applicable subscription pricing tier, while active warmup is billed at its full warmup price at renewal.",
            },
          ],
        },
      ],
    },

    {
      id: "pricing-vs-warmup",
      title: "Mailbox pricing vs warmup pricing",

      description:
        "These are separate parts of the billing model and should be represented separately in your platform.",

      content: [
        {
          type: "paragraph",
          content:
            "The mailbox subscription and warmup are separate billing concepts. A mailbox can exist without warmup, because onWarmup defaults to false when it is not provided at order time.",
        },

        {
          type: "steps",
          items: [
            {
              id: "mailbox-component",
              title: "Mailbox subscription",
              description:
                "$3 per mailbox per month before the 12-month pricing transition, then $5 per mailbox per month after the renewal crossing 12 months.",
            },
            {
              id: "warmup-component",
              title: "Warmup",
              description:
                "An additional charge that depends on when warmup is enabled and the mailbox's warmup status at renewal.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Do not combine the two pricing lifecycles",
          content:
            "The mailbox subscription's 12-month pricing transition and warmup's billing lifecycle are separate rules. Track them independently in your billing logic.",
        },
      ],
    },

    {
      id: "pricing-events",
      title: "The 12-month pricing transition event",

      description:
        "CMR exposes a subscription event when the mailbox crosses the 12-month pricing threshold.",

      content: [
        {
          type: "paragraph",
          content:
            "The subscription lifecycle documentation states that subscription.updated fires when a subscription crosses the 12-month mark and the mailbox price changes to $5 per mailbox per month.",
        },

        {
          type: "paragraph",
          content:
            "The event fires once for this pricing transition and does not continue firing on later renewals simply because the subscription remains in the 1+ year pricing tier.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Use the event to synchronize pricing state",
          content:
            "If your platform stores subscription pricing information, subscription.updated can be used to synchronize your records when the documented 12-month pricing transition occurs.",
        },
      ],
    },

    {
      id: "wallet-billing",
      title: "How mailbox charges relate to the Partner wallet",

      description:
        "CMR charges the Partner wallet rather than maintaining separate CMR wallets for individual customers.",

      content: [
        {
          type: "paragraph",
          content:
            "Mailbox subscriptions and warmup charges are deducted from the Partner wallet. CMR does not maintain a separate CMR wallet for each customer.",
        },

        {
          type: "paragraph",
          content:
            "The Partner is billed by CMR and can structure customer-facing pricing independently.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Partner billing vs customer pricing",
          content:
            "The CMR charge to the Partner and the price the Partner charges its own customers are separate concepts.",
        },
      ],
    },

    {
      id: "pricing-examples",
      title: "Common pricing scenarios",

      description:
        "These examples illustrate how the documented rules apply in different situations.",

      content: [
        {
          type: "heading",
          content: "A newly provisioned mailbox without warmup",
        },

        {
          type: "paragraph",
          content:
            "The mailbox starts at the standard $3 per mailbox per month subscription price. Because warmup is not enabled, there is no warmup charge associated with the order.",
        },

        {
          type: "heading",
          content: "A newly provisioned mailbox with warmup",
        },

        {
          type: "paragraph",
          content:
            "The mailbox uses the standard subscription price and warmup is included in the order total because onWarmup is set to true.",
        },

        {
          type: "heading",
          content: "Warmup is added halfway through a billing period",
        },

        {
          type: "paragraph",
          content:
            "The warmup charge is prorated using warmupPrice × (daysRemaining / 30) rather than charging the full warmup price for the entire period.",
        },

        {
          type: "heading",
          content: "A mailbox reaches the 12-month renewal",
        },

        {
          type: "paragraph",
          content:
            "At the renewal that crosses the 12-month active mark, the mailbox subscription moves from the documented $3 price to $5 per mailbox per month.",
        },

        {
          type: "heading",
          content: "Warmup is paused before renewal",
        },

        {
          type: "paragraph",
          content:
            "The Billing & Wallet documentation states that PAUSED mailboxes are excluded from renewal warmup billing.",
        },
      ],
    },

    {
      id: "important-notes",
      title: "Important notes",

      description:
        "Keep these documented pricing rules in mind when implementing billing or displaying pricing information.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "note-standard",
              title: "Standard mailbox price is $3",
              description:
                "The documented standard price is $3 per mailbox per month before the 12-month pricing transition.",
            },
            {
              id: "note-one-year",
              title: "1+ year mailbox price is $5",
              description:
                "The documented $5 price is automatically applied at the renewal that crosses the 12-month mark.",
            },
            {
              id: "note-order-warmup",
              title: "Order-time warmup is optional",
              description:
                "Warmup is bundled into the order total only when onWarmup is true.",
            },
            {
              id: "note-default",
              title: "onWarmup defaults to false",
              description:
                "If onWarmup is omitted when ordering a mailbox, the documented default is false.",
            },
            {
              id: "note-proration",
              title: "Mid-period warmup is prorated",
              description:
                "The documented formula is warmupPrice × (daysRemaining / 30).",
            },
            {
              id: "note-renewal",
              title: "Renewal warmup uses the full warmup price",
              description:
                "At renewal, active warmup mailboxes are billed the full warmup price.",
            },
            {
              id: "note-paused",
              title: "PAUSED mailboxes are excluded from renewal warmup billing",
              description:
                "This is the billing rule stated in the Billing & Wallet section.",
            },
            {
              id: "note-vendor",
              title: "The 12-month increase reflects vendor costs",
              description:
                "The documentation attributes the increase to higher underlying Google Workspace and Microsoft 365 vendor licensing costs.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",

      description:
        "Continue with the billing guides that explain the other parts of the pricing lifecycle.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "wallet-balance",
              title: "How Wallet Balance & Charges Work",
              description:
                "Understand how CMR charges are deducted from the Partner wallet and how billing relates to customer pricing.",
              href: "/concepts/billing-wallet/wallet-balance-charges",
            },
            {
              id: "volume-discounts",
              title: "Volume Discounts & Custom Pricing",
              description:
                "Understand negotiated pricing for Partners with high mailbox volumes.",
              href: "/concepts/billing-wallet/volume-discounts",
            },
            {
              id: "reset-pricing",
              title: "Resetting Long-Running Subscription Pricing",
              description:
                "Understand how the documented subscription recreation flow starts a new pricing cycle.",
              href: "/concepts/billing-wallet/reset-subscription-pricing",
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
                "Understand cancellation, auto-renewal, and warmup controls and how their billing behavior differs.",
              href: "/concepts/billing-wallet/cancel-vs-pause",
            },
          ],
        },
      ],
    },
  ],
};