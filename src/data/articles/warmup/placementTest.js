export const placementTestArticle = {
  id: "placement-test",
  slug: "/concepts/warmup-deliverability/placement-test",
  category: {
    id: "warmup-deliverability",
    label: "Warmup and Deliverability",
    slug: "/concepts/warmup-deliverability",
  },
  title: "Running a Placement Test",
  description:
    "Learn how CMR placement tests measure mailbox deliverability, how to create a placement test order, how the results are generated, and how to retrieve placement reports.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "A placement test checks how email from selected mailboxes is delivered across Gmail and Microsoft 365 inboxes and spam folders. CMR creates the placement test as an asynchronous order, queues seed emails for testing, and makes the results available through the placement reports API.",

  sections: [
    {
      id: "what-placement-test-does",
      title: "What a placement test does",
      description:
        "Placement testing gives you a way to inspect where test emails are landing across supported mailbox providers.",
      content: [
        {
          type: "paragraph",
          content:
            "A placement test creates a test order for one or more mailboxes. CMR queues seed emails and tests inbox deliverability across Gmail and Outlook mailboxes.",
        },
        {
          type: "paragraph",
          content:
            "The test can also include SpamAssassin and blacklist checks. These checks are requested when the corresponding options are enabled in the placement order.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Placement testing is different from warmup",
          content:
            "Warmup gradually builds mailbox sending activity. A placement test evaluates deliverability using test messages and reports where those messages are placed.",
        },
      ],
    },

    {
      id: "when-to-run",
      title: "When to run a placement test",
      description:
        "Use placement testing when you need current deliverability information for one or more mailboxes.",
      content: [
        {
          type: "paragraph",
          content:
            "A placement test is useful when your workflow needs to inspect mailbox placement rather than simply confirm that a mailbox exists or is active.",
        },
        {
          type: "steps",
          items: [
            {
              id: "check-mailbox",
              title: "Identify the mailbox",
              description:
                "Choose the mailbox or mailboxes whose deliverability you want to test.",
            },
            {
              id: "choose-tests",
              title: "Choose the checks",
              description:
                "Decide whether the placement order should include inbox testing, SpamAssassin, blacklist checks, and optional AI insight.",
            },
            {
              id: "create-test",
              title: "Create the placement order",
              description:
                "Submit the placement request using the selected mailbox IDs.",
            },
            {
              id: "review-results",
              title: "Review the report",
              description:
                "Retrieve the placement report after the asynchronous test has produced its results.",
            },
          ],
        },
      ],
    },

    {
      id: "create-order",
      title: "Create a placement test order",
      description:
        "Use the placement endpoint to create and queue a test.",
      content: [
        {
          type: "paragraph",
          content:
            "Create a placement test using the following endpoint:",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /placement?userId=",
        },
        {
          type: "paragraph",
          content:
            "Authenticate the request using your CMR Partner API key in the cmr-x-api-key header.",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /placement?userId=USER_ID\ncmr-x-api-key: YOUR_API_KEY\nContent-Type: application/json",
        },
        {
          type: "callout",
          variant: "info",
          title: "The test is asynchronous",
          content:
            "A successful placement request creates and queues the order. The response gives you an orderId that you can use to retrieve the resulting placement report.",
        },
      ],
    },

    {
      id: "request-body",
      title: "Build the placement request",
      description:
        "Specify the mailboxes and the checks you want CMR to perform.",
      content: [
        {
          type: "paragraph",
          content:
            "The placement request accepts an array of mailbox IDs and options for SpamAssassin, blacklist checking, and AI insight.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "mailboxIds": [\n    "GP6M2J2DHXM3F2J40S8AP316R2QR",\n    "4X9K1L7N2P5Q8R3S6T0U"\n  ],\n  "spamassassin": true,\n  "blacklist": true,\n  "aiInsight": false\n}',
        },
        {
          type: "steps",
          items: [
            {
              id: "mailbox-ids",
              title: "mailboxIds",
              description:
                "Provide the mailbox IDs for the mailboxes you want to test.",
            },
            {
              id: "spamassassin",
              title: "spamassassin",
              description:
                "Set this option to true when you want the placement order to include the documented SpamAssassin check.",
            },
            {
              id: "blacklist",
              title: "blacklist",
              description:
                "Set this option to true when you want the placement order to include the documented blacklist check.",
            },
            {
              id: "ai-insight",
              title: "aiInsight",
              description:
                "Set this option to true when you want CMR to generate the additional AI-powered deliverability report.",
            },
          ],
        },
      ],
    },

    {
      id: "wallet-charge",
      title: "Placement tests use the Partner wallet",
      description:
        "Creating a placement test creates a charge against the Partner wallet.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents that creating a placement test charges the Partner wallet and queues the seed emails for testing.",
        },
        {
          type: "paragraph",
          content:
            "The placement API can return HTTP 402 Payment Required when the wallet cannot cover the required placement test charge.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Check wallet balance before testing",
          content:
            "A placement order requires sufficient Partner wallet balance. If the required balance is unavailable, the API can return 402 Payment Required.",
        },
      ],
    },

    {
      id: "ai-insight",
      title: "Optional AI deliverability insight",
      description:
        "AI insight provides an additional interpretation of placement results.",
      content: [
        {
          type: "paragraph",
          content:
            "The placement API supports an optional aiInsight setting. When enabled, CMR generates an additional AI-powered deliverability report after the placement results are ready.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "AI insight has an additional charge",
          content:
            "CMR documents that enabling AI insight incurs an extra charge. The placement test itself and the optional AI insight should therefore be treated as separate chargeable components.",
        },
        {
          type: "paragraph",
          content:
            "When aiInsightRequested is true, the placement report can contain an aiInsight object once generation has completed.",
        },
      ],
    },

    {
      id: "order-response",
      title: "Store the placement order ID",
      description:
        "The initial response gives you the identifier needed to retrieve the report.",
      content: [
        {
          type: "paragraph",
          content:
            "A successful placement request returns an orderId.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "status": 200,\n  "message": "Success",\n  "data": {\n    "orderId": "7K2M9P4Q1R8S5T3U6V0W2X4Y8Z1A"\n  }\n}',
        },
        {
          type: "steps",
          items: [
            {
              id: "store-order-id",
              title: "1. Store the orderId",
              description:
                "Persist the returned orderId so your application can retrieve the corresponding placement report.",
            },
            {
              id: "wait-results",
              title: "2. Wait for results",
              description:
                "The placement test is queued asynchronously, so the report may not be populated immediately.",
            },
            {
              id: "retrieve-report",
              title: "3. Retrieve the report",
              description:
                "Use GET /placement/reports to retrieve placement results.",
            },
          ],
        },
      ],
    },

    {
      id: "retrieve-reports",
      title: "Retrieve placement reports",
      description:
        "Use the placement reports endpoint to retrieve the results of your tests.",
      content: [
        {
          type: "paragraph",
          content:
            "Retrieve placement reports using:",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /placement/reports?userId=",
        },
        {
          type: "paragraph",
          content:
            "The reports endpoint returns paginated placement test results, grouped by orderId. One purchase containing multiple mailboxes appears as one report entry with a mailboxes array.",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /placement/reports?userId=USER_ID&orderId=ORDER_ID&page=1&limit=10",
        },
        {
          type: "paragraph",
          content:
            "You can also provide mailboxId to retrieve placement orders associated with a specific mailbox.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Reports are grouped by order",
          content:
            "If one placement order contains multiple mailboxes, the reports API groups those results under the same orderId and exposes the individual mailbox results inside the mailboxes array.",
        },
      ],
    },

    {
      id: "report-structure",
      title: "Understanding the placement report",
      description:
        "The report contains aggregate order information and mailbox-level results.",
      content: [
        {
          type: "paragraph",
          content:
            "A placement report includes an overall order status and a mailboxes array containing the results for the individual mailboxes in that order.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "orderId": "7K2M9P4Q1R8S5T3U6V0W2X4Y8Z1A",\n  "status": "PENDING",\n  "spamassassin": true,\n  "blacklist": true,\n  "mailboxCount": 2,\n  "mailboxes": [\n    {\n      "placementOrderId": "3N5P7Q9R1S4T6U8V",\n      "fromEmail": "john@acme.com",\n      "status": "PENDING",\n      "report": {\n        "inboxTest": {\n          "google": [],\n          "microsoft365": []\n        },\n        "spamassassin": {},\n        "blacklist": {}\n      }\n    }\n  ]\n}',
        },
        {
          type: "steps",
          items: [
            {
              id: "aggregate-status",
              title: "Order status",
              description:
                "The top-level status represents the aggregate status across the mailboxes in the grouped placement order.",
            },
            {
              id: "mailbox-results",
              title: "Mailbox results",
              description:
                "Each mailbox entry contains its own placementOrderId, fromEmail, status, and report information.",
            },
            {
              id: "inbox-test",
              title: "Inbox placement",
              description:
                "The inboxTest section contains results for the supported Google and Microsoft 365 test destinations.",
            },
            {
              id: "spam-report",
              title: "SpamAssassin",
              description:
                "The report can contain the results of the SpamAssassin check when it was requested.",
            },
            {
              id: "blacklist-report",
              title: "Blacklist",
              description:
                "The report can contain the results of the blacklist check when it was requested.",
            },
          ],
        },
      ],
    },

    {
      id: "gmail-outlook",
      title: "Gmail and Microsoft 365 placement",
      description:
        "Placement testing checks inbox placement across the documented provider destinations.",
      content: [
        {
          type: "paragraph",
          content:
            "The placement report contains an inboxTest section with separate results for Google and Microsoft 365.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "inboxTest": {\n    "google": [],\n    "microsoft365": []\n  }\n}',
        },
        {
          type: "paragraph",
          content:
            "These results allow your application to distinguish the placement results returned for Google and Microsoft 365 test destinations.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Placement is provider-specific",
          content:
            "A placement result for Google and a placement result for Microsoft 365 are represented separately. Do not collapse provider-specific results into a single destination without preserving their source.",
        },
      ],
    },

    {
      id: "report-status",
      title: "Working with PENDING results",
      description:
        "Placement results may initially be unavailable while the test is still processing.",
      content: [
        {
          type: "paragraph",
          content:
            "A newly created placement order is queued for processing. The reports endpoint can therefore return a placement order with status PENDING while the test is still running.",
        },
        {
          type: "steps",
          items: [
            {
              id: "pending",
              title: "PENDING",
              description:
                "The placement test has not completed yet.",
            },
            {
              id: "retrieve-again",
              title: "Retrieve the report again",
              description:
                "Request the placement report again when your workflow needs to check whether results have become available.",
            },
            {
              id: "process-results",
              title: "Process the completed report",
              description:
                "Once the individual mailbox results are available, store and display the placement information required by your application.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Do not treat PENDING as a failed test",
          content:
            "PENDING indicates that the placement order is still being processed. It should not be interpreted as a negative deliverability result.",
        },
      ],
    },

    {
      id: "filtering-reports",
      title: "Filter reports by order or mailbox",
      description:
        "Use the supported filters when you need a specific placement result.",
      content: [
        {
          type: "heading",
          content: "Filter by orderId",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /placement/reports?userId=USER_ID&orderId=ORDER_ID",
        },
        {
          type: "paragraph",
          content:
            "Use orderId when you want the report for a specific placement order.",
        },

        {
          type: "heading",
          content: "Filter by mailboxId",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /placement/reports?userId=USER_ID&mailboxId=MAILBOX_ID",
        },
        {
          type: "paragraph",
          content:
            "Use mailboxId when you want placement orders associated with a specific mailbox.",
        },

        {
          type: "heading",
          content: "Paginate results",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /placement/reports?userId=USER_ID&page=1&limit=10",
        },
        {
          type: "paragraph",
          content:
            "The reports endpoint returns a paginated list, with the newest placement order groups returned first.",
        },
      ],
    },

    {
      id: "errors",
      title: "Handling placement test errors",
      description:
        "The placement API documents several HTTP error responses.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "bad-request",
              title: "400 Bad Request",
              description:
                "The placement request is invalid. Check the request body and mailbox IDs.",
            },
            {
              id: "unauthorized",
              title: "401 Unauthorized",
              description:
                "Verify that the CMR API key is present and valid.",
            },
            {
              id: "payment-required",
              title: "402 Payment Required",
              description:
                "The Partner wallet does not have sufficient balance for the placement test charge.",
            },
            {
              id: "not-found",
              title: "404 Not Found",
              description:
                "The requested resource or mailbox could not be found.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Check wallet balance for 402 errors",
          content:
            "If a placement request returns 402 Payment Required, check the Partner wallet balance before retrying the order.",
        },
      ],
    },

    {
      id: "safe-workflow",
      title: "Complete placement testing workflow",
      description:
        "Use this sequence to create and retrieve a placement test.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "workflow-mailboxes",
              title: "1. Select the mailboxes",
              description:
                "Identify the mailbox IDs whose deliverability you want to test.",
            },
            {
              id: "workflow-options",
              title: "2. Choose the checks",
              description:
                "Choose whether to enable SpamAssassin, blacklist checking, and optional AI insight.",
            },
            {
              id: "workflow-wallet",
              title: "3. Check the Partner wallet",
              description:
                "Make sure the wallet can cover the placement test charge and any optional AI insight charge.",
            },
            {
              id: "workflow-create",
              title: "4. Create the placement order",
              description:
                "Call POST /placement with the selected mailbox IDs and test options.",
            },
            {
              id: "workflow-store",
              title: "5. Store the orderId",
              description:
                "Save the orderId returned by the API.",
            },
            {
              id: "workflow-wait",
              title: "6. Wait for processing",
              description:
                "The placement order is processed asynchronously.",
            },
            {
              id: "workflow-report",
              title: "7. Retrieve the report",
              description:
                "Use GET /placement/reports with orderId or mailboxId when you need the results.",
            },
            {
              id: "workflow-review",
              title: "8. Review provider-specific results",
              description:
                "Inspect Google and Microsoft 365 inbox placement results along with any requested SpamAssassin, blacklist, and AI insight information.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common placement testing mistakes",
      description:
        "Avoid common integration and interpretation errors.",
      content: [
        {
          type: "heading",
          content: "Treating order creation as test completion",
        },
        {
          type: "paragraph",
          content:
            "POST /placement only creates and queues the test. Retrieve the report after processing.",
        },

        {
          type: "heading",
          content: "Treating PENDING as a failed result",
        },
        {
          type: "paragraph",
          content:
            "PENDING means the placement test is still being processed.",
        },

        {
          type: "heading",
          content: "Forgetting the orderId",
        },
        {
          type: "paragraph",
          content:
            "Store the returned orderId because it is the primary identifier for retrieving a specific placement order group.",
        },

        {
          type: "heading",
          content: "Assuming one order equals one mailbox",
        },
        {
          type: "paragraph",
          content:
            "A placement order can contain multiple mailbox IDs. The reports API groups them under one orderId and exposes individual mailbox results.",
        },

        {
          type: "heading",
          content: "Ignoring the Partner wallet",
        },
        {
          type: "paragraph",
          content:
            "Placement tests charge the Partner wallet. A 402 response can occur when the available balance is insufficient.",
        },

        {
          type: "heading",
          content: "Assuming AI insight is included at no additional cost",
        },
        {
          type: "paragraph",
          content:
            "CMR documents an additional charge when AI insight is requested.",
        },

        {
          type: "heading",
          content: "Combining Google and Microsoft 365 results",
        },
        {
          type: "paragraph",
          content:
            "The report keeps Google and Microsoft 365 inbox-test results separate. Preserve that distinction when displaying or storing placement results.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with Warmup and Deliverability",
      description:
        "Use these guides to understand the relationship between warmup and deliverability testing.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "what-warmup-does",
              title: "What Mailbox Warmup Does and Why It Matters",
              description:
                "Understand mailbox warmup, its lifecycle, and how warmup supports mailbox deliverability.",
              href: "/concepts/warmup-deliverability/what-warmup-does",
            },
            {
              id: "enabling-warmup",
              title: "Enabling Warmup at Order Time vs Adding It Later",
              description:
                "Compare enrolling a mailbox in warmup during provisioning with adding warmup afterward.",
              href: "/concepts/warmup-deliverability/enabling-warmup",
            },
            {
              id: "pausing-vs-disabling",
              title: "Pausing vs Permanently Disabling Warmup",
              description:
                "Understand the difference between PAUSED and STOPPED warmup states.",
              href: "/concepts/warmup-deliverability/pausing-vs-disabling-warmup",
            },
            {
              id: "warmup-proration",
              title: "Understanding Proration on Mid-Period Warmup Changes",
              description:
                "Understand how CMR calculates a prorated warmup charge when warmup is added during a billing period.",
              href: "/concepts/warmup-deliverability/warmup-proration",
            },
            {
              id: "pre-warmup",
              title: "Pre-Warmup: Buying Mailboxes That Are Already Warmed",
              description:
                "Learn how CMR pre-warmup inventory and ordering work.",
              href: "/concepts/warmup-deliverability/pre-warmup",
            },
          ],
        },
      ],
    },
  ],
};