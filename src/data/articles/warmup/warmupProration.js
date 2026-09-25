export const warmupProrationArticle = {
  id: "warmup-proration",
  slug: "/concepts/warmup-deliverability/warmup-proration",
  category: {
    id: "warmup-deliverability",
    label: "Warmup and Deliverability",
    slug: "/concepts/warmup-deliverability",
  },
  title: "Understanding Proration on Mid-Period Warmup Changes",
  description:
    "Understand how CMR calculates prorated warmup charges when warmup is added or re-enabled during an existing mailbox billing period.",
  author: "CMR Team",
  updated: "September 2026",
  introduction:
    "When warmup is added after a mailbox has already entered its current billing period, CMR does not charge the full warmup price for the entire period. Instead, the warmup charge is prorated based on the number of days remaining in the current billing period. This article explains how the calculation works, when it applies, and how it differs from renewal billing and refunds.",
  sections: [
    {
      id: "what-proration-means",
      title: "What Proration Means for Warmup",
      description:
        "Understand why a mid-period warmup change does not use the full monthly warmup price.",
      content: [
        {
          type: "paragraph",
          content:
            "Proration means that a warmup charge is adjusted according to the remaining portion of the current billing period. When warmup is added to an already active mailbox, CMR calculates a charge based on the remaining days rather than charging the full warmup price.",
        },
        {
          type: "paragraph",
          content:
            "This applies when warmup is added to an existing active mailbox during its current billing period. CMR deducts the resulting prorated amount from the Partner wallet.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The mailbox must be ACTIVE",
          content:
            "CMR's warmup documentation states that the mailbox must have ACTIVE status when warmup is added through the existing-mailbox warmup endpoint.",
        },
      ],
    },

    {
      id: "formula",
      title: "How the Prorated Charge Is Calculated",
      description:
        "Use CMR's documented formula to understand the charge for a mid-period warmup addition.",
      content: [
        {
          type: "heading",
          content: "CMR's documented formula",
        },
        {
          type: "code",
          language: "text",
          content:
            "Charge = warmupPrice × (daysRemaining / 30)",
        },
        {
          type: "paragraph",
          content:
            "The calculation uses the warmup price and the number of days remaining in the current billing period. CMR uses 30 as the denominator in the documented formula.",
        },
        {
          type: "heading",
          content: "Example",
        },
        {
          type: "paragraph",
          content:
            "Suppose the warmup price is $10 and there are 15 days remaining in the current billing period.",
        },
        {
          type: "code",
          language: "text",
          content:
            "Charge = $10 × (15 / 30)\nCharge = $5",
        },
        {
          type: "paragraph",
          content:
            "Under the documented formula, the resulting prorated warmup charge would be $5.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The example is illustrative",
          content:
            "The calculation above demonstrates CMR's documented formula. The actual charge depends on the warmup price applicable to the mailbox and the remaining days in its billing period.",
        },
      ],
    },

    {
      id: "adding-existing-mailbox",
      title: "Adding Warmup to an Existing Mailbox",
      description:
        "Understand the API flow when warmup is enabled after mailbox provisioning.",
      content: [
        {
          type: "paragraph",
          content:
            "To add warmup to an existing mailbox, use the mailbox warmup endpoint with the mailboxId.",
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
            "CMR calculates the warmup charge for the remaining days in the current billing period and deducts that amount from the Partner wallet.",
        },
        {
          type: "steps",
          items: [
            {
              id: "step-one",
              title: "Identify the mailbox",
              description:
                "Use the mailboxId of the existing mailbox you want to enroll in warmup.",
            },
            {
              id: "step-two",
              title: "Confirm the mailbox is ACTIVE",
              description:
                "The documented add-warmup flow requires the mailbox to be ACTIVE.",
            },
            {
              id: "step-three",
              title: "Add warmup",
              description:
                "Call POST /mailboxes/warmup?mailboxId=<mailboxId> to enroll the mailbox.",
            },
            {
              id: "step-four",
              title: "Apply the prorated charge",
              description:
                "CMR calculates the charge using the remaining days in the current billing period and deducts it from the wallet.",
            },
            {
              id: "step-five",
              title: "Continue through the warmup lifecycle",
              description:
                "The mailbox proceeds through the documented warmup enrollment lifecycle before warmup becomes active.",
            },
          ],
        },
      ],
    },

    {
      id: "order-time-vs-mid-period",
      title: "Order-Time Warmup vs Mid-Period Warmup",
      description:
        "The billing behavior depends on when warmup is enabled.",
      content: [
        {
          type: "heading",
          content: "Warmup enabled at order time",
        },
        {
          type: "paragraph",
          content:
            "When warmup is enabled during mailbox ordering, set onWarmup to true on the individual mailbox entry. CMR charges the warmup alongside the mailbox in the same transaction.",
        },
        {
          type: "code",
          language: "json",
          content: `{
  "acmecorp.com": [
    {
      "username": "alice",
      "onWarmup": true
    }
  ]
}`,
        },
        {
          type: "heading",
          content: "Warmup added later",
        },
        {
          type: "paragraph",
          content:
            "When warmup is added to an existing active mailbox after the billing period has already started, CMR applies the documented prorated calculation instead of charging the full warmup amount for the entire current period.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Timing affects the initial charge",
          content:
            "The key difference is when warmup is enabled. Order-time warmup is charged with the mailbox order, while mid-period enrollment uses the remaining-days proration formula.",
        },
      ],
    },

    {
      id: "reenabling-after-stop",
      title: "Proration When Warmup Is Re-Enabled",
      description:
        "Understand how proration applies when a previously disabled warmup subscription is enabled again.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR allows a mailbox that was previously removed from warmup to be enrolled again using the warmup endpoint.",
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
            "The warmup documentation states that previously enrolled mailboxes may reactivate without a full re-enrollment. A new prorated warmup charge applies when warmup is re-enabled.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Re-enabling is not a refund",
          content:
            "Disabling warmup during a billing period does not generate a mid-period refund. If warmup is later enabled again, CMR applies a new prorated warmup charge according to the documented flow.",
        },
      ],
    },

    {
      id: "pause-vs-proration",
      title: "Pausing Warmup Is Different",
      description:
        "A pause is not the same billing event as adding or re-enabling warmup.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides a separate pause flow for temporarily stopping warmup. The toggle endpoint changes warmup between ACTIVE and PAUSED.",
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
            "A paused warmup subscription can be resumed without treating the action as a new enrollment. CMR documents that resuming warmup through the status endpoint resumes the warmup immediately and is included in billing at the next renewal.",
        },
        {
          type: "code",
          language: "http",
          content:
            "PATCH /mailboxes/warmup/status?mailboxId=<mailboxId>\nContent-Type: application/json\n\n{\n  \"status\": \"ACTIVE\"\n}",
        },
        {
          type: "callout",
          variant: "info",
          title: "Pause and permanent disable are different",
          content:
            "Pausing changes the warmup status to PAUSED. Permanently disabling warmup removes the warmup subscription and changes the status to STOPPED. The billing behavior for these two actions should not be treated as identical.",
        },
      ],
    },

    {
      id: "no-refund",
      title: "Why Disabling Warmup Does Not Create a Proration Refund",
      description:
        "Understand how CMR handles the unused portion of a warmup billing period.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR explicitly states that permanently disabling warmup during a billing period does not result in a mid-period refund.",
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
            "The warmup activity stops immediately, while billing stops at the next renewal cycle. The unused portion of the current period is not refunded.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not calculate a refund from the remaining days",
          content:
            "The remaining-days formula is documented for adding warmup mid-period. It should not be used to calculate a refund when warmup is permanently disabled.",
        },
      ],
    },

    {
      id: "renewal-billing",
      title: "What Happens at Renewal",
      description:
        "Mid-period proration applies to the initial warmup change; renewal billing follows a separate rule.",
      content: [
        {
          type: "paragraph",
          content:
            "The prorated charge applies to the remaining portion of the current billing period. At renewal, CMR uses the renewal billing rules for active warmup subscriptions.",
        },
        {
          type: "code",
          language: "text",
          content:
            "Renewal total = (active mailboxes × mailboxPrice)\n               + (active warmup mailboxes × warmupPrice)",
        },
        {
          type: "paragraph",
          content:
            "The current CMR warmup documentation states that only mailboxes with warmupStatus = ACTIVE are billed for warmup at renewal. PAUSED mailboxes are excluded from that warmup renewal charge.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Proration does not continue forever",
          content:
            "The prorated amount is the mid-period charge for the current billing period. It does not replace the normal renewal calculation for subsequent billing cycles.",
        },
      ],
    },

    {
      id: "wallet-and-failure",
      title: "Wallet Balance and Charge Failures",
      description:
        "The prorated warmup charge is deducted from the Partner wallet.",
      content: [
        {
          type: "paragraph",
          content:
            "When warmup is added to an existing mailbox, the calculated prorated charge is deducted from the Partner wallet. The wallet therefore needs sufficient balance for the operation to complete.",
        },
        {
          type: "paragraph",
          content:
            "If the wallet cannot cover the applicable charge, the warmup operation may fail rather than creating an unpaid warmup subscription.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Check wallet balance before automated enrollment",
          content:
            "If your platform automatically adds warmup to existing mailboxes, account for the prorated wallet charge before initiating the operation.",
        },
      ],
    },

    {
      id: "practical-workflow",
      title: "A Practical Mid-Period Warmup Workflow",
      description:
        "Use this sequence when adding warmup after a mailbox is already active.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "workflow-one",
              title: "1. Identify the mailbox",
              description:
                "Confirm the mailboxId and verify that the mailbox is ACTIVE.",
            },
            {
              id: "workflow-two",
              title: "2. Determine the billing context",
              description:
                "Understand that the mailbox is already inside an existing billing period, so the initial warmup charge will be prorated.",
            },
            {
              id: "workflow-three",
              title: "3. Check wallet availability",
              description:
                "Make sure the Partner wallet can cover the applicable warmup charge.",
            },
            {
              id: "workflow-four",
              title: "4. Add warmup",
              description:
                "Call POST /mailboxes/warmup?mailboxId=<mailboxId>.",
            },
            {
              id: "workflow-five",
              title: "5. Process the warmup lifecycle",
              description:
                "Handle the warmup enrollment lifecycle and the resulting warmup status.",
            },
            {
              id: "workflow-six",
              title: "6. Account for renewal separately",
              description:
                "At the next renewal, use the normal warmup renewal billing rule rather than the original prorated calculation.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Keep the two billing events separate",
          content:
            "The initial mid-period enrollment charge and the later renewal charge represent different billing events. The first uses the remaining-days proration formula; the renewal uses the normal warmup renewal price.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common Proration Mistakes",
      description:
        "Avoid the most common misunderstandings around mid-period warmup billing.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-one",
              title: "Charging the full warmup price mid-period",
              description:
                "The documented mid-period flow uses the remaining-days proration formula rather than the full monthly warmup price.",
            },
            {
              id: "mistake-two",
              title: "Using the proration formula for refunds",
              description:
                "CMR does not issue a mid-period refund when warmup is permanently disabled.",
            },
            {
              id: "mistake-three",
              title: "Ignoring the 30-day denominator",
              description:
                "CMR's documented formula is warmupPrice × (daysRemaining / 30).",
            },
            {
              id: "mistake-four",
              title: "Confusing pause with permanent disable",
              description:
                "Pausing changes warmup to PAUSED, while permanent removal changes the warmup status to STOPPED.",
            },
            {
              id: "mistake-five",
              title: "Forgetting wallet balance",
              description:
                "The prorated amount is deducted from the Partner wallet, so insufficient balance can prevent the operation.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related Guides",
      description:
        "Continue with the guides covering warmup enrollment, lifecycle changes, and deliverability testing.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "what-warmup-does",
              title: "What Mailbox Warmup Does and Why It Matters",
              description:
                "Understand what warmup does and how it supports mailbox sending reputation and deliverability.",
              href: "/concepts/warmup-deliverability/what-warmup-does",
            },
            {
              id: "enabling-warmup",
              title: "Enabling Warmup at Order Time vs Adding It Later",
              description:
                "Compare enabling warmup during mailbox ordering with adding it to an existing active mailbox.",
              href: "/concepts/warmup-deliverability/enabling-warmup",
            },
            {
              id: "pausing-vs-disabling",
              title: "Pausing vs Permanently Disabling Warmup",
              description:
                "Understand the difference between pausing warmup and permanently removing the warmup subscription.",
              href: "/concepts/warmup-deliverability/pausing-vs-disabling-warmup",
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