const AUTO_TOPUP_IMAGE =
  "https://placehold.co/1200x600/f7f7fa/686773?text=Auto+Top-up";

const SMART_RECHARGE_IMAGE =
  "https://placehold.co/1200x600/f7f7fa/686773?text=Enable+Smart+Recharge";

const SMART_RECHARGE_CONFIRM_IMAGE =
  "https://placehold.co/1200x550/f7f7fa/686773?text=Confirm+Smart+Recharge";

export const smartRechargeArticle = {
  id: "wallet-smart-recharge",
  slug: "/wallet/smart-recharge",

  category: {
    id: "wallet",
    label: "Wallet",
  },

  title: "How to Enable Smart Recharge",

  description:
    "Enable Smart Recharge from your Auto Top-Up settings in the Wallet section.",

  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "Smart Recharge is available from the Auto Top-Up settings area of the CMR Wallet. You can start the setup from the Wallet page and confirm the action through the Smart Recharge pop-up.",

  sections: [
    {
      id: "enable-smart-recharge",
      title: "Enable Smart Recharge",

      description:
        "Follow these steps to enable Smart Recharge from your Wallet settings.",

      content: [
        {
          type: "paragraph",
          content:
            "To enable Smart Recharge, first open the Auto Top-Up settings on your Wallet page. The Smart Recharge option can then be enabled through the available action and confirmation prompt.",
        },

        {
          type: "step",
          number: 1,
          title: "Open the Auto Top-Up settings",
          description:
            "Go to the Wallet section of your CMR reseller portal and locate the Auto Top-Up area where the Smart Recharge option is available.",
        },

        {
          type: "screenshot",
          src: AUTO_TOPUP_IMAGE,
          alt: "CMR Auto Top-Up settings",
          caption:
            "Open the Auto Top-Up area from the Wallet page.",
        },

        {
          type: "step",
          number: 2,
          title: "Select Enable Smart Recharge",
          description:
            'Click the "Enable Smart Recharge" button from the Auto Top-Up settings area to begin the Smart Recharge setup.',
        },

        {
          type: "screenshot",
          src: SMART_RECHARGE_IMAGE,
          alt: "Enable Smart Recharge option",
          caption:
            'Select "Enable Smart Recharge" to begin the setup.',
        },

        {
          type: "step",
          number: 3,
          title: "Confirm Smart Recharge",
          description:
            'A confirmation pop-up will appear. Review the prompt and click "Enable Smart Recharge" to confirm the action.',
        },

        {
          type: "screenshot",
          src: SMART_RECHARGE_CONFIRM_IMAGE,
          alt: "Confirm Smart Recharge",
          caption:
            'Click "Enable Smart Recharge" in the confirmation pop-up.',
        },

        {
          type: "callout",
          variant: "success",
          title: "Smart Recharge enabled",
          content:
            "Smart Recharge is now enabled for your wallet.",
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
            "You can now access Smart Recharge from your Wallet's Auto Top-Up settings. If you need to review other wallet settings, return to the Wallet page.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "You now know how to enable Smart Recharge.",
        },
      ],
    },
  ],
};