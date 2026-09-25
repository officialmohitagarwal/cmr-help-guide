export const mcpArticle = {
  id: "settings-mcp",
  slug: "/settings/mcp",

  title: "How to Connect CMR with MCP",

  description:
    "Learn how to connect Cold Mail Reseller with supported AI assistants through MCP.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "MCP allows you to connect Cold Mail Reseller with supported AI assistants and manage your CMR workspace through your preferred MCP client.",

  sections: [
    {
      id: "connect-mcp",
      title: "Connect CMR with MCP",
      description:
        "Follow these steps to open the MCP settings and configure your preferred MCP client.",

      content: [
        {
          type: "step",
          number: 1,
          title: "Open Settings",
          description:
            "Go to the CMR Settings page at partners.coldmailreseller.com/settings.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=CMR+Settings",
          alt: "CMR Settings page",
        },

        {
          type: "step",
          number: 2,
          title: "Open MCP",
          description:
            "Click MCP from the sidebar inside the Settings page.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=CMR+MCP+Settings",
          alt: "CMR MCP settings page",
        },

        {
          type: "step",
          number: 3,
          title: "Choose your MCP client",
          description:
            "Select the MCP client you want to configure, such as Claude Desktop, Cursor, Claude Code, VS Code, Windsurf, or Codex CLI.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=Choose+MCP+Client",
          alt: "MCP client selection",
        },

        {
          type: "step",
          number: 4,
          title: "Follow the displayed setup instructions",
          description:
            "Follow the instructions shown for your selected MCP client and copy the provided configuration into the client as instructed.",
        },

        {
          type: "screenshot",
          src: "https://placehold.co/1600x900?text=MCP+Setup+Instructions",
          alt: "MCP setup instructions",
        },

        {
          type: "step",
          number: 5,
          title: "Complete the connection",
          description:
            "Save or complete the setup in your selected MCP client and verify that CMR is connected successfully.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "CMR is now connected to your selected MCP client and ready to use through MCP.",
        },
      ],
    },
  ],
};