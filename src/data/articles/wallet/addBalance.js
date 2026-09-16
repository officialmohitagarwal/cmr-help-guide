const WALLET_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552947/addWalletBalance1.jpg";

const ADD_BALANCE_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552948/addWalletBalance2.png";

const PAYMENT_FLOW_IMAGE =
  "https://placehold.co/1200x650/f7f7fa/686773?text=Payment+Flow";

export const addBalanceArticle = {
  id: "wallet-add-balance",
  slug: "/wallet/add-balance",

  category: {
    id: "wallet",
    label: "Wallet",
  },

  title: "How to Add Balance to Your Wallet",

  description:
    "Add funds to your CMR wallet and keep your account ready for upcoming purchases and customer orders.",

  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Your CMR wallet is used to maintain the balance available for activity on your reseller account. When you need additional funds, you can add more balance directly from the Wallet page. This guide walks you through where to find the option and how to proceed with the wallet top-up flow.",

  sections: [
    {
      id: "add-wallet-balance",
      title: "Add balance to your wallet",

      description:
        "Follow the steps below to add funds to your CMR wallet.",

      content: [
        {
          type: "paragraph",
          content:
            "Adding balance starts from the Wallet section of your CMR reseller portal. Before beginning, make sure you are signed in to the correct account and are ready to complete the payment flow.",
        },

        {
          type: "step",
          number: 1,
          title: "Open the Wallet page",
          description:
            "Sign in to your CMR reseller portal and open the Wallet section from the main navigation. The Wallet page is where you can review your current balance and access the available balance and payment options.",
        },

        {
          type: "screenshot",
          src: WALLET_IMAGE,
          alt: "CMR Wallet page",
          caption:
            "Open the Wallet section from your CMR reseller portal.",
        },

        {
          type: "step",
          number: 2,
          title: "Select Add More Balance",
          description:
            'From the top-right corner of the Wallet page, locate and click the "+ Add More Balance" button. This starts the process of adding funds to your wallet.',
        },

        {
          type: "screenshot",
          src: ADD_BALANCE_IMAGE,
          alt: "CMR Add More Balance button",
          caption:
            'Click "+ Add More Balance" in the top-right corner of the Wallet page.',
        },

        {
          type: "step",
          number: 3,
          title: "Continue through the payment flow",
          description:
            "After selecting Add More Balance, continue through the payment flow presented to you to complete the wallet top-up. Follow the information shown on screen and complete the payment process.",
        },

        {
          type: "screenshot",
          src: PAYMENT_FLOW_IMAGE,
          alt: "CMR wallet payment flow",
          caption:
            "Continue through the payment flow to complete your wallet top-up.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Keep your wallet ready",
          content:
            "Keeping sufficient balance in your wallet helps you stay ready for upcoming purchases and customer orders.",
        },
      ],
    },

    {
      id: "youre-all-set",
      title: "You're all set",

      description:
        "You now know how to add balance to your CMR wallet.",

      content: [
        {
          type: "paragraph",
          content:
            "You can return to the Wallet page whenever you need to add additional funds. Use the Add More Balance option to start the process and complete the payment flow shown to you.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "You now know how to add balance to your CMR wallet.",
        },
      ],
    },
  ],
};