export const forwardingArticle = {
  id: "domain-forwarding",

  slug: "/concepts/domains/forwarding",

  category: {
    id: "domains",
    label: "Domains",
    slug: "/concepts/domains",
  },

  title: "Setting Up Domain & Email Forwarding",

  description:
    "Understand what forwarding means, how domain forwarding and email forwarding work, when to use each, and how to configure and verify forwarding for a domain.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "Forwarding lets you direct traffic or messages from one address to another destination without requiring the original address to change. CMR supports both domain forwarding and email forwarding, but they solve different problems. This guide explains what forwarding means, the difference between domain and email forwarding, how each works, when to use them, and what to check when configuring or troubleshooting forwarding.",

  sections: [
    {
      id: "what-is-forwarding",
      title: "What is forwarding?",

      description:
        "Start with the basic concept before looking at domain and email forwarding.",

      content: [
        {
          type: "paragraph",
          content:
            "Forwarding means directing something that arrives at one address toward another destination. The original address remains the entry point, while the destination determines where the visitor or message ultimately goes.",
        },

        {
          type: "paragraph",
          content:
            "The word forwarding can describe different behaviors depending on what is being forwarded. When working with domains, the two important types are domain forwarding and email forwarding.",
        },

        {
          type: "heading",
          content: "The two forwarding types covered in CMR",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-forwarding",
              title: "Domain forwarding",
              description:
                "Directs visitors or web traffic associated with one domain toward another destination.",
            },
            {
              id: "email-forwarding",
              title: "Email forwarding",
              description:
                "Routes incoming email received at one email address toward another email address.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "The key difference",
          content:
            "Domain forwarding deals with web or domain traffic. Email forwarding deals with email messages. Although both are called forwarding, they operate on different types of traffic and have different destinations.",
        },
      ],
    },

    {
      id: "domain-forwarding",
      title: "What is domain forwarding?",

      description:
        "Domain forwarding redirects visitors from one domain or web address toward another destination.",

      content: [
        {
          type: "paragraph",
          content:
            "Domain forwarding is used when you want visitors who reach one domain to be directed to another destination. The original domain acts as the entry point, while the forwarding configuration determines where the visitor should go.",
        },

        {
          type: "heading",
          content: "A simple example",
        },

        {
          type: "paragraph",
          content:
            "Suppose you own example-old.com and want visitors who use that domain to reach example-new.com. Instead of maintaining a separate website experience on both domains, you can configure forwarding from the old domain to the new destination.",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-forward-source",
              title: "Source domain",
              description:
                "The domain that the visitor enters or requests.",
            },
            {
              id: "domain-forward-rule",
              title: "Forwarding configuration",
              description:
                "The rule that determines where traffic from the source should be directed.",
            },
            {
              id: "domain-forward-destination",
              title: "Destination",
              description:
                "The website or URL where the visitor is ultimately directed.",
            },
          ],
        },

        {
          type: "heading",
          content: "Domain forwarding flow",
        },

        {
          type: "paragraph",
          content:
            "Conceptually, the flow looks like this:",
        },

        {
          type: "code",
          language: "text",
          content: `Visitor
   ↓
Source domain
   ↓
Domain forwarding configuration
   ↓
Destination URL
   ↓
Destination website`,
        },
      ],
    },

    {
      id: "email-forwarding",
      title: "What is email forwarding?",

      description:
        "Email forwarding routes incoming messages from one email address to another destination address.",

      content: [
        {
          type: "paragraph",
          content:
            "Email forwarding is used when messages sent to one email address need to be delivered or routed to another email address.",
        },

        {
          type: "heading",
          content: "A simple example",
        },

        {
          type: "paragraph",
          content:
            "Suppose customers send messages to hello@example.com, but you want those messages to reach support@company.com. Email forwarding can route incoming messages from the forwarding address toward the destination address.",
        },

        {
          type: "steps",
          items: [
            {
              id: "email-forward-source",
              title: "Forwarding address",
              description:
                "The email address that receives the incoming message.",
            },
            {
              id: "email-forward-rule",
              title: "Forwarding configuration",
              description:
                "The rule that determines where the incoming message should be routed.",
            },
            {
              id: "email-forward-destination",
              title: "Destination address",
              description:
                "The email address that receives the forwarded message.",
            },
          ],
        },

        {
          type: "heading",
          content: "Email forwarding flow",
        },

        {
          type: "code",
          language: "text",
          content: `Sender
   ↓
Forwarding email address
   ↓
Email forwarding configuration
   ↓
Destination email address
   ↓
Recipient receives the message`,
        },
      ],
    },

    {
      id: "domain-vs-email-forwarding",
      title: "Domain forwarding vs. email forwarding",

      description:
        "The two forwarding types solve different problems.",

      content: [
        {
          type: "paragraph",
          content:
            "The easiest way to understand the difference is to ask what is being forwarded and where it is going.",
        },

        {
          type: "heading",
          content: "Domain forwarding",
        },

        {
          type: "paragraph",
          content:
            "Domain forwarding directs visitors or web traffic from a source domain toward another web destination.",
        },

        {
          type: "heading",
          content: "Email forwarding",
        },

        {
          type: "paragraph",
          content:
            "Email forwarding routes incoming email messages from one email address toward another email address.",
        },

        {
          type: "steps",
          items: [
            {
              id: "comparison-domain",
              title: "Domain forwarding",
              description:
                "Source: domain or web address. Destination: another website or URL.",
            },
            {
              id: "comparison-email",
              title: "Email forwarding",
              description:
                "Source: email address. Destination: another email address.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Remember this distinction",
          content:
            "If your goal is to redirect visitors, think domain forwarding. If your goal is to route incoming messages, think email forwarding.",
        },
      ],
    },

    {
      id: "how-domain-forwarding-works",
      title: "How does domain forwarding work?",

      description:
        "Understand the flow from the original domain to the destination.",

      content: [
        {
          type: "paragraph",
          content:
            "When a visitor requests a domain that has forwarding configured, the domain's forwarding behavior determines the destination to which the visitor should be directed.",
        },

        {
          type: "heading",
          content: "The basic flow",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-flow-1",
              title: "A visitor requests the source domain",
              description:
                "The visitor enters or follows a link to the domain that has forwarding configured.",
            },
            {
              id: "domain-flow-2",
              title: "The forwarding configuration is applied",
              description:
                "The configured forwarding rule determines the destination.",
            },
            {
              id: "domain-flow-3",
              title: "The visitor is directed to the destination",
              description:
                "The visitor reaches the configured destination website or URL.",
            },
          ],
        },

        {
          type: "heading",
          content: "What does the forwarding configuration control?",
        },

        {
          type: "paragraph",
          content:
            "At a conceptual level, the configuration establishes a relationship between a source domain and a destination. The exact configuration fields and behavior depend on the forwarding implementation provided by CMR.",
        },
      ],
    },

    {
      id: "how-email-forwarding-works",
      title: "How does email forwarding work?",

      description:
        "Understand what happens when an email is sent to a forwarding address.",

      content: [
        {
          type: "paragraph",
          content:
            "Email forwarding works by routing an incoming message from a configured forwarding address toward a destination email address.",
        },

        {
          type: "heading",
          content: "The basic flow",
        },

        {
          type: "steps",
          items: [
            {
              id: "email-flow-1",
              title: "A sender sends an email",
              description:
                "The sender addresses the message to the configured forwarding address.",
            },
            {
              id: "email-flow-2",
              title: "The forwarding rule is evaluated",
              description:
                "The configured forwarding behavior determines the destination address.",
            },
            {
              id: "email-flow-3",
              title: "The message is routed",
              description:
                "The message is forwarded toward the configured destination.",
            },
            {
              id: "email-flow-4",
              title: "The destination receives the message",
              description:
                "The destination mailbox receives the forwarded message subject to the receiving provider's rules.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Forwarding is routing, not mailbox creation",
          content:
            "Email forwarding routes messages from one address to another. It should not be confused with creating a new mailbox or provisioning a new email account.",
        },
      ],
    },

    {
      id: "when-use-domain-forwarding",
      title: "When should you use domain forwarding?",

      description:
        "Domain forwarding is useful when visitors should reach another web destination.",

      content: [
        {
          type: "paragraph",
          content:
            "Domain forwarding is useful when you want an existing domain to act as an entry point while directing visitors toward another website or URL.",
        },

        {
          type: "heading",
          content: "Common use cases",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-use-1",
              title: "Moving to a new domain",
              description:
                "Direct visitors from an older domain toward a newer website destination.",
            },
            {
              id: "domain-use-2",
              title: "Using an alternate domain",
              description:
                "Allow an additional domain to direct visitors to the primary website.",
            },
            {
              id: "domain-use-3",
              title: "Campaign or brand domains",
              description:
                "Use a separate domain as an entry point that directs visitors to a specific destination.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Choose forwarding based on the destination",
          content:
            "If the destination is a website or URL, domain forwarding is the relevant concept. If the destination is an email address, email forwarding is the relevant concept.",
        },
      ],
    },

    {
      id: "when-use-email-forwarding",
      title: "When should you use email forwarding?",

      description:
        "Email forwarding is useful when messages received at one address should reach another address.",

      content: [
        {
          type: "paragraph",
          content:
            "Email forwarding is useful when you want to maintain an email address as an entry point while delivering incoming messages to another mailbox.",
        },

        {
          type: "heading",
          content: "Common use cases",
        },

        {
          type: "steps",
          items: [
            {
              id: "email-use-1",
              title: "Centralizing incoming mail",
              description:
                "Route messages from several addresses toward a destination mailbox.",
            },
            {
              id: "email-use-2",
              title: "Maintaining an existing address",
              description:
                "Continue receiving messages sent to an older or public-facing address while using another mailbox as the destination.",
            },
            {
              id: "email-use-3",
              title: "Routing role-based addresses",
              description:
                "Forward messages from addresses such as hello@, support@, or sales@ toward the appropriate destination.",
            },
          ],
        },
      ],
    },

    {
      id: "forwarding-not-dns",
      title: "Forwarding vs. DNS configuration",

      description:
        "Forwarding and DNS are related to domain behavior but are not the same thing.",

      content: [
        {
          type: "paragraph",
          content:
            "DNS is the system used to associate domain names with different types of internet resources and services. Forwarding describes a behavior that directs visitors or messages toward another destination.",
        },

        {
          type: "heading",
          content: "Why is this distinction important?",
        },

        {
          type: "paragraph",
          content:
            "Changing a DNS record is not automatically the same as configuring domain forwarding. Likewise, changing an email-related DNS record does not by itself create an email forwarding rule.",
        },

        {
          type: "steps",
          items: [
            {
              id: "dns-difference",
              title: "DNS",
              description:
                "Controls how a domain resolves to or identifies different internet services.",
            },
            {
              id: "forwarding-difference",
              title: "Forwarding",
              description:
                "Defines where web traffic or email messages should be directed.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Use the right configuration",
          content:
            "If you need to change how a domain resolves, review DNS configuration. If you need to direct visitors or incoming email to another destination, review forwarding configuration.",
        },
      ],
    },

    {
      id: "before-setting-forwarding",
      title: "Before you configure forwarding",

      description:
        "Review the source and destination carefully before creating a forwarding configuration.",

      content: [
        {
          type: "paragraph",
          content:
            "Before setting up forwarding, make sure you understand what should be forwarded, where it should go, and whether the destination is correct.",
        },

        {
          type: "steps",
          items: [
            {
              id: "before-forward-1",
              title: "Identify the source",
              description:
                "Determine the domain or email address from which traffic or messages should be forwarded.",
            },
            {
              id: "before-forward-2",
              title: "Identify the destination",
              description:
                "Determine the exact website URL or email address that should receive the forwarded traffic or messages.",
            },
            {
              id: "before-forward-3",
              title: "Check the destination",
              description:
                "Make sure the destination is correct and accessible before configuring the forwarding rule.",
            },
            {
              id: "before-forward-4",
              title: "Check existing configuration",
              description:
                "Review whether forwarding is already configured for the domain or address.",
            },
            {
              id: "before-forward-5",
              title: "Consider existing DNS or email configuration",
              description:
                "Review related DNS and mailbox configuration so that the forwarding change does not conflict with the intended setup.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Verify the destination before saving",
          content:
            "A forwarding rule sends traffic or messages somewhere else. Always verify the destination before saving the configuration.",
        },
      ],
    },

    {
      id: "setting-domain-forwarding",
      title: "Setting up domain forwarding in CMR",

      description:
        "Configure domain forwarding after deciding where visitors should be directed.",

      content: [
        {
          type: "paragraph",
          content:
            "Once you have identified the source domain and destination, use the CMR domain-forwarding configuration to establish the forwarding behavior.",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-setup-1",
              title: "Open the domain",
              description:
                "Open the domain for which you want to configure forwarding.",
            },
            {
              id: "domain-setup-2",
              title: "Open forwarding configuration",
              description:
                "Navigate to the domain forwarding configuration available for the selected domain.",
            },
            {
              id: "domain-setup-3",
              title: "Specify the destination",
              description:
                "Enter or select the destination toward which visitors should be directed.",
            },
            {
              id: "domain-setup-4",
              title: "Review the configuration",
              description:
                "Confirm the source domain and destination before saving.",
            },
            {
              id: "domain-setup-5",
              title: "Save the forwarding configuration",
              description:
                "Submit the domain forwarding configuration.",
            },
            {
              id: "domain-setup-6",
              title: "Verify the result",
              description:
                "Test the source domain and confirm that visitors reach the intended destination.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Use the CMR API reference for exact request fields",
          content:
            "The CMR API documentation contains the authoritative request structure and parameters for setting domain forwarding. Use that reference when implementing this operation programmatically.",
        },
      ],
    },

    {
      id: "setting-email-forwarding",
      title: "Setting up email forwarding in CMR",

      description:
        "Configure email forwarding after identifying the source and destination email addresses.",

      content: [
        {
          type: "paragraph",
          content:
            "Once you know which email address should receive incoming messages and where those messages should be forwarded, configure the email forwarding rule for the domain.",
        },

        {
          type: "steps",
          items: [
            {
              id: "email-setup-1",
              title: "Identify the forwarding address",
              description:
                "Determine the email address that should receive incoming messages.",
            },
            {
              id: "email-setup-2",
              title: "Identify the destination address",
              description:
                "Determine the email address that should receive the forwarded messages.",
            },
            {
              id: "email-setup-3",
              title: "Open email forwarding configuration",
              description:
                "Navigate to the email forwarding configuration for the relevant domain.",
            },
            {
              id: "email-setup-4",
              title: "Configure the forwarding rule",
              description:
                "Specify the source and destination according to the CMR forwarding configuration.",
            },
            {
              id: "email-setup-5",
              title: "Review the configuration",
              description:
                "Verify both email addresses carefully before saving.",
            },
            {
              id: "email-setup-6",
              title: "Save and verify",
              description:
                "Save the configuration and send a test message to confirm that forwarding works as expected.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Use the CMR API reference for exact request fields",
          content:
            "The CMR API documentation contains the authoritative request structure and parameters for setting email forwarding. Use that reference when implementing this operation programmatically.",
        },
      ],
    },

    {
      id: "verify-forwarding",
      title: "How to verify forwarding",

      description:
        "Always test forwarding after configuration rather than assuming that saving the rule means it is working.",

      content: [
        {
          type: "heading",
          content: "Verify domain forwarding",
        },

        {
          type: "steps",
          items: [
            {
              id: "verify-domain-1",
              title: "Open the source domain",
              description:
                "Visit the domain that has forwarding configured.",
            },
            {
              id: "verify-domain-2",
              title: "Observe the destination",
              description:
                "Confirm that the visitor reaches the intended destination.",
            },
            {
              id: "verify-domain-3",
              title: "Check the destination",
              description:
                "Make sure the destination page loads correctly and represents the expected website.",
            },
          ],
        },

        {
          type: "heading",
          content: "Verify email forwarding",
        },

        {
          type: "steps",
          items: [
            {
              id: "verify-email-1",
              title: "Send a test message",
              description:
                "Send an email to the configured forwarding address.",
            },
            {
              id: "verify-email-2",
              title: "Check the destination mailbox",
              description:
                "Confirm that the message reaches the configured destination address.",
            },
            {
              id: "verify-email-3",
              title: "Check delivery details",
              description:
                "If the message does not arrive, investigate delivery or forwarding configuration before changing unrelated settings.",
            },
          ],
        },

        {
          type: "callout",
          variant: "success",
          title: "Verify with a real request",
          content:
            "The most reliable way to confirm forwarding is to test the actual behavior: visit the source domain for domain forwarding or send a test email for email forwarding.",
        },
      ],
    },

    {
      id: "changing-forwarding",
      title: "Changing or replacing a forwarding configuration",

      description:
        "Review the existing configuration before changing its destination.",

      content: [
        {
          type: "paragraph",
          content:
            "Forwarding configurations can affect real visitors or incoming messages, so changes should be treated carefully.",
        },

        {
          type: "steps",
          items: [
            {
              id: "change-1",
              title: "Review the current configuration",
              description:
                "Identify the existing source and destination.",
            },
            {
              id: "change-2",
              title: "Define the new destination",
              description:
                "Confirm the new website URL or email address.",
            },
            {
              id: "change-3",
              title: "Update the forwarding configuration",
              description:
                "Change the forwarding configuration according to the CMR workflow.",
            },
            {
              id: "change-4",
              title: "Verify the new behavior",
              description:
                "Test the forwarding configuration after the change.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Avoid unplanned forwarding changes",
          content:
            "Changing a forwarding destination can immediately change where visitors or messages are sent. Confirm the new destination before applying the change.",
        },
      ],
    },

    {
      id: "troubleshooting-domain-forwarding",
      title: "Troubleshooting domain forwarding",

      description:
        "Use these checks when visitors are not reaching the expected destination.",

      content: [
        {
          type: "heading",
          content: "The source domain does not forward",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-trouble-1",
              title: "Check that forwarding is configured",
              description:
                "Confirm that a forwarding configuration exists for the domain.",
            },
            {
              id: "domain-trouble-2",
              title: "Check the destination",
              description:
                "Verify that the configured destination URL is correct.",
            },
            {
              id: "domain-trouble-3",
              title: "Check DNS configuration",
              description:
                "Review the domain's DNS configuration if the domain is not resolving as expected.",
            },
            {
              id: "domain-trouble-4",
              title: "Test again",
              description:
                "After correcting the configuration, test the source domain again.",
            },
          ],
        },

        {
          type: "heading",
          content: "The domain reaches the wrong destination",
        },

        {
          type: "paragraph",
          content:
            "Review the current forwarding destination and confirm that there is not another forwarding or DNS configuration affecting the expected behavior.",
        },

        {
          type: "heading",
          content: "The destination website does not load",
        },

        {
          type: "paragraph",
          content:
            "Check the destination independently. A forwarding configuration can direct traffic to a destination, but it cannot make an unavailable destination website work.",
        },
      ],
    },

    {
      id: "troubleshooting-email-forwarding",
      title: "Troubleshooting email forwarding",

      description:
        "Use these checks when forwarded messages are not reaching the destination mailbox.",

      content: [
        {
          type: "heading",
          content: "The forwarded email never arrives",
        },

        {
          type: "steps",
          items: [
            {
              id: "email-trouble-1",
              title: "Check the source address",
              description:
                "Make sure the message was sent to the exact forwarding address.",
            },
            {
              id: "email-trouble-2",
              title: "Check the destination address",
              description:
                "Verify that the configured destination address is correct.",
            },
            {
              id: "email-trouble-3",
              title: "Check the forwarding configuration",
              description:
                "Confirm that the forwarding rule is active and configured for the expected domain.",
            },
            {
              id: "email-trouble-4",
              title: "Check the destination mailbox",
              description:
                "Review spam, junk, quarantine, or other filtering behavior in the destination mailbox.",
            },
            {
              id: "email-trouble-5",
              title: "Send another test",
              description:
                "After correcting the configuration, send a new test message.",
            },
          ],
        },

        {
          type: "heading",
          content: "The message reaches the wrong mailbox",
        },

        {
          type: "paragraph",
          content:
            "Review the configured destination address carefully. Make sure there is not another forwarding configuration routing the message somewhere else.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Check the destination first",
          content:
            "When troubleshooting email forwarding, verify the source address, forwarding rule, destination address, and destination mailbox filtering before changing DNS or unrelated domain settings.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes to avoid",

      description:
        "Keep these distinctions in mind when working with forwarding.",

      content: [
        {
          type: "heading",
          content: "Mistake 1: Confusing domain forwarding with email forwarding",
        },

        {
          type: "paragraph",
          content:
            "Domain forwarding redirects web traffic. Email forwarding routes email messages. They are separate configurations.",
        },

        {
          type: "heading",
          content: "Mistake 2: Treating forwarding as DNS",
        },

        {
          type: "paragraph",
          content:
            "DNS configuration and forwarding are related but different concepts. Changing DNS records does not automatically create a forwarding rule.",
        },

        {
          type: "heading",
          content: "Mistake 3: Not verifying the destination",
        },

        {
          type: "paragraph",
          content:
            "Always check the destination URL or email address before saving a forwarding configuration.",
        },

        {
          type: "heading",
          content: "Mistake 4: Assuming saved configuration means verified behavior",
        },

        {
          type: "paragraph",
          content:
            "After configuring forwarding, perform an actual test. Visit the source domain or send a test email depending on the forwarding type.",
        },

        {
          type: "heading",
          content: "Mistake 5: Changing unrelated DNS settings when email forwarding fails",
        },

        {
          type: "paragraph",
          content:
            "Start by checking the forwarding source, destination, and forwarding configuration. Only investigate DNS when the issue actually involves domain or mail routing configuration.",
        },
      ],
    },

    {
      id: "forwarding-summary",
      title: "Forwarding at a glance",

      description:
        "Use this quick reference to remember the difference between the two forwarding types.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "summary-domain",
              title: "Domain forwarding",
              description:
                "Redirects visitors from a source domain toward a destination URL or website.",
            },
            {
              id: "summary-email",
              title: "Email forwarding",
              description:
                "Routes incoming messages from a source email address toward a destination email address.",
            },
            {
              id: "summary-dns",
              title: "DNS",
              description:
                "Controls domain resolution and service-related records. It is not the same thing as forwarding.",
            },
            {
              id: "summary-verify",
              title: "Always verify",
              description:
                "Test domain forwarding by visiting the source domain and email forwarding by sending a test message.",
            },
          ],
        },

        {
          type: "callout",
          variant: "success",
          title: "The simple rule",
          content:
            "Web traffic → domain forwarding. Email messages → email forwarding. DNS configuration → DNS settings.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the domain concepts related to forwarding.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "register-domain",
              title: "Registering a New Domain",
              description:
                "Learn how to check availability and register a new domain through CMR.",
              href: "/concepts/domains/register-domain",
            },
            {
              id: "status-lifecycle",
              title: "Domain Status Lifecycle Explained",
              description:
                "Understand the different states a domain can move through during its registration lifecycle.",
              href: "/concepts/domains/status-lifecycle",
            },
            {
              id: "remove-domain",
              title: "Removing a Domain",
              description:
                "Understand what to check before retiring a domain and how removal differs from changing forwarding.",
              href: "/concepts/domains/remove-domain",
            },
          ],
        },
      ],
    },
  ],
};