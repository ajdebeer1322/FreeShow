# action/start_rtmp_stream (1)

## start_rtmp_stream — event-948bf4d447384d1d5e

[code] [src/frontend/components/actions/api.ts:287](../../../../../src/frontend/components/actions/api.ts#L287); (data: API_id_optional) => startRtmpStreaming(data.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:287 start_rtmp_stream (depth 0); src/frontend/components/helpers/output.ts:1023 startRtmpStreaming (depth 1); src/frontend/components/helpers/output.ts:76 resolveOutputId (depth 2); src/frontend/components/helpers/output.ts:83 <callback> (depth 3); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 3); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 4); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 5); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:616 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:618 <callback> (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 5); src/frontend/components/helpers/output.ts:647 <callback> (depth 4); src/frontend/utils/common.ts:18 isMainWindow (depth 4); src/frontend/components/helpers/output.ts:649 <callback> (depth 4).

Effects: src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1060 ipc sendMain(Main.SET_RTMP_ENCODER, { outputId, encoder: value }) ; src/frontend/components/helpers/output.ts:1063 ipc send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: outputId, key: "rtmpData", value: newData }) ; src/frontend/components/helpers/output.ts:1048 store-write src/frontend/stores.ts#outputs ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 10; depth cutoffs: 26. Full edges/effects/conditions in JSON.
