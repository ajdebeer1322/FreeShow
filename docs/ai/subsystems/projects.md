# Projects and continuous Show view

## Purpose

[code] Compose ordered show/media/section occurrences and browse them without implicitly presenting content. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/types/Projects.ts](../generated/files/src_types_Projects.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/show/project.ts](../generated/files/src_frontend_components_show_project.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/show/Show.svelte](../generated/files/src_frontend_components_show_Show.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/show/focus/FocusItem.svelte](../generated/files/src_frontend_components_show_focus_FocusItem.svelte.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Project order is an array of occurrence references; the same show can appear with different arrangements. ([src/types/Projects.ts:15](../../../src/types/Projects.ts#L15))
2. [code] Project selection opens a specific project/index item through shared helpers. ([src/frontend/components/show/project.ts:21](../../../src/frontend/components/show/project.ts#L21))
3. [code] The fork reuses FocusMode normalView for continuous project browsing while retaining normal editing and toolbars. ([src/frontend/components/show/Show.svelte:72](../../../src/frontend/components/show/Show.svelte#L72))
4. [code] Continuous items reuse the native Slides renderer and activation path. ([src/frontend/components/show/focus/FocusItem.svelte:11](../../../src/frontend/components/show/focus/FocusItem.svelte#L11))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 10 files, 32 referenced stores, 3 concrete message keys, 15 timing entries. [Complete dependency index](projects.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/components/show/arrangementBar.ts#openArrangementBars](../generated/stores/src_frontend_components_show_arrangementBar.ts_openArrangementBars.md)
- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activeFocus](../generated/stores/src_frontend_stores.ts_activeFocus.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeRename](../generated/stores/src_frontend_stores.ts_activeRename.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#autoOpenedTimeline](../generated/stores/src_frontend_stores.ts_autoOpenedTimeline.md)
- [code] [src/frontend/stores.ts#categories](../generated/stores/src_frontend_stores.ts_categories.md)
- [code] [src/frontend/stores.ts#contentProviderData](../generated/stores/src_frontend_stores.ts_contentProviderData.md)
- [code] [src/frontend/stores.ts#dictionary](../generated/stores/src_frontend_stores.ts_dictionary.md)
- [code] [src/frontend/stores.ts#drawer](../generated/stores/src_frontend_stores.ts_drawer.md)
- [code] [src/frontend/stores.ts#editingProjectTemplate](../generated/stores/src_frontend_stores.ts_editingProjectTemplate.md)
- [code] [src/frontend/stores.ts#focusMode](../generated/stores/src_frontend_stores.ts_focusMode.md)
- [code] [src/frontend/stores.ts#folders](../generated/stores/src_frontend_stores.ts_folders.md)
- [code] [src/frontend/stores.ts#openedFolders](../generated/stores/src_frontend_stores.ts_openedFolders.md)
- [code] [src/frontend/stores.ts#outLocked](../generated/stores/src_frontend_stores.ts_outLocked.md)
- [code] [src/frontend/stores.ts#outputs](../generated/stores/src_frontend_stores.ts_outputs.md)
- [code] [src/frontend/stores.ts#overlays](../generated/stores/src_frontend_stores.ts_overlays.md)
- [code] [src/frontend/stores.ts#playerVideos](../generated/stores/src_frontend_stores.ts_playerVideos.md)
- [code] [src/frontend/stores.ts#projectTemplates](../generated/stores/src_frontend_stores.ts_projectTemplates.md)
- [code] [src/frontend/stores.ts#projectView](../generated/stores/src_frontend_stores.ts_projectView.md)
- [code] [src/frontend/stores.ts#projects](../generated/stores/src_frontend_stores.ts_projects.md)
- [code] [src/frontend/stores.ts#providerConnections](../generated/stores/src_frontend_stores.ts_providerConnections.md)

[code] Message families: [MAIN](../generated/channels/MAIN.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Preserve section lock/collapse metadata during project edits. ([src/types/Projects.ts:19](../../../src/types/Projects.ts#L19))
- [code] Carry the occurrence index into slide activation; show ID alone cannot identify repeated project items. ([src/frontend/components/show/focus/FocusItem.svelte:71](../../../src/frontend/components/show/focus/FocusItem.svelte#L71))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/show/Projects.svelte:385](../../../src/frontend/components/show/Projects.svelte#L385): <!-- WIP use context menu style -->
- [code] [src/frontend/components/show/Projects.svelte:410](../../../src/frontend/components/show/Projects.svelte#L410): <!-- WIP set sourcePath to export path -->
- [code] [src/frontend/components/show/focus/FocusItem.svelte:73](../../../src/frontend/components/show/focus/FocusItem.svelte#L73): <!-- WIP change layout??? -->

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-247873dbe40216d0](../history/records/src_frontend_components_show_focus_FocusMode.svelte-1.md): hasNewerUpdate: 0 (0 ms).
- [code] [D-timer-0cc66d4445cf5198](../history/records/src_frontend_components_show_project.ts-1.md): setTimeout: 50 (50 ms).
- [code] [D-fork-755ae106e1ed848c](../history/records/src_frontend_components_show_Show.svelte-1.md): Add a thin slide bar above the drawer and move arrangements into the Groups tab.

[code] All 19 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] No specific F-001–F-019 companion finding directly assigned to this area. See the [documentation roles](../README.md) before borrowing later behavior claims.
