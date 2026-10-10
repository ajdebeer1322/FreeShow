# action/interaction_start (1)

## interaction_start — event-fbf554b39e432b7365

[code] [src/frontend/components/actions/api.ts:357](../../../../../src/frontend/components/actions/api.ts#L357); (data: API_id) => startInteraction(data.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:357 interaction_start (depth 0); src/frontend/components/drawer/pages/interactions.ts:17 startInteraction (depth 1); src/frontend/components/drawer/pages/interactions.ts:224 init (depth 2); src/frontend/components/drawer/pages/interactions.ts:135 getData (depth 3); src/frontend/components/drawer/pages/interactions.ts:139 startTimer (depth 3); src/frontend/components/drawer/pages/interactions.ts:141 <callback> (depth 4); src/frontend/components/drawer/pages/interactions.ts:163 stopTimer (depth 5); src/frontend/components/drawer/pages/interactions.ts:149 <callback> (depth 5); src/frontend/components/drawer/pages/interactions.ts:152 <callback> (depth 5); src/frontend/components/drawer/pages/interactions.ts:171 getDbPayload (depth 5); src/frontend/components/drawer/pages/interactions.ts:193 getCurrentInputs (depth 6); src/frontend/components/drawer/pages/firebaseUtils.ts:30 updateInteractionDb (depth 5); src/frontend/components/drawer/pages/interactions.ts:158 <callback> (depth 5); src/frontend/components/drawer/pages/interactions.ts:57 generateId (depth 3); src/frontend/components/drawer/pages/interactions.ts:65 generateSecret (depth 3); src/frontend/components/drawer/pages/firebaseUtils.ts:58 getInteractionDb (depth 3).

Effects: src/frontend/components/drawer/pages/interactions.ts:26 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/drawer/pages/interactions.ts:27 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/drawer/pages/interactions.ts:297 store-write src/frontend/stores.ts#interactions ; src/frontend/components/drawer/pages/interactions.ts:10 store-write src/frontend/stores.ts#activeInteractions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 27; depth cutoffs: 8. Full edges/effects/conditions in JSON.
