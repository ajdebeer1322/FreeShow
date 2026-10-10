# click/src_frontend_components_inputs_MaterialTextInput.svelte (1)

## click — event-35cba4b48da474730e

[code] [src/frontend/components/inputs/MaterialTextInput.svelte:94](../../../../../src/frontend/components/inputs/MaterialTextInput.svelte#L94); () => updateValue(autofill). partial.

Conditions: src/frontend/components/inputs/MaterialTextInput.svelte:93 autofill.

Calls: src/frontend/components/inputs/MaterialTextInput.svelte:55 updateValue (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-35354fe1d68524a783

[code] [src/frontend/components/inputs/MaterialTextInput.svelte:101](../../../../../src/frontend/components/inputs/MaterialTextInput.svelte#L101); reset. partial.

Conditions: src/frontend/components/inputs/MaterialTextInput.svelte:99 defaultValue !== null; src/frontend/components/inputs/MaterialTextInput.svelte:100 value !== defaultValue.

Calls: src/frontend/components/inputs/MaterialTextInput.svelte:63 reset (depth 0); src/frontend/components/inputs/MaterialTextInput.svelte:55 updateValue (depth 1); src/frontend/components/inputs/MaterialTextInput.svelte:66 <callback> (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f816c71f74f35eb132

[code] [src/frontend/components/inputs/MaterialTextInput.svelte:105](../../../../../src/frontend/components/inputs/MaterialTextInput.svelte#L105); undoReset. partial.

Conditions: src/frontend/components/inputs/MaterialTextInput.svelte:99 defaultValue !== null; src/frontend/components/inputs/MaterialTextInput.svelte:100 value !== defaultValue; src/frontend/components/inputs/MaterialTextInput.svelte:104 resetFromValue !== null.

Calls: src/frontend/components/inputs/MaterialTextInput.svelte:71 undoReset (depth 0); src/frontend/components/inputs/MaterialTextInput.svelte:55 updateValue (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-90b23a1a87af9b012b

[code] [src/frontend/components/inputs/MaterialTextInput.svelte:113](../../../../../src/frontend/components/inputs/MaterialTextInput.svelte#L113); (e) => { showText = !showText const input = e.detail.target?.closest(".textfield")?.querySelector("input") if (input) input.focus() }. resolved-within-bound.

Conditions: src/frontend/components/inputs/MaterialTextInput.svelte:111 type === "password" && (!pasteBtn \|\| value).

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a70b10f86a296a8acb

[code] [src/frontend/components/inputs/MaterialTextInput.svelte:125](../../../../../src/frontend/components/inputs/MaterialTextInput.svelte#L125); (e) => { const textInput = e.detail.target?.closest(".textfield")?.querySelector("input") pasteText(textInput) if (textInput) textInput.focus() }. resolved-within-bound.

Conditions: src/frontend/components/inputs/MaterialTextInput.svelte:111 type === "password" && (!pasteBtn \|\| value); src/frontend/components/inputs/MaterialTextInput.svelte:123 pasteBtn && !value && !disabled.

Calls: src/frontend/components/helpers/caretHelper.ts:1 pasteText (depth 1); src/frontend/components/helpers/caretHelper.ts:6 <callback> (depth 2); src/frontend/components/helpers/caretHelper.ts:17 insertValue (depth 3); src/frontend/components/helpers/caretHelper.ts:37 getCaretPos (depth 4); src/frontend/components/helpers/caretHelper.ts:27 <callback> (depth 4); src/frontend/components/helpers/caretHelper.ts:46 pasteInDom (depth 3); src/frontend/components/helpers/caretHelper.ts:12 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
