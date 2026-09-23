const WHITELABEL_SCREENSHOTS = {
  platformSelection:
    "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182168/Whitelabel_1.png",

  stripeConnect:
    "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182168/Whitelabel_2.png",

  contactInformation:
    "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182169/Whitelabel_3.png",

  walletSettings:
    "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182169/Whitelabel_4.png",

  productDetails:
    "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182169/Whitelabel_5.png",

  pricingDetailsTop:
    "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182169/Whitelabel_6.png",

  pricingDetailsMailboxes:
    "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182170/Whitelabel_7.png",

  dashboardDomain:
    "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182169/Whitelabel_8.png",

  dashboardConfiguration:
    "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182170/Whitelabel_9.png",

  completed:
    "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182170/Whitelabel_10.png",
};

export const whiteLabelPartnerArticle = {
  id: "white-label-partner",
  slug: "/partners/white-label",

  category: {
    id: "getting-started",
    label: "Getting Started",
    slug: "/getting-started",
  },

  title: "Set up your Whitelabel Platform",

  description:
    "Configure your Whitelabel Platform, connect billing, set your product and pricing, customize your customer experience, and prepare your platform for launch.",

  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "The Whitelabel Platform gives you a ready-made customer-facing experience for reselling CMR infrastructure under your own brand. This guide walks you through the setup process, from selecting the Whitelabel Platform to configuring billing, contact information, wallet settings, products, pricing, and your customer-facing dashboard.",

  sections: [
    {
      id: "before-you-start",

      title: "Before you start",

      description:
        "Understand what you need before beginning the Whitelabel setup.",

      content: [
        {
          type: "paragraph",
          content:
            "The Whitelabel Platform is designed for partners who want to offer CMR infrastructure through a ready-made customer-facing platform instead of building their own application.",
        },

        {
          type: "paragraph",
          content:
            "During setup, you will configure the information and settings that determine how your platform appears to customers and how your products, pricing, billing, and domain are managed.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Complete the setup in order",
          content:
            "The setup flow contains several configuration steps. Review each setting carefully before continuing because these settings affect your customer-facing platform.",
        },
      ],
    },

    {
      id: "choose-whitelabel-platform",

      title: "Choose the Whitelabel Platform",

      description:
        "Select the Whitelabel Platform when you want a ready-made branded customer experience.",

      content: [
        {
          type: "paragraph",
          content:
            "After entering the setup flow, CMR asks which platform you want to configure. You will see two options: API Platform and Whitelabel Platform.",
        },

        {
          type: "paragraph",
          content:
            "Select the Whitelabel Platform to continue with the no-code setup flow for your branded customer-facing platform.",
        },

        {
          type: "screenshot",
          src: WHITELABEL_SCREENSHOTS.platformSelection,
          alt: "CMR platform selection screen showing API Platform and Whitelabel Platform options",
          caption:
            "Select Whitelabel Platform to begin configuring your branded customer-facing experience.",
        },

        {
          type: "steps",

          items: [
            {
              id: "select-whitelabel",
              title: "Select Whitelabel Platform",
              description:
                "From the platform selection screen, choose Whitelabel Platform.",
            },

            {
              id: "continue-whitelabel",
              title: "Continue with setup",
              description:
                "Proceed to the Whitelabel configuration flow to begin setting up your platform.",
            },
          ],
        },

        {
          type: "callout",
          variant: "tip",
          title: "Choose the right platform",
          content:
            "Choose Whitelabel Platform if you want CMR to provide the customer-facing application. If you plan to build your own application and control the user experience through API requests, use the API Platform instead.",
        },
      ],
    },

    {
      id: "step-1-stripe-connect",

      title: "Step 1: Connect Stripe",

      description:
        "Connect your Stripe account so your Whitelabel Platform can use Stripe for customer billing.",

      content: [
        {
          type: "paragraph",
          content:
            "The first configuration step is connecting your Stripe account. Stripe is used to handle billing for your customers through the Whitelabel Platform.",
        },

        {
          type: "paragraph",
          content:
            "Connect the appropriate Stripe account and complete the authorization flow before continuing with the remaining configuration steps.",
        },

        {
          type: "screenshot",
          src: WHITELABEL_SCREENSHOTS.stripeConnect,
          alt: "CMR Whitelabel setup Stripe Connect configuration",
          caption:
            "Connect your Stripe account as part of the initial Whitelabel configuration.",
        },

        {
          type: "steps",

          items: [
            {
              id: "connect-stripe",
              title: "Connect Stripe",
              description:
                "Start the Stripe connection flow from the Whitelabel setup screen.",
            },

            {
              id: "authorize-stripe",
              title: "Authorize the connection",
              description:
                "Complete the Stripe authorization flow and return to CMR.",
            },

            {
              id: "continue-stripe",
              title: "Continue setup",
              description:
                "Once the Stripe connection is complete, continue to the next configuration step.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Stripe connection",
          content:
            "Make sure the Stripe account you connect is the account you intend to use for your Whitelabel billing setup.",
        },
      ],
    },

    {
      id: "step-2-contact-information",

      title: "Step 2: Add contact information",

      description:
        "Configure the contact information associated with your Whitelabel Platform.",

      content: [
        {
          type: "paragraph",
          content:
            "Enter the contact information that should be associated with your platform. This information helps identify your business and can be used across the customer-facing experience.",
        },

        {
          type: "screenshot",
          src: WHITELABEL_SCREENSHOTS.contactInformation,
          alt: "CMR Whitelabel contact information configuration",
          caption:
            "Enter the contact information for your Whitelabel Platform.",
        },

        {
          type: "steps",

          items: [
            {
              id: "open-contact",
              title: "Open Contact Information",
              description:
                "Review the contact information fields provided during setup.",
            },

            {
              id: "enter-contact",
              title: "Enter your information",
              description:
                "Provide the required business and contact details.",
            },

            {
              id: "save-contact",
              title: "Save and continue",
              description:
                "Review the information and continue to the next step.",
            },
          ],
        },

        {
          type: "callout",
          variant: "tip",
          title: "Review your details",
          content:
            "Use accurate business and contact information because these details can be used as part of your platform configuration and customer-facing experience.",
        },
      ],
    },

    {
      id: "step-3-wallet-settings",

      title: "Step 3: Configure wallet settings",

      description:
        "Configure how your partner wallet is managed for Whitelabel operations.",

      content: [
        {
          type: "paragraph",
          content:
            "The wallet is used to fund supported CMR operations. During setup, configure the wallet settings required for your Whitelabel Platform.",
        },

        {
          type: "paragraph",
          content:
            "Review the available wallet options and make sure your configuration matches how you intend to fund and operate your platform.",
        },

        {
          type: "screenshot",
          src: WHITELABEL_SCREENSHOTS.walletSettings,
          alt: "CMR Whitelabel wallet settings configuration",
          caption:
            "Configure wallet settings for your Whitelabel Platform.",
        },

        {
          type: "steps",

          items: [
            {
              id: "open-wallet",
              title: "Open Wallet Settings",
              description:
                "Review the wallet configuration options available during setup.",
            },

            {
              id: "configure-wallet",
              title: "Configure the wallet",
              description:
                "Set the wallet options required for your platform.",
            },

            {
              id: "continue-wallet",
              title: "Review and continue",
              description:
                "Verify your wallet configuration and continue to the next step.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Keep your wallet funded",
          content:
            "Your partner wallet is used for supported CMR services. Make sure sufficient funds are available before your platform starts processing paid operations.",
        },
      ],
    },

    {
      id: "step-4-product-details",

      title: "Step 4: Configure product details",

      description:
        "Choose and configure the products you want to offer through your Whitelabel Platform.",

      content: [
        {
          type: "paragraph",
          content:
            "Product configuration determines which CMR products are available through your Whitelabel Platform. Review the available product options and configure the products you want to offer to your customers.",
        },

        {
          type: "screenshot",
          src: WHITELABEL_SCREENSHOTS.productDetails,
          alt: "CMR Whitelabel product details configuration",
          caption:
            "Configure the products that will be available through your Whitelabel Platform.",
        },

        {
          type: "steps",

          items: [
            {
              id: "open-products",
              title: "Open Product Details",
              description:
                "Review the products available for your Whitelabel Platform.",
            },

            {
              id: "configure-products",
              title: "Configure your products",
              description:
                "Select and configure the products you want to make available to customers.",
            },

            {
              id: "continue-products",
              title: "Review and continue",
              description:
                "Verify your product configuration before moving to pricing.",
            },
          ],
        },

        {
          type: "callout",
          variant: "tip",
          title: "Configure only the products you plan to offer",
          content:
            "Review your product configuration carefully so your customer-facing platform contains the services you intend to sell.",
        },
      ],
    },

    {
      id: "step-5-pricing-details",

      title: "Step 5: Configure pricing",

      description:
        "Set the pricing your customers will see for the products offered through your platform.",

      content: [
        {
          type: "paragraph",
          content:
            "After configuring your products, set the pricing that will be presented to customers through your Whitelabel Platform.",
        },

        {
          type: "paragraph",
          content:
            "Pricing configuration can include the pricing for domains and mailboxes. Review the available pricing fields and configure them according to your business model.",
        },

        {
          type: "screenshot",
          src: WHITELABEL_SCREENSHOTS.pricingDetailsTop,
          alt: "CMR Whitelabel domain pricing configuration",
          caption:
            "Configure pricing for the products offered through your platform.",
        },

        {
          type: "screenshot",
          src: WHITELABEL_SCREENSHOTS.pricingDetailsMailboxes,
          alt: "CMR Whitelabel mailbox pricing configuration",
          caption:
            "Review and configure mailbox pricing as part of the pricing setup.",
        },

        {
          type: "steps",

          items: [
            {
              id: "open-pricing",
              title: "Open Pricing Details",
              description:
                "Review the pricing configuration available for your selected products.",
            },

            {
              id: "configure-domain-pricing",
              title: "Configure domain pricing",
              description:
                "Set the customer-facing pricing for supported domain products.",
            },

            {
              id: "configure-mailbox-pricing",
              title: "Configure mailbox pricing",
              description:
                "Set the customer-facing pricing for supported mailbox products.",
            },

            {
              id: "review-pricing",
              title: "Review your pricing",
              description:
                "Check the configured pricing before continuing with the remaining setup.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Review pricing carefully",
          content:
            "Pricing configured here affects what customers see and pay through your Whitelabel Platform. Review the values carefully before completing setup.",
        },
      ],
    },

    {
      id: "step-6-dashboard-configuration",

      title: "Step 6: Configure your dashboard",

      description:
        "Customize the customer-facing dashboard, including your domain and platform configuration.",

      content: [
        {
          type: "paragraph",
          content:
            "The dashboard configuration step controls the customer-facing experience of your Whitelabel Platform. This is where you configure the platform under your own brand.",
        },

        {
          type: "heading",
          content: "Configure your custom domain",
        },

        {
          type: "paragraph",
          content:
            "Configure the domain that customers will use to access your branded platform.",
        },

        {
          type: "screenshot",
          src: WHITELABEL_SCREENSHOTS.dashboardDomain,
          alt: "CMR Whitelabel custom domain configuration",
          caption:
            "Configure the custom domain for your customer-facing platform.",
        },

        {
          type: "heading",
          content: "Configure the dashboard",
        },

        {
          type: "paragraph",
          content:
            "Customize the dashboard and branding settings available for your Whitelabel Platform. Review the available configuration options and apply the branding you want customers to see.",
        },

        {
          type: "screenshot",
          src: WHITELABEL_SCREENSHOTS.dashboardConfiguration,
          alt: "CMR Whitelabel dashboard configuration",
          caption:
            "Configure the customer-facing dashboard and branding.",
        },

        {
          type: "steps",

          items: [
            {
              id: "configure-domain",
              title: "Configure your custom domain",
              description:
                "Enter and configure the domain that should be used for your branded platform.",
            },

            {
              id: "configure-dashboard",
              title: "Configure your dashboard",
              description:
                "Set the available dashboard and branding options for your customer-facing experience.",
            },

            {
              id: "review-dashboard",
              title: "Review the customer experience",
              description:
                "Check your domain and dashboard configuration before completing the setup.",
            },
          ],
        },

        {
          type: "callout",
          variant: "tip",
          title: "Keep your branding consistent",
          content:
            "Review your domain and dashboard configuration together so the customer-facing experience consistently represents your brand.",
        },
      ],
    },

    {
      id: "complete-setup",

      title: "Complete the setup",

      description:
        "Review your configuration and finish the Whitelabel Platform setup.",

      content: [
        {
          type: "paragraph",
          content:
            "Once you have completed the configuration steps, review the information you entered and complete the Whitelabel setup.",
        },

        {
          type: "screenshot",
          src: WHITELABEL_SCREENSHOTS.completed,
          alt: "CMR Whitelabel setup completed screen",
          caption:
            "The Whitelabel setup is complete after all required configuration steps have been completed.",
        },

        {
          type: "steps",

          items: [
            {
              id: "review-setup",
              title: "Review your configuration",
              description:
                "Review your billing, contact information, wallet, product, pricing, domain, and dashboard settings.",
            },

            {
              id: "complete-whitelabel",
              title: "Complete the setup",
              description:
                "Finish the setup process once all configuration details have been reviewed.",
            },
          ],
        },

        {
          type: "callout",
          variant: "success",
          title: "Whitelabel setup complete",
          content:
            "Your Whitelabel Platform configuration is complete. You can now continue with the platform-specific documentation and prepare your customer-facing experience for use.",
        },
      ],
    },

    {
      id: "next-steps",

      title: "Next steps",

      description:
        "Continue with the documentation for the part of CMR you want to manage.",

      content: [
        {
          type: "paragraph",
          content:
            "After completing the Whitelabel setup, continue with the documentation for the specific CMR functionality you want to configure or manage.",
        },

        {
          type: "learn-more",

          items: [
            {
              id: "dashboard",
              title: "Explore the Dashboard →",
              description:
                "Understand the main dashboard and the information available to you.",
              href: "/dashboard",
            },

            {
              id: "wallet",
              title: "Manage your Wallet →",
              description:
                "Manage your balance, payments, invoices, and wallet settings.",
              href: "/wallet",
            },

            {
              id: "users",
              title: "Manage Users →",
              description:
                "Understand how customers and users are managed within CMR.",
              href: "/users",
            },

            {
              id: "orders",
              title: "Manage Orders →",
              description:
                "Create and manage orders and understand the order workflow.",
              href: "/orders",
            },

            {
              id: "subscriptions",
              title: "Manage Subscriptions →",
              description:
                "Manage subscriptions and understand subscription-related workflows.",
              href: "/subscriptions",
            },

            {
              id: "settings",
              title: "Configure Settings →",
              description:
                "Manage your account, integrations, members, and platform settings.",
              href: "/settings",
            },
          ],
        },
      ],
    },
  ],
};