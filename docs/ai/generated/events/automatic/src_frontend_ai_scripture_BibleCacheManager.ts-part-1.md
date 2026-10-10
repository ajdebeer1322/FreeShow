# automatic/src_frontend_ai_scripture_BibleCacheManager.ts (1)

## setTimeout — event-601d5bcd8ff5539f05

[code] [src/frontend/ai/scripture/BibleCacheManager.ts:65](../../../../../src/frontend/ai/scripture/BibleCacheManager.ts#L65); loadNext. partial.

Conditions: src/frontend/ai/scripture/BibleCacheManager.ts:62 "requestIdleCallback" in window; src/frontend/ai/scripture/BibleCacheManager.ts:60 !this.caches.has(id) && !this.cachePromises.has(id); src/frontend/ai/scripture/BibleCacheManager.ts:58 index >= bibleIds.length; src/frontend/ai/scripture/BibleCacheManager.ts:60 !this.caches.has(id) && !this.cachePromises.has(id); src/frontend/ai/scripture/BibleCacheManager.ts:62 "requestIdleCallback" in window.

Calls: src/frontend/ai/scripture/BibleCacheManager.ts:57 loadNext (depth 0); src/frontend/ai/scripture/BibleCacheManager.ts:29 getCache (depth 1); src/frontend/ai/scripture/BibleCacheManager.ts:33 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 3); src/frontend/values/keys.ts:7 getKey (depth 4); src/frontend/values/keys.ts:15 decrypt (depth 5); src/frontend/values/keys.ts:15 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/IPC/main.ts:19 requestMain (depth 5); src/frontend/IPC/main.ts:68 sendMain (depth 6); src/frontend/IPC/main.ts:28 cleanup (depth 6); src/frontend/IPC/main.ts:36 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:98 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:111 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:76 <callback> (depth 4).

Effects: src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/drawer/bible/scripture.ts:98 store-write src/frontend/stores.ts#notFound ; src/frontend/components/drawer/bible/scripture.ts:111 store-write src/frontend/stores.ts#scripturesCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 10; depth cutoffs: 2. Full edges/effects/conditions in JSON.

## setTimeout — event-c74444c12882b9c218

[code] [src/frontend/ai/scripture/BibleCacheManager.ts:76](../../../../../src/frontend/ai/scripture/BibleCacheManager.ts#L76); loadNext. partial.

Conditions: src/frontend/ai/scripture/BibleCacheManager.ts:73 "requestIdleCallback" in window; src/frontend/ai/scripture/BibleCacheManager.ts:58 index >= bibleIds.length; src/frontend/ai/scripture/BibleCacheManager.ts:60 !this.caches.has(id) && !this.cachePromises.has(id); src/frontend/ai/scripture/BibleCacheManager.ts:62 "requestIdleCallback" in window.

Calls: src/frontend/ai/scripture/BibleCacheManager.ts:57 loadNext (depth 0); src/frontend/ai/scripture/BibleCacheManager.ts:29 getCache (depth 1); src/frontend/ai/scripture/BibleCacheManager.ts:33 <callback> (depth 2); src/frontend/components/drawer/bible/scripture.ts:43 loadJsonBible (depth 3); src/frontend/values/keys.ts:7 getKey (depth 4); src/frontend/values/keys.ts:15 decrypt (depth 5); src/frontend/values/keys.ts:15 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:88 getLocalBible (depth 4); src/frontend/components/helpers/array.ts:181 clone (depth 5); src/frontend/IPC/main.ts:19 requestMain (depth 5); src/frontend/IPC/main.ts:68 sendMain (depth 6); src/frontend/IPC/main.ts:28 cleanup (depth 6); src/frontend/IPC/main.ts:36 <callback> (depth 6); src/frontend/components/drawer/bible/scripture.ts:98 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:111 <callback> (depth 5); src/frontend/components/drawer/bible/scripture.ts:76 <callback> (depth 4).

Effects: src/frontend/components/drawer/bible/scripture.ts:94 ipc requestMain(Main.BIBLE, { name: scriptureData.name, id }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) ; src/frontend/components/drawer/bible/scripture.ts:98 store-write src/frontend/stores.ts#notFound ; src/frontend/components/drawer/bible/scripture.ts:111 store-write src/frontend/stores.ts#scripturesCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 10; depth cutoffs: 2. Full edges/effects/conditions in JSON.

## setTimeout — event-e6ca02c415b5095f41

[code] [src/frontend/ai/scripture/BibleCacheManager.ts:122](../../../../../src/frontend/ai/scripture/BibleCacheManager.ts#L122); resolve. resolved-within-bound.

Conditions: src/frontend/ai/scripture/BibleCacheManager.ts:120 performance.now() - lastYield > 8.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
