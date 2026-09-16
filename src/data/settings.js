export const settingsCategory = {
  id: "settings",
  slug: "/settings",
  title: "Settings",
  description:
    "Manage your workspace, team members, branding, pricing, integrations, webhooks, events, and account preferences.",
  articles: [
    // General
    {
      id: "settings-update-payment-method",
      title: "How to Update Payment Method",
      description:
        "Replace your existing payment method and keep your account payment details up to date.",
      slug: "/settings/update-payment-method",
    },
    {
      id: "settings-edit-brand-details",
      title: "How to Edit Brand Details",
      description:
        "Update your brand name and logo to keep your white-label workspace aligned with your business identity.",
      slug: "/settings/edit-brand-details",
    },
    {
      id: "settings-edit-contact-details",
      title: "How to Edit Contact Details",
      description:
        "Update the contact information associated with your workspace.",
      slug: "/settings/edit-contact-details",
    },

    // Workspace Members
    {
      id: "settings-invite-members",
      title: "How to Invite Members",
      description:
        "Invite team members to your workspace and give them access to collaborate.",
      slug: "/settings/invite-members",
    },
    {
      id: "settings-edit-member-role",
      title: "How to Edit a Member's Role",
      description:
        "Change a workspace member's role and manage their level of access.",
      slug: "/settings/edit-member-role",
    },
    {
      id: "settings-remove-member",
      title: "How to Remove a Member",
      description:
        "Remove a member from your workspace when they no longer need access.",
      slug: "/settings/remove-member",
    },
    {
      id: "settings-role-permissions",
      title: "Workspace Role Permissions",
      description:
        "Understand the permissions available to Admin, Editor, and Viewer workspace roles.",
      slug: "/settings/role-permissions",
    },

    // Integrations
    {
      id: "settings-cmr-api-key",
      title: "How to Get Your CMR API Key",
      description:
        "Find your CMR API Key and use it to authenticate API requests and integrations.",
      slug: "/settings/cmr-api-key",
    },

    // MCP
    {
      id: "settings-mcp-claude-desktop",
      title: "How to Connect CMR with Claude Desktop",
      description:
        "Connect Cold Mail Reseller with Claude Desktop through MCP.",
      slug: "/settings/mcp/claude-desktop",
    },
    {
      id: "settings-mcp-cursor",
      title: "How to Connect CMR with Cursor",
      description:
        "Connect Cold Mail Reseller with Cursor through MCP.",
      slug: "/settings/mcp/cursor",
    },
    {
      id: "settings-mcp-claude-code",
      title: "How to Connect CMR with Claude Code",
      description:
        "Connect Cold Mail Reseller with Claude Code through MCP.",
      slug: "/settings/mcp/claude-code",
    },
    {
      id: "settings-mcp-vscode",
      title: "How to Connect CMR with VS Code",
      description:
        "Connect Cold Mail Reseller with VS Code through MCP.",
      slug: "/settings/mcp/vscode",
    },
    {
      id: "settings-mcp-windsurf",
      title: "How to Connect CMR with Windsurf",
      description:
        "Connect Cold Mail Reseller with Windsurf through MCP.",
      slug: "/settings/mcp/windsurf",
    },
    {
      id: "settings-mcp-codex-cli",
      title: "How to Connect CMR with Codex CLI",
      description:
        "Connect Cold Mail Reseller with Codex CLI through MCP.",
      slug: "/settings/mcp/codex-cli",
    },

    // Webhook
    {
      id: "settings-add-webhook",
      title: "How to Add a Destination Webhook URL",
      description:
        "Configure a destination URL to receive webhook notifications from Cold Mail Reseller.",
      slug: "/settings/webhook/add-destination",
    },
    {
      id: "settings-toggle-webhook",
      title: "How to Enable or Disable a Webhook Endpoint",
      description:
        "Control whether a configured webhook destination is active and able to receive events.",
      slug: "/settings/webhook/enable-disable",
    },
    {
      id: "settings-edit-webhook",
      title: "How to Edit a Webhook Endpoint",
      description:
        "Update an existing webhook endpoint when its URL or configuration changes.",
      slug: "/settings/webhook/edit",
    },
    {
      id: "settings-view-webhook",
      title: "How to View the Details of a Webhook Endpoint",
      description:
        "Review an existing webhook endpoint and inspect its configuration and event logs.",
      slug: "/settings/webhook/view-details",
    },
    {
      id: "settings-delete-webhook",
      title: "How to Delete a Webhook Endpoint",
      description:
        "Remove an existing webhook destination from your workspace.",
      slug: "/settings/webhook/delete",
    },

    // Events
    {
      id: "settings-webhook-events",
      title: "How to Check Recent Webhook Payloads and Delivery Events",
      description:
        "Review recent webhook activity, inspect payloads, and check delivery events.",
      slug: "/settings/events",
    },

    // Domain Transfer
    {
      id: "settings-domain-transfer-code",
      title: "How to Request a Domain Transfer Code",
      description:
        "Request domain transfer codes for your customers and track the status of transfer requests.",
      slug: "/settings/domain-transfer-request",
    },
  ],
};