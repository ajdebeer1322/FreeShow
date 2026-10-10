# click/src_frontend_components_edit_ItemAddMenu.svelte (1)

## click — event-b9b5f075140ae43294

[code] [src/frontend/components/edit/ItemAddMenu.svelte:162](../../../../../src/frontend/components/edit/ItemAddMenu.svelte#L162); () => (item.children ? null : handleAdd(item.id)). partial.

Conditions: src/frontend/components/edit/ItemAddMenu.svelte:116 !isLocked && (isStage ? $activeStage.id : $activeEdit.slide !== undefined \|\| $activeEdit.type === "overlay" \|\| $activeEdit.type === "template"); src/frontend/components/edit/ItemAddMenu.svelte:117 isOpen.

Calls: src/frontend/components/edit/ItemAddMenu.svelte:72 handleAdd (depth 1); src/frontend/components/stage/stage.ts:22 addStageItem (depth 2); src/frontend/components/stage/stage.ts:32 <callback> (depth 3); src/frontend/components/edit/scripts/autoPosition.ts:12 getLikelyPosition (depth 4); src/frontend/components/helpers/output.ts:634 getFirstOutput (depth 5); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 6); src/frontend/components/helpers/output.ts:840 getOutputResolution (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/helpers/output.ts:810 getResolution (depth 6); src/frontend/components/edit/scripts/autoPosition.ts:21 <callback> (depth 5); src/frontend/components/helpers/style.ts:6 getStyles (depth 6); src/frontend/components/helpers/style.ts:49 removeText (depth 6); src/frontend/components/edit/scripts/autoPosition.ts:29 <callback> (depth 5); src/frontend/components/helpers/style.ts:6 getStyles (depth 5); src/frontend/components/helpers/style.ts:15 <callback> (depth 6); src/frontend/components/helpers/style.ts:49 removeText (depth 5).

Effects: src/frontend/components/edit/ItemAddMenu.svelte:83 store-write src/frontend/stores.ts#selected ; src/frontend/components/edit/ItemAddMenu.svelte:84 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/stage/stage.ts:32 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/edit/scripts/itemHelpers.ts:305 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/stage/stage.ts:76 ipc window.api.send(STAGE, { channel: "LAYOUT", id, data: show }) ; src/frontend/components/stage/stage.ts:66 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/edit/scripts/itemHelpers.ts:157 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:160 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:66 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/drawer/timers/timers.ts:200 store-write src/frontend/stores.ts#timers ; src/frontend/components/actions/actions.ts:220 history history SHOW_LAYOUT; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 23; depth cutoffs: 168. Full edges/effects/conditions in JSON.

## click — event-415cbefbb33c231518

[code] [src/frontend/components/edit/ItemAddMenu.svelte:183](../../../../../src/frontend/components/edit/ItemAddMenu.svelte#L183); () => handleAdd(subItem.id). partial.

Conditions: src/frontend/components/edit/ItemAddMenu.svelte:116 !isLocked && (isStage ? $activeStage.id : $activeEdit.slide !== undefined \|\| $activeEdit.type === "overlay" \|\| $activeEdit.type === "template"); src/frontend/components/edit/ItemAddMenu.svelte:117 isOpen; src/frontend/components/edit/ItemAddMenu.svelte:171 hoveredSubmenu && hoveredSubmenu.length > 0 && hoveredId.

Calls: src/frontend/components/edit/ItemAddMenu.svelte:72 handleAdd (depth 1); src/frontend/components/stage/stage.ts:22 addStageItem (depth 2); src/frontend/components/stage/stage.ts:32 <callback> (depth 3); src/frontend/components/edit/scripts/autoPosition.ts:12 getLikelyPosition (depth 4); src/frontend/components/helpers/output.ts:634 getFirstOutput (depth 5); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 6); src/frontend/components/helpers/output.ts:840 getOutputResolution (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/components/helpers/output.ts:810 getResolution (depth 6); src/frontend/components/edit/scripts/autoPosition.ts:21 <callback> (depth 5); src/frontend/components/helpers/style.ts:6 getStyles (depth 6); src/frontend/components/helpers/style.ts:49 removeText (depth 6); src/frontend/components/edit/scripts/autoPosition.ts:29 <callback> (depth 5); src/frontend/components/helpers/style.ts:6 getStyles (depth 5); src/frontend/components/helpers/style.ts:15 <callback> (depth 6); src/frontend/components/helpers/style.ts:49 removeText (depth 5).

Effects: src/frontend/components/edit/ItemAddMenu.svelte:83 store-write src/frontend/stores.ts#selected ; src/frontend/components/edit/ItemAddMenu.svelte:84 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/stage/stage.ts:32 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/edit/scripts/itemHelpers.ts:305 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/stage/stage.ts:76 ipc window.api.send(STAGE, { channel: "LAYOUT", id, data: show }) ; src/frontend/components/stage/stage.ts:66 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/edit/scripts/itemHelpers.ts:157 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:160 history history UPDATE; src/frontend/components/edit/scripts/itemHelpers.ts:66 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/drawer/timers/timers.ts:200 store-write src/frontend/stores.ts#timers ; src/frontend/components/actions/actions.ts:220 history history SHOW_LAYOUT; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 23; depth cutoffs: 168. Full edges/effects/conditions in JSON.

## click — event-348ad55daea1b96d0e

[code] [src/frontend/components/edit/ItemAddMenu.svelte:197](../../../../../src/frontend/components/edit/ItemAddMenu.svelte#L197); () => (isOpen = !isOpen). resolved-within-bound.

Conditions: src/frontend/components/edit/ItemAddMenu.svelte:116 !isLocked && (isStage ? $activeStage.id : $activeEdit.slide !== undefined \|\| $activeEdit.type === "overlay" \|\| $activeEdit.type === "template").

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
