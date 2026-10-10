# menu/change_style (1)

## change_style — event-9123a409be5ae735e6

[code] [src/frontend/components/context/contextMenus.ts:145](../../../../../src/frontend/components/context/contextMenus.ts#L145); change_style. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1412 !output; src/frontend/components/context/menuClick.ts:1414 output.stageOutput.

Calls: src/frontend/components/context/menuClick.ts:1409 change_style (depth 0); src/frontend/components/context/menuClick.ts:1417 trigger (depth 1); src/frontend/components/context/menuClick.ts:1418 <callback> (depth 2); src/frontend/components/context/menuClick.ts:1434 trigger (depth 1); src/frontend/components/context/menuClick.ts:1435 <callback> (depth 2).

Effects: src/frontend/components/context/menuClick.ts:1415 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:1426 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:1432 store-write src/frontend/stores.ts#popupData ; src/frontend/components/context/menuClick.ts:1444 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:1418 store-write src/frontend/stores.ts#outputs ; src/frontend/components/context/menuClick.ts:1435 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: output_preview src/frontend/components/context/contextMenus.ts:262. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:71 change_style: () => { let outputId = contextElem?.id \|\| "" const styleId = $outputs&#91;outputId&#93;?.style \|\| "" const stageId = $outputs&#91;outputId&#93;?.stageOutput \|\| "" if (stageId) { menu. Appears: src/frontend/components/output/preview/MultiOutputs.svelte:161.
