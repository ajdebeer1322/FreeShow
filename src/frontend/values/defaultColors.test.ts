import { describe, expect, it } from "vitest"
import { NEW_ACCENT, NEW_GROUP_COLORS, OLD_GROUP_COLORS, migrateGroupColors, migrateOutputColors, migrateThemeAccent } from "./defaultColors"

describe("default color migration", () => {
    it("updates default groups that still have the old color", () => {
        const groups = { verse: { default: true, color: "#5825f5" }, chorus: { default: true, color: "#F525D2" } }
        const result = migrateGroupColors(groups)
        expect(result.changed).toBe(true)
        expect(groups.verse.color).toBe(NEW_GROUP_COLORS.verse)
        expect(groups.chorus.color).toBe(NEW_GROUP_COLORS.chorus)
    })

    it("keeps group colors you changed and groups you made", () => {
        const groups = { verse: { default: true, color: "#123456" }, mine: { color: OLD_GROUP_COLORS.verse }, chorus: { color: "#f525d2" } }
        const result = migrateGroupColors(groups)
        expect(result.changed).toBe(false)
        expect(groups.verse.color).toBe("#123456")
        expect(groups.mine.color).toBe(OLD_GROUP_COLORS.verse)
        expect(groups.chorus.color).toBe("#f525d2")
    })

    it("updates outputs with the old pink only", () => {
        const outputs = { a: { color: "#F0008C" }, b: { color: "#00aa88" } }
        expect(migrateOutputColors(outputs).changed).toBe(true)
        expect(outputs.a.color).toBe(NEW_ACCENT)
        expect(outputs.b.color).toBe("#00aa88")
    })

    it("updates built-in themes with the old accent and keeps custom themes", () => {
        const themes = {
            default: { default: true, colors: { secondary: "#F0008C", "secondary-opacity": "rgba(240, 0, 140, 0.5)" } },
            mine: { colors: { secondary: "#F0008C" } },
            blue: { default: true, colors: { secondary: "#338BFF" } }
        }
        expect(migrateThemeAccent(themes).changed).toBe(true)
        expect(themes.default.colors.secondary).toBe(NEW_ACCENT)
        expect(themes.default.colors["secondary-opacity"]).toContain("62, 125, 203")
        expect(themes.mine.colors.secondary).toBe("#F0008C")
        expect(themes.blue.colors.secondary).toBe("#338BFF")
    })
})
