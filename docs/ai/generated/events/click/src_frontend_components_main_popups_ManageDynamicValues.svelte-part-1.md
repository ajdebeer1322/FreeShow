# click/src_frontend_components_main_popups_ManageDynamicValues.svelte (1)

## click — event-707cf1e06a33ff852a

[code] [src/frontend/components/main/popups/ManageDynamicValues.svelte:132](../../../../../src/frontend/components/main/popups/ManageDynamicValues.svelte#L132); () => deleteItem(i). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/ManageDynamicValues.svelte:76 deleteItem (depth 1); src/frontend/components/main/popups/ManageDynamicValues.svelte:100 toggleMenu (depth 2); src/frontend/components/main/popups/ManageDynamicValues.svelte:78 <callback> (depth 2); src/frontend/components/main/popups/ManageDynamicValues.svelte:80 <callback> (depth 2).

Effects: src/frontend/components/main/popups/ManageDynamicValues.svelte:80 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6910562355f7888255

[code] [src/frontend/components/main/popups/ManageDynamicValues.svelte:148](../../../../../src/frontend/components/main/popups/ManageDynamicValues.svelte#L148); addRSS. partial.

Conditions: src/frontend/components/main/popups/ManageDynamicValues.svelte:64 !a.dynamicRSS; src/frontend/components/main/popups/ManageDynamicValues.svelte:70 !openedMenus.includes(nextIndex).

Calls: src/frontend/components/main/popups/ManageDynamicValues.svelte:62 addRSS (depth 0); src/frontend/components/main/popups/ManageDynamicValues.svelte:63 <callback> (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2).

Effects: src/frontend/components/main/popups/ManageDynamicValues.svelte:63 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
