# automatic/src_frontend_components_edit_editbox_EditboxPaste.ts (1)

## setTimeout — event-5ea26c3bedd1fb9f87

[code] [src/frontend/components/edit/editbox/EditboxPaste.ts:304](../../../../../src/frontend/components/edit/editbox/EditboxPaste.ts#L304); () => { ctx.getStyle() setTimeout(() => { if (ctx.textElem) setCaret(ctx.textElem, caret) ctx.setPasting(false) }, 10) }. partial.

Conditions: src/frontend/components/edit/editbox/EditboxPaste.ts:307 ctx.textElem.

Calls: src/frontend/components/edit/editbox/EditboxPaste.ts:304 <callback> (depth 0); src/frontend/components/edit/editbox/EditboxPaste.ts:306 <callback> (depth 1); src/frontend/components/edit/scripts/textStyle.ts:353 setCaret (depth 2); src/frontend/components/edit/scripts/textStyle.ts:362 nodeTextLength (depth 3); src/frontend/components/edit/scripts/textStyle.ts:367 <callback> (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 13; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-c732cbc19f4bae04f8

[code] [src/frontend/components/edit/editbox/EditboxPaste.ts:306](../../../../../src/frontend/components/edit/editbox/EditboxPaste.ts#L306); () => { if (ctx.textElem) setCaret(ctx.textElem, caret) ctx.setPasting(false) }. partial.

Conditions: src/frontend/components/edit/editbox/EditboxPaste.ts:307 ctx.textElem.

Calls: src/frontend/components/edit/editbox/EditboxPaste.ts:306 <callback> (depth 0); src/frontend/components/edit/scripts/textStyle.ts:353 setCaret (depth 1); src/frontend/components/edit/scripts/textStyle.ts:362 nodeTextLength (depth 2); src/frontend/components/edit/scripts/textStyle.ts:367 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 0. Full edges/effects/conditions in JSON.
