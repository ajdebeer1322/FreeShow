# click/src_server_remote_components_tablet_layout_TabletCenter.svelte (1)

## click — event-93cc4a999dcf355d4b

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:204](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L204); () => playSlide(i). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:189 groupsOpened \|\| editOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:201 slideView === "lyrics"; src/server/remote/components/tablet/layout/TabletCenter.svelte:203 !layoutSlide.disabled.

Calls: src/server/remote/components/tablet/layout/TabletCenter.svelte:81 playSlide (depth 1); src/server/remote/util/output.ts:20 GetLayout (depth 2); src/server/remote/util/output.ts:23 <callback> (depth 3); src/server/remote/util/output.ts:29 <callback> (depth 4); src/server/remote/components/tablet/layout/TabletCenter.svelte:90 <callback> (depth 2); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/util/stores.ts:202 _set (depth 2).

Effects: src/server/remote/components/tablet/layout/TabletCenter.svelte:98 store-write src/server/remote/util/stores.ts#outShow ; src/server/remote/components/tablet/layout/TabletCenter.svelte:92 ipc send("API:next_slide") ; src/server/remote/components/tablet/layout/TabletCenter.svelte:97 ipc send("API:index_select_slide", { showId, layoutId, index }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-aae201357976093387

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:228](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L228); (e) => playSlide(e.detail). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:189 groupsOpened \|\| editOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:201 slideView === "lyrics".

Calls: src/server/remote/components/tablet/layout/TabletCenter.svelte:81 playSlide (depth 1); src/server/remote/util/output.ts:20 GetLayout (depth 2); src/server/remote/util/output.ts:23 <callback> (depth 3); src/server/remote/util/output.ts:29 <callback> (depth 4); src/server/remote/components/tablet/layout/TabletCenter.svelte:90 <callback> (depth 2); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/util/stores.ts:202 _set (depth 2).

Effects: src/server/remote/components/tablet/layout/TabletCenter.svelte:98 store-write src/server/remote/util/stores.ts#outShow ; src/server/remote/components/tablet/layout/TabletCenter.svelte:92 ipc send("API:next_slide") ; src/server/remote/components/tablet/layout/TabletCenter.svelte:97 ipc send("API:index_select_slide", { showId, layoutId, index }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-de46e1a169dab50257

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:239](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L239); () => changeLayout(id). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:236 !groupsOpened && !editOpened.

Calls: src/server/remote/components/tablet/layout/TabletCenter.svelte:101 changeLayout (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/tablet/layout/TabletCenter.svelte:102 ipc send("API:change_layout", { showId: $activeShow?.id, layoutId }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-84dcd2188a726a37b9

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:249](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L249); () => (addGroups = true). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:247 groupsOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:248 !addGroups.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-fee1e209eb6a2d5559

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:255](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L255); done. resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:247 groupsOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:64 addGroups; src/server/remote/components/tablet/layout/TabletCenter.svelte:69 groupsOpened.

Calls: src/server/remote/components/tablet/layout/TabletCenter.svelte:63 done (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-836ddad0949a3cac27

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:260](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L260); cancel. resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:247 groupsOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:259 editOpened.

Calls: src/server/remote/components/tablet/layout/TabletCenter.svelte:51 cancel (depth 0); src/server/remote/components/tablet/layout/TabletCenter.svelte:48 reset (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
