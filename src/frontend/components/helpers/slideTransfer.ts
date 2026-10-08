import { get } from "svelte/store"
import { uid } from "uid"
import type { HistoryPages } from "../../../types/History"
import type { DropData, Selected } from "../../../types/Main"
import { activePage, activePopup, activeShow, alertMessage, selected, shows, showsCache } from "../../stores"
import { newToast } from "../../utils/common"
import { getAccess } from "../../utils/profile"
import { clone, removeDuplicates } from "./array"
import { history } from "./history"
import { removeTemplatesFromShow } from "./show"
import { _show } from "./shows"

// Copying slides between shows and arrangements (copy/paste and dragging between shows in the continuous Show view).
// A slide selection entry is `{ index, showId, layout? }`: the index is the flattened position in that arrangement.
// Always read and write through the entry's own show/arrangement, because the opened show is not necessarily the one clicked.

type SelectionGroup = { showId: string; layout: string; items: any[] }

/** Split a slide selection by the show (and arrangement) its entries belong to. Entries without a show use the opened show. */
export function splitSelectionBySource(data: any[]): SelectionGroup[] {
    const groups: SelectionGroup[] = []
    if (!Array.isArray(data)) return groups

    data.forEach((entry) => {
        const showId = entry?.showId || ""
        const layout = entry?.layout || ""
        let group = groups.find((a) => a.showId === showId && a.layout === layout)
        if (!group) {
            group = { showId, layout, items: [] }
            groups.push(group)
        }
        group.items.push(entry)
    })

    return groups
}

/** The flattened slide list (parents and children) of a show's arrangement. */
export function getSlideRef(showId = "", layout = "") {
    const id = showId || "active"
    const ref = layout ? _show(id).layouts([layout]).ref()[0] : undefined
    return ref || _show(id).layouts("active").ref()[0] || []
}

/** Show lock and profile check for writing slides. Informs the operator when blocked. */
export function canEditShow(showId: string): boolean {
    const show = get(showsCache)[showId]
    if (!show) return false

    if (show.locked || get(shows)[showId]?.locked) {
        alertMessage.set("show.locked")
        activePopup.set("alert")
        return false
    }

    const profile = getAccess("shows")
    if (profile.global === "read" || profile[show.category || ""] === "read") {
        alertMessage.set("profile.locked")
        activePopup.set("alert")
        return false
    }

    return true
}

/** Clipboard data (slides, their layout settings and used media) for a slide selection. */
export function copySlides(data: any, fullGroup = false) {
    // dont know why this is like this when ctrl + c
    if (data?.slides) data = data.slides

    const result: { slides: any[]; layouts: any[]; media: any; source?: { showId: string; layout: string } } = { slides: [], layouts: [], media: {} }
    if (!Array.isArray(data)) return result

    const groups = splitSelectionBySource(data)
    // pasting back into the show it was copied from repeats the groups, so remember where they came from
    if (groups.length === 1) {
        const showId = groups[0].showId || get(activeShow)?.id || ""
        result.source = { showId, layout: groups[0].layout || get(showsCache)[showId]?.settings?.activeLayout || "" }
    }

    groups.forEach((group) => {
        const copied = copyFromSource(group, fullGroup)
        result.slides.push(...copied.slides)
        result.layouts.push(...copied.layouts)
        result.media = { ...result.media, ...copied.media }
    })

    return result
}

function copyFromSource({ showId, layout, items }: SelectionGroup, fullGroup: boolean) {
    const source = _show(showId || "active")
    const ref = getSlideRef(showId, layout)
    const layouts: any[] = []
    const mediaData: any = {}

    const sortedData = [...items].sort((a, b) => (a.index < b.index ? -1 : 1))

    let ids = sortedData
        .map((a) => {
            if (!ref[a.index]) return ""

            // get layout
            if (a.index !== undefined) layouts.push(ref[a.index].data)

            return a.id || (a.index !== undefined ? ref[a.index].id : "")
        })
        .filter(Boolean)

    if (fullGroup) {
        // select all children of group
        const allSlides = source.get("slides")
        const newIds: string[] = []
        ids.forEach((id: string) => {
            const children = allSlides[id]?.children || []
            newIds.push(id, ...children)
        })
        ids = removeDuplicates(newIds)
    }

    let slides = clone(source.slides(ids).get())
    slides = slides.map((slide) => {
        if (slide.group !== null) return slide

        // make children parent
        // this should never be here
        delete slide.children

        const parent = ref.find((a) => a.id === slide.id)?.parent || ""
        // check that parent is not copied
        if (ids.includes(parent)) return slide

        // slide.group = ""
        slide.oldChild = slide.id

        return slide
    })

    const layoutMedia = layouts.filter((a) => a.background || a.audio?.length)
    const showMedia = source.get()?.media || {}
    layoutMedia.forEach((layoutData) => {
        const mediaIds: string[] = []
        if (layoutData.background) mediaIds.push(layoutData.background)
        if (layoutData.audio?.length) mediaIds.push(...layoutData.audio)

        mediaIds.forEach((mediaId) => {
            const m = showMedia[mediaId]
            if (m) mediaData[mediaId] = m
        })
    })

    return { slides, layouts, media: mediaData }
}

export type SlideTarget = {
    showId?: string
    layout?: string
    /** Insert position in the flattened slide list. Undefined adds the slides last. */
    index?: number
}

/** Add copies of clipboard slides (see `copySlides`) to a show. Returns false if nothing was added. */
export function pasteSlides(data: any, target: SlideTarget = {}, isDuplicating = false): boolean {
    if (!data?.slides?.length) return false

    const showId = target.showId || get(activeShow)?.id || ""
    if (!showId || !canEditShow(showId)) return false

    // the same groups again in the arrangement (not separate copies), unless it is a duplicate
    if (!isDuplicating) {
        const repeated = repeatGroups(data, showId, target)
        if (repeated !== null) {
            if (lastClicked?.showId === showId) lastClicked = { ...lastClicked, index: repeated }
            return true
        }
    }

    data = clone(data)
    const copiedIds: string[] = data.slides.map((a) => a.id)
    const newSlides: any[] = []
    const layouts: any[] = []
    const addedChildren: string[] = []

    data.slides.forEach((slide, i) => {
        if (slide.group === null && addedChildren.includes(slide.id)) return
        if (!isDuplicating && slide.group === null) slide.group = ""

        slide.id = uid()
        const slideIndex = newSlides.length
        newSlides.push(slide)

        if (slide.children) {
            const { clonedChildren, childrenLayouts } = cloneChildren(slide, data, i, copiedIds, addedChildren, newSlides, layouts)
            slide.children = clonedChildren
            const layout = data.layouts?.[i]
            if (layout) {
                if (Object.keys(childrenLayouts).length) layout.children = childrenLayouts
                else delete layout.children
                layouts[slideIndex] = layout
            }
        } else {
            const layout = data.layouts?.[i]
            if (!layout) return
            delete layout.children
            layouts[slideIndex] = layout
        }
    })

    if (!Object.keys(get(showsCache)[showId]?.slides || {}).length) {
        removeTemplatesFromShow(showId)
    }

    const insertIndex = target.index ?? getSlideRef(showId, target.layout).length

    history({
        id: "SLIDES",
        newData: { data: newSlides, layouts, media: data.media, index: target.index },
        location: { page: get(activePage) as HistoryPages, show: { id: showId }, layout: target.layout || undefined }
    })

    // the next paste continues after these slides
    if (lastClicked?.showId === showId) lastClicked = { ...lastClicked, index: insertIndex + newSlides.length - 1 }

    return true
}

/**
 * Paste back into the show the slides were copied from: the groups are added to the arrangement again, using the same slides.
 * Returns the flattened index of the last added slide, or null when the slides must be real copies (another show, a child without its group, deleted slides).
 */
function repeatGroups(data: any, showId: string, target: SlideTarget): number | null {
    if (data.source?.showId !== showId) return null

    const show = get(showsCache)[showId]
    const sourceSlides = show?.layouts?.[data.source.layout]?.slides
    const targetLayoutId = target.layout || show?.settings?.activeLayout || ""
    const targetSlides = show?.layouts?.[targetLayoutId]?.slides
    if (!sourceSlides || !targetSlides) return null

    const copied: any[] = data.slides
    const parents = copied.filter((a) => a.group !== null)
    if (!parents.length) return null

    // every copied child belongs to a copied group, and a copied group has all its children
    const copiedIds = copied.map((a) => a.id)
    const covered = parents.flatMap((a) => a.children || [])
    if (copied.some((a) => a.group === null && !covered.includes(a.id))) return null
    if (parents.some((a) => (a.children || []).some((id: string) => !copiedIds.includes(id)))) return null

    // the slides must still exist (a cut group is gone) and be in the arrangement it was copied from
    const entries = parents.map((a) => (show.slides?.[a.id] ? sourceSlides.find((b) => b?.id === a.id) : undefined))
    if (entries.some((a) => !a)) return null

    const newEntries = entries.map((a: any) => {
        const entry = clone(a)
        delete entry.end
        return entry
    })

    // insert after the whole group at the position (never between a group and its children)
    const ref = getSlideRef(showId, targetLayoutId)
    const before = target.index === undefined ? undefined : ref[target.index - 1]
    const anchor = before?.parent || before
    let layoutIndex = targetSlides.length
    if (target.index !== undefined && target.index <= 0) layoutIndex = 0
    else if (anchor) layoutIndex = Math.min(anchor.index + 1, targetSlides.length)

    const flatStart = layoutIndex >= targetSlides.length ? ref.length : ref.findIndex((a) => a.type === "parent" && a.index === layoutIndex)
    const flatCount = parents.reduce((count, a) => count + 1 + (a.children?.length || 0), 0)

    const newLayout = [...clone(targetSlides).slice(0, layoutIndex), ...newEntries, ...clone(targetSlides).slice(layoutIndex)]
    const slides = clone(show.slides)
    const media = clone(show.media || {})

    history({
        id: "slide",
        oldData: { layout: clone(targetSlides), slides, media },
        newData: { layout: newLayout, slides, media },
        location: { page: get(activePage) as HistoryPages, show: { id: showId }, layout: targetLayoutId }
    })

    return (flatStart < 0 ? ref.length : flatStart) + flatCount - 1
}

function cloneChildren(slide, data, i, copiedIds, addedChildren, newSlides, layouts) {
    const clonedChildren: string[] = []
    const childrenLayouts: any = {}

    slide.children.forEach((childId: string, j) => {
        if (!copiedIds.includes(childId)) return
        const childSlide: any = clone(data.slides.find((a) => a.id === childId))
        if (!childSlide) return

        addedChildren.push(childId)
        const oldId = childSlide.id
        childSlide.id = uid()
        delete childSlide.oldChild
        clonedChildren.push(childSlide.id)

        const childIndex = newSlides.length
        newSlides.push(childSlide)

        const layout = data.layouts?.[i + j + 1] || data.layouts?.[i]?.[oldId] || {}
        childrenLayouts[childSlide.id] = layout
        layouts[childIndex] = layout
    })

    return { clonedChildren, childrenLayouts }
}

/**
 * Where pasted slides go: after an explicit slide (duplicate), otherwise after the selected slides
 * (in the show they belong to, which can differ from the opened show), otherwise last in the opened show.
 */
export function getSlidePasteTarget(extra: { index?: number; showId?: string; layout?: string } = {}): SlideTarget {
    if (extra.showId || extra.index !== undefined) {
        return { showId: extra.showId, layout: extra.layout, index: extra.index !== undefined ? extra.index + 1 : undefined }
    }

    const selection = get(selected)
    if (selection.id === "slide" && Array.isArray(selection.data)) {
        // the last selected slide decides, e.g. a slide of another show added to the selection
        const group = splitSelectionBySource(selection.data)
            .reverse()
            .find((a) => a.showId)
        if (group) {
            const indexes = group.items.map((a) => a.index).filter((a) => typeof a === "number")
            return { showId: group.showId, layout: group.layout, index: indexes.length ? Math.max(...indexes) + 1 : undefined }
        }
    }

    // a plain click does not select, so paste after the slide that was clicked last (never at the end of a show, which inherits its last background)
    const clicked = getClickedSlide()
    if (clicked) return { showId: clicked.showId, layout: clicked.layout, index: clicked.index + 1 }

    return {}
}

/** Slide selection for the slide clicked last in the opened show. A plain click does not select, but Ctrl+C should still copy it. */
export function getClickedSlideSelection(): { id: "slide"; data: any[] } | null {
    const target = getClickedSlide()
    if (!target) return null

    return { id: "slide", data: [{ index: target.index, showId: target.showId, ...(target.layout ? { layout: target.layout } : {}) }] }
}

function getClickedSlide() {
    if (!lastClicked || lastClicked.showId !== get(activeShow)?.id) return null
    if (lastClicked.index >= getSlideRef(lastClicked.showId, lastClicked.layout).length) return null
    return lastClicked
}

let lastClicked: { showId: string; layout: string; index: number } | null = null

/** The slide the operator clicked last, used as the paste position when no slide is selected. */
export function rememberClickedSlide(showId: string, layout: string, index: number) {
    lastClicked = { showId, layout, index }
}

/** Dragging slides onto a different show (or a different arrangement of the same show) moves them there. */
export function isCrossShowDrop(drag: Selected, drop: DropData): boolean {
    if (drag.id !== "slide") return false

    const source = drag.data?.[0]
    const destinationShow = drop.data?.showId
    if (!source?.showId || !destinationShow) return false
    if (source.showId !== destinationShow) return true

    // the same show can be in the project twice with different arrangements
    const sourceLayout = source.layout || get(showsCache)[source.showId]?.settings?.activeLayout
    const destinationLayout = drop.data?.layout
    return !!sourceLayout && !!destinationLayout && sourceLayout !== destinationLayout
}

type RemovePlan = { showId: string; layout: string; type: "delete" | "remove"; slides: { id: string; index?: number }[] }

/** What removing a selection from its show takes. Null if a slide group is locked (a locked group can't be moved away). */
function planRemoval(group: SelectionGroup): RemovePlan | null {
    const ref = getSlideRef(group.showId, group.layout)
    const show = _show(group.showId || "active").get()
    const layoutId = group.layout || show?.settings?.activeLayout || ""
    const parents: { id: string; index: number }[] = []
    const children: { id: string }[] = []

    for (const { index } of [...group.items].sort((a, b) => a.index - b.index)) {
        const slideRef = ref[index]
        if (!slideRef) continue
        if (show?.slides?.[slideRef.parent?.id ?? slideRef.id]?.locked) return null

        if (slideRef.type === "parent") parents.push({ id: slideRef.id, index: slideRef.index })
        else children.push({ id: slideRef.id })
    }

    // a slide that is also in another arrangement only leaves this one, otherwise it is removed from the show
    const usedElsewhere = Object.entries(show?.layouts || {}).some(([id, layout]: [string, any]) => id !== layoutId && parents.some((parent) => layout.slides?.some((a) => a.id === parent.id)))
    if (usedElsewhere) return { showId: group.showId, layout: group.layout, type: "remove", slides: parents }
    return { showId: group.showId, layout: group.layout, type: "delete", slides: [...parents, ...children] }
}

function removeSlides(plan: RemovePlan) {
    if (!plan.slides.length) return
    const showId = plan.showId || get(activeShow)?.id || ""
    history({ id: "SLIDES", oldData: { type: plan.type, data: plan.slides }, location: { page: get(activePage) as HistoryPages, show: { id: showId }, layout: plan.layout || undefined } })
}

/**
 * Dragging slides onto a show. By default they move there (added to the destination, then removed from where they came from);
 * `copy` leaves the originals. Two history steps: undo first restores the originals, then removes the added slides.
 */
export function dropSlidesOnShow(drag: Selected, drop: DropData, copy = false): boolean {
    const showId: string = drop.data?.showId
    if (!showId) return false

    const sources = splitSelectionBySource(drag.data)
    const removals: RemovePlan[] = []
    if (!copy) {
        for (const source of sources) {
            if (source.showId && !canEditShow(source.showId)) return false
            const plan = planRemoval(source)
            if (!plan) {
                newToast("output.state_locked")
                return false
            }
            removals.push(plan)
        }
    }

    // read everything before the destination changes (it can be another arrangement of the same show)
    if (!pasteSlides(copySlides(drag.data), { showId, layout: drop.data?.layout, index: drop.index })) return false

    removals.forEach(removeSlides)
    return true
}
