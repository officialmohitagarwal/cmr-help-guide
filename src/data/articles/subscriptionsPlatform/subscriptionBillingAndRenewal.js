
export const subscriptionBillingAndRenewalArticle = {
  id: "subscription-billing-renewal",
  slug: "/subscriptions/billing-and-renewal",
  title: "Subscription Billing and Renewal",
  description:
    "Understand the billing information, renewal dates, and Auto Renew indicator shown for subscriptions.",

  category: {
    id: "subscriptions",
    label: "Subscriptions",
    slug: "/subscriptions",
  },

  author: "CMR",
  updated: "October 2026",

  introduction:
    "The Billing column on the Subscriptions page displays the subscription amount, billing cycle, purchase date, and renewal date. The Auto Renew column shows the renewal setting for each record.",

  sections: [
    {
      id: "understanding-billing",
      title: "Understand subscription billing",
      description:
        "Review the billing information displayed for each subscription.",

      content: [
        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=Subscription+Billing",
          alt: "Subscription billing information",
          caption:
            "The Billing column displays the amount, cycle, purchase date, and renewal date.",
        },
        {
          type: "heading",
          content: "Billing amount",
        },
        {
          type: "paragraph",
          content:
            "The amount displayed for the subscription. The screenshot includes examples such as $6.00, $9.00, $15.00, and $3.00.",
        },
        {
          type: "heading",
          content: "Billing cycle",
        },
        {
          type: "paragraph",
          content:
            "The billing cycle is displayed beside the amount. The visible records show a Monthly cycle.",
        },
        {
          type: "heading",
          content: "Purchase date",
        },
        {
          type: "paragraph",
          content:
            "The date and time when the subscription was purchased.",
        },
        {
          type: "heading",
          content: "Renewal date",
        },
        {
          type: "paragraph",
          content:
            "The date and time shown for the subscription's next renewal.",
        },
      ],
    },
    {
      id: "auto-renew",
      title: "Understand the Auto Renew setting",
      description:
        "The Auto Renew column displays a toggle for each subscription.",

      content: [
        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=Auto+Renew+Setting",
          alt: "Auto Renew toggles on the Subscriptions page",
          caption:
            "The Auto Renew column displays the setting for each subscription.",
        },
        {
          type: "paragraph",
          content:
            "The toggle visually indicates whether Auto Renew is enabled or disabled for the displayed subscription.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Before changing Auto Renew",
          content:
            "The screenshot confirms that the toggle is present, but does not establish the exact behavior, confirmation flow, or restrictions when changing it. Verify these details in the live application before documenting the action.",
        },
      ],
    },
  ],
};
