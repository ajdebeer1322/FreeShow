# keyboard/src_frontend_utils_shortcuts.ts (1)

## Ctrl/Cmd+a — event-510628b73b67610368

[code] [src/frontend/utils/shortcuts.ts:39](../../../../../src/frontend/utils/shortcuts.ts#L39); () => selectAll(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:39 a (depth 0); src/frontend/components/helpers/clipboard.ts:236 selectAll (depth 1); src/frontend/components/edit/scripts/textStyle.ts:353 setCaret (depth 2); src/frontend/components/edit/scripts/textStyle.ts:362 nodeTextLength (depth 3); src/frontend/components/edit/scripts/textStyle.ts:367 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 13; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+c — event-03d75f6b33538762f3

[code] [src/frontend/utils/shortcuts.ts:40](../../../../../src/frontend/utils/shortcuts.ts#L40); () => copy(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:40 c (depth 0); src/frontend/components/helpers/clipboard.ts:84 copy (depth 1); src/frontend/utils/shortcutsHelper.ts:14 isFormField (depth 2); src/frontend/utils/shortcutsHelper.ts:3 copyFromTextField (depth 2); src/frontend/utils/shortcutsHelper.ts:19 isTextField (depth 3); src/frontend/utils/shortcutsHelper.ts:30 getTextFieldSelection (depth 3); src/frontend/components/helpers/slideTransfer.ts:340 getClickedSlideSelection (depth 2); src/frontend/components/helpers/slideTransfer.ts:347 getClickedSlide (depth 3); src/frontend/components/helpers/slideTransfer.ts:39 getSlideRef (depth 4); src/frontend/components/helpers/shows.ts:389 ref (depth 5); src/frontend/components/helpers/shows.ts:394 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 5); src/frontend/components/helpers/shows.ts:375 get (depth 6); src/frontend/components/helpers/shows.ts:476 set (depth 6); src/frontend/components/helpers/shows.ts:494 add (depth 6); src/frontend/components/helpers/shows.ts:506 remove (depth 6).

Effects: src/frontend/components/helpers/clipboard.ts:97 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/clipboard.ts:124 store-write src/frontend/stores.ts#clipboard ; src/frontend/utils/shortcutsHelper.ts:9 file-write navigator.clipboard.writeText ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 23. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+f — event-93c7fd6731970fe377

[code] [src/frontend/utils/shortcuts.ts:41](../../../../../src/frontend/utils/shortcuts.ts#L41); () => (shouldOpenReplace() ? activePopup.set("find_replace") : null). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:41 f (depth 0); src/frontend/utils/shortcuts.ts:147 shouldOpenReplace (depth 1).

Effects: src/frontend/utils/shortcuts.ts:41 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+v — event-3b1e4e5f0809ebd93b

[code] [src/frontend/utils/shortcuts.ts:42](../../../../../src/frontend/utils/shortcuts.ts#L42); () => paste(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:42 v (depth 0); src/frontend/components/helpers/clipboard.ts:135 paste (depth 1); src/frontend/components/helpers/caretHelper.ts:1 pasteText (depth 2); src/frontend/components/helpers/caretHelper.ts:6 <callback> (depth 3); src/frontend/components/helpers/caretHelper.ts:17 insertValue (depth 4); src/frontend/components/helpers/caretHelper.ts:37 getCaretPos (depth 5); src/frontend/components/helpers/caretHelper.ts:27 <callback> (depth 5); src/frontend/components/helpers/caretHelper.ts:46 pasteInDom (depth 4); src/frontend/components/helpers/caretHelper.ts:12 <callback> (depth 3); src/frontend/utils/shortcutsHelper.ts:14 isFormField (depth 2); src/frontend/components/helpers/clipboard.ts:1273 mediaPaste (depth 2); src/frontend/components/helpers/clipboard.ts:1277 <callback> (depth 3); src/frontend/components/helpers/clipboard.ts:1279 <callback> (depth 3); src/frontend/components/helpers/clipboard.ts:1280 <callback> (depth 4); src/frontend/components/helpers/clipboard.ts:1285 <callback> (depth 5); src/frontend/utils/common.ts:33 setStatus (depth 2).

Effects: src/frontend/components/helpers/clipboard.ts:1279 store-write src/frontend/stores.ts#media ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+d — event-bb748e1a699cb8b04a

[code] [src/frontend/utils/shortcuts.ts:44](../../../../../src/frontend/utils/shortcuts.ts#L44); () => setTimeout(() => duplicate(get(selected))). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:44 d (depth 0); src/frontend/utils/shortcuts.ts:44 <callback> (depth 1); src/frontend/components/helpers/clipboard.ts:215 duplicate (depth 2); src/frontend/components/helpers/clipboard.ts:84 copy (depth 3); src/frontend/utils/shortcutsHelper.ts:14 isFormField (depth 4); src/frontend/utils/shortcutsHelper.ts:3 copyFromTextField (depth 4); src/frontend/utils/shortcutsHelper.ts:19 isTextField (depth 5); src/frontend/utils/shortcutsHelper.ts:30 getTextFieldSelection (depth 5); src/frontend/components/helpers/slideTransfer.ts:340 getClickedSlideSelection (depth 4); src/frontend/components/helpers/slideTransfer.ts:347 getClickedSlide (depth 5); src/frontend/components/helpers/slideTransfer.ts:39 getSlideRef (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/utils/common.ts:33 setStatus (depth 4); src/frontend/utils/common.ts:39 <callback> (depth 5); src/frontend/components/helpers/clipboard.ts:135 paste (depth 3); src/frontend/components/helpers/caretHelper.ts:1 pasteText (depth 4).

Effects: src/frontend/components/helpers/clipboard.ts:97 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/clipboard.ts:124 store-write src/frontend/stores.ts#clipboard ; src/frontend/utils/shortcutsHelper.ts:9 file-write navigator.clipboard.writeText ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/helpers/clipboard.ts:1279 store-write src/frontend/stores.ts#media .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 7. Full edges/effects/conditions in JSON.

## Ctrl/Cmd+x — event-badd2f2f3a98736e62

[code] [src/frontend/utils/shortcuts.ts:45](../../../../../src/frontend/utils/shortcuts.ts#L45); () => cut(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/shortcuts.ts:45 x (depth 0); src/frontend/components/helpers/clipboard.ts:176 cut (depth 1); src/frontend/utils/shortcutsHelper.ts:14 isFormField (depth 2); src/frontend/utils/shortcutsHelper.ts:3 copyFromTextField (depth 2); src/frontend/utils/shortcutsHelper.ts:19 isTextField (depth 3); src/frontend/utils/shortcutsHelper.ts:30 getTextFieldSelection (depth 3); src/frontend/components/helpers/clipboard.ts:84 copy (depth 2); src/frontend/components/helpers/slideTransfer.ts:340 getClickedSlideSelection (depth 3); src/frontend/components/helpers/slideTransfer.ts:347 getClickedSlide (depth 4); src/frontend/components/helpers/slideTransfer.ts:39 getSlideRef (depth 5); src/frontend/components/helpers/shows.ts:389 ref (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/array.ts:181 clone (depth 3); src/frontend/utils/common.ts:33 setStatus (depth 3); src/frontend/utils/common.ts:39 <callback> (depth 4).

Effects: src/frontend/components/helpers/clipboard.ts:186 file-write navigator.clipboard.writeText ; src/frontend/utils/shortcutsHelper.ts:9 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/clipboard.ts:97 file-write navigator.clipboard.writeText ; src/frontend/components/helpers/clipboard.ts:124 store-write src/frontend/stores.ts#clipboard ; src/frontend/utils/common.ts:34 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/utils/common.ts:40 store-write src/frontend/stores.ts#statusIndicator ; src/frontend/components/helpers/clipboard.ts:211 store-write src/frontend/stores.ts#selected .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 13. Full edges/effects/conditions in JSON.
