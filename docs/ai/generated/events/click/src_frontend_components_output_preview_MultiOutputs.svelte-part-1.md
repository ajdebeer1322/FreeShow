# click/src_frontend_components_output_preview_MultiOutputs.svelte (1)

## click — event-94b7689962090e5ab4

[code] [src/frontend/components/output/preview/MultiOutputs.svelte:139](../../../../../src/frontend/components/output/preview/MultiOutputs.svelte#L139); toggleFullscreen. partial.

Conditions: src/frontend/components/output/preview/MultiOutputs.svelte:28 e.target.closest(".icons"); src/frontend/components/output/preview/MultiOutputs.svelte:29 e.target.closest(".muted"); src/frontend/components/output/preview/MultiOutputs.svelte:42 !e.target.closest(".multipleOutputs") \|\| e.target.closest("button"); src/frontend/components/output/preview/MultiOutputs.svelte:44 fullscreen; src/frontend/components/output/preview/MultiOutputs.svelte:50 !clickedOutput.

Calls: src/frontend/components/output/preview/MultiOutputs.svelte:26 toggleFullscreen (depth 0); src/frontend/components/edit/scripts/edit.ts:86 openDrawer (depth 1); src/frontend/components/edit/scripts/edit.ts:102 <callback> (depth 2); src/frontend/components/output/preview/MultiOutputs.svelte:67 currentResolution (depth 1); src/frontend/components/helpers/output.ts:840 getOutputResolution (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/helpers/output.ts:810 getResolution (depth 3); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 4); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 5); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 6); src/frontend/components/helpers/output.ts:647 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:649 <callback> (depth 6); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 5); src/frontend/components/helpers/array.ts:53 sortObject (depth 6); src/frontend/components/helpers/array.ts:42 sortByName (depth 6).

Effects: src/frontend/components/output/preview/MultiOutputs.svelte:36 store-write src/frontend/stores.ts#activeStyle ; src/frontend/components/output/preview/MultiOutputs.svelte:37 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/output/preview/MultiOutputs.svelte:38 store-write src/frontend/stores.ts#activePage ; src/frontend/components/edit/scripts/edit.ts:87 store-write src/frontend/stores.ts#activePage ; src/frontend/components/edit/scripts/edit.ts:110 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/edit/scripts/edit.ts:114 store-write src/frontend/stores.ts#drawer ; src/frontend/components/edit/scripts/edit.ts:122 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/edit/scripts/edit.ts:102 store-write src/frontend/stores.ts#drawerTabsData ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 11. Full edges/effects/conditions in JSON.

## click — event-2ba868e843db9519c7

[code] [src/frontend/components/output/preview/MultiOutputs.svelte:141](../../../../../src/frontend/components/output/preview/MultiOutputs.svelte#L141); () => (fullscreen = false). resolved-within-bound.

Conditions: src/frontend/components/output/preview/MultiOutputs.svelte:140 fullscreen.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f5b5aa5a3a120812b9

[code] [src/frontend/components/output/preview/MultiOutputs.svelte:173](../../../../../src/frontend/components/output/preview/MultiOutputs.svelte#L173); () => (isRtmp ? (output.rtmpData?.streaming ? stopRtmpStreaming(output.id, true) : startRtmpStreaming(output.id)) : output.webrtcData?.streaming ? stopStreaming(output.id, true) :. partial.

Conditions: src/frontend/components/output/preview/MultiOutputs.svelte:165 !fullscreen; src/frontend/components/output/preview/MultiOutputs.svelte:167 (output.webrtcData?.url && output.webrtc) \|\| (output.rtmp && hasStreamableDestination(output.rtmpData)).

Calls: src/frontend/components/helpers/output.ts:1029 stopRtmpStreaming (depth 1); src/frontend/utils/popup.ts:219 confirmCustom (depth 2); src/frontend/utils/popup.ts:189 waitForPopupData (depth 3); src/frontend/utils/popup.ts:190 <callback> (depth 4); src/frontend/utils/popup.ts:191 unsubscribe (depth 5); src/frontend/utils/popup.ts:194 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 6); src/frontend/utils/popup.ts:198 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 5); src/frontend/utils/popup.ts:207 <callback> (depth 6); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3); src/frontend/components/helpers/output.ts:76 resolveOutputId (depth 2); src/frontend/components/helpers/output.ts:83 <callback> (depth 3); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 2).

Effects: src/frontend/utils/popup.ts:220 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/popup.ts:200 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1060 ipc sendMain(Main.SET_RTMP_ENCODER, { outputId, encoder: value }) ; src/frontend/components/helpers/output.ts:1063 ipc send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: outputId, key: "rtmpData", value: newData }) ; src/frontend/components/helpers/output.ts:1048 store-write src/frontend/stores.ts#outputs ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:1019 ipc send(OUTPUT, &#91;"SET_VALUE"&#93;, { id: resolvedId, key: "webrtcData", value: newData }) ; src/frontend/components/helpers/output.ts:1008 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 28. Full edges/effects/conditions in JSON.

## click — event-ff8aa5ffdfe032b4a8

[code] [src/frontend/components/output/preview/MultiOutputs.svelte:181](../../../../../src/frontend/components/output/preview/MultiOutputs.svelte#L181); () => stopMediaRecorder(). partial.

Conditions: src/frontend/components/output/preview/MultiOutputs.svelte:165 !fullscreen; src/frontend/components/output/preview/MultiOutputs.svelte:179 $activeRecording?.outputId === output.id \|\| ($activeRecording?.isOutput && !$activeRecording.outputId && outs&#91;0&#93;?.id === output.id).

Calls: src/frontend/components/drawer/live/recorder.ts:55 stopMediaRecorder (depth 1); src/frontend/components/drawer/live/recorder.ts:64 <callback> (depth 2); src/frontend/components/drawer/live/recorder.ts:80 handleStop (depth 3); src/frontend/utils/common.ts:26 newToast (depth 4); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 5); src/frontend/components/drawer/live/recorder.ts:25 getMimeType (depth 4); src/frontend/components/drawer/live/recorder.ts:74 getRecordingFileName (depth 4); src/frontend/IPC/main.ts:68 sendMain (depth 4).

Effects: src/frontend/components/drawer/live/recorder.ts:59 store-write src/frontend/stores.ts#currentRecordingStream ; src/frontend/components/drawer/live/recorder.ts:60 store-write src/frontend/stores.ts#activeRecording ; src/frontend/components/drawer/live/recorder.ts:94 store-write src/frontend/stores.ts#currentRecordingStream ; src/frontend/components/drawer/live/recorder.ts:95 store-write src/frontend/stores.ts#activeRecording ; src/frontend/components/drawer/live/recorder.ts:88 ipc sendMain(Main.RECORDER, { blob: arraybuffer, name, path: get(special)?.audioRecordingsPath }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8754cbf45601597970

[code] [src/frontend/components/output/preview/MultiOutputs.svelte:190](../../../../../src/frontend/components/output/preview/MultiOutputs.svelte#L190); () => openDrawer("scenes"). resolved-within-bound.

Conditions: src/frontend/components/output/preview/MultiOutputs.svelte:165 !fullscreen; src/frontend/components/output/preview/MultiOutputs.svelte:188 output.out?.scene?.name.

Calls: src/frontend/components/edit/scripts/edit.ts:86 openDrawer (depth 1); src/frontend/components/edit/scripts/edit.ts:102 <callback> (depth 2).

Effects: src/frontend/components/edit/scripts/edit.ts:87 store-write src/frontend/stores.ts#activePage ; src/frontend/components/edit/scripts/edit.ts:110 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/edit/scripts/edit.ts:114 store-write src/frontend/stores.ts#drawer ; src/frontend/components/edit/scripts/edit.ts:122 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/edit/scripts/edit.ts:102 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
