# click/src_frontend_components_drawer_media_Media.svelte (2)

## click — event-9c9e7473bde8bff80c

[code] [src/frontend/components/drawer/media/Media.svelte:542](../../../../../src/frontend/components/drawer/media/Media.svelte#L542); () => setSubSubTab("vimeo"). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/Media.svelte:509 active === "inputs"; src/frontend/components/drawer/media/Media.svelte:536 active === "online".

Calls: src/frontend/components/drawer/media/Media.svelte:103 setSubSubTab (depth 1); src/frontend/components/drawer/media/Media.svelte:106 <callback> (depth 2).

Effects: src/frontend/components/drawer/media/Media.svelte:106 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-3c84e823acbd76b5ac

[code] [src/frontend/components/drawer/media/Media.svelte:546](../../../../../src/frontend/components/drawer/media/Media.svelte#L546); () => setSubSubTab("pixabay"). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/Media.svelte:509 active === "inputs"; src/frontend/components/drawer/media/Media.svelte:536 active === "online".

Calls: src/frontend/components/drawer/media/Media.svelte:103 setSubSubTab (depth 1); src/frontend/components/drawer/media/Media.svelte:106 <callback> (depth 2).

Effects: src/frontend/components/drawer/media/Media.svelte:106 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-774034823e51fc7f8b

[code] [src/frontend/components/drawer/media/Media.svelte:550](../../../../../src/frontend/components/drawer/media/Media.svelte#L550); () => setSubSubTab("unsplash"). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/Media.svelte:509 active === "inputs"; src/frontend/components/drawer/media/Media.svelte:536 active === "online".

Calls: src/frontend/components/drawer/media/Media.svelte:103 setSubSubTab (depth 1); src/frontend/components/drawer/media/Media.svelte:106 <callback> (depth 2).

Effects: src/frontend/components/drawer/media/Media.svelte:106 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-90e027565861159d82

[code] [src/frontend/components/drawer/media/Media.svelte:555](../../../../../src/frontend/components/drawer/media/Media.svelte#L555); () => setSubSubTab("canva"). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/Media.svelte:509 active === "inputs"; src/frontend/components/drawer/media/Media.svelte:536 active === "online".

Calls: src/frontend/components/drawer/media/Media.svelte:103 setSubSubTab (depth 1); src/frontend/components/drawer/media/Media.svelte:106 <callback> (depth 2).

Effects: src/frontend/components/drawer/media/Media.svelte:106 store-write src/frontend/stores.ts#drawerTabsData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-97bac820679e5331c7

[code] [src/frontend/components/drawer/media/Media.svelte:581](../../../../../src/frontend/components/drawer/media/Media.svelte#L581); ({ detail }) => clickInput(detail.event, detail.cam, "camera"). partial.

Conditions: src/frontend/components/drawer/media/Media.svelte:570 isProviderSection && activeProviderId; src/frontend/components/drawer/media/Media.svelte:572 active === "online" && (onlineTab === "youtube" \|\| onlineTab === "vimeo"); src/frontend/components/drawer/media/Media.svelte:576 active === "online" && onlineTab === "canva"; src/frontend/components/drawer/media/Media.svelte:578 active === "inputs"; src/frontend/components/drawer/media/Media.svelte:580 inputsTab === "cameras".

Calls: src/frontend/components/drawer/media/Media.svelte:139 clickInput (depth 1); src/frontend/components/output/clear.ts:88 clearBackground (depth 2); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 3); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 4); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 5); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 6); src/frontend/components/helpers/output.ts:647 <callback> (depth 5); src/frontend/utils/common.ts:18 isMainWindow (depth 5); src/frontend/components/helpers/output.ts:649 <callback> (depth 5); src/frontend/components/helpers/output.ts:658 <callback> (depth 4); src/frontend/components/output/clear.ts:91 <callback> (depth 3); src/frontend/components/helpers/output.ts:158 setOutput (depth 4); src/frontend/components/helpers/shows.ts:389 ref (depth 5); src/frontend/components/helpers/shows.ts:394 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 5).

Effects: src/frontend/components/drawer/media/Media.svelte:141 presentation clearBackground ; src/frontend/components/drawer/media/Media.svelte:142 presentation setOutput ; src/frontend/components/output/clear.ts:95 store-write src/frontend/stores.ts#customMessageCredits ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/output/clear.ts:92 presentation setOutput ; src/frontend/components/helpers/output.ts:454 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:251 presentation clearBackground ; src/frontend/components/helpers/output.ts:225 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:228 store-write src/frontend/stores.ts#outputSlideCache ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/helpers/output.ts:270 presentation clearSlide ; src/frontend/components/helpers/output.ts:264 ipc sendMain(Main.PRESENTATION_CONTROL, { action: "stop" }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 197. Full edges/effects/conditions in JSON.

## click — event-58ebf1d463e97f7c88

[code] [src/frontend/components/drawer/media/Media.svelte:583](../../../../../src/frontend/components/drawer/media/Media.svelte#L583); ({ detail }) => clickInput(detail.event, detail.screen, "screen"). partial.

Conditions: src/frontend/components/drawer/media/Media.svelte:570 isProviderSection && activeProviderId; src/frontend/components/drawer/media/Media.svelte:572 active === "online" && (onlineTab === "youtube" \|\| onlineTab === "vimeo"); src/frontend/components/drawer/media/Media.svelte:576 active === "online" && onlineTab === "canva"; src/frontend/components/drawer/media/Media.svelte:578 active === "inputs"; src/frontend/components/drawer/media/Media.svelte:580 inputsTab === "cameras"; src/frontend/components/drawer/media/Media.svelte:582 inputsTab === "screens".

Calls: src/frontend/components/drawer/media/Media.svelte:139 clickInput (depth 1); src/frontend/components/output/clear.ts:88 clearBackground (depth 2); src/frontend/components/helpers/output.ts:657 getAllActiveOutputIds (depth 3); src/frontend/components/helpers/output.ts:645 getAllActiveOutputs (depth 4); src/frontend/components/helpers/output.ts:627 getAllNormalOutputs (depth 5); src/frontend/components/helpers/output.ts:614 getAllEnabledOutputs (depth 6); src/frontend/components/helpers/output.ts:628 <callback> (depth 6); src/frontend/components/helpers/output.ts:647 <callback> (depth 5); src/frontend/utils/common.ts:18 isMainWindow (depth 5); src/frontend/components/helpers/output.ts:649 <callback> (depth 5); src/frontend/components/helpers/output.ts:658 <callback> (depth 4); src/frontend/components/output/clear.ts:91 <callback> (depth 3); src/frontend/components/helpers/output.ts:158 setOutput (depth 4); src/frontend/components/helpers/shows.ts:389 ref (depth 5); src/frontend/components/helpers/shows.ts:394 <callback> (depth 6); src/frontend/components/helpers/shows.ts:373 layouts (depth 5).

Effects: src/frontend/components/drawer/media/Media.svelte:141 presentation clearBackground ; src/frontend/components/drawer/media/Media.svelte:142 presentation setOutput ; src/frontend/components/output/clear.ts:95 store-write src/frontend/stores.ts#customMessageCredits ; src/frontend/components/helpers/output.ts:649 store-write src/frontend/stores.ts#outputs ; src/frontend/components/output/clear.ts:92 presentation setOutput ; src/frontend/components/helpers/output.ts:454 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/output.ts:251 presentation clearBackground ; src/frontend/components/helpers/output.ts:225 store-write src/frontend/stores.ts#outputs ; src/frontend/components/helpers/output.ts:228 store-write src/frontend/stores.ts#outputSlideCache ; src/frontend/components/actions/actions.ts:58 store-write src/frontend/stores.ts#runningActions ; src/frontend/components/helpers/output.ts:270 presentation clearSlide ; src/frontend/components/helpers/output.ts:264 ipc sendMain(Main.PRESENTATION_CONTROL, { action: "stop" }) ; src/frontend/utils/common.ts:28 store-write src/frontend/stores.ts#toastMessages .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 11; depth cutoffs: 197. Full edges/effects/conditions in JSON.
