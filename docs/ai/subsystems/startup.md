# Startup and process selection

## Purpose

[code] Bootstrap the Electron services and select desktop, output or PDF renderer behavior. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/electron/index.ts](../generated/files/src_electron_index.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/main.ts](../generated/files/src_frontend_main.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/startup.ts](../generated/files/src_frontend_utils_startup.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/preload.ts](../generated/files/src_electron_preload.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Electron constructs the desktop window and loads its content through loadWindowContent. ([src/electron/index.ts:193](../../../src/electron/index.ts#L193))
2. [code] The renderer mounts App; App starts the shared startup handshake. ([src/frontend/main.ts:6](../../../src/frontend/main.ts#L6))
3. [code] STARTUP/TYPE is processed once per window; READY initiates the handshake. ([src/frontend/utils/startup.ts:35](../../../src/frontend/utils/startup.ts#L35))
4. [code] Desktop startup loads main/stored data, waits for loaded, subscribes stores and initializes browser/cloud/provider services. ([src/frontend/utils/startup.ts:60](../../../src/frontend/utils/startup.ts#L60))
5. [code] Output startup registers output handlers, waits 200 ms and requests initial desktop data. ([src/frontend/utils/startup.ts:215](../../../src/frontend/utils/startup.ts#L215))

## Stores and messages

[code] Static scope: 5 files, 31 referenced stores, 29 concrete message keys, 21 timing entries. [Complete dependency index](startup.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProfile](../generated/stores/src_frontend_stores.ts_activeProfile.md)
- [code] [src/frontend/stores.ts#activeTimers](../generated/stores/src_frontend_stores.ts_activeTimers.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#cachePath](../generated/stores/src_frontend_stores.ts_cachePath.md)
- [code] [src/frontend/stores.ts#closeAd](../generated/stores/src_frontend_stores.ts_closeAd.md)
- [code] [src/frontend/stores.ts#cloudSyncData](../generated/stores/src_frontend_stores.ts_cloudSyncData.md)
- [code] [src/frontend/stores.ts#contentProviderData](../generated/stores/src_frontend_stores.ts_contentProviderData.md)
- [code] [src/frontend/stores.ts#currentWindow](../generated/stores/src_frontend_stores.ts_currentWindow.md)
- [code] [src/frontend/stores.ts#dataPath](../generated/stores/src_frontend_stores.ts_dataPath.md)
- [code] [src/frontend/stores.ts#deviceId](../generated/stores/src_frontend_stores.ts_deviceId.md)
- [code] [src/frontend/stores.ts#disabledServers](../generated/stores/src_frontend_stores.ts_disabledServers.md)
- [code] [src/frontend/stores.ts#driveKeys](../generated/stores/src_frontend_stores.ts_driveKeys.md)
- [code] [src/frontend/stores.ts#events](../generated/stores/src_frontend_stores.ts_events.md)
- [code] [src/frontend/stores.ts#isDev](../generated/stores/src_frontend_stores.ts_isDev.md)
- [code] [src/frontend/stores.ts#language](../generated/stores/src_frontend_stores.ts_language.md)
- [code] [src/frontend/stores.ts#loaded](../generated/stores/src_frontend_stores.ts_loaded.md)
- [code] [src/frontend/stores.ts#loadedState](../generated/stores/src_frontend_stores.ts_loadedState.md)
- [code] [src/frontend/stores.ts#localeDirection](../generated/stores/src_frontend_stores.ts_localeDirection.md)
- [code] [src/frontend/stores.ts#os](../generated/stores/src_frontend_stores.ts_os.md)
- [code] [src/frontend/stores.ts#outputDisplay](../generated/stores/src_frontend_stores.ts_outputDisplay.md)
- [code] [src/frontend/stores.ts#outputs](../generated/stores/src_frontend_stores.ts_outputs.md)
- [code] [src/frontend/stores.ts#profiles](../generated/stores/src_frontend_stores.ts_profiles.md)
- [code] [src/frontend/stores.ts#providerConnections](../generated/stores/src_frontend_stores.ts_providerConnections.md)

[code] Message families: [MAIN](../generated/channels/MAIN.md), [OUTPUT](../generated/channels/OUTPUT.md), [STARTUP](../generated/channels/STARTUP.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Keep startup idempotent: duplicate TYPE packets must not register another set of listeners. ([src/frontend/utils/startup.ts:35](../../../src/frontend/utils/startup.ts#L35))
- [code] Use the preload bridge for privileged operations; renderer modules do not own filesystem or window services. ([src/electron/preload.ts:5](../../../src/electron/preload.ts#L5))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:



[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-c54d006ef917beee](../history/records/src_frontend_App.svelte-1.md): setTimeout: 51 (51 ms).
- [code] [D-poll-interval-ff0931245341ff34](../history/records/src_frontend_utils_startup.ts-1.md): poll-interval: 20 (20 ms).
- [code] [D-poll-timeout-3ca3833a9015a0c6](../history/records/src_frontend_utils_startup.ts-1.md): poll-timeout: 5000 (5000 ms).

[code] All 21 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-014](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These refer to a later source snapshot; they are contextual evidence, not runtime verification here.
