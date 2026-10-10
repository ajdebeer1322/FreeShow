# AI map progress

Source base: `96078ca1fdd5d34864da9e793c9a48a984b00ce3` (`origin/upgrade/svelte-5`). Branch: `ai-map`; isolated worktree `/home/andre/FreeShow-ai-map`. Never push. Product source and companion guides remain untouched.

- [x] Phase 1 — generated maps: 1,066 files; 560 components; 384 stores (270 central); 30 transport channels; 441 message keys; 1,158 timing entries; 311 workaround comments. Zero parser errors. Final verification excludes nested IPC payload fields from keys and preserves explicit handler payload types.
- [x] Phase 2 — pure query functions and read-only CLI; bounded plain-text results, `--all`, qualified duplicate store names, inclusive decision ranges; query tests pass.
- [x] Phase 3 — front door, bounded generated pages, file/line/symbol/excerpt checks and deterministic freshness validation; extractor regression covers interpolated templates/regex comments.
- [x] Phase 4 — 1,613 decision records: every 1,158 timing entry, 311 workaround comments, 115 hotspot modules and 29 explicit fork decisions. Local introductions traced; 16/311 workaround motives (5.1%) sourced from explicit causal comments. All 129 needed PRs and 12 linked issue/PR records cached/read; release bodies empty. Manual bullet attribution and unresolved item motives remain explicit gaps. Later edits are filtered to descendants of the traced introduction.
- [x] Phase 5 — 23 subsystem guides, complete per-area dependency JSON, reviewed source anchors, and three suspected issues with evidence/reproduction plans. All guides below 400 lines.
- [x] Phase 6 — ten file-by-file flow traces; all ten bounded runtime observations passed; actual debug-recorder evidence retained; final report includes coverage, gaps, ten findings, timings and all five query examples. Final check status and measurements are in REPORT.md and metrics.json.

## Snapshot limits

- [code] `HOW_IT_WORKS.md` is absent at this base. The [later companion](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md) has F-001–F-019. Links to findings describe that later snapshot, not observed behavior of this branch.
- [verified] GitHub CLI is authenticated as ajdebeer1322. All needed release PRs and directly relevant linked issue records are cached; release PR bodies are empty, and local squash messages retain bundled bullets. No GitHub writes or push occurred.
- [code] No dependency changes; an ignored local node_modules directory contains links to existing installed packages. Never rebuild the shared dependency directory. Runtime build files and GitHub/blame responses live only in the ignored cache.
