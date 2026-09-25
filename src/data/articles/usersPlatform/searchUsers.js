export const searchUsersArticle = {
  id: "search-users",
  slug: "/users/search-users",
  title: "Find and Search Users",
  description:
    "Learn how to find customers from the Users section and open the relevant User Dashboard.",

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
        "The Users section provides a searchable list of customers associated with your CMR platform.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the search field in the Users section to quickly find a customer without manually browsing through the user list. Once you find the relevant customer, you can open their User Dashboard to review their resources and activity.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=CMR+Search+Users",
          alt: "CMR Users search",
          caption:
            "Use the search field to quickly find a customer in the Users section.",
        },
      ],
    },

    {
      id: "search-users",
      title: "Search for a User",
      description:
        "Use the search field to narrow down the users displayed in the table.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Open Users",
          description:
            "Open the Users section from the platform sidebar.",
        },

        {
          type: "step",
          number: 2,
          title: "Select the search field",
          description:
            "Select the search field at the top of the Users page.",
        },

        {
          type: "step",
          number: 3,
          title: "Enter the user's information",
          description:
            "Enter the relevant customer information into the search field.",
        },

        {
          type: "step",
          number: 4,
          title: "Review the results",
          description:
            "Review the users displayed in the table and identify the customer you need.",
        },
      ],
    },

    {
      id: "user-information",
      title: "Understanding the User List",
      description:
        "Review the information displayed for each customer in the Users table.",
      content: [
        {
          type: "step",
          number: 1,
          title: "User ID",
          description:
            "Identifies the customer within your CMR platform.",
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
            "Shows when the customer was created.",
        },
      ],
    },

    {
      id: "open-user-dashboard",
      title: "Open the User Dashboard",
      description:
        "Open an individual customer's dashboard from the Users list.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Find the customer",
          description:
            "Search for the customer and locate the relevant row in the Users table.",
        },

        {
          type: "step",
          number: 2,
          title: "Open the User Dashboard",
          description:
            "Select the available action for the customer to open their User Dashboard.",
        },

        {
          type: "step",
          number: 3,
          title: "Review customer information",
          description:
            "Use the User Dashboard to review the customer's domains, mailboxes, billing information, and recent activity.",
        },
      ],
    },

    {
      id: "search-tips",
      title: "Search Tips",
      description:
        "Use specific customer information to locate users more efficiently.",
      content: [
        {
          type: "paragraph",
          content:
            "When you have many customers, use information that uniquely identifies the user to narrow the results quickly.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Tip",
          content:
            "If you already know the customer's User ID or email address, use that information when searching to locate the correct user more quickly.",
        },
      ],
    },
  ],
};