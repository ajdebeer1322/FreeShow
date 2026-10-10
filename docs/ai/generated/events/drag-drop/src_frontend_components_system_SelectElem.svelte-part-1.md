# drag-drop/src_frontend_components_system_SelectElem.svelte (1)

## dragstart — event-802102239b228b277f

[code] [src/frontend/components/system/SelectElem.svelte:319](../../../../../src/frontend/components/system/SelectElem.svelte#L319); dragstart. resolved-within-bound.

Conditions: src/frontend/components/system/SelectElem.svelte:286 $activeRename !== null \|\| $disableDragging.

Calls: src/frontend/components/system/SelectElem.svelte:285 dragstart (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragend — event-31c62285f9a58cbad9

[code] [src/frontend/components/system/SelectElem.svelte:320](../../../../../src/frontend/components/system/SelectElem.svelte#L320); endDrag. resolved-within-bound.

Conditions: src/frontend/components/system/SelectElem.svelte:295 $selected.id !== id.

Calls: src/frontend/components/system/SelectElem.svelte:291 endDrag (depth 0).

Effects: src/frontend/components/system/SelectElem.svelte:294 store-write src/frontend/stores.ts#activeDropId ; src/frontend/components/system/SelectElem.svelte:295 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragstart — event-0cd5efa8a60f883864

[code] [src/frontend/components/system/SelectElem.svelte:331](../../../../../src/frontend/components/system/SelectElem.svelte#L331); (e) => mousedown(e, true). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/system/SelectElem.svelte:126 mousedown (depth 1); src/frontend/components/system/SelectElem.svelte:276 remainSelected (depth 2); src/frontend/components/system/SelectElem.svelte:160 <callback> (depth 2); src/frontend/components/system/SelectElem.svelte:160 <callback> (depth 3); src/frontend/components/system/SelectElem.svelte:161 <callback> (depth 2); src/frontend/components/system/SelectElem.svelte:161 <callback> (depth 3); src/frontend/components/system/SelectElem.svelte:166 range (depth 2); src/frontend/components/system/SelectElem.svelte:169 <callback> (depth 3); src/frontend/components/system/SelectElem.svelte:175 <callback> (depth 2); src/frontend/components/system/SelectElem.svelte:182 <callback> (depth 2); src/frontend/components/system/SelectElem.svelte:186 <callback> (depth 3); src/frontend/components/system/SelectElem.svelte:192 <callback> (depth 2); src/frontend/components/system/SelectElem.svelte:197 <callback> (depth 2); src/frontend/components/system/SelectElem.svelte:199 <callback> (depth 3); src/frontend/components/system/SelectElem.svelte:219 <callback> (depth 2); src/frontend/components/helpers/array.ts:4 arrayHasData (depth 2).

Effects: src/frontend/components/system/SelectElem.svelte:132 store-write src/frontend/stores.ts#selected ; src/frontend/components/system/SelectElem.svelte:150 store-write src/frontend/stores.ts#selected ; src/frontend/components/system/SelectElem.svelte:205 store-write src/frontend/stores.ts#selected ; src/frontend/components/system/SelectElem.svelte:234 store-write src/frontend/stores.ts#selected ; src/frontend/components/system/SelectElem.svelte:265 store-write src/frontend/stores.ts#selected ; src/frontend/components/system/SelectElem.svelte:266 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragleave — event-5de7e035ce8e1b28ed

[code] [src/frontend/components/system/SelectElem.svelte:336](../../../../../src/frontend/components/system/SelectElem.svelte#L336); stopDrag. resolved-within-bound.

Conditions: src/frontend/components/system/SelectElem.svelte:335 trigger && (dragActive \|\| fileOver); src/frontend/components/system/SelectElem.svelte:301 e.target?.classList.contains("TriggerBlock") && e.target?.closest("#" + thisId).

Calls: src/frontend/components/system/SelectElem.svelte:300 stopDrag (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragover — event-9ad7af6a70ac6f35e1

[code] [src/frontend/components/system/SelectElem.svelte:342](../../../../../src/frontend/components/system/SelectElem.svelte#L342); () => dragOver("start"). partial.

Conditions: src/frontend/components/system/SelectElem.svelte:335 trigger && (dragActive \|\| fileOver); src/frontend/components/system/SelectElem.svelte:341 borders === "all" \|\| borders === "edges".

Calls: src/frontend/components/system/SelectElem.svelte:309 dragOver (depth 1); src/frontend/components/system/SelectElem.svelte:46 triggerHoverAction (depth 2); src/frontend/components/system/SelectElem.svelte:49 <callback> (depth 3).

Effects: src/frontend/components/system/SelectElem.svelte:313 store-write src/frontend/stores.ts#activeDropId .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dragover — event-a8025c02cdb063efa6

[code] [src/frontend/components/system/SelectElem.svelte:345](../../../../../src/frontend/components/system/SelectElem.svelte#L345); () => dragOver("center"). partial.

Conditions: src/frontend/components/system/SelectElem.svelte:335 trigger && (dragActive \|\| fileOver); src/frontend/components/system/SelectElem.svelte:344 borders === "all" \|\| borders === "center".

Calls: src/frontend/components/system/SelectElem.svelte:309 dragOver (depth 1); src/frontend/components/system/SelectElem.svelte:46 triggerHoverAction (depth 2); src/frontend/components/system/SelectElem.svelte:49 <callback> (depth 3).

Effects: src/frontend/components/system/SelectElem.svelte:313 store-write src/frontend/stores.ts#activeDropId .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
