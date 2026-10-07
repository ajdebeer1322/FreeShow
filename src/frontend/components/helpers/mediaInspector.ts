import { get } from "svelte/store"
import { Main } from "../../../types/IPC/Main"
import type { Media } from "../../../types/Show"
import { requestMain } from "../../IPC/main"
import { activePopup, media, outputs, popupData, selected, showsCache } from "../../stores"
import { newToast } from "../../utils/common"
import { clone } from "./array"
import { VideoPlayer } from "../media/video/videoPlayer"
import { history } from "./history"
import { downloadOnlineMedia, getFileName, getMediaType, getExtension, removeExtension } from "./media"
import { countBackgroundUses, findMediaKeyByPath, getMediaPath } from "./mediaInspectorLogic"
import { getActiveOutputs, setOutput } from "./output"
import { _show } from "./shows"
import { removeStore, updateStore } from "./update"

export type InspectorTarget = { showId: string; layoutId: string; index: number }

export type InspectorBackground = {
    bgId: string
    entry: Media
    path: string
    type: "image" | "video" | ""
    isDuplicate: boolean
}

/** The background of a layout slide, as the media inspector edits it */
export function getInspectorBackground(target: InspectorTarget | null | undefined): InspectorBackground | null {
    if (!target?.showId) return null

    const ref = _show(target.showId).layouts([target.layoutId]).ref()[0] || []
    const bgId: string = ref[target.index]?.data?.background || ""
    const entry: Media | undefined = bgId ? _show(target.showId).get("media")?.[bgId] : undefined
    const path = getMediaPath(entry)
    if (!entry || !path) return null

    const mediaType = getMediaType(getExtension(path))
    const type = mediaType === "image" || mediaType === "video" ? mediaType : ""

    return { bgId, entry, path, type, isDuplicate: !!entry.duplicateOf }
}

/** How many slides (in shows loaded so far) use this file as a background */
export function countFileUses(path: string) {
    return countBackgroundUses(get(showsCache), path)
}

/** Loop off = play once (and hold the last frame). Saved on this show's background, so other shows are not affected. */
export function setBackgroundLoop(showId: string, bgId: string, loop: boolean) {
    showsCache.update((a) => {
        const entry = a[showId]?.media?.[bgId]
        if (!entry) return a

        if (loop) delete entry.loop
        else entry.loop = false
        return a
    })
}

/** Point a layout slide at another of the show's media files */
function setSlideBackground(target: InspectorTarget, bgId: string) {
    history({
        id: "SHOW_LAYOUT",
        newData: { key: "background", data: [bgId], indexes: [target.index], dataIsArray: false },
        location: { page: "show", show: { id: target.showId }, layout: target.layoutId }
    })
}

/** Copy the file (and its current adjustments) and use the copy for this slide only */
export async function duplicateBackground(target: InspectorTarget): Promise<boolean> {
    const bg = getInspectorBackground(target)
    if (!bg) return false

    // online media is stored by url, so copy the downloaded file
    const sourcePath = await downloadOnlineMedia(bg.path)
    if (!sourcePath || sourcePath.startsWith("http")) {
        newToast("inspector.duplicate_failed")
        return false
    }

    const result = await requestMain(Main.DUPLICATE_MEDIA_FILE, { path: sourcePath })
    if (!result?.path) {
        newToast("inspector.duplicate_failed")
        return false
    }

    // the copy starts with the same adjustments as the original
    const settings = clone(get(media)[bg.path] || {})
    media.update((a) => {
        a[result.path] = settings
        return a
    })

    const originalPath = bg.entry.duplicateOf || bg.path
    const newEntry: Media = { ...clone(bg.entry), path: result.path, name: removeExtension(getFileName(result.path)), duplicateOf: originalPath }
    delete newEntry.id

    const bgId = findMediaKeyByPath(_show(target.showId).get("media"), result.path) || _show(target.showId).media().add(newEntry)
    setSlideBackground(target, bgId)
    return true
}

/** Use the original file again for this slide (the copy stays in the media folder) */
export function backToOriginal(target: InspectorTarget): boolean {
    const bg = getInspectorBackground(target)
    const originalPath = bg?.entry.duplicateOf
    if (!bg || !originalPath) return false

    let bgId = findMediaKeyByPath(_show(target.showId).get("media"), originalPath)
    if (!bgId) {
        const entry: Media = { ...clone(bg.entry), path: originalPath, name: removeExtension(getFileName(originalPath)) }
        delete entry.duplicateOf
        delete entry.id
        bgId = _show(target.showId).media().add(entry)
    }

    setSlideBackground(target, bgId)
    return true
}

/** The selected slide in the show view, if it has a background the inspector can edit */
export function getSelectedInspectorTarget(): InspectorTarget | null {
    const sel = get(selected)
    if (sel.id !== "slide") return null

    const first = sel.data?.[0]
    const showId: string = first?.showId || ""
    if (!showId || typeof first?.index !== "number") return null

    const target: InspectorTarget = { showId, layoutId: _show(showId).get("settings.activeLayout") || "", index: first.index }
    return getInspectorBackground(target) ? target : null
}

export function openMediaInspector() {
    const target = getSelectedInspectorTarget()
    if (!target) return

    popupData.set(target)
    activePopup.set("media_inspector")
}

// FILE SETTINGS (saved per file in the media store and applied to outputs showing the file)

const FILE_SETTINGS = ["fit", "flipped", "flippedY", "blend", "filter", "cropping", "speed", "fromTime", "toTime", "softLoop", "videoType"]

/** Change a setting on the outputs that are currently showing this file */
function updateOutputsShowing(path: string, changes: { [key: string]: any }, remove: string[] = []) {
    getActiveOutputs(get(outputs), true, true, true).forEach((outputId) => {
        const background = get(outputs)[outputId]?.out?.background
        if (!background || (background.path || background.id || "") !== path) return

        const updated = { ...clone(background), ...changes }
        remove.forEach((key) => delete updated[key])
        setOutput("background", updated, false, outputId)
    })
}

/** Save one setting for a file (undefined removes it) */
export function setMediaSetting(path: string, key: string, value: any) {
    if (!path) return

    if (value === undefined) removeStore("media", { keys: [path, key] })
    else updateStore("media", { keys: [path, key], value })

    VideoPlayer.updateProperties(path)
    updateOutputsShowing(path, value === undefined ? {} : { [key]: value }, value === undefined ? [key] : [])
}

/** Remove every crop, colour, fit and trim setting of a file */
export function resetMediaSettings(path: string) {
    if (!path) return

    FILE_SETTINGS.forEach((key) => removeStore("media", { keys: [path, key] }))

    VideoPlayer.updateProperties(path)
    updateOutputsShowing(path, {}, FILE_SETTINGS)
}
