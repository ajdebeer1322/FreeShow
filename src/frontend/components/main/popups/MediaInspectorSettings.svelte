<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import { getFilterValue, setFilterValue } from "../../helpers/filterString"
    import T from "../../helpers/T.svelte"

    /** The saved settings of the file */
    export let settings: { [key: string]: any } = {}
    /** The fit that is used (the file's own, or the output style's) */
    export let fit = "contain"
    export let isVideo = false

    const dispatch = createEventDispatcher<{ change: { key: string; value: any } }>()
    const set = (key: string, value: any) => dispatch("change", { key, value })

    const fitOptions = [
        { value: "contain", label: "media.contain" },
        { value: "cover", label: "media.cover" },
        { value: "fill", label: "media.fill" },
        { value: "blur", label: "media.blur_fill" }
    ]

    // COLOUR (saved as one CSS filter string)

    type Row = { key: string; label: string; min: number; max: number; step: number; defaultValue: number; unit: string; digits: number }
    const colorRows: Row[] = [
        { key: "hue-rotate", label: "inspector.hue", min: -180, max: 180, step: 1, defaultValue: 0, unit: "deg", digits: 0 },
        { key: "saturate", label: "inspector.saturation", min: 0, max: 2, step: 0.05, defaultValue: 1, unit: "", digits: 2 },
        { key: "brightness", label: "filter.brightness", min: 0.2, max: 1.8, step: 0.05, defaultValue: 1, unit: "", digits: 2 },
        { key: "contrast", label: "filter.contrast", min: 0.2, max: 1.8, step: 0.05, defaultValue: 1, unit: "", digits: 2 },
        { key: "blur", label: "filter.blur", min: 0, max: 50, step: 1, defaultValue: 0, unit: "px", digits: 0 }
    ]

    $: filter = (settings.filter as string) || ""
    $: hasColor = colorRows.some((row) => getFilterValue(filter, row.key, row.defaultValue) !== row.defaultValue)

    function setColor(row: Row, value: number) {
        if (!Number.isFinite(value)) return
        const clamped = Math.min(row.max, Math.max(row.min, value))
        const newFilter = setFilterValue(filter, row.key, clamped, row.defaultValue, row.unit)
        set("filter", newFilter || undefined)
    }

    const resetColor = () => set("filter", undefined)

    // VIDEO

    const videoRows: (Row & { setting: string })[] = [
        { setting: "speed", key: "speed", label: "media.speed", min: 0.25, max: 4, step: 0.05, defaultValue: 1, unit: "×", digits: 2 },
        { setting: "softLoop", key: "softLoop", label: "media.soft_loop", min: 0, max: 10, step: 0.5, defaultValue: 0, unit: "s", digits: 1 }
    ]

    function setVideo(row: Row & { setting: string }, value: number) {
        if (!Number.isFinite(value)) return
        const clamped = Math.min(row.max, Math.max(row.min, value))
        set(row.setting, clamped === row.defaultValue ? undefined : clamped)
    }

    const percent = (value: number, row: Row) => ((Math.min(row.max, Math.max(row.min, value)) - row.min) / (row.max - row.min)) * 100
    const read = (e: Event) => Number((e.currentTarget as HTMLInputElement).value)
</script>

<div class="settings">
    <section>
        <h4><T id="inspector.scaling" /></h4>

        <div class="segments">
            {#each fitOptions as option}
                <button class:active={fit === option.value} on:click={() => set("fit", option.value)}>
                    <T id={option.label} />
                </button>
            {/each}
        </div>

        <div class="flips">
            <button class:active={!!settings.flipped} title="media.flip_horizontally" on:click={() => set("flipped", settings.flipped ? undefined : true)}>
                <T id="media.flip_horizontally" />
            </button>
            <button class:active={!!settings.flippedY} title="media.flip_vertically" on:click={() => set("flippedY", settings.flippedY ? undefined : true)}>
                <T id="media.flip_vertically" />
            </button>
        </div>
    </section>

    <section>
        <header>
            <h4><T id="inspector.colour" /></h4>
            <button class="link" disabled={!hasColor} on:click={resetColor}><T id="inspector.reset_colour" /></button>
        </header>

        {#each colorRows as row}
            {@const value = getFilterValue(filter, row.key, row.defaultValue)}
            <div class="slider">
                <span class="label" role="presentation" on:dblclick={() => setColor(row, row.defaultValue)}><T id={row.label} /></span>
                <input class="range" type="range" min={row.min} max={row.max} step={row.step} {value} style="--fill: {percent(value, row)}%;" on:input={(e) => setColor(row, read(e))} />
                <input class="number" type="number" step={row.step} value={value.toFixed(row.digits)} on:change={(e) => setColor(row, read(e))} />
            </div>
        {/each}
    </section>

    {#if isVideo}
        <section>
            <h4><T id="inspector.playback" /></h4>

            {#each videoRows as row}
                {@const value = Number(settings[row.setting] ?? row.defaultValue)}
                <div class="slider">
                    <span class="label" role="presentation" on:dblclick={() => setVideo(row, row.defaultValue)}><T id={row.label} /></span>
                    <input class="range" type="range" min={row.min} max={row.max} step={row.step} {value} style="--fill: {percent(value, row)}%;" on:input={(e) => setVideo(row, read(e))} />
                    <input class="number" type="number" step={row.step} value={value.toFixed(row.digits)} on:change={(e) => setVideo(row, read(e))} />
                </div>
            {/each}
        </section>
    {/if}
</div>

<style>
    .settings {
        display: flex;
        flex-direction: column;
        gap: 12px;
        height: 100%;
        overflow-y: auto;
        padding: 12px;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 12px;
        border-radius: 8px;
        background-color: var(--primary-darkest);
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h4 {
        margin: 0;
        font-size: 0.8em;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.65;
    }

    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 7px 10px;
        border: 1px solid var(--primary-lighter);
        border-radius: 6px;
        background-color: var(--primary);
        color: var(--text);
        font-family: inherit;
        font-size: 0.85em;
        cursor: pointer;
    }
    button:hover {
        background-color: var(--hover);
    }
    button.active {
        border-color: var(--secondary);
        background-color: var(--secondary-opacity);
    }

    .segments {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 4px;
    }
    .segments button {
        padding: 7px 4px;
    }

    .flips {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
    }

    button.link {
        padding: 2px 6px;
        border: none;
        background: none;
        color: var(--secondary);
        font-size: 0.8em;
    }
    button.link:disabled {
        opacity: 0.35;
        cursor: default;
    }

    .slider {
        display: grid;
        grid-template-columns: 86px 1fr 62px;
        align-items: center;
        gap: 10px;
    }
    .label {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.9em;
        opacity: 0.85;
        cursor: default;
    }

    .range {
        --fill: 0%;
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 18px;
        margin: 0;
        background: transparent;
        outline: none;
        cursor: pointer;
    }
    .range::-webkit-slider-runnable-track {
        height: 4px;
        border-radius: 2px;
        background: linear-gradient(to right, var(--secondary) var(--fill), var(--primary-lighter) var(--fill));
    }
    .range::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 14px;
        height: 14px;
        margin-top: -5px;
        border: 2px solid var(--secondary);
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 1px 3px rgb(0 0 0 / 0.5);
    }
    .range:hover::-webkit-slider-thumb {
        transform: scale(1.15);
    }

    .number {
        width: 100%;
        padding: 4px 6px;
        box-sizing: border-box;
        border: 1px solid var(--primary-lighter);
        border-radius: 5px;
        background-color: var(--primary);
        color: var(--text);
        font-family: inherit;
        font-size: 0.85em;
        text-align: right;
        font-variant-numeric: tabular-nums;
    }
    .number:focus {
        outline: none;
        border-color: var(--secondary);
    }
    .number::-webkit-inner-spin-button {
        display: none;
    }
</style>
