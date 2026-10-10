# menu/docs (1)

## docs — event-40f5fe42ab3376c9fa

[code] [src/frontend/components/context/contextMenus.ts:31](../../../../../src/frontend/components/context/contextMenus.ts#L31); docs. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:137 clickActions&#91;id&#93; exists; enabled is passed to handler, not a dispatch guard; src/frontend/components/context/ContextMenu.svelte:1 ContextMenu.checkIfEnabled and loaders gate visible items; disabled handled by ContextItem.

Calls: src/frontend/components/context/menuClick.ts:255 docs (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/context/menuClick.ts:255 ipc sendMain(Main.URL, "https://freeshow.app/docs") ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

Menu layouts: help src/frontend/components/context/contextMenus.ts:248. Loaders: none.

[code] Visibility/disabled conditions: no item-specific condition extracted. Appears: no literal appearance indexed; mounting may be dynamic.
