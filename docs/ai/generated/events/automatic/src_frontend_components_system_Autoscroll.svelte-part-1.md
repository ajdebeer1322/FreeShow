# automatic/src_frontend_components_system_Autoscroll.svelte (1)

## setTimeout — event-ef35d654f32ba1c5b5

[code] [src/frontend/components/system/Autoscroll.svelte:16](../../../../../src/frontend/components/system/Autoscroll.svelte#L16); () => (instantScroll = false). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/system/Autoscroll.svelte:16 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-62710376ac24382fb5

[code] [src/frontend/components/system/Autoscroll.svelte:44](../../../../../src/frontend/components/system/Autoscroll.svelte#L44); () => { if (!t) return elem.scrollTo(0, offset) t = null }. resolved-within-bound.

Conditions: src/frontend/components/system/Autoscroll.svelte:45 !t.

Calls: src/frontend/components/system/Autoscroll.svelte:44 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-1184fadae1c1f326b9

[code] [src/frontend/components/system/Autoscroll.svelte:56](../../../../../src/frontend/components/system/Autoscroll.svelte#L56); () => { if (!st) return if (offset !== elem.scrollTop) scroll(index) st = null }. resolved-within-bound.

Conditions: src/frontend/components/system/Autoscroll.svelte:57 !st; src/frontend/components/system/Autoscroll.svelte:58 offset !== elem.scrollTop.

Calls: src/frontend/components/system/Autoscroll.svelte:56 <callback> (depth 0); src/frontend/components/system/Autoscroll.svelte:28 scroll (depth 1); src/frontend/components/system/Autoscroll.svelte:44 <callback> (depth 2).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
