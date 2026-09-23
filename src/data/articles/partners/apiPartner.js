const API_PARTNER_STEP_1 =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182120/API_Partner_1.png";

const API_PARTNER_STEP_2 =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182120/API_Partner_2.png";

const API_PARTNER_STEP_3 =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182120/API_Partner_3.png";

const API_PARTNER_STEP_4 =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182120/API_Partner_4.png";

const API_PARTNER_STEP_5 =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182120/API_Partner_5.png";

const API_PARTNER_STEP_6 =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182120/API_Partner_6.png";

const API_PARTNER_STEP_7 =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182121/API_Partner_7.png";

  const API_PARTNER_STEP_8 =
  "https://res.cloudinary.com/jzwc4txa/image/upload/v1790182121/API_Partner_8.png";


export const apiPartnerArticle = {
  id: "api-partner",
  slug: "/partners/api",

  category: {
    id: "getting-started",
    label: "Getting Started",
    slug: "/getting-started",
  },

  title: "Get started with the API Platform",

  description:
    "Set up your CMR API Partner account, configure your wallet, product, pricing, and tracking settings, and get ready to build with the CMR API.",

  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "The API Platform lets you build your own customer experience on top of CMR infrastructure. Before you start making API requests, complete the initial setup for your Partner account. This guide walks you through each step of the setup flow, from choosing the API Platform to configuring your product, pricing, and tracking domain.",

  sections: [
    {
      id: "what-is-api-platform",
      title: "What is the API Platform?",

      description:
        "Understand what the API Partner model is and what you can build with it.",

      content: [
        {
          type: "paragraph",
          content:
            "The API Platform is designed for partners who want to integrate CMR directly into their own product or application. Instead of using a pre-built customer dashboard, your application can communicate with CMR through the REST API.",
        },

        {
          type: "paragraph",
          content:
            "Through the API, you can build workflows around customers, domains, DNS, mailboxes, subscriptions, warmup, orders, exports, and other CMR services.",
        },

        {
          type: "callout",
          variant: "info",
          title: "API Platform vs. Whitelabel Platform",
          content:
            "The API Platform gives you control over the application and customer experience you build. The Whitelabel Platform provides a ready-made customer-facing platform that you configure under your own brand.",
        },
      ],
    },

    {
      id: "before-you-start",
      title: "Before you start",

      description:
        "Know what you will configure during the initial API Partner setup.",

      content: [
        {
          type: "paragraph",
          content:
            "The initial setup flow prepares your Partner account before you start using the CMR API. You will configure your contact and billing information, wallet, product identity, pricing, and custom tracking domain settings.",
        },

        {
          type: "paragraph",
          content:
            "You can review and update these settings later from the relevant areas of your CMR account.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Complete the setup before integrating",
          content:
            "Finishing the setup gives you a configured Partner account that is ready for your API integration and customer workflows.",
        },
      ],
    },

    {
      id: "choose-api-platform",
      title: "Step 1: Choose the API Platform",

      description:
        "Select the API Platform when you want to build your own product using the CMR API.",

      content: [
        {
          type: "paragraph",
          content:
            "When you first enter the setup flow, CMR asks which platform you want to configure. Select API Platform to start the API Partner setup.",
        },

        {
          type: "step",
          number: 1,
          title: "Select API Platform",
          content:
            "On the platform selection screen, choose API Platform. This setup type is intended for partners who want to integrate CMR directly into their own product using the REST API.",
        },

        {
          type: "screenshot",
          src: API_PARTNER_STEP_1,
          alt: "API Platform selection screen",
          caption:
            "Select API Platform to start configuring your API Partner account.",
        },

        {
          type: "callout",
          variant: "info",
          title: "What the API Platform gives you",
          content:
            "The API Platform provides REST API access, webhooks and events, and control over the experience you build for your customers.",
        },
      ],
    },

    {
      id: "contact-information",
      title: "Step 2: Add your contact information",

      description:
        "Enter the billing and contact details associated with your Partner account.",

      content: [
        {
          type: "paragraph",
          content:
            "The first setup section collects your contact and billing information. These details are used to establish the billing record for your Partner account.",
        },

        {
          type: "step",
          number: 1,
          title: "Enter your first and last name",
          content:
            "Enter the first name and last name of the person responsible for the account.",
        },

        {
          type: "step",
          number: 2,
          title: "Enter your company name",
          content:
            "Enter the company or business name associated with your Partner account.",
        },

        {
          type: "step",
          number: 3,
          title: "Enter your phone number",
          content:
            "Select the appropriate country code and enter your phone number.",
        },

        {
          type: "step",
          number: 4,
          title: "Enter your address",
          content:
            "Provide your primary address, including Address 1 and Address 2 when applicable.",
        },

        {
          type: "step",
          number: 5,
          title: "Enter your location",
          content:
            "Enter your city, postal code, country, and state or region.",
        },

        {
          type: "step",
          number: 6,
          title: "Save your details",
          content:
            "Review the information you entered and select Save Details to continue to the next setup step.",
        },

        {
          type: "screenshot",
          src: API_PARTNER_STEP_2,
          alt: "API Partner contact information setup",
          caption:
            "Enter your contact and billing details, then save them to continue.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Check your billing information",
          content:
            "Review your company and address details carefully before saving them so your Partner billing record contains the correct information.",
        },
      ],
    },

    {
      id: "wallet-settings",
      title: "Step 3: Configure your wallet",

      description:
        "Add wallet balance and configure automatic top-up for your Partner account.",

      content: [
        {
          type: "paragraph",
          content:
            "The Wallet Settings step prepares the balance used for CMR services. You can add funds to your wallet and enable Auto-Topup so your balance can be replenished when it reaches the configured minimum threshold.",
        },

        {
          type: "step",
          number: 1,
          title: "Review your wallet balance",
          content:
            "Check the current balance displayed in the Wallet Settings section.",
        },

        {
          type: "step",
          number: 2,
          title: "Add wallet balance",
          content:
            "Select Add More Balance when you need to fund your wallet.",
        },

        {
          type: "step",
          number: 3,
          title: "Enable Auto-Topup",
          content:
            "Enable Auto-Topup if you want your wallet to automatically receive additional funds when it reaches the minimum balance threshold.",
        },

        {
          type: "screenshot",
          src: API_PARTNER_STEP_3,
          alt: "API Partner wallet settings",
          caption:
            "Review your wallet balance, add funds, and configure Auto-Topup.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Why your wallet matters",
          content:
            "CMR services can use your Partner wallet for applicable charges. Keeping sufficient balance available helps prevent interruptions when you use paid services.",
        },
      ],
    },

    {
      id: "product-settings",
      title: "Step 4: Configure your product",

      description:
        "Set the product name and logo that represent your product to customers.",

      content: [
        {
          type: "paragraph",
          content:
            "Product Settings define the identity of the product you are building with CMR. Your product name and logo are used across the customer-facing experience, including the dashboard, emails, and checkout.",
        },

        {
          type: "step",
          number: 1,
          title: "Enter your product name",
          content:
            "Enter the name you want to use for your product.",
        },

        {
          type: "step",
          number: 2,
          title: "Upload your product logo",
          content:
            "Upload the logo you want to use for your product. The setup screen supports JPG and PNG files, with a maximum file size of 5 MB.",
        },

        {
          type: "step",
          number: 3,
          title: "Save your product settings",
          content:
            "Review your product name and logo, then select Save Settings.",
        },

        {
          type: "screenshot",
          src: API_PARTNER_STEP_4,
          alt: "API Partner product settings",
          caption:
            "Configure the product name and logo used across your customer-facing experience.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Use your customer-facing brand",
          content:
            "Use the product name and logo that customers should associate with your application.",
        },
      ],
    },

    {
      id: "pricing-details",
      title: "Step 5: Configure pricing",

      description:
        "Set your domain and mailbox pricing structure before using the platform with customers.",

      content: [
        {
          type: "paragraph",
          content:
            "Pricing Details allow you to configure how your product pricing is presented to customers. The setup flow includes domain pricing margins, TLD-specific overrides, and mailbox selling prices.",
        },

        {
          type: "heading",
          content: "Domain pricing margin",
        },

        {
          type: "paragraph",
          content:
            "Configure the margin applied to domains. The setup provides Fixed $ and Dynamic % options for domain pricing.",
        },

        {
          type: "screenshot",
          src: API_PARTNER_STEP_5,
          alt: "API Partner domain pricing settings",
          caption:
            "Configure the global domain pricing margin and TLD-specific overrides.",
        },

        {
          type: "heading",
          content: "TLD-based margin",
        },

        {
          type: "paragraph",
          content:
            "You can configure a specific margin for individual TLDs. A TLD override can be used to apply a percentage margin for a particular extension.",
        },

        {
          type: "paragraph",
          content:
            "For example, the pricing screen allows you to add individual TLD overrides such as .co or .com and define the percentage margin for each.",
        },

        {
          type: "heading",
          content: "Mailbox pricing",
        },

        {
          type: "paragraph",
          content:
            "The Mailboxes section shows the available mailbox products along with their cost and selling price. You can configure the price customers will see for supported mailbox providers.",
        },

        {
          type: "screenshot",
          src: API_PARTNER_STEP_6,
          alt: "API Partner mailbox pricing settings",
          caption:
            "Configure customer-facing selling prices for mailbox products.",
        },

        {
          type: "step",
          number: 1,
          title: "Configure domain pricing",
          content:
            "Choose the domain pricing method and configure your global domain margin.",
        },

        {
          type: "step",
          number: 2,
          title: "Add TLD overrides when needed",
          content:
            "Select a TLD and configure a specific percentage margin when you want different pricing for individual domain extensions.",
        },

        {
          type: "step",
          number: 3,
          title: "Configure mailbox selling prices",
          content:
            "Review the mailbox products and set the customer-facing selling price for the available providers.",
        },

        {
          type: "step",
          number: 4,
          title: "Save your pricing settings",
          content:
            "Review the pricing configuration and select Save Settings.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Review pricing before going live",
          content:
            "Make sure your domain margins, TLD overrides, and mailbox selling prices match the pricing structure you want to use with your customers.",
        },
      ],
    },

    {
      id: "configurations",
      title: "Step 6: Configure your tracking domain",

      description:
        "Connect your custom tracking domain using the CNAME or A record provided by your setup.",

      content: [
        {
          type: "paragraph",
          content:
            "The Configurations step lets you configure a custom tracking domain. You provide the host and the corresponding CNAME or A record value so tracking links can resolve under your own domain instead of a shared domain.",
        },

        {
          type: "step",
          number: 1,
          title: "Enter the tracking domain host",
          content:
            "Enter the host value for your tracking domain.",
        },

        {
          type: "step",
          number: 2,
          title: "Enter the CNAME or A record value",
          content:
            "Enter the CNAME or A record value associated with your tracking domain.",
        },

        {
          type: "step",
          number: 3,
          title: "Save the configuration",
          content:
            "Review the values and select Save Settings.",
        },

        {
          type: "screenshot",
          src: API_PARTNER_STEP_7,
          alt: "API Partner custom tracking domain configuration",
          caption:
            "Configure the host and CNAME or A record value for your custom tracking domain.",
        },

        {
          type: "callout",
          variant: "tip",
          title: "Use a domain you control",
          content:
            "Make sure the tracking domain and its DNS configuration are managed by you before adding the values to CMR.",
        },
      ],
    },

    {
      id: "setup-complete",
      title: "Step 7: Complete your setup",

      description:
        "Finish the onboarding flow and open your CMR dashboard.",

      content: [
        {
          type: "paragraph",
          content:
            "Once the required setup sections are complete, CMR confirms that your platform has been configured successfully.",
        },

        {
          type: "step",
          number: 1,
          title: "Review your completed setup",
          content:
            "Make sure your contact information, wallet, product settings, pricing, and configuration details have been completed.",
        },

        {
          type: "step",
          number: 2,
          title: "Go to your dashboard",
          content:
            "When setup is complete, select Go to Dashboard to start managing your platform.",
        },

        {
          type: "screenshot",
          src: API_PARTNER_STEP_8,
          alt: "API Partner setup completed",
          caption:
            "Your API Partner platform is configured and ready to use.",
        },

        {
          type: "callout",
          variant: "success",
          title: "Your API Partner setup is complete",
          content:
            "Your account is now configured. You can continue with API authentication and start integrating CMR into your application.",
        },
      ],
    },

    {
      id: "api-after-setup",
      title: "What you can build with the CMR API",

      description:
        "Explore the main API areas available after completing your Partner setup.",

      content: [
        {
          type: "paragraph",
          content:
            "After completing your Partner setup, you can use the CMR API to build customer and infrastructure workflows directly into your application.",
        },

        {
          type: "heading",
          content: "Users",
        },

        {
          type: "paragraph",
          content:
            "Create and manage the customers under your Partner account.",
        },

        {
          type: "code",
          language: "text",
          code: `Create User
List Users
Get User
Update User
Delete User`,
        },

        {
          type: "heading",
          content: "Domains",
        },

        {
          type: "paragraph",
          content:
            "Check domain availability, retrieve domains, check workspace existence, manage forwarding, and remove domains.",
        },

        {
          type: "code",
          language: "text",
          code: `Get Domains by User
Get Domain
Check Domain Availability
Check Single Domain Availability
Check Workspace Existence
Set Domain Forwarding
Set Email Forwarding
Delete Domains`,
        },

        {
          type: "heading",
          content: "DNS Management",
        },

        {
          type: "paragraph",
          content:
            "Read and manage DNS records and nameservers for customer domains.",
        },

        {
          type: "code",
          language: "text",
          code: `Get DNS Records
Add DNS Records
Update DNS Record
Update Nameservers
Delete DNS Record`,
        },

        {
          type: "heading",
          content: "Mailboxes and Warmup",
        },

        {
          type: "paragraph",
          content:
            "Retrieve mailbox information, update mailbox details, and manage mailbox warmup.",
        },

        {
          type: "code",
          language: "text",
          code: `List Mailboxes
Get Mailboxes by User
Get Mailbox
Update Mailbox Details
Delete Mailbox

Add Warmup to Mailbox
Toggle Warmup
Update Warmup Settings
Delete Warmup Subscription`,
        },

        {
          type: "heading",
          content: "Orders and Subscriptions",
        },

        {
          type: "paragraph",
          content:
            "Create and process domain or mailbox orders, then manage the resulting subscriptions.",
        },

        {
          type: "code",
          language: "text",
          code: `Create Order
Create Order (JSON)
Create Mailbox Order
Process Order

Get Subscriptions
Renew Subscriptions
Cancel Subscription
Toggle Auto-Renewal
Recreate Subscription`,
        },

        {
          type: "heading",
          content: "Exports",
        },

        {
          type: "paragraph",
          content:
            "Store platform credentials, retrieve available workspaces, and export mailboxes to supported external platforms. CMR also provides OAuth workflows for Google and Microsoft mailboxes.",
        },

        {
          type: "code",
          language: "text",
          code: `Get Platform Credentials
Get Platform Workspaces
Add Platform Credential
Export Mailboxes to Platform
Update Platform Credential
Remove Platform Credential

Perform OAuth
Add Client ID to Domains`,
        },

        {
          type: "heading",
          content: "Pre-Warmup and Placement Tests",
        },

        {
          type: "paragraph",
          content:
            "The API also provides endpoints for ordering pre-warmed domain packages and creating and retrieving mailbox placement tests.",
        },

        {
          type: "code",
          language: "text",
          code: `Get Pre-Warmup Domains
Order Pre-Warmup

Create Placement Order
Get Placement Reports`,
        },

        {
          type: "callout",
          variant: "info",
          title: "Explore the API Reference",
          content:
            "The individual API reference articles contain the request parameters, response structures, and endpoint-specific behavior for each operation.",
        },
      ],
    },

    {
      id: "authentication-next",
      title: "Next: Authenticate your API requests",

      description:
        "Generate your API credentials and make your first authenticated request.",

      content: [
        {
          type: "paragraph",
          content:
            "With your Partner setup complete, the next step is to generate your API key and learn how CMR authenticates requests.",
        },

        {
          type: "learn-more",
          items: [
            {
              id: "cmr-api-key",
              title: "Create a Partner Account & API Key",
              description:
                "Generate your API credentials and learn how to authenticate CMR API requests.",
              href: "/settings/cmr-api-key",
            },
            {
              id: "api-partner",
              title: "API Partner",
              description:
                "Return to the API Partner setup guide.",
              href: "/partners/api",
            },
            {
              id: "getting-started",
              title: "Getting started with CMR",
              description:
                "Return to the complete CMR onboarding guide.",
              href: "/getting-started",
            },
          ],
        },
      ],
    },
  ],
};