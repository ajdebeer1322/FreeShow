// Linked slides: a slide with "linkNext" is shown together with the slide after it as one card, and clicking either one activates both.
// The two slides stay separate in the layout (each keeps its own background and specific outputs).

type LinkableSlide = { linkNext?: boolean } | undefined | null

/** Groups slide indexes to render: pairs for linked slides, single indexes for the rest. */
export function getSlideLinkGroups(layoutSlides: LinkableSlide[]): number[][] {
    const groups: number[][] = []
    for (let i = 0; i < layoutSlides.length; i++) {
        if (layoutSlides[i]?.linkNext && i + 1 < layoutSlides.length) {
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
