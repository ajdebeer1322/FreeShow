# automatic/src_frontend_components_main_popups_SelectStyle.svelte (1)

## setTimeout — event-a2bc0673e380e66ecd

[code] [src/frontend/components/main/popups/SelectStyle.svelte:33](../../../../../src/frontend/components/main/popups/SelectStyle.svelte#L33); () => { setTimeout(() => ($activePopup === null ? popupData.set({}) : null), 200) // reset after closing activePopup.set(null) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/SelectStyle.svelte:33 <callback> (depth 0); src/frontend/components/main/popups/SelectStyle.svelte:34 <callback> (depth 1).

Effects: src/frontend/components/main/popups/SelectStyle.svelte:35 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/SelectStyle.svelte:34 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-06f0a13db8e47fa45b

[code] [src/frontend/components/main/popups/SelectStyle.svelte:34](../../../../../src/frontend/components/main/popups/SelectStyle.svelte#L34); () => ($activePopup === null ? popupData.set({}) : null). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/SelectStyle.svelte:34 <callback> (depth 0).

Effects: src/frontend/components/main/popups/SelectStyle.svelte:34 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
