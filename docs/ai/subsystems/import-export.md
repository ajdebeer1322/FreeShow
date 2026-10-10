# Import/export and conversion

## Purpose

[code] Convert external documents/media into native shows and export data through Electron filesystem/archive services. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/electron/data/import.ts](../generated/files/src_electron_data_import.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/converters/txt.ts](../generated/files/src_frontend_converters_txt.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/converters/worshipTools.ts](../generated/files/src_frontend_converters_worshipTools.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/electron/data/export.ts](../generated/files/src_electron_data_export.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/App.svelte](../generated/files/src_frontend_App.svelte.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Electron owns selecting/reading imported files and dispatching format-specific processing. ([src/electron/data/import.ts:92](../../../src/electron/data/import.ts#L92))
2. [code] Text conversion constructs native slide/group/layout structures shared by multiple import sources. ([src/frontend/converters/txt.ts:29](../../../src/frontend/converters/txt.ts#L29))
3. [code] WorshipTools conversion installs generated shows through existing SHOWS history. ([src/frontend/converters/worshipTools.ts:57](../../../src/frontend/converters/worshipTools.ts#L57))
4. [code] Export uses main-process path/archive services instead of renderer Node access. ([src/electron/data/export.ts:3](../../../src/electron/data/export.ts#L3))
5. [code] PDF has its own renderer branch while retaining native presentation data. ([src/frontend/App.svelte:69](../../../src/frontend/App.svelte#L69))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 41 files, 36 referenced stores, 14 concrete message keys, 27 timing entries. [Complete dependency index](import-export.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#actionTags](../generated/stores/src_frontend_stores.ts_actionTags.md)
- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activeDrawerTab](../generated/stores/src_frontend_stores.ts_activeDrawerTab.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeRename](../generated/stores/src_frontend_stores.ts_activeRename.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#calendars](../generated/stores/src_frontend_stores.ts_calendars.md)
- [code] [src/frontend/stores.ts#categories](../generated/stores/src_frontend_stores.ts_categories.md)
- [code] [src/frontend/stores.ts#currentWindow](../generated/stores/src_frontend_stores.ts_currentWindow.md)
- [code] [src/frontend/stores.ts#dictionary](../generated/stores/src_frontend_stores.ts_dictionary.md)
- [code] [src/frontend/stores.ts#drawerTabsData](../generated/stores/src_frontend_stores.ts_drawerTabsData.md)
- [code] [src/frontend/stores.ts#editingProjectTemplate](../generated/stores/src_frontend_stores.ts_editingProjectTemplate.md)
- [code] [src/frontend/stores.ts#effects](../generated/stores/src_frontend_stores.ts_effects.md)
- [code] [src/frontend/stores.ts#events](../generated/stores/src_frontend_stores.ts_events.md)
- [code] [src/frontend/stores.ts#focusMode](../generated/stores/src_frontend_stores.ts_focusMode.md)
- [code] [src/frontend/stores.ts#folders](../generated/stores/src_frontend_stores.ts_folders.md)
- [code] [src/frontend/stores.ts#formatNewShow](../generated/stores/src_frontend_stores.ts_formatNewShow.md)
- [code] [src/frontend/stores.ts#globalTags](../generated/stores/src_frontend_stores.ts_globalTags.md)
- [code] [src/frontend/stores.ts#groups](../generated/stores/src_frontend_stores.ts_groups.md)
- [code] [src/frontend/stores.ts#media](../generated/stores/src_frontend_stores.ts_media.md)
- [code] [src/frontend/stores.ts#overlays](../generated/stores/src_frontend_stores.ts_overlays.md)

[code] Message families: [EXPORT](../generated/channels/EXPORT.md), [MAIN](../generated/channels/MAIN.md), [STARTUP](../generated/channels/STARTUP.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Separate conversion from installation so multiple songs can form one deliberate history operation. ([src/frontend/converters/worshipTools.ts:43](../../../src/frontend/converters/worshipTools.ts#L43))
- [code] Preserve native show IDs/references and cache updates through existing import helpers. ([src/electron/data/import.ts:92](../../../src/electron/data/import.ts#L92))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/electron/data/export.ts:212](../../../src/electron/data/export.ts#L212): // WIP do this in frontend
- [code] [src/electron/output/ppt/presentation.ts:183](../../../src/electron/output/ppt/presentation.ts#L183): // WIP black screen not working
- [code] [src/frontend/components/export/Pdf.svelte:34](../../../src/frontend/components/export/Pdf.svelte#L34): // WIP get ref...
- [code] [src/frontend/components/export/Pdf.svelte:418](../../../src/frontend/components/export/Pdf.svelte#L418): <!-- TODO: different slide heights! -->

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-workaround-92bb108338e45032](../history/records/src_frontend_converters_importHelpers.ts-1.md): // check & fix looping items bug.
- [guess] [D-hotspot-75db8ee8f29d950a](../history/records/src_electron_output_ppt_libreConverter.ts-1.md): Module hotspot: src/electron/output/ppt/libreConverter.ts.
- [code] [D-hotspot-463a60d102ffbf66](../history/records/src_electron_output_ppt_pptToShow.ts-1.md): Module hotspot: src/electron/output/ppt/pptToShow.ts.
- [guess] [D-hotspot-7fa603b17805ac69](../history/records/src_electron_output_ppt_presentation.ts-1.md): Module hotspot: src/electron/output/ppt/presentation.ts.

[code] All 49 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] No specific F-001–F-019 companion finding directly assigned to this area. See the [documentation roles](../README.md) before borrowing later behavior claims.
