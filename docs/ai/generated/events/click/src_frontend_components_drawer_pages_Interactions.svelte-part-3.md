# click/src_frontend_components_drawer_pages_Interactions.svelte (3)

## click — event-ac831e90fb9aad9fd7

[code] [src/frontend/components/drawer/pages/Interactions.svelte:436](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L436); start. partial.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:220 showOptions; src/frontend/components/drawer/pages/Interactions.svelte:238 showHistory && !$activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:282 showPlayers && $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:400 $activeInteractions.includes(openedId).

Calls: src/frontend/components/drawer/pages/Interactions.svelte:131 start (depth 0); src/frontend/components/drawer/pages/interactions.ts:17 startInteraction (depth 1); src/frontend/components/drawer/pages/interactions.ts:224 init (depth 2); src/frontend/components/drawer/pages/interactions.ts:135 getData (depth 3); src/frontend/components/drawer/pages/interactions.ts:139 startTimer (depth 3); src/frontend/components/drawer/pages/interactions.ts:141 <callback> (depth 4); src/frontend/components/drawer/pages/interactions.ts:163 stopTimer (depth 5); src/frontend/components/drawer/pages/interactions.ts:149 <callback> (depth 5); src/frontend/components/drawer/pages/interactions.ts:152 <callback> (depth 5); src/frontend/components/drawer/pages/interactions.ts:171 getDbPayload (depth 5); src/frontend/components/drawer/pages/interactions.ts:193 getCurrentInputs (depth 6); src/frontend/components/drawer/pages/firebaseUtils.ts:30 updateInteractionDb (depth 5); src/frontend/components/drawer/pages/interactions.ts:158 <callback> (depth 5); src/frontend/components/drawer/pages/interactions.ts:57 generateId (depth 3); src/frontend/components/drawer/pages/interactions.ts:65 generateSecret (depth 3); src/frontend/components/drawer/pages/firebaseUtils.ts:58 getInteractionDb (depth 3).

Effects: src/frontend/components/drawer/pages/interactions.ts:26 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/drawer/pages/interactions.ts:27 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/drawer/pages/interactions.ts:297 store-write src/frontend/stores.ts#interactions ; src/frontend/components/drawer/pages/interactions.ts:10 store-write src/frontend/stores.ts#activeInteractions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 27; depth cutoffs: 8. Full edges/effects/conditions in JSON.

## click — event-9cc882b52e9e381969

[code] [src/frontend/components/drawer/pages/Interactions.svelte:445](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L445); () => (showOptions = !showOptions). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:443 !$activeInteractions.includes(openedId) && !showHistory.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-6387d6f95253db60f9

[code] [src/frontend/components/drawer/pages/Interactions.svelte:457](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L457); (e) => { if (e.target?.closest?.(".edit")) return openedInteractionId.set(interaction.id) }. resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/pages/Interactions.svelte:459 store-write src/frontend/stores.ts#openedInteractionId .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-e1f948e95ca7416e0d

[code] [src/frontend/components/drawer/pages/Interactions.svelte:475](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L475); () => { // selected.set({ id: null, data: &#91;&#93; }) // activePopup.set("interaction") createNew() }. resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId.

Calls: src/frontend/components/drawer/pages/Interactions.svelte:22 createNew (depth 1); src/frontend/components/drawer/pages/Interactions.svelte:24 <callback> (depth 2); src/frontend/components/drawer/pages/interactions.ts:71 initConnection (depth 3); src/frontend/components/drawer/pages/interactions.ts:57 generateId (depth 4); src/frontend/components/drawer/pages/interactions.ts:65 generateSecret (depth 4).

Effects: src/frontend/components/drawer/pages/Interactions.svelte:33 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/drawer/pages/Interactions.svelte:24 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
