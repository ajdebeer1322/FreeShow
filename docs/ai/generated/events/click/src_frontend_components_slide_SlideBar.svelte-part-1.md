# click/src_frontend_components_slide_SlideBar.svelte (1)

## click — event-343f7a9ae28d07b1de

[code] [src/frontend/components/slide/SlideBar.svelte:67](../../../../../src/frontend/components/slide/SlideBar.svelte#L67); () => runCustomAction(). partial.

Conditions: src/frontend/components/slide/SlideBar.svelte:64 !hasShow; src/frontend/components/slide/SlideBar.svelte:66 customAction.

Calls: src/frontend/components/slide/SlideBar.svelte:43 runCustomAction (depth 1); src/frontend/components/actions/actions.ts:33 runAction (depth 2); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/actions/actions.ts:49 <callback> (depth 3); src/frontend/components/actions/actions.ts:74 runTrigger (depth 3); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 4); src/frontend/utils/common.ts:46 wait (depth 4); src/frontend/utils/common.ts:47 <callback> (depth 5); src/frontend/utils/common.ts:48 <callback> (depth 6); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 4); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 5); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 6); src/frontend/components/helpers/output.ts:647 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:649 <callback> (depth 6).

Effects: src/frontend/components/slide/SlideBar.svelte:45 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 39. Full edges/effects/conditions in JSON.

## click — event-5c21fa1ca652fbf172

[code] [src/frontend/components/slide/SlideBar.svelte:72](../../../../../src/frontend/components/slide/SlideBar.svelte#L72); () => runCustomAction(true). partial.

Conditions: src/frontend/components/slide/SlideBar.svelte:64 !hasShow; src/frontend/components/slide/SlideBar.svelte:66 customAction; src/frontend/components/slide/SlideBar.svelte:71 Object.keys($actions).length && !reference && !isLocked.

Calls: src/frontend/components/slide/SlideBar.svelte:43 runCustomAction (depth 1); src/frontend/components/actions/actions.ts:33 runAction (depth 2); src/frontend/components/actions/midi.ts:153 convertOldMidiToNewAction (depth 3); src/frontend/components/helpers/array.ts:181 clone (depth 4); src/frontend/components/actions/actions.ts:49 <callback> (depth 3); src/frontend/components/actions/actions.ts:74 runTrigger (depth 3); src/frontend/components/actions/actions.ts:235 getActionTriggerId (depth 4); src/frontend/utils/common.ts:46 wait (depth 4); src/frontend/utils/common.ts:47 <callback> (depth 5); src/frontend/utils/common.ts:48 <callback> (depth 6); src/frontend/components/helpers/output.ts:660 getFirstActiveOutput (depth 4); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 5); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 6); src/frontend/components/helpers/output.ts:647 <callback> (depth 6); src/frontend/utils/common.ts:18 isMainWindow (depth 6); src/frontend/components/helpers/output.ts:649 <callback> (depth 6).

Effects: src/frontend/components/slide/SlideBar.svelte:45 store-write src/frontend/stores.ts#activePopup ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 39. Full edges/effects/conditions in JSON.

## click — event-6f750b495f94ec572b

[code] [src/frontend/components/slide/SlideBar.svelte:84](../../../../../src/frontend/components/slide/SlideBar.svelte#L84); () => { alertMessage.set('${translateText(currentShow?.locked ? "show.locked" : "profile.locked")}<br><br>Unlock it by clicking the three dots in the top right corner.') activePopu. resolved-within-bound.

Conditions: src/frontend/components/slide/SlideBar.svelte:79 !hasShow; src/frontend/components/slide/SlideBar.svelte:81 isLocked.

Calls: src/frontend/utils/language.ts:83 translateText (depth 1); src/frontend/utils/language.ts:89 <callback> (depth 2); src/frontend/utils/language.ts:96 <callback> (depth 2).

Effects: src/frontend/components/slide/SlideBar.svelte:85 store-write src/frontend/stores.ts#alertMessage ; src/frontend/components/slide/SlideBar.svelte:86 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-5d33d51778d8708b2e

[code] [src/frontend/components/slide/SlideBar.svelte:92](../../../../../src/frontend/components/slide/SlideBar.svelte#L92); () => activePopup.set("translate"). resolved-within-bound.

Conditions: src/frontend/components/slide/SlideBar.svelte:79 !hasShow; src/frontend/components/slide/SlideBar.svelte:81 isLocked; src/frontend/components/slide/SlideBar.svelte:91 referenceType !== "lessons".

Calls: no function target resolved.

Effects: src/frontend/components/slide/SlideBar.svelte:92 store-write src/frontend/stores.ts#activePopup .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-48a8065483b594e89b

[code] [src/frontend/components/slide/SlideBar.svelte:102](../../../../../src/frontend/components/slide/SlideBar.svelte#L102); changeSlidesView. resolved-within-bound.

Conditions: src/frontend/components/slide/SlideBar.svelte:101 referenceType !== "lessons".

Calls: src/frontend/show/slides.ts:15 changeSlidesView (depth 0).

Effects: src/frontend/show/slides.ts:16 store-write src/frontend/stores.ts#slidesOptions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
