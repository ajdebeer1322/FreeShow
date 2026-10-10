# click/src_frontend_components_drawer_pages_OverlayActions.svelte (1)

## click — event-75a81279351d2e8841

[code] [src/frontend/components/drawer/pages/OverlayActions.svelte:60](../../../../../src/frontend/components/drawer/pages/OverlayActions.svelte#L60); (e) => setTimeout(() => removeAction(e, action.id \|\| actionId)). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/OverlayActions.svelte:51 overlay?.actions?.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-990bd8df792fa4d668

[code] [src/frontend/components/drawer/pages/OverlayActions.svelte:72](../../../../../src/frontend/components/drawer/pages/OverlayActions.svelte#L72); () => changeAction(action.id). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/OverlayActions.svelte:69 overlay&#91;action.id&#93;.

Calls: src/frontend/components/drawer/pages/OverlayActions.svelte:16 changeAction (depth 1); src/frontend/components/drawer/pages/OverlayActions.svelte:18 <callback> (depth 2); src/frontend/components/drawer/pages/OverlayActions.svelte:20 <callback> (depth 3).

Effects: src/frontend/components/drawer/pages/OverlayActions.svelte:20 store-write src/frontend/stores.ts#overlays .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
