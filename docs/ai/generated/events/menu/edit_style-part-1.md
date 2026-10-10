# menu/edit_style (1)

## edit_style — event-7a85e46aa9d45d544c

[code] [src/frontend/components/context/contextMenus.ts:146](../../../../../src/frontend/components/context/contextMenus.ts#L146); edit_style. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1449 !output; src/frontend/components/context/menuClick.ts:1451 output.stageOutput; src/frontend/components/context/menuClick.ts:1457 !output.style.

Calls: src/frontend/components/context/menuClick.ts:1446 edit_style (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1452 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/context/menuClick.ts:1453 store-write src/frontend/stores.ts#activePage ; src/frontend/components/context/menuClick.ts:1459 store-write src/frontend/stores.ts#activeStyle ; src/frontend/components/context/menuClick.ts:1460 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/context/menuClick.ts:1461 store-write src/frontend/stores.ts#activePage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: output_preview src/frontend/components/context/contextMenus.ts:262. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:89 edit_style: () => { let outputId = contextElem?.id \|\| "" const styleId = $outputs&#91;outputId&#93;?.style \|\| "" const stageId = $outputs&#91;outputId&#93;?.stageOutput \|\| "" if (stageId) { menu.l. Appears: src/frontend/components/output/preview/MultiOutputs.svelte:161.
