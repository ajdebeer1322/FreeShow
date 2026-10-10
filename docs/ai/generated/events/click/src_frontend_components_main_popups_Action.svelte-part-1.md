# click/src_frontend_components_main_popups_Action.svelte (1)

## click — event-a373dddb80bc65c654

[code] [src/frontend/components/main/popups/Action.svelte:399](../../../../../src/frontend/components/main/popups/Action.svelte#L399); () => (actionActivationSelector = false). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Action.svelte:395 mode === "slide" \|\| mode === "template" \|\| mode === "overlay"; src/frontend/components/main/popups/Action.svelte:398 actionActivationSelector.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b3d9a7fcd5e5ae2cca

[code] [src/frontend/components/main/popups/Action.svelte:401](../../../../../src/frontend/components/main/popups/Action.svelte#L401); () => (showCommonActivate = !showCommonActivate). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Action.svelte:395 mode === "slide" \|\| mode === "template" \|\| mode === "overlay"; src/frontend/components/main/popups/Action.svelte:398 actionActivationSelector.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e598d5702e627ce9c9

[code] [src/frontend/components/main/popups/Action.svelte:410](../../../../../src/frontend/components/main/popups/Action.svelte#L410); () => { updateValue("customActivation", activation.id) actionActivationSelector = false }. partial.

Conditions: src/frontend/components/main/popups/Action.svelte:395 mode === "slide" \|\| mode === "template" \|\| mode === "overlay"; src/frontend/components/main/popups/Action.svelte:398 actionActivationSelector; src/frontend/components/main/popups/Action.svelte:405 activation.common \|\| showCommonActivate.

Calls: src/frontend/components/main/popups/Action.svelte:132 updateValue (depth 1); src/frontend/components/helpers/media.ts:561 convertImagePathToIcon (depth 2); src/frontend/components/helpers/media.ts:564 <callback> (depth 3); src/frontend/components/helpers/media.ts:566 <callback> (depth 4); src/frontend/components/helpers/media.ts:585 <callback> (depth 4); src/frontend/components/helpers/media.ts:74 encodeFilePath (depth 4); src/frontend/components/helpers/media.ts:67 isLocalFile (depth 5); src/frontend/components/helpers/media.ts:54 splitPath (depth 5); src/frontend/components/helpers/media.ts:87 <callback> (depth 5); src/frontend/components/helpers/media.ts:62 joinPath (depth 5).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b6d7fb210c0f9352a7

[code] [src/frontend/components/main/popups/Action.svelte:423](../../../../../src/frontend/components/main/popups/Action.svelte#L423); () => (actionSelector = null). resolved-within-bound.

Conditions: src/frontend/components/main/popups/Action.svelte:395 mode === "slide" \|\| mode === "template" \|\| mode === "overlay"; src/frontend/components/main/popups/Action.svelte:398 actionActivationSelector; src/frontend/components/main/popups/Action.svelte:422 actionSelector !== null.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8d6536c5b9eebd9f76

[code] [src/frontend/components/main/popups/Action.svelte:456](../../../../../src/frontend/components/main/popups/Action.svelte#L456); () => { showMore = !showMore actionMoreOptionsUsed.set(showMore) }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Action.svelte:395 mode === "slide" \|\| mode === "template" \|\| mode === "overlay"; src/frontend/components/main/popups/Action.svelte:450 !mode && !actionSelector && !actionActivationSelector.

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/Action.svelte:458 store-write src/frontend/stores.ts#actionMoreOptionsUsed .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-33bc2a5d831e82dd24

[code] [src/frontend/components/main/popups/Action.svelte:542](../../../../../src/frontend/components/main/popups/Action.svelte#L542); () => { addTrigger = true actionSelector = { id: "" } }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/Action.svelte:395 mode === "slide" \|\| mode === "template" \|\| mode === "overlay"; src/frontend/components/main/popups/Action.svelte:518 !actionSelector && !actionActivationSelector; src/frontend/components/main/popups/Action.svelte:535 !action.triggers?.length \|\| addTrigger.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
