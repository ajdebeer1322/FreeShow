# action/interaction_previous (1)

## interaction_previous — event-9797cd4260a8a81807

[code] [src/frontend/components/actions/api.ts:360](../../../../../src/frontend/components/actions/api.ts#L360); (data: API_id) => getInteraction(data.id)?.previous(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:360 interaction_previous (depth 0); src/frontend/components/drawer/pages/interactions.ts:441 previous (depth 1); src/frontend/components/drawer/pages/interactions.ts:424 resetTimer (depth 2); src/frontend/components/drawer/pages/interactions.ts:430 <callback> (depth 3); src/frontend/components/drawer/pages/interactions.ts:139 startTimer (depth 3); src/frontend/components/drawer/pages/interactions.ts:141 <callback> (depth 4); src/frontend/components/drawer/pages/interactions.ts:135 getData (depth 5); src/frontend/components/drawer/pages/interactions.ts:163 stopTimer (depth 5); src/frontend/components/drawer/pages/interactions.ts:149 <callback> (depth 5); src/frontend/components/drawer/pages/interactions.ts:152 <callback> (depth 5); src/frontend/components/drawer/pages/interactions.ts:171 getDbPayload (depth 5); src/frontend/components/drawer/pages/interactions.ts:193 getCurrentInputs (depth 6); src/frontend/components/drawer/pages/firebaseUtils.ts:30 updateInteractionDb (depth 5); src/frontend/components/drawer/pages/interactions.ts:158 <callback> (depth 5); src/frontend/components/drawer/pages/interactions.ts:163 stopTimer (depth 3); src/frontend/components/drawer/pages/interactions.ts:437 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 8; depth cutoffs: 3. Full edges/effects/conditions in JSON.
