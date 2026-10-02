import { get } from "svelte/store"
import type { LiveMessage } from "../../../types/Message"
import { activeProfile, outLocked, outputs, overlays, profiles } from "../../stores"
import { getActiveOutputs, resolveOutputIds, setOutput } from "./output"
import { snapshotMessage } from "./messages"

export function showMessage(id: string, values: Record<string, string>, update = false): string[] {
    if (get(outLocked)) return []
    const overlay = get(overlays)[id]
    if (!overlay?.message) return []
    const profileId = get(activeProfile)
    const access = profileId ? get(profiles)[profileId]?.access.overlays || {} : {}
    if (access.global === "none" || access[overlay.category || ""] === "none") return []
    const outs = get(outputs)
    const configured = overlay.message.outputIds || []
    const targets = update ? Object.keys(outs).filter((outputId) => outs[outputId].out?.messages?.[id]) : configured.length ? resolveOutputIds(configured, outs) : getActiveOutputs(outs, true, true, true)
    const eligible = targets.filter((outputId) => outs[outputId]?.enabled && !outs[outputId].stageOutput)
    const snapshot = snapshotMessage(id, overlay, values)
    eligible.forEach((outputId) => setOutput("messages", { ...get(outputs)[outputId].out?.messages, [id]: snapshot }, false, outputId))
    return eligible
}

export function hideMessage(id: string, outputIds?: string[]) {
    if (get(outLocked)) return
    const outs = get(outputs)
    ;(outputIds || Object.keys(outs)).forEach((outputId) => {
        if (!outs[outputId]?.out?.messages?.[id]) return
        const remaining = { ...outs[outputId].out!.messages }
        delete remaining[id]
        setOutput("messages", remaining, false, outputId)
    })
}

export function clearMessages(outputIds: string[]) {
    if (get(outLocked)) return
    outputIds.forEach((outputId) => setOutput("messages", {}, false, outputId))
}

// One main-window scheduler reconciles live snapshots (including restore/clear/output removal).
// An old deadline can never remove a newer revision of the same message.
export function startMessageTimers() {
    const timers = new Map<string, { revision: string; timer: ReturnType<typeof setTimeout> }>()
    const unsubscribe = outputs.subscribe((outs) => {
        const current = new Set<string>()
        Object.entries(outs).forEach(([outputId, output]) => {
            Object.entries(output.out?.messages || {}).forEach(([id, message]: [string, LiveMessage]) => {
                if (!message.expiresAt) return
                const key = JSON.stringify([outputId, id])
                current.add(key)
                if (timers.get(key)?.revision === message.revision) return
                if (timers.has(key)) clearTimeout(timers.get(key)!.timer)
                const timer = setTimeout(
                    () => {
                        timers.delete(key)
                        if (get(outputs)[outputId]?.out?.messages?.[id]?.revision !== message.revision) return
                        const remaining = { ...get(outputs)[outputId].out!.messages }
                        delete remaining[id]
                        setOutput("messages", remaining, false, outputId)
                    },
                    Math.min(2147483647, Math.max(0, message.expiresAt - Date.now()))
                )
                timers.set(key, { revision: message.revision, timer })
            })
        })
        for (const [key, entry] of timers) {
            if (current.has(key)) continue
            clearTimeout(entry.timer)
            timers.delete(key)
        }
    })
    return () => {
        unsubscribe()
        timers.forEach((entry) => clearTimeout(entry.timer))
        timers.clear()
    }
}
