# click/src_frontend_components_settings_tabs_AudioRouting.svelte (1)

## click — event-63dcf20a32777e8e9a

[code] [src/frontend/components/settings/tabs/AudioRouting.svelte:841](../../../../../src/frontend/components/settings/tabs/AudioRouting.svelte#L841); addChannel. partial.

Conditions: src/frontend/components/settings/tabs/AudioRouting.svelte:840 column.type === "channel".

Calls: src/frontend/components/settings/tabs/AudioRouting.svelte:290 addChannel (depth 0); src/frontend/components/settings/tabs/AudioRouting.svelte:276 updateConfig (depth 1); src/frontend/components/settings/tabs/AudioRouting.svelte:277 <callback> (depth 2); src/frontend/audio/routing/audioRoutingInit.ts:9 deduplicateConnections (depth 3); src/frontend/audio/routing/audioRoutingInit.ts:11 <callback> (depth 4); src/frontend/components/settings/tabs/AudioRouting.svelte:292 <callback> (depth 1); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3).

Effects: src/frontend/components/settings/tabs/AudioRouting.svelte:297 store-write src/frontend/stores.ts#selected ; src/frontend/components/settings/tabs/AudioRouting.svelte:298 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/settings/tabs/AudioRouting.svelte:277 store-write src/frontend/stores.ts#audioRouting .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
