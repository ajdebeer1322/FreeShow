# action/obs_stop_recording (1)

## obs_stop_recording — event-f0224ebba41b7c19db

[code] [src/frontend/components/actions/api.ts:367](../../../../../src/frontend/components/actions/api.ts#L367); () => obsStopRecording(). partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/components/actions/api.ts:367 obs_stop_recording (depth 0); src/frontend/utils/obsTalk.ts:226 obsStopRecording (depth 1); src/frontend/utils/obsTalk.ts:164 connectToOBS (depth 2); src/frontend/utils/obsTalk.ts:20 checkData (depth 3); src/frontend/utils/obsTalk.ts:148 disconnect (depth 3); src/frontend/utils/obsTalk.ts:120 setConnected (depth 4); src/frontend/utils/obsTalk.ts:122 <callback> (depth 5); src/frontend/utils/obsTalk.ts:42 connect (depth 3); src/frontend/utils/obsTalk.ts:46 <callback> (depth 4); src/frontend/utils/obsTalk.ts:51 <callback> (depth 5); src/frontend/utils/obsTalk.ts:34 updatePassword (depth 6); src/frontend/utils/obsTalk.ts:66 <callback> (depth 6); src/frontend/utils/obsTalk.ts:74 <callback> (depth 5); src/frontend/utils/popup.ts:225 promptCustom (depth 6); src/frontend/utils/obsTalk.ts:153 generateAuthString (depth 6); src/frontend/utils/obsTalk.ts:142 send (depth 6).

Effects: src/frontend/utils/obsTalk.ts:122 store-write src/frontend/stores.ts#obsData ; src/frontend/utils/popup.ts:226 store-write src/frontend/stores.ts#popupData .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 14; depth cutoffs: 2. Full edges/effects/conditions in JSON.
