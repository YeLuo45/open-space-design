import { defineConfig } from "vitepress";

export default defineConfig({
  title: "OpenSpace Design",
  description: "OpenSpace 自进化 Agent 引擎设计文档 — 让 Agent 更智能、更低成本、自我进化",

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
  ],

  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Architecture", link: "/architecture" },
      { text: "Self-Evolution", link: "/self-evolution" },
      { text: "Skill Engine", link: "/skill-engine" },
      { text: "Cloud Community", link: "/cloud-community" },
      { text: "GDPVal Benchmark", link: "/benchmark" },
    ],
    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Home", link: "/" },
          { text: "架构分析", link: "/architecture" },
          { text: "自我进化引擎", link: "/self-evolution" },
          { text: "技能引擎", link: "/skill-engine" },
          { text: "云端技能社区", link: "/cloud-community" },
          { text: "GDPVal 基准测试", link: "/benchmark" },
          { text: "MCP 集成", link: "/mcp-integration" },
          { text: "通信网关", link: "/communication" },
          { text: "代码结构", link: "/code-structure" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/HKUDS/OpenSpace" }
    ],
    footer: {
      message: "基于 OpenSpace 开源项目构建",
      copyright: "Copyright © 2024-present OpenSpace Contributors"
    },
  },

  base: "/open-space-design/",
});
