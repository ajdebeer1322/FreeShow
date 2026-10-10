# automatic/src_frontend_components_edit_editbox_EditboxLines.svelte (1)

## setTimeout — event-b9e7a7c29f03a97eac

[code] [src/frontend/components/edit/editbox/EditboxLines.svelte:48](../../../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L48); () => { loaded = true autoSize = item?.autoFontSize \|\| 0 scheduleAutoSize(true) // trigger auto size update after font has loaded document.fonts?.ready?.then(() => scheduleAutoSize. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/edit/editbox/EditboxLines.svelte:48 <callback> (depth 0); src/frontend/components/edit/editbox/EditboxLines.svelte:399 scheduleAutoSize (depth 1); src/frontend/components/edit/editbox/EditboxLines.svelte:426 cancelScheduledAutoSize (depth 2); src/frontend/components/edit/editbox/EditboxLines.svelte:433 runAutoSize (depth 2); src/frontend/components/helpers/style.ts:6 getStyles (depth 3); src/frontend/components/helpers/style.ts:15 <callback> (depth 4); src/frontend/components/helpers/style.ts:22 <callback> (depth 5); src/frontend/components/helpers/style.ts:49 removeText (depth 5); src/frontend/components/helpers/style.ts:37 getFilters (depth 5); src/frontend/components/helpers/style.ts:41 <callback> (depth 6); src/frontend/components/edit/scripts/autosize.ts:19 autosize (depth 3); src/frontend/components/edit/scripts/autosize.ts:119 virtualElem (depth 4); src/frontend/components/edit/scripts/autosize.ts:132 <callback> (depth 5); src/frontend/components/edit/scripts/autosize.ts:151 <callback> (depth 5); src/frontend/components/edit/scripts/autosize.ts:152 <callback> (depth 5); src/frontend/components/edit/scripts/autosize.ts:166 <callback> (depth 5).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 8; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## setTimeout — event-316da3d4912b869b55

[code] [src/frontend/components/edit/editbox/EditboxLines.svelte:67](../../../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L67); getStyle. partial.

Conditions: src/frontend/components/edit/editbox/EditboxLines.svelte:65 $activeEdit.slide !== null && $activeEdit.slide !== undefined && $activeEdit.slide !== currentSlide && !composing; src/frontend/components/edit/editbox/EditboxLines.svelte:114 composing; src/frontend/components/edit/editbox/EditboxLines.svelte:115 !plain && $activeEdit.slide === null.

Calls: src/frontend/components/edit/editbox/EditboxLines.svelte:113 getStyle (depth 0); src/frontend/components/edit/editbox/EditboxHelper.ts:178 getStyleHtml (depth 1); src/frontend/components/edit/editbox/EditboxHelper.ts:189 <callback> (depth 2); src/frontend/components/edit/editbox/EditboxHelper.ts:207 <callback> (depth 3); src/frontend/components/edit/editbox/EditboxHelper.ts:230 getTextStyle (depth 4); src/frontend/components/edit/editbox/EditboxHelper.ts:213 <callback> (depth 4); src/frontend/components/edit/editbox/EditboxHelper.ts:236 getCustomTextStyle (depth 4); src/frontend/components/helpers/style.ts:6 getStyles (depth 5); src/frontend/components/helpers/style.ts:15 <callback> (depth 6); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 5); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 6); src/frontend/components/helpers/output.ts:608 getAllOutputs (depth 6); src/frontend/components/helpers/output.ts:665 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:1102 addOutput (depth 6); src/frontend/components/helpers/array.ts:137 keysToID (depth 6).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 13. Full edges/effects/conditions in JSON.

## setTimeout — event-1072d72b5607d2bca5

[code] [src/frontend/components/edit/editbox/EditboxLines.svelte:110](../../../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L110); () => (shapeOffsetTop = calculateShapeVerticalOffset(textElem, item?.align)). partial.

Conditions: src/frontend/components/edit/editbox/EditboxLines.svelte:109 shapeOutside && textElem && (html \|\| item?.align).

Calls: src/frontend/components/edit/editbox/EditboxLines.svelte:110 <callback> (depth 0); src/frontend/components/edit/scripts/shapeOutside.ts:81 calculateShapeVerticalOffset (depth 1); src/frontend/components/helpers/style.ts:6 getStyles (depth 2); src/frontend/components/helpers/style.ts:15 <callback> (depth 3); src/frontend/components/helpers/style.ts:22 <callback> (depth 4); src/frontend/components/helpers/style.ts:49 removeText (depth 4); src/frontend/components/helpers/style.ts:37 getFilters (depth 4); src/frontend/components/helpers/style.ts:41 <callback> (depth 5); src/frontend/components/edit/scripts/shapeOutside.ts:87 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-ff02f1c9d88c8c2c56

[code] [src/frontend/components/edit/editbox/EditboxLines.svelte:128](../../../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L128); updateLines. partial.

Conditions: src/frontend/components/edit/editbox/EditboxLines.svelte:125 textElem && html !== previousHTML && !composing; src/frontend/components/edit/editbox/EditboxLines.svelte:256 composing; src/frontend/components/edit/editbox/EditboxLines.svelte:259 !newLines?.length; src/frontend/components/edit/editbox/EditboxLines.svelte:260 item; src/frontend/components/edit/editbox/EditboxLines.svelte:262 $activeEdit.type === "overlay"; src/frontend/components/edit/editbox/EditboxLines.svelte:263 $activeEdit.type === "template"; src/frontend/components/edit/editbox/EditboxLines.svelte:264 ref.type === "stage"; src/frontend/components/edit/editbox/EditboxLines.svelte:266 !a&#91;$activeStage.id!&#93;?.items?.&#91;ref.id&#93;; src/frontend/components/edit/editbox/EditboxLines.svelte:271 ref.id; src/frontend/components/edit/editbox/EditboxLines.svelte:274 lastRedo?.id === "SHOW_ITEMS"; src/frontend/components/edit/editbox/EditboxLines.svelte:280 historyText === linesText; src/frontend/components/edit/editbox/EditboxLines.svelte:289 lastChangedLine > -1 && (item?.lines \|\| &#91;&#93;).length !== newLines.length && !keyboardLineMutation && !editingThisTextElem; src/frontend/components/edit/editbox/EditboxLines.svelte:291 updates >= 15; src/frontend/components/edit/editbox/EditboxLines.svelte:300 lineStyleBg.

Calls: src/frontend/components/edit/editbox/EditboxLines.svelte:255 updateLines (depth 0); src/frontend/components/edit/editbox/EditboxLines.svelte:459 getNewLines (depth 1); src/frontend/components/edit/editbox/EditboxLines.svelte:468 attrIndex (depth 2); src/frontend/components/edit/editbox/EditboxLines.svelte:473 <callback> (depth 2); src/frontend/components/edit/editbox/EditboxLines.svelte:485 <callback> (depth 3); src/frontend/components/edit/editbox/EditboxLines.svelte:559 <callback> (depth 3); src/frontend/components/edit/editbox/EditboxLines.svelte:560 shared (depth 3); src/frontend/components/edit/editbox/EditboxLines.svelte:562 <callback> (depth 3); src/frontend/components/edit/editbox/EditboxLines.svelte:564 <callback> (depth 3); src/frontend/components/edit/editbox/EditboxLines.svelte:565 <callback> (depth 3); src/frontend/components/edit/editbox/EditboxLines.svelte:565 <callback> (depth 3); src/frontend/components/edit/scripts/textStyle.ts:137 getSelectionRange (depth 2); src/frontend/components/edit/scripts/textStyle.ts:148 <callback> (depth 3); src/frontend/components/edit/scripts/textStyle.ts:150 lineLength (depth 3); src/frontend/components/edit/scripts/textStyle.ts:155 getBoundary (depth 3); src/frontend/components/edit/scripts/textStyle.ts:156 <callback> (depth 4).

Effects: src/frontend/components/edit/editbox/EditboxLines.svelte:359 history history SHOW_ITEMS; src/frontend/components/edit/editbox/EditboxLines.svelte:262 store-write src/frontend/stores.ts#overlays ; src/frontend/components/edit/editbox/EditboxLines.svelte:263 store-write src/frontend/stores.ts#templates ; src/frontend/components/edit/editbox/EditboxLines.svelte:362 store-write src/frontend/stores.ts#refreshListBoxes ; src/frontend/components/edit/editbox/EditboxLines.svelte:265 store-write src/frontend/stores.ts#stageShows ; src/frontend/components/edit/editbox/EditboxLines.svelte:267 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/edit/editbox/EditboxLines.svelte:268 store-write src/frontend/stores.ts#activeStage ; src/frontend/components/edit/editbox/EditboxLines.svelte:314 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 25; depth cutoffs: 124. Full edges/effects/conditions in JSON.

## setTimeout — event-06f612767afac22076

[code] [src/frontend/components/edit/editbox/EditboxLines.svelte:132](../../../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L132); () => { setCaret(textElem, { line, pos }) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/edit/editbox/EditboxLines.svelte:132 <callback> (depth 0); src/frontend/components/edit/scripts/textStyle.ts:353 setCaret (depth 1); src/frontend/components/edit/scripts/textStyle.ts:362 nodeTextLength (depth 2); src/frontend/components/edit/scripts/textStyle.ts:367 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-12d122769a7ecf2012

[code] [src/frontend/components/edit/editbox/EditboxLines.svelte:240](../../../../../src/frontend/components/edit/editbox/EditboxLines.svelte#L240); () => { // timeout because elem is refreshed first const elem = document.querySelector(".editItem")?.querySelector(".edit") if (elem) (elem as HTMLElement).focus() // set caret at. partial.

Conditions: src/frontend/components/edit/editbox/EditboxLines.svelte:243 elem.

Calls: src/frontend/components/edit/editbox/EditboxLines.svelte:240 <callback> (depth 0); src/frontend/components/edit/scripts/textStyle.ts:137 getSelectionRange (depth 1); src/frontend/components/edit/scripts/textStyle.ts:148 <callback> (depth 2); src/frontend/components/edit/scripts/textStyle.ts:150 lineLength (depth 2); src/frontend/components/edit/scripts/textStyle.ts:155 getBoundary (depth 2); src/frontend/components/edit/scripts/textStyle.ts:156 <callback> (depth 3); src/frontend/components/edit/scripts/textStyle.ts:353 setCaret (depth 1); src/frontend/components/edit/scripts/textStyle.ts:362 nodeTextLength (depth 2); src/frontend/components/edit/scripts/textStyle.ts:367 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 16; depth cutoffs: 0. Full edges/effects/conditions in JSON.
