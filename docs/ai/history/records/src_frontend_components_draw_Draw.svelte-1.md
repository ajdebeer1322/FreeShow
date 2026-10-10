# Decision records: src/frontend/components/draw/Draw.svelte

Evidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.

## D-transition-b3f4f98030b5e05e

[code] transition-directive: { duration: 150 } (dynamic ms)

Location: [src/frontend/components/draw/Draw.svelte:27](../../../../src/frontend/components/draw/Draw.svelte#L27). Category: timing; fork feature.

Added/traced: [e5f66233](https://github.com/ajdebeer1322/FreeShow/commit/e5f66233fa0187a258128aa929a3f0c71fa43948) on 2026-10-10; git log -S --follow (earliest exact-text occurrence in file lineage).

Code comment: “<!-- can't fade out, because Svelte bug will make it stay forever if tabs changed from Draw while active -->”

Sources:

- [code] [source](https://github.com/ajdebeer1322/FreeShow/commit/e5f66233fa0187a258128aa929a3f0c71fa43948): “Phase 2: required code changes for Svelte 5 (legacy mode) - mount(App, { target }) instead of new App({ target }) in the 6 entry points (frontend/main.ts and server/{cam,controller”
- [code] src/frontend/components/draw/Draw.svelte:26: “<!-- can't fade out, because Svelte bug will make it stay forever if tabs changed from Draw while active -->”

Later line edits: 0; latest e5f66233. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.

## D-transition-b6908872f264e9d4

[code] transition-directive: { duration: 100 } (dynamic ms)

Location: [src/frontend/components/draw/Draw.svelte:29](../../../../src/frontend/components/draw/Draw.svelte#L29). Category: timing; fork feature.

Added/traced: [e5f66233](https://github.com/ajdebeer1322/FreeShow/commit/e5f66233fa0187a258128aa929a3f0c71fa43948) on 2026-10-10; git log -S --follow (earliest exact-text occurrence in file lineage).

Code comment: “<!-- can't fade out, because Svelte bug will make it stay forever if tabs changed from Draw while active -->”

Sources:

- [code] [source](https://github.com/ajdebeer1322/FreeShow/commit/e5f66233fa0187a258128aa929a3f0c71fa43948): “Phase 2: required code changes for Svelte 5 (legacy mode) - mount(App, { target }) instead of new App({ target }) in the 6 entry points (frontend/main.ts and server/{cam,controller”
- [code] src/frontend/components/draw/Draw.svelte:26: “<!-- can't fade out, because Svelte bug will make it stay forever if tabs changed from Draw while active -->”

Later line edits: 0; latest e5f66233. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.

## D-workaround-2e13d2c65ba2a065

[code] <!-- can't fade out, because Svelte bug will make it stay forever if tabs changed from Draw while active -->

Location: [src/frontend/components/draw/Draw.svelte:26](../../../../src/frontend/components/draw/Draw.svelte#L26). Category: workaround.

Added/traced: [0570c5b8](https://github.com/ChurchApps/FreeShow/commit/0570c5b80284848f1f2eaf173baf6126ed18f83d) on 2025-07-17; git log -S --follow (earliest exact-text occurrence in file lineage).

Code comment: “<!-- can't fade out, because Svelte bug will make it stay forever if tabs changed from Draw while active -->”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/0570c5b80284848f1f2eaf173baf6126ed18f83d): “1.4.8.beta.1 (#1838) * ✔️ Fixed overlay timer stopping when slide was presented - Clear specific overlay action includes effects - Changing output style updates the template proper”
- [code] src/frontend/components/draw/Draw.svelte:26: “<!-- can't fade out, because Svelte bug will make it stay forever if tabs changed from Draw while active -->”

Later line edits: 0; latest 0570c5b8. Full commit messages and lineage: JSON query data.

GitHub: [pr #1838](https://github.com/ChurchApps/FreeShow/pull/1838) (read; no item-specific matching bullet); [pr #1838](https://github.com/ChurchApps/FreeShow/pull/1838) (read; no item-specific matching bullet)
