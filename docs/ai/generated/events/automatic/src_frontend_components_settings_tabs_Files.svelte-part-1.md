# automatic/src_frontend_components_settings_tabs_Files.svelte (1)

## setInterval — event-f36644c25ccfe9a589

[code] [src/frontend/components/settings/tabs/Files.svelte:87](../../../../../src/frontend/components/settings/tabs/Files.svelte#L87); checkTimes. resolved-within-bound.

Conditions: src/frontend/components/settings/tabs/Files.svelte:99 previousAutosave && as !== "never"; src/frontend/components/settings/tabs/Files.svelte:108 interval === "never" \|\| $activePopup === "initialize"; src/frontend/components/settings/tabs/Files.svelte:112 nextAutobackup < 0; src/frontend/components/settings/tabs/Files.svelte:116 nextAutobackup < 0.

Calls: src/frontend/components/settings/tabs/Files.svelte:94 checkTimes (depth 0); src/frontend/components/helpers/time.ts:142 getTimeFromInterval (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
