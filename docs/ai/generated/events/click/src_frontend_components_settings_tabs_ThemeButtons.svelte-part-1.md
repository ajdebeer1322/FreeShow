# click/src_frontend_components_settings_tabs_ThemeButtons.svelte (1)

## click — event-a82e923fab67e6476a

[code] [src/frontend/components/settings/tabs/ThemeButtons.svelte:21](../../../../../src/frontend/components/settings/tabs/ThemeButtons.svelte#L21); resetThemes. partial.

Conditions: src/frontend/components/settings/tabs/ThemeButtons.svelte:20 Object.values($themes).length < 11.

Calls: src/frontend/components/settings/tabs/ThemeButtons.svelte:8 resetThemes (depth 0); src/frontend/components/helpers/array.ts:181 clone (depth 1); src/frontend/utils/updateSettings.ts:242 updateThemeValues (depth 1); src/frontend/utils/updateSettings.ts:245 <callback> (depth 2); src/frontend/utils/updateSettings.ts:246 <callback> (depth 2).

Effects: src/frontend/components/settings/tabs/ThemeButtons.svelte:9 store-write src/frontend/stores.ts#theme ; src/frontend/components/settings/tabs/ThemeButtons.svelte:10 store-write src/frontend/stores.ts#themes .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
