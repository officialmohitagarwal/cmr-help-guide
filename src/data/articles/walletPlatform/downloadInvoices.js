const WALLET_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552956/downloadInvoice1.jpg";

const INVOICE_NUMBER_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552957/downloadInvoice2.png";

const STRIPE_INVOICE_IMAGE =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1789552957/downloadInvoice3.jpg";

export const downloadInvoicesArticle = {
  id: "wallet-download-invoices",
  slug: "/wallet/download-invoices",

  category: {
    id: "wallet",
    label: "Wallet",
    slug: "/wallet",
  },

  title: "How to Download Invoices",

  description:
    "Find invoices in CMR and download your invoice or receipt through Stripe.",

  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "The Wallet page provides access to your invoice information. You can find the invoice for a specific transaction, open it, and download the invoice or receipt from Stripe's Invoice Page.",

  sections: [
    {
      id: "download-invoices",
      title: "Download an Invoice",

      description:
        "Follow these steps to find and download an invoice for your transaction.",

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
          title: "Click the Invoice Number",
          description:
            "In the Invoice column, click the Invoice Number of the transaction for which you want to download the invoice.",

        },

        {
          type: "screenshot",
          src: INVOICE_NUMBER_IMAGE,
          alt: "Invoice Number in the CMR Wallet",
          caption:
            "Click the Invoice Number for the transaction you want to access.",
        },

        {
          type: "step",
          number: 3,
          title: "Download the invoice or receipt",
          description:
            'You will be redirected to Stripe\'s Invoice Page. Click "Download Invoice" or "Download Receipt" to download your document.',
        },

        {
          type: "screenshot",
          src: STRIPE_INVOICE_IMAGE,
          alt: "Stripe Invoice Page with download options",
          caption:
            'On Stripe\'s Invoice Page, click "Download Invoice" or "Download Receipt".',
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
            "You can now access and download invoices for your CMR transactions whenever you need them.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Easily access and download invoices for your transactions whenever you need them.",
        },
      ],
    },
  ],
};