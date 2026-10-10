# click/src_frontend_ai_components_floating_AiVisual.svelte (1)

## click — event-acc7884cd985193c60

[code] [src/frontend/ai/components/floating/AiVisual.svelte:39](../../../../../src/frontend/ai/components/floating/AiVisual.svelte#L39); <forwarded event>. forwarded.

Conditions: src/frontend/ai/components/floating/AiFloating.svelte:30 !$sttTempDisabled.

Calls: src/frontend/ai/components/floating/AiFloating.svelte:24 toggleExpand (depth 0); src/frontend/ai/components/floating/AiFloating.svelte:28 <callback> (depth 1); src/frontend/ai/components/floating/AiFloating.svelte:179 enableListening (depth 1); src/frontend/ai/stt/stt.ts:25 enable (depth 2); src/frontend/ai/stt/stt.ts:62 restartCapture (depth 3); src/frontend/ai/stt/stt.ts:235 stopCapture (depth 4); src/frontend/ai/stt/stt.ts:241 <callback> (depth 5); src/frontend/ai/stt/stt.ts:249 <callback> (depth 5); src/frontend/ai/stt/stt.ts:258 <callback> (depth 5); src/frontend/ai/stt/stt.ts:229 emitAudioLevel (depth 5); src/frontend/ai/stt/stt.ts:232 <callback> (depth 6); src/frontend/ai/stt/stt.ts:106 resolveMicDeviceId (depth 4); src/frontend/ai/stt/stt.ts:109 <callback> (depth 5); src/frontend/ai/stt/stt.ts:112 <callback> (depth 5); src/frontend/ai/stt/stt.ts:114 <callback> (depth 5); src/frontend/ai/stt/stt.ts:115 <callback> (depth 5).

Effects: src/frontend/ai/components/floating/AiFloating.svelte:26 store-write src/frontend/stores.ts#aiSmartAction ; src/frontend/ai/stt/stt.ts:231 store-write src/frontend/ai/stt/stt.ts#audioLevelStore ; src/frontend/ai/stt/stt.ts:144 ipc sendMain(Main.ACCESS_MICROPHONE_PERMISSION) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/ai/stt/stt.ts:187 ipc sendMain(Main.AI_AUDIO_DATA, { buffer: e.data }) ; src/frontend/ai/stt/stt.ts:231 store-write src/frontend/ai/stt/stt.ts#audioLevelStore ; src/frontend/ai/stt/stt.ts:54 ipc requestMain(Main.AI_LISTEN_START, { engine, engineOptions }, undefined, 60000) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 18; depth cutoffs: 2. Full edges/effects/conditions in JSON.
