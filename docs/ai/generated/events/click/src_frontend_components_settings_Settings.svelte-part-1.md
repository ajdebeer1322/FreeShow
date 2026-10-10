# click/src_frontend_components_settings_Settings.svelte (1)

## click — event-4f941896a6a6c000e8

[code] [src/frontend/components/settings/Settings.svelte:60](../../../../../src/frontend/components/settings/Settings.svelte#L60); resetAudioRouting. partial.

Conditions: src/frontend/components/settings/Settings.svelte:57 tabId === "styles"; src/frontend/components/settings/Settings.svelte:59 tabId === "audio"; src/frontend/audio/routing/audioRoutingInit.ts:85 await confirmCustom(translateText("popup.reset_all_confirm")).

Calls: src/frontend/audio/routing/audioRoutingInit.ts:84 resetAudioRouting (depth 0); src/frontend/utils/popup.ts:219 confirmCustom (depth 1); src/frontend/utils/popup.ts:189 waitForPopupData (depth 2); src/frontend/utils/popup.ts:190 <callback> (depth 3); src/frontend/utils/popup.ts:191 unsubscribe (depth 4); src/frontend/utils/popup.ts:194 <callback> (depth 4); src/frontend/utils/popup.ts:204 finish (depth 5); src/frontend/utils/popup.ts:207 <callback> (depth 6); src/frontend/utils/popup.ts:198 <callback> (depth 4); src/frontend/utils/popup.ts:204 finish (depth 4); src/frontend/utils/popup.ts:207 <callback> (depth 5); src/frontend/utils/language.ts:83 translateText (depth 1); src/frontend/utils/language.ts:89 <callback> (depth 2); src/frontend/utils/language.ts:96 <callback> (depth 2); src/frontend/audio/routing/audioRoutingInit.ts:22 initAudioRouting (depth 1); src/frontend/audio/routing/audioRoutingInit.ts:28 <callback> (depth 2).

Effects: src/frontend/utils/popup.ts:220 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:213 store-write src/frontend/stores.ts#popupData ; src/frontend/utils/popup.ts:214 store-write src/frontend/stores.ts#activePopup ; src/frontend/utils/popup.ts:200 store-write src/frontend/stores.ts#activePopup ; src/frontend/audio/routing/audioRoutingInit.ts:34 store-write src/frontend/stores.ts#audioRouting ; src/frontend/audio/routing/audioRoutingInit.ts:81 store-write src/frontend/stores.ts#audioRouting ; src/frontend/components/helpers/output.ts:618 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1106 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:1125 store-write src/frontend/stores.ts#currentOutputSettings ; src/frontend/components/helpers/output.ts:1127 store-write src/frontend/stores.ts#activeRename ; src/frontend/components/helpers/output.ts:1121 ipc send(OUTPUT, &#91;"CREATE"&#93;, { id, ...output&#91;id&#93; }) ; src/frontend/components/helpers/output.ts:146 ipc send(OUTPUT, &#91;"TOGGLE_OUTPUTS"&#93;, { outputs: sortedOutputList, state, autoStartup: options.autoStartup, autoPosition }) .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 11. Full edges/effects/conditions in JSON.

## click — event-95f0244c571d8bed2d

[code] [src/frontend/components/settings/Settings.svelte:66](../../../../../src/frontend/components/settings/Settings.svelte#L66); () => (showGlobalOutputOptions = !showGlobalOutputOptions). resolved-within-bound.

Conditions: src/frontend/components/settings/Settings.svelte:57 tabId === "styles"; src/frontend/components/settings/Settings.svelte:59 tabId === "audio"; src/frontend/components/settings/Settings.svelte:61 tabId === "profiles"; src/frontend/components/settings/Settings.svelte:63 tabId === "theme"; src/frontend/components/settings/Settings.svelte:65 tabId === "display_settings".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
