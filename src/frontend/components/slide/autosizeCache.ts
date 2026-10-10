export interface AutoSizeCacheEntry {
    signature: string
    fontSize: number
}

const autoSizeCache = new Map<string, AutoSizeCacheEntry>()

export function readAutoSizeCache(key: string) {
    if (!key) return undefined
    return autoSizeCache.get(key)
}

// keys are per text and box, so it grows with the number of different slides that are shown
const MAX_ENTRIES = 500

export function writeAutoSizeCache(key: string, entry: AutoSizeCacheEntry) {
    if (!key) return
    // the oldest entry goes first
    autoSizeCache.delete(key)
    autoSizeCache.set(key, entry)
    if (autoSizeCache.size > MAX_ENTRIES) autoSizeCache.delete(autoSizeCache.keys().next().value as string)
}

export function clearAutoSizeCache(key?: string) {
    if (!key) {
        autoSizeCache.clear()
        return
    }
    autoSizeCache.delete(key)
}
