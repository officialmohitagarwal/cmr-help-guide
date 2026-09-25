export const workspaceConflictArticle = {
  id: "workspace-conflict-check",

  slug: "/concepts/domains/workspace-conflict-check",

  category: {
    id: "domains",
    label: "Domains",
    slug: "/concepts/domains",
  },

  title: "Why the Workspace-Conflict Check Matters Before You Order",

  description:
    "Understand what a workspace is, what a workspace conflict means, why CMR checks for existing workspaces, and how to interpret the result before registering a domain.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "Before registering a domain and provisioning mailboxes, CMR can check whether the domain is already associated with an existing Google or Microsoft workspace. This check helps identify domains that may already be connected to a workspace and prevents avoidable provisioning and order failures. This guide explains what a workspace is, what a workspace conflict means, how the check works, and what you should do when a conflict is detected.",

  sections: [
    {
      id: "what-is-workspace",
      title: "What is a workspace?",

      description:
        "A workspace is the organization-level environment provided by an email service provider, such as Google Workspace or Microsoft 365.",

      content: [
        {
          type: "paragraph",
          content:
            "A workspace is the environment that an organization uses to manage its business email accounts and related services. In CMR, mailboxes can be provisioned through supported workspace providers such as Google or Microsoft.",
        },

        {
          type: "paragraph",
          content:
            "For example, an organization may have a Google Workspace associated with the domain example.com. That workspace can contain multiple mailbox accounts such as alice@example.com and bob@example.com.",
        },

        {
          type: "heading",
          content: "The relationship between a domain, workspace, and mailbox",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain",
              title: "Domain",
              description:
                "The domain is the internet name, such as example.com.",
            },
            {
              id: "workspace",
              title: "Workspace",
              description:
                "The workspace is the organization-level environment associated with the domain through a provider such as Google or Microsoft.",
            },
            {
              id: "mailbox",
              title: "Mailbox",
              description:
                "A mailbox is an individual email account created within the workspace, such as alice@example.com.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "This relationship is important because a domain can already be connected to an existing workspace before you attempt to register or provision it through CMR.",
        },
      ],
    },

    {
      id: "what-is-workspace-conflict",
      title: "What is a workspace conflict?",

      description:
        "A workspace conflict occurs when the domain you are trying to use is already associated with an existing workspace.",

      content: [
        {
          type: "paragraph",
          content:
            "A workspace conflict means that CMR has detected an existing Google or Microsoft workspace associated with the domain being checked.",
        },

        {
          type: "paragraph",
          content:
            "For example, suppose you want to register example.com and provision mailboxes for it through CMR. If example.com is already associated with an existing Google Workspace, the domain may not be suitable for the intended order flow.",
        },

        {
          type: "heading",
          content: "A conflict does not necessarily mean the domain is unavailable",
        },

        {
          type: "paragraph",
          content:
            "Domain availability and workspace existence are two different checks. A domain can be available for registration while still having an existing workspace association that needs to be considered before you place the order.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Two different questions",
          content:
            "Domain availability asks whether the domain can be registered. Workspace validation asks whether an existing Google or Microsoft workspace is already associated with that domain. Both checks can matter before an order is placed.",
        },
      ],
    },

    {
      id: "why-check-matters",
      title: "Why does the workspace check matter?",

      description:
        "Checking for an existing workspace before ordering helps identify a common cause of domain-order failure.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR uses the workspace check to identify whether a domain already has an existing workspace association before you proceed with the domain and mailbox order flow.",
        },

        {
          type: "paragraph",
          content:
            "Without this check, you could submit an order for a domain that already has a workspace associated with it and only discover the conflict after the order is being processed.",
        },

        {
          type: "heading",
          content: "What can happen if you skip the check?",
        },

        {
          type: "paragraph",
          content:
            "A domain and mailbox order can fail during processing when workspace validation detects that the domain is already associated with an existing Google Workspace account.",
        },

        {
          type: "paragraph",
          content:
            "The CMR API documents `Workspace validation failed` as a domain-order failure reason when the domain is already associated with an existing Google Workspace account.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Check before placing the order",
          content:
            "Workspace validation should be treated as a pre-order check. Detecting a conflict before submitting the order gives you an opportunity to investigate the domain instead of discovering the problem after order processing has started.",
        },
      ],
    },

    {
      id: "availability-vs-workspace",
      title: "Domain availability vs. workspace existence",

      description:
        "These checks answer different questions and should not be treated as interchangeable.",

      content: [
        {
          type: "heading",
          content: "What does domain availability check?",
        },

        {
          type: "paragraph",
          content:
            "A domain availability check determines whether the domain name is available for registration. For example, it can tell you whether example.com is currently available to register.",
        },

        {
          type: "heading",
          content: "What does workspace existence check?",
        },

        {
          type: "paragraph",
          content:
            "A workspace existence check determines whether a Google or Microsoft workspace already exists for the domain.",
        },

        {
          type: "steps",
          items: [
            {
              id: "availability-check",
              title: "Availability check",
              description:
                "Answers: Can this domain currently be registered?",
            },
            {
              id: "workspace-check",
              title: "Workspace check",
              description:
                "Answers: Is there already a Google or Microsoft workspace associated with this domain?",
            },
            {
              id: "order-validation",
              title: "Order validation",
              description:
                "Determines whether the domain can proceed through the intended CMR order and mailbox provisioning flow.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "Because these checks answer different questions, checking only domain availability is not enough when the order also involves workspace-based mailbox provisioning.",
        },
      ],
    },

    {
      id: "when-to-check",
      title: "When should you perform the workspace check?",

      description:
        "The check should happen before you commit to the domain order.",

      content: [
        {
          type: "paragraph",
          content:
            "The workspace check is intended to be performed before registering a domain through the order flow. CMR's API documentation specifically describes the workspace-existence endpoint as a check to run before registering a domain to detect conflicts with existing workspaces.",
        },

        {
          type: "heading",
          content: "Recommended pre-order flow",
        },

        {
          type: "steps",
          items: [
            {
              id: "step-availability",
              title: "Check domain availability",
              description:
                "Confirm that the domain is available for registration.",
            },
            {
              id: "step-workspace",
              title: "Check workspace existence",
              description:
                "Check whether the domain is already associated with a Google or Microsoft workspace.",
            },
            {
              id: "step-review",
              title: "Review the results",
              description:
                "Continue only when the results are compatible with your intended order.",
            },
            {
              id: "step-order",
              title: "Place the order",
              description:
                "Submit the domain and mailbox order after the required validations have passed.",
            },
            {
              id: "step-confirm",
              title: "Wait for processing",
              description:
                "The order is processed asynchronously. Use the final order result or webhook events to confirm completion.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Recommended order",
          content:
            "Check availability first, then check workspace existence, then place the order. These checks reduce the chance of discovering a domain or workspace problem after the order has already been submitted.",
        },
      ],
    },

    {
      id: "how-check-works",
      title: "How the workspace check works",

      description:
        "CMR provides an API endpoint specifically for checking whether a workspace already exists for a domain.",

      content: [
        {
          type: "paragraph",
          content:
            "The CMR API provides a workspace-existence check at `POST /domains/has-workspace`. The endpoint can check a single domain or multiple domains in one request.",
        },

        {
          type: "heading",
          content: "Single-domain check",
        },

        {
          type: "paragraph",
          content:
            "For a single domain, provide the domain name and, when required for the check, the service provider such as GOOGLE.",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "domainName": "acmecorp.com",
  "serviceProvider": "GOOGLE"
}`,
        },

        {
          type: "paragraph",
          content:
            "When no workspace exists for the domain, the API can return `data: null`, indicating that no existing workspace was found for the check.",
        },

        {
          type: "heading",
          content: "Bulk workspace check",
        },

        {
          type: "paragraph",
          content:
            "CMR also supports checking multiple domains in one request. This is useful when you are evaluating several domains before placing orders.",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "domains": [
    {
      "domainName": "acmecorp.com",
      "serviceProvider": "GOOGLE"
    },
    {
      "domainName": "example.com"
    }
  ]
}`,
        },

        {
          type: "paragraph",
          content:
            "For bulk checks, each domain is evaluated independently. A successful item indicates that no workspace was found, while a failed item includes an error describing the issue.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Bulk checks",
          content:
            "Each domain check has a documented 15-second timeout. A domain check that times out is reported as a failed check and should be investigated rather than treated as a confirmed no-workspace result.",
        },
      ],
    },

    {
      id: "understanding-results",
      title: "Understanding the result",

      description:
        "The result tells you whether CMR found an existing workspace association for the domain.",

      content: [
        {
          type: "heading",
          content: "No workspace found",
        },

        {
          type: "paragraph",
          content:
            "For a single-domain check, CMR documents a response with `data: null` when no workspace exists. This means the workspace check did not find an existing workspace for the domain.",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "status": 200,
  "message": "Workspace not exists",
  "data": null
}`,
        },

        {
          type: "paragraph",
          content:
            "A successful workspace check does not by itself register the domain. It only confirms the result of the workspace-existence check. You still need to complete the remaining domain availability and order steps.",
        },

        {
          type: "heading",
          content: "Workspace found",
        },

        {
          type: "paragraph",
          content:
            "If an existing workspace is detected, treat the domain as having a workspace conflict for the intended flow and investigate the existing workspace before proceeding with the order.",
        },

        {
          type: "heading",
          content: "Check failed or timed out",
        },

        {
          type: "paragraph",
          content:
            "A failed or timed-out check should not be interpreted as confirmation that no workspace exists. Resolve the failed check or retry according to the API behavior before making the domain-order decision.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "A failed check is not a clean result",
          content:
            "Only treat a successful no-workspace result as confirmation that the check found no existing workspace. A timeout or failed check needs investigation.",
        },
      ],
    },

    {
      id: "workspace-conflict-order",
      title: "What happens when a conflict is found during an order?",

      description:
        "Workspace validation can also happen as part of order processing.",

      content: [
        {
          type: "paragraph",
          content:
            "The workspace-existence check is a useful pre-order validation, but CMR also performs validation during the order-processing flow.",
        },

        {
          type: "paragraph",
          content:
            "If the order fails workspace validation, the CMR API can report `Workspace validation failed` as the failure reason. The documented cause is that the domain is already associated with an existing Google Workspace account.",
        },

        {
          type: "heading",
          content: "Why can this happen even after a pre-check?",
        },

        {
          type: "paragraph",
          content:
            "A pre-check is a point-in-time check. The final order is processed asynchronously, so the state can be evaluated again when the order is actually processed.",
        },

        {
          type: "paragraph",
          content:
            "For this reason, the pre-check should be considered a preventative validation, not a guarantee that the later order can never fail.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Order processing is asynchronous",
          content:
            "A successful HTTP response for an order confirms that the request was accepted or queued. It does not necessarily mean the domain and mailbox provisioning has completed successfully. Use the final order result or webhook events to determine the actual outcome.",
        },
      ],
    },

    {
      id: "what-to-do-conflict",
      title: "What should you do if a workspace conflict is found?",

      description:
        "A conflict means you should investigate the existing workspace before continuing with the intended order.",

      content: [
        {
          type: "paragraph",
          content:
            "If the workspace check identifies an existing workspace, do not simply treat the result as a temporary API error. The conflict indicates that the domain is already associated with a workspace and requires investigation.",
        },

        {
          type: "steps",
          items: [
            {
              id: "conflict-identify",
              title: "Identify the affected domain",
              description:
                "Confirm which domain returned the workspace conflict.",
            },
            {
              id: "conflict-provider",
              title: "Identify the workspace provider",
              description:
                "Determine whether the check concerns Google or Microsoft workspace infrastructure.",
            },
            {
              id: "conflict-investigate",
              title: "Investigate the existing workspace",
              description:
                "Determine whether the existing workspace belongs to the intended customer and whether it should continue to be used.",
            },
            {
              id: "conflict-decide",
              title: "Decide whether the domain should proceed",
              description:
                "Do not continue with a conflicting order until you understand and resolve the workspace situation.",
            },
            {
              id: "conflict-recheck",
              title: "Run the check again when appropriate",
              description:
                "After the underlying situation has been resolved, repeat the workspace check before continuing with the order.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes to avoid",

      description:
        "These are common misunderstandings when working with workspace validation.",

      content: [
        {
          type: "heading",
          content: "Mistake 1: Checking only domain availability",
        },

        {
          type: "paragraph",
          content:
            "A domain being available for registration does not answer whether an existing workspace is associated with the domain. Perform both checks when the order involves workspace-based mailbox provisioning.",
        },

        {
          type: "heading",
          content: "Mistake 2: Treating a timeout as 'no workspace'",
        },

        {
          type: "paragraph",
          content:
            "A timeout is a failed check, not a successful confirmation that the domain has no workspace. Investigate or retry the check.",
        },

        {
          type: "heading",
          content: "Mistake 3: Assuming a successful order request means provisioning succeeded",
        },

        {
          type: "paragraph",
          content:
            "CMR processes orders asynchronously. The initial HTTP response confirms that the request was accepted or queued, while the final result is communicated through the order processing flow and webhook events.",
        },

        {
          type: "heading",
          content: "Mistake 4: Ignoring an existing workspace",
        },

        {
          type: "paragraph",
          content:
            "If a domain is already associated with an existing workspace, investigate the existing setup before attempting to use the domain in another provisioning flow.",
        },
      ],
    },

    {
      id: "troubleshooting",
      title: "Troubleshooting workspace validation",

      description:
        "Use these checks when workspace validation does not return the result you expect.",

      content: [
        {
          type: "heading",
          content: "The API says a workspace exists",
        },

        {
          type: "paragraph",
          content:
            "Verify that the domain is correct and investigate the existing Google or Microsoft workspace associated with it. Do not proceed with the order until the conflict is understood.",
        },

        {
          type: "heading",
          content: "The check times out",
        },

        {
          type: "paragraph",
          content:
            "CMR documents a 15-second timeout for each workspace check. A timed-out domain is reported as a failed check. Retry or investigate the failed check instead of treating it as a clean no-workspace result.",
        },

        {
          type: "heading",
          content: "The order fails with 'Workspace validation failed'",
        },

        {
          type: "paragraph",
          content:
            "The documented cause is that the domain is already associated with an existing Google Workspace account. Review the domain's workspace situation before attempting another order.",
        },

        {
          type: "heading",
          content: "The workspace check succeeds but the order later fails",
        },

        {
          type: "paragraph",
          content:
            "Remember that the workspace check is a point-in-time validation and the order is processed asynchronously. Review the final order failure reason and webhook event rather than relying only on the earlier pre-check.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not repeatedly submit failed orders",
          content:
            "If an order fails because of workspace validation, resolve the underlying domain or workspace issue first. Repeatedly submitting the same order without changing the underlying condition will not resolve the conflict.",
        },
      ],
    },

    {
      id: "recommended-flow",
      title: "Recommended domain-order validation flow",

      description:
        "Use this sequence when preparing a domain for registration and mailbox provisioning.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "flow-domain",
              title: "Choose the domain",
              description:
                "Select the domain you want to register and use.",
            },
            {
              id: "flow-availability",
              title: "Check domain availability",
              description:
                "Confirm that the domain is available for registration.",
            },
            {
              id: "flow-workspace",
              title: "Check workspace existence",
              description:
                "Check whether an existing Google or Microsoft workspace is associated with the domain.",
            },
            {
              id: "flow-review",
              title: "Review both results",
              description:
                "Make sure the domain is available and there is no unresolved workspace conflict.",
            },
            {
              id: "flow-order",
              title: "Place the order",
              description:
                "Submit the domain and mailbox order with the required configuration.",
            },
            {
              id: "flow-webhook",
              title: "Confirm the final result",
              description:
                "Wait for the asynchronous order processing to complete and use the final webhook or order status to confirm success or failure.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Think of workspace validation as a pre-flight check",
          content:
            "The purpose of the check is to catch an existing workspace association before you commit to the order. It is one part of the overall domain-order validation process, alongside availability, wallet balance, order configuration, and provider requirements.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the domain workflows that build on workspace validation.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "register-domain",
              title: "Registering a New Domain",
              description:
                "Learn how domain availability, workspace validation, and order processing fit together when registering a new domain.",
              href: "/concepts/domains/register-domain",
            },
            {
              id: "domain-status-lifecycle",
              title: "Domain Status Lifecycle Explained",
              description:
                "Understand ACTIVE, RENEWING, GRACE_PERIOD, and EXPIRED domain states.",
              href: "/concepts/domains/status-lifecycle",
            },
            {
              id: "mailboxes-provisioning",
              title: "Mailboxes and Provisioning",
              description:
                "Learn how mailboxes are provisioned and how they relate to the underlying domain and workspace.",
              href: "/concepts/mailboxes-provisioning",
            },
          ],
        },
      ],
    },
  ],
};