import { get, writable } from "svelte/store"
import { activeProject } from "../../stores"

// Which shows have their arrangement bar open. Everything is closed again when another project is opened.
export const openArrangementBars = writable<string[]>([])

let currentProject = get(activeProject)
activeProject.subscribe((id) => {
    if (id === currentProject) return
    currentProject = id
    openArrangementBars.set([])
})

export function toggleArrangementBar(key: string) {
    openArrangementBars.update((a) => (a.includes(key) ? a.filter((id) => id !== key) : [...a, key]))
}
