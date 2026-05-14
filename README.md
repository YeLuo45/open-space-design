# OpenSpace Design

Design documentation site for [OpenSpace](https://github.com/HKUDS/OpenSpace) — a self-evolving AI agent engine that makes agents smarter, more cost-efficient, and capable of collective intelligence.

**GitHub Repository**: https://github.com/yeluo45/open-space-design

## Project Structure

```
open-space-design/
├── docs-site/                 # VitePress documentation site
│   ├── .vitepress/
│   │   ├── config.mjs         # VitePress configuration
│   │   ├── theme/             # Custom theme
│   │   └── public/            # Static assets
│   ├── index.md               # Home page
│   ├── architecture.md        # Architecture overview
│   ├── self-evolution.md      # Self-evolution engine
│   ├── skill-engine.md        # Skill lifecycle management
│   ├── cloud-community.md     # Cloud skill community
│   ├── benchmark.md           # GDPVal benchmark results
│   ├── mcp-integration.md     # MCP integration guide
│   ├── communication.md        # Communication gateway
│   └── code-structure.md      # Code structure
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages deployment
└── package.json
```

## Quick Start

```bash
cd docs-site
pnpm install
pnpm run dev      # Development preview
pnpm run build    # Production build
pnpm run preview  # Preview build
```

## Live Site

https://yeluo45.github.io/open-space-design/

## Content

| Document | Description |
|----------|-------------|
| [Architecture](https://yeluo45.github.io/open-space-design/architecture) | Core framework architecture |
| [Self-Evolution](https://yeluo45.github.io/open-space-design/self-evolution) | FIX/DERIVED/CAPTURED evolution modes |
| [Skill Engine](https://yeluo45.github.io/open-space-design/skill-engine) | Skill discovery, ranking, and lifecycle |
| [Cloud Community](https://yeluo45.github.io/open-space-design/cloud-community) | Skill sharing and collaboration |
| [GDPVal Benchmark](https://yeluo45.github.io/open-space-design/benchmark) | 4.2× income, 46% token savings |
| [MCP Integration](https://yeluo45.github.io/open-space-design/mcp-integration) | Claude Code, Codex, OpenClaw, nanobot |
| [Communication](https://yeluo45.github.io/open-space-design/communication) | WhatsApp, Feishu multi-channel |
| [Code Structure](https://yeluo45.github.io/open-space-design/code-structure) | Complete directory structure |

## Key Results

| Metric | Value |
|--------|-------|
| Token Savings | 46% |
| Income Improvement | 4.2× |
| Skills Evolved | 165+ |
| Value Capture | 72.8% |

## Based on

[HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) — MIT License
