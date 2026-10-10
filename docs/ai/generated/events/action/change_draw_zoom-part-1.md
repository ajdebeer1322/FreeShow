# action/change_draw_zoom (1)

## change_draw_zoom — event-2291c1635be25995b4

[code] [src/frontend/components/actions/api.ts:345](../../../../../src/frontend/components/actions/api.ts#L345); (data: API_draw_zoom) => changeDrawZoom(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:345 change_draw_zoom (depth 0); src/frontend/components/actions/apiHelper.ts:1173 changeDrawZoom (depth 1); src/frontend/components/actions/apiHelper.ts:1175 <callback> (depth 2).

Effects: src/frontend/components/actions/apiHelper.ts:1182 store-write src/frontend/stores.ts#draw ; src/frontend/components/actions/apiHelper.ts:1183 store-write src/frontend/stores.ts#drawTool ; src/frontend/components/actions/apiHelper.ts:1188 store-write src/frontend/stores.ts#draw ; src/frontend/components/actions/apiHelper.ts:1189 store-write src/frontend/stores.ts#drawTool ; src/frontend/components/actions/apiHelper.ts:1175 store-write src/frontend/stores.ts#drawSettings .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_draw_zoom. [External/internal input routes](../inputs.json) retain transport and permission limits.
