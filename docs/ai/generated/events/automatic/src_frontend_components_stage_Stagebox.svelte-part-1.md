# automatic/src_frontend_components_stage_Stagebox.svelte (1)

## setInterval — event-70a5389e02cc7117f2

[code] [src/frontend/components/stage/Stagebox.svelte:152](../../../../../src/frontend/components/stage/Stagebox.svelte#L152); () => (today = new Date()). resolved-within-bound.

Conditions: src/frontend/components/stage/Stagebox.svelte:151 (item?.type === "timer" \|\| id.includes("timer") \|\| id.includes("clock")) && !dateInterval && !disableStagePreview.

Calls: src/frontend/components/stage/Stagebox.svelte:152 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-e4d66926f63ba187f8

[code] [src/frontend/components/stage/Stagebox.svelte:180](../../../../../src/frontend/components/stage/Stagebox.svelte#L180); () => { // Check if the element has valid dimensions before measuring // If height is 0, the content hasn't rendered yet - retry with longer delay if (!alignElem \|\| alignElem.clien. partial.

Conditions: src/frontend/components/stage/Stagebox.svelte:183 !alignElem \|\| alignElem.clientHeight === 0; src/frontend/components/stage/Stagebox.svelte:186 autoSizeRetryCount < MAX_AUTOSIZE_RETRIES; src/frontend/components/stage/Stagebox.svelte:206 !isTextItem.

Calls: src/frontend/components/stage/Stagebox.svelte:180 <callback> (depth 0); src/frontend/components/stage/Stagebox.svelte:188 <callback> (depth 1); src/frontend/components/stage/Stagebox.svelte:178 updateAutoSize (depth 2); src/frontend/components/helpers/style.ts:6 getStyles (depth 1); src/frontend/components/helpers/style.ts:15 <callback> (depth 2); src/frontend/components/helpers/style.ts:22 <callback> (depth 3); src/frontend/components/helpers/style.ts:49 removeText (depth 3); src/frontend/components/helpers/style.ts:37 getFilters (depth 3); src/frontend/components/helpers/style.ts:41 <callback> (depth 4); src/frontend/components/edit/scripts/autosize.ts:19 autosize (depth 1); src/frontend/components/edit/scripts/autosize.ts:119 virtualElem (depth 2); src/frontend/components/edit/scripts/autosize.ts:132 <callback> (depth 3); src/frontend/components/edit/scripts/autosize.ts:151 <callback> (depth 3); src/frontend/components/edit/scripts/autosize.ts:152 <callback> (depth 3); src/frontend/components/edit/scripts/autosize.ts:166 <callback> (depth 3); src/frontend/components/edit/scripts/autosize.ts:176 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-9055e3b0aa07658c32

[code] [src/frontend/components/stage/Stagebox.svelte:188](../../../../../src/frontend/components/stage/Stagebox.svelte#L188); () => updateAutoSize(). partial.

Conditions: src/frontend/components/stage/Stagebox.svelte:186 autoSizeRetryCount < MAX_AUTOSIZE_RETRIES; src/frontend/components/stage/Stagebox.svelte:183 !alignElem \|\| alignElem.clientHeight === 0.

Calls: src/frontend/components/stage/Stagebox.svelte:188 <callback> (depth 0); src/frontend/components/stage/Stagebox.svelte:178 updateAutoSize (depth 1); src/frontend/components/stage/Stagebox.svelte:180 <callback> (depth 2); src/frontend/components/helpers/style.ts:6 getStyles (depth 3); src/frontend/components/helpers/style.ts:15 <callback> (depth 4); src/frontend/components/helpers/style.ts:22 <callback> (depth 5); src/frontend/components/helpers/style.ts:49 removeText (depth 5); src/frontend/components/helpers/style.ts:37 getFilters (depth 5); src/frontend/components/helpers/style.ts:41 <callback> (depth 6); src/frontend/components/edit/scripts/autosize.ts:19 autosize (depth 3); src/frontend/components/edit/scripts/autosize.ts:119 virtualElem (depth 4); src/frontend/components/edit/scripts/autosize.ts:132 <callback> (depth 5); src/frontend/components/edit/scripts/autosize.ts:151 <callback> (depth 5); src/frontend/components/edit/scripts/autosize.ts:152 <callback> (depth 5); src/frontend/components/edit/scripts/autosize.ts:166 <callback> (depth 5); src/frontend/components/edit/scripts/autosize.ts:176 <callback> (depth 5).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 1. Full edges/effects/conditions in JSON.

## setTimeout — event-5ee2a430ab867bf459

[code] [src/frontend/components/stage/Stagebox.svelte:229](../../../../../src/frontend/components/stage/Stagebox.svelte#L229); getCurrentBackground. partial.

Conditions: src/frontend/components/stage/Stagebox.svelte:233 item?.type ? !item.includeMedia : !id.includes("slide").

Calls: src/frontend/components/stage/Stagebox.svelte:232 getCurrentBackground (depth 0); src/frontend/utils/stageTalk.ts:19 sendBackgroundToStage (depth 1); src/frontend/utils/stageTalk.ts:46 getNextBackground (depth 2); src/frontend/components/helpers/shows.ts:389 ref (depth 3); src/frontend/components/helpers/shows.ts:394 <callback> (depth 4); src/frontend/components/helpers/shows.ts:397 <callback> (depth 5); src/frontend/components/helpers/shows.ts:402 <callback> (depth 6); src/frontend/components/helpers/shows.ts:415 <callback> (depth 6); src/frontend/components/helpers/shows.ts:103 set (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 6); src/frontend/components/helpers/shows.ts:424 <callback> (depth 6); src/frontend/components/edit/scripts/textStyle.ts:304 getSlideText (depth 5); src/frontend/components/edit/scripts/textStyle.ts:306 <callback> (depth 6); src/frontend/components/helpers/shows.ts:466 <callback> (depth 5); src/frontend/components/helpers/shows.ts:373 layouts (depth 3).

Effects: src/frontend/utils/stageTalk.ts:31 ipc send(STAGE, &#91;"BACKGROUND"&#93;, { path: "" }) ; src/frontend/utils/stageTalk.ts:42 ipc send(STAGE, &#91;"BACKGROUND"&#93;, bg) ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:128 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:144 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 9; depth cutoffs: 41. Full edges/effects/conditions in JSON.

## setTimeout — event-59bd455372c5ee4af2

[code] [src/frontend/components/stage/Stagebox.svelte:286](../../../../../src/frontend/components/stage/Stagebox.svelte#L286); () => { refreshEditSlide.set(false) }. resolved-within-bound.

Conditions: src/frontend/components/stage/Stagebox.svelte:285 $refreshEditSlide.

Calls: src/frontend/components/stage/Stagebox.svelte:286 <callback> (depth 0).

Effects: src/frontend/components/stage/Stagebox.svelte:287 store-write src/frontend/stores.ts#refreshEditSlide .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setInterval — event-a91f2ba67762d7241b

[code] [src/frontend/components/stage/Stagebox.svelte:315](../../../../../src/frontend/components/stage/Stagebox.svelte#L315); () => conditionsUpdater++. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/stage/Stagebox.svelte:315 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
