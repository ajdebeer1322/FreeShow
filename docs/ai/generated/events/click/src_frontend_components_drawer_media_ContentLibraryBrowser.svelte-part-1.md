# click/src_frontend_components_drawer_media_ContentLibraryBrowser.svelte (1)

## click — event-980f01832a8eddd3ee

[code] [src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:153](../../../../../src/frontend/components/drawer/media/ContentLibraryBrowser.svelte#L153); navigateBack. partial.

Conditions: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:151 showBackButton; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:97 currentPath.length === 0; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:106 currentCategory?.key.

Calls: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:96 navigateBack (depth 0); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:112 loadContent (depth 1); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:119 <callback> (depth 2); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:60 save (depth 3); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:61 <callback> (depth 4); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:60 save (depth 1); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:61 <callback> (depth 2).

Effects: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:116 ipc requestMain( Main.GET_PROVIDER_CONTENT, { providerId, key }, (data) => { if (!data) { error = "Failed to load content." loading = false return } content = data loading = false save ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:61 store-write src/frontend/stores.ts#openedMediaFolders ; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:61 store-write src/frontend/stores.ts#openedMediaFolders .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-c592de2143b35c2270

[code] [src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:184](../../../../../src/frontend/components/drawer/media/ContentLibraryBrowser.svelte#L184); () => navigateToCategory(category). partial.

Conditions: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:166 loading; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:170 error; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:174 content.length > 0; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:183 category.

Calls: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:86 navigateToCategory (depth 1); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:60 save (depth 2); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:61 <callback> (depth 3); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:112 loadContent (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:119 <callback> (depth 3).

Effects: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:61 store-write src/frontend/stores.ts#openedMediaFolders ; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:116 ipc requestMain( Main.GET_PROVIDER_CONTENT, { providerId, key }, (data) => { if (!data) { error = "Failed to load content." loading = false return } content = data loading = false save ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-98a766fedfc3655726

[code] [src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:209](../../../../../src/frontend/components/drawer/media/ContentLibraryBrowser.svelte#L209); () => navigateToCategory(category). partial.

Conditions: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:166 loading; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:170 error; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:174 content.length > 0; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:206 categories.length > 0.

Calls: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:86 navigateToCategory (depth 1); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:60 save (depth 2); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:61 <callback> (depth 3); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:112 loadContent (depth 2); src/frontend/IPC/main.ts:19 requestMain (depth 3); src/frontend/IPC/main.ts:68 sendMain (depth 4); src/frontend/IPC/main.ts:28 cleanup (depth 4); src/frontend/IPC/main.ts:36 <callback> (depth 4); src/frontend/IPC/main.ts:37 <callback> (depth 5); src/frontend/IPC/main.ts:48 <callback> (depth 5); src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:119 <callback> (depth 3).

Effects: src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:61 store-write src/frontend/stores.ts#openedMediaFolders ; src/frontend/components/drawer/media/ContentLibraryBrowser.svelte:116 ipc requestMain( Main.GET_PROVIDER_CONTENT, { providerId, key }, (data) => { if (!data) { error = "Failed to load content." loading = false return } content = data loading = false save ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 3; depth cutoffs: 0. Full edges/effects/conditions in JSON.
