# automatic/src_frontend_components_drawer_bible_Scripture.svelte (1)

## setTimeout — event-080b38d3510222a6a1

[code] [src/frontend/components/drawer/bible/Scripture.svelte:47](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L47); () => loadScripture(previewBibleId). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:47 <callback> (depth 0); src/frontend/components/drawer/bible/Scripture.svelte:244 loadScripture (depth 1); src/frontend/components/drawer/bible/Scripture.svelte:321 openBook (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:358 openChapter (depth 3); src/frontend/components/drawer/bible/Scripture.svelte:396 openVerse (depth 4); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 2); src/frontend/values/keys.ts:7 getKey (depth 3); src/frontend/values/keys.ts:15 decrypt (depth 4); src/frontend/values/keys.ts:15 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/IPC/main.ts:19 requestMain (depth 4); src/frontend/IPC/main.ts:68 sendMain (depth 5); src/frontend/IPC/main.ts:28 cleanup (depth 5); src/frontend/IPC/main.ts:36 <callback> (depth 5); src/frontend/IPC/main.ts:37 <callback> (depth 6).

Effects: src/frontend/components/drawer/bible/Scripture.svelte:414 store-write src/frontend/stores.ts#activeScripture ; src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/drawer/bible/scripture.ts:98 store-write src/frontend/stores.ts#notFound ; src/frontend/components/drawer/bible/scripture.ts:111 store-write src/frontend/stores.ts#scripturesCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## setTimeout — event-555205cfad47b70ecb

[code] [src/frontend/components/drawer/bible/Scripture.svelte:424](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L424); playScripture. partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:424 playWhenLoaded; src/frontend/components/drawer/bible/scripture.ts:279 get(outLocked); src/frontend/components/drawer/bible/scripture.ts:282 !biblesContent?.length \|\| !biblesContent&#91;0&#93;; src/frontend/components/drawer/bible/scripture.ts:314 existingIndex > -1; src/frontend/components/drawer/bible/scripture.ts:324 !outputIsScripture; src/frontend/components/drawer/bible/scripture.ts:346 !translation; src/frontend/components/drawer/bible/scripture.ts:349 name \|\| apiId; src/frontend/components/drawer/bible/scripture.ts:355 !templateBackground.

Calls: src/frontend/components/drawer/bible/scripture.ts:278 playScripture (depth 0); src/frontend/components/drawer/bible/scripture.ts:121 getActiveScripturesContent (depth 1); src/frontend/components/drawer/bible/scripture.ts:130 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:260 sortScriptureSelection (depth 3); src/frontend/components/drawer/bible/scripture.ts:261 <callback> (depth 4); src/frontend/components/drawer/bible/scripture.ts:413 getReferenceDivider (depth 5); src/frontend/components/drawer/bible/scripture.ts:1425 getVerseIdParts (depth 5); src/frontend/components/drawer/bible/scripture.ts:142 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 3); src/frontend/values/keys.ts:7 getKey (depth 4); src/frontend/values/keys.ts:15 decrypt (depth 5); src/frontend/values/keys.ts:15 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/IPC/main.ts:19 requestMain (depth 5); src/frontend/IPC/main.ts:68 sendMain (depth 6).

Effects: src/frontend/components/drawer/bible/scripture.ts:341 presentation setOutput ; src/frontend/components/drawer/bible/scripture.ts:362 presentation setOutput ; src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/drawer/bible/scripture.ts:98 store-write src/frontend/stores.ts#notFound ; src/frontend/components/drawer/bible/scripture.ts:111 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/drawer/bible/scripture.ts:296 store-write src/frontend/stores.ts#scriptureHistory .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 55; depth cutoffs: 191. Full edges/effects/conditions in JSON.

## setTimeout — event-fbd7151e672340cd4f

[code] [src/frontend/components/drawer/bible/Scripture.svelte:442](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L442); openReference. partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:442 $openScripture; src/frontend/components/drawer/bible/Scripture.svelte:444 $openScripture?.book === undefined; src/frontend/components/drawer/bible/Scripture.svelte:451 $openScripture.play; src/frontend/components/drawer/bible/Scripture.svelte:454 !Array.isArray(verses); src/frontend/components/drawer/bible/Scripture.svelte:455 !Array.isArray(verses&#91;0&#93;).

Calls: src/frontend/components/drawer/bible/Scripture.svelte:443 openReference (depth 0); src/frontend/components/drawer/bible/Scripture.svelte:828 resetContentSearch (depth 1); src/frontend/components/drawer/bible/Scripture.svelte:321 openBook (depth 1); src/frontend/components/drawer/bible/Scripture.svelte:358 openChapter (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:396 openVerse (depth 3).

Effects: src/frontend/components/drawer/bible/Scripture.svelte:445 store-write src/frontend/stores.ts#openScripture ; src/frontend/components/drawer/bible/Scripture.svelte:459 store-write src/frontend/stores.ts#openScripture ; src/frontend/components/drawer/bible/Scripture.svelte:414 store-write src/frontend/stores.ts#activeScripture .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-d8240480bd7593e9c9

[code] [src/frontend/components/drawer/bible/Scripture.svelte:492](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L492); () => scrollToActive(booksScrollElem). partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:492 activeScriptureId && activeReference.book.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:492 <callback> (depth 0); src/frontend/components/drawer/bible/Scripture.svelte:495 scrollToActive (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-3418f738991ed84c6e

[code] [src/frontend/components/drawer/bible/Scripture.svelte:493](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L493); () => scrollToActive(chaptersScrollElem). partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:493 activeScriptureId && activeReference.chapters.length.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:493 <callback> (depth 0); src/frontend/components/drawer/bible/Scripture.svelte:495 scrollToActive (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9eae24eb89fa6dabf7

[code] [src/frontend/components/drawer/bible/Scripture.svelte:494](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L494); () => scrollToActive(versesScrollElem). partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:494 activeScriptureId && activeReference.verses&#91;0&#93;?.length.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:494 <callback> (depth 0); src/frontend/components/drawer/bible/Scripture.svelte:495 scrollToActive (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
