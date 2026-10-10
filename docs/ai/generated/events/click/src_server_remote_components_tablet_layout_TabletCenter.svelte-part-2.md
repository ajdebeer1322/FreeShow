# click/src_server_remote_components_tablet_layout_TabletCenter.svelte (2)

## click — event-e2ed8d86cf852f0493

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:264](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L264); save. resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:247 groupsOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:259 editOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:58 $textCache&#91;$activeShow?.id \|\| ""&#93; === textValue.

Calls: src/server/remote/components/tablet/layout/TabletCenter.svelte:56 save (depth 0); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/tablet/layout/TabletCenter.svelte:60 ipc send("API:set_plain_text", { id: $activeShow?.id, value: textValue }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-2d6049ffe5941c3d8c

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:269](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L269); () => (slideView = slidesViews&#91;slideView&#93;). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:247 groupsOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:259 editOpened.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ecf8c0c49c5521de58

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:273](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L273); () => (groupsOpened = true). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:247 groupsOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:259 editOpened.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9da15b8efd4fb28434

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:278](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L278); () => (editOpened = true). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:247 groupsOpened; src/server/remote/components/tablet/layout/TabletCenter.svelte:259 editOpened.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-abd76aa0cf1568c8a3

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:289](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L289); newProjectCTA. partial.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow; src/server/remote/components/tablet/layout/TabletCenter.svelte:121 !name.

Calls: src/server/remote/components/tablet/layout/TabletCenter.svelte:117 newProjectCTA (depth 0); src/server/remote/util/stores.ts:202 _set (depth 1); src/server/remote/util/helpers.ts:16 translate (depth 1); src/server/remote/util/socket.ts:42 send (depth 1).

Effects: src/server/remote/components/tablet/layout/TabletCenter.svelte:118 store-write src/server/remote/util/stores.ts#activeTab ; src/server/remote/components/tablet/layout/TabletCenter.svelte:125 store-write src/server/remote/util/stores.ts#projectsOpened ; src/server/remote/components/tablet/layout/TabletCenter.svelte:126 store-write src/server/remote/util/stores.ts#project ; src/server/remote/components/tablet/layout/TabletCenter.svelte:127 store-write src/server/remote/util/stores.ts#activeProject ; src/server/remote/components/tablet/layout/TabletCenter.svelte:124 ipc send("API:create_project", { name, id: projectId }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c807fcf26b84f4f1a5

[code] [src/server/remote/components/tablet/layout/TabletCenter.svelte:293](../../../../../src/server/remote/components/tablet/layout/TabletCenter.svelte#L293); newShowCTA. resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletCenter.svelte:186 ($active.type \|\| "show") === "show"; src/server/remote/components/tablet/layout/TabletCenter.svelte:187 $activeShow.

Calls: src/server/remote/components/tablet/layout/TabletCenter.svelte:112 newShowCTA (depth 0); src/server/remote/util/stores.ts:202 _set (depth 1).

Effects: src/server/remote/components/tablet/layout/TabletCenter.svelte:113 store-write src/server/remote/util/stores.ts#activeTab ; src/server/remote/components/tablet/layout/TabletCenter.svelte:114 store-write src/server/remote/util/stores.ts#createShow .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
