export const cursorArticle = {
  id: "settings-mcp-cursor",
  slug: "/settings/mcp/cursor",

  title: "How to Connect CMR with Cursor",

  description:
    "Connect Cold Mail Reseller with Cursor through MCP and access CMR capabilities directly from your development environment.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "You can connect Cold Mail Reseller to Cursor using MCP and configure the CMR MCP server through Cursor's MCP settings.",

  sections: [
    {
      id: "connect-cursor",
      title: "Connect CMR with Cursor",
      content: [
        {
          type: "step",
          number: 1,
          title: "Open MCP Settings",
          description:
            "Open Cursor and use Cmd+Shift+P. Search for Open MCP Settings.",
        },

        {
          type: "step",
          number: 2,
          title: "Configure the MCP server",
          description:
            "Add the following configuration to ~/.cursor/mcp.json. Replace YOUR_CMR_API_KEY with your CMR API Key.",
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
          title: "Reload MCP servers",
          description:
            "Save the file and reload the MCP servers in Cursor.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Connect CMR with Cursor through MCP and access your Cold Mail Reseller workflows directly from your AI-powered development environment.",
        },
      ],
    },
  ],
};