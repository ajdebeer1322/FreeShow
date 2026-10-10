# click/src_frontend_components_main_popups_MetadataDisplay.svelte (1)

## click — event-1a24d6e9097171673c

[code] [src/frontend/components/main/popups/MetadataDisplay.svelte:124](../../../../../src/frontend/components/main/popups/MetadataDisplay.svelte#L124); () => changeMetadata("display", data.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/MetadataDisplay.svelte:52 changeMetadata (depth 1); src/frontend/components/main/popups/MetadataDisplay.svelte:68 <callback> (depth 2); src/frontend/components/main/popups/MetadataDisplay.svelte:69 <callback> (depth 3); src/frontend/components/main/popups/MetadataDisplay.svelte:86 <callback> (depth 2); src/frontend/utils/language.ts:83 translateText (depth 3); src/frontend/utils/language.ts:89 <callback> (depth 4); src/frontend/utils/language.ts:96 <callback> (depth 4).

Effects: src/frontend/components/main/popups/MetadataDisplay.svelte:54 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/main/popups/MetadataDisplay.svelte:68 store-write src/frontend/stores.ts#categories ; src/frontend/components/main/popups/MetadataDisplay.svelte:86 store-write src/frontend/stores.ts#styles .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-fc6623ba9a70933294

[code] [src/frontend/components/main/popups/MetadataDisplay.svelte:141](../../../../../src/frontend/components/main/popups/MetadataDisplay.svelte#L141); () => (showMore = !showMore). resolved-within-bound.

Conditions: src/frontend/components/main/popups/MetadataDisplay.svelte:138 display === "default"; src/frontend/components/main/popups/MetadataDisplay.svelte:140 display !== "never".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-7840b95cc3e1b02647

[code] [src/frontend/components/main/popups/MetadataDisplay.svelte:148](../../../../../src/frontend/components/main/popups/MetadataDisplay.svelte#L148); () => editTemplate(templateAll). resolved-within-bound.

Conditions: src/frontend/components/main/popups/MetadataDisplay.svelte:138 display === "default"; src/frontend/components/main/popups/MetadataDisplay.svelte:140 display !== "never"; src/frontend/components/main/popups/MetadataDisplay.svelte:144 display === "always"; src/frontend/components/main/popups/MetadataDisplay.svelte:147 templateAll && $templates&#91;templateAll&#93;.

Calls: src/frontend/components/main/popups/MetadataDisplay.svelte:109 editTemplate (depth 1).

Effects: src/frontend/components/main/popups/MetadataDisplay.svelte:111 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/main/popups/MetadataDisplay.svelte:112 store-write src/frontend/stores.ts#activePage ; src/frontend/components/main/popups/MetadataDisplay.svelte:113 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b9aa2532243c93f704

[code] [src/frontend/components/main/popups/MetadataDisplay.svelte:157](../../../../../src/frontend/components/main/popups/MetadataDisplay.svelte#L157); () => editTemplate(templateFirst). resolved-within-bound.

Conditions: src/frontend/components/main/popups/MetadataDisplay.svelte:138 display === "default"; src/frontend/components/main/popups/MetadataDisplay.svelte:140 display !== "never"; src/frontend/components/main/popups/MetadataDisplay.svelte:153 display === "first_last" \|\| display === "always"; src/frontend/components/main/popups/MetadataDisplay.svelte:156 templateFirst && $templates&#91;templateFirst&#93;.

Calls: src/frontend/components/main/popups/MetadataDisplay.svelte:109 editTemplate (depth 1).

Effects: src/frontend/components/main/popups/MetadataDisplay.svelte:111 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/main/popups/MetadataDisplay.svelte:112 store-write src/frontend/stores.ts#activePage ; src/frontend/components/main/popups/MetadataDisplay.svelte:113 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c2fe25f44c720587e2

[code] [src/frontend/components/main/popups/MetadataDisplay.svelte:165](../../../../../src/frontend/components/main/popups/MetadataDisplay.svelte#L165); () => editTemplate(template). resolved-within-bound.

Conditions: src/frontend/components/main/popups/MetadataDisplay.svelte:138 display === "default"; src/frontend/components/main/popups/MetadataDisplay.svelte:140 display !== "never"; src/frontend/components/main/popups/MetadataDisplay.svelte:164 template && $templates&#91;template&#93;.

Calls: src/frontend/components/main/popups/MetadataDisplay.svelte:109 editTemplate (depth 1).

Effects: src/frontend/components/main/popups/MetadataDisplay.svelte:111 store-write src/frontend/stores.ts#activeEdit ; src/frontend/components/main/popups/MetadataDisplay.svelte:112 store-write src/frontend/stores.ts#activePage ; src/frontend/components/main/popups/MetadataDisplay.svelte:113 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
