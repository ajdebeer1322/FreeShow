# Slide activation and presentation

## Purpose

[code] Turn explicit activation into live output updates, attached slide actions and subsequent stepping. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/show/Slides.svelte](../generated/files/src_frontend_components_show_Slides.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/output.ts](../generated/files/src_frontend_components_helpers_output.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/showActions.ts](../generated/files/src_frontend_components_helpers_showActions.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/OutputHelper.ts](../generated/files/src_frontend_components_helpers_OutputHelper.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/utils/shortcuts.ts](../generated/files/src_frontend_utils_shortcuts.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] A thumbnail click evaluates trigger/reveal/line state before calling the shared presentation helpers. ([src/frontend/components/show/Slides.svelte:102](../../../src/frontend/components/show/Slides.svelte#L102))
2. [code] Activation supplies show, layout, flattened index and optional project occurrence index. ([src/frontend/components/show/Slides.svelte:159](../../../src/frontend/components/show/Slides.svelte#L159))
3. [code] setOutput resolves slide/show bindings or an explicit output before updating live content and related actions/audio. ([src/frontend/components/helpers/output.ts:158](../../../src/frontend/components/helpers/output.ts#L158))
4. [code] updateOut applies associated background, overlay, timer and action behavior. ([src/frontend/components/helpers/showActions.ts:310](../../../src/frontend/components/helpers/showActions.ts#L310))
5. [code] Keyboard stepping groups linked cards, holds outputs still waiting for another output's reveal, then advances destinations. ([src/frontend/components/helpers/OutputHelper.ts:23](../../../src/frontend/components/helpers/OutputHelper.ts#L23))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 5 files, 82 referenced stores, 18 concrete message keys, 42 timing entries. [Complete dependency index](presentation.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/components/helpers/debugLog.ts#debugPanelOpen](../generated/stores/src_frontend_components_helpers_debugLog.ts_debugPanelOpen.md)
- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activeDrawerTab](../generated/stores/src_frontend_stores.ts_activeDrawerTab.md)
- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activeFocus](../generated/stores/src_frontend_stores.ts_activeFocus.md)
- [code] [src/frontend/stores.ts#activeInteractions](../generated/stores/src_frontend_stores.ts_activeInteractions.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeRename](../generated/stores/src_frontend_stores.ts_activeRename.md)
- [code] [src/frontend/stores.ts#activeScenes](../generated/stores/src_frontend_stores.ts_activeScenes.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeStage](../generated/stores/src_frontend_stores.ts_activeStage.md)
- [code] [src/frontend/stores.ts#activeTimers](../generated/stores/src_frontend_stores.ts_activeTimers.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#allOutputs](../generated/stores/src_frontend_stores.ts_allOutputs.md)
- [code] [src/frontend/stores.ts#audioChannelsData](../generated/stores/src_frontend_stores.ts_audioChannelsData.md)
- [code] [src/frontend/stores.ts#audioData](../generated/stores/src_frontend_stores.ts_audioData.md)
- [code] [src/frontend/stores.ts#cachedDynamicValues](../generated/stores/src_frontend_stores.ts_cachedDynamicValues.md)
- [code] [src/frontend/stores.ts#cachedShowsData](../generated/stores/src_frontend_stores.ts_cachedShowsData.md)
- [code] [src/frontend/stores.ts#categories](../generated/stores/src_frontend_stores.ts_categories.md)
- [code] [src/frontend/stores.ts#connections](../generated/stores/src_frontend_stores.ts_connections.md)
- [code] [src/frontend/stores.ts#contextActive](../generated/stores/src_frontend_stores.ts_contextActive.md)
- [code] [src/frontend/stores.ts#currentOutputSettings](../generated/stores/src_frontend_stores.ts_currentOutputSettings.md)

[code] Message families: [MAIN](../generated/channels/MAIN.md), [OUTPUT](../generated/channels/OUTPUT.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Honor output lock before presentation mutation. ([src/frontend/components/helpers/OutputHelper.ts:113](../../../src/frontend/components/helpers/OutputHelper.ts#L113))
- [code] Keep configured output targeting explicit; reusing setOutput preserves existing routing instead of creating a second presentation engine. ([src/frontend/components/helpers/output.ts:165](../../../src/frontend/components/helpers/output.ts#L165))
- [code] Route keyboard stepping through OutputHelper to avoid double activation from independent views. ([src/frontend/utils/shortcuts.ts:397](../../../src/frontend/utils/shortcuts.ts#L397))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/helpers/output.ts:391](../../../src/frontend/components/helpers/output.ts#L391): // WIP timer loop does not work if project is changed (should be global for the folder instead of per project item)
- [code] [src/frontend/components/helpers/output.ts:402](../../../src/frontend/components/helpers/output.ts#L402): // WIP smarter logging (based on time or based on percentage played)
- [code] [src/frontend/components/helpers/output.ts:974](../../../src/frontend/components/helpers/output.ts#L974): // WIP check that this stage layout is not disabled & used in a output or (web enabled (disabledServers) + has connection)!
- [code] [src/frontend/components/helpers/output.ts:1101](../../../src/frontend/components/helpers/output.ts#L1101): // WIP history

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-c1b7dd5471c77c43](../history/records/src_frontend_components_helpers_showActions.ts-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-2efd07edaaf6af61](../history/records/src_frontend_components_helpers_showActions.ts-1.md): setTimeout: 200 (200 ms).
- [code] [D-timer-ebd954250a2d31f2](../history/records/src_frontend_components_show_Slides.svelte-1.md): setTimeout: 80 (80 ms).
- [code] [D-timer-e42d27608fc0931b](../history/records/src_frontend_components_show_Slides.svelte-1.md): setTimeout: 300 (300 ms).
- [guess] [D-hotspot-c1bd07711c914719](../history/records/src_frontend_components_helpers_OutputHelper.ts-1.md): Module hotspot: src/frontend/components/helpers/OutputHelper.ts.
- [guess] [D-hotspot-7af11be48814e880](../history/records/src_frontend_components_helpers_output.ts-1.md): Module hotspot: src/frontend/components/helpers/output.ts.

[code] All 64 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-009](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-014](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These are companion experiments; see each finding’s evidence and do not treat it as observation of every configuration.
