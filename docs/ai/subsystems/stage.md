# Stage displays

## Purpose

[code] Provide stage-specific layouts and projected show/output data to Electron or browser stage viewers. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/stage/StageLayout.svelte](../generated/files/src_frontend_components_stage_StageLayout.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/stageTalk.ts](../generated/files/src_frontend_utils_stageTalk.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/server/stage/util/receiver.ts](../generated/files/src_server_stage_util_receiver.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/server/stage/util/stores.ts](../generated/files/src_server_stage_util_stores.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/listeners.ts](../generated/files/src_frontend_utils_listeners.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/receivers.ts](../generated/files/src_frontend_utils_receivers.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Stage layouts render specialized items rather than reusing the operator UI. ([src/frontend/components/stage/StageLayout.svelte:22](../../../src/frontend/components/stage/StageLayout.svelte#L22))
2. [code] Desktop stageTalk constructs stage-specific responses/projections. ([src/frontend/utils/stageTalk.ts:19](../../../src/frontend/utils/stageTalk.ts#L19))
3. [code] Browser stage handlers populate an independent set of client stores. ([src/server/stage/util/receiver.ts:9](../../../src/server/stage/util/receiver.ts#L9))
4. [code] Selected layout/output and browser errors/connection state live in stage-local stores. ([src/server/stage/util/stores.ts:19](../../../src/server/stage/util/stores.ts#L19))
5. [code] Stage layout updates are coalesced, filtered and sent to clients based on active layout. ([src/frontend/utils/listeners.ts:228](../../../src/frontend/utils/listeners.ts#L228))

## Stores and messages

[code] Static scope: 44 files, 53 referenced stores, 29 concrete message keys, 62 timing entries. [Complete dependency index](stage.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeStage](../generated/stores/src_frontend_stores.ts_activeStage.md)
- [code] [src/frontend/stores.ts#activeTimers](../generated/stores/src_frontend_stores.ts_activeTimers.md)
- [code] [src/frontend/stores.ts#allOutputs](../generated/stores/src_frontend_stores.ts_allOutputs.md)
- [code] [src/frontend/stores.ts#connections](../generated/stores/src_frontend_stores.ts_connections.md)
- [code] [src/frontend/stores.ts#currentOutputSettings](../generated/stores/src_frontend_stores.ts_currentOutputSettings.md)
- [code] [src/frontend/stores.ts#currentWindow](../generated/stores/src_frontend_stores.ts_currentWindow.md)
- [code] [src/frontend/stores.ts#dictionary](../generated/stores/src_frontend_stores.ts_dictionary.md)
- [code] [src/frontend/stores.ts#events](../generated/stores/src_frontend_stores.ts_events.md)
- [code] [src/frontend/stores.ts#groups](../generated/stores/src_frontend_stores.ts_groups.md)
- [code] [src/frontend/stores.ts#labelsDisabled](../generated/stores/src_frontend_stores.ts_labelsDisabled.md)
- [code] [src/frontend/stores.ts#media](../generated/stores/src_frontend_stores.ts_media.md)
- [code] [src/frontend/stores.ts#metronome](../generated/stores/src_frontend_stores.ts_metronome.md)
- [code] [src/frontend/stores.ts#metronomeTimer](../generated/stores/src_frontend_stores.ts_metronomeTimer.md)
- [code] [src/frontend/stores.ts#outputSlideCache](../generated/stores/src_frontend_stores.ts_outputSlideCache.md)
- [code] [src/frontend/stores.ts#outputs](../generated/stores/src_frontend_stores.ts_outputs.md)
- [code] [src/frontend/stores.ts#projects](../generated/stores/src_frontend_stores.ts_projects.md)
- [code] [src/frontend/stores.ts#refreshEditSlide](../generated/stores/src_frontend_stores.ts_refreshEditSlide.md)
- [code] [src/frontend/stores.ts#settingsTab](../generated/stores/src_frontend_stores.ts_settingsTab.md)
- [code] [src/frontend/stores.ts#showsCache](../generated/stores/src_frontend_stores.ts_showsCache.md)

[code] Message families: [STAGE](../generated/channels/STAGE.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Preserve requested-output identity when projecting timing/progress. ([src/server/stage/util/receiver.ts:64](../../../src/server/stage/util/receiver.ts#L64))
- [code] The output BUFFER path drops frames older than 100 ms; preserve freshness/backpressure behavior. ([src/frontend/utils/receivers.ts:110](../../../src/frontend/utils/receivers.ts#L110))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/stage/StageSlide.svelte:63](../../../src/frontend/components/stage/StageSlide.svelte#L63): <!-- WIP duplicate of StageLayout.svelte (pretty much) -->
- [code] [src/frontend/components/stage/Stagebox.svelte:126](../../../src/frontend/components/stage/Stagebox.svelte#L126): // TODO: history??
- [code] [src/frontend/components/stage/Stagebox.svelte:425](../../../src/frontend/components/stage/Stagebox.svelte#L425): <!-- WIP this only includes "next" slide background -->
- [code] [src/frontend/components/stage/items/SlideText.svelte:71](../../../src/frontend/components/stage/items/SlideText.svelte#L71): // WIP remove "empty" items

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-22a3bf2d25721b16](../history/records/src_server_stage_App.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-61c94421d1bc6be5](../history/records/src_server_stage_components_Textbox.svelte-1.md): setTimeout: 100 (100 ms).
- [code] [D-timer-778e9932eff640f2](../history/records/src_server_stage_html_navigation.js-1.md): setTimeout: 100 (100 ms).

[code] All 70 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-004](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These refer to a later source snapshot; they are contextual evidence, not runtime verification here.
