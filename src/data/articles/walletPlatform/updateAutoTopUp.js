const AUTO_TOPUP_IMAGE =
  "https://placehold.co/1200x600/f7f7fa/686773?text=Auto+Top-up";

const UPDATE_SETTINGS_IMAGE =
  "https://placehold.co/1200x600/f7f7fa/686773?text=Update+Settings";

const UPDATE_AUTO_TOPUP_IMAGE =
  "https://placehold.co/1200x600/f7f7fa/686773?text=Update+Auto+Topup";

export const updateAutoTopUpArticle = {
  id: "wallet-update-auto-top-up",
  slug: "/wallet/update-auto-top-up",

  category: {
    id: "wallet",
    label: "Wallet",
  },

  title: "How to Update Auto Top-Up Settings",

  description:
    "Change your existing Auto Top-Up configuration from the Wallet page.",

  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "After enabling Auto Top-Up, you can update its settings from the Wallet page whenever you need to change your existing configuration. The update process lets you edit the available settings and save the changes.",

  sections: [
    {
      id: "update-auto-top-up",
      title: "Update Auto Top-Up settings",

      description:
        "Modify your existing Auto Top-Up configuration in a few steps.",

      content: [
        {
          type: "paragraph",
          content:
            "You don't need to start the Auto Top-Up setup again when you want to change your configuration. Instead, use the Update Settings option available in the Auto Top-Up area of the Wallet page.",
        },

        {
          type: "step",
          number: 1,
          title: "Open your Auto Top-Up settings",
          description:
            "Go to the Wallet section of your CMR reseller portal and locate the Auto Top-Up area containing your current configuration.",
        },

        {
          type: "screenshot",
          src: AUTO_TOPUP_IMAGE,
          alt: "CMR Auto Top-Up settings",
          caption:
            "Locate the Auto Top-Up area on the Wallet page.",
        },

        {
          type: "step",
          number: 2,
          title: "Select Update Settings",
          description:
            'Click the "Update Settings" button to open the configuration options for your existing Auto Top-Up setup.',
        },

        {
          type: "screenshot",
          src: UPDATE_SETTINGS_IMAGE,
          alt: "CMR Update Settings button",
          caption:
            'Click "Update Settings" to modify your Auto Top-Up configuration.',
        },

        {
          type: "step",
          number: 3,
          title: "Edit your settings",
          description:
            "Review the available Auto Top-Up settings and make the changes you want to apply to your existing configuration.",
        },

        {
          type: "screenshot",
          src: UPDATE_SETTINGS_IMAGE,
          alt: "CMR Auto Top-Up settings editor",
          caption:
            "Edit the available Auto Top-Up settings according to your requirements.",
        },

        {
          type: "step",
          number: 4,
          title: "Save the updated settings",
          description:
            'After making your changes, click the "Update Auto Topup" button to save the updated configuration.',
        },

        {
          type: "screenshot",
          src: UPDATE_AUTO_TOPUP_IMAGE,
          alt: "Update Auto Top-Up button",
          caption:
            'Click "Update Auto Topup" to save your changes.',
        },

        {
          type: "callout",
          variant: "info",
          title: "Keep your settings up to date",
          content:
            "Review your Auto Top-Up configuration whenever you need to change your existing wallet settings.",
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
            "Your Auto Top-Up configuration can now be managed directly from the Wallet page. Whenever you need to make another change, use Update Settings and save the new configuration.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "You now know how to update your Auto Top-Up settings.",
        },
      ],
    },
  ],
};