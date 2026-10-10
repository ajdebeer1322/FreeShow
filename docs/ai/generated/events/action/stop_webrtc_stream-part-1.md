# action/stop_webrtc_stream (1)

## stop_webrtc_stream — event-d5d58896d80a9c29ec

[code] [src/frontend/components/actions/api.ts:286](../../../../../src/frontend/components/actions/api.ts#L286); (data: API_id_optional) => stopStreaming(data.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:286 stop_webrtc_stream (depth 0); src/frontend/components/helpers/output.ts:987 stopStreaming (depth 1); src/frontend/utils/popup.ts:219 confirmCustom (depth 2); src/frontend/utils/popup.ts:189 waitForPopupData (depth 3); src/frontend/utils/popup.ts:190 <callback> (depth 4); src/frontend/utils/popup.ts:191 unsubscribe (depth 5); src/frontend/utils/popup.ts:194 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 6); src/frontend/utils/popup.ts:198 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 5); src/frontend/utils/popup.ts:207 <callback> (depth 6); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3); src/frontend/components/helpers/output.ts:76 resolveOutputId (depth 2); src/frontend/components/helpers/output.ts:83 <callback> (depth 3).

Effects: src/frontend/utils/popup.ts:220 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/popup.ts:200 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1019 ipc send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: resolvedId, key: "webrtcData", value: newData }) ; src/frontend/components/helpers/output.ts:1008 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 28. Full edges/effects/conditions in JSON.
