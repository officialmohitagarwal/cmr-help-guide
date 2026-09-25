export const registerDomainArticle = {
  id: "register-domain",

  slug: "/concepts/domains/register-domain",

  category: {
    id: "domains",
    label: "Domains",
    slug: "/concepts/domains",
  },

  title: "Registering a New Domain",

  description:
    "Learn what domain registration means, what to check before ordering, how to register a domain through CMR, and how to verify that the registration has completed successfully.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "Registering a domain is the process of obtaining a domain name for a defined registration period through a domain registrar. In CMR, registering a domain is the first step toward using that domain for services such as mailbox provisioning and other domain-related workflows. This guide explains what domain registration means, what you should check before placing an order, how the registration flow works, and how to verify the result.",

  sections: [
    {
      id: "what-is-domain-registration",
      title: "What is domain registration?",

      description:
        "Understand what actually happens when you register a domain.",

      content: [
        {
          type: "paragraph",
          content:
            "Domain registration is the process of registering a domain name with a domain registrar for a specific period. For example, registering example.com gives you control over that domain for the purchased registration period.",
        },

        {
          type: "paragraph",
          content:
            "The domain itself is the foundation on which other services can be configured. In CMR, a registered domain can be used as the basis for mailbox provisioning and other domain-related services.",
        },

        {
          type: "heading",
          content: "Registration does not mean the same thing as buying a website",
        },

        {
          type: "paragraph",
          content:
            "Registering a domain gives you the domain name. It does not automatically create a website, mailbox, or web application. Those are separate services that can use the registered domain.",
        },

        {
          type: "steps",
          items: [
            {
              id: "registration-domain",
              title: "Domain",
              description:
                "The registered internet name, such as example.com.",
            },
            {
              id: "registration-website",
              title: "Website",
              description:
                "A website can be configured to use the registered domain.",
            },
            {
              id: "registration-mailbox",
              title: "Mailbox",
              description:
                "Mailboxes can be provisioned using the domain, such as hello@example.com.",
            },
          ],
        },
      ],
    },

    {
      id: "registration-lifecycle",
      title: "How domain registration works",

      description:
        "The registration process involves several checks and an order that is processed before the domain becomes available as an active resource.",

      content: [
        {
          type: "paragraph",
          content:
            "Registering a domain is more than entering a domain name and clicking a button. Before an order is placed, CMR needs to determine whether the domain can be registered and whether it is suitable for the intended provisioning flow.",
        },

        {
          type: "steps",
          items: [
            {
              id: "registration-step-1",
              title: "Choose a domain",
              description:
                "Select the domain name you want to register.",
            },
            {
              id: "registration-step-2",
              title: "Check availability",
              description:
                "Verify that the domain is available for registration.",
            },
            {
              id: "registration-step-3",
              title: "Check workspace conflicts",
              description:
                "Verify whether the domain is already associated with an existing Google or Microsoft workspace when the intended order requires workspace-based mailbox provisioning.",
            },
            {
              id: "registration-step-4",
              title: "Review the order",
              description:
                "Confirm the selected domain, service configuration, and other order details.",
            },
            {
              id: "registration-step-5",
              title: "Place the order",
              description:
                "Submit the domain registration order through the CMR order flow.",
            },
            {
              id: "registration-step-6",
              title: "Wait for processing",
              description:
                "CMR processes the order asynchronously. The initial successful request does not necessarily mean that registration has already completed.",
            },
            {
              id: "registration-step-7",
              title: "Verify the result",
              description:
                "Confirm the final order result and verify that the domain has been created with the expected status.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Registration is an asynchronous process",
          content:
            "Submitting an order successfully means the request was accepted or queued. Always use the final order result or relevant webhook events to determine whether the domain registration actually completed.",
        },
      ],
    },

    {
      id: "before-you-register",
      title: "What should you check before registering?",

      description:
        "Complete the important pre-order checks before submitting a domain registration order.",

      content: [
        {
          type: "paragraph",
          content:
            "Before placing a domain order, make sure the domain is available, that there is no unresolved workspace conflict, and that the account is ready to fund and process the order.",
        },

        {
          type: "heading",
          content: "Pre-registration checklist",
        },

        {
          type: "steps",
          items: [
            {
              id: "pre-domain",
              title: "Confirm the domain name",
              description:
                "Check the spelling and TLD carefully. A small typo can result in registering the wrong domain.",
            },
            {
              id: "pre-availability",
              title: "Check availability",
              description:
                "Confirm that the domain is available for registration before attempting to place an order.",
            },
            {
              id: "pre-workspace",
              title: "Check workspace existence",
              description:
                "When the order involves workspace-based mailbox provisioning, check whether the domain is already associated with an existing workspace.",
            },
            {
              id: "pre-wallet",
              title: "Check your wallet balance",
              description:
                "Make sure the account has sufficient wallet balance to cover the order.",
            },
            {
              id: "pre-configuration",
              title: "Review the order configuration",
              description:
                "Confirm the selected provider, product, mailbox configuration, and other options required by the order.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not skip the workspace check",
          content:
            "A domain can be available for registration while still being associated with an existing workspace. Domain availability and workspace existence are separate checks.",
        },
      ],
    },

    {
      id: "check-domain-availability",
      title: "Step 1: Check domain availability",

      description:
        "Availability tells you whether the domain can currently be registered.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain availability check determines whether the requested domain name is available for registration. This should be performed before creating the registration order.",
        },

        {
          type: "paragraph",
          content:
            "For example, if you want to register example.com, the availability check determines whether that exact domain is currently available.",
        },

        {
          type: "heading",
          content: "Why check availability first?",
        },

        {
          type: "paragraph",
          content:
            "Checking availability before creating the order prevents you from attempting to register a domain that is already registered or otherwise unavailable.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Availability is not workspace validation",
          content:
            "An available domain can still have an existing workspace association. Availability and workspace validation should therefore be treated as separate pre-order checks.",
        },
      ],
    },

    {
      id: "check-workspace",
      title: "Step 2: Check for an existing workspace",

      description:
        "Make sure the domain does not have an existing workspace association that conflicts with the intended order.",

      content: [
        {
          type: "paragraph",
          content:
            "If the registration will also be used for workspace-based mailbox provisioning, check whether the domain is already associated with a Google or Microsoft workspace.",
        },

        {
          type: "paragraph",
          content:
            "CMR provides a workspace-existence check specifically for this purpose. A successful check indicating that no workspace exists means the check did not find an existing workspace for the domain.",
        },

        {
          type: "heading",
          content: "Why does this matter?",
        },

        {
          type: "paragraph",
          content:
            "An existing workspace association can cause the subsequent domain and mailbox order to fail workspace validation.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Resolve conflicts before ordering",
          content:
            "If a workspace conflict is found, investigate the existing workspace before placing the order. Do not repeatedly submit the same order without resolving the underlying conflict.",
        },
      ],
    },

    {
      id: "check-wallet",
      title: "Step 3: Make sure your wallet is ready",

      description:
        "The wallet is used to fund CMR orders and services.",

      content: [
        {
          type: "paragraph",
          content:
            "Before placing a paid domain order, make sure your CMR wallet has enough available balance for the order you are about to submit.",
        },

        {
          type: "paragraph",
          content:
            "The exact amount required depends on the domain and the products or services included in the order. Review the order total before confirming the purchase.",
        },

        {
          type: "heading",
          content: "What if the wallet balance is insufficient?",
        },

        {
          type: "paragraph",
          content:
            "Add sufficient balance to the wallet before attempting to place the order. Avoid submitting an order when you already know the available balance is insufficient.",
        },

        {
          type: "learn-more",
          items: [
            {
              id: "wallet",
              title: "Billing and Wallet",
              description:
                "Learn how your CMR wallet balance and payments work.",
              href: "/concepts/billing-wallet",
            },
          ],
        },
      ],
    },

    {
      id: "review-order",
      title: "Step 4: Review the order before submitting",

      description:
        "Review the complete order configuration before committing to the registration.",

      content: [
        {
          type: "paragraph",
          content:
            "Before submitting the order, carefully review the domain and the services you are requesting. This is the final opportunity to catch an incorrect domain name, provider, configuration, or quantity before processing begins.",
        },

        {
          type: "heading",
          content: "Things to verify",
        },

        {
          type: "steps",
          items: [
            {
              id: "review-domain",
              title: "Domain name",
              description:
                "Make sure the exact domain name and TLD are correct.",
            },
            {
              id: "review-provider",
              title: "Service provider",
              description:
                "Confirm the provider selected for the intended mailbox or workspace setup.",
            },
            {
              id: "review-product",
              title: "Product configuration",
              description:
                "Verify the product, mailbox quantity, and other order settings.",
            },
            {
              id: "review-pricing",
              title: "Pricing",
              description:
                "Review the order cost and make sure the wallet has sufficient balance.",
            },
            {
              id: "review-conflicts",
              title: "Validation results",
              description:
                "Make sure the availability and workspace checks do not show unresolved problems.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Double-check the domain name",
          content:
            "Domain registrations are tied to the exact domain name you submit. Always verify the spelling and TLD before confirming the order.",
        },
      ],
    },

    {
      id: "place-order",
      title: "Step 5: Place the domain order",

      description:
        "Submit the registration request after all pre-order checks have passed.",

      content: [
        {
          type: "paragraph",
          content:
            "Once the domain is available, workspace validation has been completed where required, the wallet is funded, and the order configuration has been reviewed, submit the domain order.",
        },

        {
          type: "paragraph",
          content:
            "CMR accepts the order request and processes the order asynchronously. The response to the initial request should therefore be treated as confirmation that the request was accepted or queued, rather than confirmation that every part of the order has completed.",
        },

        {
          type: "heading",
          content: "What happens after the order is submitted?",
        },

        {
          type: "steps",
          items: [
            {
              id: "order-accepted",
              title: "Order is accepted",
              description:
                "CMR accepts the order request and begins processing.",
            },
            {
              id: "order-processing",
              title: "Order is processed",
              description:
                "The domain registration and any associated provisioning work are processed asynchronously.",
            },
            {
              id: "order-complete",
              title: "Final result is produced",
              description:
                "The order eventually reaches a successful or failed outcome.",
            },
            {
              id: "order-verify",
              title: "Domain is verified",
              description:
                "Confirm the resulting domain details and status after processing completes.",
            },
          ],
        },
      ],
    },

    {
      id: "order-processing",
      title: "Understanding order processing",

      description:
        "A submitted order and a completed domain registration are not necessarily the same event.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR processes orders asynchronously. This means there can be a delay between the moment an order is accepted and the moment the domain registration and associated services finish processing.",
        },

        {
          type: "heading",
          content: "Why does this matter?",
        },

        {
          type: "paragraph",
          content:
            "If you immediately check for the final domain state after receiving a successful order response, the domain may not yet have completed its provisioning workflow.",
        },

        {
          type: "paragraph",
          content:
            "Use the order status, final response, or relevant webhook events to determine when processing has actually completed.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Accepted does not always mean completed",
          content:
            "A successful order request confirms that CMR accepted or queued the request. Wait for the final processing result before treating the registration as complete.",
        },
      ],
    },

    {
      id: "verify-registration",
      title: "Step 6: Verify the registered domain",

      description:
        "After processing completes, verify that the domain exists and has the expected configuration.",

      content: [
        {
          type: "paragraph",
          content:
            "Once the order has completed successfully, verify the domain rather than relying only on the original order response.",
        },

        {
          type: "heading",
          content: "What should you verify?",
        },

        {
          type: "steps",
          items: [
            {
              id: "verify-name",
              title: "Domain name",
              description:
                "Confirm that the registered domain is the exact domain you ordered.",
            },
            {
              id: "verify-status",
              title: "Domain status",
              description:
                "Check that the domain has reached the expected active state.",
            },
            {
              id: "verify-expiry",
              title: "Expiry date",
              description:
                "Review the registration expiry information.",
            },
            {
              id: "verify-provider",
              title: "Provider",
              description:
                "Confirm that the expected service provider is associated with the domain.",
            },
            {
              id: "verify-services",
              title: "Associated services",
              description:
                "If the order included mailbox or other provisioning services, verify their final state separately.",
            },
          ],
        },

        {
          type: "callout",
          variant: "success",
          title: "Registration complete",
          content:
            "Treat the registration as complete only after the final order or domain state confirms successful processing.",
        },
      ],
    },

    {
      id: "registration-failed",
      title: "What if the registration fails?",

      description:
        "Use the final order failure reason to identify what needs to be corrected.",

      content: [
        {
          type: "paragraph",
          content:
            "If the order fails, do not immediately submit the same order again. First identify the reason for the failure and determine whether the underlying condition has changed.",
        },

        {
          type: "heading",
          content: "Common areas to check",
        },

        {
          type: "steps",
          items: [
            {
              id: "failure-availability",
              title: "Domain availability",
              description:
                "The domain may no longer be available by the time the order is processed.",
            },
            {
              id: "failure-workspace",
              title: "Workspace validation",
              description:
                "The domain may already be associated with an existing workspace.",
            },
            {
              id: "failure-wallet",
              title: "Wallet balance",
              description:
                "The account may not have sufficient funds for the requested order.",
            },
            {
              id: "failure-configuration",
              title: "Order configuration",
              description:
                "The selected product, provider, or other configuration may not satisfy the order requirements.",
            },
            {
              id: "failure-processing",
              title: "Processing failure",
              description:
                "The order may have encountered an error during asynchronous processing.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Use the actual failure reason",
          content:
            "The final order failure reason is more useful than simply knowing that the order failed. Use the documented error or webhook event to identify the underlying problem before retrying.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes to avoid",

      description:
        "Avoid these mistakes when registering domains through CMR.",

      content: [
        {
          type: "heading",
          content: "Mistake 1: Skipping the availability check",
        },

        {
          type: "paragraph",
          content:
            "Always check whether the domain is available before creating the order.",
        },

        {
          type: "heading",
          content: "Mistake 2: Assuming availability means there is no workspace",
        },

        {
          type: "paragraph",
          content:
            "Availability and workspace existence are separate checks. An available domain can still require workspace validation.",
        },

        {
          type: "heading",
          content: "Mistake 3: Treating the initial order response as completion",
        },

        {
          type: "paragraph",
          content:
            "Orders are processed asynchronously. Wait for the final result or webhook event.",
        },

        {
          type: "heading",
          content: "Mistake 4: Not checking the wallet before ordering",
        },

        {
          type: "paragraph",
          content:
            "Make sure sufficient balance is available before submitting the order.",
        },

        {
          type: "heading",
          content: "Mistake 5: Repeating a failed order without investigating",
        },

        {
          type: "paragraph",
          content:
            "If the order fails, identify and resolve the underlying issue before trying again.",
        },

        {
          type: "heading",
          content: "Mistake 6: Registering the wrong domain",
        },

        {
          type: "paragraph",
          content:
            "Always verify the spelling and TLD before confirming the order.",
        },
      ],
    },

    {
      id: "recommended-registration-flow",
      title: "Recommended registration flow",

      description:
        "Use this sequence as a practical checklist whenever you register a new domain.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "recommended-1",
              title: "Choose the domain",
              description:
                "Select the exact domain name you want to register.",
            },
            {
              id: "recommended-2",
              title: "Check availability",
              description:
                "Confirm that the domain is available.",
            },
            {
              id: "recommended-3",
              title: "Check workspace existence",
              description:
                "Check for an existing workspace when the intended order includes workspace-based mailbox provisioning.",
            },
            {
              id: "recommended-4",
              title: "Check wallet balance",
              description:
                "Make sure the account has sufficient funds.",
            },
            {
              id: "recommended-5",
              title: "Review the order",
              description:
                "Confirm the domain, provider, product, quantity, pricing, and other required configuration.",
            },
            {
              id: "recommended-6",
              title: "Submit the order",
              description:
                "Place the domain order after the required checks have passed.",
            },
            {
              id: "recommended-7",
              title: "Wait for processing",
              description:
                "Allow the asynchronous order workflow to complete.",
            },
            {
              id: "recommended-8",
              title: "Verify the result",
              description:
                "Confirm the final domain status and associated services.",
            },
          ],
        },

        {
          type: "callout",
          variant: "success",
          title: "A good registration workflow is a validation workflow",
          content:
            "The safest way to register a domain is to validate first, order second, and verify the final result after processing completes.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the domain concepts that are closely related to registration.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "status-lifecycle",
              title: "Domain Status Lifecycle Explained",
              description:
                "Understand ACTIVE, RENEWING, GRACE_PERIOD, and EXPIRED domain states.",
              href: "/concepts/domains/status-lifecycle",
            },
            {
              id: "workspace-conflict",
              title: "Why the Workspace-Conflict Check Matters Before You Order",
              description:
                "Understand why CMR checks for existing workspaces before domain orders.",
              href: "/concepts/domains/workspace-conflict-check",
            },
            {
              id: "forwarding",
              title: "Setting Up Domain & Email Forwarding",
              description:
                "Learn what forwarding means and how domain and email forwarding work.",
              href: "/concepts/domains/forwarding",
            },
          ],
        },
      ],
    },
  ],
};