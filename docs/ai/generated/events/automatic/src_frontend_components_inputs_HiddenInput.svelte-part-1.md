# automatic/src_frontend_components_inputs_HiddenInput.svelte (1)

## setTimeout — event-0dec64728d0d47a444

[code] [src/frontend/components/inputs/HiddenInput.svelte:23](../../../../../src/frontend/components/inputs/HiddenInput.svelte#L23); () => inputElem?.focus(). resolved-within-bound.

Conditions: src/frontend/components/inputs/HiddenInput.svelte:19 e.target === nameElem.

Calls: src/frontend/components/inputs/HiddenInput.svelte:23 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-2bb7adf7c9f4822d3d

[code] [src/frontend/components/inputs/HiddenInput.svelte:31](../../../../../src/frontend/components/inputs/HiddenInput.svelte#L31); () => inputElem?.focus(). resolved-within-bound.

Conditions: src/frontend/components/inputs/HiddenInput.svelte:29 $activeRename === id.

Calls: src/frontend/components/inputs/HiddenInput.svelte:31 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-2b18132c84167403f7

[code] [src/frontend/components/inputs/HiddenInput.svelte:40](../../../../../src/frontend/components/inputs/HiddenInput.svelte#L40); () => { click(e) }. resolved-within-bound.

Conditions: src/frontend/components/inputs/HiddenInput.svelte:39 e.target === nameElem && allowEdit.

Calls: src/frontend/components/inputs/HiddenInput.svelte:40 <callback> (depth 0); src/frontend/components/inputs/HiddenInput.svelte:18 click (depth 1); src/frontend/components/inputs/HiddenInput.svelte:23 <callback> (depth 2); src/frontend/components/inputs/HiddenInput.svelte:90 cancelEdit (depth 2).

Effects: src/frontend/components/inputs/HiddenInput.svelte:21 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/inputs/HiddenInput.svelte:99 store-write src/frontend/stores.ts#activeRename .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-8e48fb25081f27c9c5

[code] [src/frontend/components/inputs/HiddenInput.svelte:59](../../../../../src/frontend/components/inputs/HiddenInput.svelte#L59); () => projectView.set(false). resolved-within-bound.

Conditions: src/frontend/components/inputs/HiddenInput.svelte:58 $activeRename?.includes("project_") && $activeProject === $activeRename.slice($activeRename.indexOf("_") + 1); src/frontend/components/inputs/HiddenInput.svelte:57 e.key === "Enter" \|\| e.key === "Tab".

Calls: src/frontend/components/inputs/HiddenInput.svelte:59 <callback> (depth 0).

Effects: src/frontend/components/inputs/HiddenInput.svelte:59 store-write src/frontend/stores.ts#projectView .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-a1bcffc9a3468aaba5

[code] [src/frontend/components/inputs/HiddenInput.svelte:102](../../../../../src/frontend/components/inputs/HiddenInput.svelte#L102); selectText. partial.

Conditions: src/frontend/components/inputs/HiddenInput.svelte:102 editingActive.

Calls: src/frontend/components/inputs/HiddenInput.svelte:103 selectText (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
