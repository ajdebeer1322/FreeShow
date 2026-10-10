# automatic/src_frontend_components_edit_editors_SlideEditor.svelte (1)

## setTimeout — event-fac3bad1b412e9a580

[code] [src/frontend/components/edit/editors/SlideEditor.svelte:122](../../../../../src/frontend/components/edit/editors/SlideEditor.svelte#L122); updateStyles. partial.

Conditions: src/frontend/components/edit/editors/SlideEditor.svelte:122 active.length; src/frontend/components/edit/editors/SlideEditor.svelte:128 !Object.keys(newStyles).length; src/frontend/components/edit/editors/SlideEditor.svelte:132 !slideId; src/frontend/components/edit/editors/SlideEditor.svelte:138 item; src/frontend/components/edit/editors/SlideEditor.svelte:155 !historyShow && currentShowId; src/frontend/components/edit/editors/SlideEditor.svelte:156 !historyShow; src/frontend/components/edit/editors/SlideEditor.svelte:164 !items&#91;0&#93;?.auto; src/frontend/components/edit/editors/SlideEditor.svelte:166 updateTimeout; src/frontend/components/edit/editors/SlideEditor.svelte:171 !a&#91;currentShowId&#93;?.slides?.&#91;slideId&#93;?.items?.&#91;activeItems&#91;0&#93; \|\| 0&#93;?.autoFontSize.

Calls: src/frontend/components/edit/editors/SlideEditor.svelte:127 updateStyles (depth 0); src/frontend/components/edit/editors/SlideEditor.svelte:136 <callback> (depth 1); src/frontend/components/helpers/style.ts:6 getStyles (depth 2); src/frontend/components/helpers/style.ts:15 <callback> (depth 3); src/frontend/components/helpers/style.ts:22 <callback> (depth 4); src/frontend/components/helpers/style.ts:49 removeText (depth 4); src/frontend/components/helpers/style.ts:37 getFilters (depth 4); src/frontend/components/helpers/style.ts:41 <callback> (depth 5); src/frontend/components/edit/editors/SlideEditor.svelte:144 <callback> (depth 2); src/frontend/components/edit/editors/SlideEditor.svelte:145 <callback> (depth 2); src/frontend/components/helpers/history.ts:39 history (depth 1); src/frontend/components/helpers/historyActions.ts:21 historyActions (depth 2); src/frontend/components/helpers/historyActions.ts:28 UPDATE (depth 3); src/frontend/components/helpers/historyActions.ts:41 handleUpdate (depth 4); src/frontend/components/helpers/historyActions.ts:904 errorMsg (depth 5); src/frontend/components/helpers/array.ts:181 clone (depth 5).

Effects: src/frontend/components/edit/editors/SlideEditor.svelte:158 history history setStyle; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:252 store-write src/frontend/stores.ts#deletedShows ; src/frontend/components/helpers/setShow.ts:247 store-write src/frontend/stores.ts#saved ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 9; depth cutoffs: 121. Full edges/effects/conditions in JSON.

## setTimeout — event-ca7320623a888e6237

[code] [src/frontend/components/edit/editors/SlideEditor.svelte:167](../../../../../src/frontend/components/edit/editors/SlideEditor.svelte#L167); resetAutoSize. resolved-within-bound.

Conditions: src/frontend/components/edit/editors/SlideEditor.svelte:171 !a&#91;currentShowId&#93;?.slides?.&#91;slideId&#93;?.items?.&#91;activeItems&#91;0&#93; \|\| 0&#93;?.autoFontSize.

Calls: src/frontend/components/edit/editors/SlideEditor.svelte:169 resetAutoSize (depth 0); src/frontend/components/edit/editors/SlideEditor.svelte:170 <callback> (depth 1).

Effects: src/frontend/components/edit/editors/SlideEditor.svelte:170 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-c09fcb6c261d9e30ab

[code] [src/frontend/components/edit/editors/SlideEditor.svelte:191](../../../../../src/frontend/components/edit/editors/SlideEditor.svelte#L191); () => { if (altTemp && document.hasFocus()) altKeyPressed = true }. resolved-within-bound.

Conditions: src/frontend/components/edit/editors/SlideEditor.svelte:185 e.altKey; src/frontend/components/edit/editors/SlideEditor.svelte:192 altTemp && document.hasFocus().

Calls: src/frontend/components/edit/editors/SlideEditor.svelte:191 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-96795e4696970a1c30

[code] [src/frontend/components/edit/editors/SlideEditor.svelte:257](../../../../../src/frontend/components/edit/editors/SlideEditor.svelte#L257); () => { // set focus to textbox if only one if (Slide?.items?.length === 1 && !$activeEdit.items.length) { activeEdit.update((a) => ({ ...(a \|\| {}), items: &#91;0&#93; })) const elem = doc. partial.

Conditions: src/frontend/components/edit/editors/SlideEditor.svelte:259 Slide?.items?.length === 1 && !$activeEdit.items.length; src/frontend/components/edit/editors/SlideEditor.svelte:262 elem && !$special.slideTimelineActive.

Calls: src/frontend/components/edit/editors/SlideEditor.svelte:257 <callback> (depth 0); src/frontend/components/edit/editors/SlideEditor.svelte:260 <callback> (depth 1); src/frontend/components/edit/editors/SlideEditor.svelte:263 <callback> (depth 1); src/frontend/components/edit/scripts/textStyle.ts:437 setCaretAtEnd (depth 2).

Effects: src/frontend/components/edit/editors/SlideEditor.svelte:260 store-write src/frontend/stores.ts#activeEdit .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.
