import { describe, expect, it } from "vitest"
import { getFilterValue, setFilterValue } from "./filterString"

describe("filter string", () => {
    it("reads a value or uses the fallback", () => {
        expect(getFilterValue("hue-rotate(30deg) brightness(1.2)", "brightness", 1)).toBe(1.2)
        expect(getFilterValue("hue-rotate(30deg)", "hue-rotate", 0)).toBe(30)
        expect(getFilterValue("hue-rotate(30deg)", "contrast", 1)).toBe(1)
        expect(getFilterValue(undefined, "contrast", 1)).toBe(1)
    })

    it("sets one value and keeps the others", () => {
        expect(setFilterValue("hue-rotate(30deg)", "brightness", 1.2, 1)).toBe("hue-rotate(30deg) brightness(1.2)")
        expect(setFilterValue("hue-rotate(30deg) brightness(1.2)", "brightness", 0.8, 1)).toBe("hue-rotate(30deg) brightness(0.8)")
    })

    it("adds the unit", () => {
        expect(setFilterValue("", "blur", 4, 0, "px")).toBe("blur(4px)")
        expect(setFilterValue("", "hue-rotate", -20, 0, "deg")).toBe("hue-rotate(-20deg)")
    })

    it("removes a value that is back at its default", () => {
        expect(setFilterValue("hue-rotate(30deg) brightness(1.2)", "brightness", 1, 1)).toBe("hue-rotate(30deg)")
        expect(setFilterValue("brightness(1.2)", "brightness", 1, 1)).toBe("")
    })
})
