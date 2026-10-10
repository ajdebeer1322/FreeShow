# Fork features and their reasons

## Purpose

[code] Locate the fork's output targeting, linked slides, debug log, Messages and WorshipTools additions while preserving their native integration paths. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/helpers/output.ts](../generated/files/src_frontend_components_helpers_output.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/OutputHelper.ts](../generated/files/src_frontend_components_helpers_OutputHelper.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/debugLog.ts](../generated/files/src_frontend_components_helpers_debugLog.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/messageOutput.ts](../generated/files/src_frontend_components_helpers_messageOutput.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/worshipTools/worshipTools.ts](../generated/files/src_electron_worshipTools_worshipTools.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/converters/worshipTools.ts](../generated/files/src_frontend_converters_worshipTools.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Show-level binding defaults and per-slide overrides resolve output IDs/names through the existing presentation helper. ([src/frontend/components/helpers/output.ts:100](../../../src/frontend/components/helpers/output.ts#L100))
2. [code] Linked cards hold outputs that finish their reveals early until the other destinations finish. ([src/frontend/components/helpers/OutputHelper.ts:26](../../../src/frontend/components/helpers/OutputHelper.ts#L26))
3. [code] The debug panel records routing, keyboard and output/render decisions for diagnosis. ([src/frontend/components/helpers/debugLog.ts:41](../../../src/frontend/components/helpers/debugLog.ts#L41))
4. [code] Messages snapshot native artwork to configured outputs; draft edits do not mutate those snapshots. ([src/frontend/components/helpers/messageOutput.ts:7](../../../src/frontend/components/helpers/messageOutput.ts#L7))
5. [code] WorshipTools uses an embedded view and validated IPC instead of importing private browser data directly into the renderer. ([src/electron/worshipTools/worshipTools.ts:5](../../../src/electron/worshipTools/worshipTools.ts#L5))
6. [code] Imported charts are converted with the shared text converter and installed in show/project history. ([src/frontend/converters/worshipTools.ts:32](../../../src/frontend/converters/worshipTools.ts#L32))

## Stores and messages

[code] Static scope: 19 files, 58 referenced stores, 13 concrete message keys, 35 timing entries. [Complete dependency index](fork-features.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/components/helpers/debugLog.ts#debugEntries](../generated/stores/src_frontend_components_helpers_debugLog.ts_debugEntries.md)
- [code] [src/frontend/components/helpers/debugLog.ts#debugPanelOpen](../generated/stores/src_frontend_components_helpers_debugLog.ts_debugPanelOpen.md)
- [code] [src/frontend/components/show/arrangementBar.ts#openArrangementBars](../generated/stores/src_frontend_components_show_arrangementBar.ts_openArrangementBars.md)
- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activeFocus](../generated/stores/src_frontend_stores.ts_activeFocus.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProfile](../generated/stores/src_frontend_stores.ts_activeProfile.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeRename](../generated/stores/src_frontend_stores.ts_activeRename.md)
- [code] [src/frontend/stores.ts#activeScenes](../generated/stores/src_frontend_stores.ts_activeScenes.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeTimers](../generated/stores/src_frontend_stores.ts_activeTimers.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#allOutputs](../generated/stores/src_frontend_stores.ts_allOutputs.md)
- [code] [src/frontend/stores.ts#cachedShowsData](../generated/stores/src_frontend_stores.ts_cachedShowsData.md)
- [code] [src/frontend/stores.ts#categories](../generated/stores/src_frontend_stores.ts_categories.md)
- [code] [src/frontend/stores.ts#connections](../generated/stores/src_frontend_stores.ts_connections.md)
- [code] [src/frontend/stores.ts#currentOutputSettings](../generated/stores/src_frontend_stores.ts_currentOutputSettings.md)
- [code] [src/frontend/stores.ts#currentWindow](../generated/stores/src_frontend_stores.ts_currentWindow.md)
- [code] [src/frontend/stores.ts#customMessageCredits](../generated/stores/src_frontend_stores.ts_customMessageCredits.md)
- [code] [src/frontend/stores.ts#disabledServers](../generated/stores/src_frontend_stores.ts_disabledServers.md)
- [code] [src/frontend/stores.ts#effects](../generated/stores/src_frontend_stores.ts_effects.md)

[code] Message families: [MAIN](../generated/channels/MAIN.md), [OUTPUT](../generated/channels/OUTPUT.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] When leaving a linked card, clear a left-behind slide while retaining its background. ([src/frontend/components/helpers/OutputHelper.ts:27](../../../src/frontend/components/helpers/OutputHelper.ts#L27))
- [code] Normal message operating targets exclude stage outputs. ([src/frontend/components/helpers/messageOutput.ts:17](../../../src/frontend/components/helpers/messageOutput.ts#L17))
- [code] Appending imported songs must preserve service order and project history. ([src/frontend/converters/worshipTools.ts:64](../../../src/frontend/converters/worshipTools.ts#L64))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/helpers/debugLog.ts:2](../../../src/frontend/components/helpers/debugLog.ts#L2): // Everything is plain text so the whole log can be copied and sent along with a bug report.
- [code] [src/frontend/components/helpers/output.ts:391](../../../src/frontend/components/helpers/output.ts#L391): // WIP timer loop does not work if project is changed (should be global for the folder instead of per project item)
- [code] [src/frontend/components/helpers/output.ts:402](../../../src/frontend/components/helpers/output.ts#L402): // WIP smarter logging (based on time or based on percentage played)
- [code] [src/frontend/components/helpers/output.ts:974](../../../src/frontend/components/helpers/output.ts#L974): // WIP check that this stage layout is not disabled & used in a output or (web enabled (disabledServers) + has connection)!

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-ebd954250a2d31f2](../history/records/src_frontend_components_show_Slides.svelte-1.md): setTimeout: 80 (80 ms).
- [code] [D-timer-e42d27608fc0931b](../history/records/src_frontend_components_show_Slides.svelte-1.md): setTimeout: 300 (300 ms).
- [code] [D-timer-247873dbe40216d0](../history/records/src_frontend_components_show_focus_FocusMode.svelte-1.md): hasNewerUpdate: 0 (0 ms).
- [code] [D-workaround-018df926c03484a2](../history/records/src_frontend_components_helpers_debugLog.ts-1.md): // Everything is plain text so the whole log can be copied and sent along with a bug report..
- [guess] [D-hotspot-c1bd07711c914719](../history/records/src_frontend_components_helpers_OutputHelper.ts-1.md): Module hotspot: src/frontend/components/helpers/OutputHelper.ts.
- [guess] [D-hotspot-7af11be48814e880](../history/records/src_frontend_components_helpers_output.ts-1.md): Module hotspot: src/frontend/components/helpers/output.ts.

[code] All 50 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-015](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-018](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These refer to a later source snapshot; they are contextual evidence, not runtime verification here.
