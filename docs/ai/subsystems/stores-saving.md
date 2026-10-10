# Stores and saving

## Purpose

[code] Separate reactive operating state from the serialized groups owned by Electron. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/stores.ts](../generated/files/src_frontend_stores.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/save.ts](../generated/files/src_frontend_utils_save.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/IPC/responsesMain.ts](../generated/files/src_electron_IPC_responsesMain.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/data/save.ts](../generated/files/src_electron_data_save.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/data/store.ts](../generated/files/src_electron_data_store.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] The central outputs store contains configuration and live output state; store lifetime alone does not prove persistence. ([src/frontend/stores.ts:384](../../../src/frontend/stores.ts#L384))
2. [code] Save clones outputs, removes live messages and resets WebRTC/RTMP streaming flags before serialization. ([src/frontend/utils/save.ts:152](../../../src/frontend/utils/save.ts#L152))
3. [code] Saved settings, projects, overlays, caches and history are assembled into named payload groups. ([src/frontend/utils/save.ts:218](../../../src/frontend/utils/save.ts#L218))
4. [code] MAIN/SAVE dispatches the payload to Electron save. ([src/electron/IPC/responsesMain.ts:84](../../../src/electron/IPC/responsesMain.ts#L84))
5. [code] Electron writes grouped stores and separate show/scripture files; saving is not just one settings write. ([src/electron/data/save.ts:21](../../../src/electron/data/save.ts#L21))
6. [code] Store filenames/defaults/portable membership are declared centrally. ([src/electron/data/store.ts:30](../../../src/electron/data/store.ts#L30))

## Stores and messages

[code] Static scope: 5 files, 108 referenced stores, 75 concrete message keys, 25 timing entries. [Complete dependency index](stores-saving.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#actionTags](../generated/stores/src_frontend_stores.ts_actionTags.md)
- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeScenes](../generated/stores/src_frontend_stores.ts_activeScenes.md)
- [code] [src/frontend/stores.ts#activeScripture](../generated/stores/src_frontend_stores.ts_activeScripture.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeTimers](../generated/stores/src_frontend_stores.ts_activeTimers.md)
- [code] [src/frontend/stores.ts#ai](../generated/stores/src_frontend_stores.ts_ai.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#alertUpdates](../generated/stores/src_frontend_stores.ts_alertUpdates.md)
- [code] [src/frontend/stores.ts#audioChannelsData](../generated/stores/src_frontend_stores.ts_audioChannelsData.md)
- [code] [src/frontend/stores.ts#audioData](../generated/stores/src_frontend_stores.ts_audioData.md)
- [code] [src/frontend/stores.ts#audioEffectPresets](../generated/stores/src_frontend_stores.ts_audioEffectPresets.md)
- [code] [src/frontend/stores.ts#audioEffects](../generated/stores/src_frontend_stores.ts_audioEffects.md)
- [code] [src/frontend/stores.ts#audioFolders](../generated/stores/src_frontend_stores.ts_audioFolders.md)
- [code] [src/frontend/stores.ts#audioRouting](../generated/stores/src_frontend_stores.ts_audioRouting.md)
- [code] [src/frontend/stores.ts#autoOutput](../generated/stores/src_frontend_stores.ts_autoOutput.md)
- [code] [src/frontend/stores.ts#autosave](../generated/stores/src_frontend_stores.ts_autosave.md)
- [code] [src/frontend/stores.ts#cachedShowsData](../generated/stores/src_frontend_stores.ts_cachedShowsData.md)
- [code] [src/frontend/stores.ts#calendarAddShow](../generated/stores/src_frontend_stores.ts_calendarAddShow.md)
- [code] [src/frontend/stores.ts#categories](../generated/stores/src_frontend_stores.ts_categories.md)
- [code] [src/frontend/stores.ts#cloudSyncData](../generated/stores/src_frontend_stores.ts_cloudSyncData.md)
- [code] [src/frontend/stores.ts#colorbars](../generated/stores/src_frontend_stores.ts_colorbars.md)

[code] Message families: [MAIN](../generated/channels/MAIN.md), [OUTPUT](../generated/channels/OUTPUT.md), [REMOTE](../generated/channels/REMOTE.md), [STAGE](../generated/channels/STAGE.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Tests must isolate store paths as well as the separate presentation data directory. ([src/electron/data/store.ts:26](../../../src/electron/data/store.ts#L26))
- [code] Persist definitions, not live notices; restarting must not relaunch an operating message. ([src/frontend/utils/save.ts:154](../../../src/frontend/utils/save.ts#L154))
- [code] Preserve edit timestamps used by cloud comparisons rather than treating file mtime as edit intent. ([src/electron/data/save.ts:16](../../../src/electron/data/save.ts#L16))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/utils/listeners.ts:106](../../../src/frontend/utils/listeners.ts#L106): // WIP convertBackgrounds is triggered many times...
- [code] [src/frontend/utils/listeners.ts:108](../../../src/frontend/utils/listeners.ts#L108): // TODO: ?
- [code] [src/frontend/utils/listeners.ts:115](../../../src/frontend/utils/listeners.ts#L115): // TODO: this, timedout +++
- [code] [src/frontend/utils/listeners.ts:176](../../../src/frontend/utils/listeners.ts#L176): // WIP all stage listeners should not send to all stages, just the connected ids

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-4094713e914b0c42](../history/records/src_frontend_utils_listeners.ts-1.md): hasNewerUpdate: 120 (120 ms).
- [guess] [D-hotspot-2dc83fd7826af5f5](../history/records/src_electron_data_save.ts-1.md): Module hotspot: src/electron/data/save.ts.
- [guess] [D-hotspot-5bda320764e68b73](../history/records/src_frontend_utils_listeners.ts-2.md): Module hotspot: src/frontend/utils/listeners.ts.
- [guess] [D-hotspot-613d3d6405b1c316](../history/records/src_frontend_utils_save.ts-1.md): Module hotspot: src/frontend/utils/save.ts.

[code] All 34 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-008](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-010](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These refer to a later source snapshot; they are contextual evidence, not runtime verification here.
