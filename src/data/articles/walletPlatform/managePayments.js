const WALLET_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552973/managePayments1.jpg";

const MANAGE_PAYMENT_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552974/managePayments2.png";

const STRIPE_BILLING_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552974/managePayments3.png";

export const managePaymentsArticle = {
  id: "wallet-manage-payments",
  slug: "/wallet/manage-payments",

  category: {
    id: "wallet",
    label: "Wallet",
  },

  title: "How to Manage Payments",

  description:
    "Manage payment methods, make payments toward invoices, and access your Invoice History through Stripe.",

  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "CMR provides access to your payment management options from the Wallet page. Through the Manage Payment option, you are redirected to Stripe's Billing Page, where you can manage available payment and invoice-related options.",

  sections: [
    {
      id: "manage-payments",
      title: "Manage your payments",

      description:
        "Access your payment and billing options from the Wallet page.",

      content: [
        {
          type: "paragraph",
          content:
            "The Manage Payment option is available from the Wallet page. It provides a direct path to the billing area associated with your CMR account, where you can access payment-related options.",
        },

        {
          type: "step",
          number: 1,
          title: "Open the Wallet page",
          description:
            "Sign in to your CMR reseller portal and navigate to the Wallet section. The Wallet page contains the balance and payment management options for your account.",
        },

        {
          type: "screenshot",
          src: WALLET_IMAGE,
          alt: "CMR Wallet page",
          caption:
            "Open the Wallet section to access your payment management options.",
        },

        {
          type: "step",
          number: 2,
          title: "Select Manage Payment",
          description:
            'From the top-right corner of the Wallet page, click the "Manage Payment" link. This opens the billing management flow for your account.',
        },

        {
          type: "screenshot",
          src: MANAGE_PAYMENT_IMAGE,
          alt: "CMR Manage Payment option",
          caption:
            'Click "Manage Payment" from the top-right corner of the Wallet page.',
        },

        {
          type: "step",
          number: 3,
          title: "Open Stripe's Billing Page",
          description:
            "After selecting Manage Payment, you will be redirected to Stripe's Billing Page. This is where you can access the available billing and payment options associated with your account.",
        },

        {
          type: "screenshot",
          src: STRIPE_BILLING_IMAGE,
          alt: "Stripe Billing Page",
          caption:
            "Stripe's Billing Page provides access to your available payment and invoice options.",
        },

        {
          type: "step",
          number: 4,
          title: "Use the available billing options",
          description:
            "From Stripe's Billing Page, you can make a payment towards an invoice, add a payment method, or check your Invoice History.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Payment management",
          content:
            "The Manage Payment flow takes you from CMR's Wallet page to Stripe's Billing Page, where the available payment and invoice management options are provided.",
        },
      ],
    },

    {
      id: "youre-all-set",
      title: "You're all set",

      description:
        "You now know where to manage your CMR payment information.",

      content: [
        {
          type: "paragraph",
          content:
            "Whenever you need to manage payment information, return to the Wallet page and select Manage Payment. From there, Stripe's Billing Page provides access to the available billing options.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "You now know how to access and manage your payment options through CMR.",
        },
      ],
    },
  ],
};