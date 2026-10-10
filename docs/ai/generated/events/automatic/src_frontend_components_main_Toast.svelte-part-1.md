# automatic/src_frontend_components_main_Toast.svelte (1)

## setTimeout — event-1892c347f3b767dc28

[code] [src/frontend/components/main/Toast.svelte:31](../../../../../src/frontend/components/main/Toast.svelte#L31); () => { currentTimer = null if (!messages.length) return removeCurrent() }. resolved-within-bound.

Conditions: src/frontend/components/main/Toast.svelte:33 !messages.length.

Calls: src/frontend/components/main/Toast.svelte:31 <callback> (depth 0); src/frontend/components/main/Toast.svelte:39 removeCurrent (depth 1); src/frontend/components/main/Toast.svelte:40 <callback> (depth 2).

Effects: src/frontend/components/main/Toast.svelte:40 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
