# keyboard/src_frontend_components_main_popups_Variable.svelte (1)

## dynamic — event-015eba15c72b1c3dd2

[code] [src/frontend/components/main/popups/Variable.svelte:264](../../../../../src/frontend/components/main/popups/Variable.svelte#L264); nameKeydown. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:243 currentVariable.type === "text" && e.key === "Enter" && e.target?.value.

Calls: src/frontend/components/main/popups/Variable.svelte:242 nameKeydown (depth 0).

Effects: src/frontend/components/main/popups/Variable.svelte:244 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## dynamic — event-b37a278fc3ea6087d1

[code] [src/frontend/components/main/popups/Variable.svelte:348](../../../../../src/frontend/components/main/popups/Variable.svelte#L348); textSetKeydown. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number"; src/frontend/components/main/popups/Variable.svelte:338 currentVariable.type === "text_set"; src/frontend/components/main/popups/Variable.svelte:347 i === 0; src/frontend/components/main/popups/Variable.svelte:213 e.key === "Tab" && e.target?.value.

Calls: src/frontend/components/main/popups/Variable.svelte:212 textSetKeydown (depth 0); src/frontend/components/main/popups/Variable.svelte:165 addTextSetVariable (depth 1); src/frontend/components/main/popups/Variable.svelte:170 <callback> (depth 2).

Effects: src/frontend/components/main/popups/Variable.svelte:170 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
