export const claudeCodeArticle = {
  id: "settings-mcp-claude-code",
  slug: "/settings/mcp/claude-code",

  title: "How to Connect CMR with Claude Code",

  description:
    "Connect Cold Mail Reseller with Claude Code through MCP and access CMR capabilities directly from your coding environment.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Claude Code can connect to Cold Mail Reseller through MCP. The MCP server can be added directly from the terminal using the Claude CLI.",

  sections: [
    {
      id: "connect-claude-code",
      title: "Connect CMR with Claude Code",
      content: [
        {
          type: "step",
          number: 1,
          title: "Open your terminal",
          description:
            "Open your terminal to access the Claude Code CLI.",
        },

        {
          type: "step",
          number: 2,
          title: "Add the CMR MCP server",
          description:
            "Run the following command to add Cold Mail Reseller as an MCP server. Replace YOUR_CMR_API_KEY with your CMR API Key.",
        },

        {
          type: "code",
          language: "bash",
          content: `claude mcp add coldmail-reseller \\
  -e CMR_API_KEY=YOUR_CMR_API_KEY \\
  -- npx -y coldmail-reseller-mcp`,
        },

        {
          type: "step",
          number: 3,
          title: "Authenticate if required",
          description:
            "If the connection does not work, authenticate from inside Claude Code using /mcp.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Connect CMR with Claude Code through MCP and access your Cold Mail Reseller workflows directly from your terminal-based AI coding environment.",
        },
      ],
    },
  ],
};