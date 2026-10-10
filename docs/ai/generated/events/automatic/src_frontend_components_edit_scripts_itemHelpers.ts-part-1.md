# automatic/src_frontend_components_edit_scripts_itemHelpers.ts (1)

## setTimeout — event-34c220d83d8e6a9b4e

[code] [src/frontend/components/edit/scripts/itemHelpers.ts:166](../../../../../src/frontend/components/edit/scripts/itemHelpers.ts#L166); () => { // get item elem const elem = Array.from(document.querySelectorAll(".editItem") \|\| &#91;&#93;) .at(selectedIndex) ?.querySelector(".edit") if (elem) (elem as HTMLElement).focus() s. partial.

Conditions: src/frontend/components/edit/scripts/itemHelpers.ts:164 type === "text" && textValue === ""; src/frontend/components/edit/scripts/itemHelpers.ts:171 elem.

Calls: src/frontend/components/edit/scripts/itemHelpers.ts:166 <callback> (depth 0); src/frontend/components/edit/scripts/textStyle.ts:353 setCaret (depth 1); src/frontend/components/edit/scripts/textStyle.ts:362 nodeTextLength (depth 2); src/frontend/components/edit/scripts/textStyle.ts:367 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 0. Full edges/effects/conditions in JSON.
