# keyboard/src_frontend_components_context_ContextMenu.svelte (1)

## dynamic — event-0e8b434be15700cda6

[code] [src/frontend/components/context/ContextMenu.svelte:232](../../../../../src/frontend/components/context/ContextMenu.svelte#L232); handleKeydown. partial.

Conditions: src/frontend/components/context/ContextMenu.svelte:115 !result.

Calls: src/frontend/components/context/ContextMenu.svelte:113 handleKeydown (depth 0); src/frontend/components/context/contextMenuSearch.ts:13 handleKeydown (depth 1); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 2); src/frontend/components/context/contextMenuSearch.ts:42 <callback> (depth 2).

Effects: src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
