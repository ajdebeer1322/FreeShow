# automatic/src_frontend_components_context_ContextMenu.svelte (1)

## setTimeout — event-b9ad3afab3c31367b2

[code] [src/frontend/components/context/ContextMenu.svelte:84](../../../../../src/frontend/components/context/ContextMenu.svelte#L84); closeContextMenu. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 0).

Effects: src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-f5ed668c81a454767d

[code] [src/frontend/components/context/ContextMenu.svelte:136](../../../../../src/frontend/components/context/ContextMenu.svelte#L136); () => (closingMenuTimeout = null). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/context/ContextMenu.svelte:136 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-4797ed898efe962b4e

[code] [src/frontend/components/context/ContextMenu.svelte:176](../../../../../src/frontend/components/context/ContextMenu.svelte#L176); () => { if (!document.querySelector(".contextMenu")) return top = document.querySelector(".contextMenu")!.getBoundingClientRect().top <= 0 }. resolved-within-bound.

Conditions: src/frontend/components/context/ContextMenu.svelte:177 !document.querySelector(".contextMenu").

Calls: src/frontend/components/context/ContextMenu.svelte:176 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-4b8b144f0018a676ad

[code] [src/frontend/components/context/ContextMenu.svelte:224](../../../../../src/frontend/components/context/ContextMenu.svelte#L224); () => { requestTimeout = null isRequesting = false if (isRequesting) update++ }. resolved-within-bound.

Conditions: src/frontend/components/context/ContextMenu.svelte:227 isRequesting.

Calls: src/frontend/components/context/ContextMenu.svelte:224 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
