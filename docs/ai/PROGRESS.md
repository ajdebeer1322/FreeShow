# AI map progress

Source base: `96078ca1fdd5d34864da9e793c9a48a984b00ce3` (`origin/upgrade/svelte-5`). Branch: `ai-map`; isolated worktree `/home/andre/FreeShow-ai-map`. Never push. Product source and companion guides remain untouched.

- [x] Phase 1 — generated maps: 1,066 files; 560 components; 384 stores (270 central); 30 transport channels; 468 messages; 1,025 timing entries; 240 workaround comments. Zero parser errors. Compiler fixture tests pass.
- [x] Phase 2 — pure query functions and read-only CLI; bounded plain-text results, `--all`, qualified duplicate store names, inclusive decision ranges; query tests pass.
- [x] Phase 3 — front door, bounded generated pages, file/line/symbol/excerpt checks and deterministic freshness validation; extractor regression covers interpolated templates/regex comments.
- [ ] Phase 4 — history with explicit motive/source confidence
- [ ] Phase 5 — subsystem explanations and suspected bugs
- [ ] Phase 6 — flow traces and runtime observations

## Snapshot limits

- [code] `HOW_IT_WORKS.md` is absent at this base. The [later companion](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md) has F-001–F-019. Links to findings describe that later snapshot, not observed behavior of this branch.
- [verified] GitHub CLI is installed but not authenticated in this environment. Local history remains available; authenticated reads depend on user login.
- [code] No dependency changes; the isolated worktree reuses installed TypeScript/Svelte/Playwright through an untracked dependency symlink. Never rebuild the shared dependency directory.
