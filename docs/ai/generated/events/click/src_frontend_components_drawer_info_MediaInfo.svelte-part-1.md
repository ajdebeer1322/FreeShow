# click/src_frontend_components_drawer_info_MediaInfo.svelte (1)

## click — event-4df4c3a5962a9c0d56

[code] [src/frontend/components/drawer/info/MediaInfo.svelte:88](../../../../../src/frontend/components/drawer/info/MediaInfo.svelte#L88); bundleMediaFiles. resolved-within-bound.

Conditions: src/frontend/components/drawer/info/MediaInfo.svelte:74 subTab === "inputs" \|\| $activeRecording; src/frontend/components/drawer/info/MediaInfo.svelte:76 subTab === "online"; src/frontend/components/drawer/info/MediaInfo.svelte:80 optionsOpen; src/frontend/components/drawer/info/MediaInfo.svelte:86 !$cloudSyncData.enabled && !$special.cloudSyncMediaFolder.

Calls: src/frontend/components/drawer/info/MediaInfo.svelte:69 bundleMediaFiles (depth 0); src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/components/drawer/info/MediaInfo.svelte:70 ipc sendMain(Main.BUNDLE_MEDIA_FILES, { openFolder: true }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9fef82bcdbb4f3372d

[code] [src/frontend/components/drawer/info/MediaInfo.svelte:95](../../../../../src/frontend/components/drawer/info/MediaInfo.svelte#L95); () => sendMain(Main.OPEN_CACHE). resolved-within-bound.

Conditions: src/frontend/components/drawer/info/MediaInfo.svelte:74 subTab === "inputs" \|\| $activeRecording; src/frontend/components/drawer/info/MediaInfo.svelte:76 subTab === "online"; src/frontend/components/drawer/info/MediaInfo.svelte:80 optionsOpen.

Calls: src/frontend/IPC/main.ts:68 sendMain (depth 1).

Effects: src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
