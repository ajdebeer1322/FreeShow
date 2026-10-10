# click/src_frontend_components_main_popups_Variable.svelte (2)

## click — event-e59eb031f273d41e37

[code] [src/frontend/components/main/popups/Variable.svelte:339](../../../../../src/frontend/components/main/popups/Variable.svelte#L339); resetTextSetValues. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number"; src/frontend/components/main/popups/Variable.svelte:338 currentVariable.type === "text_set"; src/frontend/components/main/popups/Variable.svelte:232 !currentVariable.textSets.

Calls: src/frontend/components/main/popups/Variable.svelte:231 resetTextSetValues (depth 0); src/frontend/components/main/popups/Variable.svelte:234 <callback> (depth 1); src/frontend/components/main/popups/Variable.svelte:236 <callback> (depth 1).

Effects: src/frontend/components/main/popups/Variable.svelte:236 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-396ceed95b450f1a01

[code] [src/frontend/components/main/popups/Variable.svelte:357](../../../../../src/frontend/components/main/popups/Variable.svelte#L357); () => moveKeyUp(keyIndex). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number"; src/frontend/components/main/popups/Variable.svelte:338 currentVariable.type === "text_set"; src/frontend/components/main/popups/Variable.svelte:355 (currentVariable.textSetKeys?.length ?? 1) > 1 && i === 0; src/frontend/components/main/popups/Variable.svelte:356 keyIndex > 0.

Calls: src/frontend/components/main/popups/Variable.svelte:176 moveKeyUp (depth 1); src/frontend/components/helpers/array.ts:27 moveToPos (depth 2); src/frontend/components/main/popups/Variable.svelte:182 <callback> (depth 2).

Effects: src/frontend/components/main/popups/Variable.svelte:182 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-47609aeb1e4872db3f

[code] [src/frontend/components/main/popups/Variable.svelte:359](../../../../../src/frontend/components/main/popups/Variable.svelte#L359); () => removeTextSetVariable(keyIndex). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number"; src/frontend/components/main/popups/Variable.svelte:338 currentVariable.type === "text_set"; src/frontend/components/main/popups/Variable.svelte:355 (currentVariable.textSetKeys?.length ?? 1) > 1 && i === 0.

Calls: src/frontend/components/main/popups/Variable.svelte:188 removeTextSetVariable (depth 1); src/frontend/components/main/popups/Variable.svelte:194 <callback> (depth 2).

Effects: src/frontend/components/main/popups/Variable.svelte:194 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-be6c84a2102684b038

[code] [src/frontend/components/main/popups/Variable.svelte:365](../../../../../src/frontend/components/main/popups/Variable.svelte#L365); addTextSetVariable. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number"; src/frontend/components/main/popups/Variable.svelte:338 currentVariable.type === "text_set"; src/frontend/components/main/popups/Variable.svelte:364 i === 0; src/frontend/components/main/popups/Variable.svelte:166 !currentVariable.textSetKeys.

Calls: src/frontend/components/main/popups/Variable.svelte:165 addTextSetVariable (depth 0); src/frontend/components/main/popups/Variable.svelte:170 <callback> (depth 1).

Effects: src/frontend/components/main/popups/Variable.svelte:170 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-0ebcc4905c5c892085

[code] [src/frontend/components/main/popups/Variable.svelte:373](../../../../../src/frontend/components/main/popups/Variable.svelte#L373); () => moveTextSetUp(i). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number"; src/frontend/components/main/popups/Variable.svelte:338 currentVariable.type === "text_set"; src/frontend/components/main/popups/Variable.svelte:371 i > 0.

Calls: src/frontend/components/main/popups/Variable.svelte:141 moveTextSetUp (depth 1); src/frontend/components/helpers/array.ts:27 moveToPos (depth 2); src/frontend/components/main/popups/Variable.svelte:147 <callback> (depth 2).

Effects: src/frontend/components/main/popups/Variable.svelte:147 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9b6f537b56a26468dd

[code] [src/frontend/components/main/popups/Variable.svelte:374](../../../../../src/frontend/components/main/popups/Variable.svelte#L374); () => removeTextSet(i). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Variable.svelte:251 !existing && !chosenType; src/frontend/components/main/popups/Variable.svelte:266 currentVariable.type === "number"; src/frontend/components/main/popups/Variable.svelte:274 currentVariable.type === "random_number"; src/frontend/components/main/popups/Variable.svelte:338 currentVariable.type === "text_set"; src/frontend/components/main/popups/Variable.svelte:371 i > 0.

Calls: src/frontend/components/main/popups/Variable.svelte:153 removeTextSet (depth 1); src/frontend/components/main/popups/Variable.svelte:159 <callback> (depth 2).

Effects: src/frontend/components/main/popups/Variable.svelte:159 store-write src/frontend/stores.ts#variables .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
