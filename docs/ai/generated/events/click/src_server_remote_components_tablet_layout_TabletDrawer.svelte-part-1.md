# click/src_server_remote_components_tablet_layout_TabletDrawer.svelte (1)

## click — event-96dde6610e51b25f12

[code] [src/server/remote/components/tablet/layout/TabletDrawer.svelte:153](../../../../../src/server/remote/components/tablet/layout/TabletDrawer.svelte#L153); (e) => { e.stopPropagation() openDrawerTab(tabId) }. resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: src/server/remote/components/tablet/layout/TabletDrawer.svelte:137 openDrawerTab (depth 1); src/server/remote/components/tablet/layout/TabletDrawer.svelte:121 toggleDrawer (depth 2); src/server/remote/components/tablet/layout/TabletDrawer.svelte:123 <callback> (depth 3); src/server/remote/components/tablet/layout/TabletDrawer.svelte:125 <callback> (depth 3).

Effects: src/server/remote/components/tablet/layout/TabletDrawer.svelte:138 store-write src/server/remote/util/stores.ts#activeDrawerTab ; src/server/remote/components/tablet/layout/TabletDrawer.svelte:123 store-write src/server/remote/util/stores.ts#drawer ; src/server/remote/components/tablet/layout/TabletDrawer.svelte:125 store-write src/server/remote/util/stores.ts#drawer .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-4596857dff12081300

[code] [src/server/remote/components/tablet/layout/TabletDrawer.svelte:167](../../../../../src/server/remote/components/tablet/layout/TabletDrawer.svelte#L167); (e) => e.stopPropagation(). resolved-within-bound.

Conditions: none extracted; parent state may gate mounting.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-85f93e90c86ca486b7

[code] [src/server/remote/components/tablet/layout/TabletDrawer.svelte:171](../../../../../src/server/remote/components/tablet/layout/TabletDrawer.svelte#L171); (e) => { e.stopPropagation() searchValue = "" searchElem?.focus() }. resolved-within-bound.

Conditions: src/server/remote/components/tablet/layout/TabletDrawer.svelte:168 searchValue.length.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
