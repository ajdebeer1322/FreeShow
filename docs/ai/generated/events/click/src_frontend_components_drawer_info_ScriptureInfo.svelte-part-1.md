# click/src_frontend_components_drawer_info_ScriptureInfo.svelte (1)

## click — event-8b1483068b12fda349

[code] [src/frontend/components/drawer/info/ScriptureInfo.svelte:259](../../../../../src/frontend/components/drawer/info/ScriptureInfo.svelte#L259); editTemplate. resolved-within-bound.

Conditions: src/frontend/components/drawer/info/ScriptureInfo.svelte:216 optionsOpen; src/frontend/components/drawer/info/ScriptureInfo.svelte:258 (templateId && template) \|\| styleScriptureTemplate; src/frontend/components/drawer/info/ScriptureInfo.svelte:125 styleScriptureTemplate.

Calls: src/frontend/components/drawer/info/ScriptureInfo.svelte:124 editTemplate (depth 0).

Effects: src/frontend/components/drawer/info/ScriptureInfo.svelte:126 store-write src/frontend/stores.ts#activeStyle ; src/frontend/components/drawer/info/ScriptureInfo.svelte:127 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/drawer/info/ScriptureInfo.svelte:128 store-write src/frontend/stores.ts#activePage ; src/frontend/components/drawer/info/ScriptureInfo.svelte:138 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/drawer/info/ScriptureInfo.svelte:139 store-write src/frontend/stores.ts#activePage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c3b5f663795fa880ca

[code] [src/frontend/components/drawer/info/ScriptureInfo.svelte:276](../../../../../src/frontend/components/drawer/info/ScriptureInfo.svelte#L276); convertToNew. partial.

Conditions: src/frontend/components/drawer/info/ScriptureInfo.svelte:216 optionsOpen; src/frontend/components/drawer/info/ScriptureInfo.svelte:275 useOldSystem; src/frontend/components/drawer/info/ScriptureInfo.svelte:168 !usingDefault; src/frontend/components/drawer/info/ScriptureInfo.svelte:169 !(await confirmCustom("This will apply the default template, and convert that to the new format. Your current template will not change.<br>You can use it as an example to adapt you.

Calls: src/frontend/components/drawer/info/ScriptureInfo.svelte:167 convertToNew (depth 0); src/frontend/utils/popup.ts:219 confirmCustom (depth 1); src/frontend/utils/popup.ts:189 waitForPopupData (depth 2); src/frontend/utils/popup.ts:190 <callback> (depth 3); src/frontend/utils/popup.ts:191 unsubscribe (depth 4); src/frontend/utils/popup.ts:194 <callback> (depth 4); src/frontend/utils/popup.ts:204 finish (depth 5); src/frontend/utils/popup.ts:207 <callback> (depth 6); src/frontend/utils/popup.ts:198 <callback> (depth 4); src/frontend/utils/popup.ts:204 finish (depth 4); src/frontend/utils/popup.ts:207 <callback> (depth 5); src/frontend/utils/createData.ts:567 setDefaultScriptureTemplates (depth 1); src/frontend/utils/createData.ts:1022 getDefaultScriptureTemplates (depth 2); src/frontend/utils/language.ts:83 translateText (depth 3); src/frontend/utils/language.ts:89 <callback> (depth 4); src/frontend/utils/language.ts:96 <callback> (depth 4).

Effects: src/frontend/utils/popup.ts:220 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/popup.ts:200 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/createData.ts:580 store-write src/frontend/stores.ts#templates ; src/frontend/utils/createData.ts:570 store-write src/frontend/stores.ts#deletedDefaults ; src/frontend/utils/createData.ts:575 store-write src/frontend/stores.ts#templateCategories ; src/frontend/components/drawer/info/ScriptureInfo.svelte:77 store-write src/frontend/stores.ts#scriptureSettings .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ac35eb4b407d043e78

[code] [src/frontend/components/drawer/info/ScriptureInfo.svelte:286](../../../../../src/frontend/components/drawer/info/ScriptureInfo.svelte#L286); createScriptureShow. partial.

Conditions: src/frontend/components/drawer/info/ScriptureInfo.svelte:216 optionsOpen; src/frontend/components/drawer/bible/scripture.ts:1795 !biblesContent?.length; src/frontend/components/drawer/bible/scripture.ts:1800 !selectedVerses&#91;0&#93;?.length; src/frontend/components/drawer/bible/scripture.ts:1804 !show.

Calls: src/frontend/components/drawer/bible/scripture.ts:1793 createScriptureShow (depth 0); src/frontend/components/drawer/bible/scripture.ts:121 getActiveScripturesContent (depth 1); src/frontend/components/drawer/bible/scripture.ts:130 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:260 sortScriptureSelection (depth 3); src/frontend/components/drawer/bible/scripture.ts:261 <callback> (depth 4); src/frontend/components/drawer/bible/scripture.ts:413 getReferenceDivider (depth 5); src/frontend/components/drawer/bible/scripture.ts:1425 getVerseIdParts (depth 5); src/frontend/components/drawer/bible/scripture.ts:142 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 3); src/frontend/values/keys.ts:7 getKey (depth 4); src/frontend/values/keys.ts:15 decrypt (depth 5); src/frontend/values/keys.ts:15 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/IPC/main.ts:19 requestMain (depth 5); src/frontend/IPC/main.ts:68 sendMain (depth 6).

Effects: src/frontend/components/drawer/bible/scripture.ts:1807 history history UPDATE; src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/drawer/bible/scripture.ts:98 store-write src/frontend/stores.ts#notFound ; src/frontend/components/drawer/bible/scripture.ts:111 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/converters/importHelpers.ts:29 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory .

may change live output; inspect conditions/trace. Undo: history creation reachable (conditional). Unresolved edges: 36; depth cutoffs: 210. Full edges/effects/conditions in JSON.
