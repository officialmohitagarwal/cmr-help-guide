export const updatePaymentMethodArticle = {
  id: "settings-update-payment-method",
  slug: "/settings/update-payment-method",

  title: "How to Update Payment Method",

  description:
    "This guide explains how to replace your existing payment method from the Settings page and keep your account payment details up to date.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "You can update your payment method directly from the Settings page. This allows you to replace your existing payment details and keep your account ready to process payments successfully.",

  sections: [
    {
      id: "update-payment-method",
      title: "Update your payment method",
      description:
        "Follow these steps to replace the payment method associated with your account.",

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
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552977/updatePayment1.jpg",
          alt: "CMR Settings page",
          caption:
            "Open the Settings page to manage your account configuration.",
        },

        {
          type: "step",
          number: 2,
          title: "Click Update Payment Method",
          description:
            "From the right side of the Settings page, click the Update Payment Method button.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552980/updatePayment2.png",
          alt: "Update Payment Method button",
          caption:
            "Click Update Payment Method to change your existing payment details.",
        },

        {
          type: "step",
          number: 3,
          title: "Update your payment information",
          description:
            "You will be redirected to Stripe's Checkout page, where you can update your payment information.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552978/updatePayment3.jpg",
          alt: "Stripe Checkout payment page",
          caption:
            "Update your payment information through Stripe's Checkout page.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Update your payment method to keep your payment details current and ensure smooth transactions.",
        },
      ],
    },
  ],
};