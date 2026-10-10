# click/src_frontend_ai_components_popups_LlmFiles.svelte (1)

## click — event-5d6ca668756108175b

[code] [src/frontend/ai/components/popups/LlmFiles.svelte:39](../../../../../src/frontend/ai/components/popups/LlmFiles.svelte#L39); () => openInSystem(file.path). resolved-within-bound.

Conditions: src/frontend/ai/components/popups/LlmFiles.svelte:30 files.length.

Calls: src/frontend/ai/components/popups/LlmFiles.svelte:25 openInSystem (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/ai/components/popups/LlmFiles.svelte:26 ipc sendMain(Main.SYSTEM_OPEN, path) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
