export const addUserArticle = {
  id: "add-user",
  slug: "/users/add-user",
  title: "Add a User",
  description:
    "Learn how to create a new customer from the Users section and provide their contact and address information.",

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
        "Add a User lets you create a new customer and provide the information required for their account.",
      content: [
        {
          type: "paragraph",
          content:
            "Use the Add Users option from the Users section to create a new customer. The form collects the customer's contact, company, phone, and address information.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=CMR+Add+User",
          alt: "CMR Add User form",
          caption:
            "The Add User form collects contact, company, phone, and address information.",
        },
      ],
    },

    {
      id: "opening-add-user",
      title: "Open the Add User Form",
      description:
        "Start creating a customer from the Users section.",
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
          title: "Select Add Users",
          description:
            "Select the Add Users button in the top-right corner of the Users page.",
        },

        {
          type: "step",
          number: 3,
          title: "Enter the user information",
          description:
            "Complete the required fields in the User Contact Information form.",
        },
      ],
    },

    {
      id: "contact-information",
      title: "Contact Information",
      description:
        "Provide the customer's basic contact and company information.",
      content: [
        {
          type: "step",
          number: 1,
          title: "First Name",
          description:
            "Enter the customer's first name.",
        },

        {
          type: "step",
          number: 2,
          title: "Last Name",
          description:
            "Enter the customer's last name.",
        },

        {
          type: "step",
          number: 3,
          title: "Email",
          description:
            "Enter the customer's email address.",
        },

        {
          type: "step",
          number: 4,
          title: "Company Name",
          description:
            "Enter the customer's company name.",
        },

        {
          type: "step",
          number: 5,
          title: "Phone Number",
          description:
            "Enter the customer's phone number and select the appropriate country or calling code.",
        },
      ],
    },

    {
      id: "address-information",
      title: "Address Information",
      description:
        "Enter the customer's address and location details.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Address 1",
          description:
            "Enter the customer's primary address.",
        },

        {
          type: "step",
          number: 2,
          title: "Address 2",
          description:
            "Add additional address information when applicable.",
        },

        {
          type: "step",
          number: 3,
          title: "City",
          description:
            "Enter the customer's city.",
        },

        {
          type: "step",
          number: 4,
          title: "Postal Code",
          description:
            "Enter the customer's postal or ZIP code.",
        },

        {
          type: "step",
          number: 5,
          title: "Country",
          description:
            "Select the customer's country from the country selector.",
        },

        {
          type: "step",
          number: 6,
          title: "State/Region",
          description:
            "Select the appropriate state or region after selecting the country.",
        },
      ],
    },

    {
      id: "create-user",
      title: "Create the User",
      description:
        "Submit the completed form to create the customer.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Review the information",
          description:
            "Check the contact, company, phone, and address information you entered.",
        },

        {
          type: "step",
          number: 2,
          title: "Select Create User",
          description:
            "Select Create User to submit the form.",
        },

        {
          type: "step",
          number: 3,
          title: "Open the new user",
          description:
            "After the user is created, locate the customer in the Users list and open their User Dashboard when you need to manage their resources.",
        },
      ],
    },

    {
      id: "required-fields",
      title: "Required Fields",
      description:
        "The form marks required fields with an asterisk.",
      content: [
        {
          type: "paragraph",
          content:
            "Fields marked with an asterisk (*) are required before the user can be created. Complete the required contact and address information before selecting Create User.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Tip",
          content:
            "Select the country before selecting a State/Region. The State/Region field uses the selected country to provide the available options.",
        },
      ],
    },
  ],
};