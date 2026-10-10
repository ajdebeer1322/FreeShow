# click/src_frontend_components_main_DebugPanel.svelte (1)

## click — event-73566b52f1253bd80f

[code] [src/frontend/components/main/DebugPanel.svelte:99](../../../../../src/frontend/components/main/DebugPanel.svelte#L99); copyAll. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/DebugPanel.svelte:76 copyAll (depth 0); src/frontend/components/main/DebugPanel.svelte:60 copyText (depth 1); src/frontend/components/main/DebugPanel.svelte:54 setStatus (depth 2); src/frontend/components/main/DebugPanel.svelte:57 <callback> (depth 3); src/frontend/components/helpers/debugState.ts:37 buildDebugState (depth 1); src/frontend/components/helpers/debugLog.ts:215 describeOutputs (depth 2); src/frontend/components/helpers/debugLog.ts:218 <callback> (depth 3); src/frontend/components/helpers/debugState.ts:45 <callback> (depth 2); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6).

Effects: src/frontend/components/main/DebugPanel.svelte:62 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/debugState.ts:47 presentation OutputHelper.debugPeek ; src/frontend/components/helpers/debugState.ts:48 presentation OutputHelper.debugPeek ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 65. Full edges/effects/conditions in JSON.

## click — event-ddb4c49f8dfbf3d83c

[code] [src/frontend/components/main/DebugPanel.svelte:100](../../../../../src/frontend/components/main/DebugPanel.svelte#L100); clear. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/DebugPanel.svelte:80 clear (depth 0); src/frontend/components/helpers/debugLog.ts:69 clearDebugLog (depth 1); src/frontend/components/main/DebugPanel.svelte:54 setStatus (depth 1); src/frontend/components/main/DebugPanel.svelte:57 <callback> (depth 2).

Effects: src/frontend/components/helpers/debugLog.ts:71 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1fd3e368afd539512d

[code] [src/frontend/components/main/DebugPanel.svelte:101](../../../../../src/frontend/components/main/DebugPanel.svelte#L101); () => debugPanelOpen.set(false). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: src/frontend/components/main/DebugPanel.svelte:101 store-write src/frontend/components/helpers/debugLog.ts#debugPanelOpen .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-2d5c9d18ee83339442

[code] [src/frontend/components/main/DebugPanel.svelte:106](../../../../../src/frontend/components/main/DebugPanel.svelte#L106); () => selectTab(item.id). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/DebugPanel.svelte:47 selectTab (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8192e45610c3e452b2

[code] [src/frontend/components/main/DebugPanel.svelte:114](../../../../../src/frontend/components/main/DebugPanel.svelte#L114); copyTab. partial.

Conditions: src/frontend/components/main/DebugPanel.svelte:71 tab === "state".

Calls: src/frontend/components/main/DebugPanel.svelte:69 copyTab (depth 0); src/frontend/components/main/DebugPanel.svelte:60 copyText (depth 1); src/frontend/components/main/DebugPanel.svelte:54 setStatus (depth 2); src/frontend/components/main/DebugPanel.svelte:57 <callback> (depth 3); src/frontend/components/helpers/debugState.ts:37 buildDebugState (depth 1); src/frontend/components/helpers/debugLog.ts:215 describeOutputs (depth 2); src/frontend/components/helpers/debugLog.ts:218 <callback> (depth 3); src/frontend/components/helpers/debugState.ts:45 <callback> (depth 2); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6).

Effects: src/frontend/components/main/DebugPanel.svelte:62 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/debugState.ts:47 presentation OutputHelper.debugPeek ; src/frontend/components/helpers/debugState.ts:48 presentation OutputHelper.debugPeek ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 65. Full edges/effects/conditions in JSON.
