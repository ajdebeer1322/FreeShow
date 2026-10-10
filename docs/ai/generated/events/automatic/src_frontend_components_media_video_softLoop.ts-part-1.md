# automatic/src_frontend_components_media_video_softLoop.ts (1)

## setTimeout — event-ad73fb6d6e6b828bde

[code] [src/frontend/components/media/video/softLoop.ts:33](../../../../../src/frontend/components/media/video/softLoop.ts#L33); () => { this.isHolding = false this.holdReleaseTimeout = null }. resolved-within-bound.

Conditions: src/frontend/components/media/video/softLoop.ts:32 !this.holdReleaseTimeout; src/frontend/components/media/video/softLoop.ts:28 mainSeeked && this.holdReleaseTimeout; src/frontend/components/media/video/softLoop.ts:25 this.isHolding && opacity === 0.

Calls: src/frontend/components/media/video/softLoop.ts:33 <callback> (depth 0).

Effects: no indexed terminal effect.

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 0; depth cutoffs: 0. Full edges/effects/conditions in JSON.
