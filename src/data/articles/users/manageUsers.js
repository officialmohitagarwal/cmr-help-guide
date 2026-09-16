const USERS_IMAGE =
  "https://placehold.co/1200x700/f7f7fa/686773?text=CMR+Users";

const SEARCH_USERS_IMAGE =
  "https://placehold.co/1200x600/f7f7fa/686773?text=Search+Users";

const ADD_USER_IMAGE =
  "https://placehold.co/1200x650/f7f7fa/686773?text=Add+Users";

const COPY_USER_IMAGE =
  "https://placehold.co/1200x600/f7f7fa/686773?text=Copy+User+Details";

const USER_DASHBOARD_IMAGE =
  "https://placehold.co/1200x650/f7f7fa/686773?text=User+Dashboard";

export const manageUsersArticle = {
  id: "users-manage-users",

  slug: "/users/manage-users",

  category: {
    id: "users",
    label: "Users",
  },

  title: "How to Manage Users",

  description:
    "Learn how to view, search, add, copy details, and access individual customer accounts from the Users section.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "The Users page lists every end-customer under your partner account — the people you're reselling mailboxes to. From here, you can search for a specific customer, see how many domains and mailboxes they own, and jump directly into their individual dashboard view.",

  sections: [
    {
      id: "open-users",

      title: "Open the Users section",

      description:
        "Access the user registry to view the customers associated with your partner account.",

      content: [
        {
          type: "paragraph",

          content:
            "The Users page provides a central view of the end-customers associated with your partner account. The user registry displays your customer accounts in a table, making it easy to locate an account and access the available actions for that user.",
        },

        {
          type: "step",

          number: 1,

          title: "Open the Users section",

          description:
            "From the CMR partner portal, click the Users icon in the left sidebar. This opens the user registry table where you can view the customers associated with your partner account.",
        },

        {
          type: "screenshot",

          src: USERS_IMAGE,

          alt: "CMR Users section",

          caption:
            "Click Users in the left sidebar to open the user registry.",
        },
      ],
    },

    {
      id: "search-users",

      title: "Search and filter user accounts",

      description:
        "Quickly find a specific customer using their name, email address, or User ID.",

      content: [
        {
          type: "paragraph",

          content:
            "If you manage multiple customer accounts, the Users page makes it easy to find a specific account without manually going through the entire table. The search field can be used to narrow the list using information associated with the customer.",
        },

        {
          type: "step",

          number: 2,

          title: "Search for a customer",

          description:
            "Use the Search by Name, Email, or User ID bar above the table. Enter the customer's name, email address, or User ID to filter the user list and locate the account you need.",
        },

        {
          type: "screenshot",

          src: SEARCH_USERS_IMAGE,

          alt: "Search users by name email or User ID",

          caption:
            "Use Search by Name, Email, or User ID to quickly locate a customer account.",
        },

        {
          type: "callout",

          variant: "tip",

          title: "Search tip",

          content:
            "If you already know the customer's email address or User ID, using it in the search field can help you locate the account more directly.",
        },
      ],
    },

    {
      id: "add-user",

      title: "Register a new user",

      description:
        "Create a new customer account directly from the Users section.",

      content: [
        {
          type: "paragraph",

          content:
            "When you have a new customer to add to your partner account, you can register them directly from the Users page. The Add Users option opens the user creation flow where you can enter the customer's details and confirm the account creation.",
        },

        {
          type: "step",

          number: 3,

          title: "Select Add Users",

          description:
            'Click the "+ Add Users" button in the top-right corner of the Users page to begin registering a new customer.',
        },

        {
          type: "screenshot",

          src: ADD_USER_IMAGE,

          alt: "Add Users button",

          caption:
            'Click "+ Add Users" in the top-right corner of the Users page.',
        },

        {
          type: "step",

          number: 4,

          title: "Enter the customer details",

          description:
            "Fill in the customer details requested in the user creation flow. Review the information you've entered to make sure the new account is being created with the correct customer information.",
        },

        {
          type: "screenshot",

          src: ADD_USER_IMAGE,

          alt: "Add new user form",

          caption:
            "Enter the customer details in the user creation flow.",
        },

        {
          type: "step",

          number: 5,

          title: "Confirm user creation",

          description:
            "After entering the required customer information, confirm the creation to register the new user under your partner account.",
        },

        {
          type: "callout",

          variant: "success",

          title: "User created",

          content:
            "Once the creation is confirmed, the new customer is registered under your partner account and can be accessed from the Users section.",
        },
      ],
    },

    {
      id: "copy-user-details",

      title: "Copy User IDs and email addresses",

      description:
        "Copy important customer identifiers directly from the user table.",

      content: [
        {
          type: "paragraph",

          content:
            "The Users table also allows you to quickly copy customer identifiers. This is useful when you need to reuse a customer's User ID or email address elsewhere while working with their account.",
        },

        {
          type: "step",

          number: 6,

          title: "Locate the User ID or Email",

          description:
            "Find the customer you need in the Users table and locate the User ID or Email value displayed in their row.",
        },

        {
          type: "screenshot",

          src: COPY_USER_IMAGE,

          alt: "User ID and email in Users table",

          caption:
            "Locate the User ID or Email value in the customer's row.",
        },

        {
          type: "step",

          number: 7,

          title: "Copy the user detail",

          description:
            "Click or hover over the User ID or Email string in the table to access the copy action. The selected value can then be copied to your clipboard.",
        },

        {
          type: "screenshot",

          src: COPY_USER_IMAGE,

          alt: "Copy User ID or email",

          caption:
            "Click or hover over the User ID or Email to copy the value.",
        },

        {
          type: "callout",

          variant: "tip",

          title: "Quick access to user details",

          content:
            "Copying the User ID or email directly from the table saves you from manually selecting and re-entering customer information.",
        },
      ],
    },

    {
      id: "user-dashboard",

      title: "Open an individual User Dashboard",

      description:
        "Access a customer's individual control panel directly from the Users table.",

      content: [
        {
          type: "paragraph",

          content:
            "The Users section also provides a direct way to open an individual customer's control panel. From the Actions column, you can select User Dashboard and move from the customer registry directly into that user's account view.",
        },

        {
          type: "step",

          number: 8,

          title: "Find the customer",

          description:
            "Locate the customer whose individual dashboard you want to access. If the Users table contains many accounts, use the search field to find the customer more quickly.",
        },

        {
          type: "screenshot",

          src: USERS_IMAGE,

          alt: "Customer row in Users table",

          caption:
            "Locate the customer account you want to manage.",
        },

        {
          type: "step",

          number: 9,

          title: "Select User Dashboard",

          description:
            'In the Actions column next to the selected customer, click "User Dashboard" to open that customer\'s individual control panel.',
        },

        {
          type: "screenshot",

          src: USER_DASHBOARD_IMAGE,

          alt: "Individual User Dashboard",

          caption:
            'Select "User Dashboard" from the Actions column to open the customer control panel.',
        },

        {
          type: "callout",

          variant: "info",

          title: "Manage customers from one place",

          content:
            "The Users section gives you a central place to find customer accounts and jump directly into an individual User Dashboard.",
        },
      ],
    },

    {
      id: "youre-all-set",

      title: "You're all set",

      description:
        "You now know how to manage customer accounts from the Users section.",

      content: [
        {
          type: "paragraph",

          content:
            "You can now open the Users section, search for customers, register new users, copy User IDs or email addresses, and access individual User Dashboards.",
        },

        {
          type: "callout",

          variant: "success",

          title: "You're all set",

          content:
            "You now know how to create, locate, copy, and access customer accounts directly.",
        },
      ],
    },
  ],
};