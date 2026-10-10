# click/src_frontend_ai_components_popups_NemotronOptions.svelte (1)

## click — event-fb14a9df6fea0f84c4

[code] [src/frontend/ai/components/popups/NemotronOptions.svelte:67](../../../../../src/frontend/ai/components/popups/NemotronOptions.svelte#L67); downloadModel. partial.

Conditions: src/frontend/ai/components/popups/NemotronOptions.svelte:62 !status; src/frontend/ai/components/popups/NemotronOptions.svelte:66 !status.ready; src/frontend/ai/components/popups/NemotronOptions.svelte:42 isModelDownloading.

Calls: src/frontend/ai/components/popups/NemotronOptions.svelte:41 downloadModel (depth 0); src/frontend/IPC/main.ts:19 requestMain (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2); src/frontend/IPC/main.ts:28 cleanup (depth 2); src/frontend/IPC/main.ts:36 <callback> (depth 2); src/frontend/IPC/main.ts:37 <callback> (depth 3); src/frontend/IPC/main.ts:48 <callback> (depth 3); src/frontend/ai/components/popups/NemotronOptions.svelte:17 getStatus (depth 1); src/frontend/utils/common.ts:26 newToast (depth 2); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 3).

Effects: src/frontend/ai/components/popups/NemotronOptions.svelte:45 ipc requestMain(Main.AI_SETUP, { action: "download", engineId: "nemotron" }, undefined, 60 * 60 * 1000) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/ai/components/popups/NemotronOptions.svelte:18 ipc requestMain(Main.AI_GET_STATUS, { engineId: engine }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
