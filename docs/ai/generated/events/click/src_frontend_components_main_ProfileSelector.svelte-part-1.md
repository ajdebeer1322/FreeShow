# click/src_frontend_components_main_ProfileSelector.svelte (1)

## click — event-1f3d3f935c792a4d89

[code] [src/frontend/components/main/ProfileSelector.svelte:55](../../../../../src/frontend/components/main/ProfileSelector.svelte#L55); () => selectProfile(profile.id). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/ProfileSelector.svelte:17 selectProfile (depth 1); src/frontend/utils/popup.ts:225 promptCustom (depth 2); src/frontend/utils/popup.ts:189 waitForPopupData (depth 3); src/frontend/utils/popup.ts:190 <callback> (depth 4); src/frontend/utils/popup.ts:191 unsubscribe (depth 5); src/frontend/utils/popup.ts:194 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 6); src/frontend/utils/popup.ts:198 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 5); src/frontend/utils/popup.ts:207 <callback> (depth 6); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3); src/frontend/utils/profile.ts:46 checkPassword (depth 2); src/frontend/utils/profile.ts:51 encrypt (depth 3); src/frontend/utils/profile.ts:51 <callback> (depth 4).

Effects: src/frontend/components/main/ProfileSelector.svelte:33 store-write src/frontend/stores.ts#activeProfile ; src/frontend/utils/popup.ts:226 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/popup.ts:200 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/utils/popup.ts:220 store-write src/frontend/stores.ts#popupData ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/main/ProfileSelector.svelte:42 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 35. Full edges/effects/conditions in JSON.

## click — event-100674b088af9f26e7

[code] [src/frontend/components/main/ProfileSelector.svelte:64](../../../../../src/frontend/components/main/ProfileSelector.svelte#L64); () => selectProfile(""). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/main/ProfileSelector.svelte:17 selectProfile (depth 1); src/frontend/utils/popup.ts:225 promptCustom (depth 2); src/frontend/utils/popup.ts:189 waitForPopupData (depth 3); src/frontend/utils/popup.ts:190 <callback> (depth 4); src/frontend/utils/popup.ts:191 unsubscribe (depth 5); src/frontend/utils/popup.ts:194 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 6); src/frontend/utils/popup.ts:198 <callback> (depth 5); src/frontend/utils/popup.ts:204 finish (depth 5); src/frontend/utils/popup.ts:207 <callback> (depth 6); src/frontend/utils/language.ts:83 translateText (depth 2); src/frontend/utils/language.ts:89 <callback> (depth 3); src/frontend/utils/language.ts:96 <callback> (depth 3); src/frontend/utils/profile.ts:46 checkPassword (depth 2); src/frontend/utils/profile.ts:51 encrypt (depth 3); src/frontend/utils/profile.ts:51 <callback> (depth 4).

Effects: src/frontend/components/main/ProfileSelector.svelte:33 store-write src/frontend/stores.ts#activeProfile ; src/frontend/utils/popup.ts:226 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/popup.ts:200 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages ; src/frontend/utils/popup.ts:220 store-write src/frontend/stores.ts#popupData ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/actions/actions.ts:110 store-write src/frontend/stores.ts#actionHistory ; src/frontend/components/actions/actions.ts:66 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/main/ProfileSelector.svelte:42 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 35. Full edges/effects/conditions in JSON.
