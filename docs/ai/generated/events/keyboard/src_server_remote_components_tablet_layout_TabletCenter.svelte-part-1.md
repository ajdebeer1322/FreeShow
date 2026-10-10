# keyboard/src_server_remote_components_tablet_layout_TabletCenter.svelte (1)

## dynamic — event-deb3649e82a52a8636

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:204](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L204); (e) => (e.key === "Enter" ? playSlide(i) : null). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:189 groupsOpened \|\| editOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:201 slideView === "lyrics"; src/server/remote/components/tablet/layout/TabletCenter.svelte:203 !layoutSlide.disabled.

Calls: src/server/remote/components/tablet/layout/TabletCenter.svelte:81 playSlide (depth 1); src/server/remote/util/output.ts:20 GetLayout (depth 2); src/server/remote/util/output.ts:23 <callback> (depth 3); src/server/remote/util/output.ts:29 <callback> (depth 4); src/server/remote/components/tablet/layout/TabletCenter.svelte:90 <callback> (depth 2); src/server/remote/util/socket.ts:42 send (depth 2); src/server/remote/util/stores.ts:202 _set (depth 2).

Effects: src/server/remote/components/tablet/layout/TabletCenter.svelte:98 store-write src/server/remote/util/stores.ts#outShow ; src/server/remote/components/tablet/layout/TabletCenter.svelte:92 ipc send("API:next_slide") ; src/server/remote/components/tablet/layout/TabletCenter.svelte:97 ipc send("API:index_select_slide", { showId, layoutId, index }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
