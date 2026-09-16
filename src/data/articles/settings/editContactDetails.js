export const editContactDetailsArticle = {
  id: "settings-edit-contact-details",
  slug: "/settings/edit-contact-details",

  title: "How to Edit Contact Details",

  description:
    "Learn how to update the contact information associated with your Cold Mail Reseller workspace.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "The Contact section in Settings allows you to keep the contact information associated with your workspace accurate and up to date.",

  sections: [
    {
      id: "edit-contact-details",
      title: "Update your contact details",
      description:
        "Follow these steps to update the contact information associated with your workspace.",

      content: [
        {
          type: "step",
          number: 1,
          title: "Open Settings",
          description:
            "Go to the CMR Settings page at partners.coldmailreseller.com/settings.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552958/editContact1.jpg",
          alt: "CMR Settings page",
          caption:
            "Open the Settings page to manage your workspace information.",
        },

        {
          type: "step",
          number: 2,
          title: "Open Contact",
          description:
            "From the sidebar inside the Settings page, click Contact.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552959/editContact2.png",
          alt: "Contact settings",
          caption:
            "Open Contact from the Settings sidebar.",
        },

        {
          type: "step",
          number: 3,
          title: "Enter your contact information",
          description:
            "Enter your details, such as First Name, Last Name, Company Name, Phone Number, Address, and other available contact information. Once your details are updated, click Update Details.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552960/editContact3.png",
          alt: "Contact details form",
          caption:
            "Update your workspace contact information and save the changes.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Update your contact information to keep your workspace details accurate and up to date.",
        },
      ],
    },
  ],
};