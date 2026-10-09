import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { get } from "svelte/store"
import type { Show } from "../../../types/Show"
import { activeProject, activeShow, outputs, projects, showsCache } from "../../stores"

const mockState = vi.hoisted(() => ({ lines: 0 }))

// Real OutputHelper navigation; output routing and rendering are stubbed (setOutput just stores the slide on the outputs it targets).
vi.mock("../../IPC/main", () => ({ requestMain: vi.fn(), sendMain: vi.fn() }))
vi.mock("../../audio/audioPlayer", () => ({ AudioPlayer: { getAllPlaying: () => [], getPlaying: () => false } }))
vi.mock("../../utils/shortcuts", () => ({ playFolder: vi.fn(), togglePlayingMedia: vi.fn() }))
vi.mock("../show/project", async () => {
    const { activeShow, projects } = await import("../../stores")
    const { get } = await import("svelte/store")
    return {
        openProjectItem: vi.fn((projectId: string, index: number) => {
            const item = get(projects)[projectId]?.shows?.[index]
            if (item) activeShow.set({ ...item, index } as never)
        })
    }
})
vi.mock("../actions/actions", () => ({ runActionId: vi.fn() }))
vi.mock("../output/clear", () => ({ clearTimers: vi.fn() }))
vi.mock("./array", () => ({ clone: (value: unknown) => (value === undefined ? undefined : JSON.parse(JSON.stringify(value))) }))
vi.mock("./setShow", () => ({ loadShows: vi.fn(async () => {}) }))
vi.mock("./showActions", () => ({
    checkActionTrigger: vi.fn(),
    getFewestOutputLines: () => mockState.lines,
    getItemWithMostLines: (slide: { lineCount?: number } | null) => slide?.lineCount || 0,
    playPdf: vi.fn(),
    updateOut: vi.fn()
}))
vi.mock("./shows", async () => {
    const { showsCache } = await import("../../stores")
    const { get } = await import("svelte/store")
    const layoutRef = (showId: string, layoutId?: string) => {
        const show = get(showsCache)[showId]
        const layout = show?.layouts?.[layoutId || show.settings.activeLayout]
        return (layout?.slides || []).map((slide, index) => {
            const { id, ...data } = slide as { id: string }
            return { type: "parent", id, index, data }
        })
    }
    return {
        _show: (showId: string) => ({
            layouts: (ids: string[] | "active") => ({ ref: () => [layoutRef(showId, Array.isArray(ids) ? ids[0] : undefined)] }),
            slides: (ids: string[]) => ({ get: () => ids.map((id) => get(showsCache)[showId]?.slides?.[id]).filter(Boolean) })
        })
    }
})
vi.mock("./output", async () => {
    const { activeShow, outputs, showsCache } = await import("../../stores")
    const { get } = await import("svelte/store")
    const { getLinkGroup, haveDifferentOutputs } = await import("./slideLinks")
    const slideBindings = (showId: string, slide: { bindings?: string[] } | undefined) => (slide?.bindings?.length ? slide.bindings : (get(showsCache)[showId]?.settings as { bindings?: string[] })?.bindings || [])
    return {
        getAllActiveOutputIds: () => Object.keys(get(outputs)),
        getSlideBindings: (showId: string, bindings?: string[]) => (bindings?.length ? bindings : (get(showsCache)[showId]?.settings as { bindings?: string[] })?.bindings || []),
        isOutputBound: (bindings: string[] | undefined, outputId: string) => !bindings?.length || bindings.includes(outputId),
        getLinkedSlides: (showId: string, slides: { bindings?: string[] }[], index: number) => getLinkGroup(slides, index, (a, b) => haveDifferentOutputs(slideBindings(showId, a), slideBindings(showId, b))),
        setOutput: vi.fn((type: string, data: { bindings?: string[] }, _toggle: boolean, outputId = "") => {
            if (type === "background") {
                outputs.update((all) => {
                    Object.keys(all).forEach((id) => {
                        if (outputId && id !== outputId) return
                        all[id].out = { ...(all[id].out || {}), background: data as never }
                    })
                    return all
                })
                return
            }
            if (type !== "slide") return
            // the real setOutput stores the project position of the shown item
            const active = get(activeShow)
            if (data && active?.id === (data as { id?: string }).id && active.index !== undefined) (data as { projectIndex?: number }).projectIndex = active.index
            outputs.update((all) => {
                Object.keys(all).forEach((id) => {
                    if (outputId && id !== outputId) return
                    all[id].out = { ...(all[id].out || {}), slide: data as never }
                })
                return all
            })
        })
    }
})

import { openProjectItem } from "../show/project"
import { setOutput } from "./output"
import { debugPanelOpen, formatDebugEntry, getDebugBuffer } from "./debugLog"
import { OutputHelper } from "./OutputHelper"

// A: main screen, B: side screen. Slides 0+1 and 2+3 are linked cards.
function makeShow(slideBindings: (string[] | undefined)[], links: boolean[], lineCounts: number[] = []): Show {
    const slides: Show["slides"] = {}
    slideBindings.forEach((_, i) => (slides["s" + i] = { group: "S" + i, color: null, settings: {}, notes: "", items: [], lineCount: lineCounts[i] || 0 } as never))
    return {
        name: "Linked",
        category: null,
        settings: { activeLayout: "default", template: null },
        timestamps: { created: 0, modified: null, used: null },
        meta: {},
        slides,
        layouts: { default: { name: "Default", notes: "", slides: slideBindings.map((bindings, i) => ({ id: "s" + i, ...(bindings ? { bindings } : {}), ...(links[i] ? { linkNext: true } : {}) })) } },
        media: {}
    } as Show
}

function outSlideIndex(id: string) {
    return get(outputs)[id].out?.slide?.index
}

function setup(show: Show) {
    showsCache.set({ show })
    projects.set({ p: { name: "P", created: 0, parent: "/", shows: [{ id: "show" }] } as never })
    activeProject.set("p")
    activeShow.set({ id: "show", index: 0 } as never)
}

async function flush() {
    await new Promise((resolve) => setTimeout(resolve, 130)) // presses are further apart than the 50ms active item cache
}

// delayed "clear what is left behind" checks of one test must not run during the next
afterEach(() => new Promise((resolve) => setTimeout(resolve, 1600)))

function press(key = " ") {
    OutputHelper.advanceOutputs({ key, altKey: false } as KeyboardEvent)
    return flush()
}

describe("Space with linked slides", () => {
    beforeEach(() => {
        mockState.lines = 0
        ;(globalThis as Record<string, unknown>).document = { activeElement: null }
        outputs.set({ A: { out: { slide: { id: "show", layout: "default", index: 0 } } }, B: { out: { slide: { id: "show", layout: "default", index: 1 } } } } as never)
    })

    it("moves both outputs to the next card with one press", async () => {
        setup(makeShow([["A"], ["B"], ["A"], ["B"], ["A"], ["B"]], [true, false, true, false, true, false]))
        await press()
        expect([outSlideIndex("A"), outSlideIndex("B")]).toEqual([2, 3])
        await press()
        expect([outSlideIndex("A"), outSlideIndex("B")]).toEqual([4, 5])
    })

    it("steps back with one press", async () => {
        setup(makeShow([["A"], ["B"], ["A"], ["B"]], [true, false, true, false]))
        outputs.set({ A: { out: { slide: { id: "show", layout: "default", index: 2 } } }, B: { out: { slide: { id: "show", layout: "default", index: 3 } } } } as never)
        await press("ArrowLeft")
        expect([outSlideIndex("A"), outSlideIndex("B")]).toEqual([0, 1])
    })

    it("steps through unbound slides around a card", async () => {
        // 0 unbound, 1(A)+2(B) card, 3 unbound, 4(A)+5(B) card, 6 unbound
        setup(makeShow([undefined, ["A"], ["B"], undefined, ["A"], ["B"], undefined], [false, true, false, false, true, false, false]))
        outputs.set({ A: { out: { slide: { id: "show", layout: "default", index: 0 } } }, B: { out: { slide: { id: "show", layout: "default", index: 0 } } } } as never)
        const seen: number[][] = []
        for (let i = 0; i < 4; i++) {
            await press()
            seen.push([outSlideIndex("A")!, outSlideIndex("B")!])
        }
        expect(seen).toEqual([
            [1, 2],
            [3, 3],
            [4, 5],
            [6, 6]
        ])
    })

    it("steps through a show that sends most slides to one output", async () => {
        // show goes to A, slide 1 goes to B and is linked with slide 0
        const show = makeShow([["A"], ["B"], undefined, undefined, undefined], [true, false, false, false, false])
        ;(show.settings as { bindings?: string[] }).bindings = ["A"]
        setup(show)
        const seen: number[][] = []
        for (let i = 0; i < 3; i++) {
            await press()
            seen.push([outSlideIndex("A")!, outSlideIndex("B")!])
        }
        // B only had its half of the card, so it is cleared when A leaves (pressing space on a cleared output starts it again, as for any cleared screen)
        expect(seen[0]).toEqual([2, undefined])
        expect(seen.map(([a]) => a)).toEqual([2, 3, 4])
    })

    it("keeps a card together while one of its slides is shown a few lines at a time", async () => {
        // the output style shows 2 lines at a time: slide 0 has 4 lines (2 steps), slide 1 has 1 line
        mockState.lines = 2
        setup(makeShow([["A"], ["B"], ["A"], ["B"]], [true, false, true, false], [4, 1, 1, 1]))
        const seen: unknown[][] = []
        for (let i = 0; i < 3; i++) {
            await press()
            const a = get(outputs).A.out?.slide
            const b = get(outputs).B.out?.slide
            seen.push([a?.index, a?.line || 0, b?.index])
        }
        // A reveals its second pair of lines while B stays, then both move to the next card together
        expect(seen[0]).toEqual([0, 2, 1])
        expect(seen[1]).toEqual([2, 0, 3])
    })
})

describe("your real setup: show sent to 1Side, Centre slide linked with a Side slide, then sections and another show", () => {
    const layoutOf = (id: string) => ({ id, layout: "default" })
    function makeSong(name: string, count: number): Show {
        const slides: Show["slides"] = {}
        for (let i = 0; i < count; i++) slides["s" + i] = { group: name + i, color: null, settings: {}, notes: "", items: [] }
        return { name, category: null, settings: { activeLayout: "default", template: null, bindings: ["side"] }, timestamps: { created: 0, modified: null, used: null }, meta: {}, slides, layouts: { default: { name: "Default", notes: "", slides: [] } }, media: {} } as never
    }

    beforeEach(async () => {
        await new Promise((resolve) => setTimeout(resolve, 60)) // OutputHelper caches the active item for 50ms
        mockState.lines = 0
        ;(globalThis as Record<string, unknown>).document = { activeElement: null }
        const preek = makeSong("preek", 4)
        preek.layouts.default.slides = [{ id: "s0" }, { id: "s1" }, { id: "s2", bindings: ["centre"], linkNext: true }, { id: "s3", bindings: ["side"] }] as never
        const next = makeSong("next", 3)
        next.layouts.default.slides = [{ id: "s0" }, { id: "s1" }, { id: "s2" }] as never
        const later = makeSong("later", 3)
        later.layouts.default.slides = [{ id: "s0" }, { id: "s1" }, { id: "s2" }] as never
        showsCache.set({ preek, next, later })
        projects.set({ p: { name: "P", created: 0, parent: "/", shows: [{ id: "preek" }, { id: "sec1", type: "section" }, { id: "sec2", type: "section" }, { id: "next" }, { id: "later" }] } as never })
        activeProject.set("p")
        activeShow.set({ id: "preek", index: 0 } as never)
        // the operator clicked slide 1: only the Side screen shows it
        outputs.set({ side: { out: { slide: { id: "preek", layout: "default", index: 1 } } }, centre: { out: {} } } as never)
    })

    function state() {
        const slide = (id: string) => {
            const s = get(outputs)[id].out?.slide
            return s ? `${s.id}:${s.index}` : "-"
        }
        return { side: slide("side"), centre: slide("centre"), selected: `${get(activeShow)?.id}` }
    }

    it("goes from the linked end of one show straight into the first slide of the next show", async () => {
        const seen = [state()]
        for (let i = 0; i < 4; i++) {
            await press()
            seen.push(state())
        }
        // 1: the whole card, 2: next show plays directly (no select-only press), the Centre half is gone, 3 & 4: normal steps
        expect(seen[1]).toEqual({ side: "preek:3", centre: "preek:2", selected: "preek" })
        expect(seen[2]).toEqual({ side: "next:0", centre: "-", selected: "next" })
        expect(seen[3]).toEqual({ side: "next:1", centre: "-", selected: "next" })
        expect(seen[4]).toEqual({ side: "next:2", centre: "-", selected: "next" })
    })

    it("also goes straight into the next show when the timer ends on the card", async () => {
        await press()
        expect(state()).toEqual({ side: "preek:3", centre: "preek:2", selected: "preek" })

        // the 3 second timer of the Side screen ends (the Centre timer is cleared with it)
        OutputHelper.advanceOutput("side", "", { playNext: true })
        await flush()
        expect(state()).toEqual({ side: "next:0", centre: "-", selected: "next" })

        // nothing else moves afterwards
        await flush()
        expect(state()).toEqual({ side: "next:0", centre: "-", selected: "next" })
    })

    it("one press on a single slide at the end of a show plays the next show too", async () => {
        outputs.set({ side: { out: { slide: { id: "next", layout: "default", index: 2, projectIndex: 3 } } }, centre: { out: {} } } as never)
        activeShow.set({ id: "next", index: 3 } as never)
        await press()
        expect(state()).toEqual({ side: "later:0", centre: "-", selected: "later" })
    })

    it("Holy night (ends with a Side + Centre card) into Preek 3 (only for Side), then on through Preek 3", async () => {
        const holy = makeSong("holy", 5)
        ;(holy.settings as { bindings?: string[] }).bindings = undefined
        holy.layouts.default.slides = [{ id: "s0" }, { id: "s1" }, { id: "s2" }, { id: "s3", bindings: ["side"], linkNext: true }, { id: "s4", bindings: ["centre"] }] as never
        const preek = makeSong("preek3", 4)
        preek.layouts.default.slides = [
            { id: "s0", bindings: [] },
            { id: "s1", bindings: [] },
            { id: "s2", bindings: [] },
            { id: "s3", bindings: [] }
        ] as never
        showsCache.set({ holy, preek3: preek, next: makeSong("next", 2) })
        projects.set({ p: { name: "P", created: 0, parent: "/", shows: [{ id: "holy" }, { id: "sec", type: "section" }, { id: "preek3" }, { id: "next" }] } as never })
        activeShow.set({ id: "holy", index: 0 } as never)
        // the operator clicked the slide before the card: both screens show slide 2
        outputs.set({ side: { out: { slide: { id: "holy", layout: "default", index: 2, projectIndex: 0 } } }, centre: { out: { slide: { id: "holy", layout: "default", index: 2, projectIndex: 0 } } } } as never)

        debugPanelOpen.set(true)
        const seen = []
        for (let i = 0; i < 4; i++) {
            await press()
            seen.push(state())
        }
        const log = getDebugBuffer().map(formatDebugEntry).join("\n")
        debugPanelOpen.set(false)
        expect(log).toContain("Space pressed. Before:")
        expect(log).toContain("will play it directly")
        expect(log).toContain("[OUTPUT]")
        expect(log).toContain("stay (another output still has slides to go in this show")
        expect(seen).toEqual([
            { side: "holy:3", centre: "holy:4", selected: "holy" },
            { side: "preek3:0", centre: "-", selected: "preek3" },
            { side: "preek3:1", centre: "-", selected: "preek3" },
            { side: "preek3:2", centre: "-", selected: "preek3" }
        ])
        // the project view is asked not to scroll to the next show, since it plays right away
        expect(openProjectItem).toHaveBeenCalledWith("p", 2, false)
        expect(vi.mocked(openProjectItem).mock.calls.every((call) => call[2] === false)).toBe(true)
    })

    it("replays the project from the debug log: card at the end of Holy night, empty Preservice, Preek 3 for Side only, then Redeem for both", async () => {
        const song = (name: string, count: number, bindings?: string[]) => {
            const show = makeSong(name, count)
            ;(show.settings as { bindings?: string[] }).bindings = bindings
            show.layouts.default.slides = Array.from({ length: count }, (_, i) => ({ id: "s" + i })) as never
            return show
        }
        const holy = song("holy", 5)
        holy.layouts.default.slides = [{ id: "s0" }, { id: "s1" }, { id: "s2" }, { id: "s3", bindings: ["side"], linkNext: true }, { id: "s4", bindings: ["centre"] }] as never
        showsCache.set({ holy, preservice: song("preservice", 0), preek3: song("preek3", 4, ["side"]), redeem: song("redeem", 3), gratitude: song("gratitude", 2) })
        projects.set({
            p: {
                name: "P",
                created: 0,
                parent: "/",
                shows: [{ id: "holy" }, { id: "preservice" }, { id: "welcome", type: "section" }, { id: "preek3" }, { id: "worship", type: "section" }, { id: "preek", type: "section" }, { id: "redeem" }, { id: "gratitude" }]
            } as never
        })
        activeShow.set({ id: "holy", index: 0 } as never)
        outputs.set({ side: { out: { slide: { id: "holy", layout: "default", index: 2, projectIndex: 0 } } }, centre: { out: { slide: { id: "holy", layout: "default", index: 2, projectIndex: 0 }, background: { path: "centre-card.jpg" } } } } as never)

        // every state the outputs go through, to see what is on screen between the updates
        // (the output windows are updated once per tick with the settled state, see the debounce in utils/listeners.ts)
        const states: string[] = []
        let queued = false
        const stop = outputs.subscribe(() => {
            if (queued) return
            queued = true
            setTimeout(() => {
                queued = false
                states.push(`${state().side} | ${state().centre}`)
            }, 0)
        })

        const seen = []
        const centreBackgrounds: unknown[] = []
        for (let i = 0; i < 7; i++) {
            await press()
            seen.push(state())
            centreBackgrounds.push(get(outputs).centre.out?.background)
        }
        stop()
        // the Centre background is never cleared on the way
        expect(centreBackgrounds.every((a) => (a as { path?: string })?.path === "centre-card.jpg")).toBe(true)

        expect(seen).toEqual([
            // the linked card
            { side: "holy:3", centre: "holy:4", selected: "holy" },
            // straight over the empty Preservice and the empty section into Preek 3 (Side only), the Centre half is gone
            { side: "preek3:0", centre: "-", selected: "preek3" },
            { side: "preek3:1", centre: "-", selected: "preek3" },
            { side: "preek3:2", centre: "-", selected: "preek3" },
            { side: "preek3:3", centre: "-", selected: "preek3" },
            // end of Preek 3: Redeem starts on BOTH screens (Centre does not stay behind)
            { side: "redeem:0", centre: "redeem:0", selected: "redeem" },
            { side: "redeem:1", centre: "redeem:1", selected: "redeem" }
        ])

        // the Centre half of the card is never sent to the output windows together with the first Preek 3 slide
        expect(states.filter((a) => a.startsWith("preek3:0 | holy:4"))).toEqual([])
    })
})

describe("normal navigation is unchanged where nothing is linked", () => {
    const song = (name: string, slides: ({ bindings?: string[] } | undefined)[], bindings?: string[]): Show => {
        const slideMap: Show["slides"] = {}
        slides.forEach((_, i) => (slideMap["s" + i] = { group: name + i, color: null, settings: {}, notes: "", items: [] }))
        return { name, category: null, settings: { activeLayout: "default", template: null, bindings }, timestamps: { created: 0, modified: null, used: null }, meta: {}, slides: slideMap, layouts: { default: { name: "Default", notes: "", slides: slides.map((slide, i) => ({ id: "s" + i, ...(slide || {}) })) } }, media: {} } as never
    }
    const out = (id: string, show: string, index: number, projectIndex: number) => ({ out: { slide: { id: show, layout: "default", index, projectIndex } } })

    beforeEach(async () => {
        await new Promise((resolve) => setTimeout(resolve, 130))
        mockState.lines = 0
        ;(globalThis as Record<string, unknown>).document = { activeElement: null }
        vi.mocked(openProjectItem).mockClear()
    })

    function project(shows: Record<string, Show>, items: { id: string; type?: string }[], active: number) {
        showsCache.set(shows)
        projects.set({ p: { name: "P", created: 0, parent: "/", shows: items } as never })
        activeProject.set("p")
        activeShow.set({ ...items[active], index: active } as never)
    }
    const slideOf = (id: string) => {
        const slide = get(outputs)[id].out?.slide
        return slide ? `${slide.id}:${slide.index}` : "-"
    }

    it("one output: space at the last slide plays the next show, back plays the last slide of the previous show", async () => {
        project({ a: song("a", [undefined, undefined]), b: song("b", [undefined, undefined]) }, [{ id: "a" }, { id: "b" }], 0)
        outputs.set({ main: out("main", "a", 1, 0) } as never)
        await press()
        expect(slideOf("main")).toBe("b:0")
        expect(get(activeShow)?.id).toBe("b")
        await press()
        expect(slideOf("main")).toBe("b:1")
        await press()
        expect(slideOf("main")).toBe("b:1") // end of the project: nothing to go to
        await press("ArrowLeft")
        expect(slideOf("main")).toBe("b:0")
        await press("ArrowLeft")
        expect(slideOf("main")).toBe("a:1")
    })

    it("one output: the setting to not go to the next item on the last slide is still respected", async () => {
        const { special } = await import("../../stores")
        special.set({ nextItemOnLastSlide: false })
        project({ a: song("a", [undefined]), b: song("b", [undefined]) }, [{ id: "a" }, { id: "b" }], 0)
        outputs.set({ main: out("main", "a", 0, 0) } as never)
        await press()
        expect(slideOf("main")).toBe("a:0")
        expect(get(activeShow)?.id).toBe("a")
        special.set({})
    })

    it("quick change back (arrow key with the show before the playing one selected) only selects the playing show again, it does not play its first slide again", async () => {
        project({ a: song("a", [undefined, undefined]), b: song("b", [undefined, undefined, undefined]) }, [{ id: "a" }, { id: "b" }], 0)
        outputs.set({ main: out("main", "b", 0, 1) } as never)
        vi.mocked(setOutput).mockClear()

        await press("ArrowRight")
        expect(get(activeShow)?.id).toBe("b")
        expect(vi.mocked(setOutput).mock.calls.filter((call) => call[0] === "slide")).toEqual([])
        expect(slideOf("main")).toBe("b:0")

        await press("ArrowRight")
        expect(slideOf("main")).toBe("b:1")
    })

    it("two outputs: an output that ran out of its own slides does not start the next show while the other one is still in this show", async () => {
        // 0 for both, 1 only Centre, 2 and 3 only Side
        const mixed = song("mixed", [undefined, { bindings: ["centre"] }, { bindings: ["side"] }, { bindings: ["side"] }])
        project({ mixed, next: song("next", [undefined, undefined]) }, [{ id: "mixed" }, { id: "next" }], 0)
        outputs.set({ side: out("side", "mixed", 0, 0), centre: out("centre", "mixed", 0, 0) } as never)

        await press()
        expect([slideOf("side"), slideOf("centre")]).toEqual(["mixed:2", "mixed:1"])
        await press()
        // Centre has no more slides, but Side still has: the project stays on this show
        expect([slideOf("side"), slideOf("centre")]).toEqual(["mixed:3", "mixed:1"])
        expect(get(activeShow)?.id).toBe("mixed")
        await press()
        // everybody is at the end: both move on to the next show
        expect([slideOf("side"), slideOf("centre")]).toEqual(["next:0", "next:0"])
        expect(get(activeShow)?.id).toBe("next")
    })
})
