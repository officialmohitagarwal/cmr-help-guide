import {
  BookOpen,
  LayoutDashboard,
  Users,
  Package,
  CreditCard,
  WalletCards,
  Download,
  Settings,
  HelpCircle,
  Wrench,
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