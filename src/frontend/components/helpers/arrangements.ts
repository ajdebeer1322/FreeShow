import type { Layout, Slide } from "../../../types/Show"

// Pure logic for the arrangement bar (groups row, order row and the Master arrangement).

type SlideList = { [id: string]: Slide }

/** Parent slides that are real groups (child slides, the hidden "." group and blank slides are not), in the order they were created.
 * The order does not depend on any arrangement, so the groups row stays the same when an arrangement is edited. */
export function getGroupIds(slides: SlideList = {}): string[] {
    return Object.keys(slides).filter((id) => {
        const slide = slides[id]
        return !!slide && slide.group !== null && slide.group !== undefined && slide.group !== "." && !slide.blank
    })
}

export const BLANK_GROUP_ID = "__blank"

export function createBlankSlide(name: string): Slide {
    return { group: name, color: null, settings: {}, notes: "", items: [], blank: true }
}

/** The id of the blank slide the show already has (blank groups are repeated like any other group). */
export function findBlankSlideId(slides: SlideList = {}): string {
    return Object.keys(slides).find((id) => slides[id]?.blank) || ""
}

function removeExtension(name: string) {
    return name.includes(".") ? name.slice(0, name.lastIndexOf(".")) : name
}

/** Slides named after an image file get the name "Image", or "Image 1", "Image 2"... when the show has more than one. */
export function getImageLabels(slides: SlideList = {}, media: { [id: string]: { name?: string; type?: string } } = {}, ids: string[] = getGroupIds(slides), imageName = "Image"): { [id: string]: string } {
    const imageNames = new Set(
        Object.values(media)
            .filter((a) => a?.type === "image" && a.name)
            .map((a) => removeExtension(a.name!))
    )

    const imageIds = ids.filter((id) => slides[id]?.group && imageNames.has(slides[id].group!))
    const labels: { [id: string]: string } = {}
    imageIds.forEach((id, i) => (labels[id] = imageIds.length > 1 ? `${imageName} ${i + 1}` : imageName))

    return labels
}

/** The Master arrangement has every group once. Groups that are missing are added at the end, the rest keeps its order. */
export function getMasterSlides(slides: SlideList, layouts: { [id: string]: Layout }, current: Layout["slides"] = []): Layout["slides"] {
    const kept = current.filter((a) => a && slides[a.id])
    const missing = getGroupIds(slides).filter((id) => !kept.some((a) => a.id === id))
    return [...kept, ...missing.map((id) => ({ id }))]
}

export function findMasterId(layouts: { [id: string]: Layout } = {}): string {
    return Object.keys(layouts).find((id) => layouts[id]?.master) || ""
}

export function masterIsUpToDate(slides: SlideList, layouts: { [id: string]: Layout }, masterId: string): boolean {
    if (!masterId || !layouts[masterId]) return false
    return getMasterSlides(slides, layouts, layouts[masterId].slides).length === (layouts[masterId].slides || []).length
}
