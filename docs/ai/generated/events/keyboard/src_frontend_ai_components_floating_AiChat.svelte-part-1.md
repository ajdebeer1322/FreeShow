# keyboard/src_frontend_ai_components_floating_AiChat.svelte (1)

## dynamic — event-92dee1fce07a2f58c0

[code] [src/frontend/ai/components/floating/AiChat.svelte:116](../../../../../src/frontend/ai/components/floating/AiChat.svelte#L116); handleChatKeyDown. partial.

Conditions: src/frontend/ai/components/floating/AiChat.svelte:84 $ai?.llm?.provider; src/frontend/ai/components/floating/AiChat.svelte:76 e.key === "Enter" && !e.shiftKey.

Calls: src/frontend/ai/components/floating/AiChat.svelte:75 handleChatKeyDown (depth 0); src/frontend/ai/components/floating/AiChat.svelte:39 sendChatMessage (depth 1); src/frontend/ai/llm/llmManager.ts:28 getLLMManager (depth 2); src/frontend/ai/llm/llmManager.ts:80 stop (depth 3); src/frontend/ai/llm/llmManager.ts:139 sendMessage (depth 2); src/frontend/ai/llm/llmManager.ts:126 addMessage (depth 3); src/frontend/ai/llm/llmManager.ts:147 <callback> (depth 3); src/frontend/ai/llm/llmManager.ts:53 request (depth 3); src/frontend/IPC/main.ts:19 requestMain (depth 4); src/frontend/IPC/main.ts:68 sendMain (depth 5); src/frontend/IPC/main.ts:28 cleanup (depth 5); src/frontend/IPC/main.ts:36 <callback> (depth 5); src/frontend/IPC/main.ts:37 <callback> (depth 6); src/frontend/IPC/main.ts:48 <callback> (depth 6); src/frontend/ai/llm/llmManager.ts:118 getHistory (depth 2).

Effects: src/frontend/ai/llm/llmManager.ts:148 network this.request ; src/frontend/ai/llm/llmManager.ts:64 ipc requestMain(Main.AI_LLM_COMPLETE, data, undefined, 60000) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 1. Full edges/effects/conditions in JSON.
