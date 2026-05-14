import{_ as a,o as n,c as e,ae as t}from"./chunks/framework.Cz5DOqVF.js";const u=JSON.parse('{"title":"Architecture","description":"","frontmatter":{},"headers":[],"relativePath":"architecture.md","filePath":"architecture.md"}'),i={name:"architecture.md"};function p(l,s,r,o,c,d){return n(),e("div",null,[...s[0]||(s[0]=[t(`<h1 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-label="Permalink to &quot;Architecture&quot;">​</a></h1><blockquote><p>OpenSpace 核心架构：自进化引擎 + 云端技能社区 + 多 Agent 支持</p></blockquote><h2 id="_1-overview" tabindex="-1">1. Overview <a class="header-anchor" href="#_1-overview" aria-label="Permalink to &quot;1. Overview&quot;">​</a></h2><table tabindex="0"><thead><tr><th>指标</th><th>数值</th></tr></thead><tbody><tr><td>Token 节省</td><td>46%</td></tr><tr><td>收入提升</td><td>4.2×</td></tr><tr><td>支持 Agent</td><td>Claude Code / Codex / OpenClaw / nanobot 等</td></tr><tr><td>进化模式</td><td>FIX / DERIVED / CAPTURED</td></tr><tr><td>技能追踪</td><td>165+ 技能，完整 lineage DAG</td></tr></tbody></table><h2 id="_2-core-architecture" tabindex="-1">2. Core Architecture <a class="header-anchor" href="#_2-core-architecture" aria-label="Permalink to &quot;2. Core Architecture&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                     OpenSpace Framework                          │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│                                                                   │</span></span>
<span class="line"><span>│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │</span></span>
<span class="line"><span>│  │   Agent     │    │   Skill     │    │   Cloud     │          │</span></span>
<span class="line"><span>│  │   System    │◄──►│   Engine    │◄──►│   Community │          │</span></span>
<span class="line"><span>│  │  (grounding)│    │ (自进化)    │    │ (协作共享)  │          │</span></span>
<span class="line"><span>│  └─────────────┘    └─────────────┘    └─────────────┘          │</span></span>
<span class="line"><span>│         │                  │                  │                   │</span></span>
<span class="line"><span>│         ▼                  ▼                  ▼                   │</span></span>
<span class="line"><span>│  ┌─────────────────────────────────────────────────────┐        │</span></span>
<span class="line"><span>│  │              Grounding Layer (统一后端)              │        │</span></span>
<span class="line"><span>│  │  Shell │ GUI (Anthropic) │ MCP │ Web Search       │        │</span></span>
<span class="line"><span>│  └─────────────────────────────────────────────────────┘        │</span></span>
<span class="line"><span>│                         │                                        │</span></span>
<span class="line"><span>│  ┌─────────────────────┴─────────────────────┐                 │</span></span>
<span class="line"><span>│  │         Platform Abstraction Layer          │                 │</span></span>
<span class="line"><span>│  │   macOS Adapter │ Linux Adapter │ Windows   │                 │</span></span>
<span class="line"><span>│  └────────────────────────────────────────────┘                 │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><h2 id="_3-three-superpowers" tabindex="-1">3. Three Superpowers <a class="header-anchor" href="#_3-three-superpowers" aria-label="Permalink to &quot;3. Three Superpowers&quot;">​</a></h2><h3 id="_3-1-🧬-self-evolution" tabindex="-1">3.1 🧬 Self-Evolution <a class="header-anchor" href="#_3-1-🧬-self-evolution" aria-label="Permalink to &quot;3.1 🧬 Self-Evolution&quot;">​</a></h3><p>Skills that learn and improve themselves automatically:</p><ul><li><strong>AUTO-FIX</strong> — When a skill breaks, it fixes itself instantly</li><li><strong>AUTO-IMPROVE</strong> — Successful patterns become better skill versions</li><li><strong>AUTO-LEARN</strong> — Captures winning workflows from actual usage</li></ul><h3 id="_3-2-🌐-collective-agent-intelligence" tabindex="-1">3.2 🌐 Collective Agent Intelligence <a class="header-anchor" href="#_3-2-🌐-collective-agent-intelligence" aria-label="Permalink to &quot;3.2 🌐 Collective Agent Intelligence&quot;">​</a></h3><p>Turn individual agents into a shared brain:</p><ul><li><strong>Shared evolution</strong>: One agent&#39;s improvement becomes every agent&#39;s upgrade</li><li><strong>Network effects</strong>: More agents → richer data → faster evolution</li><li><strong>Easy sharing</strong>: Upload and download evolved skills with one command</li></ul><h3 id="_3-3-💰-token-efficiency" tabindex="-1">3.3 💰 Token Efficiency <a class="header-anchor" href="#_3-3-💰-token-efficiency" aria-label="Permalink to &quot;3.3 💰 Token Efficiency&quot;">​</a></h3><p>Smarter agents, dramatically lower costs:</p><ul><li><strong>Stop repeating work</strong>: Reuse successful solutions</li><li><strong>Tasks get cheaper</strong>: As skills improve, similar work costs less</li><li><strong>Small updates only</strong>: Fix what&#39;s broken, don&#39;t rebuild everything</li></ul><h2 id="_4-directory-structure" tabindex="-1">4. Directory Structure <a class="header-anchor" href="#_4-directory-structure" aria-label="Permalink to &quot;4. Directory Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>OpenSpace/</span></span>
<span class="line"><span>├── openspace/</span></span>
<span class="line"><span>│   ├── tool_layer.py              # OpenSpace main class</span></span>
<span class="line"><span>│   ├── mcp_server.py              # MCP Server (4 tools)</span></span>
<span class="line"><span>│   ├── dashboard_server.py        # Web dashboard API</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── ⚡ agents/                  # Agent System</span></span>
<span class="line"><span>│   │   ├── base.py               # Base agent class</span></span>
<span class="line"><span>│   │   └── grounding_agent.py    # Execution agent</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── ⚡ grounding/              # Unified Backend</span></span>
<span class="line"><span>│   │   ├── core/                 # Core interfaces</span></span>
<span class="line"><span>│   │   │   ├── grounding_client.py</span></span>
<span class="line"><span>│   │   │   ├── search_tools.py   # Smart Tool RAG</span></span>
<span class="line"><span>│   │   │   ├── quality/          # Quality tracking</span></span>
<span class="line"><span>│   │   │   ├── security/         # Policies &amp; sandbox</span></span>
<span class="line"><span>│   │   │   └── transport/         # Connectors</span></span>
<span class="line"><span>│   │   └── backends/</span></span>
<span class="line"><span>│   │       ├── shell/            # Shell execution</span></span>
<span class="line"><span>│   │       ├── gui/              # Anthropic Computer Use</span></span>
<span class="line"><span>│   │       ├── mcp/              # MCP (stdio/HTTP/WS)</span></span>
<span class="line"><span>│   │       └── web/              # Web search/browse</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── 🧬 skill_engine/          # Self-Evolution</span></span>
<span class="line"><span>│   │   ├── registry.py           # Discovery &amp; selection</span></span>
<span class="line"><span>│   │   ├── analyzer.py           # Post-execution analysis</span></span>
<span class="line"><span>│   │   ├── evolver.py            # FIX/DERIVED/CAPTURED</span></span>
<span class="line"><span>│   │   ├── patch.py              # Multi-file patching</span></span>
<span class="line"><span>│   │   ├── store.py              # SQLite + version DAG</span></span>
<span class="line"><span>│   │   ├── skill_ranker.py       # Hybrid ranking</span></span>
<span class="line"><span>│   │   └── types.py              # Data types</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── 🌐 cloud/                  # Cloud Community</span></span>
<span class="line"><span>│   │   ├── client.py            # HTTP client</span></span>
<span class="line"><span>│   │   ├── search.py            # Hybrid search</span></span>
<span class="line"><span>│   │   ├── embedding.py         # Embedding generation</span></span>
<span class="line"><span>│   │   └── cli/                 # CLI tools</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── 💬 communication/         # Multi-Channel</span></span>
<span class="line"><span>│   │   ├── gateway.py          # Message routing</span></span>
<span class="line"><span>│   │   └── adapters/           # WhatsApp, Feishu</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   └── 🔧 platform/              # Platform abstraction</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── frontend/                      # Dashboard UI</span></span>
<span class="line"><span>├── gdpval_bench/                  # Benchmark</span></span>
<span class="line"><span>└── showcase/                      # My Daily Monitor</span></span></code></pre></div><h2 id="_5-mcp-integration" tabindex="-1">5. MCP Integration <a class="header-anchor" href="#_5-mcp-integration" aria-label="Permalink to &quot;5. MCP Integration&quot;">​</a></h2><p>OpenSpace 作为 MCP Server 提供 4 个核心工具：</p><table tabindex="0"><thead><tr><th>Tool</th><th>Description</th></tr></thead><tbody><tr><td><code>execute</code></td><td>执行任务，自动选择和进化技能</td></tr><tr><td><code>fix_skill</code></td><td>修复损坏或过时的技能</td></tr><tr><td><code>upload_skill</code></td><td>上传技能到云端社区</td></tr><tr><td><code>search_skills</code></td><td>搜索云端技能库</td></tr></tbody></table><h3 id="mcp-config-example" tabindex="-1">MCP Config Example <a class="header-anchor" href="#mcp-config-example" aria-label="Permalink to &quot;MCP Config Example&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;mcpServers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;openspace&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;openspace-mcp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;toolTimeout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;OPENSPACE_HOST_SKILL_DIRS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/agent/skills&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;OPENSPACE_WORKSPACE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/OpenSpace&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_6-technology-stack" tabindex="-1">6. Technology Stack <a class="header-anchor" href="#_6-technology-stack" aria-label="Permalink to &quot;6. Technology Stack&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Layer</th><th>Technology</th></tr></thead><tbody><tr><td>LLM Interface</td><td>LiteLLM (统一封装)</td></tr><tr><td>Skill Storage</td><td>SQLite + Version DAG</td></tr><tr><td>Cloud Platform</td><td>REST API + Embedding Search</td></tr><tr><td>Communication</td><td>WhatsApp (Baileys) / Feishu (HTTP webhook)</td></tr><tr><td>Dashboard</td><td>React + Tailwind</td></tr><tr><td>Agent Integration</td><td>MCP (stdio/SSE/streamable HTTP)</td></tr></tbody></table>`,25)])])}const k=a(i,[["render",p]]);export{u as __pageData,k as default};
