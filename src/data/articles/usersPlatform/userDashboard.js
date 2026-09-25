export const userDashboardArticle = {
  id: "user-dashboard",
  slug: "/users/user-dashboard",
  title: "User Dashboard",
  description:
    "Understand the User Dashboard and the information available for each customer.",

  category: {
    id: "users",
    label: "Users",
    slug: "/users",
  },

  sections: [
    {
      id: "overview",
      title: "Introduction",
      description:
        "The User Dashboard gives you a focused view of a customer's domains, mailboxes, billing, and recent activity.",
      content: [
        {
          type: "paragraph",
          content:
            "The User Dashboard provides a centralized view of an individual customer's CMR resources and activity. From here, you can review their domains, mailboxes, upcoming billing, and recent activity, as well as access common management areas.",
        },

        {
          type: "screenshot",
           src: "https://placehold.co/1600x900?text=CMR+User+Dashboard",
          alt: "CMR User Dashboard",
          caption:
            "The User Dashboard brings together customer resources, activity, billing information, and quick actions.",
        },
      ],
    },

    {
      id: "dashboard-overview",
      title: "Dashboard Overview",
      description:
        "Review the key information displayed at the top of the User Dashboard.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Domains",
          description:
            "View the total number of domains associated with the customer.",
        },

        {
          type: "step",
          number: 2,
          title: "Mailboxes",
          description:
            "View the customer's mailbox totals, including active, pre-warmed, and scheduled mailboxes.",
        },

        {
          type: "step",
          number: 3,
          title: "Next Billing",
          description:
            "View the customer's next subscription payment and the scheduled billing date.",
        },
      ],
    },

    {
      id: "mailbox-activity",
      title: "Recent Mailbox Activities",
      description:
        "Review recent activity associated with the customer's mailboxes.",
      content: [
        {
          type: "paragraph",
          content:
            "The Recent Mailbox Activities section shows recent mailbox-related activity for the customer.",
        },

        {
          type: "step",
          number: 1,
          title: "Message",
          description:
            "View the activity message associated with the mailbox event.",
        },

        {
          type: "step",
          number: 2,
          title: "Email",
          description:
            "View the email address associated with the activity.",
        },

        {
          type: "step",
          number: 3,
          title: "Date",
          description:
            "View when the activity occurred.",
        },

        {
          type: "paragraph",
          content:
            "When more activity is available, use Show more to view additional mailbox activity.",
        },
      ],
    },

    {
      id: "domain-activity",
      title: "Recent Domain Activities",
      description:
        "Review recent activity associated with the customer's domains.",
      content: [
        {
          type: "paragraph",
          content:
            "The Recent Domain Activities section provides a view of recent domain-related activity for the customer.",
        },

        {
          type: "step",
          number: 1,
          title: "Message",
          description:
            "View the activity message associated with the domain event.",
        },

        {
          type: "step",
          number: 2,
          title: "Domain",
          description:
            "View the domain associated with the activity.",
        },

        {
          type: "step",
          number: 3,
          title: "Date",
          description:
            "View when the activity occurred.",
        },
      ],
    },

    {
      id: "quick-actions",
      title: "Quick Actions",
      description:
        "Access commonly used areas for the customer directly from the User Dashboard.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Manage Subscriptions",
          description:
            "Open the customer's subscription management area.",
        },

        {
          type: "step",
          number: 2,
          title: "Domains",
          description:
            "Open the customer's domain management area.",
        },

        {
          type: "step",
          number: 3,
          title: "Mailboxes",
          description:
            "Open the customer's mailbox management area.",
        },
      ],
    },

    {
      id: "workspace-provider",
      title: "Workspace Provider",
      description:
        "The User Dashboard provides workspace provider options for Google Workspace and Microsoft 365.",
      content: [
        {
          type: "paragraph",
          content:
            "The dashboard displays Google Workspace and Microsoft 365 as the available workspace provider options.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Note",
          content:
            "The provider options shown in the dashboard depend on the workspace configuration available for the customer.",
        },
      ],
    },
  ],
};