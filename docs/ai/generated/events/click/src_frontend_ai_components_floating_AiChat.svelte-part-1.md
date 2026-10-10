# click/src_frontend_ai_components_floating_AiChat.svelte (1)

## click — event-c88aef2e008516e900

[code] [src/frontend/ai/components/floating/AiChat.svelte:96](../../../../../src/frontend/ai/components/floating/AiChat.svelte#L96); () => ChatAction.handle(msg.action). resolved-within-bound.

Conditions: src/frontend/ai/components/floating/AiChat.svelte:84 $ai?.llm?.provider; src/frontend/ai/components/floating/AiChat.svelte:86 chatMessages.length === 0; src/frontend/ai/components/floating/AiChat.svelte:95 msg.action.

Calls: src/frontend/ai/manager/ChatAction.ts:37 handle (depth 1); src/frontend/ai/manager/ChatAction.ts:99 validateSlide (depth 2); src/frontend/ai/manager/ChatAction.ts:49 <callback> (depth 2); src/frontend/ai/manager/ChatAction.ts:75 <callback> (depth 2); src/frontend/utils/common.ts:26 newToast (depth 2); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 3).

Effects: src/frontend/ai/manager/ChatAction.ts:66 store-write src/frontend/stores.ts#overlays ; src/frontend/ai/manager/ChatAction.ts:92 store-write src/frontend/stores.ts#templates ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9d43bc68239db942f4

[code] [src/frontend/ai/components/floating/AiChat.svelte:117](../../../../../src/frontend/ai/components/floating/AiChat.svelte#L117); sendChatMessage. partial.

Conditions: src/frontend/ai/components/floating/AiChat.svelte:84 $ai?.llm?.provider; src/frontend/ai/components/floating/AiChat.svelte:40 !chatInput.trim() \|\| isSending; src/frontend/ai/components/floating/AiChat.svelte:46 !llm.

Calls: src/frontend/ai/components/floating/AiChat.svelte:39 sendChatMessage (depth 0); src/frontend/ai/llm/llmManager.ts:28 getLLMManager (depth 1); src/frontend/ai/llm/llmManager.ts:80 stop (depth 2); src/frontend/ai/llm/llmManager.ts:139 sendMessage (depth 1); src/frontend/ai/llm/llmManager.ts:126 addMessage (depth 2); src/frontend/ai/llm/llmManager.ts:147 <callback> (depth 2); src/frontend/ai/llm/llmManager.ts:53 request (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5); src/frontend/ai/llm/llmManager.ts:118 getHistory (depth 1).

Effects: src/frontend/ai/llm/llmManager.ts:148 network this.request ; src/frontend/ai/llm/llmManager.ts:64 ipc requestMain(Main.AI_LLM_COMPLETE, data, undefined, 60000) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.
