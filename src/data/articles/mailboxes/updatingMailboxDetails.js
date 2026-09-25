export const updatingMailboxDetailsArticle = {
  id: "updating-mailbox-details",
  slug: "/concepts/mailboxes-provisioning/updating-mailbox-details",
  category: {
    id: "mailboxes-provisioning",
    label: "Mailboxes and Provisioning",
    slug: "/concepts/mailboxes-provisioning",
  },
  title: "Updating Mailbox Details and Resetting a Password",
  description:
    "Learn how to update mailbox display details, usernames, and profile pictures, how bulk updates work, and what the current API documentation supports for password resets.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "CMR provides a dedicated mailbox update endpoint for changing supported mailbox details without deleting and recreating the mailbox. Updates are applied asynchronously by the workspace provider and can be submitted for either one mailbox or multiple mailboxes in a single request.",

  sections: [
    {
      id: "what-can-be-updated",
      title: "What you can update",
      description:
        "The mailbox update endpoint supports several mailbox profile fields.",
      content: [
        {
          type: "paragraph",
          content:
            "The current CMR API reference documents the mailbox update endpoint for changing the username, first name, last name, and profile picture of one or more mailboxes.",
        },
        {
          type: "steps",
          items: [
            {
              id: "username",
              title: "Username",
              description:
                "Update the mailbox username using the userName field.",
            },
            {
              id: "first-name",
              title: "First name",
              description:
                "Update the first name associated with the mailbox using firstName.",
            },
            {
              id: "last-name",
              title: "Last name",
              description:
                "Update the last name associated with the mailbox using lastName.",
            },
            {
              id: "profile-picture",
              title: "Profile picture",
              description:
                "Set or update the mailbox profile picture using profilePicture.",
            },
            {
              id: "remove-profile-picture",
              title: "Remove profile picture",
              description:
                "Set removeProfilePicture to true when the existing profile picture should be cleared.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Updates are asynchronous",
          content:
            "CMR documents that mailbox detail changes are applied asynchronously on the workspace provider. The API response indicates that the update will happen shortly rather than confirming that the provider has already completed the change.",
        },
      ],
    },

    {
      id: "endpoint",
      title: "Update mailbox details",
      description:
        "Use the PATCH endpoint to update one or more supported mailbox fields.",
      content: [
        {
          type: "paragraph",
          content:
            "The endpoint for updating mailbox details is:",
        },
        {
          type: "code",
          language: "http",
          content:
            "PATCH /mailboxes/update-mailbox-details?userId=",
        },
        {
          type: "paragraph",
          content:
            "The request requires the Partner API key in the cmr-x-api-key header and a JSON request body containing mailboxData.",
        },
        {
          type: "code",
          language: "http",
          content:
            "PATCH /mailboxes/update-mailbox-details?userId=USER_ID\nAuthorization: API Key\ncmr-x-api-key: YOUR_API_KEY\nContent-Type: application/json",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not use DELETE for profile changes",
          content:
            "Updating mailbox details does not require deleting or recreating the mailbox. Use the PATCH endpoint for supported mailbox detail changes.",
        },
      ],
    },

    {
      id: "single-update",
      title: "Update a single mailbox",
      description:
        "Send one mailboxData object when changing a single mailbox.",
      content: [
        {
          type: "paragraph",
          content:
            "For a single mailbox update, mailboxData is an object containing the mailboxId and whichever supported fields you want to change.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "mailboxData": {\n    "mailboxId": "GP6M2J2DHXM3F2J40S8AP316R2QR",\n    "userName": "alice.doe",\n    "firstName": "Alice",\n    "lastName": "Doe"\n  }\n}',
        },
        {
          type: "steps",
          items: [
            {
              id: "single-id",
              title: "1. Identify the mailbox",
              description:
                "Provide the mailboxId of the mailbox whose details should be changed.",
            },
            {
              id: "single-fields",
              title: "2. Include the fields to change",
              description:
                "Send only the supported mailbox detail fields required for the update.",
            },
            {
              id: "single-request",
              title: "3. Send the PATCH request",
              description:
                "Send the request to /mailboxes/update-mailbox-details with the user's userId.",
            },
            {
              id: "single-result",
              title: "4. Track the asynchronous update",
              description:
                "The API responds that the mailbox details will update shortly. Use the returned actionId to correlate the operation if your integration needs to track it.",
            },
          ],
        },
      ],
    },

    {
      id: "bulk-update",
      title: "Update multiple mailboxes at once",
      description:
        "The same endpoint supports bulk updates using an array of mailboxData objects.",
      content: [
        {
          type: "paragraph",
          content:
            "For bulk updates, pass an array instead of a single mailboxData object. Each array item contains its own mailboxId and can contain a different set of fields.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "mailboxData": [\n    {\n      "mailboxId": "GP6M2J2DHXM3F2J40S8AP316R2QR",\n      "firstName": "Alice",\n      "lastName": "Doe"\n    },\n    {\n      "mailboxId": "ANOTHER_ID",\n      "userName": "bob.smith",\n      "firstName": "Bob"\n    }\n  ]\n}',
        },
        {
          type: "paragraph",
          content:
            "CMR documents that each mailbox in a bulk request is processed independently. This means different mailboxes in the same request can contain different fields.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Bulk updates are independent",
          content:
            "The documented bulk response contains a per-mailbox result, so one mailbox can succeed while another fails.",
        },
      ],
    },

    {
      id: "profile-picture",
      title: "Adding or removing a profile picture",
      description:
        "Manage the mailbox profile picture through the same update endpoint.",
      content: [
        {
          type: "heading",
          content: "Add or update a profile picture",
        },
        {
          type: "paragraph",
          content:
            "Provide the profile picture URL through the profilePicture field.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "mailboxData": {\n    "mailboxId": "GP6M2J2DHXM3F2J40S8AP316R2QR",\n    "profilePicture": "https://cdn.example.com/avatar.jpg"\n  }\n}',
        },

        {
          type: "heading",
          content: "Remove a profile picture",
        },
        {
          type: "paragraph",
          content:
            "Set removeProfilePicture to true to clear the current profile picture.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "mailboxData": {\n    "mailboxId": "GP6M2J2DHXM3F2J40S8AP316R2QR",\n    "removeProfilePicture": true\n  }\n}',
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not send both operations unnecessarily",
          content:
            "Use profilePicture when setting or changing the picture. Use removeProfilePicture: true when the existing picture should be removed.",
        },
      ],
    },

    {
      id: "password-reset",
      title: "Resetting a mailbox password",
      description:
        "The main Mailboxes documentation mentions password reset support, but the current endpoint reference does not document a password request field.",
      content: [
        {
          type: "paragraph",
          content:
            "The main CMR Mailboxes documentation lists PATCH /mailboxes/update-mailbox-details?userId= as an endpoint that can update mailbox details or reset a password.",
        },
        {
          type: "paragraph",
          content:
            "However, the current detailed Update Mailbox Details API reference documents the request fields for username, first name, last name, profile picture, and profile picture removal. It does not currently document a password field in the request schema or example.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not invent a password field",
          content:
            "If you need to implement password reset through the API, verify the current CMR password-reset request schema before sending a password field. This article does not prescribe an undocumented field or request format.",
        },
        {
          type: "paragraph",
          content:
            "This distinction is important for API integrations: the high-level Mailboxes page mentions password reset, while the detailed endpoint reference currently exposes only the documented mailbox detail fields.",
        },
      ],
    },

    {
      id: "response",
      title: "Understanding the update response",
      description:
        "The update request is asynchronous and returns an action identifier.",
      content: [
        {
          type: "paragraph",
          content:
            "A successful request returns a message indicating that the mailbox details will update shortly and includes an actionId.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "status": 200,\n  "message": "Mailbox details will update shortly",\n  "actionId": "ACT_7a078272-0fa7-4db4-a85b-c78697dacea1"\n}',
        },
        {
          type: "paragraph",
          content:
            "For a bulk update, the documented response can contain a result for each mailbox, including whether that individual update succeeded.",
        },
        {
          type: "code",
          language: "json",
          content:
            '{\n  "message": "Mailbox details will update shortly",\n  "data": [\n    {\n      "mailboxId": "GP6M2J2DHXM3F2J40S8AP316R2QR",\n      "success": true,\n      "message": "Mailbox details will update shortly"\n    },\n    {\n      "mailboxId": "ANOTHER_ID",\n      "success": false,\n      "message": "Rate limit exceeded"\n    }\n  ]\n}',
        },
        {
          type: "callout",
          variant: "info",
          title: "Bulk responses can contain mixed results",
          content:
            "When updating multiple mailboxes, inspect each per-mailbox result rather than treating the entire request as successful or failed.",
        },
      ],
    },

    {
      id: "errors",
      title: "Handling update errors",
      description:
        "The current API reference documents several possible HTTP errors.",
      content: [
        {
          type: "paragraph",
          content:
            "The documented endpoint can return HTTP errors including 400 Bad Request, 401 Unauthorized, 404 Not Found, 422 Unprocessable Entity, and 429 Too Many Requests.",
        },
        {
          type: "steps",
          items: [
            {
              id: "bad-request",
              title: "400 Bad Request",
              description:
                "Check the request structure and the fields being submitted.",
            },
            {
              id: "unauthorized",
              title: "401 Unauthorized",
              description:
                "Verify that the API key is present and valid.",
            },
            {
              id: "not-found",
              title: "404 Not Found",
              description:
                "Verify that the mailboxId and related resource identifiers refer to an existing resource.",
            },
            {
              id: "unprocessable",
              title: "422 Unprocessable Entity",
              description:
                "Review the submitted values and make sure they satisfy the endpoint's validation requirements.",
            },
            {
              id: "rate-limit",
              title: "429 Too Many Requests",
              description:
                "The API may reject requests when the applicable rate limit has been exceeded. In bulk responses, an individual mailbox result can also report rate limiting.",
            },
          ],
        },
      ],
    },

    {
      id: "safe-update-flow",
      title: "Safe mailbox update workflow",
      description:
        "Use this sequence when changing mailbox details in your application.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "find-mailbox",
              title: "1. Find the mailbox",
              description:
                "Retrieve the mailbox and confirm the mailboxId before making changes.",
            },
            {
              id: "choose-fields",
              title: "2. Choose the fields to change",
              description:
                "Decide which supported fields need to be updated instead of sending unnecessary changes.",
            },
            {
              id: "build-request",
              title: "3. Build mailboxData",
              description:
                "Use a single object for one mailbox or an array for multiple mailbox updates.",
            },
            {
              id: "send-patch",
              title: "4. Send the PATCH request",
              description:
                "Call /mailboxes/update-mailbox-details with the appropriate userId and API key.",
            },
            {
              id: "track-action",
              title: "5. Track the operation",
              description:
                "Store the returned actionId when your application needs to correlate the asynchronous operation.",
            },
            {
              id: "verify",
              title: "6. Verify the mailbox",
              description:
                "Retrieve the mailbox again when your workflow needs to confirm the resulting mailbox details.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid the most common issues when updating mailbox details.",
      content: [
        {
          type: "heading",
          content: "Using the wrong mailboxId",
        },
        {
          type: "paragraph",
          content:
            "Always retrieve and verify the mailbox before updating it, especially when several mailboxes belong to the same user.",
        },

        {
          type: "heading",
          content: "Assuming the response means the provider update is complete",
        },
        {
          type: "paragraph",
          content:
            "The API response says that the mailbox details will update shortly. The operation is applied asynchronously on the workspace provider.",
        },

        {
          type: "heading",
          content: "Treating a bulk request as all-or-nothing",
        },
        {
          type: "paragraph",
          content:
            "The documented bulk response provides a result for each mailbox. Inspect individual results.",
        },

        {
          type: "heading",
          content: "Sending unsupported fields",
        },
        {
          type: "paragraph",
          content:
            "Use only fields documented by the current endpoint reference. In particular, do not invent a password field based solely on the high-level statement that the endpoint supports password resets.",
        },

        {
          type: "heading",
          content: "Deleting and recreating the mailbox for a profile change",
        },
        {
          type: "paragraph",
          content:
            "Supported mailbox profile changes should be handled through the PATCH update endpoint rather than deleting the mailbox.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "Continue with Mailboxes and Provisioning",
      description:
        "Use these guides to understand the mailbox resource and related management operations.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "mailbox-lifecycle",
              title: "Mailbox Lifecycle Explained",
              description:
                "Understand the states a mailbox passes through from provisioning to expiration.",
              href: "/concepts/mailboxes-provisioning/mailbox-lifecycle",
            },
            {
              id: "provisioning-mailbox",
              title: "Provisioning a Mailbox",
              description:
                "Learn how CMR creates and provisions mailboxes through an order.",
              href: "/concepts/mailboxes-provisioning/provisioning-mailbox",
            },
            {
              id: "get-mailbox-details",
              title: "Finding and Retrieving Mailbox Details",
              description:
                "Learn how to locate the correct mailbox before making changes.",
              href: "/concepts/mailboxes-provisioning/get-mailbox-details",
            },
            {
              id: "webhooks-vs-polling",
              title: "Why You Should Subscribe to Webhooks Instead of Polling",
              description:
                "Understand CMR's event-driven approach to mailbox lifecycle updates.",
              href: "/concepts/mailboxes-provisioning/webhooks-vs-polling",
            },
            {
              id: "deleting-mailbox",
              title: "Deleting a Mailbox: What's Reversible and What Isn't",
              description:
                "Understand the permanent consequences of deleting a mailbox.",
              href: "/concepts/mailboxes-provisioning/deleting-mailbox",
            },
          ],
        },
      ],
    },
  ],
};