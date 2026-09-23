const LANDING_PAGE_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789556307/gettingStarted.webp";

export const gettingStartedArticle = {
  id: "introduction",
  slug: "/getting-started",

  category: {
    id: "getting-started",
    label: "Getting Started",
    slug: "/getting-started",
  },

  title: "Getting started with CMR",

  description:
    "Understand CMR, choose your partner model, set up your platform, and prepare your wallet before you start using the platform.",

  author: "CMR Team",
  updated: "September 2026",

  heroImage: {
    src: LANDING_PAGE_IMAGE,
    alt: "Cold Mail Reseller platform",
    caption:
      "Cold Mail Reseller brings your email infrastructure, customers, orders, billing, and integrations together in one place.",
  },

  introduction:
    "Welcome to Cold Mail Reseller (CMR). This guide gives you a quick overview of the platform, explains the two ways you can work with CMR, and walks you through the initial setup required before you start managing domains, mailboxes, customers, and other resources.",

  sections: [
    {
      id: "what-is-cmr",

      title: "What is CMR?",

      description:
        "Understand what Cold Mail Reseller provides and how it fits into your email infrastructure workflow.",

      content: [
        {
          type: "paragraph",

          content:
            "Cold Mail Reseller (CMR) provides the infrastructure and tools needed to build and operate a cold email platform. It brings resources such as domains, mailboxes, subscriptions, DNS, warmup, exports, and billing together under a single partner account.",
        },

        {
          type: "paragraph",

          content:
            "CMR gives partners two ways to work with this infrastructure: the CMR API and the Whitelabel Platform. Both provide access to the underlying CMR infrastructure, while giving you different levels of control over the customer experience.",
        },

        {
          type: "callout",

          variant: "info",

          title: "Two ways to use CMR",

          content:
            "Choose the API if you want to build your own product or workflow. Choose the Whitelabel Platform if you want a ready-made, branded customer experience without building the platform yourself.",
        },
      ],
    },

    {
      id: "choose-your-partner-model",

      title: "Choose how you want to use CMR",

      description:
        "Choose between the CMR API and the Whitelabel Platform based on how much of the product experience you want to build yourself.",

      content: [
        {
          type: "paragraph",

          content:
            "CMR supports two primary partner models. The API Partner model gives you programmatic control over CMR infrastructure, while the Whitelabel Partner model gives you a ready-made platform that you can configure and present under your own brand.",
        },

        {
          type: "heading",

          content: "API Partner",
        },

        {
          type: "paragraph",

          content:
            "The CMR API is a REST API for building your own application or workflow on top of CMR infrastructure. You can use it to work with customers, domains, mailboxes, subscriptions, warmup, and other supported CMR resources from your own product.",
        },

        {
          type: "paragraph",

          content:
            "This model is intended for teams that want control over their application experience, workflows, integrations, and automation.",
        },

        {
          type: "heading",

          content: "Whitelabel Partner",
        },

        {
          type: "paragraph",

          content:
            "The Whitelabel Platform provides a pre-built customer-facing experience that you can configure under your own brand. You can customize the platform, configure your products and pricing, connect billing, and manage the customer-facing dashboard.",
        },

        {
          type: "paragraph",

          content:
            "This model is intended for partners who want to start reselling without building and maintaining their own customer-facing application.",
        },

        {
          type: "callout",

          variant: "tip",

          title: "Choose your model before continuing",

          content:
            "Your partner model determines the product surface you will use. If you are building your own application, continue with the API Partner setup. If you want to use the ready-made customer-facing platform, continue with the Whitelabel Platform setup.",
        },
      ],
    },

    {
      id: "set-up-account",

      title: "Set up your account",

      description:
        "Choose the setup guide for the CMR platform you want to use and complete the configuration required to get started.",

      content: [
        {
          type: "paragraph",

          content:
            "Once you have chosen your partner model, follow the corresponding setup guide. The API Partner and Whitelabel Partner platforms have different setup flows because they provide different ways of working with CMR.",
        },

        {
          type: "heading",

          content: "Set up your API Partner Platform",
        },

        {
          type: "paragraph",

          content:
            "The API Partner Platform is for partners who want to build their own application and integrate CMR through the REST API. The setup guide walks through the initial platform configuration before you begin building your integration.",
        },

        {
          type: "learn-more",

          items: [
            {
              id: "api-partner-setup",

              title: "Set up your API Partner Platform →",

              description:
                "Configure your API Partner Platform, complete the initial setup, and get ready to build with the CMR API.",

              href: "/partners/api",
            },
          ],
        },

        {
          type: "heading",

          content: "Set up your Whitelabel Platform",
        },

        {
          type: "paragraph",

          content:
            "The Whitelabel Platform is for partners who want a ready-made customer-facing experience under their own brand. The setup guide walks through billing, contact information, wallet settings, products, pricing, domain, and dashboard configuration.",
        },

        {
          type: "learn-more",

          items: [
            {
              id: "whitelabel-partner-setup",

              title: "Set up your Whitelabel Platform →",

              description:
                "Configure your Whitelabel Platform, connect billing, set your product and pricing, customize your customer experience, and prepare your platform for launch.",

              href: "/partners/white-label",
            },
          ],
        },

        {
          type: "callout",

          variant: "info",

          title: "Follow only the setup path for your partner model",

          content:
            "You do not need to complete both setup guides. Choose the API Partner setup if you are building your own application, or choose the Whitelabel setup if you are using the ready-made customer-facing platform.",
        },
      ],
    },

    {
      id: "fund-wallet",

      title: "Fund your wallet",

      description:
        "Understand the CMR wallet and prepare your balance for paid services.",

      content: [
        {
          type: "paragraph",

          content:
            "CMR uses a partner wallet to handle charges for supported services. Charges such as domain registration and renewal, mailbox subscriptions, warmup, pre-warmup, and placement tests are deducted from the partner wallet.",
        },

        {
          type: "paragraph",

          content:
            "Before starting paid operations, make sure your wallet has sufficient balance. Keeping your wallet funded helps prevent operations from failing because of insufficient funds.",
        },

        {
          type: "heading",

          content: "Add funds to your wallet",
        },

        {
          type: "paragraph",

          content:
            "You can add balance to your wallet whenever additional funds are required for CMR operations.",
        },

        {
          type: "learn-more",

          items: [
            {
              id: "add-balance",

              title: "Add Balance →",

              description:
                "Add funds to your CMR wallet and review your available balance.",

              href: "/wallet/add-balance",
            },
          ],
        },

        {
          type: "heading",

          content: "Configure Auto Top-Up",
        },

        {
          type: "paragraph",

          content:
            "Auto Top-Up can automatically replenish your wallet when your configured balance threshold is reached.",
        },

        {
          type: "learn-more",

          items: [
            {
              id: "auto-top-up",

              title: "Enable Auto Top-Up →",

              description:
                "Configure automatic wallet replenishment and manage your Auto Top-Up settings.",

              href: "/wallet/auto-top-up",
            },
          ],
        },

        {
          type: "callout",

          variant: "tip",

          title: "Keep sufficient balance available",

          content:
            "Check your wallet balance before starting paid operations. Some asynchronous operations can fail when the partner wallet does not have sufficient funds.",
        },
      ],
    },

    {
      id: "whats-next",

      title: "What's next?",

      description:
        "Continue with the CMR documentation for the area you want to configure or manage.",

      content: [
        {
          type: "paragraph",

          content:
            "Once you have chosen your partner model, completed the relevant platform setup, and prepared your wallet, you can continue with the documentation for the specific part of CMR you want to use.",
        },

        {
          type: "learn-more",

          items: [
            {
              id: "dashboard",

              title: "Explore the Dashboard →",

              description:
                "Understand the main dashboard and the information available to you.",

              href: "/dashboard",
            },

            {
              id: "wallet",

              title: "Manage your Wallet →",

              description:
                "Manage your balance, payments, invoices, and wallet settings.",

              href: "/wallet",
            },

            {
              id: "users",

              title: "Manage Users →",

              description:
                "Create and manage customers under your Partner account.",

              href: "/users",
            },

            {
              id: "orders",

              title: "Manage Orders →",

              description:
                "Create and manage orders and understand the order workflow.",

              href: "/orders",
            },

            {
              id: "subscriptions",

              title: "Manage Subscriptions →",

              description:
                "Manage subscriptions and understand subscription-related workflows.",

              href: "/subscriptions",
            },

            {
              id: "settings",

              title: "Configure Settings →",

              description:
                "Manage your CMR account, integrations, members, and platform settings.",

              href: "/settings",
            },
          ],
        },

        {
          type: "callout",

          variant: "success",

          title: "You're ready to explore CMR",

          content:
            "Your initial onboarding path is complete. Choose the documentation area that matches your next task and continue from there.",
        },
      ],
    },
  ],
};