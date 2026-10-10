# click/src_server_remote_components_tablet_layout_drawer_pages_TabletDrawerAudio.svelte (1)

## click — event-aebfdd15b75c468604

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:67](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte#L67); () => adjustDb(channel.id, volumeValue, -1). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:44 channels.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:34 adjustDb (depth 1); src/server/common/util/dBUtils.ts:12 gainToDb (depth 2); src/server/common/util/dBUtils.ts:21 dbToGain (depth 2); src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:17 updateVolume (depth 2); src/server/remote/util/socket.ts:42 send (depth 3).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:18 ipc send("API:change_volume", { channelId, volume: gain }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3dd2359e16dd566289

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:77](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte#L77); () => adjustDb(channel.id, volumeValue, 1). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:44 channels.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:34 adjustDb (depth 1); src/server/common/util/dBUtils.ts:12 gainToDb (depth 2); src/server/common/util/dBUtils.ts:21 dbToGain (depth 2); src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:17 updateVolume (depth 2); src/server/remote/util/socket.ts:42 send (depth 3).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:18 ipc send("API:change_volume", { channelId, volume: gain }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ede6f6429658211d6d

[code] [src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:82](../../../../../src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte#L82); () => toggleMute(channel.id, isMuted). resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:44 channels.length.

Calls: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:21 toggleMute (depth 1); src/server/remote/util/socket.ts:42 send (depth 2).

Effects: src/server/remote/components/tablet/layout/drawer/pages/TabletDrawerAudio.svelte:22 ipc send("API:mute", { id: channelId, value: !currentMuted }) ; src/server/remote/util/socket.ts:42 network socket.emit ; src/server/remote/util/socket.ts:42 ipc socket.emit("REMOTE", { id, channel, data }) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
