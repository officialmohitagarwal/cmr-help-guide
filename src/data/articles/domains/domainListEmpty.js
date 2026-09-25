export const domainListEmptyArticle = {
  id: "domain-list-empty",

  slug: "/concepts/domains/domain-list-empty",

  category: {
    id: "domains",
    label: "Domains",
    slug: "/concepts/domains",
  },

  title: "Troubleshooting: My Domain List Comes Back Empty",

  description:
    "Understand why your domain list may appear empty, how to identify the cause, and what to check before escalating the issue.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "An empty domain list does not always mean that no domains exist. The result can depend on the account, workspace, request context, filters, permissions, or the state of the domain data. This guide explains what the domain list represents, the most common reasons it can appear empty, how to diagnose the issue systematically, and what to verify before contacting support.",

  sections: [
    {
      id: "what-is-domain-list",
      title: "What is the domain list?",

      description:
        "Understand what the domain list is expected to represent before troubleshooting it.",

      content: [
        {
          type: "paragraph",
          content:
            "The domain list is the collection of domains associated with the current CMR context. Depending on the part of the platform you are working in, that context can determine which domains are returned or displayed.",
        },

        {
          type: "paragraph",
          content:
            "A domain list is therefore not simply a global list of every domain that exists in CMR. The result can depend on the account, workspace, request context, and the data available to that context.",
        },

        {
          type: "heading",
          content: "What does an empty list mean?",
        },

        {
          type: "paragraph",
          content:
            "An empty list means that the current request or view did not return any domains for the context being used. It does not, by itself, prove that a domain was deleted, expired, or never existed.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Start with the context",
          content:
            "Before changing anything, verify which account, workspace, and environment you are using. An incorrect context is one of the first things to eliminate when a domain list unexpectedly appears empty.",
        },
      ],
    },

    {
      id: "why-domain-list-empty",
      title: "Why can a domain list be empty?",

      description:
        "Several different conditions can produce an empty domain result.",

      content: [
        {
          type: "paragraph",
          content:
            "An empty domain list can have several causes. The important part of troubleshooting is to distinguish between a genuinely empty result and a problem with the request, account context, filtering, or application state.",
        },

        {
          type: "steps",
          items: [
            {
              id: "empty-cause-1",
              title: "The current account has no associated domains",
              description:
                "The account or workspace may genuinely have no domains associated with it yet.",
            },
            {
              id: "empty-cause-2",
              title: "The wrong workspace or account is being used",
              description:
                "A domain associated with one workspace may not appear when viewing another workspace or account context.",
            },
            {
              id: "empty-cause-3",
              title: "A filter is hiding the expected domains",
              description:
                "An active filter or search condition can reduce the visible result set.",
            },
            {
              id: "empty-cause-4",
              title: "The request is using the wrong context",
              description:
                "An API request can return an empty result when the request is authenticated or scoped differently from the context where the domain exists.",
            },
            {
              id: "empty-cause-5",
              title: "The domain order has not completed",
              description:
                "A recently submitted domain order may still be processing, so the domain may not appear in the expected state or list immediately.",
            },
            {
              id: "empty-cause-6",
              title: "The domain data is temporarily unavailable",
              description:
                "A request or service issue can prevent the expected domain data from being returned.",
            },
          ],
        },
      ],
    },

    {
      id: "first-checks",
      title: "Start with these checks",

      description:
        "Run the basic checks before investigating the API or platform behavior.",

      content: [
        {
          type: "paragraph",
          content:
            "Before making configuration changes, confirm the basics. These checks eliminate the most common causes without changing your domain configuration.",
        },

        {
          type: "steps",
          items: [
            {
              id: "first-check-1",
              title: "Confirm the account",
              description:
                "Make sure you are signed in to the account that owns or manages the expected domain.",
            },
            {
              id: "first-check-2",
              title: "Confirm the workspace",
              description:
                "If your setup uses workspaces, verify that you are working in the workspace associated with the domain.",
            },
            {
              id: "first-check-3",
              title: "Clear filters",
              description:
                "Remove active search, status, or other filters and check the domain list again.",
            },
            {
              id: "first-check-4",
              title: "Refresh the domain list",
              description:
                "Reload the page or repeat the domain-list request so that you are working with a fresh result.",
            },
            {
              id: "first-check-5",
              title: "Check whether the domain was recently ordered",
              description:
                "If the domain was just purchased or registered, confirm whether its order has finished processing.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not immediately re-order the domain",
          content:
            "If a recently submitted domain is missing from the list, first determine whether the original order is still processing. Creating another order can introduce a separate problem instead of fixing the original one.",
        },
      ],
    },

    {
      id: "check-domain-exists",
      title: "Check whether the domain actually exists in the current context",

      description:
        "Separate a genuinely empty domain collection from a display or context problem.",

      content: [
        {
          type: "paragraph",
          content:
            "The next step is to determine whether the expected domain exists for the account and workspace you are currently using.",
        },

        {
          type: "steps",
          items: [
            {
              id: "exists-check-1",
              title: "Identify the expected domain",
              description:
                "Write down the exact domain name you expect to see.",
            },
            {
              id: "exists-check-2",
              title: "Confirm ownership or association",
              description:
                "Verify that the domain belongs to or is associated with the current account or workspace.",
            },
            {
              id: "exists-check-3",
              title: "Check the domain details",
              description:
                "If the domain can be accessed directly, inspect its status, registration information, and associated configuration.",
            },
            {
              id: "exists-check-4",
              title: "Compare contexts",
              description:
                "If you have access to more than one workspace or account, verify that the domain is not associated with a different context.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "An empty list and a missing domain are different problems",
          content:
            "An empty list describes what the current request returned. A missing domain means that the specific domain you expected cannot be found in the relevant account or workspace context. Establish which problem you have before changing anything.",
        },
      ],
    },

    {
      id: "recent-domain-order",
      title: "If you just ordered a domain",

      description:
        "Recently submitted domain orders may require processing before the domain appears as expected.",

      content: [
        {
          type: "paragraph",
          content:
            "Domain registration and provisioning can involve asynchronous processing. This means that submitting an order and seeing the completed domain record are not necessarily the same event.",
        },

        {
          type: "heading",
          content: "What to check",
        },

        {
          type: "steps",
          items: [
            {
              id: "recent-order-1",
              title: "Check the order",
              description:
                "Confirm that the domain order was actually submitted and has not failed.",
            },
            {
              id: "recent-order-2",
              title: "Check the processing state",
              description:
                "Determine whether the order is still being processed.",
            },
            {
              id: "recent-order-3",
              title: "Check for an error",
              description:
                "If processing failed, identify the reported reason instead of treating the empty list as the primary problem.",
            },
            {
              id: "recent-order-4",
              title: "Check again after processing",
              description:
                "Once processing has completed successfully, refresh the domain list and verify that the domain is available in the expected context.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Order completion matters",
          content:
            "If a domain order is still processing, an empty or incomplete domain view may not indicate that the registration failed.",
        },
      ],
    },

    {
      id: "check-filters",
      title: "Check search and filters",

      description:
        "A domain can exist while the current view hides it.",

      content: [
        {
          type: "paragraph",
          content:
            "If the platform supports search or filtering, an active filter can make the domain list appear empty even though domains are associated with the account.",
        },

        {
          type: "steps",
          items: [
            {
              id: "filter-check-1",
              title: "Clear the search field",
              description:
                "Remove any domain-name or keyword search.",
            },
            {
              id: "filter-check-2",
              title: "Clear status filters",
              description:
                "Remove status-specific filters that may exclude the expected domain.",
            },
            {
              id: "filter-check-3",
              title: "Check pagination",
              description:
                "If the list is paginated, make sure you are viewing the expected page.",
            },
            {
              id: "filter-check-4",
              title: "Reload the list",
              description:
                "Refresh the domain view after clearing filters.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Test with the broadest view",
          content:
            "When diagnosing an empty list, remove optional filters first. You want to establish whether the underlying domain collection is empty before investigating more specific filtering behavior.",
        },
      ],
    },

    {
      id: "api-check",
      title: "Troubleshooting an empty domain list through the API",

      description:
        "If you are integrating with CMR programmatically, inspect the request context and response before changing your application logic.",

      content: [
        {
          type: "paragraph",
          content:
            "When the domain list is being retrieved through the CMR API, troubleshoot the request itself before assuming that the platform has lost the domain data.",
        },

        {
          type: "heading",
          content: "Check authentication",
        },

        {
          type: "paragraph",
          content:
            "Verify that the API request is authenticated with the expected API credentials and that the credentials belong to the intended CMR account or partner context.",
        },

        {
          type: "heading",
          content: "Check workspace or account context",
        },

        {
          type: "paragraph",
          content:
            "If your integration operates across workspaces or customer contexts, verify that the request is being made against the workspace where the domain is actually associated.",
        },

        {
          type: "heading",
          content: "Check the response itself",
        },

        {
          type: "paragraph",
          content:
            "Inspect the complete API response rather than looking only at the rendered domain list in your application. Determine whether the API returned an empty collection, an error, or a response that your frontend is incorrectly transforming.",
        },

        {
          type: "code",
          language: "text",
          content: `Request
   ↓
Authentication
   ↓
Account / workspace context
   ↓
CMR domain service
   ↓
API response
   ↓
Your application
   ↓
Domain list`,
        },

        {
          type: "callout",
          variant: "info",
          title: "An empty UI does not prove an empty API response",
          content:
            "If the API response contains domain data but your application displays an empty list, the problem is likely in the frontend data handling, filtering, mapping, or rendering layer.",
        },
      ],
    },

    {
      id: "frontend-debugging",
      title: "If the API returns domains but your UI is empty",

      description:
        "Separate a CMR data problem from a frontend rendering problem.",

      content: [
        {
          type: "paragraph",
          content:
            "A common integration mistake is to assume that an empty UI means the API returned no domains. First inspect the raw response.",
        },

        {
          type: "steps",
          items: [
            {
              id: "frontend-debug-1",
              title: "Inspect the network request",
              description:
                "Open your browser's network tools and inspect the domain-list request.",
            },
            {
              id: "frontend-debug-2",
              title: "Inspect the HTTP status",
              description:
                "Confirm that the request completed successfully rather than silently failing.",
            },
            {
              id: "frontend-debug-3",
              title: "Inspect the response body",
              description:
                "Check whether the response actually contains domain records.",
            },
            {
              id: "frontend-debug-4",
              title: "Inspect your data mapping",
              description:
                "Verify that your application is reading the correct response property.",
            },
            {
              id: "frontend-debug-5",
              title: "Inspect client-side filters",
              description:
                "Make sure your frontend is not filtering out every returned domain.",
            },
          ],
        },

        {
          type: "heading",
          content: "A useful diagnostic distinction",
        },

        {
          type: "steps",
          items: [
            {
              id: "frontend-case-1",
              title: "API returns an empty collection",
              description:
                "Investigate account, workspace, domain association, order state, and request context.",
            },
            {
              id: "frontend-case-2",
              title: "API returns domains but UI is empty",
              description:
                "Investigate frontend mapping, filtering, state management, and rendering.",
            },
            {
              id: "frontend-case-3",
              title: "API returns an error",
              description:
                "Investigate authentication, authorization, request parameters, service availability, and the specific API error.",
            },
          ],
        },
      ],
    },

    {
      id: "domain-status-check",
      title: "Check the domain's status",

      description:
        "If you can access the domain directly, its status can help explain what is happening.",

      content: [
        {
          type: "paragraph",
          content:
            "Domain status describes where a domain currently sits in its lifecycle. Checking the status can help distinguish an active domain from one that is renewing, in a grace period, or expired.",
        },

        {
          type: "steps",
          items: [
            {
              id: "status-check-1",
              title: "ACTIVE",
              description:
                "The domain is active and available in its normal registered state.",
            },
            {
              id: "status-check-2",
              title: "RENEWING",
              description:
                "A renewal operation is being processed for the domain.",
            },
            {
              id: "status-check-3",
              title: "GRACE_PERIOD",
              description:
                "The domain has reached registrar expiry but is within the documented recovery window.",
            },
            {
              id: "status-check-4",
              title: "EXPIRED",
              description:
                "The grace window has closed and normal API renewal recovery is no longer available.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Status and visibility are separate concerns",
          content:
            "A domain's lifecycle status explains the state of the domain. An empty domain list describes what the current list request returned. Do not assume that one automatically explains the other.",
        },
      ],
    },

    {
      id: "do-not-delete-or-reregister",
      title: "What not to do while troubleshooting",

      description:
        "Avoid destructive changes until you understand why the domain is missing.",

      content: [
        {
          type: "paragraph",
          content:
            "An empty domain list is not enough evidence to justify deleting configuration, cancelling subscriptions, or registering the domain again.",
        },

        {
          type: "steps",
          items: [
            {
              id: "avoid-1",
              title: "Do not immediately register the same domain again",
              description:
                "First determine whether an existing order or domain association already exists.",
            },
            {
              id: "avoid-2",
              title: "Do not cancel related subscriptions as a first step",
              description:
                "An empty list does not by itself indicate that a subscription should be cancelled.",
            },
            {
              id: "avoid-3",
              title: "Do not delete DNS records unnecessarily",
              description:
                "DNS changes are not a general solution for an empty domain-list response.",
            },
            {
              id: "avoid-4",
              title: "Do not assume the domain was deleted",
              description:
                "Confirm the account, workspace, API response, and domain status before concluding that the domain no longer exists.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Diagnose before changing",
          content:
            "Troubleshooting should first establish where the domain disappeared: account context, API response, application state, or actual domain data. Make configuration changes only after identifying the relevant cause.",
        },
      ],
    },

    {
      id: "systematic-diagnostic-flow",
      title: "Recommended diagnostic flow",

      description:
        "Follow this sequence to isolate the problem efficiently.",

      content: [
        {
          type: "paragraph",
          content:
            "Use the following order instead of changing multiple things at once. It helps isolate whether the problem is contextual, operational, or technical.",
        },

        {
          type: "steps",
          items: [
            {
              id: "diagnostic-1",
              title: "Confirm the account",
              description:
                "Make sure you are using the account that owns or manages the expected domain.",
            },
            {
              id: "diagnostic-2",
              title: "Confirm the workspace",
              description:
                "Verify the domain belongs to the workspace you are currently viewing or querying.",
            },
            {
              id: "diagnostic-3",
              title: "Clear filters",
              description:
                "Remove search and status filters so the complete available list can be inspected.",
            },
            {
              id: "diagnostic-4",
              title: "Check recent orders",
              description:
                "If the domain was recently purchased, determine whether the order is still processing or has failed.",
            },
            {
              id: "diagnostic-5",
              title: "Inspect the API response",
              description:
                "If you are using the API, determine whether the API itself returns an empty collection, an error, or domain data.",
            },
            {
              id: "diagnostic-6",
              title: "Check application mapping",
              description:
                "If the API returns domains, investigate frontend filtering, state, mapping, and rendering.",
            },
            {
              id: "diagnostic-7",
              title: "Check domain status",
              description:
                "If the domain can be identified directly, inspect its lifecycle state.",
            },
            {
              id: "diagnostic-8",
              title: "Escalate with evidence",
              description:
                "If the issue remains unresolved, collect the account context, domain name, request details, response, and relevant timestamps before contacting support.",
            },
          ],
        },
      ],
    },

    {
      id: "what-to-collect",
      title: "What information to collect before contacting support",

      description:
        "Good diagnostic information makes it easier to identify whether the problem is account-, API-, or domain-related.",

      content: [
        {
          type: "paragraph",
          content:
            "If the domain list remains empty after the checks above, collect enough information for the issue to be reproduced and investigated.",
        },

        {
          type: "steps",
          items: [
            {
              id: "support-info-1",
              title: "Domain name",
              description:
                "Provide the exact domain you expected to see.",
            },
            {
              id: "support-info-2",
              title: "Account and workspace context",
              description:
                "Identify the account and workspace in which the domain should appear.",
            },
            {
              id: "support-info-3",
              title: "Approximate order time",
              description:
                "If the domain was recently ordered, provide the approximate time and relevant order information.",
            },
            {
              id: "support-info-4",
              title: "API request details",
              description:
                "For API integrations, provide the endpoint, request context, HTTP status, and relevant response details.",
            },
            {
              id: "support-info-5",
              title: "Screenshot or screen recording",
              description:
                "Capture the empty domain list and any visible filters, errors, or status information.",
            },
            {
              id: "support-info-6",
              title: "Steps to reproduce",
              description:
                "Document the sequence that consistently produces the empty result.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Do not share secrets",
          content:
            "When sharing API troubleshooting information, never include API keys, passwords, access tokens, or other credentials in screenshots, logs, or support requests.",
        },
      ],
    },

    {
      id: "quick-checklist",
      title: "Quick troubleshooting checklist",

      description:
        "Use this checklist when a domain list unexpectedly appears empty.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "checklist-1",
              title: "Account verified",
              description:
                "You are using the expected CMR account.",
            },
            {
              id: "checklist-2",
              title: "Workspace verified",
              description:
                "You are viewing or querying the correct workspace.",
            },
            {
              id: "checklist-3",
              title: "Filters cleared",
              description:
                "Search and status filters are not hiding the expected domain.",
            },
            {
              id: "checklist-4",
              title: "Order checked",
              description:
                "A recent domain order has been checked for processing or failure.",
            },
            {
              id: "checklist-5",
              title: "API response inspected",
              description:
                "The raw API response has been checked if the domain list is API-driven.",
            },
            {
              id: "checklist-6",
              title: "Frontend mapping checked",
              description:
                "The application has been checked for incorrect response mapping or filtering.",
            },
            {
              id: "checklist-7",
              title: "Domain status checked",
              description:
                "The domain's lifecycle status has been reviewed where available.",
            },
          ],
        },

        {
          type: "callout",
          variant: "success",
          title: "The goal of troubleshooting",
          content:
            "First determine whether the domain is absent from the underlying data or only absent from the current view. That distinction usually tells you where to investigate next.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the domain guides related to registration, lifecycle, and workspace validation.",

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
              id: "register-domain",
              title: "Registering a New Domain",
              description:
                "Learn how domain registration works from availability checks through order completion.",
              href: "/concepts/domains/register-domain",
            },
            {
              id: "workspace-conflict",
              title: "Why the Workspace-Conflict Check Matters Before You Order",
              description:
                "Understand how workspace validation helps prevent domain-order conflicts.",
              href: "/concepts/domains/workspace-conflict-check",
            },
            {
              id: "recover-expired-domain",
              title: "Recovering an Expired Domain (7-Day Grace Window)",
              description:
                "Understand what happens when a domain expires and how the grace period works.",
              href: "/concepts/domains/recover-expired-domain",
            },
            {
              id: "remove-domain",
              title: "Removing a Domain",
              description:
                "Understand what to review before removing a domain and how removal relates to DNS and subscriptions.",
              href: "/concepts/domains/remove-domain",
            },
          ],
        },
      ],
    },
  ],
};