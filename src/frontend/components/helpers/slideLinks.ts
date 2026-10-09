// Linked slides: a slide with "linkNext" is shown together with the slide after it as one card, and clicking either one activates both.
// The two slides stay separate in the layout (each keeps its own background and specific outputs).

type LinkableSlide = { linkNext?: boolean } | undefined | null

/**
 * Groups slide indexes to render: pairs for linked slides, single indexes for the rest.
 * `canLink` can reject a pair (e.g. the outputs changed after linking), which then stays as two single slides.
 */
export function getSlideLinkGroups<T extends LinkableSlide>(layoutSlides: T[], canLink?: (first: T, second: T) => boolean): number[][] {
    const groups: number[][] = []
    for (let i = 0; i < layoutSlides.length; i++) {
        if (layoutSlides[i]?.linkNext && i + 1 < layoutSlides.length && (!canLink || canLink(layoutSlides[i], layoutSlides[i + 1]))) {
            groups.push([i, i + 1])
            i++
            continue
        }
        groups.push([i])
    }
    return groups
}

/** Get the other slide index in a linked pair (null if the slide is not linked) */
export function getLinkedPartner(layoutSlides: LinkableSlide[], index: number): number | null {
    const group = getSlideLinkGroups(layoutSlides).find((a) => a.includes(index))
    if (!group || group.length < 2) return null
    return group[0] === index ? group[1] : group[0]
}

/**
 * Slides can only be linked when each one goes to its own output(s). Both need specific outputs (no outputs means every output),
 * and they can't share one, otherwise the two slides would fight over the same screen when activated together.
 * Takes the resolved output ids of each slide.
 */
export function haveDifferentOutputs(first: string[], second: string[]): boolean {
    if (!first.length || !second.length) return false
    return !first.some((id) => second.includes(id))
}

/** All slide indexes of the card that contains the index (just the index itself for a single slide) */
export function getLinkGroup<T extends LinkableSlide>(layoutSlides: T[], index: number, canLink?: (first: T, second: T) => boolean): number[] {
    return getSlideLinkGroups(layoutSlides, canLink).find((a) => a.includes(index)) || [index]
}

/**
 * A linked card is one slide, so it has one next slide timer: the first slide in the card with a timer sets it for every slide.
 * Without a card the slide keeps its own timer.
 */
export function getCardTimer(layoutSlides: ({ nextTimer?: number } | undefined | null)[], group: number[]): number {
    for (const index of group) {
        const timer = Number(layoutSlides[index]?.nextTimer || 0)
        if (timer > 0) return timer
    }
    return 0
}

/** Index of the first slide in a linked pair that contains the index (or the index itself) */
export function getLinkStart(layoutSlides: LinkableSlide[], index: number): number {
    return getSlideLinkGroups(layoutSlides).find((a) => a.includes(index))?.[0] ?? index
}

/** Find the slide element (or the linked card holding it) inside a ".grid" */
export function getSlideElement(grid: Element | null | undefined, index: number): HTMLElement | null {
    if (!grid) return null
    const elem = grid.querySelector(`[data-slide-index="${index}"]`) as HTMLElement | null
    if (!elem) return (grid.children[index] as HTMLElement) || null
    return (elem.closest(".linkedCard") as HTMLElement | null) || elem
}
