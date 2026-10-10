# menu/live_prepare (1)

## live_prepare — event-1101d8ea189cee3738

[code] [src/frontend/components/context/contextMenus.ts:94](../../../../../src/frontend/components/context/contextMenus.ts#L94); live_prepare. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:937 prepare&#91;id&#93;.

Calls: src/frontend/components/context/menuClick.ts:934 live_prepare (depth 0).

Effects: src/frontend/components/context/menuClick.ts:939 store-write src/frontend/stores.ts#livePrepare .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: output_preview src/frontend/components/context/contextMenus.ts:262. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:323 live_prepare: () => { const outputId = contextElem?.id \|\| "" enabled = !!$livePrepare&#91;outputId&#93; }. Appears: src/frontend/components/output/preview/MultiOutputs.svelte:161.
