# click/src_frontend_components_settings_tabs_AudioRoutingNode.svelte (1)

## click — event-a669bbb6541c0df5cc

[code] [src/frontend/components/settings/tabs/AudioRoutingNode.svelte:162](../../../../../src/frontend/components/settings/tabs/AudioRoutingNode.svelte#L162); onToggleExpand. resolved-within-bound.

Conditions: src/frontend/components/settings/tabs/AudioRoutingNode.svelte:161 hasSubNodes && type !== "output_window" && type !== "network".

Calls: src/frontend/components/settings/tabs/AudioRoutingNode.svelte:35 onToggleExpand (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-87b5a99035c28689b8

[code] [src/frontend/components/settings/tabs/AudioRoutingNode.svelte:228](../../../../../src/frontend/components/settings/tabs/AudioRoutingNode.svelte#L228); () => { popupData.set({ nodeId: id, name }) activePopup.set("node_options") }. resolved-within-bound.

Conditions: src/frontend/components/settings/tabs/AudioRoutingNode.svelte:222 type === "icecast" \|\| isChannel.

Calls: no function target resolved.

Effects: src/frontend/components/settings/tabs/AudioRoutingNode.svelte:229 store-write src/frontend/stores.ts#popupData ; src/frontend/components/settings/tabs/AudioRoutingNode.svelte:230 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
