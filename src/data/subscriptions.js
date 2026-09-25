// ============================================================
// CONCEPTS — Subscriptions and Renewals
// ============================================================

export const subscriptionsRenewalsCategory = {
  id: "subscriptions-renewals",

  label: "Subscriptions and Renewals",

  slug: "/concepts/subscriptions-renewals",

  title: "Subscriptions and Renewals",

  description:
    "Understand subscription states, renewal behavior, PAST_DUE recovery, auto-renewal, cancellation, and the pricing changes that apply after 12 months.",

  articles: [
    {
      id: "subscription-states",

      title: "Subscription States Explained",

      slug: "/concepts/subscriptions-renewals/subscription-states",

      description:
        "Understand the subscription lifecycle, what each status means, how subscription states affect mailboxes, and what happens when a renewal succeeds, fails, or is cancelled.",
    },

    {
      id: "recover-past-due",

      title: "Recovering a PAST_DUE Subscription",

      slug: "/concepts/subscriptions-renewals/recover-past-due",

      description:
        "Understand why a subscription enters PAST_DUE, how the recovery window works, how to resolve the underlying issue, and how to restore the subscription.",
    },

    {
      id: "auto-renew-vs-manual-renew",

      title: "Auto-Renew vs Manual Renew",

      slug: "/concepts/subscriptions-renewals/auto-renew-vs-manual-renew",

      description:
        "Understand how automatic and manual subscription renewal work, when each approach is used, how to enable or disable auto-renewal, and how renewal recovery works.",
    },

    {
      id: "one-year-plus-pricing",

      title: "The 1+ Year Price Increase and How to Reset It",

      slug: "/concepts/subscriptions-renewals/one-year-plus-pricing",

      description:
        "Understand why mailbox pricing changes after 12 months, what happens when a subscription crosses the 1-year threshold, and how to reset the pricing cycle.",
    },
  ],
};


// ============================================================
// PLATFORM — Subscriptions
// ============================================================

export const subscriptionsCategory = {
  id: "subscriptions",

  label: "Subscriptions",

  slug: "/subscriptions",

  title: "Subscriptions",

  description:
    "Manage customer subscriptions, monitor billing and renewal schedules, and control auto-renewal settings.",

  articles: [
    {
      id: "subscriptions-manage-subscriptions",

      title:
        "How to Manage Subscriptions, Providers, and Auto-Renewal Settings",

      description:
        "Learn how to view, search, filter, and manage customer subscriptions, including provider, status, billing, and auto-renewal settings.",

      slug: "/subscriptions/manage-subscriptions",
    },
  ],
};



// this was for the platform page susbscription
// export const subscriptionsCategory = {
//   id: "subscriptions",
//   slug: "/subscriptions",
//   title: "Subscriptions",
//   description:
//     "Manage customer subscriptions, monitor billing and renewal schedules, and control auto-renewal settings.",
//   articles: [
//     {
//       id: "subscriptions-manage-subscriptions",
//       title:
//         "How to Manage Subscriptions, Providers, and Auto-Renewal Settings",
//       description:
//         "Learn how to view, search, filter, and manage customer subscriptions, including provider, status, billing, and auto-renewal settings.",
//       slug: "/subscriptions/manage-subscriptions",
//     },
//   ],
// };