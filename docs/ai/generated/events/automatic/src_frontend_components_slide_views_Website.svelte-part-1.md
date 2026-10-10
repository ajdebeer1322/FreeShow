# automatic/src_frontend_components_slide_views_Website.svelte (1)

## setTimeout — event-3d033447753ea2c918

[code] [src/frontend/components/slide/views/Website.svelte:137](../../../../../src/frontend/components/slide/views/Website.svelte#L137); () => { if (webviewReady && webview) { try { webview.focus() } catch (err) { console.debug("Webview focus failed:", err) } } }. resolved-within-bound.

Conditions: src/frontend/components/slide/views/Website.svelte:138 webviewReady && webview.

Calls: src/frontend/components/slide/views/Website.svelte:137 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-cc59d6bfb0753b18af

[code] [src/frontend/components/slide/views/Website.svelte:169](../../../../../src/frontend/components/slide/views/Website.svelte#L169); checkNavigation. partial.

Conditions: src/frontend/components/slide/views/Website.svelte:173 !webviewReady \|\| !webview.

Calls: src/frontend/components/slide/views/Website.svelte:172 checkNavigation (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 2; depth cutoffs: 0. Full edges/effects/conditions in JSON.
