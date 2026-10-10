# automatic/src_electron_utils_gpu.ts (1)

## setTimeout — event-5f0181855ab4059a4a

[code] [src/electron/utils/gpu.ts:163](../../../../../src/electron/utils/gpu.ts#L163); attempt. partial.

Conditions: src/electron/utils/gpu.ts:162 (!win \|\| win.webContents.isLoading()) && ++attempts < 10; src/electron/utils/gpu.ts:162 (!win \|\| win.webContents.isLoading()) && ++attempts < 10.

Calls: src/electron/utils/gpu.ts:160 attempt (depth 0); src/electron/index.ts:287 getMainWindow (depth 1); src/electron/utils/gpu.ts:220 runGpuHealthCheck (depth 1); src/electron/utils/gpu.ts:131 isHardware (depth 2); src/electron/utils/gpu.ts:172 probeHardwareDecode (depth 2); src/electron/utils/gpu.ts:246 <callback> (depth 2); src/electron/utils/gpu.ts:118 findVaDrivers (depth 2); src/electron/utils/gpu.ts:199 linuxNodeVendor (depth 2); src/electron/utils/gpu.ts:210 allLinuxGpuVendors (depth 2); src/electron/utils/gpu.ts:213 <callback> (depth 3); src/electron/utils/gpu.ts:217 <callback> (depth 3); src/electron/utils/gpu.ts:264 <callback> (depth 2); src/electron/utils/gpu.ts:191 vendorVaDriverPresent (depth 3); src/electron/utils/gpu.ts:192 <callback> (depth 4); src/electron/utils/gpu.ts:193 <callback> (depth 4); src/electron/utils/gpu.ts:194 <callback> (depth 4).

Effects: src/electron/utils/gpu.ts:272 ipc sendToMain(ToMain.GPU_HEALTH, { issue, platform: process.platform, vendorName, vaDriverMissing, packages }) ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 0. Full edges/effects/conditions in JSON.

## setTimeout — event-2a51802153618e4904

[code] [src/electron/utils/gpu.ts:168](../../../../../src/electron/utils/gpu.ts#L168); attempt. partial.

Conditions: src/electron/utils/gpu.ts:162 (!win \|\| win.webContents.isLoading()) && ++attempts < 10.

Calls: src/electron/utils/gpu.ts:160 attempt (depth 0); src/electron/index.ts:287 getMainWindow (depth 1); src/electron/utils/gpu.ts:220 runGpuHealthCheck (depth 1); src/electron/utils/gpu.ts:131 isHardware (depth 2); src/electron/utils/gpu.ts:172 probeHardwareDecode (depth 2); src/electron/utils/gpu.ts:246 <callback> (depth 2); src/electron/utils/gpu.ts:118 findVaDrivers (depth 2); src/electron/utils/gpu.ts:199 linuxNodeVendor (depth 2); src/electron/utils/gpu.ts:210 allLinuxGpuVendors (depth 2); src/electron/utils/gpu.ts:213 <callback> (depth 3); src/electron/utils/gpu.ts:217 <callback> (depth 3); src/electron/utils/gpu.ts:264 <callback> (depth 2); src/electron/utils/gpu.ts:191 vendorVaDriverPresent (depth 3); src/electron/utils/gpu.ts:192 <callback> (depth 4); src/electron/utils/gpu.ts:193 <callback> (depth 4); src/electron/utils/gpu.ts:194 <callback> (depth 4).

Effects: src/electron/utils/gpu.ts:272 ipc sendToMain(ToMain.GPU_HEALTH, { issue, platform: process.platform, vendorName, vaDriverMissing, packages }) ; src/electron/IPC/main.ts:13 ipc mainWindow.webContents.send(MAIN, { channel: id, data: value }, listenerId) .

no direct audience effect indexed; unresolved/deeper calls may change output. Undo: no history creation found within six levels; not proof of non-undoability. Unresolved edges: 12; depth cutoffs: 0. Full edges/effects/conditions in JSON.
