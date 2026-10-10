# automatic/src_frontend_utils_pcoLiveSync.ts (1)

## setInterval — event-67709469dae5e95217

[code] [src/frontend/utils/pcoLiveSync.ts:134](../../../../../src/frontend/utils/pcoLiveSync.ts#L134); tickPcoTimers. partial.

Conditions: src/frontend/utils/pcoLiveSync.ts:138 !activePcoTimerIds.length; src/frontend/utils/pcoLiveSync.ts:147 !timer; src/frontend/utils/pcoLiveSync.ts:152 cached; src/frontend/utils/pcoLiveSync.ts:156 type === "end_service" && cached.serviceEndAt; src/frontend/utils/pcoLiveSync.ts:158 !cached.liveStartAt \|\| cached.isPreService; src/frontend/utils/pcoLiveSync.ts:160 effectiveLength; src/frontend/utils/pcoLiveSync.ts:164 currentTime < 0 && !timer.overflow; src/frontend/utils/pcoLiveSync.ts:168 existing.

Calls: src/frontend/utils/pcoLiveSync.ts:137 tickPcoTimers (depth 0); src/frontend/utils/pcoLiveSync.ts:142 getDiffSeconds (depth 1); src/frontend/utils/pcoLiveSync.ts:144 <callback> (depth 1); src/frontend/utils/pcoLiveSync.ts:40 serviceScheduleFallback (depth 2); src/frontend/utils/pcoLiveSync.ts:167 <callback> (depth 2); src/frontend/utils/request.ts:4 send (depth 1); src/frontend/components/helpers/debugLog.ts:252 debugSentToOutput (depth 2); src/frontend/components/helpers/debugLog.ts:31 isOutputWindow (depth 3); src/frontend/components/helpers/debugLog.ts:254 <callback> (depth 3); src/frontend/components/helpers/debugLog.ts:41 debugLog (depth 3); src/frontend/components/helpers/debugLog.ts:35 outputWindowLabel (depth 4); src/frontend/components/helpers/debugLog.ts:137 outputName (depth 5); src/frontend/components/helpers/debugLog.ts:78 stringify (depth 4); src/frontend/components/helpers/debugLog.ts:55 addDebugEntry (depth 4); src/frontend/components/helpers/debugLog.ts:62 <callback> (depth 5); src/frontend/components/helpers/debugLog.ts:65 <callback> (depth 6).

Effects: src/frontend/utils/pcoLiveSync.ts:178 ipc send(STAGE, &#91;"ACTIVE_TIMERS"&#93;, get(activeTimers)) ; src/frontend/utils/pcoLiveSync.ts:144 store-write src/frontend/stores.ts#activeTimers ; src/frontend/components/helpers/debugLog.ts:47 ipc send(OUTPUT, &#91;"MAIN_DEBUG"&#93;, { time: Date.now(), category: outputWindowLabel(), message: '&#91;${category}&#93; ${message}', data: stringify(data) }) ; src/frontend/components/helpers/debugLog.ts:65 store-write src/frontend/components/helpers/debugLog.ts#debugEntries .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 5; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-76a88a93929273c83c

[code] [src/frontend/utils/pcoLiveSync.ts:230](../../../../../src/frontend/utils/pcoLiveSync.ts#L230); () => { recoveryPollDebounce.delete(id) pollTimer(id) }. partial.

Conditions: none extracted; parent state may gate mounting.

Calls: src/frontend/utils/pcoLiveSync.ts:230 <callback> (depth 0); src/frontend/utils/pcoLiveSync.ts:239 pollTimer (depth 1); src/frontend/utils/pcoLiveSync.ts:56 resolveTimerPlan (depth 2); src/frontend/utils/pcoLiveSync.ts:64 <callback> (depth 3); src/frontend/IPC/main.ts:19 requestMain (depth 2); src/frontend/IPC/main.ts:68 sendMain (depth 3); src/frontend/IPC/main.ts:28 cleanup (depth 3); src/frontend/IPC/main.ts:36 <callback> (depth 3); src/frontend/IPC/main.ts:37 <callback> (depth 4); src/frontend/IPC/main.ts:48 <callback> (depth 4); src/frontend/utils/pcoLiveSync.ts:249 parseDate (depth 2); src/frontend/utils/pcoLiveSync.ts:193 subscribePusherChannel (depth 2); src/frontend/utils/pcoLiveSync.ts:181 getPusher (depth 3); src/frontend/utils/pcoLiveSync.ts:186 <callback> (depth 4); src/frontend/utils/pcoLiveSync.ts:268 pollAllTimers (depth 5); src/frontend/utils/pcoLiveSync.ts:269 <callback> (depth 6).

Effects: src/frontend/utils/pcoLiveSync.ts:247 ipc requestMain(Main.PCO_LIVE_GET, { serviceTypeId: plan.serviceTypeId, planId: plan.planId }) ; src/frontend/IPC/main.ts:23 ipc sendMain(id, value, listenerId) ; src/frontend/IPC/main.ts:72 ipc window.api.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 7; depth cutoffs: 1. Full edges/effects/conditions in JSON.
