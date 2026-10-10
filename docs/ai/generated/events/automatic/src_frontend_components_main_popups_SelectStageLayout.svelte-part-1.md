# automatic/src_frontend_components_main_popups_SelectStageLayout.svelte (1)

## setTimeout — event-a3adfad92ebccb1953

[code] [src/frontend/components/main/popups/SelectStageLayout.svelte:35](../../../../../src/frontend/components/main/popups/SelectStageLayout.svelte#L35); () => { const batch = lazyLoader === 0 ? 2 : Math.min(16, lazyLoader * 2) lazyLoader += batch }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/SelectStageLayout.svelte:31 lazyLoader >= stageLayouts.length; src/frontend/components/main/popups/SelectStageLayout.svelte:30 !loaded && stageLayouts?.length.

Calls: src/frontend/components/main/popups/SelectStageLayout.svelte:36 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-754be76f880175d7fd

[code] [src/frontend/components/main/popups/SelectStageLayout.svelte:54](../../../../../src/frontend/components/main/popups/SelectStageLayout.svelte#L54); () => { setTimeout(() => ($activePopup === null ? popupData.set({}) : null), 200) // reset after closing activePopup.set(null) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/SelectStageLayout.svelte:54 <callback> (depth 0); src/frontend/components/main/popups/SelectStageLayout.svelte:55 <callback> (depth 1).

Effects: src/frontend/components/main/popups/SelectStageLayout.svelte:56 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/SelectStageLayout.svelte:55 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-77a79115afe9e7311f

[code] [src/frontend/components/main/popups/SelectStageLayout.svelte:55](../../../../../src/frontend/components/main/popups/SelectStageLayout.svelte#L55); () => ($activePopup === null ? popupData.set({}) : null). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/SelectStageLayout.svelte:55 <callback> (depth 0).

Effects: src/frontend/components/main/popups/SelectStageLayout.svelte:55 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
