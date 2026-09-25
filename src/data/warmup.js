export const warmupCategory = {
  id: "warmup-deliverability",
  label: "Warmup and Deliverability",
  slug: "/concepts/warmup-deliverability",
  title: "Warmup and Deliverability",
  description:
    "Understand how CMR warmup builds sender reputation, how to enable and manage warmup, how warmup billing works, and how pre-warmup and placement testing fit into the deliverability workflow.",
  articles: [
    {
      id: "what-warmup-does",
      title: "What Mailbox Warmup Does and Why It Matters",
      slug: "/concepts/warmup-deliverability/what-warmup-does",
      description:
        "Understand what mailbox warmup does, how it builds sender reputation, how it affects deliverability, and how CMR manages warmup for Google and Microsoft mailboxes.",
    },
    {
      id: "enabling-warmup",
      title: "Enabling Warmup at Order Time vs Adding It Later",
      slug: "/concepts/warmup-deliverability/enabling-warmup",
      description:
        "Compare enabling warmup when a mailbox is ordered with adding warmup later to an existing active mailbox, including the different billing behavior.",
    },
    {
      id: "pausing-vs-disabling-warmup",
      title: "Pausing vs Permanently Disabling Warmup",
      slug: "/concepts/warmup-deliverability/pausing-vs-disabling-warmup",
      description:
        "Understand the difference between temporarily pausing warmup and permanently removing a mailbox from the warmup program.",
    },
    {
      id: "warmup-proration",
      title: "Understanding Proration on Mid-Period Warmup Changes",
      slug: "/concepts/warmup-deliverability/warmup-proration",
      description:
        "Understand how CMR calculates prorated warmup charges when warmup is added or re-enabled during an existing mailbox billing period.",
    },
    {
      id: "pre-warmup",
      title: "Pre-Warmup: Buying Mailboxes That Are Already Warmed",
      slug: "/concepts/warmup-deliverability/pre-warmup",
      description:
        "Understand CMR's separate pre-warmup product, how to find available pre-warmed inventory, place an order, and handle assignment results.",
    },
    {
      id: "placement-test",
      title: "Running a Placement Test",
      slug: "/concepts/warmup-deliverability/placement-test",
      description:
        "Learn how to run placement tests, understand mailbox-level deliverability results, and use provider-specific results to evaluate email placement.",
    },
  ],
};