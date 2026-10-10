# click/src_frontend_components_main_popups_Variable.svelte (3)

## click — event-38a7ecaf460c93f1d8

[code] [src/frontend/components/main/popups/Variable.svelte:380](../../../../../src/frontend/components/main/popups/Variable.svelte#L380); addTextSet. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number"; src/frontend/components/main/popups/Variable.svelte:338 currentVariable.type === "text_set"; src/frontend/components/main/popups/Variable.svelte:131 !currentVariable.textSets.

Calls: src/frontend/components/main/popups/Variable.svelte:130 addTextSet (depth 0); src/frontend/components/main/popups/Variable.svelte:135 <callback> (depth 1).

Effects: src/frontend/components/main/popups/Variable.svelte:135 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
