# click/src_frontend_components_main_popups_createShow_CreateShow.svelte (1)

## click — event-16eeab01016dba9cd8

[code] [src/frontend/components/main/popups/createShow/CreateShow.svelte:221](../../../../../src/frontend/components/main/popups/createShow/CreateShow.svelte#L221); (e) => selectOption(e.detail). partial.

Conditions: src/frontend/components/main/popups/createShow/CreateShow.svelte:215 !selectedOption.

Calls: src/frontend/components/main/popups/createShow/CreateShow.svelte:94 selectOption (depth 1); src/frontend/components/main/popups/createShow/CreateShow.svelte:139 textToShow (depth 2); src/frontend/components/main/popups/createShow/CreateShow.svelte:143 <callback> (depth 3); src/frontend/converters/txt.ts:51 convertText (depth 3); src/frontend/converters/txt.ts:293 preprocessLines (depth 4); src/frontend/converters/txt.ts:255 isHeaderLine (depth 5); src/frontend/converters/txt.ts:750 findGroupMatch (depth 6); src/frontend/components/helpers/show.ts:46 getLabelId (depth 6); src/frontend/converters/txt.ts:275 isChordLine (depth 5); src/frontend/converters/txt.ts:344 insertChordsIntoLyrics (depth 5); src/frontend/converters/txt.ts:330 <callback> (depth 5); src/frontend/components/helpers/show.ts:182 getCustomMetadata (depth 4); src/frontend/components/helpers/show.ts:179 initializeMetadata (depth 5); src/frontend/components/helpers/show.ts:188 <callback> (depth 5); src/frontend/components/helpers/show.ts:192 <callback> (depth 5); src/frontend/converters/txt.ts:75 <callback> (depth 4).

Effects: src/frontend/components/main/popups/createShow/CreateShow.svelte:155 history history UPDATE; src/frontend/components/main/popups/createShow/CreateShow.svelte:159 store-write src/frontend/stores.ts#quickTextCache ; src/frontend/components/main/popups/createShow/CreateShow.svelte:160 store-write src/frontend/stores.ts#activePopup ; src/frontend/converters/txt.ts:176 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/shows.ts:227 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:245 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:290 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:391 history history UPDATE; src/frontend/components/helpers/show.ts:398 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/show.ts:408 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 9; depth cutoffs: 173. Full edges/effects/conditions in JSON.

## click — event-a6d9bd5f651b0c51c1

[code] [src/frontend/components/main/popups/createShow/CreateShow.svelte:223](../../../../../src/frontend/components/main/popups/createShow/CreateShow.svelte#L223); () => (selectedOption = ""). resolved-within-bound.

Conditions: src/frontend/components/main/popups/createShow/CreateShow.svelte:215 !selectedOption.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-b2b6d354b1c9a46fc6

[code] [src/frontend/components/main/popups/createShow/CreateShow.svelte:227](../../../../../src/frontend/components/main/popups/createShow/CreateShow.svelte#L227); () => (showMore = !showMore). resolved-within-bound.

Conditions: src/frontend/components/main/popups/createShow/CreateShow.svelte:226 selectedOption === "text".

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c805157553a4aac9d5

[code] [src/frontend/components/main/popups/createShow/CreateShow.svelte:238](../../../../../src/frontend/components/main/popups/createShow/CreateShow.svelte#L238); textToShow. partial.

Conditions: src/frontend/components/main/popups/createShow/CreateShow.svelte:226 selectedOption === "text"; src/frontend/components/main/popups/createShow/CreateShow.svelte:141 typeof text !== "string"; src/frontend/components/main/popups/createShow/CreateShow.svelte:149 sections.length.

Calls: src/frontend/components/main/popups/createShow/CreateShow.svelte:139 textToShow (depth 0); src/frontend/components/main/popups/createShow/CreateShow.svelte:143 <callback> (depth 1); src/frontend/converters/txt.ts:51 convertText (depth 1); src/frontend/converters/txt.ts:293 preprocessLines (depth 2); src/frontend/converters/txt.ts:255 isHeaderLine (depth 3); src/frontend/converters/txt.ts:750 findGroupMatch (depth 4); src/frontend/converters/txt.ts:767 <callback> (depth 5); src/frontend/converters/txt.ts:771 <callback> (depth 5); src/frontend/components/helpers/show.ts:46 getLabelId (depth 4); src/frontend/converters/txt.ts:275 isChordLine (depth 3); src/frontend/converters/txt.ts:344 insertChordsIntoLyrics (depth 3); src/frontend/converters/txt.ts:330 <callback> (depth 3); src/frontend/components/helpers/show.ts:182 getCustomMetadata (depth 2); src/frontend/components/helpers/show.ts:179 initializeMetadata (depth 3); src/frontend/components/helpers/show.ts:188 <callback> (depth 3); src/frontend/components/helpers/show.ts:192 <callback> (depth 3).

Effects: src/frontend/components/main/popups/createShow/CreateShow.svelte:155 history history UPDATE; src/frontend/components/main/popups/createShow/CreateShow.svelte:159 store-write src/frontend/stores.ts#quickTextCache ; src/frontend/components/main/popups/createShow/CreateShow.svelte:160 store-write src/frontend/stores.ts#activePopup ; src/frontend/converters/txt.ts:176 history history UPDATE; src/frontend/components/helpers/history.ts:194 store-write src/frontend/stores.ts#redoHistory ; src/frontend/components/helpers/history.ts:204 store-write src/frontend/stores.ts#activePage ; src/frontend/components/helpers/history.ts:252 store-write src/frontend/stores.ts#activeShow ; src/frontend/components/helpers/historyActions.ts:67 store-write src/frontend/stores.ts#projects ; src/frontend/components/helpers/historyActions.ts:93 store-write src/frontend/stores.ts#shows ; src/frontend/components/helpers/historyActions.ts:371 history history UPDATE; src/frontend/components/helpers/historyActions.ts:258 store-write src/frontend/stores.ts#notFound ; src/frontend/components/helpers/historyActions.ts:344 store-write src/frontend/stores.ts#renamedShows ; src/frontend/components/helpers/historyActions.ts:272 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/historyActions.ts:301 store-write src/frontend/stores.ts#shows .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: history creation reachable (conditional). Unresolved edges: 9; depth cutoffs: 166. Full edges/effects/conditions in JSON.
