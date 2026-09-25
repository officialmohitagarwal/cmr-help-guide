export const pausingVsDisablingWarmupArticle = {
  id: "pausing-vs-disabling-warmup",
  slug: "/concepts/warmup-deliverability/pausing-vs-disabling-warmup",
  category: {
    id: "warmup-deliverability",
    label: "Warmup and Deliverability",
    slug: "/concepts/warmup-deliverability",
  },
  title: "Pausing vs Permanently Disabling Warmup",
  description:
    "Understand the difference between pausing and permanently disabling mailbox warmup, how each operation changes the warmup status, how billing behaves, and how to resume or re-enroll warmup.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "CMR provides two different ways to stop warmup activity for a mailbox. Pausing temporarily stops warmup while keeping the warmup subscription active. Permanently disabling warmup removes the mailbox from the warmup program and changes its status to STOPPED. These actions have different billing and re-enrollment behavior, so they should not be treated as interchangeable.",

  sections: [
    {
      id: "two-actions",
      title: "Two ways to stop warmup",
      description:
        "Choose between a temporary pause and permanent removal from the warmup program.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR exposes separate APIs for pausing warmup and permanently disabling it.",
        },

        {
          type: "steps",
          items: [
            {
              id: "pause",
              title: "Pause warmup",
              description:
                "Use POST /mailboxes/warmup/toggle?mailboxId= to toggle warmup between ACTIVE and PAUSED.",
            },
            {
              id: "disable",
              title: "Permanently disable warmup",
              description:
                "Use DELETE /mailboxes/warmup?mailboxId= to permanently remove the mailbox from the warmup program and set its warmup status to STOPPED.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Pause and disable are different operations",
          content:
            "Pausing stops warmup temporarily while keeping the subscription active. Permanent disabling removes the mailbox from the warmup program and stops future warmup billing at renewal.",
        },
      ],
    },

    {
      id: "pause-warmup",
      title: "Pausing warmup",
      description:
        "Pause warmup when you want to stop warmup activity temporarily.",
      content: [
        {
          type: "paragraph",
          content:
            "The toggle endpoint switches warmup between ACTIVE and PAUSED.",
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
            "The request does not require a request body. CMR returns the new warmup status in data.status.",
        },

        {
          type: "code",
          language: "json",
          content:
            '{\n  "status": 200,\n  "message": "Warmup paused",\n  "data": {\n    "status": "PAUSED"\n  },\n  "actionId": "ACT_7a078272-0fa7-4db4-a85b-c78697dacea1"\n}',
        },

        {
          type: "steps",
          items: [
            {
              id: "pause-request",
              title: "1. Identify the mailbox",
              description:
                "Use the mailboxId of the mailbox whose warmup should be paused.",
            },
            {
              id: "pause-api",
              title: "2. Call the toggle endpoint",
              description:
                "Send POST /mailboxes/warmup/toggle with the mailboxId query parameter.",
            },
            {
              id: "pause-status",
              title: "3. Confirm PAUSED",
              description:
                "The response data.status reflects the new warmup status.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "The mailbox itself remains active",
          content:
            "Pausing warmup does not delete or disable the mailbox. It changes the warmup state while the warmup subscription remains active.",
        },
      ],
    },

    {
      id: "pause-billing",
      title: "What happens to billing when warmup is paused",
      description:
        "A paused warmup subscription remains active for billing purposes.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents PAUSED as a warmup status that remains billed at renewal in its current warmup documentation.",
        },

        {
          type: "code",
          language: "text",
          content:
            "ACTIVE\n   ↓\nPAUSED\n   ↓\nWarmup activity paused\n   ↓\nWarmup subscription remains active",
        },

        {
          type: "paragraph",
          content:
            "The warmup documentation also states that warmup can be turned on again without a new charge for that month.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Pause is not a billing cancellation",
          content:
            "Pausing warmup is a temporary operational control. It should not be treated as permanently cancelling the warmup subscription.",
        },
      ],
    },

    {
      id: "resume-warmup",
      title: "Resuming paused warmup",
      description:
        "A paused mailbox can be returned to ACTIVE warmup.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents two warmup status controls. The toggle endpoint can switch between ACTIVE and PAUSED, while the status endpoint can explicitly set the status to ACTIVE.",
        },

        {
          type: "code",
          language: "http",
          content:
            "PATCH /mailboxes/warmup/status?mailboxId=<mailboxId>",
        },

        {
          type: "code",
          language: "json",
          content:
            '{\n  "status": "ACTIVE"\n}',
        },

        {
          type: "paragraph",
          content:
            "CMR documents that resuming warmup makes warmup active again and that the warmup charge is included at the next renewal.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Use the explicit status endpoint when setting a known state",
          content:
            "If your application already knows that the mailbox should be ACTIVE, the documented PATCH status endpoint lets you explicitly set that state rather than relying on the current toggle state.",
        },
      ],
    },

    {
      id: "permanent-disable",
      title: "Permanently disabling warmup",
      description:
        "Use permanent disabling when the mailbox should no longer participate in the warmup program.",
      content: [
        {
          type: "paragraph",
          content:
            "Permanently disabling warmup uses the DELETE endpoint:",
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
            "CMR documents that this operation permanently removes the mailbox from the warmup program. Warmup activity stops immediately and the warmup status becomes STOPPED.",
        },

        {
          type: "steps",
          items: [
            {
              id: "disable-identify",
              title: "1. Identify the mailbox",
              description:
                "Confirm the mailboxId of the mailbox whose warmup subscription should be removed.",
            },
            {
              id: "disable-request",
              title: "2. Send the DELETE request",
              description:
                "Call DELETE /mailboxes/warmup with the mailboxId query parameter.",
            },
            {
              id: "disable-status",
              title: "3. Warmup becomes STOPPED",
              description:
                "The mailbox is removed from the warmup program and its warmup status changes to STOPPED.",
            },
            {
              id: "disable-event",
              title: "4. Process mailbox.warmup.removed",
              description:
                "CMR emits the mailbox.warmup.removed webhook after the warmup subscription is removed.",
            },
          ],
        },

        {
          type: "code",
          language: "json",
          content:
            '{\n  "status": 200,\n  "message": "Warmup disabled",\n  "data": null,\n  "actionId": "ACT_7a078272-0fa7-4db4-a85b-c78697dacea1"\n}',
        },
      ],
    },

    {
      id: "disable-billing",
      title: "What happens to billing when warmup is disabled",
      description:
        "Permanent disabling stops future warmup billing rather than creating a mid-period refund.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents that permanently disabling warmup stops future warmup billing at the next renewal cycle.",
        },

        {
          type: "paragraph",
          content:
            "No mid-period refund is issued when warmup is disabled during an existing billing period.",
        },

        {
          type: "code",
          language: "text",
          content:
            "DELETE warmup\n      ↓\nWarmup stops immediately\n      ↓\nStatus = STOPPED\n      ↓\nNo mid-period refund\n      ↓\nNo warmup charge at next renewal",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Disabling warmup does not refund the current period",
          content:
            "CMR explicitly documents that disabling warmup mid-period does not generate a prorated refund. Billing stops at the next renewal cycle.",
        },
      ],
    },

    {
      id: "historical-data",
      title: "What happens to warmup history",
      description:
        "Disabling warmup does not remove the historical warmup data.",
      content: [
        {
          type: "paragraph",
          content:
            "When warmup is permanently disabled, CMR retains the mailbox's historical warmup data.",
        },

        {
          type: "paragraph",
          content:
            "The mailbox no longer participates in the warmup program, but previously collected warmup information is not deleted as part of the removal operation.",
        },

        {
          type: "callout",
          variant: "info",
          title: "STOPPED does not mean historical data is deleted",
          content:
            "Permanent disabling removes the mailbox from active warmup participation. CMR documents that historical warmup data is retained.",
        },
      ],
    },

    {
      id: "pause-vs-disable",
      title: "Pause vs permanently disable",
      description:
        "The operational and billing differences are important when choosing the correct API.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "comparison-pause",
              title: "Pause — POST /mailboxes/warmup/toggle",
              description:
                "Warmup activity is paused. The warmup status becomes PAUSED, the subscription remains active, and warmup can be resumed.",
            },
            {
              id: "comparison-disable",
              title: "Disable — DELETE /mailboxes/warmup",
              description:
                "Warmup activity stops immediately, the status becomes STOPPED, the mailbox is removed from the warmup program, and future warmup billing stops at the next renewal.",
            },
            {
              id: "comparison-refund",
              title: "Current-period billing",
              description:
                "Permanent disabling does not produce a mid-period refund. Pausing also should not be treated as a refund or billing cancellation.",
            },
            {
              id: "comparison-history",
              title: "Historical data",
              description:
                "CMR documents that historical warmup data is retained after permanent removal.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Use the action that matches the intended lifecycle",
          content:
            "If warmup should resume later, pause it. If the mailbox should leave the warmup program, permanently disable it.",
        },
      ],
    },

    {
      id: "re-enable-after-stop",
      title: "Re-enabling warmup after permanent disable",
      description:
        "A mailbox that was removed from warmup can be enrolled again.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents that a mailbox can be re-enrolled in warmup after permanent disabling.",
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
            "Previously enrolled mailboxes may be re-activated without a full re-enrollment, according to the current Warmup documentation. A new prorated warmup charge applies when warmup is added again.",
        },

        {
          type: "steps",
          items: [
            {
              id: "reenable-request",
              title: "1. Call the add-warmup endpoint",
              description:
                "Use POST /mailboxes/warmup with the mailboxId.",
            },
            {
              id: "reenable-charge",
              title: "2. Account for the new warmup charge",
              description:
                "A new prorated warmup charge applies when warmup is re-enrolled.",
            },
            {
              id: "reenable-active",
              title: "3. Warmup becomes active",
              description:
                "The mailbox returns to active warmup participation after the enrollment process completes.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Re-enabling is not the same as resuming",
          content:
            "A paused mailbox can resume its existing warmup state. A STOPPED mailbox must be re-enrolled through the add-warmup flow, which carries a new prorated warmup charge.",
        },
      ],
    },

    {
      id: "webhook-events",
      title: "Webhook events for warmup changes",
      description:
        "Use warmup events when your integration needs to react to permanent warmup lifecycle changes.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents two mailbox warmup lifecycle events: mailbox.warmup.started and mailbox.warmup.removed.",
        },

        {
          type: "heading",
          content: "mailbox.warmup.removed",
        },
        {
          type: "paragraph",
          content:
            "This event is emitted when warmup is permanently disabled through DELETE /mailboxes/warmup.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "eventType": "mailbox.warmup.removed",\n  "data": {\n    "mailboxId": "4165WDY91BMKS6JD341FKQ5XVP19",\n    "email": "alice@acmecorp.com",\n    "domain": "acmecorp.com",\n    "workspaceType": "GOOGLE"\n  }\n}',
        },

        {
          type: "paragraph",
          content:
            "Pausing warmup does not emit mailbox.warmup.removed because the warmup subscription remains in place.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Removed is not the same as paused",
          content:
            "mailbox.warmup.removed indicates permanent warmup removal. A PAUSED mailbox remains enrolled and therefore does not generate this removal event.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid confusing warmup controls and their billing effects.",
      content: [
        {
          type: "heading",
          content: "Using DELETE when you only want a temporary pause",
        },
        {
          type: "paragraph",
          content:
            "DELETE permanently removes the mailbox from the warmup program and changes the status to STOPPED. Use the toggle endpoint when warmup should only be paused.",
        },

        {
          type: "heading",
          content: "Assuming PAUSED means warmup is cancelled",
        },
        {
          type: "paragraph",
          content:
            "PAUSED means warmup activity has been paused while the warmup subscription remains active.",
        },

        {
          type: "heading",
          content: "Expecting a refund after disabling warmup",
        },
        {
          type: "paragraph",
          content:
            "CMR documents no mid-period refund when warmup is permanently disabled.",
        },

        {
          type: "heading",
          content: "Expecting permanent disable to delete warmup history",
        },
        {
          type: "paragraph",
          content:
            "Historical warmup data is retained after permanent removal.",
        },

        {
          type: "heading",
          content: "Forgetting the re-enrollment charge",
        },
        {
          type: "paragraph",
          content:
            "Re-enrolling a previously stopped mailbox creates a new prorated warmup charge.",
        },

        {
          type: "heading",
          content: "Waiting for mailbox.warmup.removed after a pause",
        },
        {
          type: "paragraph",
          content:
            "The removal webhook is for permanent disabling. Pausing does not emit mailbox.warmup.removed.",
        },
      ],
    },

    {
      id: "decision-workflow",
      title: "Choosing the correct warmup action",
      description:
        "Use the intended future state to determine which API operation to call.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "temporary",
              title: "Warmup should stop temporarily",
              description:
                "Use POST /mailboxes/warmup/toggle?mailboxId= to move the warmup subscription to PAUSED.",
            },
            {
              id: "resume",
              title: "Warmup should start again",
              description:
                "Resume the paused warmup subscription by setting the warmup status back to ACTIVE.",
            },
            {
              id: "permanent",
              title: "Mailbox should leave the warmup program",
              description:
                "Use DELETE /mailboxes/warmup?mailboxId= to permanently disable warmup and move the status to STOPPED.",
            },
            {
              id: "reenroll",
              title: "Warmup is needed again after STOPPED",
              description:
                "Use POST /mailboxes/warmup?mailboxId= to re-enroll the mailbox. A new prorated charge applies.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with Warmup and Deliverability",
      description:
        "Use these guides to understand warmup enrollment, billing, and deliverability testing.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "what-warmup-does",
              title: "What Mailbox Warmup Does and Why It Matters",
              description:
                "Understand what mailbox warmup does and how it supports sender reputation and deliverability.",
              href: "/concepts/warmup-deliverability/what-warmup-does",
            },
            {
              id: "enabling-warmup",
              title: "Enabling Warmup at Order Time vs Adding It Later",
              description:
                "Learn how to enroll a mailbox in warmup during provisioning or afterward.",
              href: "/concepts/warmup-deliverability/enabling-warmup",
            },
            {
              id: "warmup-proration",
              title: "Understanding Proration on Mid-Period Warmup Changes",
              description:
                "Understand how mid-period warmup charges are calculated.",
              href: "/concepts/warmup-deliverability/warmup-proration",
            },
            {
              id: "placement-test",
              title: "Running a Placement Test",
              description:
                "Learn how to test mailbox placement across Gmail and Microsoft 365.",
              href: "/concepts/warmup-deliverability/placement-test",
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