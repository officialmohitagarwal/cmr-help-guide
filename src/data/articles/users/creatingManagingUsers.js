export const creatingManagingUsersArticle = {
  id: "creating-managing-users",
  slug: "/users/creating-managing-users",
  category: {
    id: "users",
    label: "Users & Partner Administration",
    slug: "/users",
  },
  title: "Creating and Managing Users (Your Customer)",
  description:
    "Learn how to create, retrieve, list, and update your customers in CMR, understand the userId lifecycle, and manage the customer information required for downstream resources.",
  author: "CMR Team",
  updated: "September 2026",

  introduction:
    "In CMR, a User represents your customer. Every domain, mailbox, subscription, and export belongs to a User under your Partner account. You create the User once, store the returned userId, and then use that identifier when working with the customer's resources.",

  sections: [
    {
      id: "user-model",
      title: "Understand the User model",
      description:
        "Start with the relationship between your Partner account and the customers you manage.",
      content: [
        {
          type: "paragraph",
          content:
            "Your CMR Partner account sits at the top of the hierarchy. Users represent the customers underneath your Partner account, and customer-owned resources are associated with the corresponding User.",
        },
        {
          type: "steps",
          items: [
            {
              id: "partner",
              title: "1. Partner",
              description:
                "You are the CMR Partner and authenticate API requests using your Partner API key.",
            },
            {
              id: "user",
              title: "2. User",
              description:
                "Your customer is represented by a User created through POST /users and identified by userId.",
            },
            {
              id: "resources",
              title: "3. Customer resources",
              description:
                "The customer's domains, mailboxes, subscriptions, DNS configuration, warmup, and exports are associated with that User.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Store the CMR userId",
          content:
            "The userId returned when the User is created is the identifier you should use for subsequent customer-level operations. Do not replace it with an internal customer ID from your own database.",
        },
      ],
    },

    {
      id: "api-overview",
      title: "User management API",
      description:
        "These endpoints cover the core User management lifecycle.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "list-users",
              title: "GET /users/list",
              description:
                "Returns a paginated list of Users under your Partner account and supports search.",
            },
            {
              id: "get-user",
              title: "GET /users?userId=",
              description:
                "Retrieves the details of a specific User.",
            },
            {
              id: "create-user",
              title: "POST /users",
              description:
                "Creates a new User under your Partner account.",
            },
            {
              id: "update-user",
              title: "PUT /users?userId=",
              description:
                "Updates the User's billing information. The documented update flow requires the full billing object.",
            },
            {
              id: "delete-user",
              title: "DELETE /users?userId=",
              description:
                "Permanently deletes a User after the required associated resources have been cleared.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Authentication",
          content:
            "User creation and listing are Partner-level operations. Operations on a specific customer's resources use the Partner API key together with the appropriate userId.",
        },
      ],
    },

    {
      id: "create-user",
      title: "Creating a User",
      description:
        "Create your customer before provisioning domains, mailboxes, or subscriptions for them.",
      content: [
        {
          type: "paragraph",
          content:
            "Use POST /users to create a new customer under your Partner account. The response contains the identifier that you will use to associate subsequent customer resources with this User.",
        },
        {
          type: "code",
          language: "http",
          content: `POST /users
cmr-x-api-key: your_partner_api_key
Content-Type: application/json`,
        },
        {
          type: "code",
          language: "json",
          content: `{
  "email": "alice@company.com",
  "firstName": "Alice",
  "lastName": "Johnson",
  "company": "Acme Corp",
  "languagePreference": "en",
  "addressLineOne": "123 Main Street",
  "city": "New York",
  "state": "New York",
  "country": "US",
  "postalCode": "10001",
  "phoneCc": "1",
  "phone": "2125551234"
}`,
        },
        {
          type: "steps",
          items: [
            {
              id: "send-user",
              title: "1. Send the customer information",
              description:
                "Send the User's profile and billing/address information to POST /users.",
            },
            {
              id: "receive-user",
              title: "2. Read the response",
              description:
                "The response contains the newly created User identifier in data.id.",
            },
            {
              id: "store-user",
              title: "3. Store the userId",
              description:
                "Save data.id as the CMR userId in your own customer record.",
            },
            {
              id: "use-user",
              title: "4. Use the userId for customer resources",
              description:
                "Pass the userId when making subsequent requests for this customer's domains, mailboxes, subscriptions, DNS, warmup, or exports.",
            },
          ],
        },
        {
          type: "code",
          language: "json",
          content: `{
  "status": 200,
  "message": "User created",
  "data": {
    "id": "usr_abc123"
  }
}`,
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not substitute your internal ID",
          content:
            "CMR expects the userId generated by CMR. If your own system uses a separate customer or user UUID, keep it as your internal identifier but do not send it in place of the CMR userId.",
        },
      ],
    },

    {
      id: "user-id-lifecycle",
      title: "The userId is the link to everything the customer owns",
      description:
        "Understand how the User identifier connects customer operations across CMR.",
      content: [
        {
          type: "paragraph",
          content:
            "Once a User is created, the userId becomes the reference point for the customer's resources. Store it alongside your own customer record so your application can consistently address the correct CMR User.",
        },
        {
          type: "steps",
          items: [
            {
              id: "user-created",
              title: "User is created",
              description:
                "POST /users creates the customer and returns data.id.",
            },
            {
              id: "domain-resource",
              title: "Domains use the User",
              description:
                "Customer domain operations are scoped to the corresponding userId.",
            },
            {
              id: "mailbox-resource",
              title: "Mailboxes use the User",
              description:
                "Customer mailbox operations are associated with the same User.",
            },
            {
              id: "subscription-resource",
              title: "Subscriptions use the User",
              description:
                "Customer subscriptions are associated with that User.",
            },
            {
              id: "export-resource",
              title: "Exports use the User",
              description:
                "Customer mailbox exports and related operations remain associated with the User.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "One CMR User, one customer scope",
          content:
            "Keep the CMR userId associated with the correct customer in your system. Using another customer's userId can cause requests to operate on the wrong customer scope or fail validation.",
        },
      ],
    },

    {
      id: "list-users",
      title: "Listing and searching Users",
      description:
        "Use the list endpoint to retrieve customers under your Partner account.",
      content: [
        {
          type: "paragraph",
          content:
            "GET /users/list returns a paginated list of Users under your Partner account. The endpoint supports search, making it suitable for customer-management screens and administrative workflows.",
        },
        {
          type: "code",
          language: "http",
          content: `GET /users/list
cmr-x-api-key: your_partner_api_key`,
        },
        {
          type: "steps",
          items: [
            {
              id: "list-request",
              title: "1. Request the User list",
              description:
                "Call GET /users/list with your Partner API key.",
            },
            {
              id: "pagination",
              title: "2. Handle pagination",
              description:
                "Treat the response as a paginated collection and request additional pages when more Users are available.",
            },
            {
              id: "search",
              title: "3. Use search when needed",
              description:
                "Use the endpoint's documented search capability when locating a particular customer instead of loading every User unnecessarily.",
            },
            {
              id: "store-id",
              title: "4. Use the returned userId",
              description:
                "When a customer is selected, use the CMR userId returned by the API for subsequent customer-level requests.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Pagination is part of the API contract",
          content:
            "Do not assume GET /users/list returns every customer in a single response. Build your integration to handle pagination.",
        },
      ],
    },

    {
      id: "get-user",
      title: "Retrieving a specific User",
      description:
        "Retrieve the profile and billing details for one customer.",
      content: [
        {
          type: "paragraph",
          content:
            "Use GET /users?userId= when you already know the CMR userId and need the customer's current profile and billing information.",
        },
        {
          type: "code",
          language: "http",
          content: `GET /users?userId=usr_abc123
cmr-x-api-key: your_partner_api_key`,
        },
        {
          type: "steps",
          items: [
            {
              id: "identify-user",
              title: "1. Identify the CMR userId",
              description:
                "Use the userId returned by User creation or retrieved from the User list.",
            },
            {
              id: "request-user",
              title: "2. Request the User",
              description:
                "Send the userId as the query parameter.",
            },
            {
              id: "use-details",
              title: "3. Use the returned details",
              description:
                "Use the returned profile and billing information for your customer-management workflow.",
            },
          ],
        },
      ],
    },

    {
      id: "update-user",
      title: "Updating User information",
      description:
        "Update the billing information associated with an existing User.",
      content: [
        {
          type: "paragraph",
          content:
            "Use PUT /users?userId= to update the User's billing information. The documented CMR behavior requires the full billing object rather than a partial update.",
        },
        {
          type: "code",
          language: "http",
          content: `PUT /users?userId=usr_abc123
cmr-x-api-key: your_partner_api_key
Content-Type: application/json`,
        },
        {
          type: "steps",
          items: [
            {
              id: "retrieve-current",
              title: "1. Retrieve the current User details",
              description:
                "Get the current User information before preparing the update when you need to preserve existing billing fields.",
            },
            {
              id: "prepare-full",
              title: "2. Prepare the complete billing object",
              description:
                "Include the full billing object required by the update endpoint rather than sending only the field you want to change.",
            },
            {
              id: "send-update",
              title: "3. Send the PUT request",
              description:
                "Send the complete update to PUT /users?userId=.",
            },
            {
              id: "verify-update",
              title: "4. Verify the result",
              description:
                "Confirm that the User details were updated successfully.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "PUT is not a partial update",
          content:
            "The CMR documentation states that partial updates to the billing object return a validation error. Do not treat this endpoint like a PATCH request.",
        },
      ],
    },

    {
      id: "field-encoding",
      title: "User field encoding and accepted characters",
      description:
        "Understand the documented character handling for User string fields.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR documents Unicode support for User string fields except email. These fields support Unicode letters, numbers, spaces, and the characters . , ' # & ( ) / -.",
        },
        {
          type: "paragraph",
          content:
            "HTML-encoded characters such as &#39; are automatically decoded before validation. You do not need to pre-sanitize those values on your side solely for this reason.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Email is the exception",
          content:
            "The documented Unicode/character rule applies to string fields except email. Treat email according to the email validation rules of the API.",
        },
      ],
    },

    {
      id: "customer-onboarding-flow",
      title: "Recommended customer onboarding flow",
      description:
        "See how User creation fits into a typical CMR customer setup.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "onboarding-create",
              title: "1. Create the customer",
              description:
                "Create the User with POST /users.",
            },
            {
              id: "onboarding-store",
              title: "2. Store userId",
              description:
                "Persist the returned CMR userId alongside your own customer record.",
            },
            {
              id: "onboarding-geo",
              title: "3. Resolve address reference values",
              description:
                "Use CMR's country and state reference endpoints when your onboarding UI needs supported geographic values.",
            },
            {
              id: "onboarding-domain",
              title: "4. Provision customer resources",
              description:
                "Use the User's userId when creating domains, mailboxes, subscriptions, and other customer-level resources.",
            },
            {
              id: "onboarding-webhooks",
              title: "5. Track asynchronous operations",
              description:
                "For asynchronous provisioning workflows, use the documented webhook events rather than assuming that an accepted request means the resource is already ready.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common User management mistakes",
      description:
        "Avoid the issues that most often cause customer-management failures.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "wrong-id",
              title: "Using an internal UUID instead of CMR userId",
              description:
                "Use the exact userId returned by CMR when creating or listing the User.",
            },
            {
              id: "partial-update",
              title: "Sending only one billing field in PUT /users",
              description:
                "The documented update behavior requires the full billing object.",
            },
            {
              id: "missing-user",
              title: "Omitting userId from a User-level request",
              description:
                "Customer-level resource operations require the appropriate userId.",
            },
            {
              id: "wrong-user",
              title: "Using another customer's userId",
              description:
                "Make sure the userId belongs to the customer whose resources your application intends to manage.",
            },
            {
              id: "assume-single-page",
              title: "Assuming GET /users/list returns every User",
              description:
                "The list endpoint is paginated. Handle additional pages.",
            },
            {
              id: "assume-complete",
              title: "Treating an accepted async request as completed",
              description:
                "Some downstream operations are asynchronous. Use the appropriate webhook event to determine the final outcome.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with User scope, deletion, and geographic reference data.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "user-vs-partner",
              title: "User-Level vs Partner-Level Operations",
              description:
                "Understand the Partner and User hierarchy, authentication scope, and when userId is required.",
              href: "/users/user-vs-partner-operations",
            },
            {
              id: "deleting-user",
              title: "Deleting a User: Requirements, Cleanup & Permanence",
              description:
                "Learn the prerequisites and sequence for permanently deleting a customer.",
              href: "/users/deleting-user",
            },
            {
              id: "geo-reference",
              title: "Geo Reference: Countries & States",
              description:
                "Use CMR's country and state reference endpoints when building customer address flows.",
              href: "/users/geo-reference",
            },
          ],
        },
      ],
    },
  ],
};