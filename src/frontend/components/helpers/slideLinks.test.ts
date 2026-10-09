import { describe, expect, it } from "vitest"
import { getCardTimer, getLinkedPartner, getLinkGroup, getLinkStart, getSlideLinkGroups, haveDifferentOutputs } from "./slideLinks"

describe("linked slides", () => {
    const slides = [{}, { linkNext: true }, {}, {}, { linkNext: true }, {}]

    it("groups linked slides into one card and leaves the rest single", () => {
        expect(getSlideLinkGroups(slides)).toEqual([[0], [1, 2], [3], [4, 5]])
    })

    it("ignores a link on the last slide", () => {
        expect(getSlideLinkGroups([{}, { linkNext: true }])).toEqual([[0], [1]])
    })

    it("never lets one slide belong to two cards", () => {
        expect(getSlideLinkGroups([{ linkNext: true }, { linkNext: true }, {}])).toEqual([[0, 1], [2]])
    })

    it("finds the other half of a card from either side", () => {
        expect(getLinkedPartner(slides, 1)).toBe(2)
        expect(getLinkedPartner(slides, 2)).toBe(1)
        expect(getLinkedPartner(slides, 3)).toBeNull()
        expect(getLinkStart(slides, 2)).toBe(1)
        expect(getLinkStart(slides, 3)).toBe(3)
    })

    it("only links slides that go to different outputs", () => {
        expect(haveDifferentOutputs(["a"], ["b"])).toBe(true)
        expect(haveDifferentOutputs(["a", "b"], ["c"])).toBe(true)
        expect(haveDifferentOutputs(["a"], ["a"])).toBe(false)
        expect(haveDifferentOutputs(["a", "b"], ["b", "c"])).toBe(false)
        // no outputs means every output
        expect(haveDifferentOutputs([], ["a"])).toBe(false)
        expect(haveDifferentOutputs(["a"], [])).toBe(false)
        expect(haveDifferentOutputs([], [])).toBe(false)
    })

    it("shows a link as two single slides when the pair is rejected", () => {
        const pair = [{ linkNext: true }, {}, {}]
        expect(getSlideLinkGroups(pair, () => false)).toEqual([[0], [1], [2]])
        expect(getSlideLinkGroups(pair, () => true)).toEqual([[0, 1], [2]])
    })

    it("finds the whole card for either slide, or just the slide when it is single", () => {
        expect(getLinkGroup(slides, 1)).toEqual([1, 2])
        expect(getLinkGroup(slides, 2)).toEqual([1, 2])
        expect(getLinkGroup(slides, 3)).toEqual([3])
        expect(getLinkGroup(slides, 1, () => false)).toEqual([1])
    })

    it("gives a card one next slide timer", () => {
        // the first slide with a timer sets it for the whole card
        expect(getCardTimer([{ nextTimer: 8 }, {}], [0, 1])).toBe(8)
        expect(getCardTimer([{}, { nextTimer: 5 }], [0, 1])).toBe(5)
        expect(getCardTimer([{ nextTimer: 8 }, { nextTimer: 5 }], [0, 1])).toBe(8)
        expect(getCardTimer([{}, {}], [0, 1])).toBe(0)
        // slides outside the card are ignored
        expect(getCardTimer([{ nextTimer: 8 }, {}, { nextTimer: 3 }], [1, 2])).toBe(3)
    })
})
