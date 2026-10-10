# Settings, defaults and runtime propagation

## Purpose

[code] Expose typed operating preferences, initialize defaults and propagate changes to windows/services. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/electron/data/defaults.ts](../generated/files/src_electron_data_defaults.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/settings/Settings.svelte](../generated/files/src_frontend_components_settings_Settings.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/updateSettings.ts](../generated/files/src_frontend_utils_updateSettings.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/save.ts](../generated/files/src_frontend_utils_save.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/settings/tabs/Outputs.svelte](../generated/files/src_frontend_components_settings_tabs_Outputs.svelte.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Electron defaults define persisted settings keys separately from config and synced settings. ([src/electron/data/defaults.ts:16](../../../src/electron/data/defaults.ts#L16))
2. [code] Settings UI selects specialized components from settingsTab rather than storing one independent settings object. ([src/frontend/components/settings/Settings.svelte:29](../../../src/frontend/components/settings/Settings.svelte#L29))
3. [code] Some output setting changes require restarting output windows, not just modifying rendered CSS. ([src/frontend/utils/updateSettings.ts:149](../../../src/frontend/utils/updateSettings.ts#L149))
4. [code] Persistence maps selected stores into settings; transient UI stores are not automatically saved. ([src/frontend/utils/save.ts:159](../../../src/frontend/utils/save.ts#L159))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 28 files, 120 referenced stores, 31 concrete message keys, 42 timing entries. [Complete dependency index](settings.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#actionTags](../generated/stores/src_frontend_stores.ts_actionTags.md)
- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activeDrawerTab](../generated/stores/src_frontend_stores.ts_activeDrawerTab.md)
- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProfile](../generated/stores/src_frontend_stores.ts_activeProfile.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeScenes](../generated/stores/src_frontend_stores.ts_activeScenes.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeStage](../generated/stores/src_frontend_stores.ts_activeStage.md)
- [code] [src/frontend/stores.ts#activeStyle](../generated/stores/src_frontend_stores.ts_activeStyle.md)
- [code] [src/frontend/stores.ts#activeTriggerFunction](../generated/stores/src_frontend_stores.ts_activeTriggerFunction.md)
- [code] [src/frontend/stores.ts#ai](../generated/stores/src_frontend_stores.ts_ai.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#alertUpdates](../generated/stores/src_frontend_stores.ts_alertUpdates.md)
- [code] [src/frontend/stores.ts#audioChannelsData](../generated/stores/src_frontend_stores.ts_audioChannelsData.md)
- [code] [src/frontend/stores.ts#audioEffectPresets](../generated/stores/src_frontend_stores.ts_audioEffectPresets.md)
- [code] [src/frontend/stores.ts#audioEffects](../generated/stores/src_frontend_stores.ts_audioEffects.md)
- [code] [src/frontend/stores.ts#audioFolders](../generated/stores/src_frontend_stores.ts_audioFolders.md)
- [code] [src/frontend/stores.ts#audioPlaylists](../generated/stores/src_frontend_stores.ts_audioPlaylists.md)
- [code] [src/frontend/stores.ts#audioRouting](../generated/stores/src_frontend_stores.ts_audioRouting.md)
- [code] [src/frontend/stores.ts#audioStreams](../generated/stores/src_frontend_stores.ts_audioStreams.md)
- [code] [src/frontend/stores.ts#autoOutput](../generated/stores/src_frontend_stores.ts_autoOutput.md)

[code] Message families: [BLACKMAGIC](../generated/channels/BLACKMAGIC.md), [MAIN](../generated/channels/MAIN.md), [NDI](../generated/channels/NDI.md), [OMT](../generated/channels/OMT.md), [OUTPUT](../generated/channels/OUTPUT.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Distinguish local settings from syncable settings and main-process config. ([src/electron/data/defaults.ts:93](../../../src/electron/data/defaults.ts#L93))
- [code] Preview transition settings include a workaround; verify both preview and output behavior before changing defaults. ([src/frontend/components/settings/tabs/Outputs.svelte:98](../../../src/frontend/components/settings/tabs/Outputs.svelte#L98))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/settings/tabs/AudioRouting.svelte:402](../../../src/frontend/components/settings/tabs/AudioRouting.svelte#L402): // WIP zoom?
- [code] [src/frontend/components/settings/tabs/Connection.svelte:29](../../../src/frontend/components/settings/tabs/Connection.svelte#L29): // WIP reset in popups
- [code] [src/frontend/components/settings/tabs/General.svelte:22](../../../src/frontend/components/settings/tabs/General.svelte#L22): // WIP set calendar starting day
- [code] [src/frontend/components/settings/tabs/General.svelte:23](../../../src/frontend/components/settings/tabs/General.svelte#L23): // WIP change date format (DD.MM.YYYY, YYYY-MM-DD)

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-447c94fa7f1fb475](../history/records/src_frontend_components_settings_tabs_Outputs.svelte-1.md): setTimeout: 100 (100 ms).
- [code] [D-timer-9ad0217da931d2a8](../history/records/src_frontend_components_settings_tabs_Outputs.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-7df79813576661ba](../history/records/src_frontend_utils_updateSettings.ts-1.md): setTimeout: get(os).platform === "darwin" ? 3500 : 2500 (dynamic ms).
- [code] [D-timer-e7a8dc71cff4615f](../history/records/src_frontend_utils_updateSettings.ts-1.md): setTimeout: 10 (10 ms).
- [code] [D-timer-efca5a8c148aab35](../history/records/src_frontend_utils_updateSettings.ts-1.md): setTimeout: 10 (10 ms).
- [code] [D-workaround-ed0583a51419340e](../history/records/src_frontend_components_settings_tabs_Outputs.svelte-1.md): // disable preview output transitions (to prevent visual svelte bug).

[code] All 56 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-017](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These are companion experiments; see each finding’s evidence and do not treat it as observation of every configuration.
