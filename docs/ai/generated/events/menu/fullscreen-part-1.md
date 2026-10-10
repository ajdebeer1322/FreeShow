# menu/fullscreen (1)

## fullscreen — event-3ff7d5fde0fc632e29

[code] [src/frontend/components/context/contextMenus.ts:35](../../../../../src/frontend/components/context/contextMenus.ts#L35); fullscreen. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:185 fullscreen (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/context/menuClick.ts:185 ipc sendMain(Main.FULLSCREEN) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
