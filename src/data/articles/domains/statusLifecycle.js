export const domainStatusLifecycleArticle = {
  id: "domain-status-lifecycle",

  slug: "/concepts/domains/status-lifecycle",

  category: {
    id: "domains",
    label: "Domains",
    slug: "/concepts/domains",
  },

  title: "Domain Status Lifecycle Explained",

  description:
    "Understand what domain statuses mean, how a domain moves through its lifecycle, what the 7-day grace period means, and what to do when a domain approaches or passes its expiry date.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "A domain goes through different stages during its registration lifecycle. Understanding these stages helps you know whether a domain is active, being renewed, temporarily recoverable after expiry, or no longer recoverable through the CMR API. This guide explains each domain status, what it means, how the lifecycle works, and what action you should take at each stage.",

  sections: [
    {
      id: "what-is-a-domain",
      title: "What is a domain?",

      description:
        "Before understanding domain statuses, it is important to understand what a domain represents.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain is the unique name used to identify a website, email namespace, or other internet service. For example, example.com is a domain name.",
        },

        {
          type: "paragraph",
          content:
            "A domain can be used as the foundation for other services. In CMR, a domain can be associated with mailbox subscriptions and other domain-related services.",
        },

        {
          type: "heading",
          content: "Domain, website, and email address are different things",
        },

        {
          type: "paragraph",
          content:
            "The domain is the underlying name. A website or email address can use that domain, but they are not the same thing.",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-example",
              title: "Domain",
              description:
                "example.com is the domain itself.",
            },
            {
              id: "website-example",
              title: "Website",
              description:
                "https://example.com is a website address that uses the domain.",
            },
            {
              id: "email-example",
              title: "Email address",
              description:
                "hello@example.com is an email address that uses the domain as its email namespace.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "This distinction becomes important when working with CMR because the domain registration and the mailbox subscriptions created on that domain have separate lifecycles.",
        },
      ],
    },

    {
      id: "what-is-domain-status",
      title: "What does domain status mean?",

      description:
        "A domain status tells you where the domain currently is in its registration lifecycle.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain status represents the current state of the domain registration. It helps you understand whether the domain is currently active, undergoing a renewal, within its post-expiry recovery window, or has reached an expired state.",
        },

        {
          type: "paragraph",
          content:
            "The status is important because different stages have different rules. For example, a domain in ACTIVE status can continue operating normally, while a domain in GRACE_PERIOD requires immediate attention because its renewal window is limited.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Why domain status matters",
          content:
            "Always check the domain status before taking an action such as renewing a domain or troubleshooting a mailbox subscription. The current status determines what actions are available and whether the domain can still be recovered.",
        },
      ],
    },

    {
      id: "domain-lifecycle-overview",
      title: "Understanding the domain lifecycle",

      description:
        "A domain normally remains active until it reaches its expiry date. If it is not renewed, it can enter a limited recovery window before becoming expired.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain's lifecycle begins when the domain is registered. It normally remains ACTIVE while its registration is valid. When a renewal is initiated, the domain may temporarily enter RENEWING while the renewal is being processed.",
        },

        {
          type: "paragraph",
          content:
            "If the domain reaches its registrar expiry date without being successfully renewed, CMR reports a GRACE_PERIOD state. This is a limited 7-day renewal window during which the domain can still be recovered.",
        },

        {
          type: "paragraph",
          content:
            "If the 7-day grace window closes without successful renewal, the domain transitions to EXPIRED. At that point, the domain is no longer recoverable through the normal CMR API renewal flow.",
        },

        {
          type: "heading",
          content: "The lifecycle at a glance",
        },

        {
          type: "steps",
          items: [
            {
              id: "lifecycle-active",
              title: "ACTIVE",
              description:
                "The domain is currently registered and active.",
            },
            {
              id: "lifecycle-renewing",
              title: "RENEWING",
              description:
                "A domain renewal is being processed. This is a temporary state while the renewal request is in progress.",
            },
            {
              id: "lifecycle-grace",
              title: "GRACE_PERIOD",
              description:
                "The domain has reached its registrar expiry date but is still within the 7-day recovery window and can still be renewed.",
            },
            {
              id: "lifecycle-expired",
              title: "EXPIRED",
              description:
                "The 7-day grace window has closed without successful renewal. The domain is no longer recoverable through the CMR API renewal flow.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Pay attention to GRACE_PERIOD",
          content:
            "GRACE_PERIOD is a recovery window, not a normal active state. If a domain enters this state, renew it as soon as possible rather than waiting until the grace window closes.",
        },
      ],
    },

    {
      id: "active-status",
      title: "What does ACTIVE mean?",

      description:
        "ACTIVE means the domain is currently registered and operating within its valid registration period.",

      content: [
        {
          type: "paragraph",
          content:
            "When a domain is ACTIVE, its registration is currently valid. This is the normal operating state for a domain.",
        },

        {
          type: "paragraph",
          content:
            "An ACTIVE domain can be used as the foundation for domain-related services and mailbox subscriptions, subject to the requirements of those services.",
        },

        {
          type: "heading",
          content: "What should you do when a domain is ACTIVE?",
        },

        {
          type: "paragraph",
          content:
            "Normally, no immediate action is required. You should keep track of the domain's expiry date and make sure the domain can be renewed when it becomes eligible.",
        },

        {
          type: "heading",
          content: "ACTIVE does not mean the domain can never expire",
        },

        {
          type: "paragraph",
          content:
            "ACTIVE only describes the domain's current state. A domain still has an expiry date, and it needs to be renewed to remain registered beyond that date.",
        },
      ],
    },

    {
      id: "renewing-status",
      title: "What does RENEWING mean?",

      description:
        "RENEWING is a temporary state that indicates an active domain renewal request is being processed.",

      content: [
        {
          type: "paragraph",
          content:
            "Domain renewal extends the registration period of a domain. When a renewal request is being processed, the domain may temporarily appear as RENEWING.",
        },

        {
          type: "paragraph",
          content:
            "This is a processing state rather than a final outcome. The renewal still needs to complete successfully before you should treat the domain as fully renewed.",
        },

        {
          type: "heading",
          content: "What should you do when a domain is RENEWING?",
        },

        {
          type: "paragraph",
          content:
            "Do not assume that the renewal has already completed simply because the renewal request was accepted. Wait for the final renewal result or corresponding domain event before treating the renewal as complete.",
        },

        {
          type: "callout",
          variant: "info",
          title: "A successful request is not always the final result",
          content:
            "CMR processes domain renewal asynchronously. The renewal endpoint can return a successful response indicating that the renewal was queued, while the final result is reported separately.",
        },
      ],
    },

    {
      id: "what-is-grace-period",
      title: "What is a grace period?",

      description:
        "A grace period is a limited recovery window after a domain reaches its registrar expiry date.",

      content: [
        {
          type: "paragraph",
          content:
            "A grace period is a temporary period after a domain reaches its registrar expiry date during which the domain can still be renewed and recovered.",
        },

        {
          type: "paragraph",
          content:
            "In CMR, the domain.grace_period event indicates that the domain has reached its registrar expiry date and entered a 7-day renewal grace window.",
        },

        {
          type: "heading",
          content: "Why does the grace period exist?",
        },

        {
          type: "paragraph",
          content:
            "A domain reaching its expiry date does not immediately mean that it is permanently lost. The grace period provides a limited opportunity to recover the registration through renewal.",
        },

        {
          type: "heading",
          content: "How long is the CMR domain grace period?",
        },

        {
          type: "paragraph",
          content:
            "CMR documents a 7-day renewal grace window after the registrar expiry date. The grace window closes 7 days after the recorded expiry timestamp, at the end of the day in UTC.",
        },

        {
          type: "heading",
          content: "What happens during the grace period?",
        },

        {
          type: "paragraph",
          content:
            "The domain remains recoverable during this window. The appropriate action is to renew the domain as soon as possible rather than waiting for the grace period to end.",
        },

        {
          type: "paragraph",
          content:
            "Mailbox subscription renewals associated with a domain in GRACE_PERIOD are blocked until the domain is renewed.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "GRACE_PERIOD is time-sensitive",
          content:
            "Treat GRACE_PERIOD as an action-required state. The domain can still be recovered, but the recovery window is limited.",
        },
      ],
    },

    {
      id: "grace-period-example",
      title: "Example: How the 7-day grace period works",

      description:
        "Use the expiry timestamp to understand when the recovery window begins and ends.",

      content: [
        {
          type: "paragraph",
          content:
            "Suppose a domain has an expiry timestamp of March 8 at 23:59:59 UTC. Once that expiry point is reached, the domain enters its 7-day grace window.",
        },

        {
          type: "steps",
          items: [
            {
              id: "grace-day-zero",
              title: "Expiry date is reached",
              description:
                "The domain reaches its registrar expiry timestamp.",
            },
            {
              id: "grace-state",
              title: "Domain enters GRACE_PERIOD",
              description:
                "CMR reports the domain.grace_period event and the domain remains recoverable.",
            },
            {
              id: "grace-seven-days",
              title: "7-day recovery window",
              description:
                "The domain can still be renewed during this window.",
            },
            {
              id: "grace-end",
              title: "Grace period closes",
              description:
                "If the domain was not successfully renewed, it transitions to EXPIRED.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "The exact expiry timestamp is therefore important. Do not calculate the recovery deadline only from the calendar date shown to a user; use the recorded expiry timestamp and the documented 7-day window.",
        },
      ],
    },

    {
      id: "expired-status",
      title: "What does EXPIRED mean?",

      description:
        "EXPIRED means the domain's 7-day recovery window has closed without successful renewal.",

      content: [
        {
          type: "paragraph",
          content:
            "When a domain reaches EXPIRED status, the 7-day grace window has ended and the domain is no longer recoverable through the normal CMR API renewal flow.",
        },

        {
          type: "paragraph",
          content:
            "The domain.expired event is a terminal signal for the normal API renewal process. At this stage, you should not continue queuing the domain for normal API renewal.",
        },

        {
          type: "heading",
          content: "What should you do when a domain is EXPIRED?",
        },

        {
          type: "paragraph",
          content:
            "Treat EXPIRED as a terminal domain state for the normal CMR API flow. Do not queue another standard domain renewal request for the expired domain.",
        },

        {
          type: "paragraph",
          content:
            "If the domain is business-critical, investigate the appropriate registrar-level recovery options rather than repeatedly retrying the normal CMR renewal endpoint.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not confuse EXPIRED with GRACE_PERIOD",
          content:
            "GRACE_PERIOD means the domain is still recoverable through the documented renewal flow. EXPIRED means that the documented CMR API recovery window has already closed.",
        },
      ],
    },

    {
      id: "domain-vs-subscription",
      title: "Domain renewal vs. subscription renewal",

      description:
        "A domain registration and a mailbox subscription are separate resources with separate renewal lifecycles.",

      content: [
        {
          type: "paragraph",
          content:
            "One of the most important concepts to understand in CMR is that domain renewal and mailbox subscription renewal are not the same operation.",
        },

        {
          type: "heading",
          content: "Domain renewal",
        },

        {
          type: "paragraph",
          content:
            "Domain renewal extends the registration of the domain itself. For example, renewing example.com keeps the domain registration active for an additional registration period.",
        },

        {
          type: "heading",
          content: "Subscription renewal",
        },

        {
          type: "paragraph",
          content:
            "A subscription represents the ongoing service associated with mailboxes provisioned on a domain. Subscription billing and renewal follow their own lifecycle.",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-resource",
              title: "Domain",
              description:
                "The actual domain registration with the registrar.",
            },
            {
              id: "subscription-resource",
              title: "Subscription",
              description:
                "The ongoing mailbox service provisioned on that domain.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "These resources can have separate renewal processes. However, the mailbox subscription depends on the underlying domain remaining active.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Important distinction",
          content:
            "Renewing a mailbox subscription does not replace renewing the domain. If the linked domain is in GRACE_PERIOD or EXPIRED, the subscription renewal can be blocked.",
        },
      ],
    },

    {
      id: "domain-status-and-mailboxes",
      title: "What happens to mailbox services when a domain expires?",

      description:
        "Domain status can directly affect the renewal and availability of mailbox services associated with that domain.",

      content: [
        {
          type: "paragraph",
          content:
            "Mailbox subscriptions depend on the underlying domain remaining active. Because of this dependency, a domain entering GRACE_PERIOD or EXPIRED can affect the subscription lifecycle.",
        },

        {
          type: "heading",
          content: "While the domain is in GRACE_PERIOD",
        },

        {
          type: "paragraph",
          content:
            "The domain is still recoverable, but mailbox subscription renewal is blocked while the domain remains in GRACE_PERIOD. The immediate priority is to recover the domain by renewing it.",
        },

        {
          type: "heading",
          content: "After the domain becomes EXPIRED",
        },

        {
          type: "paragraph",
          content:
            "Once the domain passes the grace window and reaches EXPIRED, the normal CMR API renewal flow can no longer recover the domain. The expired domain therefore becomes a critical dependency issue for services associated with it.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Recover the domain first",
          content:
            "If a mailbox subscription cannot renew because its domain is in GRACE_PERIOD or EXPIRED, resolving the domain status is the first step. Subscription renewal is a separate process.",
        },
      ],
    },

    {
      id: "status-action-guide",
      title: "What should you do at each status?",

      description:
        "Use this quick reference to determine the appropriate action for each domain status.",

      content: [
        {
          type: "heading",
          content: "ACTIVE",
        },

        {
          type: "paragraph",
          content:
            "The domain is currently active. Continue normal operations and keep track of its expiry date so that renewal can be handled on time.",
        },

        {
          type: "heading",
          content: "RENEWING",
        },

        {
          type: "paragraph",
          content:
            "A renewal is being processed. Wait for the final renewal outcome rather than assuming that the domain has already been successfully renewed.",
        },

        {
          type: "heading",
          content: "GRACE_PERIOD",
        },

        {
          type: "paragraph",
          content:
            "The domain has reached its registrar expiry date but remains recoverable for 7 days. Renew the domain immediately.",
        },

        {
          type: "heading",
          content: "EXPIRED",
        },

        {
          type: "paragraph",
          content:
            "The 7-day recovery window has closed. The domain is no longer recoverable through the normal CMR API renewal flow. Do not continue retrying the standard renewal request.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Quick rule",
          content:
            "ACTIVE means normal operation. RENEWING means wait for the renewal result. GRACE_PERIOD means act immediately. EXPIRED means the normal API recovery window has closed.",
        },
      ],
    },

    {
      id: "common-scenarios",
      title: "Common scenarios",

      description:
        "Here are some common situations and how to interpret them.",

      content: [
        {
          type: "heading",
          content: "My domain is ACTIVE. Is something wrong?",
        },

        {
          type: "paragraph",
          content:
            "No. ACTIVE is the normal state for a domain whose registration is currently valid. You should still monitor the expiry date and plan renewal appropriately.",
        },

        {
          type: "heading",
          content: "My domain changed to RENEWING. Has renewal completed?",
        },

        {
          type: "paragraph",
          content:
            "Not necessarily. RENEWING is a temporary processing state. Wait for the final renewal outcome or corresponding webhook event.",
        },

        {
          type: "heading",
          content: "My domain entered GRACE_PERIOD. Is it already lost?",
        },

        {
          type: "paragraph",
          content:
            "No. GRACE_PERIOD means the domain has reached its registrar expiry date but is still within the documented 7-day recovery window. Renew it immediately.",
        },

        {
          type: "heading",
          content: "My domain is EXPIRED. Can I call the renewal endpoint again?",
        },

        {
          type: "paragraph",
          content:
            "The CMR documentation treats EXPIRED as a terminal state for the normal API renewal flow. The standard API renewal request should not be queued for an expired domain.",
        },

        {
          type: "heading",
          content: "My mailbox subscription renewal failed. Is that the same as domain expiry?",
        },

        {
          type: "paragraph",
          content:
            "No. Subscription renewal and domain renewal are separate processes. However, the subscription can fail to renew when its linked domain is in GRACE_PERIOD or EXPIRED.",
        },
      ],
    },

    {
      id: "important-notes",
      title: "Important things to remember",

      description:
        "Keep these rules in mind when managing domains and mailbox services in CMR.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "note-status",
              title: "Domain status represents the registration state",
              description:
                "Use the domain status to understand where the domain currently is in its lifecycle.",
            },
            {
              id: "note-grace",
              title: "GRACE_PERIOD is a limited recovery window",
              description:
                "CMR documents a 7-day renewal window after registrar expiry. Do not wait until the end of the window to act.",
            },
            {
              id: "note-renewal",
              title: "Domain renewal and subscription renewal are separate",
              description:
                "Renewing the domain and renewing a mailbox subscription are different operations.",
            },
            {
              id: "note-subscription",
              title: "Domain status can affect mailbox subscription renewal",
              description:
                "Mailbox subscription renewal is blocked while the linked domain is in GRACE_PERIOD or EXPIRED.",
            },
            {
              id: "note-expired",
              title: "EXPIRED is different from GRACE_PERIOD",
              description:
                "GRACE_PERIOD is still recoverable through the documented renewal flow. EXPIRED is beyond the normal CMR API recovery window.",
            },
            {
              id: "note-async",
              title: "Renewal processing is asynchronous",
              description:
                "A successful renewal request does not necessarily mean that registrar renewal has already completed. Use the final renewal result or webhook event to confirm completion.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the domain workflows that build on the concepts covered in this guide.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "register-domain",
              title: "Registering a New Domain",
              description:
                "Learn how to search for and register a new domain through CMR.",
              href: "/concepts/domains/register-domain",
            },
            {
              id: "workspace-conflict",
              title: "Why the Workspace-Conflict Check Matters Before You Order",
              description:
                "Understand why CMR validates workspace conflicts before a domain order is completed.",
              href: "/concepts/domains/workspace-conflict-check",
            },
            {
              id: "recover-expired-domain",
              title: "Recovering an Expired Domain",
              description:
                "Learn what to do when a domain reaches its expiry date and enters the 7-day grace window.",
              href: "/concepts/domains/recover-expired-domain",
            },
          ],
        },
      ],
    },
  ],
};