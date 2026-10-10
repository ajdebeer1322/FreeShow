# click/src_frontend_components_drawer_bible_Scripture.svelte (1)

## click — event-af229b20e113ff565f

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1091](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1091); () => openBook(id). partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1031 !previewBibleId \|\| $notFound.bible?.includes(previewBibleId) \|\| !$scriptures&#91;previewBibleId&#93; \|\| apiError; src/frontend/components/drawer/bible/Scripture.svelte:1035 contentSearchResults !== null; src/frontend/components/drawer/bible/Scripture.svelte:1061 historyOpened; src/frontend/components/drawer/bible/Scripture.svelte:1083 books?.length.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:321 openBook (depth 1); src/frontend/components/drawer/bible/Scripture.svelte:358 openChapter (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:396 openVerse (depth 3).

Effects: src/frontend/components/drawer/bible/Scripture.svelte:414 store-write src/frontend/stores.ts#activeScripture .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6d239f27f051510aa8

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1110](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1110); (e) => toggleChapter(e, id). partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1031 !previewBibleId \|\| $notFound.bible?.includes(previewBibleId) \|\| !$scriptures&#91;previewBibleId&#93; \|\| apiError; src/frontend/components/drawer/bible/Scripture.svelte:1035 contentSearchResults !== null; src/frontend/components/drawer/bible/Scripture.svelte:1061 historyOpened; src/frontend/components/drawer/bible/Scripture.svelte:1102 chapters?.length.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:299 toggleChapter (depth 1); src/frontend/components/drawer/bible/Scripture.svelte:301 <callback> (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:303 <callback> (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:304 <callback> (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:358 openChapter (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:396 openVerse (depth 3).

Effects: src/frontend/components/drawer/bible/Scripture.svelte:414 store-write src/frontend/stores.ts#activeScripture .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5b072aba1c7f807c1e

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1155](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1155); (e) => openVerse(updateVersesSelection(e, content.id, true)). partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1031 !previewBibleId \|\| $notFound.bible?.includes(previewBibleId) \|\| !$scriptures&#91;previewBibleId&#93; \|\| apiError; src/frontend/components/drawer/bible/Scripture.svelte:1035 contentSearchResults !== null; src/frontend/components/drawer/bible/Scripture.svelte:1061 historyOpened; src/frontend/components/drawer/bible/Scripture.svelte:1134 splittedVerses.length.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:396 openVerse (depth 1); src/frontend/components/drawer/bible/Scripture.svelte:514 updateVersesSelection (depth 1); src/frontend/components/helpers/array.ts:181 clone (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:518 <callback> (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:528 <callback> (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:531 <callback> (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:556 getVerseId (depth 3); src/frontend/components/drawer/bible/scripture.ts:2108 scriptureRangeSelect (depth 2); src/frontend/components/drawer/bible/scripture.ts:2116 <callback> (depth 3); src/frontend/components/drawer/bible/scripture.ts:2116 <callback> (depth 3); src/frontend/components/drawer/bible/scripture.ts:2122 <callback> (depth 3); src/frontend/components/drawer/bible/scripture.ts:2127 <callback> (depth 3); src/frontend/components/drawer/bible/scripture.ts:2135 verseToNumber (depth 3); src/frontend/components/drawer/bible/Scripture.svelte:536 <callback> (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:538 <callback> (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:539 <callback> (depth 2).

Effects: src/frontend/components/drawer/bible/Scripture.svelte:414 store-write src/frontend/stores.ts#activeScripture ; src/frontend/components/drawer/bible/Scripture.svelte:552 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-206a08b856911e6e6c

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1156](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1156); (e) => (isActiveInOutput && !e.ctrlKey && !e.metaKey ? playScripture() : false). partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1031 !previewBibleId \|\| $notFound.bible?.includes(previewBibleId) \|\| !$scriptures&#91;previewBibleId&#93; \|\| apiError; src/frontend/components/drawer/bible/Scripture.svelte:1035 contentSearchResults !== null; src/frontend/components/drawer/bible/Scripture.svelte:1061 historyOpened; src/frontend/components/drawer/bible/Scripture.svelte:1134 splittedVerses.length.

Calls: src/frontend/components/drawer/bible/scripture.ts:278 playScripture (depth 1); src/frontend/components/drawer/bible/scripture.ts:121 getActiveScripturesContent (depth 2); src/frontend/components/drawer/bible/scripture.ts:130 <callback> (depth 3); src/frontend/components/drawer/bible/scripture.ts:260 sortScriptureSelection (depth 4); src/frontend/components/drawer/bible/scripture.ts:261 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:413 getReferenceDivider (depth 6); src/frontend/components/drawer/bible/scripture.ts:1425 getVerseIdParts (depth 6); src/frontend/components/drawer/bible/scripture.ts:142 <callback> (depth 3); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 4); src/frontend/values/keys.ts:7 getKey (depth 5); src/frontend/values/keys.ts:15 decrypt (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 6); src/frontend/IPC/main.ts:19 requestMain (depth 6); src/frontend/components/drawer/bible/scripture.ts:98 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:111 <callback> (depth 6).

Effects: src/frontend/components/drawer/bible/scripture.ts:341 presentation setOutput ; src/frontend/components/drawer/bible/scripture.ts:362 presentation setOutput ; src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/components/drawer/bible/scripture.ts:98 store-write src/frontend/stores.ts#notFound ; src/frontend/components/drawer/bible/scripture.ts:111 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/drawer/bible/scripture.ts:296 store-write src/frontend/stores.ts#scriptureHistory ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 28; depth cutoffs: 184. Full edges/effects/conditions in JSON.

## click — event-6455a02abc9f7ae1d3

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1210](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1210); () => swapPreviewBible(activeScriptureId). resolved-within-bound.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1202 $scriptureMode !== "grid"; src/frontend/components/drawer/bible/Scripture.svelte:1205 previewBibleData?.name; src/frontend/components/drawer/bible/Scripture.svelte:1207 isCollection && $scriptureSettings.showAllVersions; src/frontend/components/drawer/bible/Scripture.svelte:1209 isCollection.

Calls: src/frontend/components/drawer/bible/scripture.ts:2092 swapPreviewBible (depth 1); src/frontend/components/drawer/bible/scripture.ts:2099 <callback> (depth 2).

Effects: src/frontend/components/drawer/bible/scripture.ts:2099 store-write src/frontend/stores.ts#scriptures .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-375d5a93afb65f378a

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1253](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1253); () => _moveSelection(true). partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1246 contentSearchFieldActive; src/frontend/components/drawer/bible/Scripture.svelte:1250 $scriptureMode !== "grid" \|\| $resized.rightPanelDrawer > 5; src/frontend/components/drawer/bible/Scripture.svelte:1252 isActiveInOutput.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:924 _moveSelection (depth 1); src/frontend/components/drawer/bible/scripture.ts:260 sortScriptureSelection (depth 2); src/frontend/components/drawer/bible/scripture.ts:261 <callback> (depth 3); src/frontend/components/drawer/bible/scripture.ts:413 getReferenceDivider (depth 4); src/frontend/components/drawer/bible/scripture.ts:1425 getVerseIdParts (depth 4); src/frontend/components/drawer/bible/Scripture.svelte:935 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:1425 getVerseIdParts (depth 3); src/frontend/utils/common.ts:46 wait (depth 2); src/frontend/utils/common.ts:47 <callback> (depth 3); src/frontend/utils/common.ts:48 <callback> (depth 4); src/frontend/components/drawer/bible/Scripture.svelte:396 openVerse (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:961 <callback> (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:966 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:1995 moveSelection (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/drawer/bible/scripture.ts:2002 <callback> (depth 3).

Effects: src/frontend/components/drawer/bible/Scripture.svelte:414 store-write src/frontend/stores.ts#activeScripture .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.
