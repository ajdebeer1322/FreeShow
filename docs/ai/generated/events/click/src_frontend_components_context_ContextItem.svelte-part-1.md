# click/src_frontend_components_context_ContextItem.svelte (1)

## click — event-2c71cf00cdc54cb9a9

[code] [src/frontend/components/context/ContextItem.svelte:496](../../../../../src/frontend/components/context/ContextItem.svelte#L496); contextItemClick. partial.

Conditions: src/frontend/components/context/ContextItem.svelte:434 disabled; src/frontend/components/context/ContextItem.svelte:445 keepOpen.includes(id); src/frontend/components/context/ContextItem.svelte:447 keepOpenToggle.includes(id); src/frontend/components/context/ContextItem.svelte:452 topBar.

Calls: src/frontend/components/context/ContextItem.svelte:433 contextItemClick (depth 0); src/frontend/components/context/menuClick.ts:136 menuClick (depth 1); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 1).

Effects: src/frontend/components/context/ContextItem.svelte:436 store-write src/frontend/stores.ts#slideDeleteHighlight ; src/frontend/components/context/ContextItem.svelte:452 store-write src/frontend/stores.ts#topContextActive ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
