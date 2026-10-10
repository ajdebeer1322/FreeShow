# Editing and undo/redo

## Purpose

[code] Translate text/item/style changes into reversible history operations with stable destinations and cache updates. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/edit/editbox/Editbox.svelte](../generated/files/src_frontend_components_edit_editbox_Editbox.svelte.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/history.ts](../generated/files/src_frontend_components_helpers_history.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/historyActions.ts](../generated/files/src_frontend_components_helpers_historyActions.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/historyStores.ts](../generated/files/src_frontend_components_helpers_historyStores.ts.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Editbox delegates plain/line text rendering to edit components while retaining item/slide context. ([src/frontend/components/edit/editbox/Editbox.svelte:21](../../../src/frontend/components/edit/editbox/Editbox.svelte#L21))
2. [code] The history dispatcher captures old/new data, destination and time, then invokes existing mutation handlers. ([src/frontend/components/helpers/history.ts:39](../../../src/frontend/components/helpers/history.ts#L39))
3. [code] No-change operations are detected instead of creating meaningless undo entries. ([src/frontend/components/helpers/history.ts:26](../../../src/frontend/components/helpers/history.ts#L26))
4. [code] Slide handlers retain explicit show/layout destinations supplied by the caller. ([src/frontend/components/helpers/historyActions.ts:30](../../../src/frontend/components/helpers/historyActions.ts#L30))
5. [code] Store collection edits use shared history/store helpers and related timestamp updates. ([src/frontend/components/helpers/historyStores.ts:21](../../../src/frontend/components/helpers/historyStores.ts#L21))

## Stores and messages

[code] Static scope: 59 files, 88 referenced stores, 3 concrete message keys, 60 timing entries. [Complete dependency index](editing-history.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#actions](../generated/stores/src_frontend_stores.ts_actions.md)
- [code] [src/frontend/stores.ts#activeDrawerTab](../generated/stores/src_frontend_stores.ts_activeDrawerTab.md)
- [code] [src/frontend/stores.ts#activeDropId](../generated/stores/src_frontend_stores.ts_activeDropId.md)
- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activePopup](../generated/stores/src_frontend_stores.ts_activePopup.md)
- [code] [src/frontend/stores.ts#activeProfile](../generated/stores/src_frontend_stores.ts_activeProfile.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeRename](../generated/stores/src_frontend_stores.ts_activeRename.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeStage](../generated/stores/src_frontend_stores.ts_activeStage.md)
- [code] [src/frontend/stores.ts#activeStyle](../generated/stores/src_frontend_stores.ts_activeStyle.md)
- [code] [src/frontend/stores.ts#activeTagFilter](../generated/stores/src_frontend_stores.ts_activeTagFilter.md)
- [code] [src/frontend/stores.ts#activeTimers](../generated/stores/src_frontend_stores.ts_activeTimers.md)
- [code] [src/frontend/stores.ts#alertMessage](../generated/stores/src_frontend_stores.ts_alertMessage.md)
- [code] [src/frontend/stores.ts#allOutputs](../generated/stores/src_frontend_stores.ts_allOutputs.md)
- [code] [src/frontend/stores.ts#audioChannelsData](../generated/stores/src_frontend_stores.ts_audioChannelsData.md)
- [code] [src/frontend/stores.ts#audioFolders](../generated/stores/src_frontend_stores.ts_audioFolders.md)
- [code] [src/frontend/stores.ts#audioPlaylists](../generated/stores/src_frontend_stores.ts_audioPlaylists.md)
- [code] [src/frontend/stores.ts#cachedShowsData](../generated/stores/src_frontend_stores.ts_cachedShowsData.md)
- [code] [src/frontend/stores.ts#categories](../generated/stores/src_frontend_stores.ts_categories.md)
- [code] [src/frontend/stores.ts#cloudUsers](../generated/stores/src_frontend_stores.ts_cloudUsers.md)
- [code] [src/frontend/stores.ts#contextActive](../generated/stores/src_frontend_stores.ts_contextActive.md)
- [code] [src/frontend/stores.ts#copyPasteEdit](../generated/stores/src_frontend_stores.ts_copyPasteEdit.md)

[code] Message families: [OUTPUT](../generated/channels/OUTPUT.md), [REMOTE](../generated/channels/REMOTE.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Undo/redo must target the original show even if active selection changes. ([src/frontend/components/helpers/history.ts:48](../../../src/frontend/components/helpers/history.ts#L48))
- [code] Manual styling can invalidate a template association; reuse the existing history path to retain that behavior. ([src/frontend/components/helpers/history.ts:10](../../../src/frontend/components/helpers/history.ts#L10))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/edit/EditTools.svelte:45](../../../src/frontend/components/edit/EditTools.svelte#L45): // TODO: set filters in template / overlay ? ( && $activeEdit.type !== "template")
- [code] [src/frontend/components/edit/EditTools.svelte:312](../../../src/frontend/components/edit/EditTools.svelte#L312): // WIP refresh edit tools after resetting
- [code] [src/frontend/components/edit/Editor.svelte:46](../../../src/frontend/components/edit/Editor.svelte#L46): // TODO: could add more tabs, like to edit slide layers (like background media)
- [code] [src/frontend/components/edit/MediaTools.svelte:32](../../../src/frontend/components/edit/MediaTools.svelte#L32): // WIP camera / video cropping ??

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-28e9370c85c677b1](../history/records/src_frontend_components_edit_Slides.svelte-1.md): setTimeout: 80 (80 ms).
- [code] [D-timer-3c5f02e61d5904e6](../history/records/src_frontend_components_edit_editbox_EditboxLines.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-ac889c0760866c37](../history/records/src_frontend_components_edit_editbox_EditboxLines.svelte-1.md): setTimeout: 20 (20 ms).
- [code] [D-timer-f2a6563193973600](../history/records/src_frontend_components_edit_editors_SlideEditor.svelte-1.md): setTimeout: 300 (300 ms).
- [code] [D-timer-f65342b60e6c9864](../history/records/src_frontend_components_edit_editors_SlideEditor.svelte-1.md): setTimeout: omitted (0 ms).
- [code] [D-timer-b6fc8e623ce0ed10](../history/records/src_frontend_components_edit_scripts_itemClipboard.ts-1.md): wait: 10 (10 ms).

[code] All 95 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-018](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These refer to a later source snapshot; they are contextual evidence, not runtime verification here.
