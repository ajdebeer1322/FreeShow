# keyboard/src_frontend_components_settings_Screens.svelte (1)

## dynamic — event-94389b52c56243a7d1

[code] [src/frontend/components/settings/Screens.svelte:310](../../../../../src/frontend/components/settings/Screens.svelte#L310); triggerClickOnEnterSpace. partial.

Conditions: src/frontend/components/settings/Screens.svelte:210 editCropping; src/frontend/components/settings/Screens.svelte:228 editEdgeBlending; src/frontend/components/settings/Screens.svelte:278 screens.length; src/frontend/utils/clickable.ts:2 event.target?.classList.contains("edit") \|\| (event.target as any)?.nodeName === "INPUT" \|\| (event.target as any)?.nodeName === "TEXTAREA"; src/frontend/utils/clickable.ts:4 event.key === "Enter" \|\| event.key === " "; src/frontend/utils/clickable.ts:5 event.key === " " && event.target?.closest(".slide").

Calls: src/frontend/utils/clickable.ts:1 triggerClickOnEnterSpace (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
