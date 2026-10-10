# click/src_frontend_components_drawer_pages_Variables.svelte (2)

## click — event-54a564d3bd9fdb3341

[code] [src/frontend/components/drawer/pages/Variables.svelte:244](../../../../../src/frontend/components/drawer/pages/Variables.svelte#L244); () => updateVariable(Math.min(activeSet + 1, (variable.textSets?.length ?? 1) - 1), variable.id, "activeTextSet"). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Variables.svelte:64 filteredVariablesSearch.length.

Calls: src/frontend/components/drawer/pages/Variables.svelte:29 updateVariable (depth 1); src/frontend/components/drawer/pages/Variables.svelte:33 <callback> (depth 2).

Effects: src/frontend/components/drawer/pages/Variables.svelte:33 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ecdeec334659a809cf

[code] [src/frontend/components/drawer/pages/Variables.svelte:265](../../../../../src/frontend/components/drawer/pages/Variables.svelte#L265); () => { selected.set({ id: null, data: &#91;&#93; }) activePopup.set("variable") }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/pages/Variables.svelte:266 store-write src/frontend/stores.ts#selected ; src/frontend/components/drawer/pages/Variables.svelte:267 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
