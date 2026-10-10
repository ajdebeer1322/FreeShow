# action/mute (1)

## mute — event-2f6e47642fc764ee52

[code] [src/frontend/components/actions/api.ts:308](../../../../../src/frontend/components/actions/api.ts#L308); (data: API_toggle_id) => muteChannel(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:308 mute (depth 0); src/frontend/components/actions/apiHelper.ts:859 muteChannel (depth 1); src/frontend/components/actions/apiHelper.ts:867 <callback> (depth 2).

Effects: src/frontend/components/actions/apiHelper.ts:867 store-write src/frontend/stores.ts#audioChannelsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_toggle_id. [External/internal input routes](../inputs.json) retain transport and permission limits.
