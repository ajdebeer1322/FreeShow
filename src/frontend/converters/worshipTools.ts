// Creates one show per WorshipTools song, using the same text conversion as "Quick lyrics".

import { get } from "svelte/store"
import type { Show } from "../../types/Show"
import type { WorshipToolsChart } from "../../types/WorshipTools"
import { history } from "../components/helpers/history"
import { setQuickAccessMetadata } from "../components/helpers/setShow"
import { formatToFileName } from "../components/helpers/show"
import { activeProject, projects, shows } from "../stores"
import { convertText } from "./txt"
import { buildSongText } from "./worshipToolsText"

export function getExistingShowNames(list: { [id: string]: { name?: string } } = get(shows)): Set<string> {
    return new Set(
        Object.values(list)
            .map((a) => a?.name?.toLowerCase())
            .filter(Boolean) as string[]
    )
}

export function isInLibrary(title: string, names: Set<string>): boolean {
    return names.has(formatToFileName(title).toLowerCase())
}

export type WorshipToolsImportResult = {
    created: number
    // songs without any lyrics left after removing instrumental parts
    empty: string[]
}

// the line splitting, auto groups and text formatting come from the same settings as Quick lyrics
export function createWorshipToolsShows(charts: WorshipToolsChart[], options: { category: string; addToProject: boolean }): WorshipToolsImportResult {
    const tempShows: { id: string; show: Show }[] = []
    const empty: string[] = []

    charts.forEach((chart) => {
        const song = buildSongText(chart)
        if (!song) {
            empty.push(chart.title)
            return
        }

        const { id, show } = convertText({ name: song.name, origin: "worshiptools", category: options.category || null, text: song.text, returnData: true })

        show.meta = { ...show.meta, ...song.meta }
        if (show.meta.CCLI) setQuickAccessMetadata(show, "CCLI", show.meta.CCLI)

        // directions that are not shown on the slides
        const layoutId = Object.keys(show.layouts || {})[0]
        if (song.notes && layoutId) show.layouts[layoutId].notes = song.notes

        tempShows.push({ id, show })
    })

    if (!tempShows.length) return { created: 0, empty }

    history({ id: "SHOWS", newData: { data: tempShows, replace: true }, location: { page: "show" } })

    // service order at the end of the open project
    const projectId = get(activeProject)
    const project = projectId ? get(projects)[projectId] : null
    if (options.addToProject && projectId && project) {
        const items = [...(project.shows || []), ...tempShows.map((a) => ({ id: a.id }))]
        history({ id: "UPDATE", newData: { key: "shows", data: items }, oldData: { id: projectId }, location: { page: "show", id: "project_key" } })
    }

    return { created: tempShows.length, empty }
}
