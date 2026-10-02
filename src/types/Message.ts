import type { Item, Scrolling } from "./Show"

export interface MessageToken {
    id: string
    label: string
}

// Stored on an Overlay, so artwork, history, backups and cloud sync stay together.
export interface MessageDefinition {
    tokens: MessageToken[]
    outputIds?: string[] // empty means the currently selected normal outputs
    fadeIn: number // milliseconds
    fadeOut: number
    duration: number // seconds; zero means until hidden
    scrolling: Scrolling
    cycle?: { hold: number; pause: number } // seconds, optional repeated whole-message fades
}

// Immutable, self-contained output payload. Editing a definition/draft does not edit this.
export interface LiveMessage {
    id: string
    revision: string
    name: string
    items: Item[]
    values: Record<string, string>
    fadeIn: number
    fadeOut: number
    cycle?: { hold: number; pause: number }
    expiresAt?: number
}
