# Decision records: src/frontend/components/output/layers/Overlay.svelte

Evidence for the mapped source snapshot. [code] Provenance traces source text; [guess] marks uncertain intent.

## D-timer-f6ec73855261ef74

[code] setTimeout: omitted (0 ms)

Location: [src/frontend/components/output/layers/Overlay.svelte:42](../../../../src/frontend/components/output/layers/Overlay.svelte#L42). Category: timing.

Added/traced: [48650ae1](https://github.com/ChurchApps/FreeShow/commit/48650ae1d402cd38c02a8952d2a05c4049a1a208) on 2024-08-29; git log -S --follow (earliest exact-text occurrence in file lineage).

Code comment: “// wait for previous items to start fading out (svelte will keep them until the transition is done!)”

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/48650ae1d402cd38c02a8952d2a05c4049a1a208): “v1.2.6 (#789) * ✔ Fixed èê removed from file names - Camera item fit - Fixed slide split removing chords * ✔ Ctrl+N to create different elements - Updated media selection - Add med”
- [code] src/frontend/components/output/layers/Overlay.svelte:40: “// wait for previous items to start fading out (svelte will keep them until the transition is done!)”

Later line edits: 1; latest 48650ae1. Full commit messages and lineage: JSON query data.

GitHub: [pr #789](https://github.com/ChurchApps/FreeShow/pull/789) (read; no item-specific matching bullet); [pr #789](https://github.com/ChurchApps/FreeShow/pull/789) (read; no item-specific matching bullet)

## D-timer-02e3dbe0dce4be88

[guess] setInterval: isMic ? 100 : 300 (dynamic ms)

Location: [src/frontend/components/output/layers/Overlay.svelte:56](../../../../src/frontend/components/output/layers/Overlay.svelte#L56). Category: timing.

Added/traced: [d6d4b4bf](https://github.com/ChurchApps/FreeShow/commit/d6d4b4bf026e58b44fabd0bbe37be90189656001) on 2025-09-11; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/d6d4b4bf026e58b44fabd0bbe37be90189656001): “1.5.0-beta.2 (#2108) * Better Electron mirror approach * Fixed PDF chord sheet option not showing up right away * Small fixes & tweaks * Fix for snap build * Fix for snap build * U”

Later line edits: 8; latest c9f83b17. Full commit messages and lineage: JSON query data.

GitHub: [pr #2108](https://github.com/ChurchApps/FreeShow/pull/2108) (Unauthenticated GitHub API quota reserve reached; login required for remaining sources.); [pr #3450](https://github.com/ChurchApps/FreeShow/pull/3450) (Unauthenticated GitHub API quota reserve reached; login required for remaining sources.)

## D-workaround-ee1ab844f3a096ba

[guess] // WIP similar to SlideContent.svelte

Location: [src/frontend/components/output/layers/Overlay.svelte:35](../../../../src/frontend/components/output/layers/Overlay.svelte#L35). Category: workaround.

Added/traced: [4bf44652](https://github.com/ChurchApps/FreeShow/commit/4bf44652755ddebc4f969d3b79d4d0ebf717888b) on 2025-11-21; git log -S --follow (earliest exact-text occurrence in file lineage).

Unresolved: local history identifies an addition/edit but gives no item-specific motive.

Sources:

- [code] [source](https://github.com/ChurchApps/FreeShow/commit/4bf44652755ddebc4f969d3b79d4d0ebf717888b): “1.5.3-beta.3 (#2429) * Implement Multi-Chapter Searching of verses (#2418) * Implement Multi-Chapter Searching of verses * Ensure slide names also match multi-chapter shows * Fix s”

Later line edits: 2; latest 4bf44652. Full commit messages and lineage: JSON query data.

GitHub: [pr #2429](https://github.com/ChurchApps/FreeShow/pull/2429) (read; no item-specific matching bullet); [pr #2429](https://github.com/ChurchApps/FreeShow/pull/2429) (read; no item-specific matching bullet)

## D-hotspot-5abe0f4a0d17bd17

[code] Module hotspot: src/frontend/components/output/layers/Overlay.svelte

Location: [src/frontend/components/output/layers/Overlay.svelte:27](../../../../src/frontend/components/output/layers/Overlay.svelte#L27). Category: hotspot; fork feature.

Added/traced: [d3b3f775](https://github.com/ajdebeer1322/FreeShow/commit/d3b3f77519612260851f8e5e63ef0d18b7de5a86) on 2026-10-10; git log -S --follow (earliest exact-text occurrence in file lineage).

Code comment: “// created a new one). Each change of show must give a new key, so the old SlideItemTransition is never revived.”

Sources:

- [code] [source](https://github.com/ajdebeer1322/FreeShow/commit/d3b3f77519612260851f8e5e63ef0d18b7de5a86): “Phase 4: fix regressions found while checking the running app - Output slide changes stacked every previous slide on the output. Svelte 5 revives a {#key} branch when the same key ”
- [code] src/frontend/components/output/layers/Overlay.svelte:25: “// created a new one). Each change of show must give a new key, so the old SlideItemTransition is never revived.”

Later line edits: 0; latest d3b3f775. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.

## D-fork-d3b3f77519612260

[code] Phase 4: fix regressions found while checking the running app

Location: [src/frontend/components/output/layers/Overlay.svelte:24](../../../../src/frontend/components/output/layers/Overlay.svelte#L24). Category: fork-feature; fork feature.

Added/traced: [d3b3f775](https://github.com/ajdebeer1322/FreeShow/commit/d3b3f77519612260851f8e5e63ef0d18b7de5a86) on 2026-10-10; Explicit fork commit; source anchor is representative, not the full feature boundary.

Fork decision: “Phase 4: fix regressions found while checking the running app - Output slide changes stacked every previous slide on the output. Svelte 5 revives a {#key} branch wh

Sources:

- [code] [source](https://github.com/ajdebeer1322/FreeShow/commit/d3b3f77519612260851f8e5e63ef0d18b7de5a86): “Phase 4: fix regressions found while checking the running app - Output slide changes stacked every previous slide on the output. Svelte 5 revives a {#key} branch when the same key ”
- [code] src/frontend/components/output/layers/Overlay.svelte:25: “// created a new one). Each change of show must give a new key, so the old SlideItemTransition is never revived.”

Later line edits: 0; latest d3b3f775. Full commit messages and lineage: JSON query data.

GitHub: No release/issue number in the traced commits.
