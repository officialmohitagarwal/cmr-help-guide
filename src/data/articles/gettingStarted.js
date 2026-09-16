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
    "Learn how Cold Mail Reseller works, set up your account, and understand the core workflow for managing users, domains, mailboxes, orders, subscriptions, and more.",

  author: "CMR Team",

  updated: "September 2026",

  heroImage: {
    src: LANDING_PAGE_IMAGE,
    alt: "Cold Mail Reseller landing page",
    caption:
      "Cold Mail Reseller brings your email infrastructure, customers, orders, subscriptions, billing, and integrations together in one place.",
  },

  introduction:
    "Welcome to Cold Mail Reseller (CMR). CMR provides the infrastructure and tools needed to manage cold email resources at scale. This guide explains how the platform is structured and walks you through the key steps to get your account ready, fund your wallet, create orders, manage resources, and connect CMR with your existing workflow.",

  sections: [
    {
      id: "what-is-cmr",
      title: "What is CMR?",

      description:
        "Understand what Cold Mail Reseller does and what you can manage through the platform.",

      content: [
        {
          type: "paragraph",
          content:
            "Cold Mail Reseller (CMR) is a platform for managing the infrastructure required for cold email outreach. It provides a centralized workspace where partners can manage customers, domains, mailboxes, subscriptions, warmup services, exports, billing, and integrations.",
        },

        {
          type: "paragraph",
          content:
            "Instead of managing each part of the infrastructure separately, CMR brings these resources together under one partner account. You can use the CMR dashboard for day-to-day management or use the CMR API and MCP integrations for programmatic and AI-assisted workflows.",
        },

        {
          type: "callout",
          variant: "info",
          title: "CMR at a glance",
          content:
            "Your partner account is the main workspace. From there, you can manage users and the resources associated with them, while your wallet handles charges for CMR services.",
        },
      ],
    },

    {
      id: "understand-cmr-structure",
      title: "Understand how CMR is structured",

      description:
        "Learn how your partner account, users, domains, and mailboxes are connected.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR follows a simple resource hierarchy. Your partner account sits at the top, and the customers you manage are represented as Users. Resources such as domains and mailboxes are associated with those users.",
        },

        {
          type: "steps",
          items: [
            {
              id: "partner",
              title: "Partner",
              description:
                "Your partner account is the main CMR workspace. Your API access, wallet, users, orders, and account-level settings are managed at this level.",
            },

            {
              id: "users",
              title: "Users",
              description:
                "Users represent the customers or workspaces you manage through CMR. Each user has a unique userId that is used when working with user-specific resources.",
            },

            {
              id: "domains",
              title: "Domains",
              description:
                "Domains are associated with users and form an important part of the email infrastructure managed through CMR.",
            },

            {
              id: "mailboxes",
              title: "Mailboxes",
              description:
                "Mailboxes are provisioned under domains and can be used with supported email services and outreach platforms.",
            },
          ],
        },

        {
          type: "callout",
          variant: "tip",
          title: "Keep the hierarchy in mind",
          content:
            "When working with the API, make sure you use the correct userId and resource identifiers. Many user-specific operations depend on the relationship between the partner, user, domain, and mailbox.",
        },
      ],
    },

    {
      id: "set-up-account",
      title: "Set up your account",

      description:
        "Review your account settings and prepare your CMR workspace before creating resources.",

      content: [
        {
          type: "paragraph",
          content:
            "After signing in to CMR, start by reviewing your account and workspace configuration. Settings contains the controls you need to manage payment information, brand and contact details, team members, API access, webhooks, events, and integrations.",
        },

        {
          type: "steps",
          items: [
            {
              id: "open-settings",
              title: "Open Settings",
              description:
                "Open the Settings section from the CMR navigation menu.",
            },

            {
              id: "review-details",
              title: "Review your account details",
              description:
                "Review your brand, contact, and other workspace information and make sure the details are correct.",
            },

            {
              id: "team-members",
              title: "Add team members if required",
              description:
                "If other people need access to your workspace, invite them from the workspace member settings and assign the appropriate role.",
            },

            {
              id: "api-access",
              title: "Set up API access",
              description:
                "If you plan to integrate CMR programmatically, retrieve your CMR API key from Settings → Integrations.",
            },
          ],
        },

        {
          type: "learn-more",
          items: [
            {
              id: "settings",
              title: "Explore Settings",
              href: "/settings",
            },
          ],
        },
      ],
    },

    {
      id: "fund-wallet",
      title: "Fund your wallet",

      description:
        "Add balance before purchasing CMR services and creating orders.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR uses a partner wallet to handle charges for services such as domain registration and renewal, mailbox subscriptions, warmup, pre-warmup, and placement tests.",
        },

        {
          type: "steps",
          items: [
            {
              id: "open-wallet",
              title: "Open Wallet",
              description:
                "Go to the Wallet section from the CMR navigation menu.",
            },

            {
              id: "check-wallet",
              title: "Check your balance",
              description:
                "Review your current wallet balance before creating an order or purchasing a service.",
            },

            {
              id: "add-balance",
              title: "Add balance",
              description:
                "Add funds to your wallet when additional balance is required for your CMR services.",
            },

            {
              id: "auto-top-up",
              title: "Configure Auto Top-Up if needed",
              description:
                "You can enable Auto Top-Up to automatically replenish your wallet when your balance reaches the configured threshold.",
            },
          ],
        },

        {
          type: "callout",
          variant: "tip",
          title: "Keep enough balance available",
          content:
            "Check your wallet before starting an order. Insufficient balance can prevent paid operations from being completed.",
        },

        {
          type: "learn-more",
          items: [
            {
              id: "wallet",
              title: "Explore Wallet",
              href: "/wallet",
            },
          ],
        },
      ],
    },

    {
      id: "create-first-order",
      title: "Create your first order",

      description:
        "Use Orders to request the CMR resources and services you need.",

      content: [
        {
          type: "paragraph",
          content:
            "Orders are the starting point for provisioning many CMR services. Depending on what you are purchasing, an order can involve domains, mailboxes, subscriptions, warmup, or other available services.",
        },

        {
          type: "steps",
          items: [
            {
              id: "open-orders",
              title: "Open Orders",
              description:
                "Go to the Orders section from the CMR navigation menu.",
            },

            {
              id: "choose-service",
              title: "Choose the service you need",
              description:
                "Select the type of CMR service or infrastructure you want to provision and review the available configuration options.",
            },

            {
              id: "configure-order",
              title: "Configure the order",
              description:
                "Provide the required configuration and resource details for the service you are ordering.",
            },

            {
              id: "review-order",
              title: "Review the order",
              description:
                "Check the selected configuration, associated resources, and expected charges before submitting the order.",
            },

            {
              id: "submit-order",
              title: "Submit the order",
              description:
                "Submit the order and use the Orders section to track its status and details.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Some operations are asynchronous",
          content:
            "A successful request may mean that the operation has been queued rather than completed immediately. Check the operation status or corresponding webhook for the final result.",
        },
      ],
    },

    {
      id: "understand-provisioning",
      title: "Understand provisioning and async operations",

      description:
        "Know what to expect when CMR operations take time to complete.",

      content: [
        {
          type: "paragraph",
          content:
            "Some CMR operations are processed asynchronously. This includes operations such as domain registration, mailbox provisioning, renewals, subscription recreation, forwarding, and other workflows where the final result is not available immediately.",
        },

        {
          type: "paragraph",
          content:
            "For these operations, the API response confirms that the request has been accepted or queued. CMR then sends a webhook when the operation succeeds or fails.",
        },

        {
          type: "steps",
          items: [
            {
              id: "submit-request",
              title: "Submit the operation",
              description:
                "Send the request through the CMR dashboard or API.",
            },

            {
              id: "receive-response",
              title: "Read the response",
              description:
                "Check the response for the operation status and identifiers such as actionId or orderId.",
            },

            {
              id: "wait-webhook",
              title: "Wait for the webhook",
              description:
                "For asynchronous operations, wait for the corresponding success or failure webhook instead of submitting the operation again.",
            },

            {
              id: "process-result",
              title: "Process the final result",
              description:
                "Use the webhook payload to determine whether the operation completed successfully or failed.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not resubmit an in-progress operation",
          content:
            "If an asynchronous operation is still being processed, do not repeatedly submit the same request while waiting for its webhook.",
        },
      ],
    },

    {
      id: "manage-domains-mailboxes",
      title: "Manage domains and mailboxes",

      description:
        "Understand the resources that make up your email infrastructure.",

      content: [
        {
          type: "paragraph",
          content:
            "Domains and mailboxes are core parts of the infrastructure you manage through CMR. Domains are associated with users, and mailboxes are provisioned under domains.",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-management",
              title: "Manage your domains",
              description:
                "Review domains associated with your users and manage supported domain operations such as registration, renewal, DNS configuration, and forwarding.",
            },

            {
              id: "dns-management",
              title: "Configure DNS",
              description:
                "Use the available DNS operations to manage records such as SPF, DKIM, and DMARC. DNS changes may require time to propagate.",
            },

            {
              id: "mailbox-management",
              title: "Manage mailboxes",
              description:
                "Review mailbox resources associated with your domains and monitor their provisioning status.",
            },

            {
              id: "mailbox-status",
              title: "Wait for mailbox provisioning",
              description:
                "Mailbox provisioning can take time. Use the mailbox status or corresponding webhook to determine when the mailbox is ready.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Domain deletion",
          content:
            "A domain cannot be deleted while mailboxes are associated with it. Remove the associated mailboxes first when the workflow requires domain deletion.",
        },
      ],
    },

    {
      id: "subscriptions-warmup",
      title: "Manage subscriptions and warmup",

      description:
        "Understand recurring services and the warmup options available for mailboxes.",

      content: [
        {
          type: "paragraph",
          content:
            "Subscriptions are used for recurring CMR services such as mailbox services and related infrastructure. The Subscriptions section lets you review and manage the subscription lifecycle.",
        },

        {
          type: "paragraph",
          content:
            "CMR also supports mailbox warmup. Warmup gradually increases sending activity to help build mailbox reputation. Warmup can be enabled when ordering a mailbox or added later where supported.",
        },

        {
          type: "steps",
          items: [
            {
              id: "review-subscriptions",
              title: "Review your subscriptions",
              description:
                "Open Subscriptions to view the subscriptions associated with your CMR resources and their current status.",
            },

            {
              id: "understand-status",
              title: "Understand subscription status",
              description:
                "Review statuses such as ACTIVE, RENEWING, PAST_DUE, CANCELLED, and EXPIRED to understand the current state of a subscription.",
            },

            {
              id: "configure-warmup",
              title: "Configure warmup",
              description:
                "Enable warmup for eligible mailboxes when placing an order or add it later where supported.",
            },

            {
              id: "manage-warmup",
              title: "Manage warmup",
              description:
                "Use the available controls to pause warmup or permanently disable future warmup billing according to the supported subscription workflow.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Warmup is not a placement guarantee",
          content:
            "Warmup is intended to build sending reputation. CMR does not provide a numeric inbox-placement guarantee.",
        },

        {
          type: "learn-more",
          items: [
            {
              id: "subscriptions",
              title: "Explore Subscriptions",
              href: "/subscriptions",
            },
          ],
        },
      ],
    },

    {
      id: "exports",
      title: "Export mailboxes to outreach platforms",

      description:
        "Connect provisioned mailboxes with supported outreach platforms through Platform Exports.",

      content: [
        {
          type: "paragraph",
          content:
            "Once your mailboxes are ready, CMR can export mailbox credentials or connect supported accounts to external outreach platforms. Supported credential-based destinations include ReachInbox, Smartlead, Instantly, and EmailBison. OAuth-based flows are also available for supported Google and Microsoft connections.",
        },

        {
          type: "steps",
          items: [
            {
              id: "choose-export",
              title: "Choose an export destination",
              description:
                "Select the outreach platform or integration you want to connect your mailbox to.",
            },

            {
              id: "provide-details",
              title: "Provide the required details",
              description:
                "Depending on the platform, you may need credentials, workspace information, OAuth details, or additional metadata.",
            },

            {
              id: "start-export",
              title: "Start the export",
              description:
                "Submit the export request and check its status rather than repeatedly creating the same export.",
            },

            {
              id: "verify-export",
              title: "Verify the result",
              description:
                "Review the export status and resulting details once processing is complete.",
            },
          ],
        },

        {
          type: "callout",
          variant: "tip",
          title: "Keep platform details consistent",
          content:
            "For OAuth exports, make sure the provider configuration matches the mailbox service provider. Some platforms also require workspace or organization identifiers.",
        },
      ],
    },

    {
      id: "webhooks",
      title: "Configure webhooks",

      description:
        "Receive real-time updates about asynchronous operations and resource events.",

      content: [
        {
          type: "paragraph",
          content:
            "Webhooks allow your application to receive updates from CMR without repeatedly polling the API. They are especially useful for asynchronous operations such as provisioning, renewals, exports, and other resource changes.",
        },

        {
          type: "steps",
          items: [
            {
              id: "create-webhook",
              title: "Create a webhook destination",
              description:
                "Add a publicly accessible endpoint where CMR can send event notifications.",
            },

            {
              id: "select-events",
              title: "Configure the events",
              description:
                "Choose the events your application needs to receive based on the resources and workflows you manage.",
            },

            {
              id: "verify-signature",
              title: "Verify webhook requests",
              description:
                "Verify the CMR signature and timestamp included with webhook requests before processing the event.",
            },

            {
              id: "process-events",
              title: "Process events safely",
              description:
                "Respond successfully and process longer-running work asynchronously. Use eventId to deduplicate events when the same event is delivered more than once.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Always verify webhook authenticity",
          content:
            "Validate the webhook signature and timestamp before trusting the event payload. Your endpoint should also respond promptly instead of keeping the webhook request open for long-running work.",
        },
      ],
    },

    {
      id: "api-and-mcp",
      title: "Choose how you want to work with CMR",

      description:
        "Use the CMR dashboard, REST API, or MCP integrations depending on your workflow.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR can be used directly from the partner dashboard or integrated into your own workflows through the REST API. Supported MCP integrations also allow AI tools to interact with CMR using your partner API access.",
        },

        {
          type: "steps",
          items: [
            {
              id: "dashboard-workflow",
              title: "Use the dashboard",
              description:
                "Use the dashboard for manual resource management, reviewing account information, checking orders, and performing administrative tasks.",
            },

            {
              id: "api-workflow",
              title: "Use the REST API",
              description:
                "Use the API when CMR needs to be part of a customer-facing application, bulk workflow, scheduled process, or deterministic automation.",
            },

            {
              id: "mcp-workflow",
              title: "Use MCP for AI-assisted operations",
              description:
                "Use MCP with supported AI tools for one-off or administrative operations where an AI-assisted workflow is useful.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Keep your API key secure",
          content:
            "MCP integrations use the same CMR partner API key available from Settings → Integrations. Keep your API credentials private and only provide them to trusted environments.",
        },
      ],
    },

    {
      id: "next-steps",
      title: "What's next?",

      description:
        "Now that you understand the CMR workflow, explore the individual areas of the platform.",

      content: [
        {
          type: "paragraph",
          content:
            "You're ready to start working with CMR. Use the guides below to learn how each major part of the platform works and how to perform common tasks.",
        },

        {
          type: "learn-more",
          items: [
            {
              id: "dashboard",
              title: "Explore the Dashboard",
              href: "/dashboard",
            },

            {
              id: "users",
              title: "Manage Users",
              href: "/users",
            },

            {
              id: "orders",
              title: "Manage Orders",
              href: "/orders",
            },

            {
              id: "subscriptions",
              title: "Manage Subscriptions",
              href: "/subscriptions",
            },

            {
              id: "wallet",
              title: "Manage your Wallet",
              href: "/wallet",
            },

            {
              id: "settings",
              title: "Configure Settings",
              href: "/settings",
            },

            {
              id: "faqs",
              title: "Browse FAQs",
              href: "/faqs",
            },

            {
              id: "troubleshooting",
              title: "Troubleshoot common issues",
              href: "/troubleshooting",
            },
          ],
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "You now have the basic CMR workflow in place. Explore the individual guides whenever you need help with a specific task or feature.",
        },
      ],
    },
  ],
};