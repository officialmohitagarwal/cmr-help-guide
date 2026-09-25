export const mailboxesCategory = {
  id: "mailboxes-provisioning",
  label: "Mailboxes and Provisioning",
  slug: "/concepts/mailboxes-provisioning",
  title: "Mailboxes and Provisioning",
  description:
    "Understand mailbox provisioning, lifecycle, mailbox details, warmup, webhooks, and mailbox removal.",
  articles: [
    {
      id: "mailbox-lifecycle",
      title: "Mailbox Lifecycle Explained",
      slug: "/concepts/mailboxes-provisioning/mailbox-lifecycle",
      description:
        "Understand the mailbox lifecycle, provisioning states, warmup states, and the events that indicate mailbox readiness.",
    },
    {
      id: "provisioning-mailbox",
      title: "Provisioning a Mailbox",
      slug: "/concepts/mailboxes-provisioning/provisioning-mailbox",
      description:
        "Learn how to create mailbox orders and understand the asynchronous provisioning process.",
    },
    {
      id: "adding-mailboxes-to-existing-domain",
      title: "Adding Mailboxes to an Existing Domain",
      slug: "/concepts/mailboxes-provisioning/adding-mailboxes-to-existing-domain",
      description:
        "Learn how to add additional mailboxes to an existing domain or subscription.",
    },
    {
      id: "get-mailbox-details",
      title: "Finding and Retrieving Mailbox Details",
      slug: "/concepts/mailboxes-provisioning/get-mailbox-details",
      description:
        "Understand the different mailbox retrieval endpoints and how to retrieve the correct mailbox information.",
    },
    {
      id: "updating-mailbox-details",
      title: "Updating Mailbox Details and Resetting a Password",
      slug: "/concepts/mailboxes-provisioning/updating-mailbox-details",
      description:
        "Learn how to update mailbox information and understand the documented mailbox password reset flow.",
    },
    {
      id: "webhooks-vs-polling",
      title: "Why You Should Subscribe to Webhooks Instead of Polling",
      slug: "/concepts/mailboxes-provisioning/webhooks-vs-polling",
      description:
        "Understand why webhook events are preferred for tracking asynchronous mailbox provisioning and lifecycle changes.",
    },
    {
      id: "deleting-mailbox",
      title: "Deleting a Mailbox: What's Reversible and What Isn't",
      slug: "/concepts/mailboxes-provisioning/deleting-mailbox",
      description:
        "Understand mailbox deletion, what happens when a mailbox is removed, and which parts of the operation cannot be reversed.",
    },
  ],
};


// export const mailboxesCategory = {
//   id: "mailboxes-provisioning",
//   label: "Mailboxes and Provisioning",
//   slug: "/concepts/mailboxes-provisioning",
//   title: "Mailboxes and Provisioning",
//   description:
//     "Understand how CMR provisions mailboxes, how mailbox states work, how to manage mailbox details, and how to track provisioning through webhooks.",
//   articles: [
//     {
//       id: "mailbox-lifecycle",
//       title: "Mailbox Lifecycle Explained",
//       slug: "/concepts/mailboxes-provisioning/mailbox-lifecycle",
//       description:
//         "Understand the mailbox lifecycle, including IN_PROGRESS, CREATING_PASSWORD, ACTIVE, and EXPIRED states, and how mailbox events relate to provisioning.",
//     },
//     {
//       id: "provisioning-mailbox",
//       title: "Provisioning a Mailbox",
//       slug: "/concepts/mailboxes-provisioning/provisioning-mailbox",
//       description:
//         "Learn how mailbox provisioning works from placing an order to receiving the mailbox.created event and using the mailbox once it is fully provisioned.",
//     },
//     {
//       id: "adding-mailboxes-to-existing-domain",
//       title: "Adding Mailboxes to an Existing Domain",
//       slug: "/concepts/mailboxes-provisioning/adding-mailboxes-to-existing-domain",
//       description:
//         "Learn how to add new mailboxes to an existing domain or subscription, how the order flow works, and how to track each mailbox as it is provisioned.",
//     },
//     {
//       id: "get-mailbox-details",
//       title: "Finding and Retrieving Mailbox Details",
//       slug: "/concepts/mailboxes-provisioning/get-mailbox-details",
//       description:
//         "Understand the different mailbox retrieval endpoints, how to find a mailbox for a specific user, and how to retrieve details for an individual mailbox.",
//     },
//     {
//       id: "updating-mailbox-details",
//       title: "Updating Mailbox Details and Resetting a Password",
//       slug: "/concepts/mailboxes-provisioning/updating-mailbox-details",
//       description:
//         "Learn how to update supported mailbox details, manage profile information, perform bulk updates, and understand the current password-reset API documentation.",
//     },
//     {
//       id: "webhooks-vs-polling",
//       title: "Why You Should Subscribe to Webhooks Instead of Polling",
//       slug: "/concepts/mailboxes-provisioning/webhooks-vs-polling",
//       description:
//         "Understand how CMR webhooks signal mailbox provisioning events, why mailbox.created is preferred over continuous polling, and how to build a reliable event-driven workflow.",
//     },
//     {
//       id: "deleting-mailbox",
//       title: "Deleting a Mailbox: What's Reversible and What Isn't",
//       slug: "/concepts/mailboxes-provisioning/deleting-mailbox",
//       description:
//         "Understand what happens when a mailbox is permanently deleted, what cannot be recovered, and what to verify before removing a mailbox.",
//     },
//   ],
// };