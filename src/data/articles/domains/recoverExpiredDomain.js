export const recoverExpiredDomainArticle = {
  id: "recover-expired-domain",

  slug: "/concepts/domains/recover-expired-domain",

  category: {
    id: "domains",
    label: "Domains",
    slug: "/concepts/domains",
  },

  title: "Recovering an Expired Domain (7-Day Grace Window)",

  description:
    "Understand what domain expiry means, what a grace period is, how the 7-day recovery window works, and what you should do when a domain enters GRACE_PERIOD.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "A domain does not immediately become unrecoverable when it reaches its registrar expiry date. In CMR, a domain can enter a 7-day GRACE_PERIOD during which it can still be renewed. Understanding the difference between expiry, the grace period, and the final EXPIRED state is important because the available recovery options change as the domain moves through its lifecycle.",

  sections: [
    {
      id: "what-does-domain-expiry-mean",
      title: "What does domain expiry mean?",

      description:
        "Understand what happens when a domain reaches the end of its current registration period.",

      content: [
        {
          type: "paragraph",
          content:
            "When a domain is registered, its registration is valid for a defined period. The domain has an expiry date that marks the end of that registration period unless the domain is renewed.",
        },

        {
          type: "paragraph",
          content:
            "Reaching the expiry date does not necessarily mean that the domain is immediately and permanently lost. CMR provides a documented 7-day recovery window after the registrar expiry date.",
        },

        {
          type: "heading",
          content: "Expiry is a point in the domain lifecycle",
        },

        {
          type: "paragraph",
          content:
            "The expiry date should be treated as an important lifecycle boundary. If the domain has not been successfully renewed by that point, CMR can move the domain into GRACE_PERIOD.",
        },

        {
          type: "steps",
          items: [
            {
              id: "expiry-active",
              title: "Before expiry",
              description:
                "The domain remains in its normal active lifecycle and can be renewed before its expiry date.",
            },
            {
              id: "expiry-reached",
              title: "Expiry date is reached",
              description:
                "The domain reaches the registrar expiry point.",
            },
            {
              id: "expiry-grace",
              title: "GRACE_PERIOD",
              description:
                "The domain enters the documented 7-day recovery window.",
            },
            {
              id: "expiry-expired",
              title: "EXPIRED",
              description:
                "If the domain is not successfully renewed during the recovery window, it moves to EXPIRED.",
            },
          ],
        },
      ],
    },

    {
      id: "what-is-grace-period",
      title: "What is a grace period?",

      description:
        "The grace period is the limited window during which an expired domain can still be recovered through renewal.",

      content: [
        {
          type: "paragraph",
          content:
            "A grace period is a limited amount of time after a domain reaches its registrar expiry date during which the domain can still be renewed.",
        },

        {
          type: "paragraph",
          content:
            "In CMR, the domain.grace_period event indicates that a domain has reached its registrar expiry date but remains renewable during a 7-day recovery window.",
        },

        {
          type: "heading",
          content: "Why is the grace period important?",
        },

        {
          type: "paragraph",
          content:
            "The grace period is the last normal recovery opportunity provided through the CMR domain renewal flow. Once the grace period closes, the domain reaches EXPIRED status and the normal CMR API renewal flow can no longer recover it.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "GRACE_PERIOD does not mean the domain is permanently lost",
          content:
            "A domain in GRACE_PERIOD is still recoverable through the documented renewal flow. The important point is that the recovery window is limited, so the domain should be renewed as soon as possible.",
        },
      ],
    },

    {
      id: "seven-day-window",
      title: "How the 7-day grace window works",

      description:
        "The recovery period begins when the registrar expiry point is reached and lasts for the documented 7-day window.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR documents the domain grace period as 7 days after the registrar expiry date. The grace period is calculated from the recorded expiry timestamp rather than simply from the date displayed on a calendar.",
        },

        {
          type: "heading",
          content: "The lifecycle looks like this",
        },

        {
          type: "steps",
          items: [
            {
              id: "window-1",
              title: "Domain is ACTIVE",
              description:
                "The registration is currently valid.",
            },
            {
              id: "window-2",
              title: "Expiry timestamp is reached",
              description:
                "The current domain registration reaches its registrar expiry point.",
            },
            {
              id: "window-3",
              title: "Domain enters GRACE_PERIOD",
              description:
                "CMR identifies the domain as being within its 7-day recovery window.",
            },
            {
              id: "window-4",
              title: "Renewal is completed",
              description:
                "If the domain is successfully renewed during the grace window, the domain can return to an active state.",
            },
            {
              id: "window-5",
              title: "Grace period closes",
              description:
                "If successful renewal does not occur during the 7-day window, the domain transitions to EXPIRED.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not wait until the last day",
          content:
            "The grace period is a recovery window, not additional time that should be treated as normal operating time. If a domain enters GRACE_PERIOD, begin the recovery process immediately.",
        },
      ],
    },

    {
      id: "example-grace-period",
      title: "Example: A domain entering the grace period",

      description:
        "A simple example makes the relationship between expiry and the 7-day recovery window easier to understand.",

      content: [
        {
          type: "paragraph",
          content:
            "Imagine that a domain has a registrar expiry timestamp of March 8 at 23:59:59 UTC and has not been successfully renewed before that point.",
        },

        {
          type: "steps",
          items: [
            {
              id: "example-1",
              title: "March 8 — expiry is reached",
              description:
                "The domain reaches its registrar expiry timestamp.",
            },
            {
              id: "example-2",
              title: "GRACE_PERIOD begins",
              description:
                "The domain enters the documented recovery window.",
            },
            {
              id: "example-3",
              title: "Next 7 days — recovery window",
              description:
                "The domain can still be renewed during this period.",
            },
            {
              id: "example-4",
              title: "Grace window closes",
              description:
                "If the renewal has not successfully completed within the documented window, the domain becomes EXPIRED.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "The exact timestamps returned for the domain should be used when determining the expiry and recovery window. Do not rely only on an approximate calendar calculation.",
        },
      ],
    },

    {
      id: "how-to-identify-grace-period",
      title: "How do I know that a domain is in the grace period?",

      description:
        "Use the domain's current status and lifecycle information to determine whether recovery is still possible.",

      content: [
        {
          type: "paragraph",
          content:
            "The clearest indication is that the domain has entered GRACE_PERIOD. CMR also exposes domain lifecycle information such as the domain's status, registration date, and expiry date.",
        },

        {
          type: "heading",
          content: "Information to check",
        },

        {
          type: "steps",
          items: [
            {
              id: "identify-status",
              title: "Current status",
              description:
                "Check whether the domain is currently in GRACE_PERIOD.",
            },
            {
              id: "identify-expiry",
              title: "Expiry timestamp",
              description:
                "Review the recorded expiry date and time.",
            },
            {
              id: "identify-events",
              title: "Domain events",
              description:
                "Review the domain lifecycle event that indicates the domain entered its grace period.",
            },
            {
              id: "identify-renewal",
              title: "Renewal eligibility",
              description:
                "Confirm that the domain remains within the documented recovery window.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Use the domain's actual status",
          content:
            "Do not assume a domain is recoverable simply because it expired recently. Confirm that the domain is still in the documented GRACE_PERIOD state.",
        },
      ],
    },

    {
      id: "recover-domain",
      title: "How to recover a domain during the grace period",

      description:
        "Once a domain enters GRACE_PERIOD, renewal should be treated as the immediate priority.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain in GRACE_PERIOD can still be renewed through the documented CMR domain renewal flow. The goal is to complete the renewal before the 7-day recovery window closes.",
        },

        {
          type: "heading",
          content: "Recovery process",
        },

        {
          type: "steps",
          items: [
            {
              id: "recover-1",
              title: "Confirm the domain",
              description:
                "Verify that you are working with the correct domain and customer account.",
            },
            {
              id: "recover-2",
              title: "Confirm GRACE_PERIOD status",
              description:
                "Verify that the domain is still within the recoverable grace period.",
            },
            {
              id: "recover-3",
              title: "Check wallet balance",
              description:
                "Make sure sufficient wallet balance is available for the renewal.",
            },
            {
              id: "recover-4",
              title: "Submit the renewal",
              description:
                "Initiate the domain renewal through the CMR renewal flow.",
            },
            {
              id: "recover-5",
              title: "Wait for processing",
              description:
                "The renewal request is processed asynchronously. A successful request response does not necessarily mean the registrar renewal has already completed.",
            },
            {
              id: "recover-6",
              title: "Confirm the final result",
              description:
                "Verify the final renewal result or relevant domain event before treating the domain as recovered.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Renewal is asynchronous",
          content:
            "The renewal request can be accepted or queued before the final registrar renewal result is available. Use the final result or relevant webhook event to confirm that the renewal completed successfully.",
        },
      ],
    },

    {
      id: "renewal-response-vs-completion",
      title: "A successful renewal request is not the same as completed renewal",

      description:
        "Understanding asynchronous processing prevents you from assuming that a queued renewal has already restored the domain.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR's domain renewal flow is asynchronous. This means that the API can accept the renewal request and begin processing it before the final registrar outcome is known.",
        },

        {
          type: "heading",
          content: "Think of the process in two stages",
        },

        {
          type: "steps",
          items: [
            {
              id: "renew-request",
              title: "Renewal request accepted",
              description:
                "CMR accepts or queues the renewal request for processing.",
            },
            {
              id: "renew-result",
              title: "Renewal result completed",
              description:
                "The registrar processing completes and CMR reports the final result.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "Therefore, a successful HTTP response to the renewal request should not be treated as proof that the domain has already returned to its active state.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Verify before assuming recovery",
          content:
            "Always verify the final domain state or corresponding renewal event before considering an expired domain successfully recovered.",
        },
      ],
    },

    {
      id: "mailbox-impact",
      title: "How does domain expiry affect mailbox subscriptions?",

      description:
        "Domain registration and mailbox subscription are separate resources, but the domain status can affect subscription renewal.",

      content: [
        {
          type: "paragraph",
          content:
            "A mailbox subscription and its underlying domain are related but have separate lifecycles. Renewing one does not replace renewing the other.",
        },

        {
          type: "heading",
          content: "What happens during GRACE_PERIOD?",
        },

        {
          type: "paragraph",
          content:
            "CMR documents that mailbox subscription renewal is blocked while the associated domain is in GRACE_PERIOD.",
        },

        {
          type: "paragraph",
          content:
            "This means that if a mailbox subscription is approaching its own renewal date while the domain is in GRACE_PERIOD, the domain needs to be recovered first.",
        },

        {
          type: "heading",
          content: "What happens after EXPIRED?",
        },

        {
          type: "paragraph",
          content:
            "Once the domain reaches EXPIRED, the normal CMR API domain-renewal recovery flow has ended. The domain therefore becomes a critical dependency for services associated with it.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Recover the domain first",
          content:
            "If mailbox subscription renewal is blocked because the domain is in GRACE_PERIOD or EXPIRED, resolve the domain lifecycle issue before treating the subscription as an independent problem.",
        },
      ],
    },

    {
      id: "grace-vs-expired",
      title: "GRACE_PERIOD vs. EXPIRED",

      description:
        "These two statuses are easy to confuse, but they represent very different points in the recovery lifecycle.",

      content: [
        {
          type: "heading",
          content: "GRACE_PERIOD",
        },

        {
          type: "paragraph",
          content:
            "The domain has reached its registrar expiry date but is still inside the documented 7-day recovery window. The domain can still be renewed through the normal CMR renewal flow.",
        },

        {
          type: "heading",
          content: "EXPIRED",
        },

        {
          type: "paragraph",
          content:
            "The 7-day recovery window has closed without successful renewal. The domain is no longer recoverable through the normal CMR API renewal flow.",
        },

        {
          type: "steps",
          items: [
            {
              id: "compare-grace",
              title: "GRACE_PERIOD",
              description:
                "Recoverable through the documented CMR renewal flow. Act immediately.",
            },
            {
              id: "compare-expired",
              title: "EXPIRED",
              description:
                "The normal CMR API recovery window has closed. Do not continue submitting standard renewal requests.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "The distinction matters",
          content:
            "If you see GRACE_PERIOD, there is still a documented recovery path. If you see EXPIRED, that normal recovery path has already closed.",
        },
      ],
    },

    {
      id: "what-if-expired",
      title: "What if the domain has already reached EXPIRED?",

      description:
        "Once the normal recovery window has closed, the standard CMR API renewal flow is no longer available.",

      content: [
        {
          type: "paragraph",
          content:
            "If a domain has reached EXPIRED, the documented 7-day CMR recovery window has already closed.",
        },

        {
          type: "paragraph",
          content:
            "The CMR API documentation treats EXPIRED as a terminal state for the normal API renewal flow. Therefore, repeatedly submitting the standard domain renewal request is not the appropriate recovery strategy.",
        },

        {
          type: "heading",
          content: "What should you do next?",
        },

        {
          type: "steps",
          items: [
            {
              id: "expired-1",
              title: "Confirm the final status",
              description:
                "Verify that the domain is actually EXPIRED and not still in GRACE_PERIOD.",
            },
            {
              id: "expired-2",
              title: "Review the expiry timeline",
              description:
                "Check the recorded expiry timestamp and domain lifecycle events.",
            },
            {
              id: "expired-3",
              title: "Do not repeatedly retry normal renewal",
              description:
                "The documented CMR API recovery window has already closed.",
            },
            {
              id: "expired-4",
              title: "Investigate registrar-level options",
              description:
                "If the domain is business-critical, investigate the appropriate registrar-level recovery or re-registration options.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "EXPIRED is not the same as GRACE_PERIOD",
          content:
            "GRACE_PERIOD is still within the documented CMR recovery window. EXPIRED means that window has already closed.",
        },
      ],
    },

    {
      id: "common-scenarios",
      title: "Common recovery scenarios",

      description:
        "Use these examples to understand what action is appropriate in common situations.",

      content: [
        {
          type: "heading",
          content: "My domain is still ACTIVE but close to expiry",
        },

        {
          type: "paragraph",
          content:
            "The domain has not entered the recovery period yet. Plan and initiate renewal before the expiry date whenever possible.",
        },

        {
          type: "heading",
          content: "My domain is in GRACE_PERIOD",
        },

        {
          type: "paragraph",
          content:
            "The domain is still recoverable. Check the wallet, initiate renewal, and verify the final renewal result as soon as possible.",
        },

        {
          type: "heading",
          content: "My domain says RENEWING",
        },

        {
          type: "paragraph",
          content:
            "A renewal is currently being processed. Wait for the final result instead of submitting repeated renewal requests.",
        },

        {
          type: "heading",
          content: "My domain says EXPIRED",
        },

        {
          type: "paragraph",
          content:
            "The normal 7-day CMR recovery window has closed. The standard API renewal flow can no longer recover the domain.",
        },

        {
          type: "heading",
          content: "My mailbox subscription cannot renew",
        },

        {
          type: "paragraph",
          content:
            "Check the linked domain's status. If the domain is in GRACE_PERIOD or EXPIRED, the domain lifecycle issue should be addressed first.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes to avoid",

      description:
        "Avoid these mistakes when recovering an expired domain.",

      content: [
        {
          type: "heading",
          content: "Mistake 1: Treating the expiry date as the final point of recovery",
        },

        {
          type: "paragraph",
          content:
            "The registrar expiry date starts the documented grace-period recovery window. It does not immediately mean the domain has reached the terminal EXPIRED state.",
        },

        {
          type: "heading",
          content: "Mistake 2: Waiting until the end of the grace period",
        },

        {
          type: "paragraph",
          content:
            "The grace period is limited. Begin recovery as soon as the domain enters GRACE_PERIOD rather than waiting for the final day.",
        },

        {
          type: "heading",
          content: "Mistake 3: Treating GRACE_PERIOD and EXPIRED as the same status",
        },

        {
          type: "paragraph",
          content:
            "GRACE_PERIOD means the domain is still within the documented recovery window. EXPIRED means the normal CMR API recovery window has closed.",
        },

        {
          type: "heading",
          content: "Mistake 4: Assuming the renewal request means the domain is recovered",
        },

        {
          type: "paragraph",
          content:
            "Renewal processing is asynchronous. Confirm the final result before considering the domain recovered.",
        },

        {
          type: "heading",
          content: "Mistake 5: Trying to renew an EXPIRED domain repeatedly",
        },

        {
          type: "paragraph",
          content:
            "Once the domain has reached EXPIRED, the documented CMR API recovery window has closed. Repeated standard renewal requests will not reopen that window.",
        },

        {
          type: "heading",
          content: "Mistake 6: Ignoring mailbox dependencies",
        },

        {
          type: "paragraph",
          content:
            "A domain lifecycle problem can affect mailbox subscription renewal. Check the domain status when a related subscription cannot renew.",
        },
      ],
    },

    {
      id: "recovery-checklist",
      title: "Domain recovery checklist",

      description:
        "Use this checklist when a domain enters GRACE_PERIOD.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "check-1",
              title: "Confirm the domain",
              description:
                "Verify the exact domain and customer account.",
            },
            {
              id: "check-2",
              title: "Confirm GRACE_PERIOD",
              description:
                "Make sure the domain is still within the documented recovery state.",
            },
            {
              id: "check-3",
              title: "Check the expiry timestamp",
              description:
                "Review the recorded expiry information and recovery window.",
            },
            {
              id: "check-4",
              title: "Check wallet balance",
              description:
                "Make sure sufficient balance is available for renewal.",
            },
            {
              id: "check-5",
              title: "Submit renewal",
              description:
                "Initiate the documented domain renewal process.",
            },
            {
              id: "check-6",
              title: "Monitor processing",
              description:
                "Wait for the asynchronous renewal process to complete.",
            },
            {
              id: "check-7",
              title: "Verify the final result",
              description:
                "Confirm that the domain has successfully returned to its active state.",
            },
            {
              id: "check-8",
              title: "Check dependent services",
              description:
                "If mailbox subscriptions were affected, verify their state after the domain has been recovered.",
            },
          ],
        },

        {
          type: "callout",
          variant: "success",
          title: "The safest recovery approach",
          content:
            "Confirm the status, renew as soon as possible, wait for the final result, and then verify the domain and any dependent services.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the domain guides related to expiry and renewal.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "status-lifecycle",
              title: "Domain Status Lifecycle Explained",
              description:
                "Understand ACTIVE, RENEWING, GRACE_PERIOD, and EXPIRED domain states.",
              href: "/concepts/domains/status-lifecycle",
            },
            {
              id: "register-domain",
              title: "Registering a New Domain",
              description:
                "Learn how domain registration works and what to check before placing an order.",
              href: "/concepts/domains/register-domain",
            },
            {
              id: "remove-domain",
              title: "Removing a Domain",
              description:
                "Understand what to check before retiring a domain and how domain removal differs from subscription cancellation.",
              href: "/concepts/domains/remove-domain",
            },
          ],
        },
      ],
    },
  ],
};