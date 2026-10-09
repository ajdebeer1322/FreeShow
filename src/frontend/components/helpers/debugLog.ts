// Debug recorder for presentation navigation (Ctrl/Cmd+Shift+L). It only records while the debug panel is open, so it costs nothing otherwise.
// Everything is plain text so the whole log can be copied and sent along with a bug report.

import { get, writable } from "svelte/store"
import type { OutSlide } from "../../../types/Show"
import { OUTPUT } from "../../../types/Channels"
import { activeShow, currentWindow, outputs, shows, showsCache, slideTimers } from "../../stores"
import { send } from "../../utils/request"
import { _show } from "./shows"

export type DebugEntry = { time: number; category: string; message: string; data?: string }

export const debugPanelOpen = writable(false)
export const debugEntries = writable<DebugEntry[]>([])

export const MAX_DEBUG_ENTRIES = 3000

let enabled = false
let buffer: DebugEntry[] = []
let flushTimer: ReturnType<typeof setTimeout> | null = null

export function isDebugging() {
    return enabled
}

/** The output windows are separate renderers: they record nothing themselves, but forward their lines to the main window's log */
export function setRemoteDebug(on: boolean) {
    enabled = on
}

export function isOutputWindow() {
    return get(currentWindow) === "output"
}

function outputWindowLabel() {
    const id = Object.keys(get(outputs) || {})[0]
    return id ? "output window " + outputName(id) : "output window"
}

/** Add one line to the debug log. `data` is shown as compact JSON after the message. */
export function debugLog(category: string, message: string | (() => string), data?: unknown) {
    if (!enabled) return
    // a function builds the text only when the panel is open (describing slides is not free)
    if (typeof message === "function") message = message()

    if (isOutputWindow()) {
        send(OUTPUT, ["MAIN_DEBUG"], { time: Date.now(), category: outputWindowLabel(), message: `[${category}] ${message}`, data: stringify(data) })
        return
    }

    addDebugEntry({ time: Date.now(), category, message, data: stringify(data) })
}

/** An entry received from an output window */
export function addDebugEntry(entry: DebugEntry) {
    if (!enabled) return

    buffer.push(entry)
    if (buffer.length > MAX_DEBUG_ENTRIES) buffer = buffer.slice(buffer.length - MAX_DEBUG_ENTRIES)

    if (flushTimer) return
    flushTimer = setTimeout(() => {
        flushTimer = null
        // lines from the output windows arrive a little later than they happened
        debugEntries.set(buffer.slice().sort((a, b) => a.time - b.time))
    }, 50)
}

export function clearDebugLog() {
    buffer = []
    debugEntries.set([])
}

export function getDebugBuffer() {
    return buffer.slice()
}

function stringify(data: unknown): string | undefined {
    if (data === undefined) return undefined
    try {
        return JSON.stringify(data)
    } catch {
        return String(data)
    }
}

export function formatDebugTime(time: number) {
    const d = new Date(time)
    const pad = (n: number, size = 2) => String(n).padStart(size, "0")
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${pad(d.getMilliseconds(), 3)}`
}

/** The main parts of the program that log, shown as tabs in the debug panel */
export type DebugAreaId = "keys" | "outputs" | "windows" | "control" | "other"
export const DEBUG_AREAS: { id: DebugAreaId; label: string; description: string; categories: string[] }[] = [
    { id: "keys", label: "Keys & navigation", description: "Space/arrows/Next, what each output would do, project item changes, linked slides, clearing, clicks", categories: ["KEY", "ADVANCE", "PLAY", "PROJECT", "LINK", "CLEAR", "CLICK"] },
    { id: "outputs", label: "Outputs", description: "Every change of what an output shows, setOutput calls with their caller, slide timers", categories: ["SET", "OUTPUT", "UPDATEOUT", "TIMER"] },
    { id: "windows", label: "Output windows", description: "Updates sent to the output windows and what they received and rendered (lines starting with output window)", categories: ["WINDOW", "SENT"] },
    { id: "control", label: "Control panel", description: "The control panel window: the project view reloading, scrolling, selecting items, parts of the window rebuilt", categories: ["UI", "SCROLL", "SELECT"] },
    { id: "other", label: "Other", description: "Anything else", categories: [] }
]

/** Which tab an entry belongs to */
export function getDebugArea(entry: Pick<DebugEntry, "category">): DebugAreaId {
    if (entry.category.startsWith("output window")) return "windows"
    return DEBUG_AREAS.find((area) => area.categories.includes(entry.category))?.id || "other"
}

export function getAreaEntries(entries: DebugEntry[], area: DebugAreaId | "all"): DebugEntry[] {
    return area === "all" ? entries : entries.filter((entry) => getDebugArea(entry) === area)
}

export function formatDebugEntries(entries: DebugEntry[]): string {
    return entries.map(formatDebugEntry).join("\n")
}

export function formatDebugEntry(entry: DebugEntry) {
    return `${formatDebugTime(entry.time)} [${entry.category}] ${entry.message}${entry.data ? " " + entry.data : ""}`
}

/** Where a call came from: the names of the first few functions on the stack (without this file and the store internals) */
export function callerNames(skip = 2, count = 4): string {
    const lines = (new Error().stack || "").split("\n").slice(skip + 1)
    const names: string[] = []
    for (const line of lines) {
        const match = line.match(/at (?:async )?([^\s(]+)/)
        const name = match?.[1]?.split("/").pop() || ""
        if (!name || /^(Object\.)?(update|set|subscribe|run|invalidate|safe_not_equal)$/.test(name) || name.includes("svelte/store") || name.includes("node_modules")) continue
        names.push(name.replace(/^Function\./, "").replace(/^Object\./, ""))
        if (names.length >= count) break
    }
    return names.join(" < ")
}

/////

export function outputName(id: string) {
    const out = get(outputs)[id]
    return out ? `${out.name || id}` : id
}

export function outputNames(ids: string[] | undefined) {
    return (ids || []).map(outputName)
}

export function showName(id: string | undefined) {
    if (!id) return "?"
    return get(showsCache)[id]?.name || get(shows)[id]?.name || id
}

/** One readable line for a slide reference: show, flattened slide number, group and the outputs that slide goes to */
export function describeSlide(slide: Partial<OutSlide> | null | undefined): string {
    if (!slide || !slide.id) return "-"

    const show = get(showsCache)[slide.id]
    const layoutId = slide.layout || show?.settings?.activeLayout || ""
    const layout = show?.layouts?.[layoutId]
    let text = `"${showName(slide.id)}" #${slide.index ?? "?"}`

    // the flattened ref (with child slides) is what the index points to
    let ref: { id: string; data?: { bindings?: string[]; linkNext?: boolean; nextTimer?: number } } | undefined
    try {
        ref = layout ? flattenedRef(slide.id, layoutId)[slide.index ?? -1] : undefined
    } catch {
        ref = undefined
    }
    const group = ref ? show?.slides?.[ref.id]?.group : ""
    if (group) text += ` (${String(group).slice(0, 18)})`

    const bindings = ref?.data?.bindings?.length ? ref.data.bindings : show?.settings?.bindings || []
    text += ` ->${bindings.length ? outputNames(bindings).join("+") : "all"}`
    if (ref?.data?.linkNext) text += " linkNext"
    if (slide.line) text += ` line=${slide.line}`
    if (slide.revealCount) text += ` reveal=${slide.revealCount}`
    if (slide.projectIndex !== undefined) text += ` project#${slide.projectIndex}`
    if (layout && layoutId !== show?.settings?.activeLayout) text += ` layout=${layout.name || layoutId}`
    return text
}

function flattenedRef(showId: string, layoutId: string) {
    // same expansion as the output engine (parent + child slides)
    return (_show(showId).layouts([layoutId]).ref()[0] || []) as { id: string; data?: { bindings?: string[]; linkNext?: boolean; nextTimer?: number } }[]
}

/** Short text for the data given to setOutput */
export function describeOutputData(type: string, data: any): string {
    if (type === "slide") return describeSlide(data)
    if (type === "background")
        return data
            ? String(data.path || data.id || data)
                  .split("/")
                  .pop() || ""
            : "cleared"
    if (type === "transition") return data ? `timer ${data.duration}s` : "timer cleared"
    return (JSON.stringify(data) || "").slice(0, 80)
}

/** What one output is showing right now */
export function describeOutput(id: string): string {
    const all = get(outputs)
    const out = all[id]?.out
    const bg = out?.background
    const parts = [`${all[id]?.name || id}${all[id]?.active ? "" : " (inactive)"}: ${describeSlide(out?.slide as OutSlide)}`]
    if (bg)
        parts.push(
            `bg=${String(bg.path || bg.id || "")
                .split("/")
                .pop()}`
        )
    if (out?.transition) parts.push(`timer=${(out.transition as { duration?: number }).duration ?? "?"}s${get(slideTimers)[id] ? " running" : ""}`)
    return parts.join(" | ")
}

/** What every output is showing right now */
export function describeOutputs(): string[] {
    const all = get(outputs)
    return Object.keys(all)
        .filter((id) => !all[id].stageOutput)
        .map(describeOutput)
}

const NOISY_CHANNELS = ["BUFFER", "VISUALIZER_DATA", "TIMERS", "ACTIVE_TIMERS", "VARIABLES", "EVENTS", "AUDIO_ROUTING", "VOLUME", "STAGE", "PREVIEW"]

function summarizeOutputsData(data: any): string {
    return Object.keys(data || {})
        .map((id) => {
            const out = data[id]?.out
            const slide = out?.slide ? `${showName(out.slide.id)} #${out.slide.index}` : "-"
            const bg = out?.background
                ? String(out.background.path || out.background.id || "")
                      .split("/")
                      .pop()
                : "-"
            return `${outputName(id)}: slide ${slide}, bg ${bg}${out?.refresh ? ", refresh" : ""}`
        })
        .join(" | ")
}

/** An output window received something from the main window (only recorded in output windows) */
export function debugReceived(channel: string, data: any) {
    if (!enabled || !isOutputWindow() || NOISY_CHANNELS.includes(channel)) return
    debugLog("RECEIVED", channel + (channel === "OUTPUTS" ? ": " + summarizeOutputsData(data) : channel === "SHOWS" ? ` (${Object.keys(data || {}).length} shows)` : ""))
}

/** Rendering details: only recorded by the real output windows (the same components also draw the previews in the main window) */
export function debugRender(message: string) {
    if (!enabled || !isOutputWindow()) return
    debugLog("RENDER", message)
}

/** The main window sends something to the output windows */
export function debugSentToOutput(channels: string[]) {
    if (!enabled || isOutputWindow()) return
    const names = channels.filter((a) => !NOISY_CHANNELS.includes(a))
    if (names.length) debugLog("SENT", `to output windows: ${names.join(", ")}`)
}

/** Called every time the outputs are sent to the output windows: lists which parts of each output changed since the last send */
let lastSent: Record<string, Record<string, string>> = {}
export function debugOutputsSent(data: Record<string, any>) {
    if (!enabled) return

    const lines: string[] = []
    Object.keys(data || {}).forEach((id) => {
        const output = data[id]
        if (output?.stageOutput) return

        const parts: Record<string, string> = {}
        Object.keys(output || {}).forEach((key) => {
            if (key === "out") return
            parts[key] = JSON.stringify(output[key])
        })
        Object.keys(output?.out || {}).forEach((key) => {
            parts["out." + key] = JSON.stringify(output.out[key])
        })

        const previous = lastSent[id] || {}
        const changed = Object.keys({ ...previous, ...parts }).filter((key) => previous[key] !== parts[key])
        lastSent[id] = parts
        lines.push(`    ${output?.name || id}: ${changed.length ? changed.join(", ") : "nothing changed"}`)
    })

    const nothing = lines.every((a) => a.endsWith("nothing changed"))
    debugLog("WINDOW", `output windows received OUTPUTS${nothing ? " (nothing changed: a redundant update)" : ""}\n${lines.join("\n")}`)
}

let unsubscribers: (() => void)[] = []

function startWatchers() {
    stopWatchers()
    watchDom()

    // every change of what an output shows, however it was caused: this is what the output windows render, so it also shows double updates
    let previous: Record<string, string> = {}
    const snapshot = (id: string) => {
        const out = get(outputs)[id]?.out
        return JSON.stringify({ slide: out?.slide ? { id: out.slide.id, index: out.slide.index, layout: out.slide.layout, line: out.slide.line, revealCount: out.slide.revealCount } : null, bg: out?.background ? out.background.path || out.background.id : null, timer: (out?.transition as { duration?: number } | null)?.duration ?? null })
    }
    unsubscribers.push(
        outputs.subscribe((all) => {
            Object.keys(all || {}).forEach((id) => {
                if (all[id].stageOutput) return
                const now = snapshot(id)
                if (previous[id] === now) return
                if (previous[id] !== undefined) debugLog("OUTPUT", `${describeOutput(id)}`)
                previous[id] = now
            })
        })
    )

    let previousShow = ""
    unsubscribers.push(
        activeShow.subscribe((active) => {
            const now = active ? `${active.id}:${active.index}` : ""
            if (now === previousShow) return
            if (previousShow !== "") debugLog("SELECT", `opened project item #${active?.index} "${showName(active?.id)}" (${active?.type || "show"})`)
            previousShow = now
        })
    )

    let previousTimers = ""
    unsubscribers.push(
        slideTimers.subscribe((timers) => {
            const now = Object.keys(timers || {})
                .map((id) => `${id}${timers[id].paused ? ":paused" : ":running"}`)
                .sort()
                .join(",")
            if (now === previousTimers) return
            if (previousTimers !== "" || now !== "")
                debugLog(
                    "TIMER",
                    `timers: ${
                        Object.keys(timers || {}).length
                            ? Object.keys(timers)
                                  .map((id) => `${outputName(id)} ${timers[id].max}s ${timers[id].paused ? "paused" : "running"}`)
                                  .join(", ")
                            : "none running"
                    }`
                )
            previousTimers = now
        })
    )
}

// Control panel refreshes: a burst of many elements removed and added at once is a part of the window being rebuilt (the "flicker").
// Logged with the biggest removed/added elements so it can be traced to the component that did it.
let domObserver: MutationObserver | null = null
const DOM_BURST_MIN = 40

function describeElement(node: Element) {
    const classes = String(node.getAttribute("class") || "")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 3)
        .join(".")
    return `${node.tagName.toLowerCase()}${node.id ? "#" + node.id : ""}${classes ? "." + classes : ""}`
}

function watchDom() {
    if (typeof document === "undefined" || typeof MutationObserver === "undefined" || isOutputWindow()) return

    let added = 0
    let removed = 0
    let biggestAdded: { size: number; text: string }[] = []
    let biggestRemoved: { size: number; text: string }[] = []
    let timer: ReturnType<typeof setTimeout> | null = null
    const top = (list: { size: number; text: string }[], item: { size: number; text: string }) => [...list, item].sort((a, b) => b.size - a.size).slice(0, 3)

    domObserver = new MutationObserver((records) => {
        records.forEach((record) => {
            if ((record.target as Element).closest?.(".debug")) return
            const parent = describeElement(record.target as Element)
            record.addedNodes.forEach((node) => {
                if (node.nodeType !== 1) return
                const size = (node as Element).querySelectorAll("*").length + 1
                added += size
                biggestAdded = top(biggestAdded, { size, text: `${describeElement(node as Element)} (${size}) in ${parent}` })
            })
            record.removedNodes.forEach((node) => {
                if (node.nodeType !== 1) return
                const size = (node as Element).querySelectorAll("*").length + 1
                removed += size
                biggestRemoved = top(biggestRemoved, { size, text: `${describeElement(node as Element)} (${size}) from ${parent}` })
            })
        })

        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            if (added + removed >= DOM_BURST_MIN) {
                debugLog("UI", `window part rebuilt: ${removed} elements removed, ${added} added within 60ms\n    removed: ${biggestRemoved.map((a) => a.text).join(" | ") || "-"}\n    added: ${biggestAdded.map((a) => a.text).join(" | ") || "-"}`)
            }
            added = 0
            removed = 0
            biggestAdded = []
            biggestRemoved = []
        }, 60)
    })
    domObserver.observe(document.body, { childList: true, subtree: true })
}

function stopWatchers() {
    unsubscribers.forEach((a) => a())
    unsubscribers = []
    domObserver?.disconnect()
    domObserver = null
}

debugPanelOpen.subscribe((open) => {
    if (open === enabled) return
    enabled = open
    // the output windows record too and send their lines here
    try {
        send(OUTPUT, ["DEBUG_ENABLED"], open)
    } catch {
        // no window bridge (tests)
    }
    if (open) {
        lastSent = {}
        debugLog("DEBUG", "recording started")
        startWatchers()
    } else {
        stopWatchers()
    }
})
