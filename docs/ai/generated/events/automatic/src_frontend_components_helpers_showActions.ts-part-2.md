# automatic/src_frontend_components_helpers_showActions.ts (2)

## setTimeout — event-c133c7864fef71a291

[code] [src/frontend/components/helpers/showActions.ts:654](../../../../../src/frontend/components/helpers/showActions.ts#L654); () => { setOutput("slide", { id: currentShowId, layout: _show(currentShowId).get("settings.activeLayout"), index, line: 0 }) updateOut(currentShowId, index, showRef, extra, "") }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/showActions.ts:654 <callback> (depth 0); src/frontend/components/helpers/output.ts:158 setOutput (depth 1); src/frontend/components/helpers/shows.ts:389 ref (depth 2); src/frontend/components/helpers/shows.ts:394 <callback> (depth 3); src/frontend/components/helpers/shows.ts:397 <callback> (depth 4); src/frontend/components/helpers/shows.ts:402 <callback> (depth 5); src/frontend/components/helpers/shows.ts:415 <callback> (depth 5); src/frontend/components/helpers/shows.ts:103 set (depth 5); src/frontend/components/helpers/shows.ts:105 <callback> (depth 6); src/frontend/components/helpers/shows.ts:74 slides (depth 5); src/frontend/components/helpers/shows.ts:76 get (depth 6); src/frontend/components/helpers/shows.ts:123 add (depth 6); src/frontend/components/helpers/shows.ts:142 remove (depth 6); src/frontend/components/helpers/shows.ts:162 items (depth 6); src/frontend/components/helpers/shows.ts:18 _show (depth 5); src/frontend/components/helpers/shows.ts:27 get (depth 6).

Effects: src/frontend/components/helpers/showActions.ts:655 presentation setOutput ; src/frontend/components/helpers/showActions.ts:656 presentation updateOut ; src/frontend/components/helpers/shows.ts:402 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:105 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:433 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:478 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:495 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:508 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:541 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:570 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:614 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:647 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:40 store-write src/frontend/stores.ts#showsCache ; src/frontend/components/helpers/shows.ts:61 store-write src/frontend/stores.ts#showsCache .

may change live output; inspect conditions/trace. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 80; depth cutoffs: 256. Full edges/effects/conditions in JSON.

## setTimeout — event-c4b9ee3336302b09a8

[code] [src/frontend/components/helpers/showActions.ts:659](../../../../../src/frontend/components/helpers/showActions.ts#L659); () => { // defocus search input ;(document.activeElement as any)?.blur() }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/showActions.ts:659 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-0eef2f8fba6a29ee28

[code] [src/frontend/components/helpers/showActions.ts:720](../../../../../src/frontend/components/helpers/showActions.ts#L720); () => { nextActive.splice(nextActive.indexOf(outputId), 1) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/helpers/showActions.ts:720 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-85ffcd224cabe71423

[code] [src/frontend/components/helpers/showActions.ts:931](../../../../../src/frontend/components/helpers/showActions.ts#L931); () => dynamicIdsCache.clear(). partial.

Conditions: src/frontend/components/helpers/showActions.ts:926 !dynamicIdsCache.has(mode).

Calls: src/frontend/components/helpers/showActions.ts:931 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 1; depth cutoffs: 0. Full edges/effects/conditions in JSON.
