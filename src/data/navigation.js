import {
  BookOpen,
  Rocket,
  CircleDollarSign,
  Globe,
  Network,
  Mail,
  RefreshCw,
  ShieldCheck,
  LayoutDashboard,
  Users,
  Package,
  CreditCard,
  WalletCards,
  Download,
  Settings,
  HelpCircle,
  Wrench,
  UserRoundCog,
  Send,
  Webhook,
} from "lucide-react";

export const navigation = [
  {
    id: "getting-started",
    label: "GETTING STARTED",
    items: [
      {
        id: "introduction",
        title: "Introduction",
        slug: "/getting-started",
        icon: BookOpen,
        description:
          "Learn the basics of CMR and get familiar with the platform.",
      },
    ],
  },

  {
    id: "quick-setup",
    label: "QUICK SETUP",
    items: [
      {
        id: "api-partner",
        title: "Set up your API Partner Platform",
        slug: "/partners/api",
        icon: Rocket,
        description:
          "Set up your API Partner Platform and learn how to get started with CMR's API-based infrastructure.",
      },

      {
        id: "white-label-partner",
        title: "Set up your Whitelabel Partner Platform",
        slug: "/partners/white-label",
        icon: Rocket,
        description:
          "Set up your Whitelabel Partner Platform and configure the experience for your customers.",
      },
    ],
  },

  {
    id: "concepts",
    label: "CONCEPTS",
    items: [
      {
        id: "billing-wallet",
        title: "Billing and Wallet",
        slug: "/concepts/billing-wallet",
        icon: CircleDollarSign,
        description:
          "Understand wallet charges, mailbox pricing, renewals, volume pricing, and billing behavior.",
      },

      {
        id: "domains",
        title: "Domains",
        slug: "/concepts/domains",
        icon: Globe,
        description:
          "Understand domain registration, status, renewal, forwarding, and domain management in CMR.",
      },

      {
        id: "dns",
        title: "DNS",
        slug: "/concepts/dns",
        icon: Network,
        description:
          "Understand DNS records, nameservers, propagation, and how DNS is managed through CMR.",
      },

      {
        id: "mailboxes-provisioning",
        title: "Mailboxes and Provisioning",
        slug: "/concepts/mailboxes-provisioning",
        icon: Mail,
        description:
          "Understand mailbox provisioning, mailbox configuration, and the infrastructure behind customer mailboxes.",
      },

      {
        id: "subscriptions-renewals",
        title: "Subscriptions and Renewals",
        slug: "/concepts/subscriptions-renewals",
        icon: RefreshCw,
        description:
          "Understand subscription lifecycle, renewals, pricing changes, cancellation, and recovery.",
      },

      {
        id: "warmup-deliverability",
        title: "Warmup and Deliverability",
        slug: "/concepts/warmup-deliverability",
        icon: ShieldCheck,
        description:
          "Understand mailbox warmup, deliverability, placement testing, and related email infrastructure.",
      },

      {
        id: "users-partner-administration",
        title: "Users & Partner Administration",
        slug: "/concepts/users-partner-administration",
        icon: UserRoundCog,
        description:
          "Understand Partner and User scope, customer ownership, and how User administration fits into the CMR platform.",
      },

      {
        id: "exports",
        title: "Exporting Mailboxes to Sending Platforms",
        href: "/concepts/exporting-mailboxes",
        icon: Send,
        description:
          "Understand how CMR mailboxes are exported to sending platforms using platform credentials or Google and Microsoft OAuth.",
      },

      {
        id: "webhooks-events",
        title: "Webhooks & Events",
        slug: "/concepts/webhooks-events",
        icon: Webhook,
        description:
          "Understand asynchronous operations, webhook events, actionId correlation, retries, and reliable event processing.",
      },
    ],
  },

  {
    id: "platform",
    label: "PLATFORM",
    items: [
      {
        id: "dashboard",
        title: "Dashboard",
        slug: "/dashboard",
        icon: LayoutDashboard,
        description:
          "Understand your CMR dashboard and its key information.",
      },

      {
        id: "users",
        title: "Users",
        slug: "/users",
        icon: Users,
        description:
          "Manage users and understand user-related functionality.",
      },

      {
        id: "orders",
        title: "Orders",
        slug: "/orders",
        icon: Package,
        description:
          "Create, manage, and understand your CMR orders.",
      },

      {
        id: "subscriptions",
        title: "Subscriptions",
        slug: "/subscriptions",
        icon: CreditCard,
        description:
          "Manage subscriptions and understand subscription details.",
      },

      {
        id: "exports",
        title: "Exports",
        slug: "/exports",
        icon: Download,
        description:
          "Export and manage your CMR data.",
      },

      {
        id: "wallet",
        title: "Wallet",
        slug: "/wallet",
        icon: WalletCards,
        description:
          "Manage your wallet and understand your available balance.",
      },

      {
        id: "settings",
        title: "Settings",
        slug: "/settings",
        icon: Settings,
        description:
          "Configure your CMR account and platform preferences.",
      },
    ],
  },

  {
    id: "resources",
    label: "RESOURCES",
    items: [
      {
        id: "faqs",
        title: "FAQs",
        slug: "/faqs",
        icon: HelpCircle,
        description:
          "Find answers to common questions about CMR.",
      },

      {
        id: "troubleshooting",
        title: "Troubleshooting",
        slug: "/troubleshooting",
        icon: Wrench,
        description:
          "Find solutions to common CMR issues.",
      },
    ],
  },
];