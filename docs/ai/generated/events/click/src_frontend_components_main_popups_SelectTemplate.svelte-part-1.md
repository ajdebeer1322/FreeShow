# click/src_frontend_components_main_popups_SelectTemplate.svelte (1)

## click — event-eebb7ec5a0fb3327db

[code] [src/frontend/components/main/popups/SelectTemplate.svelte:150](../../../../../src/frontend/components/main/popups/SelectTemplate.svelte#L150); () => activePopup.set(revert). resolved-within-bound.

Conditions: src/frontend/components/main/popups/SelectTemplate.svelte:149 revert.

Calls: no function target resolved.

Effects: src/frontend/components/main/popups/SelectTemplate.svelte:150 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-351bb66c0621ac28bb

[code] [src/frontend/components/main/popups/SelectTemplate.svelte:163](../../../../../src/frontend/components/main/popups/SelectTemplate.svelte#L163); () => selectTemplate(""). partial.

Conditions: src/frontend/components/main/popups/SelectTemplate.svelte:160 templatesList.length; src/frontend/components/main/popups/SelectTemplate.svelte:162 allowEmpty \|\| (customTypes && selectedType !== types&#91;0&#93;?.value).

Calls: src/frontend/components/main/popups/SelectTemplate.svelte:74 selectTemplate (depth 1); src/frontend/components/main/popups/SelectTemplate.svelte:79 <callback> (depth 2); src/frontend/components/main/popups/SelectTemplate.svelte:87 <callback> (depth 3).

Effects: src/frontend/components/main/popups/SelectTemplate.svelte:88 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/SelectTemplate.svelte:87 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-64a55457dfc3e9f3a0

[code] [src/frontend/components/main/popups/SelectTemplate.svelte:171](../../../../../src/frontend/components/main/popups/SelectTemplate.svelte#L171); () => selectTemplate(template). partial.

Conditions: src/frontend/components/main/popups/SelectTemplate.svelte:160 templatesList.length.

Calls: src/frontend/components/main/popups/SelectTemplate.svelte:74 selectTemplate (depth 1); src/frontend/components/main/popups/SelectTemplate.svelte:79 <callback> (depth 2); src/frontend/components/main/popups/SelectTemplate.svelte:87 <callback> (depth 3).

Effects: src/frontend/components/main/popups/SelectTemplate.svelte:88 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/SelectTemplate.svelte:87 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
