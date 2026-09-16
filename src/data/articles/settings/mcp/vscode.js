export const vscodeArticle = {
  id: "settings-mcp-vscode",
  slug: "/settings/mcp/vscode",

  title: "How to Connect CMR with VS Code",

  description:
    "Connect Cold Mail Reseller with VS Code through MCP and access CMR capabilities directly from your development environment.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "You can connect Cold Mail Reseller with VS Code through MCP using GitHub Copilot with MCP enabled.",

  sections: [
    {
      id: "connect-vscode",
      title: "Connect CMR with VS Code",
      content: [
        {
          type: "step",
          number: 1,
          title: "Enable MCP support",
          description:
            "This setup requires GitHub Copilot with MCP enabled.",
        },

        {
          type: "step",
          number: 2,
          title: "Add the CMR MCP server",
          description:
            "Add the Cold Mail Reseller MCP server from your terminal using the following command.",
        },

        {
          type: "code",
          language: "bash",
          content: `code --add-mcp '{
  "name": "coldmail-reseller",
  "command": "npx",
  "args": [
    "-y",
    "coldmail-reseller-mcp"
  ],
  "env": {
    "CMR_API_KEY": "YOUR_CMR_API_KEY"
  }
}'`,
        },

        {
          type: "step",
          number: 3,
          title: "Start the MCP server",
          description:
            "After adding the server, start it from the MCP view in VS Code.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Connect CMR with VS Code through MCP and access your Cold Mail Reseller workflows directly from your coding environment.",
        },
      ],
    },
  ],
};