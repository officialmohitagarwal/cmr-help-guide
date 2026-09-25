export const userVsPartnerOperationsArticle = {
  id: "user-vs-partner-operations",

  slug:
    "/concepts/users-partner-administration/user-vs-partner-operations",

  category: {
    id: "users-partner-administration",
    label: "Users & Partner Administration",
    slug: "/concepts/users-partner-administration",
  },

  title: "User-Level vs Partner-Level Operations",

  description:
    "Understand the difference between Partner-level and User-level operations, how customer ownership works, and when a userId is required.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "CMR separates Partner-level operations from User-level operations. Your Partner account is the top-level account that authenticates API requests, while each User represents a customer managed by that Partner. Understanding this distinction helps you know when an operation applies to your Partner account and when it must be associated with a specific customer through userId.",

  sections: [
    {
      id: "two-level-model",
      title: "The Partner and User model",
      description:
        "Understand the basic hierarchy used throughout the CMR API.",
      content: [
        {
          type: "paragraph",
          content:
            "A CMR Partner account can manage multiple Users. Each User represents a customer of the Partner and owns the customer resources associated with that account.",
        },
        {
          type: "steps",
          items: [
            {
              id: "partner-level",
              title: "1. Partner",
              description:
                "The Partner is the account integrating with CMR and is authenticated using the Partner API key.",
            },
            {
              id: "user-level",
              title: "2. User",
              description:
                "A User represents a customer managed by the Partner and is identified by a CMR-generated userId.",
            },
            {
              id: "resources",
              title: "3. Customer resources",
              description:
                "Domains, mailboxes, subscriptions, orders, DNS configuration, warmup, and exports can be associated with a specific User.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Think of User as the customer scope",
          content:
            "When an API operation is tied to one customer, the User and its userId provide the scope that identifies which customer's resources the operation concerns.",
        },
      ],
    },

    {
      id: "partner-level",
      title: "What is a Partner-level operation?",
      description:
        "Partner-level operations operate at the top level of your CMR account.",
      content: [
        {
          type: "paragraph",
          content:
            "Partner-level operations are not tied to one individual customer. They operate within the scope of your Partner account and use your Partner API key for authentication.",
        },
        {
          type: "steps",
          items: [
            {
              id: "partner-auth",
              title: "Partner API key",
              description:
                "Authenticate the request using the cmr-x-api-key associated with your Partner account.",
            },
            {
              id: "partner-users",
              title: "User administration",
              description:
                "Creating and listing Users are examples of Partner-level operations because the Users belong to your Partner account.",
            },
            {
              id: "partner-geo",
              title: "Geographic reference",
              description:
                "Country and state reference endpoints are Partner-level because the reference data is not owned by one customer.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Partner-level does not mean 'one customer'",
          content:
            "A Partner-level request operates within your overall CMR Partner account. It is not automatically associated with a particular User.",
        },
      ],
    },

    {
      id: "user-level",
      title: "What is a User-level operation?",
      description:
        "User-level operations are associated with a specific customer.",
      content: [
        {
          type: "paragraph",
          content:
            "A User-level operation is associated with one customer through the CMR userId. The Partner API key still authenticates the request, but the userId identifies which customer's resources the operation should use.",
        },
        {
          type: "steps",
          items: [
            {
              id: "identify-user",
              title: "1. Identify the customer",
              description:
                "Determine the CMR userId belonging to the customer whose resources you need to manage.",
            },
            {
              id: "authenticate",
              title: "2. Authenticate as the Partner",
              description:
                "Use your Partner API key to authenticate the request.",
            },
            {
              id: "scope",
              title: "3. Apply the User scope",
              description:
                "Pass the required userId to the endpoint when the operation is documented as User-level.",
            },
            {
              id: "resource",
              title: "4. Operate on the customer's resource",
              description:
                "The operation is then performed against the domain, mailbox, subscription, or other resource associated with that User.",
            },
          ],
        },
      ],
    },

    {
      id: "authentication-vs-scope",
      title: "API key and userId serve different purposes",
      description:
        "Do not confuse authentication with customer scope.",
      content: [
        {
          type: "paragraph",
          content:
            "The Partner API key and userId answer two different questions. The API key identifies and authenticates your Partner integration, while userId identifies the customer scope when the endpoint requires one.",
        },
        {
          type: "steps",
          items: [
            {
              id: "api-key",
              title: "cmr-x-api-key",
              description:
                "Answers: Which Partner is making this API request?",
            },
            {
              id: "user-id",
              title: "userId",
              description:
                "Answers: Which customer does this User-level operation apply to?",
            },
          ],
        },
        {
          type: "code",
          language: "http",
          content: `GET /mailboxes?userId=usr_abc123
cmr-x-api-key: your_partner_api_key`,
        },
        {
          type: "callout",
          variant: "warning",
          title: "A userId is not an authentication credential",
          content:
            "Do not treat userId as a replacement for the Partner API key. The two values have different roles in the API request.",
        },
      ],
    },

    {
      id: "resource-ownership",
      title: "How customer ownership works",
      description:
        "Understand why the User scope matters when managing customer resources.",
      content: [
        {
          type: "paragraph",
          content:
            "Customer resources are associated with the User they belong to. Keeping the correct userId attached to your internal customer record allows your application to address the correct CMR resources consistently.",
        },
        {
          type: "steps",
          items: [
            {
              id: "domain-owner",
              title: "Domains",
              description:
                "A customer's domains are associated with that customer's User.",
            },
            {
              id: "mailbox-owner",
              title: "Mailboxes",
              description:
                "A customer's mailboxes belong to the corresponding User scope.",
            },
            {
              id: "subscription-owner",
              title: "Subscriptions",
              description:
                "A customer's mailbox subscriptions are associated with the User.",
            },
            {
              id: "order-owner",
              title: "Orders",
              description:
                "Orders can be created and processed in the context of a specific User.",
            },
            {
              id: "dns-owner",
              title: "DNS",
              description:
                "DNS operations that manage a customer's domain use the relevant User context.",
            },
            {
              id: "export-owner",
              title: "Exports",
              description:
                "Mailbox export operations operate in the context of the relevant customer resources.",
            },
          ],
        },
      ],
    },

    {
      id: "when-user-id-required",
      title: "When should you expect userId?",
      description:
        "Use the endpoint definition to determine whether the operation needs customer scope.",
      content: [
        {
          type: "paragraph",
          content:
            "Do not add userId to every API request automatically. Check the endpoint's documented parameters and determine whether the operation is Partner-level or User-level.",
        },
        {
          type: "steps",
          items: [
            {
              id: "create-users",
              title: "Creating Users",
              description:
                "POST /users creates a User under your Partner account and therefore does not use an existing userId.",
            },
            {
              id: "list-users",
              title: "Listing Users",
              description:
                "GET /users/list operates at the Partner level and returns Users belonging to the Partner.",
            },
            {
              id: "get-user",
              title: "Getting a specific User",
              description:
                "GET /users?userId= requires the User identifier because you are requesting one specific customer.",
            },
            {
              id: "customer-resources",
              title: "Managing customer resources",
              description:
                "Many domain, mailbox, order, subscription, and DNS operations require userId to identify the customer's scope.",
            },
            {
              id: "geo-reference",
              title: "Geo reference data",
              description:
                "GET /geo/countries and GET /geo/states are Partner-level reference operations and do not require a customer userId.",
            },
          ],
        },
      ],
    },

    {
      id: "internal-customer-mapping",
      title: "Map your customer to the CMR User",
      description:
        "Keep your own customer system and CMR's User system connected.",
      content: [
        {
          type: "paragraph",
          content:
            "Your application will usually have its own customer or organization identifier. CMR has a separate userId. Keep both identifiers in your database instead of replacing one with the other.",
        },
        {
          type: "code",
          language: "json",
          content: `{
  "customerId": "customer_123",
  "cmrUserId": "usr_abc123"
}`,
        },
        {
          type: "steps",
          items: [
            {
              id: "mapping-create",
              title: "1. Create your customer",
              description:
                "Create the customer record in your own application.",
            },
            {
              id: "mapping-cmr",
              title: "2. Create the CMR User",
              description:
                "Call POST /users and create the corresponding CMR User.",
            },
            {
              id: "mapping-store",
              title: "3. Store the CMR userId",
              description:
                "Save the returned CMR identifier against your customer record.",
            },
            {
              id: "mapping-use",
              title: "4. Use the mapping for future requests",
              description:
                "Whenever your application needs to operate on that customer's CMR resources, retrieve the associated CMR userId.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Do not overwrite your internal customer ID",
          content:
            "Keep your own customer identifier and the CMR userId as separate fields. This makes it easier to maintain your internal data model while still addressing CMR resources correctly.",
        },
      ],
    },

    {
      id: "wrong-user",
      title: "Avoid cross-customer operations",
      description:
        "Using the wrong userId can point an operation at the wrong customer scope.",
      content: [
        {
          type: "paragraph",
          content:
            "When your Partner manages many customers, selecting the correct userId becomes especially important. A request can be authenticated correctly with your Partner API key while still using the wrong customer scope.",
        },
        {
          type: "steps",
          items: [
            {
              id: "lookup-customer",
              title: "1. Identify your internal customer",
              description:
                "Start with the customer or organization selected in your own application.",
            },
            {
              id: "lookup-cmr",
              title: "2. Retrieve the mapped CMR userId",
              description:
                "Use the customer-to-CMR mapping stored in your database.",
            },
            {
              id: "verify-scope",
              title: "3. Verify the User",
              description:
                "When necessary, retrieve the User from CMR and confirm that the customer information matches your internal record.",
            },
            {
              id: "send-request",
              title: "4. Send the customer-level request",
              description:
                "Use the verified userId when calling the relevant User-level endpoint.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Authentication can succeed while the customer scope is wrong",
          content:
            "A valid Partner API key does not guarantee that the userId in your request belongs to the customer you intended to operate on. Validate your customer-to-user mapping.",
        },
      ],
    },

    {
      id: "practical-example",
      title: "Example: provisioning a customer",
      description:
        "See how Partner and User scope work together in a typical customer workflow.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "example-create",
              title: "1. Create the customer User",
              description:
                "Your Partner calls POST /users and receives a CMR userId.",
            },
            {
              id: "example-store",
              title: "2. Store the userId",
              description:
                "Your application associates the CMR userId with its internal customer record.",
            },
            {
              id: "example-domain",
              title: "3. Create the customer's domain",
              description:
                "Your application makes the appropriate domain request using the customer's User scope.",
            },
            {
              id: "example-mailbox",
              title: "4. Provision mailboxes",
              description:
                "Mailbox orders are created in the context of the same customer.",
            },
            {
              id: "example-webhook",
              title: "5. Track asynchronous results",
              description:
                "Webhook events report the eventual result of asynchronous operations. Correlate the event with the original request using the documented identifiers.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Partner remains the API integrator",
          content:
            "Your Partner account continues to authenticate the API requests throughout the workflow. The User scope identifies which customer the resource operation belongs to.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid common scope and authentication errors.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-auth",
              title: "Treating userId as the API key",
              description:
                "userId identifies the customer; it does not replace Partner authentication.",
            },
            {
              id: "mistake-no-id",
              title: "Forgetting userId on a User-level endpoint",
              description:
                "Check the endpoint documentation and provide the required customer identifier when the operation is User-level.",
            },
            {
              id: "mistake-wrong-id",
              title: "Using the wrong customer's userId",
              description:
                "Maintain a reliable mapping between your internal customer and the corresponding CMR User.",
            },
            {
              id: "mistake-geo",
              title: "Adding userId to Geo reference requests",
              description:
                "Country and state reference endpoints are Partner-level reference operations.",
            },
            {
              id: "mistake-create",
              title: "Expecting POST /users to require an existing userId",
              description:
                "The purpose of POST /users is to create the User, so the CMR userId is generated as part of the creation process.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with customer management and geographic reference data.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "manage-users",
              title: "Creating and Managing Users (Your Customer)",
              description:
                "Learn how to create, retrieve, list, and update Users through the CMR User API.",
              href: "/users/creating-managing-users",
            },
            {
              id: "geo-reference",
              title: "Geo Reference: Countries & States",
              description:
                "Learn how to retrieve CMR-supported country and state reference data.",
              href: "/concepts/users-partner-administration/geo-reference",
            },
            {
              id: "deleting-user",
              title: "Deleting a User: Requirements, Cleanup & Permanence",
              description:
                "Understand the prerequisites and permanent effects of deleting a customer User.",
              href: "/users/deleting-user",
            },
          ],
        },
      ],
    },
  ],
};