# automatic/src_frontend_components_main_popups_SelectOverlay.svelte (1)

## setTimeout — event-070aa27fb93befc079

[code] [src/frontend/components/main/popups/SelectOverlay.svelte:51](../../../../../src/frontend/components/main/popups/SelectOverlay.svelte#L51); () => { lazyLoader += 16 }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/SelectOverlay.svelte:47 lazyLoader >= filteredOverlays.length; src/frontend/components/main/popups/SelectOverlay.svelte:46 !loaded && filteredOverlays?.length.

Calls: src/frontend/components/main/popups/SelectOverlay.svelte:51 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d9d4f388ed8b7eb782

[code] [src/frontend/components/main/popups/SelectOverlay.svelte:66](../../../../../src/frontend/components/main/popups/SelectOverlay.svelte#L66); () => { setTimeout(() => popupData.set({}), 500) activePopup.set(null) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/SelectOverlay.svelte:66 <callback> (depth 0); src/frontend/components/main/popups/SelectOverlay.svelte:67 <callback> (depth 1).

Effects: src/frontend/components/main/popups/SelectOverlay.svelte:68 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/SelectOverlay.svelte:67 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-307892e6798aeb40a9

[code] [src/frontend/components/main/popups/SelectOverlay.svelte:67](../../../../../src/frontend/components/main/popups/SelectOverlay.svelte#L67); () => popupData.set({}). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/SelectOverlay.svelte:67 <callback> (depth 0).

Effects: src/frontend/components/main/popups/SelectOverlay.svelte:67 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
