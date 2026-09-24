export const faqGroups = [
  {
    id: "general",
    title: "General",
    description:
      "Understand how CMR works, how resources are structured, and when to use the API or Whitelabel Dashboard.",

    items: [
      {
        id: "what-is-cmr",
        question: "What is Cold Mail Reseller (CMR)?",
        answer:
          "CMR provides the infrastructure needed to build and operate a white-labeled cold email platform. It handles domains, mailboxes, DNS, subscriptions, warmup, and credential exports while you build your own customer-facing experience.",

        article: {
          slug: "/faqs/what-is-cmr",
        },
      },

      {
        id: "api-vs-whitelabel",
        question:
          "What is the difference between the CMR API and the Whitelabel Dashboard?",
        answer:
          "The CMR API is a REST API that gives you programmatic control over domains, mailboxes, subscriptions, warmup, webhooks, exports, and automation. The Whitelabel Dashboard is a pre-built branded experience intended for partners who want to resell CMR infrastructure without building their own software.",

        article: {
          slug: "/faqs/api-vs-whitelabel",
        },
      },

      {
        id: "api-vs-whitelabel-choice",
        question:
          "When should I use the CMR API instead of the Whitelabel Dashboard?",
        answer:
          "The API is intended for teams that need custom workflows, automation, integrations, bulk provisioning, webhooks, or their own customer experience. The Whitelabel Dashboard is intended for partners who want a ready-made branded experience without maintaining their own integration.",

        article: {
          slug: "/faqs/api-vs-whitelabel-choice",
        },
      },

      {
        id: "partner-user-model",
        question:
          "What is the Partner → User → Resource model?",
        answer:
          "You are the Partner account. Your customers are Users. Domains, DNS records, mailboxes, subscriptions, warmup, and exports belong to a User, and each User belongs to your Partner account. Your partner account is authenticated using the CMR API key.",
      },

      {
        id: "customer-access",
        question: "Do my customers interact directly with CMR?",
        answer:
          "No. In the API model, your customers interact with the platform you build. CMR provides the underlying infrastructure through your Partner account.",
      },

      {
        id: "user-id",
        question: "What is a userId and why is it important?",
        answer:
          "A userId identifies a customer within your Partner account. Most operations involving a customer's domains, DNS, mailboxes, subscriptions, or exports require the correct userId so CMR knows which customer's resources the request applies to.",
      },
    ],
  },

  /*
   * KEEP ALL YOUR OTHER FAQ GROUPS BELOW THIS POINT
   * EXACTLY AS THEY CURRENTLY EXIST.
   *
   * Example:
   *
   * {
   *   id: "authentication",
   *   title: "Authentication & API Basics",
   *   ...
   * }
   */
];

// export const faqGroups = [
//   {
//     id: "general",
//     title: "General",
//     description:
//       "Understand how CMR works, how resources are structured, and when to use the API or Whitelabel Dashboard.",
//     items: [
//       {
//         id: "what-is-cmr",
//         question: "What is Cold Mail Reseller (CMR)?",
//         answer:
//           "CMR provides the infrastructure needed to build and operate a white-labeled cold email platform. It handles domains, mailboxes, DNS, subscriptions, warmup, and credential exports while you build your own customer-facing experience.",
//       },
//       {
//         id: "api-vs-whitelabel",
//         question: "What is the difference between the CMR API and the Whitelabel Dashboard?",
//         answer:
//           "The CMR API is a REST API that gives you programmatic control over domains, mailboxes, subscriptions, warmup, webhooks, exports, and automation. The Whitelabel Dashboard is a pre-built branded experience intended for partners who want to resell CMR infrastructure without building their own software.",
//       },
//       {
//         id: "api-vs-whitelabel-choice",
//         question: "When should I use the CMR API instead of the Whitelabel Dashboard?",
//         answer:
//           "The API is intended for teams that need custom workflows, automation, integrations, bulk provisioning, webhooks, or their own customer experience. The Whitelabel Dashboard is intended for partners who want a ready-made branded experience without maintaining their own integration.",
//       },
//       {
//         id: "partner-user-model",
//         question: "What is the Partner → User → Resource model?",
//         answer:
//           "You are the Partner account. Your customers are Users. Domains, DNS records, mailboxes, subscriptions, warmup, and exports belong to a User, and each User belongs to your Partner account. Your partner account is authenticated using the CMR API key.",
//       },
//       {
//         id: "customer-access",
//         question: "Do my customers interact directly with CMR?",
//         answer:
//           "No. In the API model, your customers interact with the platform you build. CMR provides the underlying infrastructure through your Partner account.",
//       },
//       {
//         id: "user-id",
//         question: "What is a userId and why is it important?",
//         answer:
//           "A userId identifies a customer within your Partner account. Most operations involving a customer's domains, DNS, mailboxes, subscriptions, or exports require the correct userId so CMR knows which customer's resources the request applies to.",
//       },
//     ],
//   },

//   {
//     id: "authentication",
//     title: "Authentication & API Basics",
//     description:
//       "Learn how API authentication, request scopes, responses, and asynchronous operations work.",
//     items: [
//       {
//         id: "api-key",
//         question: "What API key does CMR use?",
//         answer:
//           "Production requests use your partner cmr-x-api-key. Sandbox requests use a separate cmr-x-sandbox-api-key. Production and sandbox keys are not interchangeable.",
//       },
//       {
//         id: "partner-vs-user-auth",
//         question: "What is the difference between partner-level and user-level requests?",
//         answer:
//           "Partner-level operations use your partner API key and are not tied to a particular customer. User-level operations use the same API key together with a userId query parameter and operate on a specific customer's resources.",
//       },
//       {
//         id: "response-envelope",
//         question: "What does a CMR API response look like?",
//         answer:
//           "CMR responses use a common envelope containing status, message, and data. The status in the response body matches the HTTP status code. Successful responses contain their result in data, while error responses have data set to null.",
//       },
//       {
//         id: "async-operations",
//         question: "What does it mean when an API operation is asynchronous?",
//         answer:
//           "An asynchronous operation has been accepted but has not necessarily completed. CMR returns an actionId or another request identifier and later reports the final result through a webhook.",
//       },
//       {
//         id: "async-retry",
//         question: "Should I submit an async request again if I haven't received its webhook yet?",
//         answer:
//           "No. The documentation explicitly warns against resubmitting an async operation while waiting for its completion webhook because doing so can create duplicate resources and duplicate charges.",
//       },
//       {
//         id: "action-vs-event-id",
//         question: "What is the difference between actionId, orderId, and eventId?",
//         answer:
//           "The request identifier such as actionId or orderId identifies the operation that started the process. eventId identifies a specific webhook delivery and is intended for deduplication. Use the request identifier to correlate the webhook to the original operation and eventId to prevent duplicate processing.",
//       },
//     ],
//   },

//   {
//     id: "billing",
//     title: "Wallet & Billing",
//     description:
//       "Understand wallet charging, mailbox pricing, warmup billing, and refunds.",
//     items: [
//       {
//         id: "wallet",
//         question: "How does the CMR wallet work?",
//         answer:
//           "CMR charges are deducted from a single Partner wallet. The documented charges include domain registration and renewal, mailbox subscriptions, warmup, pre-warmup, and placement tests. There is no separate CMR wallet for each customer.",
//       },
//       {
//         id: "customer-billing",
//         question: "Does CMR bill my customers directly?",
//         answer:
//           "No. CMR bills the Partner account. Your own platform or business is responsible for deciding how customers are billed.",
//       },
//       {
//         id: "mailbox-pricing",
//         question: "How is mailbox subscription pricing documented?",
//         answer:
//           "The document states a standard rate of $3 per mailbox per month until the subscription crosses the 12-month mark. The rate then becomes $5 per mailbox per month.",
//       },
//       {
//         id: "warmup-pricing",
//         question: "How is warmup charged?",
//         answer:
//           "Warmup can be charged with the mailbox when enabled during ordering. If warmup is added during an existing billing period, the document describes a prorated charge based on the warmup price and the remaining days in the billing period.",
//       },
//       {
//         id: "domain-pricing",
//         question: "Is domain pricing fixed?",
//         answer:
//           "No. Domain registration and renewal pricing varies by TLD. The document says to retrieve live pricing through the relevant domain availability or renewal-price endpoints.",
//       },
//       {
//         id: "volume-pricing",
//         question: "Does CMR offer volume pricing?",
//         answer:
//           "The document states that pricing can be negotiated for partners with high mailbox volumes and recommends contacting CMR Support for custom pricing.",
//       },
//       {
//         id: "refunds",
//         question: "Does CMR provide refunds through the API?",
//         answer:
//           "The document does not identify an API endpoint or webhook that returns money to the wallet. It describes billing-related actions primarily as stopping future billing rather than returning the current-period amount.",
//       },
//     ],
//   },

//   {
//     id: "domains",
//     title: "Domains & DNS",
//     description:
//       "Understand domain statuses, renewal windows, workspace checks, forwarding, and DNS records.",
//     items: [
//       {
//         id: "domain-statuses",
//         question: "What do the different domain statuses mean?",
//         answer:
//           "ACTIVE means the domain is operational. PENDING means registration is in progress. RENEWING indicates a renewal is in progress. GRACE_PERIOD means the domain has expired but is still recoverable within the documented grace period. EXPIRED means the API recovery window has passed. TRANSFERRED indicates the domain was transferred out, while INACTIVE indicates the domain is deactivated.",
//       },
//       {
//         id: "domain-renewal-window",
//         question: "When can a domain be renewed?",
//         answer:
//           "The document states that the renewal window opens when an ACTIVE domain is within 45 days of expiration. A domain in GRACE_PERIOD is also still renewable through the API during the documented 7-day grace period.",
//       },
//       {
//         id: "workspace-check",
//         question: "Why should I check for an existing workspace before registering a domain?",
//         answer:
//           "The workspace-conflict check is intended to identify an existing Google or Microsoft workspace associated with the domain before ordering. The document highlights this because a workspace conflict can cause provisioning to fail after the domain charge has already been taken.",
//       },
//       {
//         id: "domain-forwarding",
//         question: "What forwarding options are available?",
//         answer:
//           "The document describes URL forwarding and email catch-all forwarding as separate asynchronous operations. Email forwarding requires the mailboxes on the domain to be ACTIVE before it can be configured.",
//       },
//       {
//         id: "delete-domain",
//         question: "Can I delete a domain that still has mailboxes?",
//         answer:
//           "No. The documented deletion flow requires all mailboxes assigned to the domain to be removed first. Attempting to delete a domain that still has mailboxes returns an error.",
//       },
//       {
//         id: "dns-records",
//         question: "Does CMR automatically create SPF, DKIM, and DMARC records?",
//         answer:
//           "The document states that SPF, DKIM, and DMARC are managed through the DNS endpoints and are not automatically generated for you, apart from the documented partial excludedDMARCtags behavior.",
//       },
//       {
//         id: "record-id",
//         question: "Why do I need to save the DNS recordId?",
//         answer:
//           "The recordId returned when a DNS record is created is required to update or delete that specific record. If it was not stored, the document recommends retrieving the records first and obtaining the recordId.",
//       },
//       {
//         id: "nameserver-propagation",
//         question: "How long can nameserver changes take?",
//         answer:
//           "The document states that nameserver changes can take up to 48 hours to propagate globally. A successful API response confirms that the change was accepted and propagation started; it does not mean the change is already visible everywhere.",
//       },
//     ],
//   },

//   {
//     id: "mailboxes",
//     title: "Mailboxes",
//     description:
//       "Understand mailbox provisioning, statuses, warmup, and mailbox lifecycle behavior.",
//     items: [
//       {
//         id: "mailbox-lifecycle",
//         question: "What are the mailbox provisioning statuses?",
//         answer:
//           "The documented lifecycle is IN_PROGRESS → CREATING_PASSWORD → ACTIVE. ACTIVE means the mailbox is fully provisioned and ready to send. EXPIRED means its subscription has expired and sending is disabled until it is renewed.",
//       },
//       {
//         id: "mailbox-ready",
//         question: "When is a mailbox ready to use?",
//         answer:
//           "Wait until the mailbox reaches ACTIVE. The document specifically recommends waiting for the mailbox.created webhook before sending, exporting credentials, or connecting the mailbox to an outreach platform.",
//       },
//       {
//         id: "mailbox-webhook",
//         question: "Why should I use mailbox.created instead of continuously polling?",
//         answer:
//           "CMR recommends using webhooks because provisioning is asynchronous and completion times can vary. Avoiding unnecessary polling also preserves your API rate-limit capacity.",
//       },
//       {
//         id: "delete-mailbox",
//         question: "Can a deleted mailbox be restored?",
//         answer:
//           "No. The document states that mailbox deletion is permanent and that there is no restore or undo endpoint.",
//       },
//     ],
//   },

//   {
//     id: "subscriptions",
//     title: "Subscriptions & Renewals",
//     description:
//       "Understand subscription states, renewal behavior, cancellation, and the 12-month pricing change.",
//     items: [
//       {
//         id: "subscription-statuses",
//         question: "What do ACTIVE, RENEWING, PAST_DUE, CANCELLED, and EXPIRED mean?",
//         answer:
//           "ACTIVE means the subscription is current. RENEWING means renewal is being processed. PAST_DUE means payment failed and the documented grace period is running. CANCELLED means the Partner explicitly cancelled the subscription and the action is permanent. EXPIRED means the subscription was not renewed in time and the mailbox is disabled.",
//       },
//       {
//         id: "cancel-vs-expired",
//         question: "What is the difference between CANCELLED and EXPIRED?",
//         answer:
//           "CANCELLED is an explicit Partner action and is documented as permanent. EXPIRED means the subscription was not renewed in time. The document says these states should be treated differently rather than showing the same generic disabled message.",
//       },
//       {
//         id: "past-due",
//         question: "What happens when a subscription becomes PAST_DUE?",
//         answer:
//           "The documented flow is that a failed renewal moves the subscription into PAST_DUE and starts a 7-day grace period. If the issue is resolved, the subscription can return to ACTIVE. Otherwise it can progress to EXPIRED depending on the renewal configuration.",
//       },
//       {
//         id: "auto-vs-manual",
//         question: "Are automatic and manual renewal mutually exclusive?",
//         answer:
//           "No. The document explicitly states that manual and automatic renewal are not mutually exclusive. Both are still subject to the same eligibility, wallet-balance, and pricing validations.",
//       },
//       {
//         id: "price-increase",
//         question: "Why does a mailbox subscription change from $3 to $5?",
//         answer:
//           "According to the document, the subscription moves to $5 per mailbox per month at the renewal that crosses the 12-month active mark. The document attributes this to higher underlying Google Workspace and Microsoft 365 vendor costs.",
//       },
//       {
//         id: "recreate-subscription",
//         question: "Can the 12-month pricing tier be reset?",
//         answer:
//           "The document describes POST /subscriptions/recreate as the documented mechanism for starting a new subscription at the standard pricing tier. It preserves mailboxes and OAuth configuration but creates a new subscription and runs asynchronously.",
//       },
//       {
//         id: "pause-renewal",
//         question: "Should I cancel a subscription if I only want to stop automatic renewal?",
//         answer:
//           "No. The document distinguishes cancellation from disabling auto-renewal. Cancellation is permanent, while disabling auto-renewal allows the current subscription period to continue before the subscription can move through the renewal failure lifecycle.",
//       },
//     ],
//   },

//   {
//     id: "warmup",
//     title: "Warmup & Deliverability",
//     description:
//       "Understand mailbox warmup, pre-warmup, placement testing, and the documented deliverability limitations.",
//     items: [
//       {
//         id: "what-is-warmup",
//         question: "What does mailbox warmup do?",
//         answer:
//           "Warmup gradually increases a mailbox's sending activity to build sender reputation before campaigns begin. The document describes it as a deliverability and reputation-building mechanism available for Google Workspace and Microsoft mailboxes.",
//       },
//       {
//         id: "warmup-guarantee",
//         question: "Does warmup guarantee inbox placement?",
//         answer:
//           "No. The document explicitly states that the API documentation does not provide a numeric or guaranteed inbox-placement outcome. Warmup is described as reducing deliverability risk rather than eliminating it.",
//       },
//       {
//         id: "prewarmup",
//         question: "What is Pre-Warmup?",
//         answer:
//           "Pre-Warmup is different from warming a newly provisioned mailbox. It provides mailboxes from CMR's inventory that have already completed the warmup process.",
//       },
//       {
//         id: "prewarmup-ready",
//         question: "Does a successful Pre-Warmup order mean the mailboxes are immediately ready?",
//         answer:
//           "No. The document states that a successful HTTP response means the order was queued. You should wait for the prewarmup.order.success webhook before treating the mailboxes as ready.",
//       },
//       {
//         id: "placement-test",
//         question: "What is a placement test?",
//         answer:
//           "A placement test sends seed emails through Gmail and Outlook mailboxes to evaluate where messages land. The documented options also include spam-score analysis, blacklist checks, and an optional AI-generated deliverability report.",
//       },
//       {
//         id: "placement-test-wallet",
//         question: "What happens if there isn't enough wallet balance for a placement test?",
//         answer:
//           "The document states that placement tests return a dedicated HTTP 402 Payment Required response when the wallet balance is insufficient.",
//       },
//       {
//         id: "warmup-pause-disable",
//         question: "What is the difference between pausing and permanently disabling warmup?",
//         answer:
//           "Pausing warmup stops sending activity while the mailbox subscription continues billing. Permanently disabling warmup stops future warmup billing at the next renewal. The document states that neither action provides a mid-period refund.",
//       },
//     ],
//   },

//   {
//     id: "exports",
//     title: "Exports",
//     description:
//       "Understand platform credentials, OAuth exports, supported platforms, and export behavior.",
//     items: [
//       {
//         id: "platform-vs-oauth",
//         question: "What is the difference between Platform Exports and OAuth Exports?",
//         answer:
//           "Platform Exports use stored platform credentials such as email and password. OAuth Exports use Google or Microsoft OAuth and avoid storing the mailbox password. The document also notes that the two approaches are not mutually exclusive.",
//       },
//       {
//         id: "supported-platforms",
//         question: "Which platforms are documented for credential-based exports?",
//         answer:
//           "The document lists ReachInbox, Smartlead, Instantly, and EmailBison for platform credential exports.",
//       },
//       {
//         id: "credential-id",
//         question: "What is credentialId?",
//         answer:
//           "credentialId identifies a stored platform credential in CMR. The document recommends saving it on your side and reusing it for future exports instead of repeatedly looking it up.",
//       },
//       {
//         id: "update-vs-delete-credential",
//         question: "Should I update a platform credential or delete and recreate it?",
//         answer:
//           "For routine changes such as password rotation or workspace updates, the document recommends using PUT to update the credential. Deleting and recreating it produces a new credentialId, which can break references stored by your integration.",
//       },
//       {
//         id: "instantly-workspace",
//         question: "Why does an Instantly export need an orgId?",
//         answer:
//           "The documented Instantly flow requires selecting a workspace after storing the credential. You retrieve available workspaces, choose the required orgId, and associate it with the stored credential before exporting.",
//       },
//       {
//         id: "oauth-provider",
//         question: "How does CMR know whether an OAuth export is for Google or Microsoft?",
//         answer:
//           "The document states that the mailbox's own serviceProvider determines the provider. A Google configuration does not override a mailbox recorded as MICROSOFT, or vice versa.",
//       },
//     ],
//   },

//   {
//     id: "webhooks",
//     title: "Webhooks & Events",
//     description:
//       "Understand webhook delivery, security, retries, event IDs, and asynchronous workflows.",
//     items: [
//       {
//         id: "webhook-setup",
//         question: "How do CMR webhooks work?",
//         answer:
//           "You configure a POST endpoint, subscribe to the events you need, verify the incoming signature, and return HTTP 200 to acknowledge the delivery. Long-running processing should happen asynchronously after the webhook is acknowledged.",
//       },
//       {
//         id: "webhook-signature",
//         question: "How are CMR webhooks verified?",
//         answer:
//           "The documented security mechanism uses the cmr-x-signature HMAC-SHA256 header together with cmr-x-timestamp. The timestamp should also be checked so old webhook requests can be rejected.",
//       },
//       {
//         id: "webhook-timeout",
//         question: "How quickly should my webhook endpoint respond?",
//         answer:
//           "The document states that the endpoint must respond within 60 seconds. Long-running processing should be moved to a background process or queue.",
//       },
//       {
//         id: "webhook-retries",
//         question: "Does CMR retry failed webhook deliveries?",
//         answer:
//           "Yes. The document describes retries when a non-2xx response is returned. It lists immediate, approximately 30-second, and approximately 5-minute retry attempts before the webhook is marked failed.",
//       },
//       {
//         id: "duplicate-webhooks",
//         question: "Why can I receive the same webhook more than once?",
//         answer:
//           "Duplicate deliveries can happen because CMR retries failed webhook deliveries. The document recommends implementing idempotency using eventId so the same event is not processed more than once.",
//       },
//     ],
//   },

//   {
//     id: "limits-sandbox",
//     title: "Limits & Sandbox",
//     description:
//       "Understand rate limits, pagination, environments, and sandbox testing.",
//     items: [
//       {
//         id: "rate-limit",
//         question: "What is the CMR API rate limit?",
//         answer:
//           "The document states a limit of 5 requests per second per Partner API key, applied globally across endpoints and users.",
//       },
//       {
//         id: "rate-limit-webhooks",
//         question: "Do webhook deliveries count toward the API rate limit?",
//         answer:
//           "No. The document distinguishes outbound requests from your server to CMR from webhook deliveries from CMR to your server. Only your outbound API calls consume the documented API rate-limit capacity.",
//       },
//       {
//         id: "pagination",
//         question: "What are the default pagination limits?",
//         answer:
//           "The documented default is page 1 with a limit of 20 items, with a maximum limit of 100. The document recommends using limit=100 when you genuinely need to retrieve all records and throttling requests to stay below the rate limit.",
//       },
//       {
//         id: "sandbox",
//         question: "What is the CMR sandbox?",
//         answer:
//           "The sandbox provides a separate environment for testing API flows without real domain registrations or real charges. It uses a separate sandbox API key and base URL.",
//       },
//       {
//         id: "sandbox-production",
//         question: "Can sandbox data or keys be used in production?",
//         answer:
//           "No. The document states that production and sandbox credentials are separate, sandbox webhook destinations are separate, and sandbox data does not migrate to production.",
//       },
//       {
//         id: "sandbox-scenarios",
//         question: "How do sandbox scenarios work?",
//         answer:
//           "The sandbox supports scenario headers that deliberately force outcomes such as successful orders, domain failures, mailbox failures, workspace conflicts, renewal failures, past-due subscriptions, and pre-warmup failures. If the scenario header is omitted or unrecognized, the documented behavior defaults to the happy path.",
//       },
//     ],
//   },

//   {
//     id: "mcp",
//     title: "MCP & AI Agents",
//     description:
//       "Understand what the CMR MCP server does and when to use MCP versus REST.",
//     items: [
//       {
//         id: "what-is-mcp",
//         question: "What is the CMR MCP server?",
//         answer:
//           "The CMR MCP server exposes CMR operations to compatible AI clients such as Claude Desktop and Cursor. Instead of manually calling API endpoints, you can describe supported operations in natural language and let the MCP client call the underlying CMR API.",
//       },
//       {
//         id: "mcp-api-key",
//         question: "Which API key does MCP use?",
//         answer:
//           "The document states that MCP uses the same Partner API key available from Settings → Integrations.",
//       },
//       {
//         id: "mcp-vs-rest",
//         question: "When should I use MCP instead of the REST API?",
//         answer:
//           "The document positions MCP for one-off administrative tasks, exploration, and conversational operations. It recommends using the REST API for customer-facing workflows, bulk operations, scheduled jobs, webhook-driven processes, and cases where deterministic programmatic behavior is required.",
//       },
//     ],
//   },

//   {
//     id: "whitelabel",
//     title: "Whitelabel Dashboard",
//     description:
//       "Understand the Whitelabel capabilities that are confirmed in the documentation.",
//     items: [
//       {
//         id: "whitelabel-dashboard",
//         question: "Where is the Whitelabel Partner Dashboard?",
//         answer:
//           "The document identifies partners.coldmailreseller.com as the Partner Dashboard.",
//       },
//       {
//         id: "whitelabel-customization",
//         question: "What can I customize in the Whitelabel Dashboard?",
//         answer:
//           "The documented capabilities include a custom logo, custom login page, and client emails configured through settings.",
//       },
//       {
//         id: "whitelabel-marketplace",
//         question: "Does the Whitelabel Dashboard include a marketplace?",
//         answer:
//           "Yes. The document confirms that a built-in marketplace exists, but it does not provide enough detail about its exact client-facing behavior to document the full flow yet.",
//       },
//       {
//         id: "whitelabel-pricing",
//         question: "How do I configure my client pricing and margins?",
//         answer:
//           "The current support document does not provide enough information to document the exact pricing or margin configuration flow. This should be added after the relevant Whitelabel Dashboard source or walkthrough is available.",
//       },
//     ],
//   },

//   {
//     id: "compliance",
//     title: "Compliance & Deliverability",
//     description:
//       "Important limitations around compliance guidance and deliverability claims.",
//     items: [
//       {
//         id: "compliance-guidance",
//         question: "Does the CMR API documentation define CAN-SPAM, GDPR, or Google/Microsoft AUP requirements?",
//         answer:
//           "No. The support document explicitly says these topics require separate legal, compliance, Terms of Service, or provider-policy sources. The API documentation should not be used as definitive legal or compliance guidance.",
//       },
//       {
//         id: "zap-shield",
//         question: "What does Zap Shield guarantee?",
//         answer:
//           "The current support document does not contain enough verified information to describe Zap Shield or make any guarantee about it. A separate factual source should be used before publishing this as an FAQ.",
//       },
//     ],
//   },
// ];