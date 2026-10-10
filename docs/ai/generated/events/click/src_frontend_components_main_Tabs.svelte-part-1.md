# click/src_frontend_components_main_Tabs.svelte (1)

## click — event-06237a0c13f0d01613

[code] [src/frontend/components/main/Tabs.svelte:46](../../../../../src/frontend/components/main/Tabs.svelte#L46); () => { active = id manuallyChanged = true }. resolved-within-bound.

Conditions: src/frontend/components/main/Tabs.svelte:43 tab.remove !== true && (!tab.overflow \|\| !overflowHidden).

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-f09916b66d3ce8aab8

[code] [src/frontend/components/main/Tabs.svelte:72](../../../../../src/frontend/components/main/Tabs.svelte#L72); () => { active = Object.keys(tabs)&#91;firstOverflowIndex&#93; setTimeout(() => (overflowHidden = false)) }. resolved-within-bound.

Conditions: src/frontend/components/main/Tabs.svelte:70 firstOverflowIndex > -1 && overflowHidden.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
