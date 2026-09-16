export const claudeDesktopArticle = {
  id: "settings-mcp-claude-desktop",
  slug: "/settings/mcp/claude-desktop",

  title: "How to Connect CMR with Claude Desktop",

  description:
    "Connect Cold Mail Reseller with Claude Desktop through MCP and allow Claude Desktop to interact with your CMR workspace.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Cold Mail Reseller can be connected to Claude Desktop through MCP. Once configured, you can access your Cold Mail Reseller capabilities directly from Claude Desktop.",

  sections: [
    {
      id: "connect-claude-desktop",
      title: "Connect CMR with Claude Desktop",
      content: [
        {
          type: "step",
          number: 1,
          title: "Open Claude Desktop settings",
          description:
            "Open Claude Desktop and go to Settings → Developer → Edit Config.",
        },

        {
          type: "step",
          number: 2,
          title: "Add the CMR MCP configuration",
          description:
            "Add the following configuration to connect Cold Mail Reseller through MCP. Replace YOUR_CMR_API_KEY with your CMR API Key.",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "mcpServers": {
    "coldmail-reseller": {
      "command": "npx",
      "args": [
        "-y",
        "coldmail-reseller-mcp"
      ],
      "env": {
        "CMR_API_KEY": "YOUR_CMR_API_KEY"
      }
    }
  }
}`,
        },

        {
          type: "step",
          number: 3,
          title: "Save and restart Claude Desktop",
          description:
            "Save the configuration and restart Claude Desktop so that the MCP connection can be loaded.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Connect CMR with Claude Desktop through MCP and bring your Cold Mail Reseller workflows directly into your AI assistant.",
        },
      ],
    },
  ],
};