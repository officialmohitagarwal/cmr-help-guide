export const codexCliArticle = {
  id: "settings-mcp-codex-cli",
  slug: "/settings/mcp/codex-cli",

  title: "How to Connect CMR with Codex CLI",

  description:
    "Connect Cold Mail Reseller with Codex CLI through MCP and access CMR capabilities directly from your terminal.",

  category: {
    id: "settings",
    label: "Settings",
    slug: "/settings",
  },

  author: "CMR",
  updated: "September 2026",

  introduction:
    "Codex CLI can connect to Cold Mail Reseller through MCP using its configuration file. Once configured, you can access your Cold Mail Reseller workflows directly from the terminal.",

  sections: [
    {
      id: "connect-codex-cli",
      title: "Connect CMR with Codex CLI",
      content: [
        {
          type: "step",
          number: 1,
          title: "Open the Codex configuration",
          description:
            "Open ~/.codex/config.toml.",
        },

        {
          type: "step",
          number: 2,
          title: "Add Cold Mail Reseller",
          description:
            "Add the following MCP server configuration to the file.",
        },

        {
          type: "code",
          language: "toml",
          content: `[mcp_servers.coldmail-reseller]
command = "npx"
args = ["-y", "coldmail-reseller-mcp"]

[mcp_servers.coldmail-reseller.env]
CMR_API_KEY = "YOUR_CMR_API_KEY"`,
        },

        {
          type: "step",
          number: 3,
          title: "Restart Codex CLI",
          description:
            "Restart Codex CLI so it picks up the newly configured MCP server.",
        },

        {
          type: "callout",
          variant: "success",
          title: "You're all set",
          content:
            "Connect CMR with Codex CLI through MCP and access your Cold Mail Reseller workflows directly from your terminal.",
        },
      ],
    },
  ],
};