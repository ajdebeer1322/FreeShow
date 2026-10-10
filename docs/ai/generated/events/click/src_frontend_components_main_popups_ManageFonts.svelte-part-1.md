# click/src_frontend_components_main_popups_ManageFonts.svelte (1)

## click — event-a8e2ba674edc648119

[code] [src/frontend/components/main/popups/ManageFonts.svelte:135](../../../../../src/frontend/components/main/popups/ManageFonts.svelte#L135); () => toggleHiddenSystemFont(font.label). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/popups/ManageFonts.svelte:86 toggleHiddenSystemFont (depth 1); src/frontend/components/main/popups/ManageFonts.svelte:87 <callback> (depth 2); src/frontend/components/main/popups/ManageFonts.svelte:90 <callback> (depth 2).

Effects: src/frontend/components/main/popups/ManageFonts.svelte:90 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4118947d5812a7f633

[code] [src/frontend/components/main/popups/ManageFonts.svelte:154](../../../../../src/frontend/components/main/popups/ManageFonts.svelte#L154); () => removeFont(index). resolved-within-bound.

Conditions: src/frontend/components/main/popups/ManageFonts.svelte:145 fonts.length.

Calls: src/frontend/components/main/popups/ManageFonts.svelte:81 removeFont (depth 1); src/frontend/components/main/popups/ManageFonts.svelte:82 <callback> (depth 2).

Effects: src/frontend/components/main/popups/ManageFonts.svelte:82 store-write src/frontend/stores.ts#customFonts .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-ffc72feee664982a89

[code] [src/frontend/components/main/popups/ManageFonts.svelte:171](../../../../../src/frontend/components/main/popups/ManageFonts.svelte#L171); addGoogleFont. partial.

Conditions: src/frontend/components/main/popups/ManageFonts.svelte:163 newFontInput.

Calls: src/frontend/components/main/popups/ManageFonts.svelte:72 addGoogleFont (depth 0); src/frontend/components/main/popups/ManageFonts.svelte:53 addFont (depth 1); src/frontend/components/helpers/fonts.ts:221 loadCustomFont (depth 2); src/frontend/components/helpers/fonts.ts:230 loadUnknownType (depth 3); src/frontend/components/helpers/fonts.ts:241 loadLocalFont (depth 4); src/frontend/components/helpers/fonts.ts:205 filePathToURL (depth 5); src/frontend/components/helpers/fonts.ts:307 extractFontInfo (depth 5); src/frontend/components/helpers/fonts.ts:359 findSFNT (depth 6); src/frontend/components/helpers/fonts.ts:320 <callback> (depth 6); src/frontend/components/helpers/fonts.ts:107 getWeightFromStyle (depth 6); src/frontend/components/helpers/fonts.ts:107 getWeightFromStyle (depth 5); src/frontend/components/helpers/fonts.ts:112 <callback> (depth 6); src/frontend/components/helpers/fonts.ts:270 loadGoogleFont (depth 4); src/frontend/components/helpers/fonts.ts:273 <callback> (depth 5); src/frontend/components/helpers/fonts.ts:300 getGoogleFontLink (depth 6); src/frontend/components/helpers/fonts.ts:276 <callback> (depth 6).

Effects: src/frontend/components/main/popups/ManageFonts.svelte:65 store-write src/frontend/stores.ts#customFonts ; src/frontend/components/helpers/fonts.ts:247 network fetch ; src/frontend/components/helpers/fonts.ts:247 network fetch ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 18; depth cutoffs: 4. Full edges/effects/conditions in JSON.

## click — event-e07b979106d511d42b

[code] [src/frontend/components/main/popups/ManageFonts.svelte:175](../../../../../src/frontend/components/main/popups/ManageFonts.svelte#L175); () => (newFontInput = true). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
