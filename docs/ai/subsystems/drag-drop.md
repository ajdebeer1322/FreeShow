# Drag/drop destination and insertion rules

## Purpose

[code] Resolve source selections and explicit destinations into existing reversible media/slide/project operations. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/system/SelectElem.svelte](../generated/files/src_frontend_components_system_SelectElem.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/system/DropArea.svelte](../generated/files/src_frontend_components_system_DropArea.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/drop.ts](../generated/files/src_frontend_components_helpers_drop.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/dropActions.ts](../generated/files/src_frontend_components_helpers_dropActions.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/slideTransfer.ts](../generated/files/src_frontend_components_helpers_slideTransfer.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] SelectElem supplies thumbnail destination metadata and selection information. ([src/frontend/components/system/SelectElem.svelte:331](../../../src/frontend/components/system/SelectElem.svelte#L331))
2. [code] DropArea routes internal/native-file/touch drops to the shared dispatcher. ([src/frontend/components/system/DropArea.svelte:4](../../../src/frontend/components/system/DropArea.svelte#L4))
3. [code] Precise thumbnail data overrides the containing area's fallback show/layout destination. ([src/frontend/components/helpers/drop.ts:55](../../../src/frontend/components/helpers/drop.ts#L55))
4. [code] The shared dispatcher advances end-edge insertion once; downstream handlers must not increment again. ([src/frontend/components/helpers/drop.ts:59](../../../src/frontend/components/helpers/drop.ts#L59))
5. [code] Type-specific handlers return history operations rather than building a parallel mutation system. ([src/frontend/components/helpers/dropActions.ts:49](../../../src/frontend/components/helpers/dropActions.ts#L49))
6. [code] Cross-show transfer centralizes ID regeneration, lock/profile checks and explicit destination history. ([src/frontend/components/helpers/slideTransfer.ts:163](../../../src/frontend/components/helpers/slideTransfer.ts#L163))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 7 files, 42 referenced stores, 2 concrete message keys, 11 timing entries. [Complete dependency index](drag-drop.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#activeDrawerTab](../generated/stores/src_frontend_stores.ts_activeDrawerTab.md)
- [code] [src/frontend/stores.ts#activeDropId](../generated/stores/src_frontend_stores.ts_activeDropId.md)
- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activeFocus](../generated/stores/src_frontend_stores.ts_activeFocus.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeRename](../generated/stores/src_frontend_stores.ts_activeRename.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#audioFolders](../generated/stores/src_frontend_stores.ts_audioFolders.md)
- [code] [src/frontend/stores.ts#audioPlaylists](../generated/stores/src_frontend_stores.ts_audioPlaylists.md)
- [code] [src/frontend/stores.ts#audioStreams](../generated/stores/src_frontend_stores.ts_audioStreams.md)
- [code] [src/frontend/stores.ts#cachedShowsData](../generated/stores/src_frontend_stores.ts_cachedShowsData.md)
- [code] [src/frontend/stores.ts#deletedShows](../generated/stores/src_frontend_stores.ts_deletedShows.md)
- [code] [src/frontend/stores.ts#disableDragging](../generated/stores/src_frontend_stores.ts_disableDragging.md)
- [code] [src/frontend/stores.ts#drawerTabsData](../generated/stores/src_frontend_stores.ts_drawerTabsData.md)
- [code] [src/frontend/stores.ts#editingProjectTemplate](../generated/stores/src_frontend_stores.ts_editingProjectTemplate.md)
- [code] [src/frontend/stores.ts#effectsLibrary](../generated/stores/src_frontend_stores.ts_effectsLibrary.md)
- [code] [src/frontend/stores.ts#focusMode](../generated/stores/src_frontend_stores.ts_focusMode.md)
- [code] [src/frontend/stores.ts#groups](../generated/stores/src_frontend_stores.ts_groups.md)
- [code] [src/frontend/stores.ts#media](../generated/stores/src_frontend_stores.ts_media.md)
- [code] [src/frontend/stores.ts#mediaFolders](../generated/stores/src_frontend_stores.ts_mediaFolders.md)
- [code] [src/frontend/stores.ts#notFound](../generated/stores/src_frontend_stores.ts_notFound.md)

[code] Message families: [MAIN](../generated/channels/MAIN.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Preserve before/after/center meaning all the way from trigger to operation. ([src/frontend/components/helpers/drop.ts:61](../../../src/frontend/components/helpers/drop.ts#L61))
- [code] Song slides are copied rather than moved when transfer would damage reusable arrangements. ([src/frontend/components/helpers/slideTransfer.ts:379](../../../src/frontend/components/helpers/slideTransfer.ts#L379))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/helpers/dropActions.ts:224](../../../src/frontend/components/helpers/dropActions.ts#L224): // WIP no URLs for now!
- [code] [src/frontend/components/helpers/dropActions.ts:609](../../../src/frontend/components/helpers/dropActions.ts#L609): // WIP drop .show/.json into show categories???
- [code] [src/frontend/components/helpers/dropActions.ts:610](../../../src/frontend/components/helpers/dropActions.ts#L610): // WIP drop .template
- [code] [src/frontend/components/helpers/dropActions.ts:611](../../../src/frontend/components/helpers/dropActions.ts#L611): // WIP drop bibles??

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-e3674dff4196a3ff](../history/records/src_frontend_components_system_SelectElem.svelte-1.md): setTimeout: 50 (50 ms).
- [code] [D-fork-174674236734d953](../history/records/src_frontend_components_helpers_historyActions.ts-1.md): Add Apply to new slides to the next slide timer.
- [code] [D-fork-b8784f3f034095ef](../history/records/src_frontend_components_helpers_slideTransfer.ts-1.md): Copy instead of move when dragging song slides to another show.

[code] All 23 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] No specific F-001–F-019 companion finding directly assigned to this area. See the [documentation roles](../README.md) before borrowing later behavior claims.
