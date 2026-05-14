# Architecture

> OpenSpace 核心架构：自进化引擎 + 云端技能社区 + 多 Agent 支持

## 1. Overview

| 指标 | 数值 |
|------|------|
| Token 节省 | 46% |
| 收入提升 | 4.2× |
| 支持 Agent | Claude Code / Codex / OpenClaw / nanobot 等 |
| 进化模式 | FIX / DERIVED / CAPTURED |
| 技能追踪 | 165+ 技能，完整 lineage DAG |

## 2. Core Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     OpenSpace Framework                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│  │   Agent     │    │   Skill     │    │   Cloud     │          │
│  │   System    │◄──►│   Engine    │◄──►│   Community │          │
│  │  (grounding)│    │ (自进化)    │    │ (协作共享)  │          │
│  └─────────────┘    └─────────────┘    └─────────────┘          │
│         │                  │                  │                   │
│         ▼                  ▼                  ▼                   │
│  ┌─────────────────────────────────────────────────────┐        │
│  │              Grounding Layer (统一后端)              │        │
│  │  Shell │ GUI (Anthropic) │ MCP │ Web Search       │        │
│  └─────────────────────────────────────────────────────┘        │
│                         │                                        │
│  ┌─────────────────────┴─────────────────────┐                 │
│  │         Platform Abstraction Layer          │                 │
│  │   macOS Adapter │ Linux Adapter │ Windows   │                 │
│  └────────────────────────────────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
```

## 3. Three Superpowers

### 3.1 🧬 Self-Evolution
Skills that learn and improve themselves automatically:
- **AUTO-FIX** — When a skill breaks, it fixes itself instantly
- **AUTO-IMPROVE** — Successful patterns become better skill versions
- **AUTO-LEARN** — Captures winning workflows from actual usage

### 3.2 🌐 Collective Agent Intelligence
Turn individual agents into a shared brain:
- **Shared evolution**: One agent's improvement becomes every agent's upgrade
- **Network effects**: More agents → richer data → faster evolution
- **Easy sharing**: Upload and download evolved skills with one command

### 3.3 💰 Token Efficiency
Smarter agents, dramatically lower costs:
- **Stop repeating work**: Reuse successful solutions
- **Tasks get cheaper**: As skills improve, similar work costs less
- **Small updates only**: Fix what's broken, don't rebuild everything

## 4. Directory Structure

```
OpenSpace/
├── openspace/
│   ├── tool_layer.py              # OpenSpace main class
│   ├── mcp_server.py              # MCP Server (4 tools)
│   ├── dashboard_server.py        # Web dashboard API
│   │
│   ├── ⚡ agents/                  # Agent System
│   │   ├── base.py               # Base agent class
│   │   └── grounding_agent.py    # Execution agent
│   │
│   ├── ⚡ grounding/              # Unified Backend
│   │   ├── core/                 # Core interfaces
│   │   │   ├── grounding_client.py
│   │   │   ├── search_tools.py   # Smart Tool RAG
│   │   │   ├── quality/          # Quality tracking
│   │   │   ├── security/         # Policies & sandbox
│   │   │   └── transport/         # Connectors
│   │   └── backends/
│   │       ├── shell/            # Shell execution
│   │       ├── gui/              # Anthropic Computer Use
│   │       ├── mcp/              # MCP (stdio/HTTP/WS)
│   │       └── web/              # Web search/browse
│   │
│   ├── 🧬 skill_engine/          # Self-Evolution
│   │   ├── registry.py           # Discovery & selection
│   │   ├── analyzer.py           # Post-execution analysis
│   │   ├── evolver.py            # FIX/DERIVED/CAPTURED
│   │   ├── patch.py              # Multi-file patching
│   │   ├── store.py              # SQLite + version DAG
│   │   ├── skill_ranker.py       # Hybrid ranking
│   │   └── types.py              # Data types
│   │
│   ├── 🌐 cloud/                  # Cloud Community
│   │   ├── client.py            # HTTP client
│   │   ├── search.py            # Hybrid search
│   │   ├── embedding.py         # Embedding generation
│   │   └── cli/                 # CLI tools
│   │
│   ├── 💬 communication/         # Multi-Channel
│   │   ├── gateway.py          # Message routing
│   │   └── adapters/           # WhatsApp, Feishu
│   │
│   └── 🔧 platform/              # Platform abstraction
│
├── frontend/                      # Dashboard UI
├── gdpval_bench/                  # Benchmark
└── showcase/                      # My Daily Monitor
```

## 5. MCP Integration

OpenSpace 作为 MCP Server 提供 4 个核心工具：

| Tool | Description |
|------|-------------|
| `execute` | 执行任务，自动选择和进化技能 |
| `fix_skill` | 修复损坏或过时的技能 |
| `upload_skill` | 上传技能到云端社区 |
| `search_skills` | 搜索云端技能库 |

### MCP Config Example
```json
{
  "mcpServers": {
    "openspace": {
      "command": "openspace-mcp",
      "toolTimeout": 600,
      "env": {
        "OPENSPACE_HOST_SKILL_DIRS": "/path/to/agent/skills",
        "OPENSPACE_WORKSPACE": "/path/to/OpenSpace"
      }
    }
  }
}
```

## 6. Technology Stack

| Layer | Technology |
|-------|------------|
| LLM Interface | LiteLLM (统一封装) |
| Skill Storage | SQLite + Version DAG |
| Cloud Platform | REST API + Embedding Search |
| Communication | WhatsApp (Baileys) / Feishu (HTTP webhook) |
| Dashboard | React + Tailwind |
| Agent Integration | MCP (stdio/SSE/streamable HTTP) |
