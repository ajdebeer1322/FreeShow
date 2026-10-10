# action/change_slide_timeline_speed (1)

## change_slide_timeline_speed — event-398b9f40d3ddfd8c2a

[code] [src/frontend/components/actions/api.ts:236](../../../../../src/frontend/components/actions/api.ts#L236); (data: API_numval) => slideTimelineSpeedMultiplier.set(data.value ?? 1). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:236 change_slide_timeline_speed (depth 0).

Effects: src/frontend/components/actions/api.ts:236 store-write src/frontend/stores.ts#slideTimelineSpeedMultiplier .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_numval. [External/internal input routes](../inputs.json) retain transport and permission limits.
