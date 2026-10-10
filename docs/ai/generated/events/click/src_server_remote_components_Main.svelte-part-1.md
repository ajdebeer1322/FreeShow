# click/src_server_remote_components_Main.svelte (1)

## click — event-71c1ae797619dc1ef0

[code] [src/server/remote/components/Main.svelte:168](../../../../../src/server/remote/components/Main.svelte#L168); () => createShow.set(false). resolved-within-bound.

Conditions: src/server/remote/components/Main.svelte:165 $createShow.

Calls: no function target resolved.

Effects: src/server/remote/components/Main.svelte:168 store-write src/server/remote/util/stores.ts#createShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-51c0f702ae4fbaff08

[code] [src/server/remote/components/Main.svelte:177](../../../../../src/server/remote/components/Main.svelte#L177); newShow. resolved-within-bound.

Conditions: src/server/remote/components/Main.svelte:165 $createShow; src/server/remote/components/Main.svelte:85 !newShowText.

Calls: src/server/remote/components/Main.svelte:84 newShow (depth 0); src/server/remote/components/Main.svelte:96 newShowFinish (depth 1); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/Main.svelte:90 ipc send("API:create_show", { text: newShowText, name: newShowName }) ; src/server/remote/components/Main.svelte:99 store-write src/server/remote/util/stores.ts#createShow ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
