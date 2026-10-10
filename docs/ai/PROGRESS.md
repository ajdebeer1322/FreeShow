# AI map progress

Phase 7 source base: `a3cdd7f576480f842077c233c79f6f4c3238fd07` (local `main-tests`). Phases 1–6 originally used `origin/upgrade/svelte-5`. Branch: `main-tests`; independent Git metadata with local checkout `/home/andre/FreeShow-ai-map`. Never push. Product source and companion guides remain untouched.

- [x] Phase 1 — generated maps: 1,066 files; 560 components; 384 stores (270 central); 30 transport channels; 441 message keys; 1,159 timing entries; 311 workaround comments. Zero parser errors. Final verification excludes nested IPC payload fields from keys and preserves explicit handler payload types.
- [x] Phase 2 — pure query functions and read-only CLI; bounded plain-text results, `--all`, qualified duplicate store names, inclusive decision ranges; query tests pass.
- [x] Phase 3 — front door, bounded generated pages, file/line/symbol/excerpt checks and deterministic freshness validation; extractor regression covers interpolated templates/regex comments.
- [x] Phase 4 — 1,616 decision records: every 1,159 timing entry, 311 workaround comments, 115 hotspot modules and 31 explicit fork decisions. Local introductions traced; 16/311 workaround motives (5.1%) sourced from explicit causal comments. All 129 needed PRs and 12 linked issue/PR records cached/read; release bodies empty. Manual bullet attribution and unresolved item motives remain explicit gaps. Later edits are filtered to descendants of the traced introduction.
- [x] Phase 5 — 23 subsystem guides, complete per-area dependency JSON, reviewed source anchors, and three suspected issues with evidence/reproduction plans. All guides below 400 lines.
- [x] Phase 6 — ten file-by-file flow traces; all ten bounded runtime observations passed; actual debug-recorder evidence retained; final report includes coverage, gaps, ten findings, timings and all five query examples. Final check status and measurements are in REPORT.md and metrics.json.

## Snapshot limits

- [code] `HOW_IT_WORKS.md` exists at the phase 7 main-tests base. Some inherited phase 1–6 documentation and runtime fingerprints still describe the earlier snapshot; refresh them in steps 3–4 before declaring phase 7 complete.
- [verified] GitHub CLI is authenticated as ajdebeer1322. All needed release PRs and directly relevant linked issue records are cached; release PR bodies are empty, and local squash messages retain bundled bullets. No GitHub writes or push occurred.
- [code] No dependency changes; an ignored local node_modules directory contains links to existing installed packages. Never rebuild the shared dependency directory. Runtime build files and GitHub/blame responses live only in the ignored cache.

## Phase 7 — events and triggers

- [x] Step 1: refreshed main-tests maps/history/subsystems; inventory includes keyboard, clicks, menu declarations/loaders, drag sources/targets/routes, API commands, activations and timers. Six-level conditional effects, unresolved edges and source offsets regression-tested. Inherited runtime evidence will be refreshed in step 3.
- [x] Step 2: pure event queries (`key`, `click`, `menu`, `action`, `trigger`, `trace`, `writes`) and 18 key guides with 160 situation rows. Four event regression tests pass. Trace links are reserved for step 3; recordings are not available yet.
- [x] Step 3: isolated Electron timeline recorder and all 59 scenarios verified. Every recording has both output DOM timelines and current source/recorder fingerprints. Includes real menus/drop/remote transport, seeded undo/redo/audio, bound linked slides, main/renderer console, IPC and debug capture. The inherited ten-flow evidence is being refreshed for final validation.
- [ ] Step 4: front door/subsystem links, conflict pages, findings and report implemented; final evidence refresh and validation pending. ai:check now checks key-table freshness and rejects stale/missing event recordings.

The checkout has independent Git refs at `/home/andre/FreeShow-ai-map-isolated.git`; another folder can commit to its own main-tests without moving this branch. No pull, rebase or push.

Checkpoint before T3 authentication mode change: step 2 committed; step 3 runtime build succeeds in the ignored cache. Runtime-entry test exports are saved for step 3. Existing flow observations and final check need refresh; phase 7 is incomplete.

User-authorized publishing checkpoint: 16 map regression tests pass; the ignored runtime app builds. Step 3 exposes existing action/menu/drop/clear helpers only through the test entry. No product source or companion guides changed. Phase 7 live recordings, trace links and inherited stale-evidence checks remain pending. Push is authorized for this checkpoint; future pushes require user instruction.
