# automatic/src_frontend_components_main_DebugPanel.svelte (1)

## setTimeout — event-aca3edd58c5f9fb4b9

[code] [src/frontend/components/main/DebugPanel.svelte:20](../../../../../src/frontend/components/main/DebugPanel.svelte#L20); () => { refreshTimeout = null try { state = buildDebugState() } catch (error) { state = "Could not build the state: " + String(error) } }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/DebugPanel.svelte:20 <callback> (depth 0); src/frontend/components/helpers/debugState.ts:37 buildDebugState (depth 1); src/frontend/components/helpers/debugLog.ts:215 describeOutputs (depth 2); src/frontend/components/helpers/debugLog.ts:218 <callback> (depth 3); src/frontend/components/helpers/debugState.ts:45 <callback> (depth 2); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4).

Effects: src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/debugState.ts:47 presentation OutputHelper.debugPeek ; src/frontend/components/helpers/debugState.ts:48 presentation OutputHelper.debugPeek ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 65. Full edges/effects/conditions in JSON.

## setTimeout — event-256388f2dc9c2280fe

[code] [src/frontend/components/main/DebugPanel.svelte:57](../../../../../src/frontend/components/main/DebugPanel.svelte#L57); () => (status = ""). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/DebugPanel.svelte:57 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
