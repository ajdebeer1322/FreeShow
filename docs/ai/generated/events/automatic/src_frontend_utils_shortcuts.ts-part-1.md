# automatic/src_frontend_utils_shortcuts.ts (1)

## setTimeout — event-3acfc0697b1f905544

[code] [src/frontend/utils/shortcuts.ts:44](../../../../../src/frontend/utils/shortcuts.ts#L44); () => duplicate(get(selected)). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:44 <callback> (depth 0); src/frontend/components/helpers/clipboard.ts:215 duplicate (depth 1); src/frontend/components/helpers/clipboard.ts:84 copy (depth 2); src/frontend/utils/shortcutsHelper.ts:14 isFormField (depth 3); src/frontend/utils/shortcutsHelper.ts:3 copyFromTextField (depth 3); src/frontend/utils/shortcutsHelper.ts:19 isTextField (depth 4); src/frontend/utils/shortcutsHelper.ts:30 getTextFieldSelection (depth 4); src/frontend/components/helpers/slideTransfer.ts:340 getClickedSlideSelection (depth 3); src/frontend/components/helpers/slideTransfer.ts:347 getClickedSlide (depth 4); src/frontend/components/helpers/slideTransfer.ts:39 getSlideRef (depth 5); src/frontend/components/helpers/shows.ts:389 ref (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/utils/common.ts:33 setStatus (depth 3); src/frontend/utils/common.ts:39 <callback> (depth 4).

Effects: src/frontend/components/helpers/clipboard.ts:97 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/clipboard.ts:124 store-write src/frontend/stores.ts#clipboard ; src/frontend/utils/shortcutsHelper.ts:9 file-write navigator.clipboard.writeText ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/helpers/clipboard.ts:1279 store-write src/frontend/stores.ts#media .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 13. Full edges/effects/conditions in JSON.

## setTimeout — event-e2a92f4e5d990bc2d2

[code] [src/frontend/utils/shortcuts.ts:104](../../../../../src/frontend/utils/shortcuts.ts#L104); () => { closeContextMenu() topContextActive.set(false) }. resolved-within-bound.

Conditions: src/frontend/utils/shortcuts.ts:102 get(contextActive) \|\| get(topContextActive).

Calls: src/frontend/utils/shortcuts.ts:104 <callback> (depth 0); src/frontend/utils/shortcuts.ts:455 closeContextMenu (depth 1).

Effects: src/frontend/utils/shortcuts.ts:106 store-write src/frontend/stores.ts#topContextActive ; src/frontend/utils/shortcuts.ts:456 store-write src/frontend/stores.ts#contextActive ; src/frontend/utils/shortcuts.ts:457 store-write src/frontend/stores.ts#spellcheck .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-33dd6e341878a02fb9

[code] [src/frontend/utils/shortcuts.ts:117](../../../../../src/frontend/utils/shortcuts.ts#L117); () => selected.set({ id: null, data: &#91;&#93; }). resolved-within-bound.

Conditions: src/frontend/utils/shortcuts.ts:117 !popupId && get(selected).id; src/frontend/utils/shortcuts.ts:114 document.activeElement !== document.body.

Calls: src/frontend/utils/shortcuts.ts:117 <callback> (depth 0).

Effects: src/frontend/utils/shortcuts.ts:117 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-53ed42cf23208047b2

[code] [src/frontend/utils/shortcuts.ts:125](../../../../../src/frontend/utils/shortcuts.ts#L125); () => { if (popupId) activePopup.set(null) else if (get(selected).id) selected.set({ id: null, data: &#91;&#93; }) }. resolved-within-bound.

Conditions: src/frontend/utils/shortcuts.ts:126 popupId; src/frontend/utils/shortcuts.ts:127 get(selected).id.

Calls: src/frontend/utils/shortcuts.ts:125 <callback> (depth 0).

Effects: src/frontend/utils/shortcuts.ts:126 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/shortcuts.ts:127 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-a02cc8689e23d7700c

[code] [src/frontend/utils/shortcuts.ts:142](../../../../../src/frontend/utils/shortcuts.ts#L142); () => menuClick("rename", true, null, null, null, get(selected)). resolved-within-bound.

Conditions: src/frontend/utils/shortcuts.ts:142 get(focusMode).

Calls: src/frontend/utils/shortcuts.ts:142 <callback> (depth 0); src/frontend/components/context/menuClick.ts:136 menuClick (depth 1); src/frontend/components/context/menuClick.ts:263 rename (depth 2).

Effects: src/frontend/components/context/menuClick.ts:271 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:272 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:273 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:275 store-write src/frontend/stores.ts#selected ; src/frontend/components/context/menuClick.ts:276 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:278 store-write src/frontend/stores.ts#selected ; src/frontend/components/context/menuClick.ts:279 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:281 store-write src/frontend/stores.ts#selected ; src/frontend/components/context/menuClick.ts:282 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/context/menuClick.ts:283 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:284 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:285 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:286 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/context/menuClick.ts:287 store-write src/frontend/stores.ts#activeRename .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-abc46e7edd12419bfc

[code] [src/frontend/utils/shortcuts.ts:355](../../../../../src/frontend/utils/shortcuts.ts#L355); clearAll. partial.

Conditions: src/frontend/components/output/clear.ts:15 get(outLocked); src/frontend/components/output/clear.ts:16 !button && (get(activePopup) \|\| (get(selected).id && get(selected).id !== "scripture") \|\| (get(activePage) === "edit" && get(activeEdit).items.length) \|\| get(activeStage).items.len; src/frontend/components/output/clear.ts:23 allCleared.

Calls: src/frontend/components/output/clear.ts:14 clearAll (depth 0); src/frontend/components/helpers/output.ts:751 isOutCleared (depth 1); src/frontend/components/helpers/output.ts:674 getActiveOutputs (depth 2); src/frontend/components/helpers/array.ts:42 sortByName (depth 3); src/frontend/components/helpers/array.ts:45 <callback> (depth 4); src/frontend/components/helpers/array.ts:46 <callback> (depth 4); src/frontend/components/helpers/array.ts:137 keysToID (depth 3); src/frontend/components/helpers/array.ts:139 <callback> (depth 4); src/frontend/components/helpers/output.ts:677 <callback> (depth 3); src/frontend/components/helpers/output.ts:679 <callback> (depth 3); src/frontend/components/helpers/output.ts:679 <callback> (depth 3); src/frontend/components/helpers/output.ts:681 <callback> (depth 3); src/frontend/utils/common.ts:18 isMainWindow (depth 3); src/frontend/components/helpers/output.ts:1102 addOutput (depth 3); src/frontend/components/helpers/output.ts:1106 <callback> (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5).

Effects: src/frontend/components/output/clear.ts:30 presentation clearBackground ; src/frontend/components/output/clear.ts:31 presentation clearSlide ; src/frontend/components/output/clear.ts:32 presentation clearOverlays ; src/frontend/components/output/clear.ts:19 store-write src/frontend/stores.ts#outputSlideCache ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) ; src/frontend/components/output/clear.ts:39 store-write src/frontend/stores.ts#outputCache ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/output/clear.ts:43 store-write src/frontend/stores.ts#outputCache ; src/frontend/components/timeline/TimelinePlayback.ts:154 store-write src/frontend/stores.ts#isTimelinePlaying .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 44; depth cutoffs: 423. Full edges/effects/conditions in JSON.
