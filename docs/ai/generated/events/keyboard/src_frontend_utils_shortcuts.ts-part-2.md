# keyboard/src_frontend_utils_shortcuts.ts (2)

## Ctrl/Cmd+e — event-41965c197a5fc77b65

[code] [src/frontend/utils/shortcuts.ts:46](../../../../../src/frontend/utils/shortcuts.ts#L46); () => activePopup.set("export"). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:46 e (depth 0).

Effects: src/frontend/utils/shortcuts.ts:46 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+i — event-40f60bb9d27812075c

[code] [src/frontend/utils/shortcuts.ts:47](../../../../../src/frontend/utils/shortcuts.ts#L47); (e: KeyboardEvent) => (e.altKey ? importFromClipboard() : activePopup.set("import")). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:47 i (depth 0); src/frontend/converters/importHelpers.ts:227 importFromClipboard (depth 1); src/frontend/converters/importHelpers.ts:230 <callback> (depth 2); src/frontend/converters/txt.ts:51 convertText (depth 3); src/frontend/converters/txt.ts:293 preprocessLines (depth 4); src/frontend/converters/txt.ts:255 isHeaderLine (depth 5); src/frontend/converters/txt.ts:750 findGroupMatch (depth 6); src/frontend/components/helpers/show.ts:46 getLabelId (depth 6); src/frontend/converters/txt.ts:275 isChordLine (depth 5); src/frontend/converters/txt.ts:344 insertChordsIntoLyrics (depth 5); src/frontend/converters/txt.ts:330 <callback> (depth 5); src/frontend/components/helpers/show.ts:182 getCustomMetadata (depth 4); src/frontend/components/helpers/show.ts:179 initializeMetadata (depth 5); src/frontend/components/helpers/show.ts:188 <callback> (depth 5); src/frontend/components/helpers/show.ts:192 <callback> (depth 5); src/frontend/converters/txt.ts:75 <callback> (depth 4).

Effects: src/frontend/utils/shortcuts.ts:47 store-write src/frontend/stores.ts#activePopup ; src/frontend/converters/txt.ts:176 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:290 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:391 history history UPDATE; src/frontend/components/helpers/show.ts:398 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:408 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:191 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 5; depth cutoffs: 102. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+n — event-2dd019c61a40c0fa0d

[code] [src/frontend/utils/shortcuts.ts:48](../../../../../src/frontend/utils/shortcuts.ts#L48); () => createNew(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:48 n (depth 0); src/frontend/utils/shortcuts.ts:461 createNew (depth 1); src/frontend/components/drawer/bible/scripture.ts:1793 createScriptureShow (depth 2); src/frontend/components/drawer/bible/scripture.ts:121 getActiveScripturesContent (depth 3); src/frontend/components/drawer/bible/scripture.ts:130 <callback> (depth 4); src/frontend/components/drawer/bible/scripture.ts:260 sortScriptureSelection (depth 5); src/frontend/components/drawer/bible/scripture.ts:261 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:142 <callback> (depth 4); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 5); src/frontend/values/keys.ts:7 getKey (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 6); src/frontend/components/drawer/bible/scripture.ts:76 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:159 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:160 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:167 <callback> (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5).

Effects: src/frontend/utils/shortcuts.ts:466 history history SLIDES; src/frontend/utils/shortcuts.ts:473 history history UPDATE; src/frontend/utils/shortcuts.ts:474 history history UPDATE; src/frontend/utils/shortcuts.ts:475 history history UPDATE; src/frontend/utils/shortcuts.ts:479 history history UPDATE; src/frontend/utils/shortcuts.ts:471 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:472 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:476 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:477 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:482 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/drawer/bible/scripture.ts:1807 history history UPDATE; src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/converters/importHelpers.ts:29 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 42; depth cutoffs: 286. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+h — event-22cf3e8724ffc260dd

[code] [src/frontend/utils/shortcuts.ts:49](../../../../../src/frontend/utils/shortcuts.ts#L49); () => (get(activeDrawerTab) === "scripture" ? "" : activePopup.set("history")). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:49 h (depth 0).

Effects: src/frontend/utils/shortcuts.ts:49 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+m — event-3bbabce6c9c1749b5c

[code] [src/frontend/utils/shortcuts.ts:50](../../../../../src/frontend/utils/shortcuts.ts#L50); () => audioChannelsData.update((a) => { const main = a.main \|\| {} a.main = { ...main, isMuted: !main.isMuted } return a }). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:50 m (depth 0); src/frontend/utils/shortcuts.ts:51 <callback> (depth 1).

Effects: src/frontend/utils/shortcuts.ts:51 store-write src/frontend/stores.ts#audioChannelsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+o — event-4eeffccc3cbcd4b268

[code] [src/frontend/utils/shortcuts.ts:56](../../../../../src/frontend/utils/shortcuts.ts#L56); () => toggleOutputs(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:56 o (depth 0); src/frontend/components/helpers/output.ts:130 toggleOutputs (depth 1); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 2); src/frontend/components/helpers/array.ts:42 sortByName (depth 3); src/frontend/components/helpers/array.ts:45 <callback> (depth 4); src/frontend/components/helpers/array.ts:46 <callback> (depth 4); src/frontend/components/helpers/array.ts:137 keysToID (depth 3); src/frontend/components/helpers/array.ts:139 <callback> (depth 4); src/frontend/components/helpers/output.ts:677 <callback> (depth 3); src/frontend/components/helpers/output.ts:679 <callback> (depth 3); src/frontend/components/helpers/output.ts:679 <callback> (depth 3); src/frontend/components/helpers/output.ts:681 <callback> (depth 3); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/components/helpers/output.ts:1102 addOutput (depth 3); src/frontend/components/helpers/output.ts:1106 <callback> (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5).

Effects: src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 4. Full edges/effects/conditions in JSON.
