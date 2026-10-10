# click/src_server_remote_components_pages_Slide.svelte (1)

## click — event-8d9726f3b15cd2c3d7

[code] [src/server/remote/components/pages/Slide.svelte:39](../../../../../src/server/remote/components/pages/Slide.svelte#L39); click. resolved-within-bound.

Conditions: src/server/remote/components/pages/Slide.svelte:32 $outShow; src/server/remote/components/pages/Slide.svelte:36 $outputMode === "lyrics"; src/server/remote/components/pages/Slide.svelte:27 e.clientX < window.innerWidth / 3.

Calls: src/server/remote/components/pages/Slide.svelte:23 click (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Slide.svelte:27 ipc send("API:previous_slide") ; src/server/remote/components/pages/Slide.svelte:28 ipc send("API:next_slide") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d1ae4a281ef824167a

[code] [src/server/remote/components/pages/Slide.svelte:53](../../../../../src/server/remote/components/pages/Slide.svelte#L53); () => send("API:previous_slide"). resolved-within-bound.

Conditions: src/server/remote/components/pages/Slide.svelte:32 $outShow.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9b4bf86e9703fa3288

[code] [src/server/remote/components/pages/Slide.svelte:57](../../../../../src/server/remote/components/pages/Slide.svelte#L57); () => send("API:next_slide"). resolved-within-bound.

Conditions: src/server/remote/components/pages/Slide.svelte:32 $outShow.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-46bc325c4981d31347

[code] [src/server/remote/components/pages/Slide.svelte:67](../../../../../src/server/remote/components/pages/Slide.svelte#L67); () => _set("outputMode", $outputMode === "slide" ? "lyrics" : "slide"). resolved-within-bound.

Conditions: src/server/remote/components/pages/Slide.svelte:32 $outShow.

Calls: src/server/remote/util/stores.ts:202 _set (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-000647e45704704edd

[code] [src/server/remote/components/pages/Slide.svelte:75](../../../../../src/server/remote/components/pages/Slide.svelte#L75); () => _set("outputMode", $outputMode === "slide" ? "lyrics" : "slide"). resolved-within-bound.

Conditions: src/server/remote/components/pages/Slide.svelte:32 $outShow.

Calls: src/server/remote/util/stores.ts:202 _set (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
