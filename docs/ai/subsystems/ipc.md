# IPC contracts and dispatch

## Purpose

[code] Connect Electron, renderer windows and browser clients with typed MAIN requests and channel envelopes. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/types/Channels.ts](../generated/files/src_types_Channels.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/IPC/main.ts](../generated/files/src_frontend_IPC_main.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/IPC/main.ts](../generated/files/src_electron_IPC_main.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/request.ts](../generated/files/src_frontend_utils_request.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/listeners.ts](../generated/files/src_frontend_utils_listeners.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/receivers.ts](../generated/files/src_frontend_utils_receivers.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/types/IPC/Main.ts](../generated/files/src_types_IPC_Main.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Public channels are declared separately from message keys; Main and ToMain share the MAIN transport. ([src/types/Channels.ts:3](../../../src/types/Channels.ts#L3))
2. [code] Desktop requests use a unique listener ID, default 15-second timeout and cleanup on settlement. ([src/frontend/IPC/main.ts:19](../../../src/frontend/IPC/main.ts#L19))
3. [code] Reverse requests share a pending-request dispatcher keyed by listener ID. ([src/electron/IPC/main.ts:42](../../../src/electron/IPC/main.ts#L42))
4. [code] Generic send emits one {channel,data} envelope per message key. ([src/frontend/utils/request.ts:6](../../../src/frontend/utils/request.ts#L6))
5. [code] Outputs are coalesced over 1 ms before OUTPUTS/ALL_OUTPUTS and browser projections are sent. ([src/frontend/utils/listeners.ts:195](../../../src/frontend/utils/listeners.ts#L195))
6. [code] Output handlers translate projected data into local stores. ([src/frontend/utils/receivers.ts:190](../../../src/frontend/utils/receivers.ts#L190))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 10 files, 94 referenced stores, 311 concrete message keys, 26 timing entries. [Complete dependency index](ipc.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#actionTags](../generated/stores/src_frontend_stores.ts_actionTags.md)
- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeScripture](../generated/stores/src_frontend_stores.ts_activeScripture.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeTimers](../generated/stores/src_frontend_stores.ts_activeTimers.md)
- [code] [src/frontend/stores.ts#aiSttStatus](../generated/stores/src_frontend_stores.ts_aiSttStatus.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#allOutputs](../generated/stores/src_frontend_stores.ts_allOutputs.md)
- [code] [src/frontend/stores.ts#audioChannelsData](../generated/stores/src_frontend_stores.ts_audioChannelsData.md)
- [code] [src/frontend/stores.ts#audioData](../generated/stores/src_frontend_stores.ts_audioData.md)
- [code] [src/frontend/stores.ts#audioRouting](../generated/stores/src_frontend_stores.ts_audioRouting.md)
- [code] [src/frontend/stores.ts#cachedDynamicValues](../generated/stores/src_frontend_stores.ts_cachedDynamicValues.md)
- [code] [src/frontend/stores.ts#cachedShowsData](../generated/stores/src_frontend_stores.ts_cachedShowsData.md)
- [code] [src/frontend/stores.ts#categories](../generated/stores/src_frontend_stores.ts_categories.md)
- [code] [src/frontend/stores.ts#closeAd](../generated/stores/src_frontend_stores.ts_closeAd.md)
- [code] [src/frontend/stores.ts#colorbars](../generated/stores/src_frontend_stores.ts_colorbars.md)
- [code] [src/frontend/stores.ts#contentProviderData](../generated/stores/src_frontend_stores.ts_contentProviderData.md)
- [code] [src/frontend/stores.ts#currentOutputSettings](../generated/stores/src_frontend_stores.ts_currentOutputSettings.md)
- [code] [src/frontend/stores.ts#customMessageCredits](../generated/stores/src_frontend_stores.ts_customMessageCredits.md)
- [code] [src/frontend/stores.ts#customMetadata](../generated/stores/src_frontend_stores.ts_customMetadata.md)

[code] Message families: [CLOUD](../generated/channels/CLOUD.md), [MAIN](../generated/channels/MAIN.md), [NDI](../generated/channels/NDI.md), [OMT](../generated/channels/OMT.md), [OUTPUT](../generated/channels/OUTPUT.md), [REMOTE](../generated/channels/REMOTE.md), [STAGE](../generated/channels/STAGE.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Electron replies for false/zero values as well as truthy ones; do not replace the defined-value check with a truthiness check. ([src/electron/IPC/main.ts:36](../../../src/electron/IPC/main.ts#L36))
- [code] Keep listener cleanup and settlement guards together to prevent late replies resolving another request. ([src/frontend/IPC/main.ts:42](../../../src/frontend/IPC/main.ts#L42))
- [code] Update payload contracts, sender and handler together. ([src/types/IPC/Main.ts:203](../../../src/types/IPC/Main.ts#L203))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/utils/listeners.ts:106](../../../src/frontend/utils/listeners.ts#L106): // WIP convertBackgrounds is triggered many times...
- [code] [src/frontend/utils/listeners.ts:108](../../../src/frontend/utils/listeners.ts#L108): // TODO: ?
- [code] [src/frontend/utils/listeners.ts:115](../../../src/frontend/utils/listeners.ts#L115): // TODO: this, timedout +++
- [code] [src/frontend/utils/listeners.ts:176](../../../src/frontend/utils/listeners.ts#L176): // WIP all stage listeners should not send to all stages, just the connected ids

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-4094713e914b0c42](../history/records/src_frontend_utils_listeners.ts-1.md): hasNewerUpdate: 120 (120 ms).
- [guess] [D-hotspot-c525d0cfcc6246a2](../history/records/src_electron_IPC_main.ts-1.md): Module hotspot: src/electron/IPC/main.ts.
- [guess] [D-hotspot-0b4e59d5ecf3f9a4](../history/records/src_electron_IPC_responsesMain.ts-1.md): Module hotspot: src/electron/IPC/responsesMain.ts.
- [guess] [D-hotspot-651777103065a388](../history/records/src_frontend_IPC_main.ts-1.md): Module hotspot: src/frontend/IPC/main.ts.
- [guess] [D-hotspot-e35a1a0f8f77831a](../history/records/src_frontend_IPC_responsesMain.ts-1.md): Module hotspot: src/frontend/IPC/responsesMain.ts.
- [guess] [D-hotspot-5bda320764e68b73](../history/records/src_frontend_utils_listeners.ts-2.md): Module hotspot: src/frontend/utils/listeners.ts.

[code] All 45 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] No specific F-001–F-019 companion finding directly assigned to this area. See the [documentation roles](../README.md) before borrowing later behavior claims.
