export const usersOverviewArticle = {
  id: "users-overview",
  slug: "/users/overview",
  title: "Users Overview",
  description:
    "Understand the Users section and the information available for each customer.",

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
        "The Users section gives you a central place to view and manage your customers.",
      content: [
        {
          type: "paragraph",
          content:
            "The Users section displays the customers associated with your CMR platform. From here, you can search for a customer, review their account information, and open their User Dashboard.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=CMR+Users+Overview",
          alt: "CMR Users overview",
          caption:
            "The Users section provides a central view of your customers and their associated resources.",
        },
      ],
    },

    {
      id: "users-table",
      title: "Users Table",
      description:
        "Review the information displayed for each customer.",
      content: [
        {
          type: "step",
          number: 1,
          title: "User ID",
          description:
            "The User ID identifies the customer within your CMR platform.",
        },

        {
          type: "step",
          number: 2,
          title: "Email",
          description:
            "Displays the email address associated with the customer.",
        },

        {
          type: "step",
          number: 3,
          title: "Domains",
          description:
            "Shows the number of domains associated with the customer.",
        },

        {
          type: "step",
          number: 4,
          title: "Mailboxes",
          description:
            "Shows the number of mailboxes associated with the customer.",
        },

        {
          type: "step",
          number: 5,
          title: "Created At",
          description:
            "Shows when the customer was added to the platform.",
        },

        {
          type: "step",
          number: 6,
          title: "Actions",
          description:
            "Use the available action for a customer to open their User Dashboard.",
        },
      ],
    },

    {
      id: "add-users",
      title: "Adding Customers",
      description:
        "Create a new customer directly from the Users section.",
      content: [
        {
          type: "paragraph",
          content:
            "To create a new customer, select Add Users from the Users page. The Add User form lets you provide the customer's contact, company, phone, and address information.",
        },

        {
          type: "learn-more",
          items: [
            {
              title: "Add a User",
              description:
                "Learn how to complete the Add User form and create a new customer.",
              href: "/users/add-user",
            },
          ],
        },
      ],
    },

    {
      id: "find-users",
      title: "Finding a Customer",
      description:
        "Use the Users search to locate a specific customer.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the search field at the top of the Users page to find a customer without manually browsing the entire user list.",
        },

        {
          type: "learn-more",
          items: [
            {
              title: "Find and Search Users",
              description:
                "Learn how to search for customers and open the relevant User Dashboard.",
              href: "/users/search-users",
            },
          ],
        },
      ],
    },

    {
      id: "user-dashboard",
      title: "User Dashboard",
      description:
        "Open an individual customer's dashboard to review their resources and activity.",
      content: [
        {
          type: "paragraph",
          content:
            "Open a customer's User Dashboard from the Users list to view their domains, mailboxes, billing information, and recent activity.",
        },

        {
          type: "learn-more",
          items: [
            {
              title: "User Dashboard",
              description:
                "Understand the information and quick actions available for an individual customer.",
              href: "/users/user-dashboard",
            },
          ],
        },
      ],
    },
  ],
};