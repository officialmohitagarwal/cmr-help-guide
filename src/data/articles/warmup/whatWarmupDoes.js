export const whatWarmupDoesArticle = {
  id: "what-warmup-does",
  slug: "/concepts/warmup-deliverability/what-warmup-does",
  category: {
    id: "warmup-deliverability",
    label: "Warmup and Deliverability",
    slug: "/concepts/warmup-deliverability",
  },
  title: "What Mailbox Warmup Does and Why It Matters",
  description:
    "Understand what mailbox warmup does, how it builds sender reputation, how it affects deliverability, and how CMR manages warmup for Google and Microsoft mailboxes.",
  author: "CMR Team",
  updated: "September 2026",
  introduction:
    "Mailbox warmup gradually increases sending activity from a mailbox to help establish sender reputation before higher-volume campaigns begin. CMR automates this process for both Google Workspace and Microsoft mailboxes, allowing Partners to enable, pause, resume, or permanently disable warmup at the mailbox level.",
  sections: [
    {
      id: "what-is-warmup",
      title: "What Is Mailbox Warmup?",
      description:
        "Understand the purpose of warmup and what happens when a mailbox is enrolled.",
      content: [
        {
          type: "paragraph",
          content:
            "Mailbox warmup is a gradual sending process designed to build a mailbox's sender reputation before the mailbox is used for higher-volume email campaigns.",
        },
        {
          type: "paragraph",
          content:
            "Instead of immediately sending a large volume of email from a newly provisioned mailbox, warmup gradually ramps up sending activity. This gives mailbox providers signals about the mailbox's sending behavior over time.",
        },
        {
          type: "paragraph",
          content:
            "CMR provides automated mailbox warmup for both Google Workspace and Microsoft mailboxes.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Warmup is mailbox-level",
          content:
            "Warmup is managed for individual mailboxes. You can enable, pause, resume, or permanently disable warmup for a specific mailbox without applying the same state to every mailbox on the domain.",
        },
      ],
    },

    {
      id: "why-warmup-matters",
      title: "Why Warmup Matters for Deliverability",
      description:
        "Understand the relationship between gradual sending, sender reputation, and inbox placement.",
      content: [
        {
          type: "heading",
          content: "Build sender reputation",
        },
        {
          type: "paragraph",
          content:
            "A newly created mailbox does not have an established sending history. CMR warmup gradually increases its sending activity to help build sender reputation before campaigns go live.",
        },
        {
          type: "heading",
          content: "Reduce spam placement",
        },
        {
          type: "paragraph",
          content:
            "CMR documents gradual sending as a way to provide trust signals to inbox providers and reduce the likelihood of messages being placed in spam.",
        },
        {
          type: "heading",
          content: "Improve deliverability",
        },
        {
          type: "paragraph",
          content:
            "The purpose of warmup is to establish a stronger sending reputation so that mailboxes are better prepared for normal campaign activity.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Warmup supports deliverability; it does not guarantee inbox placement",
          content:
            "Warmup is designed to build sender reputation and reduce spam placement. It should be treated as one part of a broader deliverability setup rather than a guarantee that every message will reach the inbox.",
        },
      ],
    },

    {
      id: "how-warmup-works",
      title: "How CMR Warmup Works",
      description:
        "Follow the basic lifecycle from enrollment to an active warmup mailbox.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "enrollment",
              title: "1. Enroll the mailbox",
              description:
                "Warmup can be enabled when the mailbox is ordered or added later to an existing active mailbox.",
            },
            {
              id: "pending",
              title: "2. Enrollment is processed",
              description:
                "When warmup enrollment is being processed, the documented warmup status is PENDING.",
            },
            {
              id: "active",
              title: "3. Warmup becomes active",
              description:
                "After enrollment is confirmed, the mailbox moves to ACTIVE and warmup activity begins.",
            },
            {
              id: "reputation",
              title: "4. Sending activity is gradually increased",
              description:
                "CMR warmup automatically ramps up mailbox sending activity to build sender reputation.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "CMR's documentation states that warmup enrollment normally takes a few minutes at most. The mailbox remains in PENDING until enrollment is confirmed and then moves to ACTIVE.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Use the warmup status as the source of truth",
          content:
            "Your integration should use the mailbox's warmup status to determine whether warmup is pending, active, paused, or permanently stopped.",
        },
      ],
    },

    {
      id: "warmup-statuses",
      title: "Understanding Warmup Statuses",
      description:
        "Each warmup status represents a different point in the warmup lifecycle.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "pending",
              title: "PENDING",
              description:
                "Warmup enrollment is in progress. The mailbox is waiting for enrollment to be confirmed.",
            },
            {
              id: "active",
              title: "ACTIVE",
              description:
                "Warmup is running and the mailbox is participating in the warmup process.",
            },
            {
              id: "paused",
              title: "PAUSED",
              description:
                "Warmup activity is temporarily paused. The warmup subscription remains associated with the mailbox and can be resumed.",
            },
            {
              id: "stopped",
              title: "STOPPED",
              description:
                "Warmup has been permanently disabled for the mailbox. The mailbox is no longer participating in the warmup subscription.",
            },
          ],
        },
        {
          type: "code",
          language: "text",
          content:
            "PENDING → ACTIVE\n       ↘ PAUSED → ACTIVE\n       ↘ STOPPED",
        },
        {
          type: "callout",
          variant: "warning",
          title: "PAUSED and STOPPED are not the same",
          content:
            "PAUSED represents a temporary interruption that can be resumed. STOPPED represents permanent removal of the warmup subscription and requires a new warmup enrollment if you want to warm the mailbox again.",
        },
      ],
    },

    {
      id: "google-microsoft",
      title: "Google Workspace and Microsoft Mailboxes",
      description:
        "CMR supports warmup for both major mailbox providers documented in the API.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR mailbox warmup is available for both Google Workspace and Microsoft mailboxes.",
        },
        {
          type: "steps",
          items: [
            {
              id: "google",
              title: "Google Workspace",
              description:
                "Google Workspace mailboxes can be enrolled in CMR warmup and managed through the same mailbox-level warmup lifecycle.",
            },
            {
              id: "microsoft",
              title: "Microsoft",
              description:
                "Microsoft mailboxes can also be enrolled in CMR warmup and managed through the mailbox-level warmup controls.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The warmup concept is the same",
          content:
            "The provider changes, but CMR's documented warmup controls are designed to manage warmup at the individual mailbox level for both Google and Microsoft environments.",
        },
      ],
    },

    {
      id: "enable-options",
      title: "When Can Warmup Be Enabled?",
      description:
        "CMR provides two ways to enroll a mailbox in warmup.",
      content: [
        {
          type: "heading",
          content: "Enable warmup when ordering",
        },
        {
          type: "paragraph",
          content:
            "When creating mailboxes, set onWarmup to true on the individual mailbox entry in the order request.",
        },
        {
          type: "code",
          language: "json",
          content: `{
  "acmecorp.com": [
    {
      "username": "alice",
      "onWarmup": true
    },
    {
      "username": "bob",
      "onWarmup": false
    }
  ]
}`,
        },
        {
          type: "paragraph",
          content:
            "If onWarmup is not provided, CMR documents the default as false. Warmup therefore needs to be explicitly enabled when you want it included with the mailbox order.",
        },
        {
          type: "heading",
          content: "Add warmup after provisioning",
        },
        {
          type: "paragraph",
          content:
            "Warmup can also be added to an existing active mailbox using the mailbox warmup endpoint.",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /mailboxes/warmup?mailboxId=<mailboxId>",
        },
        {
          type: "callout",
          variant: "info",
          title: "Two enrollment paths",
          content:
            "You can decide whether warmup belongs in the initial mailbox order or whether it should be added later. The second flow applies a prorated charge for the remaining days in the current billing period.",
        },
      ],
    },

    {
      id: "warmup-controls",
      title: "Pausing, Resuming, and Disabling Warmup",
      description:
        "CMR provides separate controls for temporary pauses and permanent removal.",
      content: [
        {
          type: "heading",
          content: "Pause warmup",
        },
        {
          type: "code",
          language: "http",
          content:
            "POST /mailboxes/warmup/toggle?mailboxId=<mailboxId>",
        },
        {
          type: "paragraph",
          content:
            "The toggle endpoint changes warmup between ACTIVE and PAUSED. Pausing stops warmup activity while keeping the warmup subscription associated with the mailbox.",
        },
        {
          type: "heading",
          content: "Resume warmup",
        },
        {
          type: "code",
          language: "http",
          content:
            "PATCH /mailboxes/warmup/status?mailboxId=<mailboxId>\nContent-Type: application/json\n\n{\n  \"status\": \"ACTIVE\"\n}",
        },
        {
          type: "paragraph",
          content:
            "The documented status endpoint can be used to set the warmup status back to ACTIVE.",
        },
        {
          type: "heading",
          content: "Permanently disable warmup",
        },
        {
          type: "code",
          language: "http",
          content:
            "DELETE /mailboxes/warmup?mailboxId=<mailboxId>",
        },
        {
          type: "paragraph",
          content:
            "Permanent removal stops warmup immediately and changes the warmup state to STOPPED. CMR states that billing stops at the next renewal cycle and no mid-period refund is issued.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Pause is reversible; disable is a lifecycle change",
          content:
            "Use the pause controls when warmup should temporarily stop. Permanently disabling warmup removes the warmup subscription and requires re-enrollment if warmup is needed again.",
        },
      ],
    },

    {
      id: "billing",
      title: "How Warmup Is Billed",
      description:
        "Warmup billing depends on when it is enabled and the mailbox's warmup state.",
      content: [
        {
          type: "heading",
          content: "At order time",
        },
        {
          type: "paragraph",
          content:
            "When warmup is enabled during mailbox ordering, CMR charges the warmup alongside the mailbox in the same transaction.",
        },
        {
          type: "code",
          language: "text",
          content:
            "Total = (mailbox count × mailbox price)\n       + (warmup count × warmup price)",
        },
        {
          type: "heading",
          content: "When added mid-period",
        },
        {
          type: "paragraph",
          content:
            "When warmup is added to an existing active mailbox, CMR applies a prorated charge based on the number of days remaining in the current billing period.",
        },
        {
          type: "code",
          language: "text",
          content:
            "Charge = warmupPrice × (daysRemaining / 30)",
        },
        {
          type: "heading",
          content: "At renewal",
        },
        {
          type: "paragraph",
          content:
            "CMR's current warmup documentation states that mailboxes with warmupStatus = ACTIVE are billed for warmup at renewal, while PAUSED mailboxes are excluded from that warmup renewal charge.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Disabling warmup does not create a refund",
          content:
            "If warmup is permanently disabled during an existing billing period, CMR does not issue a mid-period refund. Billing stops at the next renewal cycle.",
        },
      ],
    },

    {
      id: "warmup-events",
      title: "Warmup Webhook Events",
      description:
        "Use CMR's warmup events to keep your platform synchronized with mailbox warmup changes.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides webhook events for important warmup lifecycle changes. This allows your application to react to warmup changes without repeatedly polling the mailbox state.",
        },
        {
          type: "heading",
          content: "Warmup started",
        },
        {
          type: "code",
          language: "text",
          content: "mailbox.warmup.started",
        },
        {
          type: "paragraph",
          content:
            "This event is fired after warmup is enabled and the mailbox moves to ACTIVE.",
        },
        {
          type: "heading",
          content: "Warmup removed",
        },
        {
          type: "code",
          language: "text",
          content: "mailbox.warmup.removed",
        },
        {
          type: "paragraph",
          content:
            "This event is fired when warmup is permanently disabled through the DELETE warmup endpoint.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Use events for asynchronous state changes",
          content:
            "CMR's API documentation follows an event-driven model for asynchronous operations. Warmup integrations should use the documented webhook events to update internal state when warmup changes are completed.",
        },
      ],
    },

    {
      id: "what-warmup-does-not-do",
      title: "What Warmup Does Not Replace",
      description:
        "Warmup is one part of a broader email infrastructure and deliverability setup.",
      content: [
        {
          type: "paragraph",
          content:
            "Warmup focuses on gradually building mailbox sending activity and sender reputation. It does not replace the other infrastructure and configuration steps required for a functioning email platform.",
        },
        {
          type: "steps",
          items: [
            {
              id: "domain",
              title: "Domain configuration",
              description:
                "Your domain still needs the appropriate domain and DNS configuration for your sending setup.",
            },
            {
              id: "mailbox",
              title: "Mailbox provisioning",
              description:
                "Warmup operates on a mailbox. The mailbox must exist before warmup can be added to it.",
            },
            {
              id: "subscription",
              title: "Subscription management",
              description:
                "Mailbox subscriptions continue to have their own lifecycle, billing, renewal, and expiration behavior.",
            },
            {
              id: "placement",
              title: "Deliverability testing",
              description:
                "CMR also provides placement testing for checking how messages perform across supported mailbox providers.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Warmup is part of the deliverability workflow",
          content:
            "A complete sending setup involves domains, DNS, mailboxes, subscriptions, authentication, and deliverability practices. Warmup addresses the sender-reputation portion of that workflow.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common Warmup Mistakes",
      description:
        "Avoid the most common configuration and lifecycle mistakes.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-one",
              title: "Assuming warmup is enabled automatically",
              description:
                "onWarmup defaults to false when it is not explicitly provided in the mailbox order.",
            },
            {
              id: "mistake-two",
              title: "Confusing pause with permanent disable",
              description:
                "PAUSED temporarily stops warmup, while STOPPED means the warmup subscription has been permanently disabled.",
            },
            {
              id: "mistake-three",
              title: "Expecting a refund after disabling warmup",
              description:
                "CMR does not provide a mid-period refund when warmup is permanently disabled.",
            },
            {
              id: "mistake-four",
              title: "Treating warmup as a deliverability guarantee",
              description:
                "Warmup is intended to build sender reputation and reduce spam placement, but it does not guarantee inbox placement.",
            },
            {
              id: "mistake-five",
              title: "Ignoring warmup lifecycle events",
              description:
                "Use mailbox.warmup.started and mailbox.warmup.removed to keep your platform state synchronized with CMR.",
            },
          ],
        },
      ],
    },

    {
      id: "practical-workflow",
      title: "A Practical Warmup Workflow",
      description:
        "A simple lifecycle for integrating CMR warmup into your platform.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "workflow-one",
              title: "1. Provision the mailbox",
              description:
                "Create the mailbox through the normal CMR mailbox order flow.",
            },
            {
              id: "workflow-two",
              title: "2. Choose when to enable warmup",
              description:
                "Enable warmup at order time with onWarmup: true, or add it later to an ACTIVE mailbox.",
            },
            {
              id: "workflow-three",
              title: "3. Wait for enrollment",
              description:
                "Track the warmup lifecycle until the mailbox reaches ACTIVE.",
            },
            {
              id: "workflow-four",
              title: "4. Allow warmup to build sending activity",
              description:
                "CMR automatically ramps up mailbox sending activity as part of the warmup process.",
            },
            {
              id: "workflow-five",
              title: "5. Monitor the mailbox lifecycle",
              description:
                "Use the documented warmup states and webhook events to keep your application synchronized.",
            },
            {
              id: "workflow-six",
              title: "6. Control warmup when needed",
              description:
                "Pause, resume, or permanently disable warmup using the corresponding mailbox warmup endpoints.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Build around the mailbox lifecycle",
          content:
            "Warmup is managed at the mailbox level. Keeping mailbox status, warmup status, subscription state, and webhook events connected in your platform makes the overall lifecycle easier to operate.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related Guides",
      description:
        "Continue with the guides covering warmup configuration, billing, pre-warmup, and deliverability testing.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "enabling-warmup",
              title: "Enabling Warmup at Order Time vs Adding It Later",
              description:
                "Compare the two ways to enable CMR warmup and understand their billing behavior.",
              href: "/concepts/warmup-deliverability/enabling-warmup",
            },
            {
              id: "pausing-vs-disabling",
              title: "Pausing vs Permanently Disabling Warmup",
              description:
                "Understand the difference between temporarily pausing warmup and permanently removing it.",
              href: "/concepts/warmup-deliverability/pausing-vs-disabling-warmup",
            },
            {
              id: "warmup-proration",
              title: "Understanding Proration on Mid-Period Warmup Changes",
              description:
                "Learn how CMR calculates warmup charges when warmup is added during an existing billing period.",
              href: "/concepts/warmup-deliverability/warmup-proration",
            },
            {
              id: "pre-warmup",
              title: "Pre-Warmup: Buying Mailboxes That Are Already Warmed",
              description:
                "Understand CMR's separate pre-warmup product and how to order pre-warmed mailbox inventory.",
              href: "/concepts/warmup-deliverability/pre-warmup",
            },
            {
              id: "placement-test",
              title: "Running a Placement Test",
              description:
                "Learn how to run placement tests and review deliverability results.",
              href: "/concepts/warmup-deliverability/placement-test",
            },
          ],
        },
      ],
    },
  ],
};