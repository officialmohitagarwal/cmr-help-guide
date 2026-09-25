export const preWarmupArticle = {
  id: "pre-warmup",
  slug: "/concepts/warmup-deliverability/pre-warmup",
  category: {
    id: "warmup-deliverability",
    label: "Warmup and Deliverability",
    slug: "/concepts/warmup-deliverability",
  },
  title: "Pre-Warmup: Buying Mailboxes That Are Already Warmed",
  description:
    "Understand how CMR pre-warmup works, how to find available pre-warmed mailbox inventory, place an order, and handle successful or failed assignments.",
  author: "CMR Team",
  updated: "September 2026",
  introduction:
    "Pre-warmup is a specialized CMR offering for obtaining mailbox accounts that have already been created and warmed. Instead of provisioning a new mailbox and waiting for its warmup process to build sender reputation, you can order from CMR's available pre-warmup inventory and receive assigned accounts ready for use. This article explains how the pre-warmup flow works and how to integrate it safely.",
  sections: [
    {
      id: "what-is-prewarmup",
      title: "What Is Pre-Warmup?",
      description:
        "Understand what makes pre-warmup different from provisioning a new mailbox and enabling warmup.",
      content: [
        {
          type: "paragraph",
          content:
            "Pre-warmup provides mailbox accounts that have already been pre-created and warmed to establish sender reputation before they are assigned to your platform.",
        },
        {
          type: "paragraph",
          content:
            "CMR describes pre-warmed mailboxes as a specialized product for customers who want accounts that are already warmed rather than starting with a newly provisioned mailbox and building its sending reputation from the beginning.",
        },
        {
          type: "heading",
          content: "Pre-warmup vs regular mailbox provisioning",
        },
        {
          type: "steps",
          items: [
            {
              id: "regular-mailbox",
              title: "Regular mailbox",
              description:
                "You provision a new mailbox through the normal order flow. The mailbox is created and can then be enrolled in CMR mailbox warmup.",
            },
            {
              id: "prewarm-mailbox",
              title: "Pre-warmed mailbox",
              description:
                "You order from the available pre-warmup inventory. The account has already gone through the pre-warming process before assignment.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Pre-warmup is a separate product",
          content:
            "Pre-warmup is not the same as adding warmup to an existing mailbox. It is a separate ordering flow that assigns accounts from CMR's pre-warmed inventory.",
        },
      ],
    },

    {
      id: "how-prewarmup-lifecycle-works",
      title: "How the Pre-Warmup Lifecycle Works",
      description:
        "The pre-warmup flow is an order and assignment process rather than a normal mailbox provisioning lifecycle.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "order-trigger",
              title: "1. Place a pre-warmup order",
              description:
                "Your platform submits a pre-warmup order specifying the requested domains and service provider.",
            },
            {
              id: "assignment",
              title: "2. CMR processes the assignment",
              description:
                "CMR allocates accounts from its available pre-warmed pool or creates new accounts from scratch according to the documented lifecycle.",
            },
            {
              id: "success",
              title: "3. Accounts are assigned",
              description:
                "A successful assignment produces a prewarmup.order.success event. The assigned accounts are returned with credentials and can be used according to the product flow.",
            },
            {
              id: "failure",
              title: "4. Failed assignments are reported",
              description:
                "If assignment cannot be completed, CMR sends prewarmup.order.failed. The documented causes include no available pool, insufficient wallet balance, or domain restrictions.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "One order can have multiple outcomes",
          content:
            "A single pre-warmup order can contain multiple domains. CMR documents that some domains may succeed while others fail, so your integration should process the domain associated with each event rather than assuming the entire order has one outcome.",
        },
      ],
    },

    {
      id: "find-available-inventory",
      title: "Finding Available Pre-Warmup Inventory",
      description:
        "Use the pre-warmup inventory endpoint to see which pre-warmed domains and mailboxes are currently available.",
      content: [
        {
          type: "paragraph",
          content:
            "Before placing an order, you can retrieve the currently available pre-warmed domain packages. The inventory endpoint returns a paginated list of available packages and supports filtering by service provider or searching for a domain substring.",
        },
        {
          type: "heading",
          content: "Get available pre-warmup domains",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /pre-warmup\nAuthorization: cmr-x-api-key: <api-key>",
        },
        {
          type: "paragraph",
          content:
            "The endpoint supports serviceProvider filtering for GOOGLE or MICROSOFT and a contains parameter for searching by part of a domain name.",
        },
        {
          type: "heading",
          content: "Inventory response",
        },
        {
          type: "paragraph",
          content:
            "The response includes the available inventory, pre-warmed mailbox information, purchase price, renewal price, and pagination information such as the current page and total pages.",
        },
        {
          type: "code",
          language: "json",
          content: `{
  "status": 200,
  "message": "Pre-warmed up domains fetched successfully",
  "data": {
    "inventory": [
      {
        "domain": "prewarm-acmecorp.com",
        "preWarmedUpMailboxes": [
          {
            "email": "jwilson@prewarm-acmecorp.com",
            "firstName": "James",
            "lastName": "Wilson",
            "createdAt": "2025-01-15T10:00:00.000Z"
          }
        ],
        "purchasePrice": 30,
        "renewalPrice": 15
      }
    ],
    "currentPage": 1,
    "totalPages": 5,
    "totalDomains": 42,
    "totalMailboxes": 126
  }
}`,
        },
        {
          type: "callout",
          variant: "info",
          title: "Inventory is availability-driven",
          content:
            "The documented pre-warmup flow depends on available inventory. Check the inventory before placing an order and handle the possibility that the requested assignment may not be available when the order is processed.",
        },
      ],
    },

    {
      id: "place-order",
      title: "Placing a Pre-Warmup Order",
      description:
        "Create a pre-warmup order by specifying the domains and the mailbox service provider.",
      content: [
        {
          type: "paragraph",
          content:
            "Pre-warmup orders are created through the /pre-warmup/order endpoint. Each item in the order array specifies a domain and may optionally include a forwarding URL.",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /pre-warmup/order?userId=<user-id>\nAuthorization: cmr-x-api-key: <api-key>\nContent-Type: application/json",
        },
        {
          type: "heading",
          content: "Google Workspace order",
        },
        {
          type: "code",
          language: "json",
          content: `{
  "order": [
    {
      "domain": "prewarm-acmecorp.com",
      "forwardTo": "https://acmecorp.com"
    }
  ],
  "serviceProvider": "GOOGLE",
  "google": {
    "googleOauthRoute": "https://yourapp.com/oauth/google",
    "clientId": "...",
    "appName": "YourApp"
  },
  "autoRenew": true
}`,
        },
        {
          type: "heading",
          content: "Microsoft order",
        },
        {
          type: "code",
          language: "json",
          content: `{
  "order": [
    {
      "domain": "prewarm-acmecorp.com"
    }
  ],
  "serviceProvider": "MICROSOFT",
  "microsoftOauthRoute": "https://yourapp.com/oauth/microsoft"
}`,
        },
        {
          type: "paragraph",
          content:
            "The documented API returns HTTP 201 when the pre-warmup order is created and queued for processing.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Wallet balance is required",
          content:
            "The pre-warmup order documentation states that sufficient wallet balance is required. A lack of available balance can also result in a prewarmup.order.failed outcome.",
        },
      ],
    },

    {
      id: "google-microsoft",
      title: "Google and Microsoft Pre-Warmup Orders",
      description:
        "The order structure changes depending on the mailbox service provider.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR supports pre-warmup orders for both Google and Microsoft mailboxes. The serviceProvider field determines which provider-specific configuration is used.",
        },
        {
          type: "steps",
          items: [
            {
              id: "google",
              title: "Google",
              description:
                "Use serviceProvider: GOOGLE and provide the Google OAuth configuration documented for the pre-warmup order.",
            },
            {
              id: "microsoft",
              title: "Microsoft",
              description:
                "Use serviceProvider: MICROSOFT and provide the Microsoft OAuth route documented for the order.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "The available inventory endpoint can also be filtered by serviceProvider, allowing your application to search specifically for Google or Microsoft pre-warmed inventory.",
        },
      ],
    },

    {
      id: "forwarding",
      title: "Using the Optional Forwarding URL",
      description:
        "Understand where forwardTo fits into a pre-warmup order.",
      content: [
        {
          type: "paragraph",
          content:
            "Each item in the pre-warmup order array may include a forwardTo URL. The API documentation describes this field as an optional forwarding URL associated with the domain being ordered.",
        },
        {
          type: "code",
          language: "json",
          content: `{
  "order": [
    {
      "domain": "prewarm-acmecorp.com",
      "forwardTo": "https://acmecorp.com"
    }
  ]
}`,
        },
        {
          type: "callout",
          variant: "info",
          title: "Keep the field optional",
          content:
            "The pre-warmup order documentation marks the forwarding URL as optional. Do not require it in your integration unless your own product flow needs it.",
        },
      ],
    },

    {
      id: "async-result",
      title: "Handling the Order Result",
      description:
        "Pre-warmup assignment is reported through dedicated webhook events.",
      content: [
        {
          type: "paragraph",
          content:
            "The initial API request creates and queues the order. The final assignment result is communicated through CMR's pre-warmup webhook lifecycle.",
        },
        {
          type: "heading",
          content: "Successful assignment",
        },
        {
          type: "code",
          language: "text",
          content: "prewarmup.order.success",
        },
        {
          type: "paragraph",
          content:
            "This event indicates that pre-warmed accounts were successfully assigned. CMR's lifecycle documentation describes the accounts as available with credentials after a successful assignment.",
        },
        {
          type: "heading",
          content: "Failed assignment",
        },
        {
          type: "code",
          language: "text",
          content: "prewarmup.order.failed",
        },
        {
          type: "paragraph",
          content:
            "This event indicates that the pre-warmup assignment failed. Documented causes include no available pool, insufficient wallet balance, or domain restrictions.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Handle success and failure",
          content:
            "Do not treat the initial successful HTTP response as proof that the pre-warmed accounts were assigned. CMR documents pre-warmup as an asynchronous operation, so your application should process the final webhook outcome.",
        },
      ],
    },

    {
      id: "multiple-domains",
      title: "Ordering Multiple Domains",
      description:
        "A single pre-warmup order can contain more than one domain.",
      content: [
        {
          type: "paragraph",
          content:
            "The order field is an array, so a single request can contain multiple domains. CMR explicitly documents that these domains can have different assignment outcomes.",
        },
        {
          type: "code",
          language: "json",
          content: `{
  "order": [
    {
      "domain": "domain-a.com"
    },
    {
      "domain": "domain-b.com"
    }
  ],
  "serviceProvider": "GOOGLE"
}`,
        },
        {
          type: "paragraph",
          content:
            "For example, domain-a.com may generate prewarmup.order.success while domain-b.com generates prewarmup.order.failed. Your webhook handler should inspect the domain associated with each event.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not assume all-or-nothing results",
          content:
            "A multi-domain order can produce both success and failure events. Update your internal order state at the domain level when the webhook payload provides that information.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common Mistakes",
      description:
        "Avoid the most common implementation problems in the pre-warmup flow.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-one",
              title: "Treating pre-warmup as normal mailbox warmup",
              description:
                "Pre-warmup is a separate product and ordering flow. It provides access to pre-warmed accounts rather than enrolling an existing mailbox into warmup.",
            },
            {
              id: "mistake-two",
              title: "Skipping inventory checks",
              description:
                "Use GET /pre-warmup to inspect available inventory before placing an order.",
            },
            {
              id: "mistake-three",
              title: "Ignoring wallet balance",
              description:
                "The order requires sufficient wallet balance. Insufficient balance can prevent assignment.",
            },
            {
              id: "mistake-four",
              title: "Assuming the initial response means assignment is complete",
              description:
                "The order is queued for processing. Handle prewarmup.order.success and prewarmup.order.failed to determine the final outcome.",
            },
            {
              id: "mistake-five",
              title: "Treating a multi-domain order as one result",
              description:
                "Different domains in the same order can succeed or fail independently. Process the domain associated with each event.",
            },
          ],
        },
      ],
    },

    {
      id: "recommended-workflow",
      title: "A Safe Pre-Warmup Workflow",
      description:
        "Use this sequence when integrating pre-warmup into your platform.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "workflow-one",
              title: "1. Check inventory",
              description:
                "Call GET /pre-warmup and filter by service provider or domain when needed.",
            },
            {
              id: "workflow-two",
              title: "2. Confirm wallet availability",
              description:
                "Make sure the Partner wallet has sufficient balance for the order.",
            },
            {
              id: "workflow-three",
              title: "3. Build the order",
              description:
                "Add the required domains to the order array and provide the provider-specific configuration.",
            },
            {
              id: "workflow-four",
              title: "4. Submit the order",
              description:
                "Call POST /pre-warmup/order with the required userId and API authentication.",
            },
            {
              id: "workflow-five",
              title: "5. Wait for the webhook result",
              description:
                "Process prewarmup.order.success or prewarmup.order.failed rather than assuming assignment from the initial HTTP response.",
            },
            {
              id: "workflow-six",
              title: "6. Handle each domain outcome",
              description:
                "For multi-domain orders, associate each webhook outcome with its domain and update your platform accordingly.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Design around the event lifecycle",
          content:
            "CMR's documentation describes pre-warmup as an event-driven workflow. Build your integration around the final success or failure event so your application's state reflects the actual assignment result.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related Guides",
      description:
        "Continue with the guides that cover regular mailbox warmup and deliverability workflows.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "what-warmup-does",
              title: "What Mailbox Warmup Does and Why It Matters",
              description:
                "Understand the purpose of mailbox warmup and how it differs from pre-warmup.",
              href: "/concepts/warmup-deliverability/what-warmup-does",
            },
            {
              id: "enabling-warmup",
              title: "Enabling Warmup at Order Time vs Adding It Later",
              description:
                "Learn how to enable warmup when provisioning a mailbox or add it to an existing active mailbox.",
              href: "/concepts/warmup-deliverability/enabling-warmup",
            },
            {
              id: "pausing-vs-disabling",
              title: "Pausing vs Permanently Disabling Warmup",
              description:
                "Understand the difference between temporarily pausing warmup and permanently removing a mailbox from warmup.",
              href: "/concepts/warmup-deliverability/pausing-vs-disabling-warmup",
            },
            {
              id: "placement-test",
              title: "Running a Placement Test",
              description:
                "Learn how to run placement tests and interpret mailbox-level deliverability results.",
              href: "/concepts/warmup-deliverability/placement-test",
            },
          ],
        },
      ],
    },
  ],
};