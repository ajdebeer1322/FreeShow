# click/src_frontend_components_main_MenuBar.svelte (1)

## click — event-cfaf0b7ba9cd5fa02d

[code] [src/frontend/components/main/MenuBar.svelte:48](../../../../../src/frontend/components/main/MenuBar.svelte#L48); click. resolved-within-bound.

Conditions: src/frontend/components/main/MenuBar.svelte:34 e.target?.closest(".menu") \|\| e.target?.closest(".menus").

Calls: src/frontend/components/main/MenuBar.svelte:33 click (depth 0).

Effects: src/frontend/components/main/MenuBar.svelte:36 store-write src/frontend/stores.ts#topContextActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e9ca7ea617558132ca

[code] [src/frontend/components/main/MenuBar.svelte:67](../../../../../src/frontend/components/main/MenuBar.svelte#L67); menu. resolved-within-bound.

Conditions: src/frontend/components/main/MenuBar.svelte:28 activeID === null.

Calls: src/frontend/components/main/MenuBar.svelte:23 menu (depth 0).

Effects: src/frontend/components/main/MenuBar.svelte:25 store-write src/frontend/stores.ts#topContextActive .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-96b48ddcd289b2831d

[code] [src/frontend/components/main/MenuBar.svelte:82](../../../../../src/frontend/components/main/MenuBar.svelte#L82); () => sendMain(Main.MINIMIZE). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-bda29bfbdacf814e03

[code] [src/frontend/components/main/MenuBar.svelte:85](../../../../../src/frontend/components/main/MenuBar.svelte#L85); () => sendMain(Main.MAXIMIZE). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c2bd860f3797e1342d

[code] [src/frontend/components/main/MenuBar.svelte:88](../../../../../src/frontend/components/main/MenuBar.svelte#L88); () => initializeClosing(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/save.ts:339 initializeClosing (depth 1); src/frontend/utils/save.ts:295 saveComplete (depth 2); src/frontend/utils/common.ts:33 setStatus (depth 3); src/frontend/utils/common.ts:39 <callback> (depth 4); src/frontend/components/helpers/output.ts:751 isOutCleared (depth 3); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 4); src/frontend/components/helpers/array.ts:42 sortByName (depth 5); src/frontend/components/helpers/array.ts:45 <callback> (depth 6); src/frontend/components/helpers/array.ts:46 <callback> (depth 6); src/frontend/components/helpers/array.ts:137 keysToID (depth 5); src/frontend/components/helpers/array.ts:139 <callback> (depth 6); src/frontend/components/helpers/output.ts:677 <callback> (depth 5); src/frontend/components/helpers/output.ts:679 <callback> (depth 5); src/frontend/components/helpers/output.ts:679 <callback> (depth 5); src/frontend/components/helpers/output.ts:681 <callback> (depth 5); src/frontend/utils/common.ts:18 isMainWindow (depth 5).

Effects: src/frontend/utils/save.ts:341 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/save.ts:300 store-write src/frontend/stores.ts#saved ; src/frontend/utils/save.ts:307 store-write src/frontend/stores.ts#alertMessage ; src/frontend/utils/save.ts:308 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/utils/cloudSync.ts:149 store-write src/frontend/stores.ts#showsCache ; src/frontend/utils/cloudSync.ts:150 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/utils/cloudSync.ts:151 store-write src/frontend/stores.ts#deletedShows ; src/frontend/utils/cloudSync.ts:152 store-write src/frontend/stores.ts#renamedShows .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 31; depth cutoffs: 47. Full edges/effects/conditions in JSON.
