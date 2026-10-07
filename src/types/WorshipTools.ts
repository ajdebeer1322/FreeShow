// Shared contracts for the WorshipTools (Planning / Music Stand) lyrics import.

export type WorshipToolsBounds = { x: number; y: number; width: number; height: number }

// one entry of the service menu (in service order)
export type WorshipToolsSong = {
    // position in the service menu. The menu is the source of truth, ids can collide for same title + key
    index: number
    title: string
    key: string | null
    active?: boolean
}

export type WorshipToolsLineKind = "lyric" | "instruction"
export type WorshipToolsLine = { text: string; kind: WorshipToolsLineKind }
export type WorshipToolsSection = { heading: string; lines: WorshipToolsLine[] }

// lyrics and section tags of a single song (chords are never included)
export type WorshipToolsChart = {
    title: string
    key: string | null
    tempoTime: string
    // writers, copyright and CCLI text, one entry per line
    attribution: string[]
    sections: WorshipToolsSection[]
    // false when the final page marker was not found, the song might be cut off
    complete: boolean
}

export type WorshipToolsState = {
    open: boolean
    loading: boolean
    url: string
    // true when the signed in Music Stand service menu has songs
    serviceDetected: boolean
    songs: WorshipToolsSong[]
}

export type WorshipToolsProgress = { index: number; status: "waiting" | "reading" | "done" | "failed" | "cancelled"; reason?: string; chart?: WorshipToolsChart } | { finished: true }

export type WorshipToolsViewAction = { action: "open"; bounds: WorshipToolsBounds } | { action: "bounds"; bounds: WorshipToolsBounds } | { action: "park" } | { action: "close" } | { action: "back" | "forward" | "reload" | "home" }
