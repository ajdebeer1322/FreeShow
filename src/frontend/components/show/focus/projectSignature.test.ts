import { describe, expect, it } from "vitest"
import type { ProjectShowRef } from "../../../../types/Projects"
import { getProjectItemsSignature } from "./projectSignature"

describe("project view reload signature", () => {
    const items: ProjectShowRef[] = [{ id: "a" }, { id: "section", type: "section", name: "Welcome" }, { id: "b", layout: "l1" }]
    const names: Record<string, string> = { a: "Holy night", b: "Preek 3" }
    const sign = (list: ProjectShowRef[], shows = names) => getProjectItemsSignature(list, (id) => shows[id])

    it("does not change when an item is marked as played (the project moved on)", () => {
        const played = items.map((item, i) => (i === 0 ? { ...item, played: true } : item))
        expect(sign(played)).toBe(sign(items))
        expect(sign(items.map((item) => ({ ...item, played: false })))).toBe(sign(items))
    })

    it("changes when the list really changes", () => {
        expect(sign([...items].reverse())).not.toBe(sign(items))
        expect(sign(items.map((item) => (item.id === "b" ? { ...item, layout: "l2" } : item)))).not.toBe(sign(items))
        expect(sign(items.map((item) => (item.id === "a" ? { ...item, color: "#f00" } : item)))).not.toBe(sign(items))
        expect(sign(items, { ...names, a: "Renamed" })).not.toBe(sign(items))
        expect(sign(items.slice(1))).not.toBe(sign(items))
    })
})
