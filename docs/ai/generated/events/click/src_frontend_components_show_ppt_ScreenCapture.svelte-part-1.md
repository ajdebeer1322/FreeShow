# click/src_frontend_components_show_ppt_ScreenCapture.svelte (1)

## click — event-b944efd7c745fa7adb

[code] [src/frontend/components/show/ppt/ScreenCapture.svelte:104](../../../../../src/frontend/components/show/ppt/ScreenCapture.svelte#L104); () => selectWindow(screen, true). partial.

Conditions: src/frontend/components/show/ppt/ScreenCapture.svelte:96 chosenWindow; src/frontend/components/show/ppt/ScreenCapture.svelte:99 chooseWindow.length.

Calls: src/frontend/components/show/ppt/ScreenCapture.svelte:66 selectWindow (depth 1); src/frontend/components/show/ppt/ScreenCapture.svelte:73 <callback> (depth 2); src/frontend/components/show/ppt/ScreenCapture.svelte:74 <callback> (depth 3); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4); src/frontend/components/helpers/output.ts:658 <callback> (depth 3).

Effects: src/frontend/components/show/ppt/ScreenCapture.svelte:73 store-write src/frontend/stores.ts#projects ; src/frontend/components/show/ppt/ScreenCapture.svelte:77 store-write src/frontend/stores.ts#activeProject ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/show/ppt/ScreenCapture.svelte:86 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 4. Full edges/effects/conditions in JSON.
