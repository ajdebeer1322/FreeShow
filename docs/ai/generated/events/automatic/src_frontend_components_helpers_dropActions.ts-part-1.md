# automatic/src_frontend_components_helpers_dropActions.ts (1)

## setTimeout — event-b212275e715d0ca160

[code] [src/frontend/components/helpers/dropActions.ts:272](../../../../../src/frontend/components/helpers/dropActions.ts#L272); () => { activeShow.set({ id: newShowId, type: newShowType, index: replaceIndex }) activeEdit.set({ type: "show", slide: 0, items: &#91;&#93;, showId: newShowId }) }. resolved-within-bound.

Conditions: src/frontend/components/helpers/dropActions.ts:271 newShowId && replaceIndex !== undefined; src/frontend/components/helpers/dropActions.ts:260 isReplacing.

Calls: src/frontend/components/helpers/dropActions.ts:272 <callback> (depth 0).

Effects: src/frontend/components/helpers/dropActions.ts:273 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/dropActions.ts:274 store-write src/frontend/stores.ts#activeEdit .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
