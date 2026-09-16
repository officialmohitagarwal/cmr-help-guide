const WALLET_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552948/autotopup1.jpg";

const ENABLE_AUTO_TOPUP_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552949/autotopup2.jpg";

const AUTO_TOPUP_ENABLED_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552949/autotopup3.jpg";

const UPDATE_SETTINGS_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552950/autotopup4.png";

const UPDATE_AUTO_TOPUP_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552950/autotopup5.png";

const ENABLE_SMART_RECHARGE_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552951/autotopup6.jpg";

const SMART_RECHARGE_CONFIRMATION_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552951/autotopup7.jpg";

export const autoTopUpArticle = {
  id: "wallet-auto-top-up",
  slug: "/wallet/auto-top-up",

  category: {
    id: "wallet",
    label: "Wallet",
    slug: "/wallet",
  },

  title: "How to Enable Auto Top-Up",

  description:
    "Enable Auto Top-Up, update its settings, and enable Smart Recharge from your Wallet.",

  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Auto Top-Up lets you automatically replenish your CMR wallet balance when it reaches your selected threshold. Follow the steps below to enable Auto Top-Up, update its settings, and enable Smart Recharge.",

  sections: [
    {
      id: "enable-auto-top-up",
      title: "Enable Auto Top-Up",

      description:
        "Turn on Auto Top-Up from the Wallet page to automatically replenish your wallet balance.",

      content: [
        {
          type: "step",
          number: 1,
          title: "Go to the Wallet page",
          description:
            "Go to the Wallet section of your CMR reseller portal.",

          link: {
            label: "Open Wallet",
            href: "https://partners.coldmailreseller.com/wallet",
          },
        },

        {
          type: "screenshot",
          src: WALLET_IMAGE,
          alt: "CMR Wallet page",
          caption:
            "Open the Wallet section of your CMR reseller portal.",
        },

        {
          type: "step",
          number: 2,
          title: "Enable Auto-Topup",
          description:
            'Click the "Enable Auto-Topup" toggle.',
        },

        {
          type: "screenshot",
          src: ENABLE_AUTO_TOPUP_IMAGE,
          alt: "Enable Auto-Topup toggle",
          caption:
            'Click the "Enable Auto-Topup" toggle to enable automatic wallet top-ups.',
        },

        {
          type: "step",
          number: 3,
          title: "Confirm Auto-Topup is enabled",
          description:
            "Your Auto-Topup is now enabled.",
        },

        {
          type: "screenshot",
          src: AUTO_TOPUP_ENABLED_IMAGE,
          alt: "Auto-Topup enabled",
          caption:
            "Auto-Topup is now enabled on your wallet.",
        },
      ],
    },

    {
      id: "update-auto-top-up",
      title: "Update Auto-Topup Settings",

      description:
        "Change your Auto-Topup settings according to your preferred configuration.",

      content: [
        {
          type: "step",
          number: 4,
          title: "Open Update Settings",
          description:
            'If you want to update your Auto-Topup configuration, click the "Update Settings" button.',
        },

        {
          type: "screenshot",
          src: UPDATE_SETTINGS_IMAGE,
          alt: "Update Settings button",
          caption:
            'Click "Update Settings" to modify your Auto-Topup configuration.',
        },

        {
          type: "step",
          number: 5,
          title: "Update your Auto-Topup settings",
          description:
            'Edit the settings according to your desired preference and click the "Update Auto Topup" button.',
        },

        {
          type: "screenshot",
          src: UPDATE_AUTO_TOPUP_IMAGE,
          alt: "Update Auto Topup settings",
          caption:
            'Edit your settings and click "Update Auto Topup" to save the changes.',
        },
      ],
    },

    {
      id: "enable-smart-recharge",
      title: "Enable Smart Recharge",

      description:
        "Enable Smart Recharge from the Auto-Topup settings.",

      content: [
        {
          type: "step",
          number: 6,
          title: "Enable Smart Recharge",
          description:
            'Click the "Enable Smart Recharge" button.',
        },

        {
          type: "screenshot",
          src: ENABLE_SMART_RECHARGE_IMAGE,
          alt: "Enable Smart Recharge button",
          caption:
            'Click "Enable Smart Recharge" to enable the feature.',
        },

        {
          type: "step",
          number: 7,
          title: "Confirm Smart Recharge",
          description:
            'A confirmation pop-up will appear. Click the "Enable Smart Recharge" button.',
        },

        {
          type: "screenshot",
          src: SMART_RECHARGE_CONFIRMATION_IMAGE,
          alt: "Enable Smart Recharge confirmation",
          caption:
            'Click "Enable Smart Recharge" in the confirmation pop-up.',
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
            "Auto-Topup is now enabled. You can update your Auto-Topup settings whenever required and enable Smart Recharge from the available options.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Your wallet is now configured for automatic top-ups.",
        },
      ],
    },
  ],
};