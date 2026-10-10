# click/src_server_remote_components_pages_Show.svelte (1)

## click — event-548fc185b70de5473b

[code] [src/server/remote/components/pages/Show.svelte:143](../../../../../src/server/remote/components/pages/Show.svelte#L143); () => (addGroups = true). resolved-within-bound.

Conditions: src/server/remote/components/pages/Show.svelte:126 $activeShow?.layouts; src/server/remote/components/pages/Show.svelte:129 (groupsOpened \|\| editOpened) && !($activeShow.id === $outShow?.id); src/server/remote/components/pages/Show.svelte:142 groupsOpened && !addGroups.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-d2843462498d0dcf78

[code] [src/server/remote/components/pages/Show.svelte:149](../../../../../src/server/remote/components/pages/Show.svelte#L149); done. resolved-within-bound.

Conditions: src/server/remote/components/pages/Show.svelte:126 $activeShow?.layouts; src/server/remote/components/pages/Show.svelte:129 (groupsOpened \|\| editOpened) && !($activeShow.id === $outShow?.id); src/server/remote/components/pages/Show.svelte:79 addGroups; src/server/remote/components/pages/Show.svelte:84 groupsOpened; src/server/remote/components/pages/Show.svelte:91 $textCache&#91;$activeShow?.id \|\| ""&#93; === textValue.

Calls: src/server/remote/components/pages/Show.svelte:78 done (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Show.svelte:93 ipc send("API:set_plain_text", { id: $activeShow?.id, value: textValue }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-543d3add32234fbcfe

[code] [src/server/remote/components/pages/Show.svelte:157](../../../../../src/server/remote/components/pages/Show.svelte#L157); (e) => playSlide(e.detail). resolved-within-bound.

Conditions: src/server/remote/components/pages/Show.svelte:126 $activeShow?.layouts; src/server/remote/components/pages/Show.svelte:129 (groupsOpened \|\| editOpened) && !($activeShow.id === $outShow?.id).

Calls: src/server/remote/components/pages/Show.svelte:96 playSlide (depth 1); src/server/remote/util/output.ts:20 GetLayout (depth 2); src/server/remote/util/output.ts:23 <callback> (depth 3); src/server/remote/util/output.ts:29 <callback> (depth 4); src/server/remote/components/pages/Show.svelte:105 <callback> (depth 2); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/util/stores.ts:202 _set (depth 2).

Effects: src/server/remote/components/pages/Show.svelte:113 store-write src/server/remote/util/stores.ts#outShow ; src/server/remote/components/pages/Show.svelte:107 ipc send("API:next_slide") ; src/server/remote/components/pages/Show.svelte:112 ipc send("API:index_select_slide", { showId, layoutId, index }) ; src/server/remote/components/pages/Show.svelte:114 ipc send("API:get_cleared") ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b588ce32d70ec189a3

[code] [src/server/remote/components/pages/Show.svelte:170](../../../../../src/server/remote/components/pages/Show.svelte#L170); () => send("API:previous_slide"). resolved-within-bound.

Conditions: src/server/remote/components/pages/Show.svelte:126 $activeShow?.layouts; src/server/remote/components/pages/Show.svelte:129 (groupsOpened \|\| editOpened) && !($activeShow.id === $outShow?.id); src/server/remote/components/pages/Show.svelte:160 $activeShow.id === $outShow?.id \|\| !$isCleared.all; src/server/remote/components/pages/Show.svelte:161 $activeShow.id === $outShow?.id.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4d2aa15640bfc823f5

[code] [src/server/remote/components/pages/Show.svelte:174](../../../../../src/server/remote/components/pages/Show.svelte#L174); () => send("API:next_slide"). resolved-within-bound.

Conditions: src/server/remote/components/pages/Show.svelte:126 $activeShow?.layouts; src/server/remote/components/pages/Show.svelte:129 (groupsOpened \|\| editOpened) && !($activeShow.id === $outShow?.id); src/server/remote/components/pages/Show.svelte:160 $activeShow.id === $outShow?.id \|\| !$isCleared.all; src/server/remote/components/pages/Show.svelte:161 $activeShow.id === $outShow?.id.

Calls: src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b519688b37920b4814

[code] [src/server/remote/components/pages/Show.svelte:190](../../../../../src/server/remote/components/pages/Show.svelte#L190); changeLayout. resolved-within-bound.

Conditions: src/server/remote/components/pages/Show.svelte:126 $activeShow?.layouts; src/server/remote/components/pages/Show.svelte:129 (groupsOpened \|\| editOpened) && !($activeShow.id === $outShow?.id); src/server/remote/components/pages/Show.svelte:160 $activeShow.id === $outShow?.id \|\| !$isCleared.all; src/server/remote/components/pages/Show.svelte:188 layouts.length > 1.

Calls: src/server/remote/components/pages/Show.svelte:43 changeLayout (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/pages/Show.svelte:45 ipc send("API:change_layout", { showId: $activeShow?.id, layoutId }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
