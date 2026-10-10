# click/src_frontend_components_settings_tabs_Outputs.svelte (1)

## click — event-d3784d46af166972b9

[code] [src/frontend/components/settings/tabs/Outputs.svelte:363](../../../../../src/frontend/components/settings/tabs/Outputs.svelte#L363); editStage. resolved-within-bound.

Conditions: src/frontend/components/settings/tabs/Outputs.svelte:359 stageId; src/frontend/components/settings/tabs/Outputs.svelte:362 $stageShows&#91;stageId&#93;.

Calls: src/frontend/components/settings/tabs/Outputs.svelte:112 editStage (depth 0).

Effects: src/frontend/components/settings/tabs/Outputs.svelte:113 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/settings/tabs/Outputs.svelte:114 store-write src/frontend/stores.ts#activePage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0b0aa3f7d1a9342cfe

[code] [src/frontend/components/settings/tabs/Outputs.svelte:370](../../../../../src/frontend/components/settings/tabs/Outputs.svelte#L370); editStyle. resolved-within-bound.

Conditions: src/frontend/components/settings/tabs/Outputs.svelte:359 stageId; src/frontend/components/settings/tabs/Outputs.svelte:369 $styles&#91;styleId&#93;.

Calls: src/frontend/components/settings/tabs/Outputs.svelte:106 editStyle (depth 0).

Effects: src/frontend/components/settings/tabs/Outputs.svelte:107 store-write src/frontend/stores.ts#activeStyle ; src/frontend/components/settings/tabs/Outputs.svelte:108 store-write src/frontend/stores.ts#settingsTab .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0d3e8eb1a90256c03f

[code] [src/frontend/components/settings/tabs/Outputs.svelte:478](../../../../../src/frontend/components/settings/tabs/Outputs.svelte#L478); () => (currentOutput?.webrtcData?.streaming ? stopStreaming(currentOutput.id, true) : startStreaming(currentOutput?.id)). partial.

Conditions: src/frontend/components/settings/tabs/Outputs.svelte:462 currentOutput?.webrtc; src/frontend/components/settings/tabs/Outputs.svelte:476 currentOutput?.enabled && currentOutput?.webrtcData?.url.

Calls: src/frontend/components/helpers/output.ts:987 stopStreaming (depth 1); src/frontend/utils/popup.ts:219 confirmCustom (depth 2); src/frontend/utils/popup.ts:189 waitForPopupData (depth 3); src/frontend/utils/popup.ts:190 <callback> (depth 4); src/frontend/utils/popup.ts:191 unsubscribe (depth 5); src/frontend/utils/popup.ts:194 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 6); src/frontend/utils/popup.ts:198 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 5); src/frontend/utils/popup.ts:207 <callback> (depth 6); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3); src/frontend/components/helpers/output.ts:76 resolveOutputId (depth 2); src/frontend/components/helpers/output.ts:83 <callback> (depth 3); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2).

Effects: src/frontend/utils/popup.ts:220 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/popup.ts:200 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1019 ipc send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: resolvedId, key: "webrtcData", value: newData }) ; src/frontend/components/helpers/output.ts:1008 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 28. Full edges/effects/conditions in JSON.

## click — event-89131173fea06dea16

[code] [src/frontend/components/settings/tabs/Outputs.svelte:515](../../../../../src/frontend/components/settings/tabs/Outputs.svelte#L515); () => removeDestination(destination.id). partial.

Conditions: src/frontend/components/settings/tabs/Outputs.svelte:485 currentOutput?.rtmp; src/frontend/components/settings/tabs/Outputs.svelte:511 (currentOutput.rtmpData?.destinations \|\| &#91;&#93;).length > 1 \|\| destination.enabled === false; src/frontend/components/settings/tabs/Outputs.svelte:514 !destination.enabled \|\| !destination.url.

Calls: src/frontend/components/settings/tabs/Outputs.svelte:224 removeDestination (depth 1); src/frontend/components/helpers/output.ts:1081 removeRtmpDestination (depth 2); src/frontend/components/helpers/output.ts:1040 updateOutputRtmpData (depth 3); src/frontend/components/helpers/rtmpDestinations.ts:8 hasStreamableDestination (depth 4); src/frontend/components/helpers/rtmpDestinations.ts:9 <callback> (depth 5); src/frontend/components/helpers/output.ts:1048 <callback> (depth 4); src/frontend/audio/audioAnalyser.ts:460 recorderActivate (depth 4); src/frontend/audio/audioSender.ts:55 activate (depth 5); src/frontend/audio/audioSender.ts:74 deactivate (depth 6); src/frontend/audio/audioSender.ts:336 shouldBeActive (depth 6); src/frontend/audio/audioSender.ts:67 <callback> (depth 6); src/frontend/audio/audioSender.ts:27 ensureWorkletModule (depth 6); src/frontend/audio/audioSender.ts:80 updateProcessors (depth 6); src/frontend/audio/audioAnalyser.ts:35 getAudioContext (depth 5); src/frontend/audio/audioAnalyser.ts:36 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:116 setAudioContext (depth 6).

Effects: src/frontend/components/helpers/output.ts:1060 ipc sendMain(Main.SET_RTMP_ENCODER, { outputId, encoder: value }) ; src/frontend/components/helpers/output.ts:1063 ipc send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: outputId, key: "rtmpData", value: newData }) ; src/frontend/components/helpers/output.ts:1048 store-write src/frontend/stores.ts#outputs ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 10; depth cutoffs: 23. Full edges/effects/conditions in JSON.

## click — event-84ca969b9e20e82092

[code] [src/frontend/components/settings/tabs/Outputs.svelte:536](../../../../../src/frontend/components/settings/tabs/Outputs.svelte#L536); () => addDestination(). partial.

Conditions: src/frontend/components/settings/tabs/Outputs.svelte:485 currentOutput?.rtmp.

Calls: src/frontend/components/settings/tabs/Outputs.svelte:218 addDestination (depth 1); src/frontend/components/helpers/output.ts:1067 addRtmpDestination (depth 2); src/frontend/components/helpers/output.ts:1040 updateOutputRtmpData (depth 3); src/frontend/components/helpers/rtmpDestinations.ts:8 hasStreamableDestination (depth 4); src/frontend/components/helpers/rtmpDestinations.ts:9 <callback> (depth 5); src/frontend/components/helpers/output.ts:1048 <callback> (depth 4); src/frontend/audio/audioAnalyser.ts:460 recorderActivate (depth 4); src/frontend/audio/audioSender.ts:55 activate (depth 5); src/frontend/audio/audioSender.ts:74 deactivate (depth 6); src/frontend/audio/audioSender.ts:336 shouldBeActive (depth 6); src/frontend/audio/audioSender.ts:67 <callback> (depth 6); src/frontend/audio/audioSender.ts:27 ensureWorkletModule (depth 6); src/frontend/audio/audioSender.ts:80 updateProcessors (depth 6); src/frontend/audio/audioAnalyser.ts:35 getAudioContext (depth 5); src/frontend/audio/audioAnalyser.ts:36 <callback> (depth 6); src/frontend/audio/routing/audioRoutingManager.ts:116 setAudioContext (depth 6).

Effects: src/frontend/components/helpers/output.ts:1060 ipc sendMain(Main.SET_RTMP_ENCODER, { outputId, encoder: value }) ; src/frontend/components/helpers/output.ts:1063 ipc send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: outputId, key: "rtmpData", value: newData }) ; src/frontend/components/helpers/output.ts:1048 store-write src/frontend/stores.ts#outputs ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 10; depth cutoffs: 23. Full edges/effects/conditions in JSON.

## click — event-d309d15ae07ef94774

[code] [src/frontend/components/settings/tabs/Outputs.svelte:543](../../../../../src/frontend/components/settings/tabs/Outputs.svelte#L543); () => (currentOutput?.rtmpData?.streaming ? stopRtmpStreaming(currentOutput.id, true) : startRtmpStreaming(currentOutput?.id)). partial.

Conditions: src/frontend/components/settings/tabs/Outputs.svelte:485 currentOutput?.rtmp; src/frontend/components/settings/tabs/Outputs.svelte:541 currentOutput?.enabled && hasStreamableDestination(currentOutput.rtmpData).

Calls: src/frontend/components/helpers/output.ts:1029 stopRtmpStreaming (depth 1); src/frontend/utils/popup.ts:219 confirmCustom (depth 2); src/frontend/utils/popup.ts:189 waitForPopupData (depth 3); src/frontend/utils/popup.ts:190 <callback> (depth 4); src/frontend/utils/popup.ts:191 unsubscribe (depth 5); src/frontend/utils/popup.ts:194 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 6); src/frontend/utils/popup.ts:198 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 5); src/frontend/utils/popup.ts:207 <callback> (depth 6); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3); src/frontend/components/helpers/output.ts:76 resolveOutputId (depth 2); src/frontend/components/helpers/output.ts:83 <callback> (depth 3); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2).

Effects: src/frontend/utils/popup.ts:220 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/popup.ts:200 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1060 ipc sendMain(Main.SET_RTMP_ENCODER, { outputId, encoder: value }) ; src/frontend/components/helpers/output.ts:1063 ipc send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: outputId, key: "rtmpData", value: newData }) ; src/frontend/components/helpers/output.ts:1048 store-write src/frontend/stores.ts#outputs ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 28. Full edges/effects/conditions in JSON.
