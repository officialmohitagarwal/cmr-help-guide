export const getMailboxDetailsArticle = {
  id: "get-mailbox-details",
  slug: "/concepts/mailboxes-provisioning/get-mailbox-details",
  category: {
    id: "mailboxes-provisioning",
    label: "Mailboxes and Provisioning",
    slug: "/concepts/mailboxes-provisioning",
  },
  title: "Finding and Retrieving Mailbox Details",
  description:
    "Understand the different CMR mailbox retrieval endpoints, when to use each one, and how to retrieve details for all mailboxes, a specific user, or a specific mailbox.",
  author: "CMR Team",
  updated: "September 2026",
  introduction:
    "CMR provides several mailbox retrieval endpoints because different workflows require different levels of mailbox information. You can retrieve all mailboxes, retrieve mailboxes belonging to a specific user, retrieve one mailbox by its mailboxId, or retrieve administrative mailbox details. Understanding the difference between these endpoints helps you request the right data without confusing a mailbox collection with a single mailbox.",
  sections: [
    {
      id: "why-multiple-endpoints",
      title: "Why CMR Has Multiple Mailbox Retrieval Endpoints",
      description:
        "The correct retrieval endpoint depends on whether you need a mailbox collection, user-specific mailboxes, or one specific mailbox.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR exposes multiple mailbox retrieval endpoints because a Partner may need mailbox information at different levels. A request for every mailbox is different from a request for all mailboxes belonging to one user, and both are different from retrieving one mailbox by its mailboxId.",
        },
        {
          type: "heading",
          content: "The main retrieval endpoints",
        },
        {
          type: "steps",
          items: [
            {
              id: "all-mailboxes",
              title: "GET /mailboxes",
              description:
                "Use this endpoint when you need the mailbox collection available through the general mailbox retrieval flow.",
            },
            {
              id: "user-mailboxes",
              title: "GET /mailboxes/single?userId=",
              description:
                "Use this endpoint when you need the mailboxes associated with one specific user. Despite the endpoint name containing 'single', the documented response is a mailbox collection for that user.",
            },
            {
              id: "specific-mailbox",
              title: "GET /mailboxes/mailbox?mailboxId=",
              description:
                "Use this endpoint when you already know the mailboxId and need details for one specific mailbox.",
            },
            {
              id: "admin-details",
              title: "GET /mailboxes/admin-mailbox-details?userId=&mailboxId=",
              description:
                "Use this endpoint when the workflow requires the documented administrative mailbox details for a specific mailbox and user.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not confuse /mailboxes/single with a single mailbox",
          content:
            "CMR's documentation specifically distinguishes the /mailboxes/single endpoint from retrieving one mailbox by mailboxId. /mailboxes/single is used to retrieve mailboxes for one user; /mailboxes/mailbox is used to retrieve one mailbox.",
        },
      ],
    },

    {
      id: "get-all-mailboxes",
      title: "Retrieving Mailboxes",
      description:
        "Use the general mailbox endpoint when your workflow needs the mailbox collection.",
      content: [
        {
          type: "paragraph",
          content:
            "The general mailbox retrieval endpoint is GET /mailboxes. It is intended for retrieving mailbox information through the general mailbox listing flow.",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /mailboxes\nAuthorization: cmr-x-api-key: <api-key>",
        },
        {
          type: "paragraph",
          content:
            "Use this endpoint when your application needs to work with the mailbox collection rather than targeting a particular mailboxId.",
        },
        {
          type: "heading",
          content: "When this endpoint is useful",
        },
        {
          type: "steps",
          items: [
            {
              id: "list-dashboard",
              title: "Mailbox listings",
              description:
                "Use the general retrieval flow when displaying or processing a mailbox collection.",
            },
            {
              id: "mailbox-search",
              title: "Mailbox discovery",
              description:
                "Use the mailbox collection when your application needs to identify mailboxes before performing a more specific operation.",
            },
            {
              id: "mailbox-selection",
              title: "Selecting a mailbox",
              description:
                "Once you identify the mailbox you need, use its mailboxId with the specific mailbox endpoint when detailed retrieval is required.",
            },
          ],
        },
      ],
    },

    {
      id: "get-user-mailboxes",
      title: "Retrieving Mailboxes for a User",
      description:
        "Retrieve the mailbox collection associated with one specific user.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides GET /mailboxes/single?userId= for retrieving mailboxes associated with a specific user.",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /mailboxes/single?userId=<userId>\nAuthorization: cmr-x-api-key: <api-key>",
        },
        {
          type: "paragraph",
          content:
            "The endpoint name can be misleading because /single does not mean that the response contains only one mailbox. It is the user-specific mailbox retrieval flow.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Think 'single user', not 'single mailbox'",
          content:
            "The /mailboxes/single endpoint is associated with one user, while that user can have multiple mailboxes. If you need one particular mailbox, use the mailboxId-based endpoint instead.",
        },
      ],
    },

    {
      id: "get-specific-mailbox",
      title: "Retrieving One Mailbox by mailboxId",
      description:
        "Use the mailboxId when you need a specific mailbox rather than a mailbox collection.",
      content: [
        {
          type: "paragraph",
          content:
            "When your application already knows the mailboxId, use GET /mailboxes/mailbox?mailboxId= to retrieve the corresponding mailbox details.",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /mailboxes/mailbox?mailboxId=<mailboxId>\nAuthorization: cmr-x-api-key: <api-key>",
        },
        {
          type: "steps",
          items: [
            {
              id: "find-id",
              title: "1. Obtain the mailboxId",
              description:
                "Get the mailboxId from the relevant mailbox data or event payload available to your application.",
            },
            {
              id: "request-mailbox",
              title: "2. Request the mailbox",
              description:
                "Pass the mailboxId to GET /mailboxes/mailbox.",
            },
            {
              id: "process-details",
              title: "3. Process the returned details",
              description:
                "Use the returned mailbox information for the workflow that required the specific mailbox.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Use mailboxId when the target is known",
          content:
            "If you already know which mailbox you need, retrieving the specific mailbox by mailboxId avoids treating a mailbox collection as though it were a single mailbox.",
        },
      ],
    },

    {
      id: "admin-mailbox-details",
      title: "Retrieving Administrative Mailbox Details",
      description:
        "Use the administrative mailbox details endpoint when your workflow requires the documented admin-level response.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR also provides an administrative mailbox details endpoint that accepts both userId and mailboxId.",
        },
        {
          type: "code",
          language: "http",
          content:
            "GET /mailboxes/admin-mailbox-details?userId=<userId>&mailboxId=<mailboxId>\nAuthorization: cmr-x-api-key: <api-key>",
        },
        {
          type: "paragraph",
          content:
            "This endpoint is distinct from GET /mailboxes/mailbox because it explicitly includes both the userId and mailboxId in the request.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Use the endpoint that matches the required response",
          content:
            "Do not substitute the administrative endpoint simply because you have access to it. Use the documented mailbox endpoint that matches the information your workflow requires.",
        },
      ],
    },

    {
      id: "choosing-endpoint",
      title: "Choosing the Correct Endpoint",
      description:
        "Use the target of your request to determine which mailbox retrieval endpoint to call.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "choose-all",
              title: "I need mailbox collection information",
              description:
                "Use GET /mailboxes.",
            },
            {
              id: "choose-user",
              title: "I need mailboxes belonging to one user",
              description:
                "Use GET /mailboxes/single?userId=<userId>.",
            },
            {
              id: "choose-one",
              title: "I need one specific mailbox",
              description:
                "Use GET /mailboxes/mailbox?mailboxId=<mailboxId>.",
            },
            {
              id: "choose-admin",
              title: "I need administrative mailbox details",
              description:
                "Use GET /mailboxes/admin-mailbox-details?userId=<userId>&mailboxId=<mailboxId>.",
            },
          ],
        },
        {
          type: "code",
          language: "text",
          content:
            "All mailboxes        → GET /mailboxes\nOne user's mailboxes → GET /mailboxes/single?userId=\nOne mailbox          → GET /mailboxes/mailbox?mailboxId=\nAdmin details        → GET /mailboxes/admin-mailbox-details?userId=&mailboxId=",
        },
      ],
    },

    {
      id: "using-mailbox-id",
      title: "Working with mailboxId",
      description:
        "The mailboxId is the key identifier when your application needs to target one mailbox.",
      content: [
        {
          type: "paragraph",
          content:
            "The mailboxId identifies the mailbox used by the mailbox-specific retrieval endpoint. It is also useful when performing other mailbox-level operations that require a mailbox identifier.",
        },
        {
          type: "paragraph",
          content:
            "For example, once your application has identified a mailbox from a listing or mailbox event, it can retain the mailboxId and use it for subsequent mailbox-specific requests.",
        },
        {
          type: "steps",
          items: [
            {
              id: "store-mailbox-id",
              title: "Store the mailboxId",
              description:
                "Associate the mailboxId with the corresponding mailbox record in your application.",
            },
            {
              id: "target-mailbox",
              title: "Use it for mailbox-specific requests",
              description:
                "Pass the mailboxId when an API operation targets that particular mailbox.",
            },
            {
              id: "avoid-email-lookup",
              title: "Do not substitute an email address when mailboxId is required",
              description:
                "Use the identifier expected by the endpoint rather than assuming that the mailbox email address can replace mailboxId.",
            },
          ],
        },
      ],
    },

    {
      id: "retrieval-workflow",
      title: "A Practical Mailbox Retrieval Workflow",
      description:
        "A simple workflow for retrieving the right mailbox data in your application.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "workflow-one",
              title: "1. Define what you need",
              description:
                "Decide whether you need all mailboxes, a user's mailboxes, one mailbox, or administrative mailbox details.",
            },
            {
              id: "workflow-two",
              title: "2. Select the matching endpoint",
              description:
                "Choose the endpoint based on the target and level of information required.",
            },
            {
              id: "workflow-three",
              title: "3. Provide the required identifiers",
              description:
                "Pass userId and/or mailboxId according to the selected endpoint.",
            },
            {
              id: "workflow-four",
              title: "4. Process the response",
              description:
                "Use the returned mailbox information for your dashboard, synchronization, or mailbox-level workflow.",
            },
            {
              id: "workflow-five",
              title: "5. Store stable identifiers",
              description:
                "Keep the mailboxId available when your application will need to perform additional mailbox-specific operations.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Retrieve only what the workflow needs",
          content:
            "Using the correct retrieval endpoint keeps your integration easier to reason about. Start with the scope of the information you need, then select the endpoint that matches that scope.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common Retrieval Mistakes",
      description:
        "Avoid the most common mailbox endpoint selection errors.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-one",
              title: "Assuming /single returns one mailbox",
              description:
                "The /mailboxes/single endpoint is associated with one user and can return that user's mailbox collection.",
            },
            {
              id: "mistake-two",
              title: "Using /mailboxes when you need one mailbox",
              description:
                "If the mailboxId is already known, use the mailbox-specific endpoint instead of retrieving a broader collection.",
            },
            {
              id: "mistake-three",
              title: "Forgetting userId",
              description:
                "Endpoints that require userId need the appropriate user identifier in the request.",
            },
            {
              id: "mistake-four",
              title: "Using the wrong endpoint for administrative details",
              description:
                "When your workflow specifically requires the administrative mailbox details endpoint, provide both the documented userId and mailboxId parameters.",
            },
            {
              id: "mistake-five",
              title: "Losing the mailboxId",
              description:
                "Mailbox-specific operations depend on the mailbox identifier. Preserve it when your application needs to work with the mailbox later.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related Guides",
      description:
        "Continue with the articles covering mailbox provisioning, updates, lifecycle events, and deletion.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "mailbox-lifecycle",
              title: "Mailbox Lifecycle Explained",
              description:
                "Understand mailbox provisioning states, ACTIVE and EXPIRED states, and the mailbox lifecycle.",
              href: "/concepts/mailboxes-provisioning/mailbox-lifecycle",
            },
            {
              id: "provisioning-mailbox",
              title: "Provisioning a Mailbox",
              description:
                "Learn how mailbox orders are created and how CMR reports provisioning completion.",
              href: "/concepts/mailboxes-provisioning/provisioning-mailbox",
            },
            {
              id: "adding-mailboxes",
              title: "Adding Mailboxes to an Existing Domain",
              description:
                "Learn how to add additional mailboxes to an existing domain or subscription.",
              href: "/concepts/mailboxes-provisioning/adding-mailboxes-to-existing-domain",
            },
            {
              id: "updating-mailbox",
              title: "Updating Mailbox Details and Resetting a Password",
              description:
                "Understand the mailbox update flow and the documented details that can be changed.",
              href: "/concepts/mailboxes-provisioning/updating-mailbox-details",
            },
            {
              id: "webhooks-polling",
              title: "Why You Should Subscribe to Webhooks Instead of Polling",
              description:
                "Understand why webhook events are useful for tracking asynchronous mailbox operations.",
              href: "/concepts/mailboxes-provisioning/webhooks-vs-polling",
            },
            {
              id: "deleting-mailbox",
              title: "Deleting a Mailbox: What's Reversible and What Isn't",
              description:
                "Understand mailbox deletion and which parts of the operation cannot be reversed.",
              href: "/concepts/mailboxes-provisioning/deleting-mailbox",
            },
          ],
        },
      ],
    },
  ],
};