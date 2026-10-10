# click/src_server_remote_components_tablet_layout_drawer_TabletDrawerNavigation.svelte (2)

## click — event-104ed8b6eccdec8a5e

[code] [src/server/remote/components/tablet/layout/drawer/TabletDrawerNavigation.svelte:274](../../../../../src/server/remote/components/tablet/layout/drawer/TabletDrawerNavigation.svelte#L274); () => { const id = item.collection ? item.collection.versions&#91;0&#93; : item.id const colId = item.collection ? item.id : "" openedScripture.set(id) collectionId.set(colId) localStorage. partial.

Conditions: src/server/remote/components/tablet/layout/drawer/TabletDrawerNavigation.svelte:138 id === "shows"; src/server/remote/components/tablet/layout/drawer/TabletDrawerNavigation.svelte:140 id === "functions"; src/server/remote/components/tablet/layout/drawer/TabletDrawerNavigation.svelte:262 id === "overlays"; src/server/remote/components/tablet/layout/drawer/TabletDrawerNavigation.svelte:264 id === "templates"; src/server/remote/components/tablet/layout/drawer/TabletDrawerNavigation.svelte:266 id === "scripture".

Calls: no function target resolved.

Effects: src/server/remote/components/tablet/layout/drawer/TabletDrawerNavigation.svelte:277 store-write src/server/remote/util/stores.ts#openedScripture ; src/server/remote/components/tablet/layout/drawer/TabletDrawerNavigation.svelte:278 store-write src/server/remote/util/stores.ts#collectionId .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
