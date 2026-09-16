import { NavLink } from "react-router-dom";

import {
  BookOpen,
  CreditCard,
  Download,
  LayoutDashboard,
  Package,
  Settings,
  Users,
  WalletCards,
  HelpCircle,
  Wrench,
} from "lucide-react";

const sections = [
  {
    label: "GETTING STARTED",
    items: [
      {
        label: "Introduction",
        icon: BookOpen,
        href: "/getting-started",
      },
    ],
  },

  {
    label: "PLATFORM",
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
      },
      {
        label: "Users",
        icon: Users,
        href: "/users",
      },
      {
        label: "Orders",
        icon: Package,
        href: "/orders",
      },
      {
        label: "Subscriptions",
        icon: CreditCard,
        href: "/subscriptions",
      },
      {
        label: "Exports",
        icon: Download,
        href: "/exports",
      },
      {
        label: "Wallet",
        icon: WalletCards,
        href: "/wallet",
      },
      {
        label: "Settings",
        icon: Settings,
        href: "/settings",
      },
    ],
  },

  {
    label: "RESOURCES",
    items: [
      {
        label: "FAQs",
        icon: HelpCircle,
        href: "/faqs",
      },
      {
        label: "Troubleshooting",
        icon: Wrench,
        href: "/troubleshooting",
      },
    ],
  },
];

export default function SidebarContent({ onNavigate }) {
  return (
    <nav aria-label="Documentation navigation">
      {sections.map((section) => (
        <div
          key={section.label}
          className="mb-8 last:mb-0"
        >
          <div className="mb-2 px-3 text-[10px] font-semibold tracking-[0.14em] text-[var(--text-tertiary)]">
            {section.label}
          </div>

          <div className="space-y-0.5">
            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    [
                      "group relative flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition",
                      isActive
                        ? "bg-[var(--surface-hover)] font-medium text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--surface-subtle)] hover:text-[var(--text-primary)]",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-[var(--cmr-brand-strong)]" />
                      )}

                      {Icon && (
                        <Icon
                          size={15}
                          strokeWidth={isActive ? 2 : 1.7}
                          className={
                            isActive
                              ? "text-[var(--cmr-brand-strong)]"
                              : "text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--text-secondary)]"
                          }
                        />
                      )}

                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}