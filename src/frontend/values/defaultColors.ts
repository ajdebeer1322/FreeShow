// Default accent and slide group colors, plus the old defaults so saved data that still has them can be updated.
// (src/electron/data/defaults.ts has its own copy of the group colors for first start - keep them in sync)

export const OLD_ACCENT = "#F0008C"
export const NEW_ACCENT = "#3E7DCB"
export const NEW_ACCENT_OPACITY = "rgba(62, 125, 203, 0.5)"

export const OLD_GROUP_COLORS: { [group: string]: string } = {
    break: "#f5255e",
    bridge: "#f52598",
    chorus: "#f525d2",
    intro: "#d525f5",
    outro: "#a525f5",
    pre_chorus: "#8825f5",
    tag: "#7525f5",
    verse: "#5825f5"
}

// softer colors that are easy on the eyes (verse blue, chorus red, ...)
export const NEW_GROUP_COLORS: { [group: string]: string } = {
    break: "#7f8791",
    bridge: "#d39a3a",
    chorus: "#d1605f",
    intro: "#6b9a58",
    outro: "#7a8aa6",
    pre_chorus: "#3aa7a0",
    tag: "#8b7cc0",
    verse: "#3b82c4"
}

const same = (a: string | undefined | null, b: string) => (a || "").toLowerCase() === b.toLowerCase()

/** Give default groups that still have their old default color the new one (colors you changed are kept) */
export function migrateGroupColors<T extends { [id: string]: { default?: boolean; color?: string | null } }>(groups: T): { groups: T; changed: boolean } {
    let changed = false

    Object.entries(groups || {}).forEach(([id, group]) => {
        const oldColor = OLD_GROUP_COLORS[id]
        if (!group?.default || !oldColor || !same(group.color, oldColor)) return

        group.color = NEW_GROUP_COLORS[id]
        changed = true
    })

    return { groups, changed }
}

/** Give outputs that still have the old pink output color the new accent */
export function migrateOutputColors<T extends { [id: string]: { color?: string } }>(outputs: T): { outputs: T; changed: boolean } {
    let changed = false

    Object.values(outputs || {}).forEach((output) => {
        if (!same(output?.color, OLD_ACCENT)) return

        output.color = NEW_ACCENT
        changed = true
    })

    return { outputs, changed }
}

type ThemeLike = { default?: boolean; colors?: { secondary?: string; "secondary-opacity"?: string } }

/** Give the built-in themes that still use the old pink accent the new one (themes you created or changed are kept) */
export function migrateThemeAccent<T extends { [id: string]: ThemeLike }>(themes: T): { themes: T; changed: boolean } {
    let changed = false

    Object.values(themes || {}).forEach((theme) => {
        if (!theme?.default || !theme.colors || !same(theme.colors.secondary, OLD_ACCENT)) return

        theme.colors.secondary = NEW_ACCENT
        theme.colors["secondary-opacity"] = NEW_ACCENT_OPACITY
        changed = true
    })

    return { themes, changed }
}
