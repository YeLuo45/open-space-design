# MCP Integration

> OpenSpace plugs into any agent that supports MCP — Claude Code, Codex, OpenClaw, nanobot, and more.

## 1. MCP Overview

Model Context Protocol (MCP) enables OpenSpace to integrate as a skill server for any compatible agent.

## 2. MCP Tools

OpenSpace provides 4 core tools via MCP:

| Tool | Description |
|------|-------------|
| `execute` | Execute task with skill selection and evolution |
| `fix_skill` | Repair broken or outdated skills |
| `upload_skill` | Upload skill to cloud community |
| `search_skills` | Search cloud skill registry |

## 3. Configuration

### Basic Config
```json
{
  "mcpServers": {
    "openspace": {
      "command": "openspace-mcp",
      "toolTimeout": 600,
      "env": {
        "OPENSPACE_HOST_SKILL_DIRS": "/path/to/agent/skills",
        "OPENSPACE_WORKSPACE": "/path/to/OpenSpace",
        "OPENSPACE_API_KEY": "sk-xxx (optional, for cloud)"
      }
    }
  }
}
```

## 4. Transport Modes

OpenSpace supports 3 launch modes:

| Mode | Command | Use Case |
|------|---------|----------|
| **stdio** | `openspace-mcp` | Simple, local |
| **SSE** | `openspace-mcp --transport sse --host 127.0.0.1 --port 8080` | HTTP endpoint |
| **streamable HTTP** | `openspace-mcp --transport streamable-http --host 127.0.0.1 --port 8081` | Remote hosts |

### Common Endpoints
```
SSE:              http://127.0.0.1:8080/sse
streamable HTTP:  http://127.0.0.1:8081/mcp
```

## 5. Host Agent Setup

### OpenClaw
```bash
# Add to your OpenClaw MCP config
openspace-mcp
```

### nanobot
```bash
# Add to nanobot config
openspace-mcp --transport streamable-http --host 127.0.0.1 --port 8081
```

### Claude Code
```json
{
  "mcpServers": {
    "openspace": {
      "command": "openspace-mcp"
    }
  }
}
```

## 6. Agent Skills

Two host skills teach your agent how to use OpenSpace:

### delegate-task
Teaches the agent to:
- Execute tasks with OpenSpace
- Fix broken skills autonomously
- Upload evolved skills to cloud

### skill-discovery
Teaches the agent to:
- Search local skills
- Discover cloud skills
- Import and apply skills

## 7. Credential Auto-Detection

OpenSpace **auto-detects** credentials from host agent config:
- API keys
- Model configuration
- Provider settings

You usually don't need to set these manually.

## 8. Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENSPACE_HOST_SKILL_DIRS` | Yes | Agent's skills directory |
| `OPENSPACE_WORKSPACE` | Yes | OpenSpace workspace path |
| `OPENSPACE_API_KEY` | No | Cloud access (open-space.cloud) |
| `OPENSPACE_MODEL` | No | Override LLM model |
| `OPENSPACE_LLM_*` | No | LLM provider settings |

## 9. Timeout Configuration

```json
{
  "mcpServers": {
    "openspace": {
      "command": "openspace-mcp",
      "toolTimeout": 600  // 10 minutes for complex tasks
    }
  }
}
```

## 10. Per-Agent Guides

For agent-specific configuration, see:
- [`openspace/host_skills/README.md`](https://github.com/HKUDS/OpenSpace/blob/main/openspace/host_skills/README.md)
