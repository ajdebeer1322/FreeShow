# keyboard/src_frontend_components_context_ContextItem.svelte (1)

## dynamic — event-35944902e85e10f45d

[code] [src/frontend/components/context/ContextItem.svelte:496](../../../../../src/frontend/components/context/ContextItem.svelte#L496); keydown. partial.

Conditions: src/frontend/components/context/ContextItem.svelte:476 e.key === "Enter" \|\| e.key === " ".

Calls: src/frontend/components/context/ContextItem.svelte:475 keydown (depth 0); src/frontend/components/context/ContextItem.svelte:433 contextItemClick (depth 1); src/frontend/components/context/menuClick.ts:136 menuClick (depth 2); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 2).

Effects: src/frontend/components/context/ContextItem.svelte:436 store-write src/frontend/stores.ts#slideDeleteHighlight ; src/frontend/components/context/ContextItem.svelte:452 store-write src/frontend/stores.ts#topContextActive ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
