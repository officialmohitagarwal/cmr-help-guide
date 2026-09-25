export const enablingWarmupArticle = {
  id: "enabling-warmup",
  slug: "/concepts/warmup-deliverability/enabling-warmup",
  category: {
    id: "warmup-deliverability",
    label: "Warmup and Deliverability",
    slug: "/concepts/warmup-deliverability",
  },
  title: "Enabling Warmup at Order Time vs Adding It Later",
  description:
    "Understand the two ways to enable mailbox warmup in CMR, how order-time enrollment differs from adding warmup to an existing mailbox, and how billing and activation work in each flow.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "CMR supports two ways to enroll a mailbox in warmup: enable it while creating the mailbox order, or add warmup later to an already active mailbox. The two flows use different API operations and have different billing behavior. Order-time warmup is charged together with the mailbox, while adding warmup to an existing mailbox creates a prorated charge for the remaining days in the current billing period.",

  sections: [
    {
      id: "two-ways",
      title: "Two ways to enable warmup",
      description:
        "Choose the enrollment flow based on when you want warmup to begin.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR allows warmup to be enabled either during mailbox provisioning or after the mailbox has already been activated.",
        },
        {
          type: "steps",
          items: [
            {
              id: "order-time",
              title: "Enable warmup at order time",
              description:
                "Set onWarmup to true on the mailbox entry when creating the mailbox order. Warmup is enrolled as part of the mailbox provisioning flow.",
            },
            {
              id: "later",
              title: "Add warmup to an existing mailbox",
              description:
                "Call POST /mailboxes/warmup?mailboxId= for an already active mailbox. CMR calculates a prorated charge for the remaining days in the billing period.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Warmup can be added later",
          content:
            "You do not have to decide about warmup permanently when creating the mailbox. CMR also supports enrolling an existing ACTIVE mailbox later.",
        },
      ],
    },

    {
      id: "order-time",
      title: "Enable warmup at order time",
      description:
        "Enroll the mailbox during the initial mailbox order.",
      content: [
        {
          type: "paragraph",
          content:
            "When creating a mailbox order, set onWarmup to true on the individual mailbox that should be enrolled in warmup.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "mailboxes": {\n    "acmecorp.com": [\n      {\n        "username": "alice",\n        "firstName": "Alice",\n        "lastName": "Smith",\n        "onWarmup": true\n      },\n      {\n        "username": "bob",\n        "firstName": "Bob",\n        "lastName": "Jones",\n        "onWarmup": false\n      }\n    ]\n  }\n}',
        },
        {
          type: "paragraph",
          content:
            "Warmup is configured independently for each mailbox in the order. One mailbox can have onWarmup set to true while another mailbox in the same order has it set to false.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "onWarmup defaults to false",
          content:
            "If onWarmup is not provided, CMR documents the default as false. Warmup is therefore not automatically enabled for every mailbox unless you explicitly request it.",
        },
      ],
    },

    {
      id: "order-time-billing",
      title: "How order-time warmup is billed",
      description:
        "Warmup is charged together with the mailbox when it is enabled during the order.",
      content: [
        {
          type: "paragraph",
          content:
            "When warmup is enabled at order time, CMR charges the warmup amount alongside the mailbox in the same transaction.",
        },
        {
          type: "code",
          language: "text",
          content:
            "Total = (mailbox count × mailbox price)\n      + (warmup count × warmup price)",
        },
        {
          type: "paragraph",
          content:
            "This means the Partner wallet needs to cover both the mailbox and warmup charges when the order is processed.",
        },
        {
          type: "callout",
          variant: "info",
          title: "No mid-period proration for order-time enrollment",
          content:
            "Warmup enabled as part of the initial mailbox order is charged alongside the mailbox. The prorated warmup calculation applies when warmup is added later to an already active mailbox.",
        },
      ],
    },

    {
      id: "existing-mailbox",
      title: "Add warmup to an existing mailbox",
      description:
        "Enroll an already provisioned mailbox using the warmup API.",
      content: [
        {
          type: "paragraph",
          content:
            "To add warmup after mailbox provisioning, use the dedicated warmup endpoint:",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /mailboxes/warmup?mailboxId=<mailboxId>",
        },
        {
          type: "paragraph",
          content:
            "The mailbox must be in the ACTIVE state before warmup can be added.",
        },
        {
          type: "steps",
          items: [
            {
              id: "find-mailbox",
              title: "1. Identify the mailbox",
              description:
                "Retrieve the mailbox and confirm the mailboxId of the mailbox you want to enroll.",
            },
            {
              id: "check-active",
              title: "2. Confirm the mailbox is ACTIVE",
              description:
                "CMR requires the mailbox to be ACTIVE before warmup can be added.",
            },
            {
              id: "add-warmup",
              title: "3. Add warmup",
              description:
                "Call POST /mailboxes/warmup with the mailboxId.",
            },
            {
              id: "enrollment",
              title: "4. Wait for enrollment",
              description:
                "The mailbox enters PENDING while warmup enrollment is being processed.",
            },
            {
              id: "active",
              title: "5. Warmup becomes ACTIVE",
              description:
                "After enrollment completes, the warmup status moves to ACTIVE and warmup activity begins.",
            },
          ],
        },
      ],
    },

    {
      id: "mid-period-billing",
      title: "How later enrollment is billed",
      description:
        "Adding warmup during an existing billing period creates a prorated charge.",
      content: [
        {
          type: "paragraph",
          content:
            "When warmup is added to an existing ACTIVE mailbox, CMR calculates a prorated charge based on the remaining days in the current billing period.",
        },
        {
          type: "code",
          language: "text",
          content:
            "Charge = warmupPrice × (daysRemaining / 30)",
        },
        {
          type: "steps",
          items: [
            {
              id: "enroll-date",
              title: "Enrollment date",
              description:
                "The date on which warmup is added determines how much of the current billing period remains.",
            },
            {
              id: "remaining-days",
              title: "Remaining days",
              description:
                "CMR calculates the number of remaining days in the current billing period.",
            },
            {
              id: "calculate",
              title: "Calculate the prorated amount",
              description:
                "The warmup price is multiplied by the remaining-days fraction of a 30-day billing period.",
            },
            {
              id: "wallet",
              title: "Deduct from the Partner wallet",
              description:
                "The prorated warmup charge is deducted from the Partner wallet.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The mailbox must have sufficient wallet coverage",
          content:
            "Because adding warmup creates a wallet charge, your integration should account for the required Partner wallet balance before initiating the enrollment.",
        },
      ],
    },

    {
      id: "enrollment-status",
      title: "Understanding warmup enrollment status",
      description:
        "Warmup does not necessarily become ACTIVE at the exact moment the API request is made.",
      content: [
        {
          type: "paragraph",
          content:
            "After warmup enrollment is requested, the mailbox can temporarily remain in PENDING while CMR completes the enrollment.",
        },
        {
          type: "steps",
          items: [
            {
              id: "pending",
              title: "PENDING",
              description:
                "Warmup enrollment is in progress. CMR documents this as the temporary state while enrollment is confirmed.",
            },
            {
              id: "active",
              title: "ACTIVE",
              description:
                "Warmup is running for the mailbox.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "CMR documents that enrollment normally takes a few minutes at most before the mailbox moves from PENDING to ACTIVE.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not treat the enrollment request as completed warmup",
          content:
            "The warmup API request starts the enrollment process. Use the mailbox's warmup status to determine whether warmup has actually become ACTIVE.",
        },
      ],
    },

    {
      id: "webhook",
      title: "Confirming warmup activation",
      description:
        "Use the warmup webhook event when your integration needs an event-driven confirmation.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents the mailbox.warmup.started event for warmup activation. The event is fired after warmup starts and the mailbox moves to ACTIVE.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "eventType": "mailbox.warmup.started",\n  "data": {\n    "userId": "HATSA7AB56M513Q6EBF005YFHDQT",\n    "userEmail": "partner-user@example.com",\n    "mailboxId": "4165WDY91BMKS6JD341FKQ5XVP19",\n    "email": "alice@acmecorp.com",\n    "domain": "acmecorp.com",\n    "workspaceType": "GOOGLE"\n  }\n}',
        },
        {
          type: "steps",
          items: [
            {
              id: "receive",
              title: "Receive mailbox.warmup.started",
              description:
                "Your webhook endpoint receives the event when warmup has started.",
            },
            {
              id: "match",
              title: "Match the mailbox",
              description:
                "Use mailboxId to identify the mailbox whose warmup status changed.",
            },
            {
              id: "update",
              title: "Update your application",
              description:
                "Mark warmup as active in your own system when the event is received.",
            },
          ],
        },
      ],
    },

    {
      id: "order-vs-existing",
      title: "Order-time enrollment vs later enrollment",
      description:
        "The two flows differ in when warmup is requested and how the initial charge is calculated.",
      content: [
        {
          type: "heading",
          content: "At order time",
        },
        {
          type: "steps",
          items: [
            {
              id: "order-api",
              title: "Order API",
              description:
                "Warmup is enabled through the onWarmup field on the mailbox order.",
            },
            {
              id: "order-state",
              title: "Mailbox provisioning",
              description:
                "Warmup enrollment happens as part of the mailbox provisioning flow.",
            },
            {
              id: "order-charge",
              title: "Billing",
              description:
                "Warmup is charged alongside the mailbox in the same transaction.",
            },
          ],
        },

        {
          type: "heading",
          content: "After mailbox activation",
        },
        {
          type: "steps",
          items: [
            {
              id: "existing-api",
              title: "Warmup API",
              description:
                "Call POST /mailboxes/warmup?mailboxId= for the existing mailbox.",
            },
            {
              id: "existing-state",
              title: "Mailbox requirement",
              description:
                "The mailbox must be ACTIVE before warmup can be added.",
            },
            {
              id: "existing-charge",
              title: "Billing",
              description:
                "A prorated charge is calculated for the remaining days of the current billing period and deducted from the Partner wallet.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Both flows lead to the same warmup lifecycle",
          content:
            "Whether warmup is enabled during provisioning or added later, the warmup subscription ultimately moves through its documented warmup states and can be managed using the warmup controls.",
        },
      ],
    },

    {
      id: "settings-after-enrollment",
      title: "Configure warmup after enrollment",
      description:
        "Once warmup is enrolled, its configuration can be adjusted through the warmup settings API.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides a separate endpoint for updating the configuration of an enrolled mailbox's warmup.",
        },
        {
          type: "code",
          language: "http",
          content:
            "PATCH /mailboxes/warmup/settings?mailboxId=<mailboxId>",
        },
        {
          type: "paragraph",
          content:
            "The documented settings include warmup limits, reply and open rates, spam protection rate, weekday behavior, daily increase, and the minimum and maximum delay between warmup emails.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "warmupLimit": 40,\n  "minimumWarmupLimit": 5,\n  "warmupReplyRate": 0.30,\n  "warmupOpenRate": 0.80,\n  "warmupSpamProtectionRate": 0.20,\n  "warmupOnWeekdays": true,\n  "increasePerDay": 2,\n  "warmupDisableSlow": false,\n  "minimumDelayBetweenWarmupEmails": 60,\n  "maximumDelayBetweenWarmupEmails": 300\n}',
        },
        {
          type: "callout",
          variant: "info",
          title: "Settings are separate from enrollment",
          content:
            "Adding warmup enrolls the mailbox in warmup. The warmup settings endpoint is used afterward to change the configuration of an enrolled mailbox.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid common issues when enabling mailbox warmup.",
      content: [
        {
          type: "heading",
          content: "Forgetting onWarmup",
        },
        {
          type: "paragraph",
          content:
            "If onWarmup is omitted from an order, CMR defaults it to false. The mailbox will therefore not be enrolled in warmup through that order.",
        },

        {
          type: "heading",
          content: "Trying to add warmup before the mailbox is ACTIVE",
        },
        {
          type: "paragraph",
          content:
            "The add-warmup endpoint requires the mailbox to be ACTIVE.",
        },

        {
          type: "heading",
          content: "Expecting immediate ACTIVE status",
        },
        {
          type: "paragraph",
          content:
            "Warmup enrollment can temporarily remain PENDING before becoming ACTIVE.",
        },

        {
          type: "heading",
          content: "Charging a full month for mid-period enrollment",
        },
        {
          type: "paragraph",
          content:
            "CMR documents a prorated calculation when warmup is added to an existing mailbox during the billing period.",
        },

        {
          type: "heading",
          content: "Confusing enrollment with configuration",
        },
        {
          type: "paragraph",
          content:
            "POST /mailboxes/warmup enrolls the mailbox. PATCH /mailboxes/warmup/settings changes the configuration of an enrolled mailbox.",
        },

        {
          type: "heading",
          content: "Ignoring wallet balance",
        },
        {
          type: "paragraph",
          content:
            "Adding warmup to an existing mailbox creates a prorated wallet charge, so the Partner wallet must be able to cover the charge.",
        },
      ],
    },

    {
      id: "complete-workflow",
      title: "Complete warmup enrollment workflow",
      description:
        "Use this sequence to enable and verify warmup for a mailbox.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "choose-flow",
              title: "1. Choose the enrollment flow",
              description:
                "Decide whether warmup should be enabled during mailbox order creation or added later.",
            },
            {
              id: "order-enable",
              title: "2. Enable warmup",
              description:
                "Use onWarmup: true during order creation, or call POST /mailboxes/warmup for an existing ACTIVE mailbox.",
            },
            {
              id: "wallet",
              title: "3. Account for the charge",
              description:
                "For order-time enrollment, warmup is charged with the mailbox. For mid-period enrollment, the prorated amount is deducted from the Partner wallet.",
            },
            {
              id: "pending",
              title: "4. Wait for enrollment",
              description:
                "The warmup status can remain PENDING while enrollment is processed.",
            },
            {
              id: "active",
              title: "5. Confirm ACTIVE",
              description:
                "Warmup becomes ACTIVE once enrollment has completed.",
            },
            {
              id: "webhook",
              title: "6. Process the activation event",
              description:
                "If your integration uses webhooks, handle mailbox.warmup.started when CMR reports that warmup has started.",
            },
            {
              id: "configure",
              title: "7. Configure warmup if required",
              description:
                "Use PATCH /mailboxes/warmup/settings when you need to change the configuration of the enrolled mailbox.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with Warmup and Deliverability",
      description:
        "Use these guides to understand the rest of the CMR warmup lifecycle.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "what-warmup-does",
              title: "What Mailbox Warmup Does and Why It Matters",
              description:
                "Understand what warmup does and how it supports mailbox deliverability.",
              href: "/concepts/warmup-deliverability/what-warmup-does",
            },
            {
              id: "pause-disable",
              title: "Pausing vs Permanently Disabling Warmup",
              description:
                "Understand the difference between PAUSED and STOPPED warmup.",
              href: "/concepts/warmup-deliverability/pausing-vs-disabling-warmup",
            },
            {
              id: "proration",
              title: "Understanding Proration on Mid-Period Warmup Changes",
              description:
                "Learn how CMR calculates prorated charges when warmup is added during an existing billing period.",
              href: "/concepts/warmup-deliverability/warmup-proration",
            },
            {
              id: "pre-warmup",
              title: "Pre-Warmup: Buying Mailboxes That Are Already Warmed",
              description:
                "Learn how pre-warmup inventory and ordering work.",
              href: "/concepts/warmup-deliverability/pre-warmup",
            },
            {
              id: "placement-test",
              title: "Running a Placement Test",
              description:
                "Learn how to test mailbox placement across Gmail and Microsoft 365.",
              href: "/concepts/warmup-deliverability/placement-test",
            },
          ],
        },
      ],
    },
  ],
};