export const troubleshootingGroups = [
  {
    id: "authentication",
    title: "Authentication & API Errors",
    description:
      "Start here when API requests are being rejected before the underlying operation runs.",
    items: [
      {
        id: "invalid-api-key",
        problem: "I'm getting a 401 Invalid API Key error.",
        cause:
          "The request is missing the required API key, the key is invalid, or the wrong environment key is being used.",
        steps: [
          "Confirm the cmr-x-api-key header is present.",
          "Check that the API key belongs to the correct Partner account.",
          "If you're testing in sandbox, make sure you're using the sandbox key rather than the production key.",
          "Regenerate the key from the Partner Dashboard if necessary.",
        ],
        note:
          "Production and sandbox keys are separate and are not interchangeable.",
      },
      {
        id: "missing-user-id",
        problem: "I'm getting 'Please provide a userId'.",
        cause:
          "The endpoint you're calling is a user-level endpoint and requires a userId query parameter.",
        steps: [
          "Check whether the endpoint operates on a customer's resources.",
          "Pass the exact userId returned by POST /users or GET /users/list.",
          "Do not substitute an internal customer ID from your own database.",
        ],
      },
      {
        id: "user-not-found",
        problem: "I'm getting 'The requested user does not exist.'",
        cause:
          "The userId cannot be found under the authenticated Partner account.",
        steps: [
          "Verify the userId exactly.",
          "Confirm the user belongs to the Partner account associated with the API key.",
          "Check that you are using the correct environment.",
        ],
      },
    ],
  },

  {
    id: "orders",
    title: "Orders & Provisioning",
    description:
      "Use these checks when domains or mailboxes remain pending or an order fails.",
    items: [
      {
        id: "order-stuck",
        problem: "My order was accepted but the domain or mailbox isn't ready yet.",
        cause:
          "Order processing is asynchronous. An initial successful response confirms that the operation was accepted, not that provisioning has completed.",
        steps: [
          "Save the orderId or actionId returned by the request.",
          "Wait for the corresponding success or failure webhook.",
          "For orders, you can also use the documented status endpoint to inspect current state.",
          "Do not submit the same order again while waiting.",
        ],
        note:
          "The document describes normal order provisioning as potentially taking roughly 10–90 seconds.",
      },
      {
        id: "duplicate-order",
        problem: "I submitted an order again because the webhook hadn't arrived.",
        cause:
          "Async operations must not be blindly resubmitted while waiting for their completion webhook.",
        steps: [
          "Stop submitting additional copies of the order.",
          "Use the original orderId/actionId to track the operation.",
          "Check webhook delivery logs.",
          "Implement webhook handling so the final state is driven by the completion event.",
        ],
        note:
          "The document warns that duplicate submissions can create duplicate resources and charges.",
      },
      {
        id: "domain-order-failed",
        problem: "My domain order failed.",
        cause:
          "The order can fail for reasons such as domain availability, workspace conflicts, validation issues, or other asynchronous provisioning failures.",
        steps: [
          "Check the domain.order.failed webhook and its reason field.",
          "Verify the domain was available before ordering.",
          "Check for an existing Google or Microsoft workspace.",
          "Check the userId and environment.",
          "Do not immediately resubmit until the original operation has reached a final state.",
        ],
      },
    ],
  },

  {
    id: "domains",
    title: "Domain Issues",
    description:
      "Troubleshoot unavailable domains, empty lists, workspace conflicts, renewal, and deletion.",
    items: [
      {
        id: "domain-unavailable",
        problem: "A domain is unavailable for registration.",
        cause:
          "The requested domain cannot currently be registered.",
        steps: [
          "Run the domain availability check before placing the order.",
          "Confirm the full domain name and TLD.",
          "Do not place an order until the domain is reported as available.",
        ],
      },
      {
        id: "workspace-conflict",
        problem: "The domain passes availability but provisioning fails because of a workspace conflict.",
        cause:
          "Domain registration and Google/Microsoft workspace provisioning are separate checks. A domain can be registrable while an existing workspace still prevents mailbox provisioning.",
        steps: [
          "Call the workspace-conflict check before ordering.",
          "Review the returned conflict status.",
          "Do not assume that a newly purchased or previously unused domain has no existing workspace association.",
        ],
      },
      {
        id: "empty-domain-list",
        problem: "GET /domains/by-user returns an empty list.",
        cause:
          "The document specifically warns that an incorrect userId can return an empty result instead of a 404.",
        steps: [
          "Verify the exact userId returned by CMR.",
          "Make sure you are not using an internal UUID from your own database.",
          "Confirm you're querying the correct environment.",
          "If the order was just completed, wait for domain.order.success before assuming the domain is missing.",
        ],
      },
      {
        id: "domain-expired",
        problem: "My domain has expired.",
        cause:
          "The domain may be in GRACE_PERIOD or may have passed the API recovery window.",
        steps: [
          "Check the current domain status.",
          "If it is in GRACE_PERIOD, retrieve the renewal price and renew within the documented grace period.",
          "If it is EXPIRED beyond the documented API recovery period, the document says registrar escalation is required.",
        ],
      },
      {
        id: "cannot-delete-domain",
        problem: "I'm unable to delete a domain.",
        cause:
          "CMR does not allow deletion while mailboxes remain assigned to the domain.",
        steps: [
          "List the mailboxes assigned to the domain.",
          "Remove the required mailboxes first.",
          "Retry domain deletion after the domain has zero assigned mailboxes.",
        ],
      },
    ],
  },

  {
    id: "dns",
    title: "DNS & Propagation",
    description:
      "Troubleshoot DNS updates, missing records, nameservers, and propagation delays.",
    items: [
      {
        id: "dns-record-not-found",
        problem: "I can't update or delete a DNS record.",
        cause:
          "Updating or deleting a DNS record requires its recordId.",
        steps: [
          "Call GET /dns for the relevant domain.",
          "Find the recordId returned for the record.",
          "Use that recordId in the update or delete request.",
        ],
      },
      {
        id: "excluded-dmarc-tags",
        problem: "I'm getting a 400 error when using excludedDMARCtags.",
        cause:
          "The document says excludedDMARCtags is only valid for TXT records whose host is _dmarc or starts with _dmarc.",
        steps: [
          "Confirm the recordType is TXT.",
          "Confirm the host is _dmarc or a supported _dmarc host.",
          "Remove excludedDMARCtags from unrelated DNS record types.",
        ],
      },
      {
        id: "dns-not-visible",
        problem: "My DNS update returned 200 but I can't see the change externally.",
        cause:
          "A successful API response confirms that CMR accepted the change. It does not guarantee that external DNS propagation has completed.",
        steps: [
          "For DNS records, retrieve the records again through the DNS API.",
          "For nameservers, use an external DNS lookup tool.",
          "Allow for propagation time before concluding that the change failed.",
        ],
        note:
          "The document states that nameserver changes can take up to 48 hours to propagate globally.",
      },
    ],
  },

  {
    id: "mailboxes",
    title: "Mailbox Provisioning",
    description:
      "Troubleshoot mailboxes that are still provisioning, unavailable, or deleted.",
    items: [
      {
        id: "mailbox-not-active",
        problem: "My mailbox exists but isn't ready to use.",
        cause:
          "Mailbox provisioning is asynchronous and the mailbox may still be IN_PROGRESS or CREATING_PASSWORD.",
        steps: [
          "Check the mailbox status.",
          "Wait until the mailbox reaches ACTIVE.",
          "Prefer the mailbox.created webhook instead of repeatedly polling.",
          "Only export credentials or connect the mailbox after it is ACTIVE.",
        ],
      },
      {
        id: "mailbox-export-too-early",
        problem: "My mailbox export is failing because the mailbox isn't ready.",
        cause:
          "The document warns against exporting or connecting a mailbox before it reaches ACTIVE.",
        steps: [
          "Check the mailbox status.",
          "Wait for mailbox.created.",
          "Validate the mailbox before exporting.",
          "Retry the export only after the mailbox is ready.",
        ],
      },
      {
        id: "deleted-mailbox",
        problem: "I deleted a mailbox and want to restore it.",
        cause:
          "Mailbox deletion is documented as permanent.",
        steps: [
          "Confirm whether the deletion actually completed.",
          "If the mailbox was successfully removed, do not expect a restore endpoint.",
          "Provision a new mailbox if another mailbox is required.",
        ],
      },
    ],
  },

  {
    id: "subscriptions",
    title: "Subscription & Renewal Issues",
    description:
      "Troubleshoot PAST_DUE, renewal failures, cancellation, and pricing changes.",
    items: [
      {
        id: "subscription-past-due",
        problem: "A subscription is PAST_DUE.",
        cause:
          "The documented primary path is a failed renewal payment. A separate failure path occurs when the linked domain is in GRACE_PERIOD or EXPIRED.",
        steps: [
          "Check the subscription.past_due webhook.",
          "Identify the affected subscriptionId.",
          "If it is a payment issue, have the customer update their payment method through your own billing system.",
          "Renew the affected subscription or enable auto-renewal.",
          "Wait for subscription.renewal.success.",
        ],
        note:
          "If the failure is caused by the linked domain being in GRACE_PERIOD or EXPIRED, renew the domain first.",
      },
      {
        id: "renewal-not-working",
        problem: "My subscription renewal keeps failing.",
        cause:
          "Renewal is subject to eligibility, wallet balance, pricing validation, and the state of the linked domain.",
        steps: [
          "Check whether the subscription is eligible for renewal.",
          "Confirm sufficient wallet balance.",
          "Check the linked domain status.",
          "If the domain is in GRACE_PERIOD or EXPIRED, resolve the domain issue first.",
          "Inspect the subscription.renewal.failed event for the failure reason.",
        ],
      },
      {
        id: "accidental-cancellation",
        problem: "I cancelled a subscription when I only wanted to stop auto-renewal.",
        cause:
          "The document treats cancellation as permanent and distinguishes it from disabling automatic renewal.",
        steps: [
          "Do not use the cancel operation as a pause mechanism.",
          "For future subscriptions, use the auto-renew toggle when the intention is only to stop automatic renewal.",
          "If the subscription is already CANCELLED, follow the documented recreation/new-subscription flow where applicable.",
        ],
      },
      {
        id: "subscription-price-increase",
        problem: "Why did my mailbox subscription price increase?",
        cause:
          "The document states that the subscription moves to $5/mailbox/month at the renewal that crosses the 12-month active mark.",
        steps: [
          "Check the subscription's active age.",
          "Check whether the renewal crossed the 12-month mark.",
          "Review the subscription.updated event if your integration tracks events.",
        ],
      },
    ],
  },

  {
    id: "warmup",
    title: "Warmup & Pre-Warmup",
    description:
      "Troubleshoot warmup status, billing, pre-warmup readiness, and placement tests.",
    items: [
      {
        id: "warmup-not-started",
        problem: "Warmup isn't running on my mailbox.",
        cause:
          "Warmup may not have been enabled, may still be pending, or may have been paused or permanently disabled.",
        steps: [
          "Check the mailbox warmup status.",
          "Confirm whether onWarmup was enabled during ordering.",
          "If adding warmup later, make sure the mailbox is ACTIVE.",
          "Check whether warmup was paused or permanently disabled.",
        ],
      },
      {
        id: "warmup-billing",
        problem: "I paused warmup but I'm still being billed.",
        cause:
          "Pausing warmup stops sending activity but does not stop the underlying mailbox subscription or warmup billing behavior described in the document.",
        steps: [
          "Confirm whether you used the pause/toggle operation or permanently disabled warmup.",
          "Remember that pause keeps the subscription active.",
          "Permanent deletion stops future warmup billing at renewal.",
          "The document does not describe a mid-period refund.",
        ],
      },
      {
        id: "prewarmup-not-ready",
        problem: "My Pre-Warmup order returned successfully but the mailboxes aren't ready.",
        cause:
          "The initial response only confirms that the order was queued.",
        steps: [
          "Save the order information.",
          "Wait for prewarmup.order.success.",
          "Only export or use the assigned mailboxes after the success event.",
        ],
      },
      {
        id: "prewarmup-provider-config",
        problem: "My Pre-Warmup order is failing because of provider configuration.",
        cause:
          "The document specifies provider-specific OAuth requirements.",
        steps: [
          "For Microsoft, check microsoftOauthRoute.",
          "For Google OAuth, check that the full google object is provided.",
          "Confirm the provider matches the intended mailbox configuration.",
        ],
      },
      {
        id: "placement-test-failure",
        problem: "My placement test is failing.",
        cause:
          "Placement tests require active mailboxes with SMTP credentials and also require sufficient wallet balance.",
        steps: [
          "Confirm every mailboxId refers to an ACTIVE mailbox.",
          "Confirm the mailbox has SMTP credentials.",
          "Check wallet balance.",
          "Review the specific mailbox named in a 400 response.",
        ],
      },
    ],
  },

  {
    id: "exports",
    title: "Export Problems",
    description:
      "Troubleshoot platform credential exports, OAuth exports, and provider-specific failures.",
    items: [
      {
        id: "emailbison-errors",
        problem: "EmailBison credential validation is failing.",
        cause:
          "The documented causes include an incorrect workspace, invalid credentials, client ID mismatch, or incomplete metadata.",
        steps: [
          "Check the workspace value.",
          "Verify email and password.",
          "Verify clientId.",
          "Confirm appBaseUrl and appName.",
          "Make sure the full metadata block is being provided.",
        ],
      },
      {
        id: "reachinbox-plan",
        problem: "ReachInbox credentials are valid but the export is rejected.",
        cause:
          "The document states that free or expired ReachInbox accounts are rejected during validation.",
        steps: [
          "Check whether the ReachInbox account has an active paid plan.",
          "Verify the account credentials.",
          "Retry validation after resolving the platform-side account issue.",
        ],
      },
      {
        id: "instantly-no-workspace",
        problem: "Instantly says the credential has no workspace associated.",
        cause:
          "The credential was stored but no orgId/workspace was selected.",
        steps: [
          "Retrieve available workspaces using the stored credential.",
          "Let the user select the required workspace.",
          "Update the credential with the selected orgId.",
          "Retry the export.",
        ],
      },
      {
        id: "oauth-provider-mismatch",
        problem: "An OAuth export is failing because of the provider configuration.",
        cause:
          "The mailbox's recorded serviceProvider controls which OAuth configuration is valid.",
        steps: [
          "Check the mailbox's serviceProvider.",
          "Use the matching Google or Microsoft configuration.",
          "Do not assume the request payload can override the mailbox's provider.",
          "Validate the mailbox before exporting.",
        ],
      },
      {
        id: "export-in-progress",
        problem: "An export is already in progress. Should I submit it again?",
        cause:
          "The document explicitly lists re-queuing an in-progress export as something to avoid.",
        steps: [
          "Check the existing export status.",
          "Check the target platform before submitting another request.",
          "Wait for the current export to reach a final state.",
        ],
      },
    ],
  },

  {
    id: "webhooks",
    title: "Webhook Problems",
    description:
      "Troubleshoot missing webhook deliveries, invalid signatures, timeouts, and duplicates.",
    items: [
      {
        id: "webhook-not-received",
        problem: "I'm not receiving CMR webhooks.",
        cause:
          "The endpoint may not be publicly reachable, signature verification may be rejecting the request, or the delivery may have failed.",
        steps: [
          "Confirm the webhook URL is publicly accessible.",
          "Check that the endpoint accepts POST requests.",
          "Verify the cmr-x-signature using the correct Partner API key.",
          "Check the cmr-x-timestamp replay-protection logic.",
          "Review webhook delivery logs in the Partner Dashboard.",
        ],
      },
      {
        id: "webhook-signature-failure",
        problem: "Webhook signature verification keeps failing.",
        cause:
          "The signature may be calculated using the wrong API key, altered payload, or incorrect timestamp handling.",
        steps: [
          "Use the exact raw request payload for HMAC calculation.",
          "Confirm the correct Partner API key is being used.",
          "Check the received cmr-x-timestamp.",
          "Reject requests older than the documented five-minute replay window.",
        ],
      },
      {
        id: "webhook-timeout",
        problem: "CMR keeps retrying my webhook.",
        cause:
          "The endpoint is likely returning a non-2xx response or taking too long to acknowledge the webhook.",
        steps: [
          "Return HTTP 200 as soon as the webhook is accepted.",
          "Move long-running processing to a background worker.",
          "Check server logs for exceptions before the response is sent.",
          "Review webhook delivery logs.",
        ],
      },
      {
        id: "duplicate-webhook",
        problem: "I'm receiving duplicate webhook events.",
        cause:
          "Retries can cause the same webhook event to be delivered more than once.",
        steps: [
          "Use eventId as your idempotency key.",
          "Store processed event IDs.",
          "Return 200 for an already-processed event.",
          "Use orderId/actionId/subscriptionId to trace the event back to the original operation.",
        ],
      },
    ],
  },

  {
    id: "rate-limits",
    title: "Rate Limits & HTTP Errors",
    description:
      "Troubleshoot 400, 401, 403, 404, 409, 422, 429, and server errors.",
    items: [
      {
        id: "http-400",
        problem: "I'm getting HTTP 400.",
        cause:
          "The request is malformed or missing a required field.",
        steps: [
          "Read the message field in the response.",
          "Check required parameters and request-body fields.",
          "Confirm the correct endpoint and parameter names.",
          "Do not repeatedly retry the same invalid request.",
        ],
      },
      {
        id: "http-403",
        problem: "I'm getting HTTP 403.",
        cause:
          "The key is valid but the requested resource or operation is not permitted.",
        steps: [
          "Check that the resource belongs to the supplied userId.",
          "Verify that the requested operation is allowed for the current resource state.",
          "Review the response message for the specific permission or ownership issue.",
        ],
      },
      {
        id: "http-409",
        problem: "I'm getting HTTP 409 Conflict.",
        cause:
          "The requested operation conflicts with an existing resource or state. The document gives workspace conflicts and duplicate resources as examples.",
        steps: [
          "Read the error message carefully.",
          "Check whether the resource already exists.",
          "For domain provisioning, check workspace conflicts before ordering.",
        ],
      },
      {
        id: "http-422",
        problem: "I'm getting HTTP 422.",
        cause:
          "The request format may be valid, but the requested operation fails a business rule or validation condition.",
        steps: [
          "Check the message field.",
          "Verify domain availability and renewal eligibility.",
          "Check required fields and valid resource states.",
          "Fix the business condition before retrying.",
        ],
      },
      {
        id: "rate-limit-429",
        problem: "I'm getting HTTP 429 Too Many Requests.",
        cause:
          "The Partner API key has exceeded the documented global rate limit.",
        steps: [
          "Read the Retry-After header.",
          "Wait for the specified duration.",
          "Add jitter to concurrent retries.",
          "Use batching where available.",
          "For bulk workloads, queue requests at roughly 4 requests per second as a safety margin.",
        ],
      },
      {
        id: "server-error",
        problem: "I'm getting HTTP 500 or 503.",
        cause:
          "The document treats these as server-side failures that can be retried safely with backoff.",
        steps: [
          "Retry the failed HTTP request using exponential backoff.",
          "Start with roughly 5 seconds and cap the delay around 30 seconds.",
          "Do not confuse an HTTP retry with resubmitting an already accepted asynchronous operation.",
        ],
      },
    ],
  },

  {
    id: "sandbox",
    title: "Sandbox Problems",
    description:
      "Troubleshoot environment mismatches, scenario headers, stale state, and webhook testing.",
    items: [
      {
        id: "sandbox-production-mismatch",
        problem: "My sandbox data isn't appearing in production.",
        cause:
          "Sandbox and production are separate environments.",
        steps: [
          "Confirm which base URL you are calling.",
          "Confirm which API key you are using.",
          "Remember that sandbox data does not migrate to production.",
          "Use separate webhook destinations for each environment.",
        ],
      },
      {
        id: "sandbox-scenario-not-working",
        problem: "My sandbox failure scenario isn't being triggered.",
        cause:
          "The document states that omitted or unrecognized scenario headers default to the happy path.",
        steps: [
          "Check the exact scenario header value.",
          "Make sure you are using the operation-specific scenario key.",
          "Confirm the request is going to the sandbox base URL.",
        ],
      },
      {
        id: "sandbox-prewarmup-stale",
        problem: "My Pre-Warmup sandbox test is stuck because of previous test state.",
        cause:
          "The document provides a sandbox reset endpoint specifically for clearing stale pre-warmup state.",
        steps: [
          "Reset the sandbox pre-warmup state for the test user.",
          "Run the test again from a clean state.",
          "Use webhook replay when you need to test webhook handling without repeating the entire operation.",
        ],
      },
    ],
  },

  {
    id: "users",
    title: "User Management",
    description:
      "Troubleshoot user updates and deletion failures.",
    items: [
      {
        id: "user-update",
        problem: "Updating a user returns a validation error.",
        cause:
          "The document states that PUT /users expects the full billing object rather than a partial update.",
        steps: [
          "Send the complete required billing object.",
          "Do not assume PUT behaves like a partial PATCH operation.",
          "Check the returned validation message for the missing fields.",
        ],
      },
      {
        id: "cannot-delete-user",
        problem: "I can't delete a user.",
        cause:
          "User deletion is gated while domains or mailboxes remain associated with the user.",
        steps: [
          "Check the returned mailboxCount and domainCount values.",
          "Cancel active subscriptions.",
          "Delete or transfer the user's domains.",
          "Remove remaining mailboxes.",
          "Retry user deletion after all required resources have been cleared.",
        ],
        note:
          "The document states that user deletion is permanent and removes associated data including billing records, wallet balance, workspaces, orders, and related resources.",
      },
    ],
  },
];