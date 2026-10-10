# click/src_frontend_components_drawer_bible_Scripture.svelte (2)

## click — event-d39f18c4b05ac97680

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1256](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1256); () => _moveSelection(false). partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1246 contentSearchFieldActive; src/frontend/components/drawer/bible/Scripture.svelte:1250 $scriptureMode !== "grid" \|\| $resized.rightPanelDrawer > 5; src/frontend/components/drawer/bible/Scripture.svelte:1252 isActiveInOutput.

Calls: src/frontend/components/drawer/bible/Scripture.svelte:924 _moveSelection (depth 1); src/frontend/components/drawer/bible/scripture.ts:260 sortScriptureSelection (depth 2); src/frontend/components/drawer/bible/scripture.ts:261 <callback> (depth 3); src/frontend/components/drawer/bible/scripture.ts:413 getReferenceDivider (depth 4); src/frontend/components/drawer/bible/scripture.ts:1425 getVerseIdParts (depth 4); src/frontend/components/drawer/bible/Scripture.svelte:935 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:1425 getVerseIdParts (depth 3); src/frontend/utils/common.ts:46 wait (depth 2); src/frontend/utils/common.ts:47 <callback> (depth 3); src/frontend/utils/common.ts:48 <callback> (depth 4); src/frontend/components/drawer/bible/Scripture.svelte:396 openVerse (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:961 <callback> (depth 2); src/frontend/components/drawer/bible/Scripture.svelte:966 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:1995 moveSelection (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/components/drawer/bible/scripture.ts:2002 <callback> (depth 3).

Effects: src/frontend/components/drawer/bible/Scripture.svelte:414 store-write src/frontend/stores.ts#activeScripture .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1ad96f59ff63a25c2a

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1261](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1261); playScripture. partial.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1246 contentSearchFieldActive; src/frontend/components/drawer/bible/Scripture.svelte:1250 $scriptureMode !== "grid" \|\| $resized.rightPanelDrawer > 5; src/frontend/components/drawer/bible/scripture.ts:279 get(outLocked); src/frontend/components/drawer/bible/scripture.ts:282 !biblesContent?.length \|\| !biblesContent&#91;0&#93;; src/frontend/components/drawer/bible/scripture.ts:314 existingIndex > -1; src/frontend/components/drawer/bible/scripture.ts:324 !outputIsScripture; src/frontend/components/drawer/bible/scripture.ts:346 !translation; src/frontend/components/drawer/bible/scripture.ts:349 name \|\| apiId; src/frontend/components/drawer/bible/scripture.ts:355 !templateBackground.

Calls: src/frontend/components/drawer/bible/scripture.ts:278 playScripture (depth 0); src/frontend/components/drawer/bible/scripture.ts:121 getActiveScripturesContent (depth 1); src/frontend/components/drawer/bible/scripture.ts:130 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:260 sortScriptureSelection (depth 3); src/frontend/components/drawer/bible/scripture.ts:261 <callback> (depth 4); src/frontend/components/drawer/bible/scripture.ts:413 getReferenceDivider (depth 5); src/frontend/components/drawer/bible/scripture.ts:1425 getVerseIdParts (depth 5); src/frontend/components/drawer/bible/scripture.ts:142 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 3); src/frontend/values/keys.ts:7 getKey (depth 4); src/frontend/values/keys.ts:15 decrypt (depth 5); src/frontend/values/keys.ts:15 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/IPC/main.ts:19 requestMain (depth 5); src/frontend/IPC/main.ts:68 sendMain (depth 6).

Effects: src/frontend/components/drawer/bible/scripture.ts:341 presentation setOutput ; src/frontend/components/drawer/bible/scripture.ts:362 presentation setOutput ; src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/drawer/bible/scripture.ts:98 store-write src/frontend/stores.ts#notFound ; src/frontend/components/drawer/bible/scripture.ts:111 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/drawer/bible/scripture.ts:296 store-write src/frontend/stores.ts#scriptureHistory .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 55; depth cutoffs: 191. Full edges/effects/conditions in JSON.

## click — event-2c70d46d573f8de8ff

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1267](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1267); () => scriptureMode.set($scriptureMode === "list" ? "grid" : "list"). resolved-within-bound.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1246 contentSearchFieldActive; src/frontend/components/drawer/bible/Scripture.svelte:1250 $scriptureMode !== "grid" \|\| $resized.rightPanelDrawer > 5.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/bible/Scripture.svelte:1267 store-write src/frontend/stores.ts#scriptureMode .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5ce47dc4fd0c280021

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1274](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1274); () => (historyOpened = !historyOpened). resolved-within-bound.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1246 contentSearchFieldActive; src/frontend/components/drawer/bible/Scripture.svelte:1250 $scriptureMode !== "grid" \|\| $resized.rightPanelDrawer > 5; src/frontend/components/drawer/bible/Scripture.svelte:1271 currentHistory.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-77146a6f0ceac8b3c1

[code] [src/frontend/components/drawer/bible/Scripture.svelte:1280](../../../../../src/frontend/components/drawer/bible/Scripture.svelte#L1280); () => (contentSearchFieldActive = true). resolved-within-bound.

Conditions: src/frontend/components/drawer/bible/Scripture.svelte:1246 contentSearchFieldActive; src/frontend/components/drawer/bible/Scripture.svelte:1250 $scriptureMode !== "grid" \|\| $resized.rightPanelDrawer > 5.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
