import { describe, expect, it } from "vitest"
import { getLinkedPartner, getLinkStart, getSlideLinkGroups } from "./slideLinks"

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
})
