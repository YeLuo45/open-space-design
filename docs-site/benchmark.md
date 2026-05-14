# GDPVal Benchmark

> Real-world evaluation on 50 professional tasks across 6 industries.

## 1. Benchmark Overview

**GDPVal** = **G**DP **Val**idation

A benchmark evaluating AI agents on real economic tasks — the kind of work that generates actual GDP.

### Tasks
- 50 real-world professional tasks
- 6 industries: Documents, Compliance, Media, Engineering, Spreadsheets, Strategy
- 44 occupations from the GDPVal dataset

### Methodology
- **Phase 1 (Cold Start)**: Run all 50 tasks sequentially, skills accumulate
- **Phase 2 (Warm Rerun)**: Re-execute with evolved skill database from Phase 1

## 2. Key Results

| Metric | Value | Description |
|--------|-------|-------------|
| **Income Δ** | 4.2× | vs ClawWork baseline |
| **Value Capture** | 72.8% | $11,484 earned of $15,764 possible |
| **Quality** | 70.8% | +30pp above best ClawWork (40.8%) |
| **Token Reduction** | 45.9% | Phase 2 vs Phase 1 |

## 3. Results by Category

| Category | Income Δ | Token Δ | Key Insight |
|----------|----------|---------|-------------|
| **📝 Documents** | +3.3pp | −56% | 13-version evolution of doc pipelines |
| **📋 Compliance** | +18.5pp | −51% | PDF skill chain evolves once, reuses everywhere |
| **🎬 Media** | +5.8pp | −46% | ffmpeg flags and codec fallbacks cached |
| **🛠️ Engineering** | +8.7pp | −43% | Coordination skills transfer universally |
| **📊 Spreadsheets** | +7.3pp | −37% | Formula/validation patterns identical across domains |
| **📈 Strategy** | +1.0pp | −32% | Already highest quality; savings from reuse |

## 4. What Was Evolved? (165 Skills)

| Purpose | Count | Example |
|---------|-------|---------|
| File Format I/O | 44 | PDF extraction fallbacks, DOCX parsing |
| Execution Recovery | 29 | Layered fallback: sandbox → shell → heredoc |
| Document Generation | 26 | document-gen-fallback (13 versions!) |
| Quality Assurance | 23 | Post-write verification |
| Task Orchestration | 17 | Multi-file tracking, ZIP packaging |
| Domain Workflow | 13 | SOAP notes, audio production |
| Web & Research | 11 | SSL/proxy debugging |

## 5. Why Evolution Works

### The Breakthrough Insight
Most skills focus on **tool reliability and error recovery**, not task-specific knowledge.

Agents don't need to learn "how to do taxes" — they need to learn:
- How to reliably read PDF files
- How to recover from sandbox failures
- How to verify output quality

### Skill Taxonomy

```
Skills Learned
    │
    ├── 44% Tool Reliability
    │   └── (PDF/DOCX/Excel I/O, fallbacks)
    │
    ├── 18% Error Recovery
    │   └── (sandbox → shell → heredoc)
    │
    ├── 16% Quality Gates
    │   └── (verify before deliver)
    │
    └── 22% Task Execution
        └── (orchestration, domain workflows)
```

## 6. Economic Value

### Value Capture Formula
```
Income Capture = actual_earnings / maximum_task_value
```

### Results
- **$11,484** earned out of **$15,764** task value
- **72.8%** value capture rate
- Outperforms all baseline agents

## 7. Token Efficiency

### Phase 1 vs Phase 2
- **46% fewer tokens** in Phase 2
- **Better results** (higher income)
- **4.2× income improvement**

This is the token efficiency flywheel:
```
More Skills → Better Selection → Less Reasoning → Fewer Tokens
```

## 8. Fair Comparison

OpenSpace uses **Qwen 3.5-Plus** as backbone LLM — identical to ClawWork baseline.

This ensures performance differences stem purely from **skill evolution**, not model capabilities.

## 9. Reproduce Results

Full experiment code, analysis tools, and results available at:
- [`gdpval_bench/README.md`](https://github.com/HKUDS/OpenSpace/tree/main/gdpval_bench)

Includes:
- Experiment runner
- Data analysis scripts
- Result visualizations
- Skill lineage database
