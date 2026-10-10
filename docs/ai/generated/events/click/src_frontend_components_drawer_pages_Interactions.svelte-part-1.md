# click/src_frontend_components_drawer_pages_Interactions.svelte (1)

## click — event-391c6c6974cedc0b18

[code] [src/frontend/components/drawer/pages/Interactions.svelte:196](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L196); () => openedInteractionId.set(""). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/pages/Interactions.svelte:196 store-write src/frontend/stores.ts#openedInteractionId .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c122202e4c2832c37a

[code] [src/frontend/components/drawer/pages/Interactions.svelte:209](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L209); () => (showPlayers = !showPlayers). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:202 $activeInteractions.includes(openedId).

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-cf24396f692b9c3356

[code] [src/frontend/components/drawer/pages/Interactions.svelte:214](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L214); () => (showHistory = !showHistory). resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:202 $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:212 !showOptions && openedInteraction?.history?.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c499b5db993f036594

[code] [src/frontend/components/drawer/pages/Interactions.svelte:295](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L295); () => kick(client.id). partial.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:220 showOptions; src/frontend/components/drawer/pages/Interactions.svelte:238 showHistory && !$activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:282 showPlayers && $activeInteractions.includes(openedId).

Calls: src/frontend/components/drawer/pages/Interactions.svelte:185 kick (depth 1); src/frontend/components/drawer/pages/interactions.ts:13 getInteraction (depth 2); src/frontend/components/drawer/pages/interactions.ts:579 kick (depth 2); src/frontend/components/drawer/pages/interactions.ts:591 <callback> (depth 3); src/frontend/components/drawer/pages/firebaseUtils.ts:30 updateInteractionDb (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-9b871969742e488161

[code] [src/frontend/components/drawer/pages/Interactions.svelte:316](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L316); (e) => { if ($activeInteractions.includes(openedId)) { if (openedInteraction?.options?.allAtOnce) return getInteraction(openedId)?.goto(i) return } if (e.target?.closest(".rearrang. partial.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:220 showOptions; src/frontend/components/drawer/pages/Interactions.svelte:238 showHistory && !$activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:282 showPlayers && $activeInteractions.includes(openedId).

Calls: src/frontend/components/drawer/pages/interactions.ts:13 getInteraction (depth 1).

Effects: src/frontend/components/drawer/pages/Interactions.svelte:326 store-write src/frontend/stores.ts#popupData ; src/frontend/components/drawer/pages/Interactions.svelte:327 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-38a100a9eab921d170

[code] [src/frontend/components/drawer/pages/Interactions.svelte:364](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L364); () => rearrangeInputs("forward", i). partial.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:220 showOptions; src/frontend/components/drawer/pages/Interactions.svelte:238 showHistory && !$activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:282 showPlayers && $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:340 $activeInteractions.includes(openedId).

Calls: src/frontend/components/drawer/pages/Interactions.svelte:61 rearrangeInputs (depth 1); src/frontend/components/drawer/pages/Interactions.svelte:62 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3).

Effects: src/frontend/components/drawer/pages/Interactions.svelte:62 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
