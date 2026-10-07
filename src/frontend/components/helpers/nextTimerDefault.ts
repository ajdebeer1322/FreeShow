// A show can have a default "next slide timer" that new slides get automatically (e.g. an announcements slideshow).

type LayoutSlideLike = { end?: boolean }

export type NewSlideTimerPlan = {
    /** timer (seconds) to give the new slide, or null to leave it alone */
    timer: number | null
    /** index of the slide that loses the "go to start" marker (it moves to the new last slide) */
    clearEndAt: number | null
    /** the new slide becomes the one that goes back to the start */
    setEnd: boolean
}

export function planNewSlideTimer(defaultTimer: number, layoutSlides: LayoutSlideLike[], insertIndex: number, slideHasTimer: boolean): NewSlideTimerPlan {
    const none = { timer: null, clearEndAt: null, setEnd: false }
    if (!(defaultTimer > 0) || slideHasTimer) return none

    // a slide added after the slide that loops back to the start would never be reached, so the loop moves to the new last slide
    const lastIndex = layoutSlides.length - 1
    const appending = insertIndex >= layoutSlides.length
    const moveLoop = appending && lastIndex >= 0 && !!layoutSlides[lastIndex]?.end

    return { timer: defaultTimer, clearEndAt: moveLoop ? lastIndex : null, setEnd: moveLoop }
}
