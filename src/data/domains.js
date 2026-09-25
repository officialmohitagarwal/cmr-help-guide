export const domainsCategory = {
  id: "domains",

  label: "Domains",

  slug: "/concepts/domains",

  title: "Domains",

  description:
    "Understand how domains work in CMR, from registration and status changes to workspace validation, forwarding, expiry recovery, and removal.",

  articles: [
    {
      id: "domain-status-lifecycle",
      title: "Domain Status Lifecycle Explained",
      slug: "/concepts/domains/status-lifecycle",
      description:
        "Understand what each domain status means, how a domain moves through its lifecycle, and what happens when a domain reaches its expiry date.",
    },

    {
      id: "register-domain",
      title: "Registering a New Domain",
      slug: "/concepts/domains/register-domain",
      description:
        "Learn how domain registration works in CMR, from checking availability and workspace conflicts to completing your domain order.",
    },

    {
      id: "workspace-conflict-check",
      title: "Why the Workspace-Conflict Check Matters Before You Order",
      slug: "/concepts/domains/workspace-conflict-check",
      description:
        "Understand why CMR checks for existing workspace associations before a domain order is completed and what to do when a conflict is detected.",
    },

    {
      id: "domain-forwarding",
      title: "Setting Up Domain & Email Forwarding",
      slug: "/concepts/domains/forwarding",
      description:
        "Learn what forwarding means, how domain and email forwarding work, when to use each, and how to configure and verify forwarding.",
    },

    {
      id: "recover-expired-domain",
      title: "Recovering an Expired Domain (7-Day Grace Window)",
      slug: "/concepts/domains/recover-expired-domain",
      description:
        "Understand what happens when a domain expires, what the 7-day grace period means, and how domain recovery works during that window.",
    },

    {
      id: "remove-domain",
      title: "Removing a Domain",
      slug: "/concepts/domains/remove-domain",
      description:
        "Learn what removing a domain means, what to review beforehand, and how domain removal relates to DNS, forwarding, and subscriptions.",
    },

    {
      id: "domain-list-empty",
      title: "Troubleshooting: My Domain List Comes Back Empty",
      slug: "/concepts/domains/domain-list-empty",
      description:
        "Find the most common reasons a domain list may appear empty and work through the checks needed to identify the cause.",
    },
  ],
};