# automatic/src_frontend_components_slide_SlideItems.svelte (1)

## setInterval — event-0fd4b478fa4c9cfec5

[code] [src/frontend/components/slide/SlideItems.svelte:59](../../../../../src/frontend/components/slide/SlideItems.svelte#L59); () => (today = new Date()). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/slide/SlideItems.svelte:59 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-e64845d193a2a0f3ea

[code] [src/frontend/components/slide/SlideItems.svelte:79](../../../../../src/frontend/components/slide/SlideItems.svelte#L79); () => { autosizeTimeout = null if (!itemElem) return let textQuery = item.type === "slide_tracker" ? ".progress div" : "" autoSize = autosize(itemElem!, { type: "growToFit", textQu. partial.

Conditions: src/frontend/components/slide/SlideItems.svelte:81 !itemElem.

Calls: src/frontend/components/slide/SlideItems.svelte:79 <callback> (depth 0); src/frontend/components/edit/scripts/autosize.ts:19 autosize (depth 1); src/frontend/components/edit/scripts/autosize.ts:119 virtualElem (depth 2); src/frontend/components/edit/scripts/autosize.ts:132 <callback> (depth 3); src/frontend/components/edit/scripts/autosize.ts:151 <callback> (depth 3); src/frontend/components/edit/scripts/autosize.ts:152 <callback> (depth 3); src/frontend/components/edit/scripts/autosize.ts:166 <callback> (depth 3); src/frontend/components/edit/scripts/autosize.ts:176 <callback> (depth 3); src/frontend/components/edit/scripts/autosize.ts:49 <callback> (depth 2); src/frontend/components/edit/scripts/autosize.ts:54 <callback> (depth 2); src/frontend/components/edit/scripts/autosize.ts:98 addStyleToElemText (depth 2); src/frontend/components/edit/scripts/autosize.ts:92 textIsBiggerThanBox (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 4; depth cutoffs: 0. Full edges/effects/conditions in JSON.
