# Skill Engine

> Complete skill lifecycle management: discovery, ranking, application, monitoring, and evolution.

## 1. Skill Architecture

Skills in OpenSpace are more than static instructions — they're living entities with full lifecycle management.

### Skill Structure
```
skill_name/
├── SKILL.md          # Skill definition (required)
├── README.md         # Documentation
├── src/             # Source code (optional)
├── tests/           # Tests (optional)
└── .openspace/     # Evolution metadata
    └── lineage.json  # Version history
```

### SKILL.md Format
```markdown
---
name: skill-name
description: What this skill does
trigger:
  when: "condition for skill selection"
  mode: auto | manual
---

# Skill Content

Instructions, patterns, and code for this skill.
```

## 2. Skill Discovery & Selection

### Registry Architecture
```python
registry.py:
├── discover()           # Find skills in directories
├── pre_filter()         # BM25 + embedding hybrid
├── llm_select()         # LLM final selection
└── retrieve()           # Return top-k skills
```

### Selection Flow
```
Task Query
    │
    ▼
┌─────────────────────────────────────┐
│     BM25 Pre-Filter (top-k)         │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│  Embedding Similarity (top-m)       │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│     LLM Final Selection              │
│   (reasoning + tool choice)         │
└─────────────────────────────────────┘
```

## 3. Skill Ranker

Hybrid ranking combining multiple signals:

| Signal | Weight | Description |
|--------|--------|-------------|
| BM25 | 20% | Keyword matching |
| Embedding | 30% | Semantic similarity |
| LLM | 50% | Deep reasoning |

### Ranking Formula
```
score = 0.2 * BM25 + 0.3 * embedding_sim + 0.5 * LLM_score
```

## 4. Skill Quality Metrics

| Metric | Description | Good Range |
|--------|-------------|------------|
| `applied_rate` | Selection frequency | Higher = more useful |
| `completion_rate` | Task success when applied | > 80% |
| `effective_rate` | Net success (after fallback) | > 70% |
| `fallback_rate` | When skill fails and falls back | < 20% |

## 5. Skill Types

### By Origin
| Type | Description |
|------|-------------|
| `built-in` | Ships with OpenSpace |
| `user` | User-created |
| `captured` | Extracted from execution |
| `derived` | Evolved from parent |
| `fixed` | Repaired version |

### By Trigger Mode
| Mode | Description |
|------|-------------|
| `auto` | Automatically considered |
| `manual` | Only when explicitly invoked |

## 6. Skill Evolution Types

### Version DAG
Each skill maintains a version DAG tracking all evolutions:

```
v1.0 (original)
    │
    ├── v1.1 (FIX: path handling)
    │
    └── v2.0 (DERIVED: specialized for X)
            │
            └── v2.1 (FIX: edge case)
```

## 7. Skill Store

SQLite-based persistence with full lineage tracking:

```python
store.py:
├── skills                # Skill metadata
├── skill_versions        # Version history
├── lineage               # Parent-child relationships
├── quality_metrics       # Performance tracking
└── evolution_suggestions # Pending evolutions
```

## 8. Built-in Skills

OpenSpace ships with foundational skills in `openspace/skills/`:

| Skill | Purpose |
|-------|---------|
| `delegate-task` | Teach agent to execute, fix, upload |
| `skill-discovery` | Teach agent to search & discover skills |

These are the minimum set — all other skills evolve through use.

## 9. Fuzzy Matching

Skill discovery supports fuzzy matching for typos and variations:

```python
fuzzy_match.py:
├── exact_match()        # Direct match
├── fuzzy_match()        # Levenshtein distance
└── wildcard_match()     # Glob patterns
```

## 10. Conversation Formatter

Formats execution history for LLM analysis:

```python
conversation_formatter.py:
├── format_tool_calls()   # Tool call sequence
├── format_errors()       # Error context
├── format_outcome()      # Task result
└── to_analysis_prompt()  # LLM input format
```
