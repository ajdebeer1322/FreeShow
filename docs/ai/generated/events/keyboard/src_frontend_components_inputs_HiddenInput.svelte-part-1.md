# keyboard/src_frontend_components_inputs_HiddenInput.svelte (1)

## dynamic — event-ed487d6bf6bd6dd255

[code] [src/frontend/components/inputs/HiddenInput.svelte:108](../../../../../src/frontend/components/inputs/HiddenInput.svelte#L108); keydown. resolved-within-bound.

Conditions: src/frontend/components/inputs/HiddenInput.svelte:57 e.key === "Enter" \|\| e.key === "Tab"; src/frontend/components/inputs/HiddenInput.svelte:58 $activeRename?.includes("project_") && $activeProject === $activeRename.slice($activeRename.indexOf("_") + 1).

Calls: src/frontend/components/inputs/HiddenInput.svelte:56 keydown (depth 0); src/frontend/components/inputs/HiddenInput.svelte:59 <callback> (depth 1); src/frontend/components/inputs/HiddenInput.svelte:90 cancelEdit (depth 1).

Effects: src/frontend/components/inputs/HiddenInput.svelte:59 store-write src/frontend/stores.ts#projectView ; src/frontend/components/inputs/HiddenInput.svelte:99 store-write src/frontend/stores.ts#activeRename .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-39fe42c43a2ead8a84

[code] [src/frontend/components/inputs/HiddenInput.svelte:116](../../../../../src/frontend/components/inputs/HiddenInput.svelte#L116); (e) => { // stop space from triggering other keydown events if (e.key === " ") e.stopPropagation() }. resolved-within-bound.

Conditions: src/frontend/components/inputs/HiddenInput.svelte:111 editingActive.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
