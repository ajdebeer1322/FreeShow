# automatic/src_frontend_components_show_project.ts (1)

## setTimeout — event-5fa68b8dcbe55d5d24

[code] [src/frontend/components/show/project.ts:26](../../../../../src/frontend/components/show/project.ts#L26); () => saved.set(true). resolved-within-bound.

Conditions: src/frontend/components/show/project.ts:26 get(saved).

Calls: src/frontend/components/show/project.ts:26 <callback> (depth 0).

Effects: src/frontend/components/show/project.ts:26 store-write src/frontend/stores.ts#saved .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-dbff7424f73ca4c4b9

[code] [src/frontend/components/show/project.ts:57](../../../../../src/frontend/components/show/project.ts#L57); () => { let storedLayout = item.layout \|\| "" const show = get(showsCache)&#91;item.id&#93; if (!show?.settings) return if (!show.layouts?.&#91;storedLayout&#93;) return // no update when it is alr. resolved-within-bound.

Conditions: src/frontend/components/show/project.ts:55 (item.type \|\| "show") === "show" && item.layout; src/frontend/components/show/project.ts:60 !show?.settings; src/frontend/components/show/project.ts:61 !show.layouts?.&#91;storedLayout&#93;; src/frontend/components/show/project.ts:63 show.settings.activeLayout === storedLayout.

Calls: src/frontend/components/show/project.ts:57 <callback> (depth 0); src/frontend/components/show/project.ts:65 <callback> (depth 1).

Effects: src/frontend/components/show/project.ts:65 store-write src/frontend/stores.ts#showsCache .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
