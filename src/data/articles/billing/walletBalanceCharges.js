export const walletBalanceChargesArticle = {
  id: "wallet-balance-charges",

  slug: "/concepts/billing-wallet/wallet-balance-charges",

  category: {
    id: "billing-wallet",
    label: "Billing and Wallet",
    slug: "/concepts/billing-wallet",
  },

  title: "How Wallet Balance & Charges Work",

  description:
    "Understand how the CMR partner wallet works, which services are charged against it, how partner-level billing differs from customer pricing, and what happens when the wallet does not have enough balance.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "CMR uses a partner wallet as the funding source for services and operations that incur charges. The wallet belongs to the Partner account rather than to individual users or customers. Understanding this model is important when building a CMR integration because your available wallet balance can determine whether certain operations can be completed, while the prices you charge your own customers are managed separately.",

  sections: [
    {
      id: "understanding-partner-wallet",
      title: "Understanding the CMR partner wallet",

      description:
        "The wallet is the Partner-level balance used to fund CMR services.",

      content: [
        {
          type: "paragraph",
          content:
            "The CMR wallet is a Partner-level balance. CMR charges the Partner account for the services used through the platform, and those charges are deducted from the Partner wallet.",
        },

        {
          type: "paragraph",
          content:
            "There is no separate CMR wallet for each user or customer. Users are scoped under your Partner account, but the funding source for CMR services remains the Partner wallet.",
        },

        {
          type: "steps",
          items: [
            {
              id: "wallet-partner",
              title: "Partner account",
              description:
                "Your CMR Partner account owns the wallet and is responsible for funding CMR services.",
            },
            {
              id: "wallet-users",
              title: "Users",
              description:
                "Your customers or end users are represented as users under your Partner account. Their resources are associated with those users, but they do not receive a separate CMR wallet.",
            },
            {
              id: "wallet-charges",
              title: "CMR charges",
              description:
                "When a chargeable CMR operation is performed, the applicable amount is deducted from the Partner wallet.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "The important distinction",
          content:
            "CMR bills the Partner. How you charge your own customers is a separate business and pricing decision made by your platform.",
        },
      ],
    },

    {
      id: "partner-level-vs-user-level",
      title: "Partner-level billing vs user-level resources",

      description:
        "Understanding the difference between the Partner account and its users helps explain how wallet charging works.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR organizes resources under a Partner account and its users. Some operations act on the Partner itself, while others act on resources belonging to a specific user.",
        },

        {
          type: "paragraph",
          content:
            "Wallet funding is a Partner-level operation. For example, topping up the wallet affects the Partner's available balance rather than the balance of an individual customer.",
        },

        {
          type: "paragraph",
          content:
            "By contrast, resources such as domains and mailboxes are associated with users. Creating or managing those resources is therefore commonly performed in the context of a specific user.",
        },

        {
          type: "heading",
          content: "A simple way to think about the hierarchy",
        },

        {
          type: "steps",
          items: [
            {
              id: "hierarchy-partner",
              title: "Partner",
              description:
                "Owns the CMR account, API credentials, wallet, and overall customer environment.",
            },
            {
              id: "hierarchy-user",
              title: "User",
              description:
                "Represents a customer within the Partner platform and owns resources such as domains and mailboxes.",
            },
            {
              id: "hierarchy-resource",
              title: "Resources",
              description:
                "Domains, mailboxes, subscriptions, warmup and other services are associated with the relevant user.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Why this matters for integrations",
          content:
            "When designing your integration, do not treat the wallet as a per-customer balance. The Partner wallet funds CMR operations across the environment.",
        },
      ],
    },

    {
      id: "what-is-charged",
      title: "What can be charged to the wallet?",

      description:
        "CMR documents several services and operations that use the Partner wallet as their funding source.",

      content: [
        {
          type: "paragraph",
          content:
            "The Partner wallet is used to fund chargeable CMR services. The documented billing areas include domain registration, domain renewal, mailbox subscriptions, warmup, pre-warmup orders and placement tests.",
        },

        {
          type: "steps",
          items: [
            {
              id: "charge-domain-registration",
              title: "Domain registration",
              description:
                "Registering a domain creates a charge against the Partner wallet. Domain pricing is not one fixed amount and can vary by TLD.",
            },
            {
              id: "charge-domain-renewal",
              title: "Domain renewal",
              description:
                "Renewing a domain also requires sufficient wallet balance. Renewal pricing is determined by the applicable domain pricing.",
            },
            {
              id: "charge-mailbox",
              title: "Mailbox subscriptions",
              description:
                "Mailbox subscriptions are charged according to the applicable mailbox subscription pricing.",
            },
            {
              id: "charge-warmup",
              title: "Mailbox warmup",
              description:
                "Warmup can create a charge when it is enabled for a mailbox. Depending on when it is enabled, the charge can be bundled with an order or calculated on a prorated basis.",
            },
            {
              id: "charge-prewarmup",
              title: "Pre-warmup orders",
              description:
                "Pre-warmup orders require the Partner wallet to be able to cover the applicable cost.",
            },
            {
              id: "charge-placement",
              title: "Placement tests",
              description:
                "Placement tests are also funded through the Partner wallet.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "The exact amount deducted depends on the service being performed and the pricing applicable to that operation. Domain pricing, for example, varies by TLD rather than using one universal domain price.",
        },
      ],
    },

    {
      id: "customer-pricing-is-separate",
      title: "Your CMR cost is different from your customer price",

      description:
        "The amount CMR charges the Partner and the amount the Partner charges its own customers are separate layers of pricing.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR charges the Partner for the underlying services provided through CMR. Your own platform can then decide how those services are priced for your customers.",
        },

        {
          type: "heading",
          content: "For API Partners",
        },

        {
          type: "paragraph",
          content:
            "If you are building an API-based platform, the price you present to your customers is determined by your own business model. You can decide how much to charge customers for the services you provide through your platform.",
        },

        {
          type: "heading",
          content: "For Whitelabel Partners",
        },

        {
          type: "paragraph",
          content:
            "The call transcript specifically identifies the Partner Pricing dashboard as the place where Whitelabel Partners can configure the pricing they want to present to their users.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Two different billing layers",
          content:
            "Think of the system as two layers: CMR charges the Partner for infrastructure and services, while the Partner decides how those services are priced for its own customers.",
        },

        {
          type: "steps",
          items: [
            {
              id: "pricing-layer-cmr",
              title: "CMR → Partner",
              description:
                "CMR deducts the applicable service cost from the Partner wallet.",
            },
            {
              id: "pricing-layer-customer",
              title: "Partner → Customer",
              description:
                "The Partner decides how to price the service for its own users or customers.",
            },
          ],
        },
      ],
    },

    {
      id: "wallet-dashboard",
      title: "Managing and reviewing your wallet",

      description:
        "The Partner dashboard is the primary place to manage and review wallet-related information.",

      content: [
        {
          type: "paragraph",
          content:
            "The Partner dashboard provides the operational view of your wallet. The call walkthrough identified several wallet-related tasks that should be available to Partners, including viewing the current balance, adding funds, reviewing transactions and accessing invoices.",
        },

        {
          type: "steps",
          items: [
            {
              id: "wallet-view-balance",
              title: "View your wallet balance",
              description:
                "Check the available Partner wallet balance before performing operations that require funding.",
            },
            {
              id: "wallet-add-funds",
              title: "Add funds",
              description:
                "Add funds to the Partner wallet when additional balance is required for upcoming operations.",
            },
            {
              id: "wallet-transactions",
              title: "Review transactions",
              description:
                "Use the wallet transaction history to understand wallet activity and review charges or funding activity.",
            },
            {
              id: "wallet-invoices",
              title: "Access invoices",
              description:
                "Review the invoices associated with your Partner billing activity.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "The exact dashboard navigation and available controls can change as the Partner dashboard evolves. Follow the current UI labels shown in your account rather than relying on a hard-coded navigation path in an integration.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Keep wallet activity separate from customer billing",
          content:
            "Wallet transactions describe your relationship with CMR. Your own customer invoices and charges are managed by your platform and should not be treated as CMR wallet transactions.",
        },
      ],
    },

    {
      id: "low-wallet-balance",
      title: "What happens when the wallet balance is insufficient?",

      description:
        "A low wallet balance can prevent certain chargeable operations from completing.",

      content: [
        {
          type: "paragraph",
          content:
            "A sufficient wallet balance is one of the conditions required for several chargeable operations. If the wallet cannot cover the required amount, the operation may fail validation or later report a failure depending on the workflow.",
        },

        {
          type: "heading",
          content: "Placement tests",
        },

        {
          type: "paragraph",
          content:
            "The placement test documentation provides a dedicated low-balance response. When the wallet does not have enough balance, the request returns HTTP 402 Payment Required with the message \"Insufficient wallet balance to run placement test\".",
        },

        {
          type: "heading",
          content: "Pre-warmup orders",
        },

        {
          type: "paragraph",
          content:
            "Pre-warmup orders explicitly require the Partner wallet to be able to cover the cost. A low balance can therefore prevent the order from completing.",
        },

        {
          type: "heading",
          content: "Domain renewal and auto-renewal",
        },

        {
          type: "paragraph",
          content:
            "Domain renewal and scheduled auto-renewal include wallet balance as one of the validation conditions. A renewal therefore cannot be treated as guaranteed simply because the domain is eligible for renewal.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not assume every low-balance failure looks the same",
          content:
            "The documented low-balance behavior differs by operation. Placement tests have an explicit 402 response, while other asynchronous operations can report their final failure through the corresponding failure workflow or webhook.",
        },
      ],
    },

    {
      id: "wallet-and-async-operations",
      title: "Wallet charges and asynchronous operations",

      description:
        "Some CMR operations are asynchronous, so the initial request response is not necessarily the final billing outcome.",

      content: [
        {
          type: "paragraph",
          content:
            "Several CMR operations are processed asynchronously. An initial successful HTTP response can indicate that the operation was accepted for processing without meaning that the underlying resource has already been successfully provisioned or renewed.",
        },

        {
          type: "paragraph",
          content:
            "For these operations, the final success or failure is communicated through the corresponding completion webhook. This is particularly important for billing-sensitive operations because a Partner should not assume that an accepted request automatically means the requested resource was successfully created.",
        },

        {
          type: "heading",
          content: "Do not blindly submit the same operation again",
        },

        {
          type: "paragraph",
          content:
            "The CMR documentation warns against resubmitting an asynchronous operation simply because its completion webhook has not arrived. Repeating the underlying operation can create duplicate resources and duplicate charges.",
        },

        {
          type: "steps",
          items: [
            {
              id: "async-submit",
              title: "Submit the operation",
              description:
                "Send the requested CMR operation and retain the identifier returned by the initial request.",
            },
            {
              id: "async-wait",
              title: "Wait for completion",
              description:
                "Allow the asynchronous workflow to complete rather than submitting the same operation again because processing appears slow.",
            },
            {
              id: "async-webhook",
              title: "Process the final event",
              description:
                "Use the success or failure webhook to determine the final state of the operation.",
            },
            {
              id: "async-diagnose",
              title: "Use the request identifier for support",
              description:
                "If an operation fails or remains unclear, retain the actionId or orderId returned by the original request so the operation can be traced.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Avoid duplicate charges",
          content:
            "Not receiving a webhook is not the same thing as the operation failing. Check the operation status and webhook delivery before submitting the same request again.",
        },
      ],
    },

    {
      id: "auto-recharge-and-smart-recharge",
      title: "Auto-recharge and smart recharge",

      description:
        "Automatic wallet funding is an important part of wallet management, but its exact configuration should follow the current Partner dashboard behavior.",

      content: [
        {
          type: "paragraph",
          content:
            "The CMR onboarding discussion identified auto-recharge, the minimum balance used with auto-recharge, and smart recharge as important wallet concepts that should be documented for Partners.",
        },

        {
          type: "paragraph",
          content:
            "These settings determine how Partners can manage wallet funding without manually checking and topping up the balance for every operation. However, the call transcript does not define the exact thresholds, recharge amounts, triggers, or smart-recharge calculation used by the current dashboard.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Use the current dashboard behavior",
          content:
            "Do not hard-code auto-recharge thresholds, minimum balances, recharge amounts, or smart-recharge rules into your integration documentation until the current CMR dashboard behavior and product rules have been confirmed.",
        },
      ],
    },

    {
      id: "practical-wallet-management",
      title: "A practical wallet management workflow",

      description:
        "Use this workflow to reduce billing-related failures when operating a CMR Partner platform.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "workflow-check",
              title: "Check the available balance",
              description:
                "Before running large or chargeable operations, confirm that the Partner wallet has enough available balance.",
            },
            {
              id: "workflow-estimate",
              title: "Estimate the operation cost",
              description:
                "Account for the applicable domain, mailbox, warmup, renewal, or other service cost before submitting the operation.",
            },
            {
              id: "workflow-fund",
              title: "Add funds when necessary",
              description:
                "Top up the Partner wallet when the available balance is not sufficient for the planned operation.",
            },
            {
              id: "workflow-submit",
              title: "Submit the operation once",
              description:
                "Start the operation without blindly duplicating requests while waiting for asynchronous processing.",
            },
            {
              id: "workflow-confirm",
              title: "Confirm the final result",
              description:
                "For asynchronous operations, use the completion webhook or final status to determine whether the operation succeeded or failed.",
            },
            {
              id: "workflow-review",
              title: "Review wallet activity",
              description:
                "Use transaction and invoice information to reconcile wallet activity with your own internal billing records.",
            },
          ],
        },
      ],
    },

    {
      id: "important-notes",
      title: "Important things to remember",

      description:
        "Keep these rules in mind when designing or operating a CMR Partner platform.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "note-single-wallet",
              title: "The wallet is Partner-level",
              description:
                "CMR uses the Partner wallet as the funding source rather than maintaining a separate wallet for each customer.",
            },
            {
              id: "note-customer-pricing",
              title: "Customer pricing is separate",
              description:
                "The price you charge your customers is controlled by your own platform and business model, not by the CMR wallet.",
            },
            {
              id: "note-charge-types",
              title: "Multiple services use the wallet",
              description:
                "Documented chargeable operations include domain registration and renewal, mailbox subscriptions, warmup, pre-warmup and placement tests.",
            },
            {
              id: "note-low-balance",
              title: "Low balance can block operations",
              description:
                "Several workflows validate wallet balance before or during processing.",
            },
            {
              id: "note-async",
              title: "Async acceptance is not final success",
              description:
                "For asynchronous operations, wait for the final success or failure event before treating the operation as complete.",
            },
            {
              id: "note-no-blind-retry",
              title: "Do not blindly retry async operations",
              description:
                "Resubmitting an operation while waiting for its webhook can create duplicate resources and duplicate charges.",
            },
            {
              id: "note-reconcile",
              title: "Keep billing records aligned",
              description:
                "Your internal customer billing records and CMR wallet transactions represent different billing layers and should be reconciled separately.",
            },
          ],
        },
      ],
    },

    {
      id: "common-scenarios",
      title: "Common scenarios",

      description:
        "Use these examples to understand how wallet behavior affects day-to-day operations.",

      content: [
        {
          type: "heading",
          content: "I have customers, but whose wallet pays for their mailbox?",
        },

        {
          type: "paragraph",
          content:
            "The Partner wallet funds the CMR mailbox subscription. Your platform can separately charge the customer according to your own pricing model.",
        },

        {
          type: "heading",
          content: "Can each customer have their own CMR wallet?",
        },

        {
          type: "paragraph",
          content:
            "No. The documented CMR billing model uses a single Partner wallet rather than separate CMR wallets for individual customers.",
        },

        {
          type: "heading",
          content: "My wallet has insufficient balance. Should I submit the order again?",
        },

        {
          type: "paragraph",
          content:
            "First resolve the wallet balance issue and check the final state of the original operation. Do not blindly resubmit an asynchronous request simply because processing has not completed.",
        },

        {
          type: "heading",
          content: "Does a successful HTTP response mean that the chargeable operation is complete?",
        },

        {
          type: "paragraph",
          content:
            "Not necessarily. For asynchronous workflows, the initial response can indicate that the operation was accepted for processing. The final webhook or status should be used to determine the actual outcome.",
        },

        {
          type: "heading",
          content: "Does CMR decide how much I charge my customers?",
        },

        {
          type: "paragraph",
          content:
            "No. CMR charges the Partner for the underlying services. Your customer-facing pricing is managed separately by your platform. Whitelabel Partners can configure their customer-facing pricing through the Partner Pricing dashboard.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the billing and subscription guides that build on the wallet concepts covered here.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "mailbox-pricing",
              title: "Mailbox Pricing Explained",
              description:
                "Understand mailbox subscription pricing, warmup charges, and the 12-month pricing change.",
              href: "/concepts/billing-wallet/mailbox-pricing",
            },
            {
              id: "volume-discounts",
              title: "Volume Discounts & Custom Pricing",
              description:
                "Learn how volume pricing works and when custom pricing can be discussed with CMR.",
              href: "/concepts/billing-wallet/volume-discounts",
            },
            {
              id: "reset-pricing",
              title: "Resetting Long-Running Subscription Pricing",
              description:
                "Understand what happens when a mailbox subscription crosses the 12-month pricing threshold and how the documented recreation flow works.",
              href: "/concepts/billing-wallet/reset-subscription-pricing",
            },
            {
              id: "past-due",
              title: "What Happens When a Subscription Goes PAST_DUE",
              description:
                "Understand the subscription payment-failure lifecycle and the actions available during the recovery period.",
              href: "/concepts/billing-wallet/subscription-past-due",
            },
          ],
        },
      ],
    },
  ],
};