// Private channels between the main process and the WorshipTools view preload.
// These are not part of the app wide Main/ToMain IPC, the view is a separate (remote) page.

export const WT_CATALOG = "worshiptools:catalog"
export const WT_READ = "worshiptools:read"
export const WT_RESULT = "worshiptools:result"

export type WorshipToolsCatalog = { href: string; songs: import("../../types/WorshipTools").WorshipToolsSong[] }
export type WorshipToolsReadRequest = { requestId: string; index: number; title: string; key: string | null }
export type WorshipToolsReadResult = { requestId: string; chart?: import("../../types/WorshipTools").WorshipToolsChart; error?: string }
