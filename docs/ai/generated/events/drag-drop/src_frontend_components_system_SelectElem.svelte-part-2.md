# drag-drop/src_frontend_components_system_SelectElem.svelte (2)

## dragover — event-15268ba333c5a24ed9

[code] [src/frontend/components/system/SelectElem.svelte:346](../../../../../src/frontend/components/system/SelectElem.svelte#L346); () => dragOver("center"). partial.

Conditions: src/frontend/components/system/SelectElem.svelte:335 trigger && (dragActive \|\| fileOver); src/frontend/components/system/SelectElem.svelte:344 borders === "all" \|\| borders === "center".

Calls: src/frontend/components/system/SelectElem.svelte:309 dragOver (depth 1); src/frontend/components/system/SelectElem.svelte:46 triggerHoverAction (depth 2); src/frontend/components/system/SelectElem.svelte:49 <callback> (depth 3).

Effects: src/frontend/components/system/SelectElem.svelte:313 store-write src/frontend/stores.ts#activeDropId .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragover — event-6ee0dbda191965f008

[code] [src/frontend/components/system/SelectElem.svelte:349](../../../../../src/frontend/components/system/SelectElem.svelte#L349); () => dragOver("end"). partial.

Conditions: src/frontend/components/system/SelectElem.svelte:335 trigger && (dragActive \|\| fileOver); src/frontend/components/system/SelectElem.svelte:348 borders === "all" \|\| borders === "edges".

Calls: src/frontend/components/system/SelectElem.svelte:309 dragOver (depth 1); src/frontend/components/system/SelectElem.svelte:46 triggerHoverAction (depth 2); src/frontend/components/system/SelectElem.svelte:49 <callback> (depth 3).

Effects: src/frontend/components/system/SelectElem.svelte:313 store-write src/frontend/stores.ts#activeDropId .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
