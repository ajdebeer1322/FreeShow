# automatic/src_frontend_components_actions_actions.ts (1)

## setTimeout — event-510eae49a010bc318b

[code] [src/frontend/components/actions/actions.ts:49](../../../../../src/frontend/components/actions/actions.ts#L49); () => { loopPrevention.actionId = "" loopPrevention.count = 0 }. resolved-within-bound.

Conditions: src/frontend/components/actions/actions.ts:43 loopPrevention.actionId === action.id.

Calls: src/frontend/components/actions/actions.ts:49 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-ccc622527b0de38e2b

[code] [src/frontend/components/actions/actions.ts:65](../../../../../src/frontend/components/actions/actions.ts#L65); () => { runningActions.update((a) => { const currentIndex = a.findIndex((id) => action.id === id) if (currentIndex < 0) return a a.splice(currentIndex, 1) return a }) }. resolved-within-bound.

Conditions: src/frontend/components/actions/actions.ts:68 currentIndex < 0.

Calls: src/frontend/components/actions/actions.ts:65 <callback> (depth 0); src/frontend/components/actions/actions.ts:66 <callback> (depth 1); src/frontend/components/actions/actions.ts:67 <callback> (depth 2).

Effects: src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
