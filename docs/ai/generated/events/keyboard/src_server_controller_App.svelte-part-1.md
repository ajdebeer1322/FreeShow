# keyboard/src_server_controller_App.svelte (1)

## dynamic — event-4d37fd6e064de6ec2b

[code] [src/server/controller/App.svelte:119](../../../../../src/server/controller/App.svelte#L119); keydown. resolved-within-bound.

Conditions: src/server/controller/App.svelte:107 (e.target as HTMLElement)?.closest("textarea, input, select"); src/server/controller/App.svelte:109 e.key === " " \|\| e.key.startsWith("Arrow") \|\| e.key.startsWith("Page"); src/server/controller/App.svelte:111 &#91;" ", "ArrowRight", "PageDown"&#93;.includes(e.key); src/server/controller/App.svelte:112 &#91;"ArrowLeft", "PageUp"&#93;.includes(e.key); src/server/controller/App.svelte:113 e.key === "Escape".

Calls: src/server/controller/App.svelte:105 keydown (depth 0); src/server/controller/App.svelte:47 sendAction (depth 1); src/server/controller/App.svelte:54 <callback> (depth 2).

Effects: src/server/controller/App.svelte:48 network socket.emit ; src/server/controller/App.svelte:48 ipc socket.emit("CONTROLLER", { channel: "ACTION", data: { id } }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
