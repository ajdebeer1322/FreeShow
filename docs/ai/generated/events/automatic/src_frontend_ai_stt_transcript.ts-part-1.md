# automatic/src_frontend_ai_stt_transcript.ts (1)

## setTimeout — event-98ba38bcf160e9ae42

[code] [src/frontend/ai/stt/transcript.ts:49](../../../../../src/frontend/ai/stt/transcript.ts#L49); () => { this.interimTimeout = null this.processPendingChunk() }. partial.

Conditions: src/frontend/ai/stt/transcript.ts:48 part.interim.

Calls: src/frontend/ai/stt/transcript.ts:49 <callback> (depth 0); src/frontend/ai/stt/transcript.ts:67 processPendingChunk (depth 1); src/frontend/ai/stt/transcript.ts:98 getTranscriptChunk (depth 2); src/frontend/ai/stt/transcript.ts:121 resetState (depth 3); src/frontend/ai/stt/transcript.ts:127 calculateStartIndex (depth 3); src/frontend/ai/stt/transcript.ts:130 <callback> (depth 4); src/frontend/ai/stt/transcript.ts:131 <callback> (depth 4); src/frontend/ai/stt/transcript.ts:145 <callback> (depth 4); src/frontend/ai/stt/transcript.ts:81 confidenceOfLast (depth 3); src/frontend/ai/manager/AiManager.ts:21 processSTTChunk (depth 2); src/frontend/ai/manager/AiManager.ts:60 triggerBackgroundPreload (depth 3); src/frontend/ai/manager/AiManager.ts:69 getLocalScriptureIds (depth 4); src/frontend/components/helpers/array.ts:137 keysToID (depth 5); src/frontend/components/helpers/array.ts:139 <callback> (depth 6); src/frontend/ai/manager/AiManager.ts:71 <callback> (depth 5); src/frontend/ai/manager/AiManager.ts:72 <callback> (depth 5).

Effects: src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/actions/apiHelper.ts:725 store-write src/frontend/stores.ts#activePage ; src/frontend/components/actions/apiHelper.ts:727 store-write src/frontend/stores.ts#activeDrawerTab ; src/frontend/components/actions/apiHelper.ts:729 store-write src/frontend/stores.ts#openScripture ; src/frontend/ai/manager/AiManager.ts:225 store-write src/frontend/stores.ts#aiSmartAction ; src/frontend/ai/manager/AiManager.ts:244 store-write src/frontend/stores.ts#aiSuggestions ; src/frontend/ai/llm/llmManager.ts:102 network this.request ; src/frontend/ai/llm/llmManager.ts:64 ipc requestMain(Main.AI_LLM_COMPLETE, data, undefined, 60000) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 6; depth cutoffs: 17. Full edges/effects/conditions in JSON.
