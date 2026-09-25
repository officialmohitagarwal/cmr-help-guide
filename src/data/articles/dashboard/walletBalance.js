export const walletBalanceArticle = {
  id: "wallet-balance",
  slug: "/dashboard/wallet-balance",
  title: "Wallet Balance",
  description:
    "Understand where your CMR wallet balance appears on the dashboard.",

  category: {
    id: "dashboard",
    label: "Dashboard",
    slug: "/dashboard",
  },

  sections: [
    {
      id: "overview",
      title: "Introduction",
      description:
        "The dashboard provides quick visibility into your available wallet balance.",
      content: [
        {
          type: "paragraph",
          content:
            "Your CMR wallet balance represents the funds currently available in your platform wallet. The dashboard provides quick visibility into this balance without requiring you to open the Wallet section.",
        },

        {
          type: "screenshot",
          src: "https://res.cloudinary.com/jzwc4txa/image/upload/v1790321728/Dashboard_wallet.png",
          alt: "CMR Dashboard wallet balance",
          caption:
            "The wallet balance is displayed in the dashboard overview and top-right area.",
        },
      ],
    },

    {
      id: "where-to-find-balance",
      title: "Where to Find Your Balance",
      description:
        "The dashboard displays your balance in two locations.",
      content: [
        {
          type: "step",
          number: 1,
          title: "Dashboard Overview",
          description:
            "The Wallet Balance card shows your currently available wallet balance.",
        },

        {
          type: "step",
          number: 2,
          title: "Top-right Balance",
          description:
            "Your current wallet balance is also displayed in the top-right area of the dashboard.",
        },
      ],
    },

    {
      id: "detailed-wallet-information",
      title: "View Detailed Wallet Information",
      description:
        "Open the Wallet section when you need more detailed information.",
      content: [
        {
          type: "paragraph",
          content:
            "For detailed wallet information, including wallet activity and charges, open the Wallet section from the platform sidebar.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Tip",
          content:
            "The dashboard balance is intended for quick visibility. Use the Wallet section when you need to review detailed wallet information.",
        },
      ],
    },
  ],
};