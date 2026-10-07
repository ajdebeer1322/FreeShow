import { describe, expect, it } from "vitest"
import { planNewSlideTimer } from "./nextTimerDefault"

describe("default next slide timer for new slides", () => {
    it("does nothing without a default timer", () => {
        expect(planNewSlideTimer(0, [{}, {}], 2, false)).toEqual({ timer: null, clearEndAt: null, setEnd: false })
    })

    it("gives a new slide the timer", () => {
        expect(planNewSlideTimer(10, [{}, {}], 1, false)).toEqual({ timer: 10, clearEndAt: null, setEnd: false })
    })

    it("keeps a timer the slide already has", () => {
        expect(planNewSlideTimer(10, [{}, {}], 2, true)).toEqual({ timer: null, clearEndAt: null, setEnd: false })
    })

    it("moves the go-to-start marker when a slide is added at the end", () => {
        expect(planNewSlideTimer(10, [{}, { end: true }], 2, false)).toEqual({ timer: 10, clearEndAt: 1, setEnd: true })
    })

    it("keeps the marker when a slide is added before the end", () => {
        expect(planNewSlideTimer(10, [{}, { end: true }], 1, false)).toEqual({ timer: 10, clearEndAt: null, setEnd: false })
    })
})
