export const volumeDiscountsArticle = {
  id: "volume-discounts",

  slug: "/concepts/billing-wallet/volume-discounts",

  category: {
    id: "billing-wallet",
    label: "Billing and Wallet",
    slug: "/concepts/billing-wallet",
  },

  title: "Volume Discounts & Custom Pricing",

  description:
    "Understand how volume pricing works for CMR Partners, when custom pricing may apply, how Partner pricing differs from CMR pricing, and how to approach high-volume pricing discussions.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "CMR supports negotiated pricing for Partners with high mailbox volumes. Volume pricing is different from the standard pricing published for mailbox subscriptions and is handled through CMR Support rather than through a self-serve volume-discount API. This guide explains what volume pricing means, when it may be relevant, how it fits into the Partner billing model, and what information to have ready when discussing custom pricing.",

  sections: [
    {
      id: "what-is-volume-pricing",
      title: "What is volume pricing?",

      description:
        "Volume pricing refers to negotiated pricing that may be available to Partners managing a high number of mailboxes.",

      content: [
        {
          type: "paragraph",
          content:
            "Standard CMR mailbox pricing applies to normal mailbox subscription purchases. For Partners operating at higher mailbox volumes, CMR documents the possibility of negotiating custom pricing.",
        },

        {
          type: "paragraph",
          content:
            "The API documentation states that pricing can be negotiated for Partners with high mailbox volumes and directs Partners to contact CMR Support for custom pricing.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Volume pricing is negotiated",
          content:
            "CMR does not document fixed volume thresholds, predefined discount percentages, or public discount tiers. High-volume pricing is handled through a direct discussion with CMR Support.",
        },
      ],
    },

    {
      id: "standard-vs-volume-pricing",
      title: "Standard pricing vs. negotiated pricing",

      description:
        "Volume pricing should be understood as a separate commercial arrangement from the standard mailbox subscription pricing.",

      content: [
        {
          type: "paragraph",
          content:
            "The standard mailbox pricing documented by CMR provides the baseline cost for mailbox subscriptions. Volume pricing is an alternative arrangement that may be negotiated when a Partner operates at sufficiently high mailbox volumes.",
        },

        {
          type: "steps",
          items: [
            {
              id: "standard-pricing",
              title: "Standard pricing",
              description:
                "The normal mailbox subscription price applies when no custom pricing arrangement has been established.",
            },
            {
              id: "volume-pricing",
              title: "Negotiated volume pricing",
              description:
                "Partners operating at high mailbox volumes can contact CMR Support to discuss custom pricing.",
            },
            {
              id: "customer-pricing",
              title: "Your customer-facing price",
              description:
                "The amount you charge your own customers is a separate pricing layer and is controlled by your Partner platform.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "There are two pricing decisions",
          content:
            "First, CMR determines the commercial terms applicable to your Partner account. Separately, you decide how your own customers are charged for the services you resell.",
        },
      ],
    },

    {
      id: "who-is-volume-pricing-for",
      title: "Who is volume pricing intended for?",

      description:
        "Volume pricing is relevant to Partners operating a significant mailbox footprint.",

      content: [
        {
          type: "paragraph",
          content:
            "The CMR documentation specifically refers to Partners with high mailbox volumes. The purpose of a volume-pricing discussion is therefore to address the commercial requirements of Partners whose mailbox usage is large enough to warrant a custom arrangement.",
        },

        {
          type: "paragraph",
          content:
            "There is no documented public number that defines exactly how many mailboxes qualify as a high-volume Partner. CMR does not publish a universal threshold in the referenced documentation.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not assume a fixed threshold",
          content:
            "Do not build your product around an assumed mailbox count such as 100, 500, or 1,000 as the official volume-discount threshold. No such threshold is documented in the current API reference.",
        },
      ],
    },

    {
      id: "what-is-not-documented",
      title: "What CMR does not currently document",

      description:
        "Understanding what is not specified is important when designing billing logic around custom pricing.",

      content: [
        {
          type: "paragraph",
          content:
            "The available CMR documentation confirms that high-volume pricing can be negotiated, but it does not publish the commercial rules behind that negotiation.",
        },

        {
          type: "steps",
          items: [
            {
              id: "no-thresholds",
              title: "No public volume thresholds",
              description:
                "The documentation does not specify the exact mailbox count at which a Partner becomes eligible for negotiated pricing.",
            },
            {
              id: "no-discount-tiers",
              title: "No published discount tiers",
              description:
                "There is no documented table such as 100 mailboxes = one discount, 500 = another, and so on.",
            },
            {
              id: "no-percentage",
              title: "No fixed discount percentage",
              description:
                "The documentation does not state a universal percentage discount for high-volume Partners.",
            },
            {
              id: "no-self-serve-api",
              title: "No documented self-serve discount API",
              description:
                "The API reference does not provide an endpoint for automatically requesting, calculating, or applying volume discounts.",
            },
            {
              id: "no-automatic-calculator",
              title: "No documented public pricing calculator",
              description:
                "You should not assume that CMR exposes an automatic volume-discount calculator through the Partner API.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "What is confirmed",
          content:
            "The documented process is simple: high-volume Partners can contact CMR Support to discuss custom pricing.",
        },
      ],
    },

    {
      id: "how-custom-pricing-works",
      title: "How custom pricing is handled",

      description:
        "Custom pricing is handled as a commercial discussion rather than an automated API workflow.",

      content: [
        {
          type: "paragraph",
          content:
            "The current documentation does not describe a self-service workflow for requesting volume pricing. Instead, high-volume Partners are directed to contact CMR Support.",
        },

        {
          type: "steps",
          items: [
            {
              id: "custom-identify",
              title: "Identify your expected volume",
              description:
                "Determine the number of mailboxes you currently operate and the volume you expect to provision or maintain.",
            },
            {
              id: "custom-prepare",
              title: "Prepare your requirements",
              description:
                "Have enough information available for CMR to understand the scale and nature of your mailbox usage.",
            },
            {
              id: "custom-contact",
              title: "Contact CMR Support",
              description:
                "Discuss your expected mailbox volume and request information about available custom pricing.",
            },
            {
              id: "custom-confirm",
              title: "Confirm the agreed commercial terms",
              description:
                "Do not assume that a negotiated price is active until the applicable commercial terms have been confirmed by CMR.",
            },
            {
              id: "custom-update",
              title: "Update your billing model",
              description:
                "Once pricing terms are confirmed, make sure your internal billing and customer-pricing systems reflect the appropriate arrangement.",
            },
          ],
        },
      ],
    },

    {
      id: "information-to-prepare",
      title: "What information should you prepare?",

      description:
        "Having clear volume and usage information makes a custom-pricing discussion easier.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR does not publish a mandatory form or required set of fields for a volume-pricing request. However, a Partner should be prepared to clearly explain the scale of its operation.",
        },

        {
          type: "steps",
          items: [
            {
              id: "info-current",
              title: "Current mailbox volume",
              description:
                "Know approximately how many active mailboxes you currently manage through CMR.",
            },
            {
              id: "info-planned",
              title: "Expected mailbox growth",
              description:
                "If you are onboarding customers or expanding your platform, have an estimate of the mailbox volume you expect to reach.",
            },
            {
              id: "info-provider",
              title: "Mailbox environment",
              description:
                "Be clear about the services and mailbox types you intend to provision.",
            },
            {
              id: "info-model",
              title: "Your Partner model",
              description:
                "Explain whether you operate through the API Platform or the Whitelabel Platform and how you intend to use CMR infrastructure.",
            },
            {
              id: "info-use",
              title: "Operational requirements",
              description:
                "Include relevant information about how the infrastructure will be used and what scale of operation you are planning.",
            },
          ],
        },

        {
          type: "callout",
          variant: "tip",
          title: "Be specific about scale",
          content:
            "A clear picture of current and expected mailbox volume gives CMR the context needed to discuss a custom commercial arrangement.",
        },
      ],
    },

    {
      id: "api-partner-pricing",
      title: "Volume pricing for API Partners",

      description:
        "API Partners control their own customer-facing pricing while CMR pricing remains a separate billing layer.",

      content: [
        {
          type: "paragraph",
          content:
            "The API Partner model allows you to build your own application and customer experience on top of CMR infrastructure. Your customer-facing prices are therefore determined by your own product and business model.",
        },

        {
          type: "paragraph",
          content:
            "The Slack and call discussion specifically notes that an API Partner's selling price is up to the Partner. This means you should distinguish between the amount CMR charges your Partner account and the amount your application charges customers.",
        },

        {
          type: "steps",
          items: [
            {
              id: "api-cmr-cost",
              title: "CMR infrastructure cost",
              description:
                "CMR charges the Partner according to the applicable service and commercial terms.",
            },
            {
              id: "api-customer-price",
              title: "Your customer price",
              description:
                "Your application decides what customers pay for the services you provide.",
            },
            {
              id: "api-margin",
              title: "Your commercial margin",
              description:
                "The difference between your customer price and your underlying infrastructure cost forms part of your own business economics.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Negotiated CMR pricing does not automatically set your customer price",
          content:
            "A custom CMR rate changes the underlying Partner-side pricing arrangement. It does not prescribe what you must charge your customers.",
        },
      ],
    },

    {
      id: "whitelabel-partner-pricing",
      title: "Volume pricing for Whitelabel Partners",

      description:
        "Whitelabel Partners have a separate customer-facing pricing configuration layer.",

      content: [
        {
          type: "paragraph",
          content:
            "The Whitelabel Platform provides a ready-made customer-facing experience that Partners can configure under their own brand.",
        },

        {
          type: "paragraph",
          content:
            "The Slack and call discussion identifies the Partner Pricing dashboard as the place where Whitelabel Partners can configure the prices they want to present to their users.",
        },

        {
          type: "paragraph",
          content:
            "This customer-facing pricing configuration should not be confused with CMR's own underlying commercial pricing for the Partner account.",
        },

        {
          type: "steps",
          items: [
            {
              id: "white-label-cost",
              title: "CMR-side pricing",
              description:
                "The Partner has an underlying CMR cost for the services being provisioned.",
            },
            {
              id: "white-label-config",
              title: "Partner Pricing",
              description:
                "The Whitelabel Partner can configure the prices presented to its own users through the Partner Pricing area.",
            },
            {
              id: "white-label-customer",
              title: "Customer billing",
              description:
                "Customers are charged according to the pricing configured by the Partner.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Keep the two layers separate",
          content:
            "Negotiated CMR pricing and Whitelabel customer pricing solve different problems. One concerns your cost from CMR; the other concerns the price your customers see.",
        },
      ],
    },

    {
      id: "volume-pricing-and-mailbox-lifecycle",
      title: "Volume pricing does not replace mailbox pricing rules",

      description:
        "Custom commercial terms should not be confused with the standard mailbox subscription lifecycle.",

      content: [
        {
          type: "paragraph",
          content:
            "Mailbox subscriptions have their own lifecycle and pricing behavior. In particular, the documented standard mailbox price changes when a subscription crosses the 12-month mark.",
        },

        {
          type: "paragraph",
          content:
            "Volume pricing is a separate commercial consideration. It should not be interpreted as changing the documented subscription lifecycle or as automatically resetting the subscription's pricing age.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not combine unrelated pricing rules",
          content:
            "Volume discounts, standard mailbox pricing, 12-month subscription pricing, and subscription recreation are separate concepts. Document and implement each according to its own rules.",
        },

        {
          type: "learn-more",
          items: [
            {
              id: "mailbox-pricing-related",
              title: "Mailbox Pricing Explained",
              description:
                "Learn how standard mailbox pricing, warmup charges, and the 12-month pricing change work.",
              href: "/concepts/billing-wallet/mailbox-pricing",
            },
            {
              id: "reset-pricing-related",
              title: "Resetting Long-Running Subscription Pricing",
              description:
                "Understand the documented subscription recreation flow for resetting a subscription's pricing lifecycle.",
              href: "/concepts/billing-wallet/reset-subscription-pricing",
            },
          ],
        },
      ],
    },

    {
      id: "do-not-build-unsupported-logic",
      title: "What not to build into your integration",

      description:
        "Avoid implementing assumptions about volume discounts that are not supported by the CMR documentation.",

      content: [
        {
          type: "paragraph",
          content:
            "Because CMR does not publish fixed volume tiers or a volume-discount API, your integration should not assume that discount eligibility can be calculated entirely from mailbox count.",
        },

        {
          type: "steps",
          items: [
            {
              id: "avoid-threshold",
              title: "Do not hard-code a mailbox threshold",
              description:
                "Do not assume that a specific mailbox count automatically activates a discount.",
            },
            {
              id: "avoid-percentage",
              title: "Do not hard-code a discount percentage",
              description:
                "Do not implement a fixed percentage unless it has been explicitly agreed and provided for your Partner account.",
            },
            {
              id: "avoid-api",
              title: "Do not assume a discount endpoint exists",
              description:
                "The referenced API documentation does not provide a self-service endpoint for volume-discount negotiation.",
            },
            {
              id: "avoid-customer",
              title: "Do not automatically pass the discount to customers",
              description:
                "A Partner-side pricing arrangement does not automatically determine your customer-facing prices.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Treat negotiated pricing as account-specific",
          content:
            "Until CMR confirms the commercial terms for your Partner account, your integration should continue using the pricing information officially applicable to that account.",
        },
      ],
    },

    {
      id: "practical-workflow",
      title: "A practical workflow for high-volume Partners",

      description:
        "Use this workflow when your mailbox volume grows and you want to explore custom pricing.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "workflow-monitor",
              title: "Monitor your mailbox volume",
              description:
                "Track the number of active and provisioned mailboxes managed through your Partner account.",
            },
            {
              id: "workflow-forecast",
              title: "Forecast upcoming growth",
              description:
                "Estimate how your mailbox volume is expected to change as customers and usage increase.",
            },
            {
              id: "workflow-contact",
              title: "Contact CMR Support",
              description:
                "When your operation reaches a scale where custom pricing is relevant, contact CMR Support to discuss available options.",
            },
            {
              id: "workflow-confirm",
              title: "Confirm the agreed pricing",
              description:
                "Obtain confirmation of the applicable commercial terms before changing billing assumptions in your platform.",
            },
            {
              id: "workflow-update",
              title: "Update internal billing logic",
              description:
                "Once the pricing arrangement is confirmed, update your internal cost calculations and reporting accordingly.",
            },
            {
              id: "workflow-customer",
              title: "Review your customer pricing",
              description:
                "Separately decide whether and how your own customer-facing prices should change.",
            },
          ],
        },
      ],
    },

    {
      id: "important-notes",
      title: "Important things to remember",

      description:
        "Keep these points in mind when working with volume and custom pricing.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "note-negotiated",
              title: "Volume pricing is negotiated",
              description:
                "CMR documents custom pricing for Partners with high mailbox volumes through direct contact with Support.",
            },
            {
              id: "note-no-tiers",
              title: "There are no published discount tiers",
              description:
                "The current documentation does not define fixed mailbox-volume tiers or corresponding discounts.",
            },
            {
              id: "note-no-threshold",
              title: "There is no documented eligibility threshold",
              description:
                "CMR does not publish a specific mailbox count that automatically qualifies a Partner for custom pricing.",
            },
            {
              id: "note-api",
              title: "There is no documented volume-discount API",
              description:
                "Do not design a self-service discount workflow around an endpoint that is not documented.",
            },
            {
              id: "note-customer",
              title: "Customer pricing is separate",
              description:
                "The price a Partner pays CMR and the price the Partner charges its customers are separate commercial layers.",
            },
            {
              id: "note-12-month",
              title: "12-month pricing is a separate concept",
              description:
                "Do not confuse negotiated volume pricing with the standard subscription pricing change that occurs after the documented 12-month lifecycle.",
            },
          ],
        },
      ],
    },

    {
      id: "common-scenarios",
      title: "Common scenarios",

      description:
        "Use these examples to understand how volume pricing should be handled.",

      content: [
        {
          type: "heading",
          content: "We have a large number of mailboxes. Do we automatically receive a discount?",
        },

        {
          type: "paragraph",
          content:
            "Not based on a documented automatic threshold. CMR states that pricing can be negotiated for high-volume Partners and directs Partners to contact Support for custom pricing.",
        },

        {
          type: "heading",
          content: "Does CMR publish the exact discount percentage?",
        },

        {
          type: "paragraph",
          content:
            "No. The referenced documentation does not publish a standard percentage discount for high-volume Partners.",
        },

        {
          type: "heading",
          content: "Can I calculate the discount through the API?",
        },

        {
          type: "paragraph",
          content:
            "The referenced API documentation does not provide a volume-discount calculation or negotiation endpoint.",
        },

        {
          type: "heading",
          content: "I am an API Partner. Can I decide my own customer price?",
        },

        {
          type: "paragraph",
          content:
            "Yes. The Partner's customer-facing pricing is separate from CMR's underlying Partner-side cost. Your application can define its own pricing model.",
        },

        {
          type: "heading",
          content: "I am a Whitelabel Partner. Where do I configure my customer prices?",
        },

        {
          type: "paragraph",
          content:
            "The Slack and call discussion identifies the Partner Pricing dashboard as the area where Whitelabel Partners can configure customer-facing pricing.",
        },

        {
          type: "heading",
          content: "Does volume pricing reset the 12-month mailbox pricing clock?",
        },

        {
          type: "paragraph",
          content:
            "Volume pricing and the 12-month subscription lifecycle are separate concepts. The documentation does not state that negotiating volume pricing resets a subscription's age or pricing lifecycle.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the pricing and subscription guides related to volume pricing.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "wallet-balance",
              title: "How Wallet Balance & Charges Work",
              description:
                "Understand how the Partner wallet funds CMR services and how Partner billing differs from customer billing.",
              href: "/concepts/billing-wallet/wallet-balance-charges",
            },
            {
              id: "mailbox-pricing",
              title: "Mailbox Pricing Explained",
              description:
                "Understand standard mailbox subscription pricing and the pricing lifecycle after 12 months.",
              href: "/concepts/billing-wallet/mailbox-pricing",
            },
            {
              id: "reset-subscription-pricing",
              title: "Resetting Long-Running Subscription Pricing",
              description:
                "Learn how the documented subscription recreation flow resets the subscription pricing lifecycle.",
              href: "/concepts/billing-wallet/reset-subscription-pricing",
            },
          ],
        },
      ],
    },
  ],
};