# click/src_frontend_components_drawer_pages_Interactions.svelte (2)

## click — event-e192b1ce0c2acf6287

[code] [src/frontend/components/drawer/pages/Interactions.svelte:365](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L365); () => rearrangeInputs("backward", i). partial.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:220 showOptions; src/frontend/components/drawer/pages/Interactions.svelte:238 showHistory && !$activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:282 showPlayers && $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:340 $activeInteractions.includes(openedId).

Calls: src/frontend/components/drawer/pages/Interactions.svelte:61 rearrangeInputs (depth 1); src/frontend/components/drawer/pages/Interactions.svelte:62 <callback> (depth 2); src/frontend/components/helpers/array.ts:181 clone (depth 3).

Effects: src/frontend/components/drawer/pages/Interactions.svelte:62 store-write src/frontend/stores.ts#interactions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-142df5c12326dd9f74

[code] [src/frontend/components/drawer/pages/Interactions.svelte:394](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L394); addInput. resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:220 showOptions; src/frontend/components/drawer/pages/Interactions.svelte:238 showHistory && !$activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:282 showPlayers && $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:393 !$activeInteractions.includes(openedId).

Calls: src/frontend/components/drawer/pages/Interactions.svelte:56 addInput (depth 0).

Effects: src/frontend/components/drawer/pages/Interactions.svelte:57 store-write src/frontend/stores.ts#popupData ; src/frontend/components/drawer/pages/Interactions.svelte:58 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-a15df53ed72a278903

[code] [src/frontend/components/drawer/pages/Interactions.svelte:404](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L404); async () => { await stopInteraction(openedId) }. resolved-within-bound.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:220 showOptions; src/frontend/components/drawer/pages/Interactions.svelte:238 showHistory && !$activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:282 showPlayers && $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:400 $activeInteractions.includes(openedId).

Calls: src/frontend/components/drawer/pages/interactions.ts:38 stopInteraction (depth 1); src/frontend/components/drawer/pages/interactions.ts:9 updateActiveInteractions (depth 2).

Effects: src/frontend/components/drawer/pages/interactions.ts:10 store-write src/frontend/stores.ts#activeInteractions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b84561fe1407399fa8

[code] [src/frontend/components/drawer/pages/Interactions.svelte:417](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L417); () => getInteraction(openedId)?.previous(). partial.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:220 showOptions; src/frontend/components/drawer/pages/Interactions.svelte:238 showHistory && !$activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:282 showPlayers && $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:400 $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:414 !openedInteraction?.options?.allAtOnce.

Calls: src/frontend/components/drawer/pages/interactions.ts:13 getInteraction (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-114bcea82790f94120

[code] [src/frontend/components/drawer/pages/Interactions.svelte:423](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L423); () => getInteraction(openedId)?.revealAnswer(). partial.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:220 showOptions; src/frontend/components/drawer/pages/Interactions.svelte:238 showHistory && !$activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:282 showPlayers && $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:400 $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:414 !openedInteraction?.options?.allAtOnce; src/frontend/components/drawer/pages/Interactions.svelte:421 hasAnswer(openedInteraction?.inputs&#91;inputIndex&#93;) && (currentAnswer === null \|\| currentAnswer === undefined \|\| currentAnswer === "").

Calls: src/frontend/components/drawer/pages/interactions.ts:13 getInteraction (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-00bb6fc99ace892b55

[code] [src/frontend/components/drawer/pages/Interactions.svelte:428](../../../../../src/frontend/components/drawer/pages/Interactions.svelte#L428); () => getInteraction(openedId)?.next(). partial.

Conditions: src/frontend/components/drawer/pages/Interactions.svelte:194 openedId; src/frontend/components/drawer/pages/Interactions.svelte:220 showOptions; src/frontend/components/drawer/pages/Interactions.svelte:238 showHistory && !$activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:282 showPlayers && $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:400 $activeInteractions.includes(openedId); src/frontend/components/drawer/pages/Interactions.svelte:414 !openedInteraction?.options?.allAtOnce; src/frontend/components/drawer/pages/Interactions.svelte:421 hasAnswer(openedInteraction?.inputs&#91;inputIndex&#93;) && (currentAnswer === null \|\| currentAnswer === undefined \|\| currentAnswer === "").

Calls: src/frontend/components/drawer/pages/interactions.ts:13 getInteraction (depth 1).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
