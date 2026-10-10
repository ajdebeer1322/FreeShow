# click/src_frontend_components_drawer_media_Media.svelte (4)

## click — event-ad3cc2fe919d71a42d

[code] [src/frontend/components/drawer/media/Media.svelte:662](../../../../../src/frontend/components/drawer/media/Media.svelte#L662); () => setView("video"). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/Media.svelte:638 isProviderSection; src/frontend/components/drawer/media/Media.svelte:642 active === "online"; src/frontend/components/drawer/media/Media.svelte:643 onlineTab === "youtube" \|\| onlineTab === "vimeo"; src/frontend/components/drawer/media/Media.svelte:656 onlineTab !== "canva" \|\| $providerConnections.canva; src/frontend/components/drawer/media/Media.svelte:658 onlineTab === "pixabay".

Calls: src/frontend/components/drawer/media/Media.svelte:41 setView (depth 1); src/frontend/components/drawer/media/Media.svelte:41 <callback> (depth 2).

Effects: src/frontend/components/drawer/media/Media.svelte:41 store-write src/frontend/stores.ts#mediaOptions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-8d1e352c8d10ea2eec

[code] [src/frontend/components/drawer/media/Media.svelte:670](../../../../../src/frontend/components/drawer/media/Media.svelte#L670); () => mediaOptions.update((a) => { a.mode = slidesViews&#91;$mediaOptions.mode&#93; return a }). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/Media.svelte:638 isProviderSection; src/frontend/components/drawer/media/Media.svelte:642 active === "online"; src/frontend/components/drawer/media/Media.svelte:643 onlineTab === "youtube" \|\| onlineTab === "vimeo"; src/frontend/components/drawer/media/Media.svelte:656 onlineTab !== "canva" \|\| $providerConnections.canva.

Calls: no function target resolved.

Effects: src/frontend/components/drawer/media/Media.svelte:671 store-write src/frontend/stores.ts#mediaOptions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-2c13c69db148242adf

[code] [src/frontend/components/drawer/media/Media.svelte:691](../../../../../src/frontend/components/drawer/media/Media.svelte#L691); goBack. resolved-within-bound.

Conditions: src/frontend/components/drawer/media/Media.svelte:638 isProviderSection; src/frontend/components/drawer/media/Media.svelte:642 active === "online"; src/frontend/components/drawer/media/Media.svelte:683 active === "inputs"; src/frontend/components/drawer/media/Media.svelte:688 active !== "all" && active !== "favourites"; src/frontend/components/drawer/media/Media.svelte:689 rootPath !== path; src/frontend/components/drawer/media/Media.svelte:470 e?.detail.ctrl.

Calls: src/frontend/components/drawer/media/Media.svelte:469 goBack (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-05569598fe5194221e

[code] [src/frontend/components/drawer/media/Media.svelte:708](../../../../../src/frontend/components/drawer/media/Media.svelte#L708); hasAudio.exists ? openAudioFolder : createAudioFolder. resolved-within-bound.

Conditions: src/frontend/components/drawer/media/Media.svelte:638 isProviderSection; src/frontend/components/drawer/media/Media.svelte:642 active === "online"; src/frontend/components/drawer/media/Media.svelte:683 active === "inputs"; src/frontend/components/drawer/media/Media.svelte:688 active !== "all" && active !== "favourites"; src/frontend/components/drawer/media/Media.svelte:689 rootPath !== path; src/frontend/components/drawer/media/Media.svelte:706 hasAudio.count.

Calls: no function target resolved.

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## click — event-06f36d88a636119a37

[code] [src/frontend/components/drawer/media/Media.svelte:729](../../../../../src/frontend/components/drawer/media/Media.svelte#L729); () => mediaOptions.update((a) => { a.mode = slidesViews&#91;$mediaOptions.mode&#93; return a }). resolved-within-bound.

Conditions: src/frontend/components/drawer/media/Media.svelte:638 isProviderSection; src/frontend/components/drawer/media/Media.svelte:642 active === "online"; src/frontend/components/drawer/media/Media.svelte:683 active === "inputs".

Calls: no function target resolved.

Effects: src/frontend/components/drawer/media/Media.svelte:730 store-write src/frontend/stores.ts#mediaOptions .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
