# automatic/src_frontend_components_stage_tools_BoxStyle.svelte (1)

## setTimeout — event-b6e6a6732f9e3a84c9

[code] [src/frontend/components/stage/tools/BoxStyle.svelte:238](../../../../../src/frontend/components/stage/tools/BoxStyle.svelte#L238); () => { updateStageShow() timeout = null }. resolved-within-bound.

Conditions: src/frontend/components/stage/tools/BoxStyle.svelte:236 !timeout.

Calls: src/frontend/components/stage/tools/BoxStyle.svelte:238 <callback> (depth 0); src/frontend/components/stage/stage.ts:72 updateStageShow (depth 1); src/frontend/components/stage/stage.ts:73 <callback> (depth 2); src/frontend/utils/sendData.ts:21 arrayToObject (depth 3); src/frontend/utils/sendData.ts:22 <callback> (depth 4); src/frontend/utils/sendData.ts:12 filterObjectArray (depth 3); src/frontend/utils/sendData.ts:16 <callback> (depth 4); src/frontend/utils/sendData.ts:17 <callback> (depth 4); src/frontend/utils/sendData.ts:17 <callback> (depth 5); src/frontend/utils/sendData.ts:18 <callback> (depth 4).

Effects: src/frontend/components/stage/stage.ts:76 ipc window.api.send(STAGE, { channel: "LAYOUT", id, data: show }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
