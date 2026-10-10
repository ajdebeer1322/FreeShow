# Decision records: src/frontend/MainOutput.svelte

Evidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.

## D-timer-6c606adee9f9fe54

[code] setTimeout: 2000 (2000 ms)

Location: [src/frontend/MainOutput.svelte:38](../../../../src/frontend/MainOutput.svelte#L38). Category: timing.

Added/traced: [c5a960bc](https://github.com/ChurchApps/FreeShow/commit/c5a960bced866af80c673921866af0800b48320b) on 2024-03-27; git log -L (earliest tracked source-line ancestor).

Code comment: “// make sure it's loaded to prevent output not changing to stage output because of Svelte transition bug”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/c5a960bced866af80c673921866af0800b48320b): “v1.1.5 (#452) * 🚩 Updated languages * 🔍 Case insensitive search in drawer - OpenLyrics import working for files with xml instructions - Next slide text stage preview not showing”
- [code] src/frontend/MainOutput.svelte:35: “// make sure it's loaded to prevent output not changing to stage output because of Svelte transition bug”

Later line edits: 0; latest c5a960bc. Full commit messages and lineage: JSON query data.

GitHub: [pr #452](https://github.com/ChurchApps/FreeShow/pull/452) (read; no item-specific matching bullet); [pr #452](https://github.com/ChurchApps/FreeShow/pull/452) (read; no item-specific matching bullet)

## D-transition-381f42150b26fd9e

[guess] transition-directive: default transition parameters (dynamic ms)

Location: [src/frontend/MainOutput.svelte:70](../../../../src/frontend/MainOutput.svelte#L70). Category: timing; fork feature.

Added/traced: [e5f66233](https://github.com/ajdebeer1322/FreeShow/commit/e5f66233fa0187a258128aa929a3f0c71fa43948) on 2026-10-10; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ajdebeer1322/FreeShow/commit/e5f66233fa0187a258128aa929a3f0c71fa43948): “Phase 2: required code changes for Svelte 5 (legacy mode) - mount(App, { target }) instead of new App({ target }) in the 6 entry points (frontend/main.ts and server/{cam,controller”

Later line edits: 0; latest e5f66233. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.

## D-workaround-dd6d6214d6a7e928

[code] // make sure it's loaded to prevent output not changing to stage output because of Svelte transition bug

Location: [src/frontend/MainOutput.svelte:35](../../../../src/frontend/MainOutput.svelte#L35). Category: workaround.

Added/traced: [c5a960bc](https://github.com/ChurchApps/FreeShow/commit/c5a960bced866af80c673921866af0800b48320b) on 2024-03-27; git log -S --follow (earliest exact-text occurrence in file lineage).

Code comment: “// make sure it's loaded to prevent output not changing to stage output because of Svelte transition bug”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/c5a960bced866af80c673921866af0800b48320b): “v1.1.5 (#452) * 🚩 Updated languages * 🔍 Case insensitive search in drawer - OpenLyrics import working for files with xml instructions - Next slide text stage preview not showing”
- [code] src/frontend/MainOutput.svelte:35: “// make sure it's loaded to prevent output not changing to stage output because of Svelte transition bug”

Later line edits: 0; latest c5a960bc. Full commit messages and lineage: JSON query data.

GitHub: [pr #452](https://github.com/ChurchApps/FreeShow/pull/452) (read; no item-specific matching bullet); [pr #452](https://github.com/ChurchApps/FreeShow/pull/452) (read; no item-specific matching bullet)

## D-fork-e5f66233fa0187a2

[code] Phase 2: required code changes for Svelte 5 (legacy mode)

Location: [src/frontend/MainOutput.svelte:70](../../../../src/frontend/MainOutput.svelte#L70). Category: fork-feature; fork feature.

Added/traced: [e5f66233](https://github.com/ajdebeer1322/FreeShow/commit/e5f66233fa0187a258128aa929a3f0c71fa43948) on 2026-10-10; Explicit fork commit; source anchor is representative, not the full feature boundary.

Fork decision: “Phase 2: required code changes for Svelte 5 (legacy mode) - mount(App, { target }) instead of new App({ target }) in the 6 entry points (frontend/main.ts and server

Sources:

- [code] [source](https://github.com/ajdebeer1322/FreeShow/commit/e5f66233fa0187a258128aa929a3f0c71fa43948): “Phase 2: required code changes for Svelte 5 (legacy mode) - mount(App, { target }) instead of new App({ target }) in the 6 entry points (frontend/main.ts and server/{cam,controller”

Later line edits: 0; latest e5f66233. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.
