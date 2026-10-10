# keyboard/src_frontend_components_settings_SettingsTabs.svelte (1)

## dynamic — event-a7706ebb8b0d877eb6

[code] [src/frontend/components/settings/SettingsTabs.svelte:41](../../../../../src/frontend/components/settings/SettingsTabs.svelte#L41); keydown. resolved-within-bound.

Conditions: src/frontend/components/settings/SettingsTabs.svelte:16 e.target?.closest?.(".edit") \|\| e.ctrlKey \|\| e.metaKey; src/frontend/components/settings/SettingsTabs.svelte:21 e.key === "ArrowDown"; src/frontend/components/settings/SettingsTabs.svelte:26 (currentTabIndex + 1 >= activeTabs.length \|\| $settingsTab === "profiles") && !activeTabs.includes("profiles"); src/frontend/components/settings/SettingsTabs.svelte:30 e.key === "ArrowUp"; src/frontend/components/settings/SettingsTabs.svelte:36 nextTab < 0.

Calls: src/frontend/components/settings/SettingsTabs.svelte:15 keydown (depth 0); src/frontend/components/settings/SettingsTabs.svelte:19 <callback> (depth 1).

Effects: src/frontend/components/settings/SettingsTabs.svelte:27 store-write src/frontend/stores.ts#settingsTab ; src/frontend/components/settings/SettingsTabs.svelte:37 store-write src/frontend/stores.ts#settingsTab .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
