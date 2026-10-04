const WALLET_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552945/addBackupCard1.jpg";

const BACKUP_CARD_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552945/addBackupCard2.jpg";

const SETUP_BACKUP_CARD_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552945/addBackupCard3.jpg";

const STRIPE_CHECKOUT_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552945/addBackupCard4.jpg";

export const backupCardArticle = {
  id: "wallet-backup-card",
  slug: "/wallet/backup-card",

  category: {
    id: "wallet",
    label: "Wallet",
  },

  title: "How to Add a Backup Card",

  description:
    "Add an additional payment card to your CMR account through the Wallet page.",

  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "You can add a backup card from the Wallet page when you want to configure an additional payment option for your CMR account. The setup begins in CMR and continues through Stripe Checkout.",

  sections: [
    {
      id: "add-backup-card",
      title: "Add a backup card",

      description:
        "Follow these steps to set up a backup card for your account.",

      content: [
        {
          type: "paragraph",
          content:
            "The Backup Card option is available directly from the Wallet page. The setup process uses a confirmation pop-up before redirecting you to Stripe Checkout to enter your payment information.",
        },

        {
          type: "step",
          number: 1,
          title: "Open the Wallet page",
          description:
            "Sign in to your CMR reseller portal and navigate to the Wallet section. From here, you can access the payment and balance settings associated with your account.",
        },

        {
          type: "screenshot",
          src: WALLET_IMAGE,
          alt: "CMR Wallet page",
          caption:
            "Open the Wallet page to access your payment settings.",
        },

        {
          type: "step",
          number: 2,
          title: "Select Backup Card",
          description:
            'From the top-right corner of the Wallet page, click the "Backup Card" link to begin the setup process.',
        },

        {
          type: "screenshot",
          src: BACKUP_CARD_IMAGE,
          alt: "CMR Backup Card option",
          caption:
            'Click "Backup Card" from the top-right area of the Wallet page.',
        },

        {
          type: "step",
          number: 3,
          title: "Select Setup Backup Card",
          description:
            'A pop-up titled "Setup Backup Card" will appear. Review the prompt and click "Setup Backup Card" to continue with the setup.',
        },

        {
          type: "screenshot",
          src: SETUP_BACKUP_CARD_IMAGE,
          alt: "Setup Backup Card pop-up",
          caption:
            'Click "Setup Backup Card" in the confirmation pop-up.',
        },

        {
          type: "step",
          number: 4,
          title: "Add your payment information",
          description:
            "You will be redirected to Stripe Checkout. Use the Stripe Checkout page to add the payment information required for your backup card setup.",
        },

        {
          type: "screenshot",
          src: STRIPE_CHECKOUT_IMAGE,
          alt: "Stripe Checkout for backup card setup",
          caption:
            "Stripe Checkout is used to add the payment information for the backup card.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Backup card",
          content:
            "The backup card setup starts from CMR's Wallet page and continues through Stripe Checkout.",
        },
      ],
    },

    {
      id: "youre-all-set",
      title: "You're all set",

      content: [
        {
          type: "paragraph",
          content:
            "Once you've completed the Stripe Checkout flow, you have finished the backup card setup process.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "You now know how to set up a backup card from your CMR Wallet.",
        },
      ],
    },
  ],
};