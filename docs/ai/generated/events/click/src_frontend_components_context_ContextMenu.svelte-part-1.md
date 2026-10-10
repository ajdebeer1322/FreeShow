# click/src_frontend_components_context_ContextMenu.svelte (1)

## click — event-b8bac78dc585848df2

[code] [src/frontend/components/context/ContextMenu.svelte:232](../../../../../src/frontend/components/context/ContextMenu.svelte#L232); click. resolved-within-bound.

Conditions: src/frontend/components/context/ContextMenu.svelte:110 !e.target?.closest?.(".contextMenu").

Calls: src/frontend/components/context/ContextMenu.svelte:109 click (depth 0); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 1).

Effects: src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
