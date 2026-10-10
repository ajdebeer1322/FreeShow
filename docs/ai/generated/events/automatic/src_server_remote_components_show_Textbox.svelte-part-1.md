# automatic/src_server_remote_components_show_Textbox.svelte (1)

## setTimeout — event-4817705f3eb9150ee1

[code] [src/server/remote/components/show/Textbox.svelte:32](../../../../../src/server/remote/components/show/Textbox.svelte#L32); () => { loopStop = null if (newCall) calculateAutosize() newCall = false }. partial.

Conditions: src/server/remote/components/show/Textbox.svelte:34 newCall.

Calls: src/server/remote/components/show/Textbox.svelte:32 <callback> (depth 0); src/server/remote/components/show/Textbox.svelte:27 calculateAutosize (depth 1); src/server/remote/components/show/Textbox.svelte:50 <callback> (depth 2); src/server/common/util/style.ts:3 getStyles (depth 2); src/server/common/util/style.ts:7 <callback> (depth 3); src/server/common/util/style.ts:44 removeText (depth 4); src/server/common/util/style.ts:28 getFilters (depth 4); src/server/common/util/style.ts:32 <callback> (depth 5); src/server/common/util/autosize.ts:18 autosize (depth 2); src/server/common/util/autosize.ts:113 virtualElem (depth 3); src/server/common/util/autosize.ts:131 <callback> (depth 4); src/server/common/util/autosize.ts:132 <callback> (depth 4); src/server/common/util/autosize.ts:45 <callback> (depth 3); src/server/common/util/autosize.ts:50 <callback> (depth 3); src/server/common/util/autosize.ts:92 addStyleToElemText (depth 3); src/server/common/util/autosize.ts:88 textIsBiggerThanBox (depth 3).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
