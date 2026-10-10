# Scripture loading and presentation

## Purpose

[code] Resolve local/API Bible selections into sanitized verse content and ordinary show/output structures. Evidence and entry points are below. Architecture context: [AI_README](../../../AI_README.md).

## Entry points and key files

- [code] [src/frontend/components/drawer/bible/scripture.ts](../generated/files/src_frontend_components_drawer_bible_scripture.ts.md) — imports, callers, component props and symbol definitions.
- [code] [src/frontend/components/drawer/info/ScriptureInfo.svelte](../generated/files/src_frontend_components_drawer_info_ScriptureInfo.svelte.md) — imports, callers, component props and symbol definitions.

## Data flow and behavior

1. [code] Local and API Bible instances are cached separately from renderer scripture definitions. ([src/frontend/components/drawer/bible/scripture.ts:43](../../../src/frontend/components/drawer/bible/scripture.ts#L43))
2. [code] A local Bible is requested through MAIN/BIBLE and cached only after validation. ([src/frontend/components/drawer/bible/scripture.ts:94](../../../src/frontend/components/drawer/bible/scripture.ts#L94))
3. [code] Selected Bible content is transformed into a Show with a template and verse/reference metadata. ([src/frontend/components/drawer/bible/scripture.ts:1810](../../../src/frontend/components/drawer/bible/scripture.ts#L1810))
4. [code] Scripture presentation uses the standard slide output path, not another rendering engine. ([src/frontend/components/drawer/bible/scripture.ts:341](../../../src/frontend/components/drawer/bible/scripture.ts#L341))
5. [code] Verse text has an explicit sanitization path before rich rendering. ([src/frontend/components/drawer/bible/scripture.ts:1763](../../../src/frontend/components/drawer/bible/scripture.ts#L1763))

## Events and triggers

[code] Query handlers and bounded effects with `npm run ai:ask -- file <file>` and the [event inventory](../generated/events/README.md), [key situation tables](../events/README.md), and [live recordings](../traces/README.md). Events are conditional call unions; a live trace records only the chosen fixture.

## Stores and messages

[code] Static scope: 4 files, 25 referenced stores, 2 concrete message keys, 18 timing entries. [Complete dependency index](scripture.dependencies.json) includes conditional and test paths. Runtime use can be narrower.

- [code] [src/frontend/stores.ts#activeEdit](../generated/stores/src_frontend_stores.ts_activeEdit.md)
- [code] [src/frontend/stores.ts#activePage](../generated/stores/src_frontend_stores.ts_activePage.md)
- [code] [src/frontend/stores.ts#activeProject](../generated/stores/src_frontend_stores.ts_activeProject.md)
- [code] [src/frontend/stores.ts#activeScripture](../generated/stores/src_frontend_stores.ts_activeScripture.md)
- [code] [src/frontend/stores.ts#activeShow](../generated/stores/src_frontend_stores.ts_activeShow.md)
- [code] [src/frontend/stores.ts#activeStyle](../generated/stores/src_frontend_stores.ts_activeStyle.md)
- [code] [src/frontend/stores.ts#activeTriggerFunction](../generated/stores/src_frontend_stores.ts_activeTriggerFunction.md)
- [code] [src/frontend/stores.ts#customScriptureBooks](../generated/stores/src_frontend_stores.ts_customScriptureBooks.md)
- [code] [src/frontend/stores.ts#drawerTabsData](../generated/stores/src_frontend_stores.ts_drawerTabsData.md)
- [code] [src/frontend/stores.ts#media](../generated/stores/src_frontend_stores.ts_media.md)
- [code] [src/frontend/stores.ts#notFound](../generated/stores/src_frontend_stores.ts_notFound.md)
- [code] [src/frontend/stores.ts#openScripture](../generated/stores/src_frontend_stores.ts_openScripture.md)
- [code] [src/frontend/stores.ts#outLocked](../generated/stores/src_frontend_stores.ts_outLocked.md)
- [code] [src/frontend/stores.ts#outputs](../generated/stores/src_frontend_stores.ts_outputs.md)
- [code] [src/frontend/stores.ts#overlays](../generated/stores/src_frontend_stores.ts_overlays.md)
- [code] [src/frontend/stores.ts#resized](../generated/stores/src_frontend_stores.ts_resized.md)
- [code] [src/frontend/stores.ts#scriptureHistory](../generated/stores/src_frontend_stores.ts_scriptureHistory.md)
- [code] [src/frontend/stores.ts#scriptureMode](../generated/stores/src_frontend_stores.ts_scriptureMode.md)
- [code] [src/frontend/stores.ts#scriptureSettings](../generated/stores/src_frontend_stores.ts_scriptureSettings.md)
- [code] [src/frontend/stores.ts#scriptures](../generated/stores/src_frontend_stores.ts_scriptures.md)
- [code] [src/frontend/stores.ts#scripturesCache](../generated/stores/src_frontend_stores.ts_scripturesCache.md)
- [code] [src/frontend/stores.ts#selected](../generated/stores/src_frontend_stores.ts_selected.md)
- [code] [src/frontend/stores.ts#settingsTab](../generated/stores/src_frontend_stores.ts_settingsTab.md)
- [code] [src/frontend/stores.ts#styles](../generated/stores/src_frontend_stores.ts_styles.md)

[code] Message families: [MAIN](../generated/channels/MAIN.md). Full message keys are in the dependency JSON and [IPC index](../generated/messages/README.md).

## Rules that must stay true

- [code] Respect scripture-template validation; a seeded template ID can be replaced by this check. ([src/frontend/components/drawer/info/ScriptureInfo.svelte:54](../../../src/frontend/components/drawer/info/ScriptureInfo.svelte#L54))
- [code] Keep translation attribution/usage context when converting or presenting verses. ([src/frontend/components/drawer/bible/scripture.ts:148](../../../src/frontend/components/drawer/bible/scripture.ts#L148))

## Known issues and verification limits

[code] Indexed comments are author warnings, not proof that a bug still reproduces in this snapshot:

- [code] [src/frontend/components/drawer/bible/Scripture.svelte:267](../../../src/frontend/components/drawer/bible/Scripture.svelte#L267): // WIP similar to getSplittedVerses in scripture.ts
- [code] [src/frontend/components/drawer/bible/Scripture.svelte:440](../../../src/frontend/components/drawer/bible/Scripture.svelte#L440): // WIP move this?
- [code] [src/frontend/components/drawer/bible/Scripture.svelte:927](../../../src/frontend/components/drawer/bible/Scripture.svelte#L927): // WIP this seems like duplicated code
- [code] [src/frontend/components/drawer/bible/Scripture.svelte:1235](../../../src/frontend/components/drawer/bible/Scripture.svelte#L1235): <!-- WIP had some issues with selecting multiple verses -->

[guess] Runtime timing, browser/network behavior and native hardware behavior need observation in the target environment. [Suspected bugs](../SUSPECTED_BUGS.md) distinguish new concerns from companion findings.

## History and behavior findings

- [code] [D-timer-1740a1819cd38b97](../history/records/src_frontend_components_drawer_bible_Scripture.svelte-1.md): setTimeout: 1500 (1500 ms).
- [code] [D-timer-8303c02ad65c136f](../history/records/src_frontend_components_drawer_bible_Scripture.svelte-1.md): setTimeout: 1500 (1500 ms).

[code] All 25 related decision IDs and locations are included in the dependency JSON. Use `ai:ask -- why <file>:<line>` for exact records; generic commit intent is not an item-specific motive.

[code] Companion references: [F-007](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md), [F-017](https://github.com/ajdebeer1322/FreeShow/blob/a3cdd7f576480f842077c233c79f6f4c3238fd07/HOW_IT_WORKS.md). These are companion experiments; see each finding’s evidence and do not treat it as observation of every configuration.
