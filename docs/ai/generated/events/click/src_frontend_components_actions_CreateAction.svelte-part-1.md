# click/src_frontend_components_actions_CreateAction.svelte (1)

## click — event-c3a88bd952497de905

[code] [src/frontend/components/actions/CreateAction.svelte:252](../../../../../src/frontend/components/actions/CreateAction.svelte#L252); () => (pickAction = true). resolved-within-bound.

Conditions: src/frontend/components/actions/CreateAction.svelte:249 list; src/frontend/components/actions/CreateAction.svelte:250 actionId && !pickAction && !full.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e48476af8b4e76894b

[code] [src/frontend/components/actions/CreateAction.svelte:266](../../../../../src/frontend/components/actions/CreateAction.svelte#L266); () => { commonOnly = !commonOnly actionRevealUsed.set(!commonOnly) }. resolved-within-bound.

Conditions: src/frontend/components/actions/CreateAction.svelte:249 list; src/frontend/components/actions/CreateAction.svelte:250 actionId && !pickAction && !full; src/frontend/components/actions/CreateAction.svelte:260 mode !== "slide".

Calls: no function target resolved.

Effects: src/frontend/components/actions/CreateAction.svelte:268 store-write src/frontend/stores.ts#actionRevealUsed .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-26915087d521ea40f3

[code] [src/frontend/components/actions/CreateAction.svelte:286](../../../../../src/frontend/components/actions/CreateAction.svelte#L286); () => changeAction({ ...action, index: full ? undefined : 0 }). partial.

Conditions: src/frontend/components/actions/CreateAction.svelte:249 list; src/frontend/components/actions/CreateAction.svelte:250 actionId && !pickAction && !full; src/frontend/components/actions/CreateAction.svelte:274 searchedActions.length.

Calls: src/frontend/components/actions/CreateAction.svelte:40 changeAction (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-eee6538ea87a5f8035

[code] [src/frontend/components/actions/CreateAction.svelte:311](../../../../../src/frontend/components/actions/CreateAction.svelte#L311); () => changeAction({ id: "move_up", index: actionNameIndex - 1 }). partial.

Conditions: src/frontend/components/actions/CreateAction.svelte:249 list; src/frontend/components/actions/CreateAction.svelte:309 actionId && existingActions.length > 1; src/frontend/components/actions/CreateAction.svelte:310 actionNameIndex > 1.

Calls: src/frontend/components/actions/CreateAction.svelte:40 changeAction (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-1695b3b730ec910686

[code] [src/frontend/components/actions/CreateAction.svelte:313](../../../../../src/frontend/components/actions/CreateAction.svelte#L313); () => changeAction({ id: "remove", index: actionNameIndex - 1 }). partial.

Conditions: src/frontend/components/actions/CreateAction.svelte:249 list; src/frontend/components/actions/CreateAction.svelte:309 actionId && existingActions.length > 1.

Calls: src/frontend/components/actions/CreateAction.svelte:40 changeAction (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6586165c93b47f5e23

[code] [src/frontend/components/actions/CreateAction.svelte:322](../../../../../src/frontend/components/actions/CreateAction.svelte#L322); (e) => changeAction(e.detail). partial.

Conditions: src/frontend/components/actions/CreateAction.svelte:249 list; src/frontend/components/actions/CreateAction.svelte:321 !choosePopup.

Calls: src/frontend/components/actions/CreateAction.svelte:40 changeAction (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
