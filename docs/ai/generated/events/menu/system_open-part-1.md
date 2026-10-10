# menu/system_open (1)

## system_open — event-50eac153cb083703b1

[code] [src/frontend/components/context/contextMenus.ts:195](../../../../../src/frontend/components/context/contextMenus.ts#L195); system_open. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem; src/frontend/components/context/menuClick.ts:1795 obj.contextElem?.classList.contains("#media_preview") \|\| obj.contextElem?.classList.contains("#audio_preview"); src/frontend/components/context/menuClick.ts:1797 path; src/frontend/components/context/menuClick.ts:1801 !obj.sel; src/frontend/components/context/menuClick.ts:1804 obj.sel.id === "category_media"; src/frontend/components/context/menuClick.ts:1805 obj.sel.id === "category_audio"; src/frontend/components/context/menuClick.ts:1808 !path.

Calls: src/frontend/components/context/menuClick.ts:1794 system_open (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/context/menuClick.ts:1797 ipc sendMain(Main.SYSTEM_OPEN, path) ; src/frontend/components/context/menuClick.ts:1810 ipc sendMain(Main.SYSTEM_OPEN, path) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
