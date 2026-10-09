import type { ProjectShowRef } from "../../../../types/Projects"

/**
 * Text that changes when the project view has to reload its list (order, names, arrangements, colors, notes...).
 * "played" is left out: it only marks items in the project list and flips every time the project moves on to the next item,
 * and reloading the whole view for it made the project view flash (every thumbnail was rebuilt).
 */
export function getProjectItemsSignature(items: ProjectShowRef[], getShowName: (id: string) => string | undefined): string {
    return JSON.stringify(items.map((item) => ({ ...item, played: undefined, name: (item.type || "show") === "show" ? getShowName(item.id) : item.name })))
}
