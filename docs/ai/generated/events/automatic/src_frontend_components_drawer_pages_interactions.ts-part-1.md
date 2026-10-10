# automatic/src_frontend_components_drawer_pages_interactions.ts (1)

## setInterval — event-eff42607606b02f177

[code] [src/frontend/components/drawer/pages/interactions.ts:141](../../../../../src/frontend/components/drawer/pages/interactions.ts#L141); async () => { this.seconds++ const data = this.getData() const maxTime = data?.options?.maxTime ?? 0 if (maxTime > 0 && this.seconds >= maxTime) { this.closed = true this.stopTimer. partial.

Conditions: src/frontend/components/drawer/pages/interactions.ts:146 maxTime > 0 && this.seconds >= maxTime; src/frontend/components/drawer/pages/interactions.ts:150 this.lastData.

Calls: src/frontend/components/drawer/pages/interactions.ts:141 <callback> (depth 0); src/frontend/components/drawer/pages/interactions.ts:135 getData (depth 1); src/frontend/components/drawer/pages/interactions.ts:163 stopTimer (depth 1); src/frontend/components/drawer/pages/interactions.ts:149 <callback> (depth 1); src/frontend/components/drawer/pages/interactions.ts:152 <callback> (depth 1); src/frontend/components/drawer/pages/interactions.ts:171 getDbPayload (depth 1); src/frontend/components/drawer/pages/interactions.ts:193 getCurrentInputs (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/drawer/pages/interactions.ts:208 <callback> (depth 3); src/frontend/components/drawer/pages/firebaseUtils.ts:30 updateInteractionDb (depth 1); src/frontend/components/drawer/pages/interactions.ts:158 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 0. Full edges/effects/conditions in JSON.
