# menu/test_pattern (1)

## test_pattern — event-8ede523d64717812bf

[code] [src/frontend/components/context/contextMenus.ts:93](../../../../../src/frontend/components/context/contextMenus.ts#L93); test_pattern. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:930 testPattern&#91;id&#93;.

Calls: src/frontend/components/context/menuClick.ts:927 test_pattern (depth 0).

Effects: src/frontend/components/context/menuClick.ts:932 store-write src/frontend/stores.ts#colorbars .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: output_preview src/frontend/components/context/contextMenus.ts:262. Loaders: none.

[code] Visibility/disabled conditions: src/frontend/components/context/ContextItem.svelte:319 test_pattern: () => { const outputId = contextElem?.id \|\| "" enabled = !!$colorbars&#91;outputId&#93; }. Appears: src/frontend/components/output/preview/MultiOutputs.svelte:161.
