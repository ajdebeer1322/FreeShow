// Pure helpers for the media inspector (kept free of stores so they can be unit tested)

type ShowMediaLike = { [bgId: string]: { path?: string; id?: string } | undefined }
type LayoutSlideLike = { background?: string; children?: { [slideId: string]: { background?: string } | undefined } }
type ShowLike = { media?: ShowMediaLike; layouts?: { [layoutId: string]: { slides?: LayoutSlideLike[] } | undefined } }

export function getMediaPath(entry: { path?: string; id?: string } | undefined | null): string {
    return entry?.path || entry?.id || ""
}

/** Find the id a show uses for a media file */
export function findMediaKeyByPath(media: ShowMediaLike | undefined, path: string): string | null {
    if (!media || !path) return null
    return Object.keys(media).find((key) => getMediaPath(media[key]) === path) || null
}

/** How many layout slides (in the given shows) have this file as their background */
export function countBackgroundUses(shows: { [showId: string]: ShowLike | undefined }, path: string): number {
    if (!path) return 0

    let count = 0
    Object.values(shows).forEach((show) => {
        const media = show?.media || {}
        const isThisFile = (bgId: string | undefined) => !!bgId && getMediaPath(media[bgId]) === path

        Object.values(show?.layouts || {}).forEach((layout) => {
            ;(layout?.slides || []).forEach((slide) => {
                if (isThisFile(slide?.background)) count++
                Object.values(slide?.children || {}).forEach((child) => {
                    if (isThisFile(child?.background)) count++
                })
            })
        })
    })

    return count
}
