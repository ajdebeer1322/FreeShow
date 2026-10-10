# automatic/src_frontend_components_main_popups_SelectTemplate.svelte (1)

## setTimeout — event-e270cdad2b0d1ba6de

[code] [src/frontend/components/main/popups/SelectTemplate.svelte:79](../../../../../src/frontend/components/main/popups/SelectTemplate.svelte#L79); () => { if ($popupData.trigger) { if (selectedType) $popupData.trigger({ value, type: selectedType }) else $popupData.trigger(value) } if ($popupData.doubleClick && !keyboard && pr. partial.

Conditions: src/frontend/components/main/popups/SelectTemplate.svelte:80 $popupData.trigger; src/frontend/components/main/popups/SelectTemplate.svelte:81 selectedType; src/frontend/components/main/popups/SelectTemplate.svelte:85 $popupData.doubleClick && !keyboard && previousValue !== template.id; src/frontend/components/main/popups/SelectTemplate.svelte:87 !revert.

Calls: src/frontend/components/main/popups/SelectTemplate.svelte:79 <callback> (depth 0); src/frontend/components/main/popups/SelectTemplate.svelte:87 <callback> (depth 1).

Effects: src/frontend/components/main/popups/SelectTemplate.svelte:88 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/SelectTemplate.svelte:87 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-cad9cc7a1a777ccc2c

[code] [src/frontend/components/main/popups/SelectTemplate.svelte:87](../../../../../src/frontend/components/main/popups/SelectTemplate.svelte#L87); () => popupData.set({}). resolved-within-bound.

Conditions: src/frontend/components/main/popups/SelectTemplate.svelte:87 !revert.

Calls: src/frontend/components/main/popups/SelectTemplate.svelte:87 <callback> (depth 0).

Effects: src/frontend/components/main/popups/SelectTemplate.svelte:87 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-8a0802796cf2534026

[code] [src/frontend/components/main/popups/SelectTemplate.svelte:117](../../../../../src/frontend/components/main/popups/SelectTemplate.svelte#L117); () => { const batch = lazyLoader === 0 ? 4 : Math.min(32, lazyLoader * 2) lazyLoader += batch }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/SelectTemplate.svelte:113 lazyLoader >= templatesList.length; src/frontend/components/main/popups/SelectTemplate.svelte:112 !loaded && templatesList?.length.

Calls: src/frontend/components/main/popups/SelectTemplate.svelte:117 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
