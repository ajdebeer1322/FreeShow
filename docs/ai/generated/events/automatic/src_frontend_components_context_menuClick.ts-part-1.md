# automatic/src_frontend_components_context_menuClick.ts (1)

## setTimeout — event-5d2bb0a4a7ece1dd54

[code] [src/frontend/components/context/menuClick.ts:372](../../../../../src/frontend/components/context/menuClick.ts#L372); () => { const sel: Selected = { ...obj.sel!, id: "show_drawer" } selected.set(sel) clickActions.delete({ ...obj, sel }) }. partial.

Conditions: src/frontend/components/context/menuClick.ts:370 obj.sel?.id === "show".

Calls: src/frontend/components/context/menuClick.ts:372 <callback> (depth 0); src/frontend/components/context/menuClick.ts:368 delete (depth 1); src/frontend/components/helpers/clipboard.ts:200 deleteAction (depth 2); src/frontend/audio/effects/audioEffectsHelpers.ts:247 removeEffectFromStack (depth 2); src/frontend/audio/effects/audioEffectsHelpers.ts:63 updateStack (depth 3); src/frontend/audio/effects/audioEffectsHelpers.ts:55 getActiveChannelId (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:65 <callback> (depth 4); src/frontend/audio/effects/audioEffectsHelpers.ts:248 <callback> (depth 3); src/frontend/audio/effects/audioEffectsHelpers.ts:249 <callback> (depth 4); src/frontend/components/context/menuClick.ts:2226 updateEffectItem (depth 2); src/frontend/components/context/menuClick.ts:2234 <callback> (depth 3); src/frontend/components/context/menuClick.ts:395 <callback> (depth 2); src/frontend/utils/common.ts:213 triggerFunction (depth 2); src/frontend/utils/common.ts:217 <callback> (depth 3); src/frontend/components/drawer/calendar/calendars.ts:230 deleteCalendarEvents (depth 2); src/frontend/utils/popup.ts:219 confirmCustom (depth 3).

Effects: src/frontend/components/context/menuClick.ts:374 store-write src/frontend/stores.ts#selected ; src/frontend/components/helpers/clipboard.ts:211 store-write src/frontend/stores.ts#selected ; src/frontend/audio/effects/audioEffectsHelpers.ts:65 store-write src/frontend/stores.ts#audioEffects ; src/frontend/components/context/menuClick.ts:2234 store-write src/frontend/stores.ts#effects ; src/frontend/utils/common.ts:214 store-write src/frontend/stores.ts#activeTriggerFunction ; src/frontend/utils/common.ts:218 store-write src/frontend/stores.ts#activeTriggerFunction ; src/frontend/utils/popup.ts:220 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/popup.ts:200 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/drawer/calendar/calendars.ts:236 store-write src/frontend/stores.ts#events ; src/frontend/components/drawer/calendar/calendars.ts:246 store-write src/frontend/stores.ts#calendars .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 3. Full edges/effects/conditions in JSON.

## setTimeout — event-50d63c7a36af5b57d8

[code] [src/frontend/components/context/menuClick.ts:914](../../../../../src/frontend/components/context/menuClick.ts#L914); () => { outputs.update((output) => { // should match the outputs list in MultiOutputs.svelte const showingOutputsList = Object.values(output).filter((a) => a.enabled && !a.hideFrom. resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:920 newValue && showingOutputsList.length <= 1.

Calls: src/frontend/components/context/menuClick.ts:914 <callback> (depth 0); src/frontend/components/context/menuClick.ts:915 <callback> (depth 1); src/frontend/components/context/menuClick.ts:917 <callback> (depth 2); src/frontend/utils/common.ts:26 newToast (depth 2); src/frontend/components/helpers/array.ts:10 removeDuplicates (depth 3).

Effects: src/frontend/components/context/menuClick.ts:915 store-write src/frontend/stores.ts#outputs ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-c7ac95e5e9c3225d35

[code] [src/frontend/components/context/menuClick.ts:1027](../../../../../src/frontend/components/context/menuClick.ts#L1027); createScriptureShow. partial.

Conditions: src/frontend/components/context/menuClick.ts:1025 obj.contextElem?.classList.contains("chapters"); src/frontend/components/context/menuClick.ts:1000 obj.contextElem?.classList.contains("#media_preview"); src/frontend/components/drawer/bible/scripture.ts:1795 !biblesContent?.length; src/frontend/components/drawer/bible/scripture.ts:1800 !selectedVerses&#91;0&#93;?.length; src/frontend/components/drawer/bible/scripture.ts:1804 !show.

Calls: src/frontend/components/drawer/bible/scripture.ts:1793 createScriptureShow (depth 0); src/frontend/components/drawer/bible/scripture.ts:121 getActiveScripturesContent (depth 1); src/frontend/components/drawer/bible/scripture.ts:130 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:260 sortScriptureSelection (depth 3); src/frontend/components/drawer/bible/scripture.ts:261 <callback> (depth 4); src/frontend/components/drawer/bible/scripture.ts:413 getReferenceDivider (depth 5); src/frontend/components/drawer/bible/scripture.ts:1425 getVerseIdParts (depth 5); src/frontend/components/drawer/bible/scripture.ts:142 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 3); src/frontend/values/keys.ts:7 getKey (depth 4); src/frontend/values/keys.ts:15 decrypt (depth 5); src/frontend/values/keys.ts:15 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/IPC/main.ts:19 requestMain (depth 5); src/frontend/IPC/main.ts:68 sendMain (depth 6).

Effects: src/frontend/components/drawer/bible/scripture.ts:1807 history history UPDATE; src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/drawer/bible/scripture.ts:98 store-write src/frontend/stores.ts#notFound ; src/frontend/components/drawer/bible/scripture.ts:111 store-write src/frontend/stores.ts#scripturesCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/converters/importHelpers.ts:29 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory .

may change live output; inspect conditions/trace. Undo: history creation reachable (conditional). Unresolved edges: 36; depth cutoffs: 210. Full edges/effects/conditions in JSON.

## setTimeout — event-d755387683d30a1041

[code] [src/frontend/components/context/menuClick.ts:1310](../../../../../src/frontend/components/context/menuClick.ts#L1310); () => selected.set({ id: null, data: &#91;&#93; }). resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:1305 obj.sel.id === "slide".

Calls: src/frontend/components/context/menuClick.ts:1310 <callback> (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1310 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-826cb9281f5ce647ae

[code] [src/frontend/components/context/menuClick.ts:1323](../../../../../src/frontend/components/context/menuClick.ts#L1323); () => selected.set({ id: null, data: &#91;&#93; }). resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:1317 obj.sel.id === "slide".

Calls: src/frontend/components/context/menuClick.ts:1323 <callback> (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1323 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-6467dd6f4d9d639ea4

[code] [src/frontend/components/context/menuClick.ts:1357](../../../../../src/frontend/components/context/menuClick.ts#L1357); () => activeEdit.set({ type: obj.sel!.id as any, id: obj.sel!.data&#91;0&#93;, items: &#91;&#93; }). resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:1351 &#91;"overlay", "template", "effect", "scene"&#93;.includes(obj.sel.id \|\| ""); src/frontend/components/context/menuClick.ts:1345 obj.sel.id === "show_drawer"; src/frontend/components/context/menuClick.ts:1339 obj.sel.id === "audio"; src/frontend/components/context/menuClick.ts:1334 obj.sel.id === "player"; src/frontend/components/context/menuClick.ts:1330 obj.sel.id === "camera"; src/frontend/components/context/menuClick.ts:1324 obj.sel.id === "media"; src/frontend/components/context/menuClick.ts:1317 obj.sel.id === "slide".

Calls: src/frontend/components/context/menuClick.ts:1357 <callback> (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1357 store-write src/frontend/stores.ts#activeEdit .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
