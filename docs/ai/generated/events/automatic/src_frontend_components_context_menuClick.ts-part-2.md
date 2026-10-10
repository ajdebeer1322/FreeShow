# automatic/src_frontend_components_context_menuClick.ts (2)

## setTimeout — event-2a8dbd011826f9d4c0

[code] [src/frontend/components/context/menuClick.ts:1364](../../../../../src/frontend/components/context/menuClick.ts#L1364); () => activeEdit.set({ type: "overlay", id: overlayId, items: &#91;&#93; }). resolved-within-bound.

Conditions: src/frontend/components/context/menuClick.ts:1358 obj.sel.id === "scene_overlay"; src/frontend/components/context/menuClick.ts:1351 &#91;"overlay", "template", "effect", "scene"&#93;.includes(obj.sel.id \|\| ""); src/frontend/components/context/menuClick.ts:1345 obj.sel.id === "show_drawer"; src/frontend/components/context/menuClick.ts:1339 obj.sel.id === "audio"; src/frontend/components/context/menuClick.ts:1334 obj.sel.id === "player"; src/frontend/components/context/menuClick.ts:1330 obj.sel.id === "camera"; src/frontend/components/context/menuClick.ts:1324 obj.sel.id === "media"; src/frontend/components/context/menuClick.ts:1317 obj.sel.id === "slide".

Calls: src/frontend/components/context/menuClick.ts:1364 <callback> (depth 0).

Effects: src/frontend/components/context/menuClick.ts:1364 store-write src/frontend/stores.ts#activeEdit .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
