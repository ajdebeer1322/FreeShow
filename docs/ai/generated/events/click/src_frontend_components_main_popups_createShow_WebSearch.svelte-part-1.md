# click/src_frontend_components_main_popups_createShow_WebSearch.svelte (1)

## click — event-17e12488b8de93bec6

[code] [src/frontend/components/main/popups/createShow/WebSearch.svelte:148](../../../../../src/frontend/components/main/popups/createShow/WebSearch.svelte#L148); (e) => { if (e.target?.closest("button") \|\| e.target?.closest("path")) return getLyrics(song) }. resolved-within-bound.

Conditions: src/frontend/components/main/popups/createShow/WebSearch.svelte:124 loading; src/frontend/components/main/popups/createShow/WebSearch.svelte:128 songs !== null; src/frontend/components/main/popups/createShow/WebSearch.svelte:144 songs.

Calls: src/frontend/components/main/popups/createShow/WebSearch.svelte:39 getLyrics (depth 1); src/frontend/IPC/main.ts:68 sendMain (depth 2).

Effects: src/frontend/components/main/popups/createShow/WebSearch.svelte:40 ipc sendMain(Main.GET_LYRICS, { song }) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-38947f2d5c43162bad

[code] [src/frontend/components/main/popups/createShow/WebSearch.svelte:157](../../../../../src/frontend/components/main/popups/createShow/WebSearch.svelte#L157); () => blockArtist(song.artist). resolved-within-bound.

Conditions: src/frontend/components/main/popups/createShow/WebSearch.svelte:124 loading; src/frontend/components/main/popups/createShow/WebSearch.svelte:128 songs !== null; src/frontend/components/main/popups/createShow/WebSearch.svelte:144 songs; src/frontend/components/main/popups/createShow/WebSearch.svelte:156 song.artist && song.source !== "Hymnary".

Calls: src/frontend/components/main/popups/createShow/WebSearch.svelte:97 blockArtist (depth 1); src/frontend/components/main/popups/createShow/WebSearch.svelte:100 <callback> (depth 2).

Effects: src/frontend/components/main/popups/createShow/WebSearch.svelte:100 store-write src/frontend/stores.ts#special .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
