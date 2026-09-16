const USER_DASHBOARD_IMAGE =
  "https://placehold.co/1200x700/f7f7fa/686773?text=User+Dashboard";

const MAILBOXES_IMAGE =
  "https://placehold.co/1200x700/f7f7fa/686773?text=User+Mailboxes";

const DOMAINS_IMAGE =
  "https://placehold.co/1200x700/f7f7fa/686773?text=User+Domains";

const BILLING_IMAGE =
  "https://placehold.co/1200x700/f7f7fa/686773?text=User+Billing";

export const userDashboardArticle = {
  id: "users-user-dashboard",

  slug: "/users/user-dashboard",

  category: {
    id: "users",
    label: "Users",
  },

  title: "How to Navigate an Individual User's Dashboard",

  description:
    "Learn how to inspect a customer's domains, mailboxes, subscriptions, billing information, and available management options.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "The individual User Dashboard gives you a detailed view of a specific customer's account. From here, you can review their active domains, mailbox status, upcoming subscription billing, and use quick actions to move directly into areas such as Subscriptions, Domains, and Mailboxes.",

  sections: [
    {
      id: "user-overview",

      title: "Review the User Dashboard overview",

      description:
        "Get a quick overview of the customer's resources and access commonly used management actions.",

      content: [
        {
          type: "paragraph",

          content:
            "After selecting User Dashboard from the Users section, the customer's individual control panel opens on the main Dashboard tab. The overview brings important account information together so you can quickly understand the current state of the customer's resources.",
        },

        {
          type: "step",

          number: 1,

          title: "Review User Overview and Quick Actions",

          description:
            "When the User Dashboard opens, review the summary cards for Domains, Mailboxes, and Next Billing. The Mailboxes summary includes Total, Active, Pre-warmed, and Scheduled counts. On the right side, use the Quick Actions panel to access shortcuts for Manage Subscriptions, Domains, or Mailboxes.",
        },

        {
          type: "screenshot",

          src: USER_DASHBOARD_IMAGE,

          alt: "Individual customer User Dashboard overview",

          caption:
            "The User Dashboard provides an overview of domains, mailbox status, next billing, and quick actions.",
        },

        {
          type: "callout",

          variant: "info",

          title: "User-level view",

          content:
            "The individual User Dashboard is designed to help you inspect and manage resources for one selected customer rather than your entire partner account.",
        },
      ],
    },

    {
      id: "manage-mailboxes",

      title: "Manage user mailboxes",

      description:
        "View mailbox status, filter by provider, search mailbox names, and provision additional mailboxes.",

      content: [
        {
          type: "paragraph",

          content:
            "The Mailboxes section gives you a more detailed view of the email resources belonging to the selected customer. You can use the available filters and search options to locate specific mailboxes.",
        },

        {
          type: "step",

          number: 2,

          title: "Open Mailboxes",

          description:
            "Click the Mailboxes icon, represented by the envelope, in the left sidebar menu of the User Dashboard.",
        },

        {
          type: "screenshot",

          src: MAILBOXES_IMAGE,

          alt: "User Mailboxes section",

          caption:
            "Open Mailboxes from the left sidebar of the individual User Dashboard.",
        },

        {
          type: "step",

          number: 3,

          title: "Filter and search mailboxes",

          description:
            "Use the available filters to narrow mailboxes by status or provider, including Google Workspace or Microsoft 365. You can also search by mailbox name when you need to locate a specific mailbox.",
        },

        {
          type: "screenshot",

          src: MAILBOXES_IMAGE,

          alt: "Mailbox filters and search",

          caption:
            "Filter mailboxes by status or provider and search by mailbox name.",
        },

        {
          type: "step",

          number: 4,

          title: "Add new mailboxes",

          description:
            'When additional email seats are required for the customer, click "+ Add Mailboxes" to begin provisioning new mailboxes for the account.',
        },

        {
          type: "screenshot",

          src: MAILBOXES_IMAGE,

          alt: "Add Mailboxes option",

          caption:
            'Use "+ Add Mailboxes" to provision additional email seats for the customer.',
        },
      ],
    },

    {
      id: "manage-domains",

      title: "View user domains and renewals",

      description:
        "Review the customer's domains and identify domains that require renewal attention.",

      content: [
        {
          type: "paragraph",

          content:
            "The Domains section provides access to the domains associated with the selected customer. In addition to viewing all domains, you can switch to the renewal view to identify domains that are approaching expiration or are currently within their grace period.",
        },

        {
          type: "step",

          number: 5,

          title: "Open Domains",

          description:
            "Click the Domains icon, represented by the globe, in the left sidebar menu of the User Dashboard.",
        },

        {
          type: "screenshot",

          src: DOMAINS_IMAGE,

          alt: "User Domains section",

          caption:
            "Open Domains from the left sidebar to review the customer's domains.",
        },

        {
          type: "step",

          number: 6,

          title: "Review All Domains",

          description:
            "Use the All Domains view to see the active domains associated with the selected customer.",
        },

        {
          type: "screenshot",

          src: DOMAINS_IMAGE,

          alt: "All Domains view",

          caption:
            "The All Domains view shows the domains associated with the customer.",
        },

        {
          type: "step",

          number: 7,

          title: "Check Domains for Renewal",

          description:
            "Switch to the Domains for Renewal tab in the sub-menu to track domains expiring within the next 45 days or domains currently in their grace period.",
        },

        {
          type: "screenshot",

          src: DOMAINS_IMAGE,

          alt: "Domains for Renewal view",

          caption:
            "Use Domains for Renewal to track domains approaching expiration or currently in their grace period.",
        },

        {
          type: "callout",

          variant: "tip",

          title: "Keep an eye on renewals",

          content:
            "Use the Domains for Renewal view when you need to identify customer domains that are approaching expiration or are already in their grace period.",
        },
      ],
    },

    {
      id: "billing-subscriptions",

      title: "Check user billing and subscriptions",

      description:
        "Review the customer's active plans, seat counts, and upcoming billing information.",

      content: [
        {
          type: "paragraph",

          content:
            "The Billing / Subscriptions section lets you review subscription information for the selected customer. You can switch between the available subscription types and use the information shown to understand the customer's current plans and upcoming billing.",
        },

        {
          type: "step",

          number: 8,

          title: "Open Billing / Subscriptions",

          description:
            "Click the Billing / Subscriptions icon, represented by the receipt, in the left sidebar menu of the User Dashboard.",
        },

        {
          type: "screenshot",

          src: BILLING_IMAGE,

          alt: "User Billing and Subscriptions section",

          caption:
            "Open Billing / Subscriptions from the User Dashboard sidebar.",
        },

        {
          type: "step",

          number: 9,

          title: "Select a subscription type",

          description:
            "From the sub-menu, select Mailboxes or Pre-warmed to view the corresponding subscription information for the customer.",
        },

        {
          type: "screenshot",

          src: BILLING_IMAGE,

          alt: "Mailbox and Pre-warmed subscription views",

          caption:
            "Select Mailboxes or Pre-warmed from the Billing / Subscriptions sub-menu.",
        },

        {
          type: "step",

          number: 10,

          title: "Review subscription details",

          description:
            "Review the customer's active plans and total seat counts. You can also search by domain or email and verify the upcoming billing amounts shown for the account.",
        },

        {
          type: "screenshot",

          src: BILLING_IMAGE,

          alt: "User subscription details",

          caption:
            "Review active plans, seat counts, search results, and upcoming billing information.",
        },
      ],
    },

    {
      id: "youre-all-set",

      title: "You're all set",

      description:
        "You now know how to navigate and inspect an individual customer's dashboard.",

      content: [
        {
          type: "paragraph",

          content:
            "The individual User Dashboard gives you a detailed view of a customer's account. From the overview, you can inspect domains, mailboxes, and upcoming billing, while the dedicated sections provide deeper management and monitoring options.",
        },

        {
          type: "paragraph",

          content:
            "Use the Mailboxes section to review and provision mailboxes, Domains to review domains and renewals, and Billing / Subscriptions to check active plans, seat counts, and upcoming billing amounts.",
        },

        {
          type: "callout",

          variant: "success",

          title: "You're all set",

          content:
            "You now know how to navigate an individual User Dashboard and inspect the customer's domains, mailboxes, and subscription information.",
        },
      ],
    },
  ],
};