# click/src_frontend_components_timeline_TimelineEasing.svelte (1)

## click — event-de77a5af180514ee7d

[code] [src/frontend/components/timeline/TimelineEasing.svelte:202](../../../../../src/frontend/components/timeline/TimelineEasing.svelte#L202); handleGlobalClick. resolved-within-bound.

Conditions: src/frontend/components/timeline/TimelineEasing.svelte:178 contextMenuState; src/frontend/components/timeline/TimelineEasing.svelte:180 menu && !menu.contains(e.target as Node).

Calls: src/frontend/components/timeline/TimelineEasing.svelte:177 handleGlobalClick (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7f0cc69e6fba6b0b47

[code] [src/frontend/components/timeline/TimelineEasing.svelte:307](../../../../../src/frontend/components/timeline/TimelineEasing.svelte#L307); (e) => e.stopPropagation(). resolved-within-bound.

Conditions: src/frontend/components/timeline/TimelineEasing.svelte:304 contextMenuState.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-dd6fbb8f5ac3071633

[code] [src/frontend/components/timeline/TimelineEasing.svelte:308](../../../../../src/frontend/components/timeline/TimelineEasing.svelte#L308); () => applyCurvePinPreset(contextMenuState?.curveIndex ?? 0, contextMenuState?.pin ?? 1, "linear"). partial.

Conditions: src/frontend/components/timeline/TimelineEasing.svelte:304 contextMenuState.

Calls: src/frontend/components/timeline/TimelineEasing.svelte:137 applyCurvePinPreset (depth 1); src/frontend/components/timeline/TimelineEasing.svelte:144 <callback> (depth 2); src/frontend/components/timeline/TimelineEasing.svelte:157 <callback> (depth 2); src/frontend/components/timeline/TimelineEasing.svelte:76 updateStoredEasing (depth 3); src/frontend/components/timeline/easingHelper.ts:30 toStoredActionEasing (depth 4); src/frontend/components/timeline/easingHelper.ts:18 getActionEasing (depth 4); src/frontend/components/timeline/TimelineActions.ts:225 updateAction (depth 4); src/frontend/components/timeline/TimelineActions.ts:192 getActionIndex (depth 5); src/frontend/components/timeline/TimelineActions.ts:193 <callback> (depth 6); src/frontend/components/timeline/TimelineActions.ts:111 setChanged (depth 5); src/frontend/utils/common.ts:254 hasNewerUpdate (depth 6); src/frontend/components/timeline/TimelineActions.ts:120 saveState (depth 6); src/frontend/components/timeline/TimelineEasing.svelte:162 <callback> (depth 3); src/frontend/components/timeline/TimelineEasing.svelte:164 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 4. Full edges/effects/conditions in JSON.

## click — event-dfb0eed26d7abdb9bb

[code] [src/frontend/components/timeline/TimelineEasing.svelte:314](../../../../../src/frontend/components/timeline/TimelineEasing.svelte#L314); () => applyCurvePinPreset(contextMenuState?.curveIndex ?? 0, contextMenuState?.pin ?? 1, "ease"). partial.

Conditions: src/frontend/components/timeline/TimelineEasing.svelte:304 contextMenuState.

Calls: src/frontend/components/timeline/TimelineEasing.svelte:137 applyCurvePinPreset (depth 1); src/frontend/components/timeline/TimelineEasing.svelte:144 <callback> (depth 2); src/frontend/components/timeline/TimelineEasing.svelte:157 <callback> (depth 2); src/frontend/components/timeline/TimelineEasing.svelte:76 updateStoredEasing (depth 3); src/frontend/components/timeline/easingHelper.ts:30 toStoredActionEasing (depth 4); src/frontend/components/timeline/easingHelper.ts:18 getActionEasing (depth 4); src/frontend/components/timeline/TimelineActions.ts:225 updateAction (depth 4); src/frontend/components/timeline/TimelineActions.ts:192 getActionIndex (depth 5); src/frontend/components/timeline/TimelineActions.ts:193 <callback> (depth 6); src/frontend/components/timeline/TimelineActions.ts:111 setChanged (depth 5); src/frontend/utils/common.ts:254 hasNewerUpdate (depth 6); src/frontend/components/timeline/TimelineActions.ts:120 saveState (depth 6); src/frontend/components/timeline/TimelineEasing.svelte:162 <callback> (depth 3); src/frontend/components/timeline/TimelineEasing.svelte:164 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 4. Full edges/effects/conditions in JSON.
