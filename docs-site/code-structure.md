# Code Structure

> Complete directory structure of OpenSpace.

## 1. Top-Level Structure

```
OpenSpace/
├── openspace/                  # Main package
├── frontend/                   # Dashboard UI (React)
├── gdpval_bench/              # Benchmark experiments
├── showcase/                   # My Daily Monitor demo
└── .openspace/                # Runtime data
```

## 2. Core Package

```
openspace/
├── tool_layer.py               # OpenSpace main class
├── mcp_server.py              # MCP Server (4 tools)
├── __main__.py                 # CLI entry point
├── dashboard_server.py         # Web dashboard API
│
├── ⚡ agents/                  # Agent System
│   ├── base.py               # Base agent class
│   └── grounding_agent.py     # Execution agent
│
├── ⚡ grounding/              # Unified Backend System
│   ├── core/
│   │   ├── grounding_client.py  # Unified interface
│   │   ├── search_tools.py      # Smart Tool RAG
│   │   ├── quality/              # Quality tracking
│   │   ├── security/             # Policies & sandbox
│   │   ├── system/               # System tools
│   │   ├── transport/            # Connectors
│   │   └── tool/                 # Tool abstraction
│   └── backends/
│       ├── shell/              # Shell execution
│       ├── gui/                 # Anthropic Computer Use
│       ├── mcp/                 # MCP stdio/HTTP/WS
│       └── web/                 # Web search/browse
│
├── 🧬 skill_engine/            # Self-Evolution Engine
│   ├── registry.py            # Discovery & selection
│   ├── analyzer.py            # Post-execution analysis
│   ├── evolver.py             # FIX/DERIVED/CAPTURED
│   ├── patch.py               # Multi-file patching
│   ├── store.py               # SQLite + version DAG
│   ├── skill_ranker.py        # Hybrid ranking
│   ├── retrieve_tool.py       # Retrieval tool
│   ├── fuzzy_match.py         # Fuzzy matching
│   ├── conversation_formatter.py
│   ├── skill_utils.py
│   └── types.py               # Data types
│
├── 🌐 cloud/                   # Cloud Community
│   ├── client.py              # HTTP client
│   ├── search.py              # Hybrid search
│   ├── embedding.py           # Embedding generation
│   ├── auth.py                # API key management
│   └── cli/
│       ├── download_skill.py
│       └── upload_skill.py
│
├── 💬 communication/           # Multi-Channel Gateway
│   ├── gateway.py             # Message routing
│   ├── adapters/
│   │   ├── base.py
│   │   ├── feishu.py
│   │   └── whatsapp.py
│   ├── bridges/
│   ├── config.py
│   ├── session_store.py
│   ├── types.py
│   └── ...
│
├── 🔧 platform/                # Platform Abstraction
│   ├── screenshot.py
│   ├── system_info.py
│   └── ...
│
├── 🔧 host_detection/          # Auto-detect credentials
├── 🔧 host_skills/             # Agent integration skills
│   ├── delegate-task/
│   └── skill-discovery/
├── 🔧 prompts/                 # LLM templates
├── 🔧 llm/                     # LiteLLM wrapper
├── 🔧 config/                  # Configuration system
├── 🔧 local_server/            # GUI/Shell backend
├── 🔧 recording/               # Execution recording
├── 🔧 utils/                   # Utilities
└── 📦 skills/                  # Built-in skills
```

## 3. Skill Structure

```
skill_name/
├── SKILL.md                    # Required
├── README.md                   # Documentation
├── src/                       # Source (optional)
├── tests/                     # Tests (optional)
└── .openspace/
    └── lineage.json           # Evolution history
```

## 4. Frontend Structure

```
frontend/
├── src/
│   ├── components/            # React components
│   ├── pages/                # Page components
│   ├── hooks/               # Custom hooks
│   ├── api/                 # API client
│   └── App.tsx
├── package.json
└── tailwind.config.js
```

## 5. Key Files

| File | Lines | Purpose |
|------|-------|---------|
| `tool_layer.py` | ~500 | Main OpenSpace class |
| `grounding_agent.py` | ~400 | Execution agent |
| `evolver.py` | ~600 | Evolution logic |
| `store.py` | ~500 | Persistence |
| `registry.py` | ~400 | Skill discovery |

## 6. Dependencies

| Component | Technology |
|-----------|------------|
| LLM | LiteLLM |
| Database | SQLite |
| Web | Flask |
| Dashboard | React + Tailwind |
| Communication | Baileys, lark-oapi |
