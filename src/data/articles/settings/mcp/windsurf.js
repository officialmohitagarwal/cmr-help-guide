export const windsurfArticle = {
  id: "settings-mcp-windsurf",
  slug: "/settings/mcp/windsurf",

  title: "How to Connect CMR with Windsurf",

  description:
    "Connect Cold Mail Reseller with Windsurf through MCP and access CMR capabilities directly from your development environment.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Windsurf can connect to Cold Mail Reseller through MCP. The connection is configured through the Windsurf MCP configuration file.",

  sections: [
    {
      id: "connect-windsurf",
      title: "Connect CMR with Windsurf",
      content: [
        {
          type: "step",
          number: 1,
          title: "Open the MCP configuration",
          description:
            "Open ~/.codeium/windsurf/mcp_config.json.",
        },

        {
          type: "step",
          number: 2,
          title: "Add Cold Mail Reseller",
          description:
            "Add the following configuration to the MCP configuration file. Replace YOUR_CMR_API_KEY with your CMR API Key.",
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
          title: "Refresh the MCP panel",
          description:
            "Refresh the MCP panel so that the Cold Mail Reseller server is loaded.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Connect CMR with Windsurf through MCP and access your Cold Mail Reseller workflows directly from your AI-powered development environment.",
        },
      ],
    },
  ],
};