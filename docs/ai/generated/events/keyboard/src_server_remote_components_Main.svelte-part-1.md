# keyboard/src_server_remote_components_Main.svelte (1)

## dynamic — event-5af11379b1fc9aa6be

[code] [src/server/remote/components/Main.svelte:129](../../../../../src/server/remote/components/Main.svelte#L129); keydown. resolved-within-bound.

Conditions: src/server/remote/components/Main.svelte:51 (e.target as HTMLElement)?.closest("textarea, input, select"); src/server/remote/components/Main.svelte:53 e.key === " " \|\| e.key.startsWith("Arrow") \|\| e.key.startsWith("Page"); src/server/remote/components/Main.svelte:56 &#91;" ", "ArrowRight", "PageDown"&#93;.includes(e.key); src/server/remote/components/Main.svelte:57 &#91;"ArrowLeft", "PageUp"&#93;.includes(e.key); src/server/remote/components/Main.svelte:58 e.key === "Escape".

Calls: src/server/remote/components/Main.svelte:49 keydown (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/Main.svelte:56 ipc send("API:next_slide") ; src/server/remote/components/Main.svelte:57 ipc send("API:previous_slide") ; src/server/remote/components/Main.svelte:58 ipc send("API:clear_all") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
