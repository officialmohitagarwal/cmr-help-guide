export const removeDomainArticle = {
  id: "remove-domain",

  slug: "/concepts/domains/remove-domain",

  category: {
    id: "domains",
    label: "Domains",
    slug: "/concepts/domains",
  },

  title: "Removing a Domain",

  description:
    "Understand what removing a domain means, what you should check before removing one, how domains relate to subscriptions and mailboxes, and how to safely handle domain removal.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "Removing a domain is a significant action because a domain can be associated with mailbox subscriptions, forwarding configuration, DNS records, and other services. Before removing or decommissioning a domain, it is important to understand what the domain represents, identify the services that depend on it, and distinguish domain removal from subscription cancellation or DNS record deletion.",

  sections: [
    {
      id: "what-does-removing-domain-mean",
      title: "What does removing a domain mean?",

      description:
        "A domain is the foundation for services such as email and DNS, so removing it should be treated as a resource-level change rather than simply deleting a name from a list.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain is the registered internet name that can be used for websites, email addresses, DNS configuration, forwarding, and other services. Removing a domain therefore requires more consideration than simply removing a row from a dashboard.",
        },

        {
          type: "paragraph",
          content:
            "Before removing a domain, you should first understand which services are currently associated with it and whether those services are still required.",
        },

        {
          type: "heading",
          content: "A domain can have multiple dependencies",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-registration",
              title: "Domain registration",
              description:
                "The domain itself is a registered resource with a registration and expiry lifecycle.",
            },
            {
              id: "mailboxes",
              title: "Mailboxes",
              description:
                "Mailboxes can use the domain as their email namespace, for example hello@example.com.",
            },
            {
              id: "subscription",
              title: "Mailbox subscription",
              description:
                "Mailbox services can have an associated subscription lifecycle that is separate from the domain registration lifecycle.",
            },
            {
              id: "dns",
              title: "DNS configuration",
              description:
                "The domain can have DNS records such as A, MX, TXT, and other records associated with it.",
            },
            {
              id: "forwarding",
              title: "Forwarding",
              description:
                "A domain can have domain forwarding or email forwarding configured.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Removing a domain is not the same as deleting a DNS record",
          content:
            "DNS records are individual resources associated with a domain. Deleting a DNS record changes the DNS configuration; it does not by itself remove the domain registration.",
        },
      ],
    },

    {
      id: "remove-vs-cancel",
      title: "Removing a domain vs. cancelling a subscription",

      description:
        "These are different actions and should not be treated as interchangeable.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain registration and a mailbox subscription represent different resources. CMR's API documentation treats domain renewal and subscription renewal as separate lifecycles.",
        },

        {
          type: "heading",
          content: "Domain",
        },

        {
          type: "paragraph",
          content:
            "The domain represents the registered internet name, such as example.com. It has its own registration status, registration date, expiry date, and renewal lifecycle.",
        },

        {
          type: "heading",
          content: "Subscription",
        },

        {
          type: "paragraph",
          content:
            "A subscription represents the ongoing mailbox service associated with the domain. Cancelling a subscription is therefore different from removing the underlying domain.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Important distinction",
          content:
            "Cancelling a subscription should not be described as removing the domain. The CMR API provides a separate subscription cancellation operation, while the domain itself has its own lifecycle.",
        },
      ],
    },

    {
      id: "before-removing",
      title: "What should you check before removing a domain?",

      description:
        "Review the services and configuration associated with the domain before taking a removal action.",

      content: [
        {
          type: "paragraph",
          content:
            "Before removing or decommissioning a domain, review everything that currently depends on it. This helps prevent accidental disruption to email, forwarding, DNS, or other services.",
        },

        {
          type: "steps",
          items: [
            {
              id: "check-mailboxes",
              title: "Check the mailboxes",
              description:
                "Identify the mailboxes that use the domain and determine whether they are still required.",
            },
            {
              id: "check-subscription",
              title: "Check the subscription",
              description:
                "Review any active mailbox subscription associated with the domain before taking action.",
            },
            {
              id: "check-forwarding",
              title: "Check forwarding",
              description:
                "Review any domain forwarding or email forwarding configuration that uses the domain.",
            },
            {
              id: "check-dns",
              title: "Check DNS records",
              description:
                "Review the domain's DNS configuration before making changes that could affect mail delivery or other services.",
            },
            {
              id: "check-business-use",
              title: "Check whether the domain is still in use",
              description:
                "Confirm that the domain is no longer required by the customer, application, website, or email infrastructure.",
            },
            {
              id: "check-data",
              title: "Confirm required data has been retained",
              description:
                "Make sure any information that needs to be retained has been exported or otherwise preserved before decommissioning the domain.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not remove a domain just to stop billing",
          content:
            "If the goal is to stop an active mailbox subscription, review the subscription cancellation process instead. Domain removal and subscription cancellation are separate concepts.",
        },
      ],
    },

    {
      id: "understand-domain-details",
      title: "Review the domain before taking action",

      description:
        "Use the domain details to understand its current state and configuration.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR provides a domain-details endpoint that returns information such as the domain name, current status, registration date, expiry date, purchase type, service provider, auto-renew setting, domain protection status, and forwarding configuration.",
        },

        {
          type: "paragraph",
          content:
            "The domain details response can also show whether domain forwarding or email forwarding is currently configured. Both forwarding fields are returned as null when no forwarding is configured.",
        },

        {
          type: "heading",
          content: "Information worth reviewing",
        },

        {
          type: "steps",
          items: [
            {
              id: "detail-status",
              title: "Current status",
              description:
                "Check whether the domain is ACTIVE or in another lifecycle state.",
            },
            {
              id: "detail-expiry",
              title: "Expiry date",
              description:
                "Check when the current domain registration expires.",
            },
            {
              id: "detail-provider",
              title: "Service provider",
              description:
                "Review the provider associated with the domain.",
            },
            {
              id: "detail-autorenew",
              title: "Auto-renew",
              description:
                "Check whether automatic domain renewal is enabled.",
            },
            {
              id: "detail-forwarding",
              title: "Forwarding configuration",
              description:
                "Check whether domain forwarding or email forwarding is configured.",
            },
            {
              id: "detail-protection",
              title: "Domain protection",
              description:
                "Review whether domain privacy or protection is enabled.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Check the current state first",
          content:
            "Reviewing the domain details before making a destructive or irreversible change gives you a clear picture of what is currently configured.",
        },
      ],
    },

    {
      id: "dns-and-removal",
      title: "What about DNS records?",

      description:
        "DNS records are separate resources and should be considered independently from the domain itself.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain can have multiple DNS records. These records control how different services interact with the domain, including website routing and email delivery.",
        },

        {
          type: "paragraph",
          content:
            "CMR provides separate DNS operations for retrieving and deleting DNS records. Deleting a DNS record therefore affects the individual DNS configuration rather than representing domain removal.",
        },

        {
          type: "heading",
          content: "Why this distinction matters",
        },

        {
          type: "paragraph",
          content:
            "If your goal is to remove a domain from use, deleting individual DNS records may not be sufficient. Conversely, if your goal is only to change DNS configuration, removing the domain would be a much broader action than necessary.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Only change what you need to change",
          content:
            "If you only need to modify DNS, work with the DNS records instead of treating the entire domain as something that needs to be removed.",
        },
      ],
    },

    {
      id: "forwarding-and-removal",
      title: "What about forwarding?",

      description:
        "Forwarding configuration should be reviewed before decommissioning a domain.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR supports both domain forwarding and email forwarding. A domain can therefore have forwarding configuration that remains important even when you are preparing to stop using the domain.",
        },

        {
          type: "heading",
          content: "Domain forwarding",
        },

        {
          type: "paragraph",
          content:
            "Domain forwarding directs visitors from the domain toward another destination. If the domain is still receiving traffic, removing or decommissioning it without planning for the forwarding behavior can affect those visitors.",
        },

        {
          type: "heading",
          content: "Email forwarding",
        },

        {
          type: "paragraph",
          content:
            "Email forwarding routes incoming messages associated with the domain to another email address. If the domain is still receiving important email, review the forwarding configuration before removing or decommissioning the domain.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Review forwarding before removal",
          content:
            "Check the domain's current forwarding configuration before taking action. CMR's domain details response exposes both domain forwarding and email forwarding configuration.",
        },
      ],
    },

    {
      id: "subscription-cancellation",
      title: "If the goal is to stop mailbox billing",

      description:
        "Stopping a mailbox subscription is different from removing the domain.",

      content: [
        {
          type: "paragraph",
          content:
            "If your actual goal is to stop an active mailbox subscription, use the subscription cancellation process rather than treating domain removal as the billing action.",
        },

        {
          type: "paragraph",
          content:
            "CMR's subscription cancellation endpoint accepts either a subscription ID or the associated domain and cancels the active subscription. The API documentation also notes that cancellations should be requested at least 24 hours before the subscription expiry date to ensure the cancellation is processed in time.",
        },

        {
          type: "heading",
          content: "Why this matters",
        },

        {
          type: "paragraph",
          content:
            "A customer may say that they want to 'remove a domain' when their actual requirement is to stop mailbox service or prevent an upcoming subscription renewal. Identify the intended outcome before taking action.",
        },

        {
          type: "steps",
          items: [
            {
              id: "goal-billing",
              title: "Goal: stop mailbox billing",
              description:
                "Review and cancel the relevant subscription.",
            },
            {
              id: "goal-dns",
              title: "Goal: change DNS",
              description:
                "Modify the relevant DNS records.",
            },
            {
              id: "goal-forwarding",
              title: "Goal: stop forwarding",
              description:
                "Update or remove the relevant forwarding configuration.",
            },
            {
              id: "goal-domain",
              title: "Goal: retire the domain",
              description:
                "Review all dependencies and follow the domain-removal process supported by your CMR environment.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Start with the intended outcome",
          content:
            "Before removing anything, identify whether the real requirement is to stop billing, change DNS, disable forwarding, remove mailbox services, or retire the domain entirely. Different goals require different actions.",
        },
      ],
    },

    {
      id: "safe-removal-checklist",
      title: "Safe domain removal checklist",

      description:
        "Use this checklist before retiring a domain.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "checklist-1",
              title: "Confirm the domain",
              description:
                "Make sure you are working with the correct domain and customer account.",
            },
            {
              id: "checklist-2",
              title: "Check the domain status",
              description:
                "Review the current registration state and expiry information.",
            },
            {
              id: "checklist-3",
              title: "Review mailboxes",
              description:
                "Identify all mailbox accounts that use the domain.",
            },
            {
              id: "checklist-4",
              title: "Review subscriptions",
              description:
                "Check whether there is an active mailbox subscription that should be cancelled separately.",
            },
            {
              id: "checklist-5",
              title: "Review forwarding",
              description:
                "Check domain forwarding and email forwarding configuration.",
            },
            {
              id: "checklist-6",
              title: "Review DNS",
              description:
                "Check the domain's DNS records and identify any records that are still required.",
            },
            {
              id: "checklist-7",
              title: "Preserve required data",
              description:
                "Export or retain any information that must remain available after the domain is retired.",
            },
            {
              id: "checklist-8",
              title: "Confirm the intended action",
              description:
                "Make sure domain removal is actually the required action rather than subscription cancellation, forwarding removal, or DNS modification.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes to avoid",

      description:
        "Avoid these common misunderstandings when retiring a domain.",

      content: [
        {
          type: "heading",
          content: "Mistake 1: Cancelling a subscription and assuming the domain is removed",
        },

        {
          type: "paragraph",
          content:
            "Subscription cancellation and domain removal are separate concepts. Cancelling a subscription does not mean that the domain registration itself has been removed.",
        },

        {
          type: "heading",
          content: "Mistake 2: Deleting DNS records and assuming the domain is removed",
        },

        {
          type: "paragraph",
          content:
            "DNS records are individual configuration resources. Deleting them does not represent removal of the domain registration.",
        },

        {
          type: "heading",
          content: "Mistake 3: Forgetting about forwarding",
        },

        {
          type: "paragraph",
          content:
            "A domain can have domain forwarding or email forwarding configured. Review these settings before retiring the domain.",
        },

        {
          type: "heading",
          content: "Mistake 4: Removing a domain without checking mailbox dependencies",
        },

        {
          type: "paragraph",
          content:
            "Mailboxes can use the domain as their email namespace. Confirm that the associated mailbox services are no longer required before decommissioning the domain.",
        },

        {
          type: "heading",
          content: "Mistake 5: Treating domain removal as a billing operation",
        },

        {
          type: "paragraph",
          content:
            "If the goal is simply to stop an upcoming mailbox subscription renewal, review the subscription cancellation process instead of removing the domain.",
        },
      ],
    },

    {
      id: "troubleshooting-removal",
      title: "Troubleshooting",

      description:
        "Use these checks when you are unsure what action to take before removing a domain.",

      content: [
        {
          type: "heading",
          content: "I only want to stop paying for the mailboxes",
        },

        {
          type: "paragraph",
          content:
            "Review the active subscription and use the subscription cancellation process. Do not assume that removing the domain is necessary.",
        },

        {
          type: "heading",
          content: "I only want to change DNS",
        },

        {
          type: "paragraph",
          content:
            "Work with the domain's DNS records instead of removing the domain.",
        },

        {
          type: "heading",
          content: "I want to stop email forwarding",
        },

        {
          type: "paragraph",
          content:
            "Review the email forwarding configuration and remove or update the forwarding setting rather than removing the entire domain.",
        },

        {
          type: "heading",
          content: "I am not sure whether the domain is still being used",
        },

        {
          type: "paragraph",
          content:
            "Review the domain details, mailbox subscriptions, forwarding configuration, and DNS records before taking any removal action.",
        },

        {
          type: "heading",
          content: "I removed something but the domain still appears",
        },

        {
          type: "paragraph",
          content:
            "First identify what was actually removed. Deleting a DNS record or cancelling a subscription is not the same as removing the domain itself.",
        },

        {
          type: "callout",
          variant: "info",
          title: "When in doubt, verify the resource",
          content:
            "Before repeating an action, verify whether you changed the domain, a subscription, a DNS record, or forwarding configuration. These are separate resources and can have separate states.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the domain concepts that help you safely manage a domain and its associated services.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "domain-status-lifecycle",
              title: "Domain Status Lifecycle Explained",
              description:
                "Understand ACTIVE, RENEWING, GRACE_PERIOD, and EXPIRED domain states.",
              href: "/concepts/domains/status-lifecycle",
            },
            {
              id: "register-domain",
              title: "Registering a New Domain",
              description:
                "Learn how to check availability and register a new domain through CMR.",
              href: "/concepts/domains/register-domain",
            },
            {
              id: "forwarding",
              title: "Setting Up Domain & Email Forwarding",
              description:
                "Understand domain forwarding, email forwarding, and how forwarding configuration works.",
              href: "/concepts/domains/forwarding",
            },
            {
              id: "domain-list-empty",
              title: "Troubleshooting: My Domain List Comes Back Empty",
              description:
                "Work through the common causes of missing domain results.",
              href: "/concepts/domains/domain-list-empty",
            },
          ],
        },
      ],
    },
  ],
};