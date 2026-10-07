// Read and write single values of a CSS filter string like "hue-rotate(30deg) brightness(1.2)"

const FILTER_PART = /([\w-]+)\(([^)]*)\)/g

/** The number inside one filter function, or the fallback if it is not set */
export function getFilterValue(filter: string | undefined, key: string, fallback: number): number {
    if (!filter) return fallback

    for (const [, name, value] of filter.matchAll(FILTER_PART)) {
        if (name !== key) continue
        const number = parseFloat(value)
        return Number.isFinite(number) ? number : fallback
    }

    return fallback
}

/** Set one filter function, keeping the others. A value equal to its default removes the function. */
export function setFilterValue(filter: string | undefined, key: string, value: number, defaultValue: number, unit = ""): string {
    const others = [...(filter || "").matchAll(FILTER_PART)].filter(([, name]) => name !== key).map(([part]) => part)
    if (Math.abs(value - defaultValue) < 1e-9) return others.join(" ")

    return [...others, `${key}(${value}${unit})`].join(" ")
}
