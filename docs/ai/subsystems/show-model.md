# Show, slide and layout model

## Purpose

[code] Represent reusable slide content independently of layout order and project occurrences. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/types/Show.ts](../generated/files/src_types_Show.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/types/Projects.ts](../generated/files/src_types_Projects.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/shows.ts](../generated/files/src_frontend_components_helpers_shows.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/helpers/setShow.ts](../generated/files/src_frontend_components_helpers_setShow.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/show/Slides.svelte](../generated/files/src_frontend_components_show_Slides.svelte.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] A Show owns keyed slides, layouts and media; settings select an active layout and optional output bindings. ([src/types/Show.ts:7](../../../src/types/Show.ts#L7))
2. [code] A project occurrence can override layout, notes and other item metadata without creating a new show ID. ([src/types/Projects.ts:24](../../../src/types/Projects.ts#L24))
3. [code] The _show accessor resolves explicit IDs or active selection; active mode can depend on focus state. ([src/frontend/components/helpers/shows.ts:18](../../../src/frontend/components/helpers/shows.ts#L18))
4. [code] Full shows are loaded into showsCache lazily; the trimmed shows index is a different data structure. ([src/frontend/components/helpers/setShow.ts:229](../../../src/frontend/components/helpers/setShow.ts#L229))
5. [code] Visible slide indexes come from expanded layout references, including children. ([src/frontend/components/show/Slides.svelte:118](../../../src/frontend/components/show/Slides.svelte#L118))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 7 files, 25 referenced stores, 1 concrete message keys, 4 timing entries. [Complete dependency index](show-model.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activeFocus](../generated/stores/src_frontend_stores.ts_activeFocus.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#cachedShowsData](../generated/stores/src_frontend_stores.ts_cachedShowsData.md)
- [code] [src/frontend/stores.ts#categories](../generated/stores/src_frontend_stores.ts_categories.md)
- [code] [src/frontend/stores.ts#customMetadata](../generated/stores/src_frontend_stores.ts_customMetadata.md)
- [code] [src/frontend/stores.ts#dictionary](../generated/stores/src_frontend_stores.ts_dictionary.md)
- [code] [src/frontend/stores.ts#focusMode](../generated/stores/src_frontend_stores.ts_focusMode.md)
- [code] [src/frontend/stores.ts#groupNumbers](../generated/stores/src_frontend_stores.ts_groupNumbers.md)
- [code] [src/frontend/stores.ts#groups](../generated/stores/src_frontend_stores.ts_groups.md)
- [code] [src/frontend/stores.ts#notFound](../generated/stores/src_frontend_stores.ts_notFound.md)
- [code] [src/frontend/stores.ts#projects](../generated/stores/src_frontend_stores.ts_projects.md)
- [code] [src/frontend/stores.ts#refreshEditSlide](../generated/stores/src_frontend_stores.ts_refreshEditSlide.md)
- [code] [src/frontend/stores.ts#saved](../generated/stores/src_frontend_stores.ts_saved.md)
- [code] [src/frontend/stores.ts#selected](../generated/stores/src_frontend_stores.ts_selected.md)
- [code] [src/frontend/stores.ts#shows](../generated/stores/src_frontend_stores.ts_shows.md)
- [code] [src/frontend/stores.ts#showsCache](../generated/stores/src_frontend_stores.ts_showsCache.md)
- [code] [src/frontend/stores.ts#slidesOptions](../generated/stores/src_frontend_stores.ts_slidesOptions.md)
- [code] [src/frontend/stores.ts#sorted](../generated/stores/src_frontend_stores.ts_sorted.md)
- [code] [src/frontend/stores.ts#sortedShowsList](../generated/stores/src_frontend_stores.ts_sortedShowsList.md)
- [code] [src/frontend/stores.ts#special](../generated/stores/src_frontend_stores.ts_special.md)
- [code] [src/frontend/stores.ts#templates](../generated/stores/src_frontend_stores.ts_templates.md)

[code] Message families: [MAIN](../generated/channels/MAIN.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Preserve show ID, chosen layout and project occurrence index as distinct coordinates. ([src/types/Projects.ts:25](../../../src/types/Projects.ts#L25))
- [code] Pass an explicit show ID for edits initiated from a visible destination; active selection is a fallback, not a destination contract. ([src/frontend/components/helpers/shows.ts:18](../../../src/frontend/components/helpers/shows.ts#L18))
- [code] Do not rely on temporary Show.id being present in a saved show file. ([src/types/Show.ts:21](../../../src/types/Show.ts#L21))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/helpers/show.ts:49](../../../src/frontend/components/helpers/show.ts#L49): // TODO: disallow chars in labels: #:;!.,- ??
- [code] [src/frontend/components/helpers/show.ts:512](../../../src/frontend/components/helpers/show.ts#L512): // WIP should be merged with existing functions instead
- [code] [src/frontend/components/helpers/shows.ts:413](../../../src/frontend/components/helpers/shows.ts#L413): // fix bug where some childs are stored as an array
- [code] [src/frontend/components/helpers/shows.ts:427](../../../src/frontend/components/helpers/shows.ts#L427): // array bug

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-e8573623c5988ae6](../history/records/src_frontend_components_helpers_setShow.ts-1.md): setTimeout: 1000 (1000 ms).
- [code] [D-timer-13bb95597df09c01](../history/records/src_frontend_components_helpers_show.ts-1.md): setTimeout: omitted (0 ms).
- [code] [D-workaround-a2af8b83de8fb7b1](../history/records/src_frontend_components_helpers_shows.ts-1.md): // fix bug where some childs are stored as an array.
- [code] [D-fork-ee5e33e53d495bfc](../history/records/src_frontend_components_helpers_show.ts-1.md): Only allow linking slides that go to different outputs.

[code] All 13 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] No specific F-001–F-019 companion finding directly assigned to this area. See the [documentation roles](../README.md) before borrowing later behavior claims.
