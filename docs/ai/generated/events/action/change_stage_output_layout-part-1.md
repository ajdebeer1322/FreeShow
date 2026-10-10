# action/change_stage_output_layout (1)

## change_stage_output_layout — event-352ae86e4573e22074

[code] [src/frontend/components/actions/api.ts:296](../../../../../src/frontend/components/actions/api.ts#L296); (data: API_stage_output_layout) => changeStageOutputLayout(data). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:296 change_stage_output_layout (depth 0); src/frontend/components/helpers/output.ts:1185 changeStageOutputLayout (depth 1); src/frontend/components/helpers/output.ts:76 resolveOutputId (depth 2); src/frontend/components/helpers/output.ts:83 <callback> (depth 3); src/frontend/components/helpers/output.ts:1191 <callback> (depth 2); src/frontend/components/helpers/output.ts:1192 <callback> (depth 3).

Effects: src/frontend/components/helpers/output.ts:1191 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

[code] Payload type: API_stage_output_layout. [External/internal input routes](../inputs.json) retain transport and permission limits.
