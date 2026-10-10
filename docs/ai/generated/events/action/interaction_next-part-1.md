# action/interaction_next (1)

## interaction_next — event-7aabdb511e732146eb

[code] [src/frontend/components/actions/api.ts:359](../../../../../src/frontend/components/actions/api.ts#L359); (data: API_id) => getInteraction(data.id)?.next(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:359 interaction_next (depth 0); src/frontend/components/drawer/pages/interactions.ts:453 next (depth 1); src/frontend/components/drawer/pages/interactions.ts:135 getData (depth 2); src/frontend/components/drawer/pages/interactions.ts:753 hasAnswer (depth 2); src/frontend/components/drawer/pages/interactions.ts:756 <callback> (depth 3); src/frontend/components/drawer/pages/interactions.ts:489 revealAnswer (depth 2); src/frontend/components/drawer/pages/interactions.ts:498 <callback> (depth 3); src/frontend/components/drawer/pages/interactions.ts:498 <callback> (depth 3); src/frontend/components/drawer/pages/interactions.ts:514 getScoreUpdates (depth 3); src/frontend/components/drawer/pages/interactions.ts:528 <callback> (depth 4); src/frontend/components/drawer/pages/interactions.ts:760 isCorrect (depth 5); src/frontend/components/drawer/pages/interactions.ts:767 <callback> (depth 6); src/frontend/components/drawer/pages/interactions.ts:767 <callback> (depth 6); src/frontend/components/drawer/pages/interactions.ts:771 <callback> (depth 6); src/frontend/components/drawer/pages/interactions.ts:529 <callback> (depth 4); src/frontend/components/drawer/pages/interactions.ts:530 <callback> (depth 4).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 8; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_id. [External/internal input routes](../inputs.json) retain transport and permission limits.
