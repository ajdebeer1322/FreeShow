import { beforeEach, describe, expect, it, vi } from "vitest"
import { get } from "svelte/store"
import { outputs, showsCache } from "../../stores"

vi.mock("./shows", () => ({ _show: () => ({ layouts: () => ({ ref: () => [[{ id: "s0", data: { bindings: ["side"] } }]] }) }) }))

import { clearDebugLog, DEBUG_AREAS, debugEntries, debugLog, debugPanelOpen, describeOutputData, describeOutputs, describeSlide, formatDebugEntries, formatDebugEntry, getAreaEntries, getDebugArea, getDebugBuffer, isDebugging, MAX_DEBUG_ENTRIES } from "./debugLog"

describe("debug recorder", () => {
    beforeEach(() => {
        debugPanelOpen.set(false)
        clearDebugLog()
        outputs.set({ side: { name: "1Side", active: true, out: { slide: { id: "show", layout: "default", index: 0 } } }, centre: { name: "2Centre", active: true, out: {} } } as never)
        showsCache.set({ show: { name: "Holy night", settings: { activeLayout: "default" }, slides: { s0: { group: "Verse" } }, layouts: { default: { name: "Default", slides: [{ id: "s0" }] } } } } as never)
    })

    it("records nothing while the panel is closed", () => {
        debugLog("TEST", "ignored")
        expect(isDebugging()).toBe(false)
        expect(getDebugBuffer()).toEqual([])
    })

    it("records while open and keeps only the newest entries", () => {
        debugPanelOpen.set(true)
        expect(isDebugging()).toBe(true)
        clearDebugLog()
        for (let i = 0; i < MAX_DEBUG_ENTRIES + 5; i++) debugLog("TEST", "line " + i)
        const buffer = getDebugBuffer()
        expect(buffer.length).toBe(MAX_DEBUG_ENTRIES)
        expect(buffer[buffer.length - 1].message).toBe("line " + (MAX_DEBUG_ENTRIES + 4))
        expect(buffer[0].message).toBe("line 5")
        debugPanelOpen.set(false)
    })

    it("formats a line with time, category, message and data", () => {
        const text = formatDebugEntry({ time: new Date(2026, 9, 9, 7, 5, 3, 42).getTime(), category: "PLAY", message: "x", data: '{"a":1}' })
        expect(text).toBe('07:05:03.042 [PLAY] x {"a":1}')
    })

    it("flushes entries to the store for the panel", async () => {
        debugPanelOpen.set(true)
        debugLog("TEST", "hello")
        await new Promise((resolve) => setTimeout(resolve, 80))
        expect(get(debugEntries).some((a) => a.message === "hello")).toBe(true)
        debugPanelOpen.set(false)
    })

    it("describes slides and outputs with names instead of ids", () => {
        expect(describeSlide({ id: "show", layout: "default", index: 0 })).toBe('"Holy night" #0 (Verse) ->1Side')
        expect(describeSlide(null)).toBe("-")
        expect(describeOutputs()).toEqual(['1Side: "Holy night" #0 (Verse) ->1Side', "2Centre: -"])
        expect(describeOutputData("transition", { duration: 3 })).toBe("timer 3s")
        expect(describeOutputData("transition", null)).toBe("timer cleared")
        expect(describeOutputData("background", { path: "/a/b/pic.png" })).toBe("pic.png")
    })

    it("sorts entries into the tabs of the main parts of the program", () => {
        const entry = (category: string, message = "x") => ({ time: 1, category, message })
        expect(getDebugArea(entry("KEY"))).toBe("keys")
        expect(getDebugArea(entry("PLAY"))).toBe("keys")
        expect(getDebugArea(entry("PROJECT"))).toBe("keys")
        expect(getDebugArea(entry("SET"))).toBe("outputs")
        expect(getDebugArea(entry("TIMER"))).toBe("outputs")
        expect(getDebugArea(entry("WINDOW"))).toBe("windows")
        expect(getDebugArea(entry("output window 1Side"))).toBe("windows")
        expect(getDebugArea(entry("UI"))).toBe("control")
        expect(getDebugArea(entry("SCROLL"))).toBe("control")
        expect(getDebugArea(entry("DEBUG"))).toBe("other")

        // a category belongs to one tab only
        const all = DEBUG_AREAS.flatMap((a) => a.categories)
        expect(new Set(all).size).toBe(all.length)

        const entries = [entry("KEY", "a"), entry("UI", "b"), entry("SET", "c"), entry("output window 2Centre", "d")]
        expect(getAreaEntries(entries, "control").map((a) => a.message)).toEqual(["b"])
        expect(getAreaEntries(entries, "windows").map((a) => a.message)).toEqual(["d"])
        expect(getAreaEntries(entries, "all")).toHaveLength(4)
        expect(formatDebugEntries(getAreaEntries(entries, "keys"))).toContain("[KEY] a")
    })
})
