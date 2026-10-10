# automatic/src_frontend_components_main_StatusIndicator.svelte (1)

## setTimeout — event-be4b8c8b89614b7541

[code] [src/frontend/components/main/StatusIndicator.svelte:47](../../../../../src/frontend/components/main/StatusIndicator.svelte#L47); () => { indicatorTimeout = null if ($statusIndicator !== indicatorId) updateIndicator() else if (maxTimeout) clearTimeout(maxTimeout) }. resolved-within-bound.

Conditions: src/frontend/components/main/StatusIndicator.svelte:49 $statusIndicator !== indicatorId; src/frontend/components/main/StatusIndicator.svelte:50 maxTimeout.

Calls: src/frontend/components/main/StatusIndicator.svelte:47 <callback> (depth 0); src/frontend/components/main/StatusIndicator.svelte:40 updateIndicator (depth 1); src/frontend/components/main/StatusIndicator.svelte:54 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-bc9fbc473e30e02cd6

[code] [src/frontend/components/main/StatusIndicator.svelte:54](../../../../../src/frontend/components/main/StatusIndicator.svelte#L54); () => { if (indicatorTimeout) clearTimeout(indicatorTimeout) indicatorTimeout = null indicatorId = "" }. resolved-within-bound.

Conditions: src/frontend/components/main/StatusIndicator.svelte:55 indicatorTimeout.

Calls: src/frontend/components/main/StatusIndicator.svelte:54 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
