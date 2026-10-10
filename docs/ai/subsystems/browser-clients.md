# Remote, controller and browser clients

## Purpose

[code] Serve independently mounted browser interfaces and exchange projected data or explicit operator commands. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/electron/servers.ts](../generated/files/src_electron_servers.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/server/remote/main.ts](../generated/files/src_server_remote_main.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/server/remote/util/receiver.ts](../generated/files/src_server_remote_util_receiver.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/server/controller/App.svelte](../generated/files/src_server_controller_App.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/server/output_stream/App.svelte](../generated/files/src_server_output_stream_App.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/server/cam/App.svelte](../generated/files/src_server_cam_App.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/server/remote/util/stores.ts](../generated/files/src_server_remote_util_stores.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Electron starts the HTTP/socket services and owns client connections. ([src/electron/servers.ts:122](../../../src/electron/servers.ts#L122))
2. [code] Remote mounts its own App rather than importing the desktop root. ([src/server/remote/main.ts:2](../../../src/server/remote/main.ts#L2))
3. [code] Remote messages populate remote-local stores and invoke client helpers. ([src/server/remote/util/receiver.ts:35](../../../src/server/remote/util/receiver.ts#L35))
4. [code] Controller buttons/keys send presentation commands through the socket protocol. ([src/server/controller/App.svelte:47](../../../src/server/controller/App.svelte#L47))
5. [code] Output-stream receives rendered stream data and separate audio buffers. ([src/server/output_stream/App.svelte:36](../../../src/server/output_stream/App.svelte#L36))
6. [code] The camera client requires a secure/localhost media-device context and samples its canvas every 5 ms. ([src/server/cam/App.svelte:2](../../../src/server/cam/App.svelte#L2))

## Stores and messages

[code] Static scope: 128 files, 128 referenced stores, 120 concrete message keys, 122 timing entries. [Complete dependency index](browser-clients.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#actionTags](../generated/stores/src_frontend_stores.ts_actionTags.md)
- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeTimers](../generated/stores/src_frontend_stores.ts_activeTimers.md)
- [code] [src/frontend/stores.ts#audioChannelsData](../generated/stores/src_frontend_stores.ts_audioChannelsData.md)
- [code] [src/frontend/stores.ts#audioRouting](../generated/stores/src_frontend_stores.ts_audioRouting.md)
- [code] [src/frontend/stores.ts#categories](../generated/stores/src_frontend_stores.ts_categories.md)
- [code] [src/frontend/stores.ts#connections](../generated/stores/src_frontend_stores.ts_connections.md)
- [code] [src/frontend/stores.ts#dictionary](../generated/stores/src_frontend_stores.ts_dictionary.md)
- [code] [src/frontend/stores.ts#folders](../generated/stores/src_frontend_stores.ts_folders.md)
- [code] [src/frontend/stores.ts#language](../generated/stores/src_frontend_stores.ts_language.md)
- [code] [src/frontend/stores.ts#openedFolders](../generated/stores/src_frontend_stores.ts_openedFolders.md)
- [code] [src/frontend/stores.ts#outLocked](../generated/stores/src_frontend_stores.ts_outLocked.md)
- [code] [src/frontend/stores.ts#outputs](../generated/stores/src_frontend_stores.ts_outputs.md)
- [code] [src/frontend/stores.ts#overlayCategories](../generated/stores/src_frontend_stores.ts_overlayCategories.md)
- [code] [src/frontend/stores.ts#overlays](../generated/stores/src_frontend_stores.ts_overlays.md)
- [code] [src/frontend/stores.ts#playerVideos](../generated/stores/src_frontend_stores.ts_playerVideos.md)
- [code] [src/frontend/stores.ts#projects](../generated/stores/src_frontend_stores.ts_projects.md)
- [code] [src/frontend/stores.ts#remotePassword](../generated/stores/src_frontend_stores.ts_remotePassword.md)
- [code] [src/frontend/stores.ts#runningActions](../generated/stores/src_frontend_stores.ts_runningActions.md)
- [code] [src/frontend/stores.ts#scriptures](../generated/stores/src_frontend_stores.ts_scriptures.md)
- [code] [src/frontend/stores.ts#shows](../generated/stores/src_frontend_stores.ts_shows.md)

[code] Message families: [CAM](../generated/channels/CAM.md), [CONTROLLER](../generated/channels/CONTROLLER.md), [OUTPUT_STREAM](../generated/channels/OUTPUT_STREAM.md), [REMOTE](../generated/channels/REMOTE.md), [STAGE](../generated/channels/STAGE.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Client _get/_set/_update operate on client stores, not the desktop central store object. ([src/server/remote/util/stores.ts:202](../../../src/server/remote/util/stores.ts#L202))
- [code] Trace socket channel, message key and desktop handler together before changing remote commands. ([src/server/controller/App.svelte:2](../../../src/server/controller/App.svelte#L2))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/utils/sendData.ts:132](../../../src/frontend/utils/sendData.ts#L132): // TODO: msg does not change!!!
- [code] [src/server/common/util/icons.ts:135](../../../src/server/common/util/icons.ts#L135): // WIP
- [code] [src/server/common/util/show.ts:25](../../../src/server/common/util/show.ts#L25): // array bug
- [code] [src/server/common/util/time.ts:55](../../../src/server/common/util/time.ts#L55): // TODO: get dictionary...

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-3b0f679e4b7bc042](../history/records/src_electron_servers.ts-1.md): setTimeout: 2000 (2000 ms).
- [code] [D-timer-7474f6c795db3ddc](../history/records/src_frontend_utils_sendData.ts-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-17f3f5fd0be0ebfd](../history/records/src_server_remote_components_pages_Scripture.svelte-1.md): setTimeout: 0 (0 ms).
- [code] [D-timer-1e03824023c12c05](../history/records/src_server_remote_components_pages_ScriptureContentTablet.svelte-1.md): setTimeout: 100 (100 ms).
- [code] [D-timer-68d12962743dac12](../history/records/src_server_remote_components_show_Overlay.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-22a3bf2d25721b16](../history/records/src_server_stage_App.svelte-1.md): setTimeout: omitted (0 ms).

[code] All 142 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] No specific F-001–F-019 companion finding directly assigned to this area. See the [documentation roles](../README.md) before borrowing later behavior claims.
