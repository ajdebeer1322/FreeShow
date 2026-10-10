# automatic/src_frontend_converters_bible.ts (1)

## setTimeout — event-19b2582169497505f2

[code] [src/frontend/converters/bible.ts:23](../../../../../src/frontend/converters/bible.ts#L23); () => { const success: { &#91;key: string&#93;: number } = {} const unsupported: { &#91;key: string&#93;: number } = {} data.forEach((file) => { let type = file.type if (type === "fsb" \|\| !type) t. partial.

Conditions: src/frontend/converters/bible.ts:29 type === "fsb" \|\| !type; src/frontend/converters/bible.ts:31 bibleTypes&#91;type&#93;; src/frontend/converters/bible.ts:33 !success&#91;name&#93;; src/frontend/converters/bible.ts:38 !unsupported&#91;id&#93;; src/frontend/converters/bible.ts:44 Object.keys(success).length; src/frontend/converters/bible.ts:48 count > 1; src/frontend/converters/bible.ts:51 Object.keys(unsupported).length; src/frontend/converters/bible.ts:52 Object.keys(success).length; src/frontend/converters/bible.ts:57 count > 1.

Calls: src/frontend/converters/bible.ts:23 <callback> (depth 0); src/frontend/converters/bible.ts:27 <callback> (depth 1); src/frontend/utils/language.ts:83 translateText (depth 1); src/frontend/utils/language.ts:89 <callback> (depth 2); src/frontend/utils/language.ts:96 <callback> (depth 2); src/frontend/converters/bible.ts:46 <callback> (depth 1); src/frontend/converters/bible.ts:55 <callback> (depth 1).

Effects: src/frontend/converters/bible.ts:64 store-write src/frontend/stores.ts#alertMessage .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
