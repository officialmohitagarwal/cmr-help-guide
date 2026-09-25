export const cancelVsPauseArticle = {
  id: "cancel-vs-pause",

  slug: "/concepts/billing-wallet/cancel-vs-pause",

  category: {
    id: "billing-wallet",
    label: "Billing and Wallet",
    slug: "/concepts/billing-wallet",
  },

  title: "Cancel vs Pause: Choosing the Right Action",

  description:
    "Understand the difference between cancelling a subscription, disabling auto-renew, and pausing mailbox warmup, including their effects on billing, mailbox status, and future renewals.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "CMR provides different controls for stopping a subscription from continuing as-is. Cancelling a subscription immediately expires the mailbox, while disabling auto-renew allows the current subscription period to continue. Pausing warmup is different again: it stops warmup activity without changing the mailbox subscription itself.",

  sections: [
    {
      id: "three-actions",
      title: "There are three different actions",

      description:
        "Choose the action based on what you actually want to stop.",

      content: [
        {
          type: "paragraph",
          content:
            "The CMR documentation distinguishes three separate actions: cancel the subscription, disable auto-renew, and pause warmup.",
        },

        {
          type: "steps",
          items: [
            {
              id: "action-cancel",
              title: "Cancel the subscription",
              description:
                "Immediately moves the mailbox to EXPIRED. The action is permanent and there is no prorated refund.",
            },
            {
              id: "action-autorenew",
              title: "Disable auto-renew",
              description:
                "Allows the subscription to continue through the current period instead of renewing automatically.",
            },
            {
              id: "action-warmup",
              title: "Pause warmup",
              description:
                "Stops warmup activity while leaving the mailbox subscription itself active.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "These actions are not interchangeable",
          content:
            "Cancelling a subscription, disabling auto-renew, and pausing warmup affect different parts of the mailbox lifecycle.",
        },
      ],
    },

    {
      id: "cancel-subscription",
      title: "Cancel the subscription",

      description:
        "Cancellation is the permanent action that immediately ends the subscription.",

      content: [
        {
          type: "paragraph",
          content:
            "The documented cancellation endpoint is POST /subscriptions/cancel.",
        },

        {
          type: "code",
          language: "http",
          code: "POST /subscriptions/cancel",
        },

        {
          type: "paragraph",
          content:
            "According to the documentation, cancelling a subscription immediately moves the mailbox to EXPIRED.",
        },

        {
          type: "steps",
          items: [
            {
              id: "cancel-immediate",
              title: "Immediate effect",
              description:
                "The mailbox moves to EXPIRED immediately rather than waiting for the current billing period to finish.",
            },
            {
              id: "cancel-permanent",
              title: "Permanent action",
              description:
                "The documentation describes cancellation as immediate and permanent.",
            },
            {
              id: "cancel-refund",
              title: "No prorated refund",
              description:
                "The documented cancellation behavior does not provide a prorated refund for the remaining subscription period.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not use cancellation as a pause mechanism",
          content:
            "If the intention is only to stop future renewals while allowing the current subscription to continue, do not use POST /subscriptions/cancel.",
        },
      ],
    },

    {
      id: "disable-auto-renew",
      title: "Disable auto-renew",

      description:
        "Disabling auto-renew is different from cancelling the subscription.",

      content: [
        {
          type: "paragraph",
          content:
            "The documented endpoint for controlling automatic renewal is POST /subscriptions/toggle-autorenewal.",
        },

        {
          type: "code",
          language: "http",
          code: "POST /subscriptions/toggle-autorenewal",
        },

        {
          type: "paragraph",
          content:
            "When auto-renew is disabled, the subscription continues through its current period instead of being cancelled immediately.",
        },

        {
          type: "steps",
          items: [
            {
              id: "autorenew-current-period",
              title: "The current period continues",
              description:
                "Disabling auto-renew does not immediately expire the mailbox.",
            },
            {
              id: "autorenew-end",
              title: "The subscription reaches its period end",
              description:
                "The subscription continues until the current billing period ends.",
            },
            {
              id: "autorenew-past-due",
              title: "The subscription can enter PAST_DUE",
              description:
                "After the period ends, the documented lifecycle can move the subscription through PAST_DUE.",
            },
            {
              id: "autorenew-expired",
              title: "The subscription can become EXPIRED",
              description:
                "If the renewal is not resolved during the applicable 7-day recovery period, the subscription can become EXPIRED.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Auto-renew is the non-immediate option",
          content:
            "If the goal is to let the customer keep using the mailbox until the current subscription period ends and prevent another automatic renewal, disabling auto-renew is the documented mechanism.",
        },
      ],
    },

    {
      id: "pause-warmup",
      title: "Pause warmup",

      description:
        "Pausing warmup affects sending activity, not the mailbox subscription itself.",

      content: [
        {
          type: "paragraph",
          content:
            "Warmup can be paused independently of the mailbox subscription. The documented toggle endpoint is POST /mailboxes/warmup/toggle?mailboxId=.",
        },

        {
          type: "code",
          language: "http",
          code:
            "POST /mailboxes/warmup/toggle?mailboxId=<mailboxId>",
        },

        {
          type: "paragraph",
          content:
            "Pausing warmup stops warmup sending activity immediately, but the mailbox subscription remains active and continues billing.",
        },

        {
          type: "steps",
          items: [
            {
              id: "pause-stop",
              title: "Warmup stops",
              description:
                "Warmup sending activity stops immediately.",
            },
            {
              id: "pause-subscription",
              title: "The mailbox subscription remains active",
              description:
                "Pausing warmup does not cancel or pause the underlying mailbox subscription.",
            },
            {
              id: "pause-billing",
              title: "The subscription keeps billing",
              description:
                "The mailbox subscription continues to incur its normal subscription charges.",
            },
            {
              id: "pause-resume",
              title: "Warmup can be resumed",
              description:
                "The documented warmup controls allow warmup to be resumed later.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Pause warmup is not the same as pausing the mailbox",
          content:
            "Pausing warmup only affects warmup activity. It does not stop the mailbox subscription or its subscription billing.",
        },
      ],
    },

    {
      id: "comparison",
      title: "How the three actions differ",

      description:
        "The effect depends on which part of the mailbox lifecycle you want to change.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "compare-cancel",
              title: "Cancel",
              description:
                "Endpoint: POST /subscriptions/cancel. The mailbox moves to EXPIRED immediately. The action is permanent and there is no prorated refund.",
            },
            {
              id: "compare-autorenew",
              title: "Disable auto-renew",
              description:
                "Endpoint: POST /subscriptions/toggle-autorenewal. The current subscription period continues, after which the subscription can enter PAST_DUE and eventually EXPIRED if not resolved.",
            },
            {
              id: "compare-warmup",
              title: "Pause warmup",
              description:
                "Endpoint: POST /mailboxes/warmup/toggle?mailboxId=. Warmup sending stops, but the mailbox subscription remains active and continues billing.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Start with the intended outcome",
          content:
            "Before calling an endpoint, determine whether you want to end the mailbox immediately, stop future subscription renewal, or only stop warmup activity.",
        },
      ],
    },

    {
      id: "when-to-cancel",
      title: "When should you cancel?",

      description:
        "Cancellation is appropriate when the mailbox subscription should end immediately.",

      content: [
        {
          type: "paragraph",
          content:
            "Use the cancellation flow when the intention is to permanently end the subscription rather than simply prevent its next renewal.",
        },

        {
          type: "steps",
          items: [
            {
              id: "cancel-intent",
              title: "The subscription should end now",
              description:
                "Cancellation immediately moves the mailbox to EXPIRED.",
            },
            {
              id: "cancel-no-use",
              title: "The mailbox should no longer remain active",
              description:
                "Use cancellation when continued mailbox access is not required.",
            },
            {
              id: "cancel-understand",
              title: "The permanent effect is understood",
              description:
                "Make sure the customer understands that cancellation is not simply a temporary pause.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Cancellation cannot be treated as a temporary pause",
          content:
            "The source identifies using cancellation to pause renewals as a common mistake.",
        },
      ],
    },

    {
      id: "when-to-disable-autorenew",
      title: "When should you disable auto-renew?",

      description:
        "Disable auto-renew when the current subscription period should continue but another renewal should not happen automatically.",

      content: [
        {
          type: "paragraph",
          content:
            "Disabling auto-renew is the documented control when the subscription should remain available through its current period while preventing an automatic renewal.",
        },

        {
          type: "steps",
          items: [
            {
              id: "autorenew-continue",
              title: "Keep the current subscription active",
              description:
                "The current subscription period continues instead of ending immediately.",
            },
            {
              id: "autorenew-stop",
              title: "Prevent automatic continuation",
              description:
                "Auto-renew is disabled so the subscription does not automatically continue into another billing period.",
            },
            {
              id: "autorenew-monitor",
              title: "Monitor the subscription state",
              description:
                "When the current period ends, follow the documented PAST_DUE and EXPIRED lifecycle if the subscription is not renewed.",
            },
          ],
        },
      ],
    },

    {
      id: "when-to-pause-warmup",
      title: "When should you pause warmup?",

      description:
        "Pause warmup when the mailbox should remain active but warmup sending should stop.",

      content: [
        {
          type: "paragraph",
          content:
            "Warmup is an independent feature of the mailbox. If the customer wants to stop warmup activity without ending the mailbox subscription, use the warmup toggle rather than cancelling or disabling auto-renew.",
        },

        {
          type: "steps",
          items: [
            {
              id: "warmup-stop",
              title: "Stop warmup activity",
              description:
                "Warmup sending stops immediately.",
            },
            {
              id: "warmup-keep",
              title: "Keep the mailbox subscription",
              description:
                "The mailbox subscription remains active.",
            },
            {
              id: "warmup-billing",
              title: "Understand the billing effect",
              description:
                "The mailbox subscription continues billing while warmup activity is paused.",
            },
          ],
        },
      ],
    },

    {
      id: "warmup-pause-vs-disable",
      title: "Pause warmup vs permanently disable warmup",

      description:
        "The warmup documentation also distinguishes a temporary pause from permanently disabling warmup.",

      content: [
        {
          type: "paragraph",
          content:
            "Pausing warmup is not the same as permanently disabling it. The warmup documentation provides separate controls for toggling the warmup state and deleting warmup from the mailbox.",
        },

        {
          type: "steps",
          items: [
            {
              id: "warmup-pause-action",
              title: "Pause",
              description:
                "POST /mailboxes/warmup/toggle?mailboxId= stops warmup immediately while leaving the mailbox subscription active.",
            },
            {
              id: "warmup-resume-action",
              title: "Resume",
              description:
                "PATCH /mailboxes/warmup/status?mailboxId= with status ACTIVE resumes warmup immediately.",
            },
            {
              id: "warmup-delete-action",
              title: "Disable permanently",
              description:
                "DELETE /mailboxes/warmup?mailboxId= permanently disables warmup for the mailbox.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Permanent disable has different billing behavior",
          content:
            "The documented permanent-disable flow stops future warmup billing at the next renewal and does not provide a mid-period refund.",
        },
      ],
    },

    {
      id: "billing-effects",
      title: "How these actions affect billing",

      description:
        "The billing outcome is different for subscription cancellation, auto-renew changes, and warmup controls.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "billing-cancel",
              title: "Subscription cancellation",
              description:
                "Cancellation is immediate and permanent, with no prorated refund.",
            },
            {
              id: "billing-autorenew",
              title: "Disabling auto-renew",
              description:
                "The current subscription period continues. The subscription does not immediately stop billing simply because auto-renew was disabled.",
            },
            {
              id: "billing-pause",
              title: "Pausing warmup",
              description:
                "The mailbox subscription continues billing while warmup activity is paused.",
            },
            {
              id: "billing-disable-warmup",
              title: "Permanently disabling warmup",
              description:
                "Future warmup billing stops at the next renewal, with no mid-period refund for the current cycle.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Stopping future billing is not the same as receiving a refund",
          content:
            "The documented billing behavior describes charges stopping going forward. It does not document a mechanism for returning the current period's unused amount to the Partner wallet.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes to avoid",

      description:
        "Most mistakes happen when an action is selected without first identifying the intended outcome.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-cancel-pause",
              title: "Using cancel to pause renewals",
              description:
                "POST /subscriptions/cancel immediately expires the mailbox. Use the auto-renew control when the intention is to let the current period continue.",
            },
            {
              id: "mistake-pause-subscription",
              title: "Assuming paused warmup pauses the mailbox",
              description:
                "Pausing warmup only stops warmup activity. The mailbox subscription remains active and continues billing.",
            },
            {
              id: "mistake-refund",
              title: "Expecting a prorated cancellation refund",
              description:
                "The documented cancellation behavior explicitly states that there are no prorated refunds.",
            },
            {
              id: "mistake-warmup-refund",
              title: "Expecting a warmup refund after disabling it",
              description:
                "The documented permanent warmup-disable behavior stops future billing at the next renewal but does not refund the current period.",
            },
            {
              id: "mistake-confuse-warmup",
              title: "Confusing warmup with the mailbox subscription",
              description:
                "Warmup has its own controls and lifecycle. Changing warmup does not automatically cancel the mailbox subscription.",
            },
          ],
        },
      ],
    },

    {
      id: "decision-flow",
      title: "Choosing the correct action",

      description:
        "Start with what you want to happen to the mailbox.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "decision-end",
              title: "End the mailbox subscription immediately",
              description:
                "Use POST /subscriptions/cancel. The mailbox moves to EXPIRED immediately and the cancellation is permanent.",
            },
            {
              id: "decision-renewal",
              title: "Keep the mailbox until the current period ends",
              description:
                "Disable auto-renew using POST /subscriptions/toggle-autorenewal.",
            },
            {
              id: "decision-warmup",
              title: "Stop only warmup activity",
              description:
                "Pause warmup using POST /mailboxes/warmup/toggle?mailboxId=. The mailbox subscription remains active.",
            },
            {
              id: "decision-permanent-warmup",
              title: "Permanently remove warmup",
              description:
                "Use DELETE /mailboxes/warmup?mailboxId=. Future warmup billing stops at the next renewal and there is no mid-period refund.",
            },
          ],
        },
      ],
    },

    {
      id: "implementation-flow",
      title: "Implementation flow",

      description:
        "Your platform should make the intended outcome clear before performing any of these actions.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "implementation-intent",
              title: "1. Identify the customer's intent",
              description:
                "Determine whether the customer wants to end the subscription, prevent future renewal, pause warmup, or permanently disable warmup.",
            },
            {
              id: "implementation-confirm",
              title: "2. Explain the consequence",
              description:
                "For cancellation, clearly communicate that the action is immediate and permanent with no prorated refund.",
            },
            {
              id: "implementation-endpoint",
              title: "3. Use the matching endpoint",
              description:
                "Call only the endpoint corresponding to the requested action.",
            },
            {
              id: "implementation-state",
              title: "4. Update your platform state",
              description:
                "Reflect the resulting subscription or warmup state in your customer-facing platform.",
            },
            {
              id: "implementation-billing",
              title: "5. Display the billing effect",
              description:
                "Make clear whether billing stops immediately, continues through the current period, or changes only at the next renewal.",
            },
          ],
        },
      ],
    },

    {
      id: "important-notes",
      title: "Important notes",

      description:
        "Keep these documented behaviors in mind when implementing cancellation and pause controls.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "note-cancel",
              title: "Cancellation is immediate and permanent",
              description:
                "POST /subscriptions/cancel moves the mailbox to EXPIRED immediately.",
            },
            {
              id: "note-no-refund",
              title: "Cancellation has no prorated refund",
              description:
                "The documented cancellation behavior explicitly states no prorated refunds.",
            },
            {
              id: "note-autorenew",
              title: "Disabling auto-renew does not immediately expire the mailbox",
              description:
                "The current subscription period continues after auto-renew is disabled.",
            },
            {
              id: "note-pastdue",
              title: "Auto-renew changes can lead to PAST_DUE",
              description:
                "After the current period ends, the subscription can enter PAST_DUE and eventually EXPIRED if not resolved.",
            },
            {
              id: "note-warmup",
              title: "Warmup can be paused independently",
              description:
                "Pausing warmup stops warmup activity without cancelling the mailbox subscription.",
            },
            {
              id: "note-warmup-billing",
              title: "The mailbox subscription keeps billing while warmup is paused",
              description:
                "Warmup pause does not stop the underlying mailbox subscription.",
            },
            {
              id: "note-disable",
              title: "Permanent warmup disable stops future billing",
              description:
                "DELETE /mailboxes/warmup?mailboxId= stops future warmup billing at the next renewal and does not provide a mid-period refund.",
            },
          ],
        },
      ],
    },

    {
      id: "common-scenarios",
      title: "Common scenarios",

      description:
        "These examples show which control matches common customer requests.",

      content: [
        {
          type: "heading",
          content: "I don't want this mailbox to renew next month",
        },

        {
          type: "paragraph",
          content:
            "Disable auto-renew rather than cancelling the subscription. The current subscription period can continue while the next automatic renewal is prevented.",
        },

        {
          type: "heading",
          content: "I want to stop using this mailbox immediately",
        },

        {
          type: "paragraph",
          content:
            "Use the subscription cancellation flow. The documented behavior is immediate and permanent, and there is no prorated refund.",
        },

        {
          type: "heading",
          content: "I want to stop warmup but keep the mailbox",
        },

        {
          type: "paragraph",
          content:
            "Pause warmup using the warmup toggle. The mailbox subscription remains active and continues billing.",
        },

        {
          type: "heading",
          content: "I want to permanently remove warmup",
        },

        {
          type: "paragraph",
          content:
            "Use DELETE /mailboxes/warmup?mailboxId=. Future warmup billing stops at the next renewal, but there is no mid-period refund.",
        },

        {
          type: "heading",
          content: "Can I cancel and then resume later?",
        },

        {
          type: "paragraph",
          content:
            "The documentation describes cancellation as permanent. If the intention is to temporarily stop future renewal, disabling auto-renew is the separate documented control.",
        },

        {
          type: "heading",
          content: "Does pausing warmup stop the mailbox subscription charge?",
        },

        {
          type: "paragraph",
          content:
            "No. The mailbox subscription remains active and continues billing while warmup is paused.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",

      description:
        "Continue with the billing and subscription guides that explain the surrounding lifecycle.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "subscription-past-due",
              title: "What Happens When a Subscription Goes PAST_DUE",
              description:
                "Understand failed renewals, the 7-day grace period, and subscription recovery.",
              href: "/concepts/billing-wallet/subscription-past-due",
            },
            {
              id: "mailbox-pricing",
              title: "Mailbox Pricing Explained",
              description:
                "Understand mailbox subscription pricing, warmup billing, proration, and the 12-month pricing transition.",
              href: "/concepts/billing-wallet/mailbox-pricing",
            },
            {
              id: "reset-pricing",
              title: "Resetting Long-Running Subscription Pricing",
              description:
                "Understand the documented subscription recreation flow for starting a new pricing cycle.",
              href: "/concepts/billing-wallet/reset-subscription-pricing",
            },
            {
              id: "wallet-balance",
              title: "How Wallet Balance & Charges Work",
              description:
                "Understand how subscription and warmup charges are deducted from the Partner wallet.",
              href: "/concepts/billing-wallet/wallet-balance-charges",
            },
          ],
        },
      ],
    },
  ],
};