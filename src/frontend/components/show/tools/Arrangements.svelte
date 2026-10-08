<script lang="ts">
    import { uid } from "uid"
    import type { ClickEvent } from "../../../../types/Main"
    import { activeProject, activeRename, activeShow, editingProjectTemplate, projects, projectTemplates, showsCache } from "../../../stores"
    import { translateText } from "../../../utils/language"
    import { getAccess } from "../../../utils/profile"
    import { findMasterId, getMasterSlides, masterIsUpToDate } from "../../helpers/arrangements"
    import { keysToID, sortByName } from "../../helpers/array"
    import { duplicate } from "../../helpers/clipboard"
    import { history } from "../../helpers/history"
    import Icon from "../../helpers/Icon.svelte"
    import HiddenInput from "../../inputs/HiddenInput.svelte"
    import MaterialButton from "../../inputs/MaterialButton.svelte"
    import T from "../../helpers/T.svelte"
    import SelectElem from "../../system/SelectElem.svelte"

    // The arrangements (layouts) of a show (the active show by default): choose one, create a new one (copy of the current, or empty with Ctrl), rename or delete from the context menu.
    // "Master" is the arrangement with every group once, it is created the first time it is chosen.

    export let showId = ""
    export let index: number | undefined = undefined // project item, the active one by default
    // in the arrangement bar: no border and padding
    export let bar = false

    $: currentId = showId || $activeShow?.id || ""
    $: projectIndex = index ?? $activeShow?.index
    $: currentShow = $showsCache[currentId] || {}
    $: layouts = currentShow.layouts
    $: activeLayout = currentShow.settings?.activeLayout
    $: layoutSlides = layouts?.[activeLayout]?.slides || []

    $: isTemplate = !!$editingProjectTemplate
    $: projectId = isTemplate ? $editingProjectTemplate : $activeProject
    $: store = isTemplate ? projectTemplates : projects
    $: project = $store[projectId!]

    $: masterId = findMasterId(layouts)
    // the Master is always first in the list
    $: sortedLayouts = [...sortByName(keysToID(layouts || {})).filter((a) => a.id === masterId), ...sortByName(keysToID(layouts || {})).filter((a) => a.id !== masterId)]

    let profile = getAccess("shows")
    $: isLocked = currentShow?.locked || profile.global === "read" || profile[currentShow?.category || ""] === "read"

    // new arrangements need a show with groups
    $: hasGroups = layoutSlides.some((a) => a && currentShow?.slides?.[a.id]?.group && currentShow?.slides?.[a.id]?.group !== ".")

    function addLayout(e: ClickEvent) {
        if (!e.detail.ctrl) {
            duplicate({ id: "layout" })
            return
        }

        history({ id: "UPDATE", newData: { key: "layouts", subkey: uid() }, oldData: { id: currentId }, location: { page: "show", id: "show_layout" } })
    }

    let edit: string | boolean = false

    function changeName(e: any) {
        let currentLayout = e.detail?.id?.slice("layout_".length)
        if (!currentLayout || isLocked) return

        const newName = e.detail.value
        history({ id: "UPDATE", newData: { key: "layouts", keys: [currentLayout], subkey: "name", data: newName }, oldData: { id: currentId }, location: { page: "show", id: "show_key" } })

        const showIndex = projectIndex
        if (project?.shows?.[showIndex ?? -1]?.layout === currentLayout) {
            store.update((a) => {
                if (a[projectId!]?.shows?.[showIndex!]) {
                    a[projectId!].shows[showIndex!].layoutInfo = { name: newName }
                }
                return a
            })
        }
    }

    function setLayout(id: string, layoutInfo) {
        if (!$showsCache[currentId]) return

        showsCache.update((a) => {
            if (a[currentId]) {
                if (!a[currentId].settings) a[currentId].settings = { activeLayout: "", template: null }
                a[currentId].settings.activeLayout = id
            }
            return a
        })

        // set active layout in project
        if (sortedLayouts?.length < 2) return
        const showIndex = projectIndex
        if ((project?.shows?.[showIndex ?? -1]?.type || "show") === "show" && showIndex !== undefined && projectId && project?.shows?.[showIndex]) {
            store.update((a) => {
                if (a[projectId!]?.shows?.[showIndex]) {
                    a[projectId!].shows[showIndex].layout = id
                    a[projectId!].shows[showIndex].layoutInfo = layoutInfo
                }
                return a
            })
        }
    }

    $: activeName = layouts?.[activeLayout]?.name || ""

    // the list of arrangements opens under the bar
    let open = false
    function pick(id: string, name: string) {
        open = false
        if (!edit) setLayout(id, { name })
    }

    // the Master arrangement does not exist until it is chosen
    function pickMaster() {
        open = false
        if (edit || isLocked) return

        const masterName = translateText("show.master_arrangement")
        const slides = getMasterSlides(currentShow.slides, layouts, masterId ? layouts[masterId].slides : [])

        if (!masterId) {
            // creating a layout selects it (and starts renaming)
            const newLayout = { name: masterName, master: true, notes: "", slides }
            history({ id: "UPDATE", newData: { key: "layouts", subkey: uid(), data: newLayout }, oldData: { id: currentId }, location: { page: "show", id: "show_layout" } })
            activeRename.set(null)
            return
        }

        if (!masterIsUpToDate(currentShow.slides, layouts, masterId)) {
            history({ id: "UPDATE", newData: { key: "layouts", keys: [masterId], subkey: "slides", data: slides }, oldData: { id: currentId }, location: { page: "show", id: "show_key" } })
        }
        setLayout(masterId, { name: layouts[masterId].name })
    }

    function outside(e: MouseEvent) {
        if (!(e.target as HTMLElement)?.closest?.(".picker")) open = false
    }
</script>

<svelte:window on:mousedown={outside} />

{#if layouts && !currentShow.reference}
    <!-- one narrow row: the arrangement (click to switch, right-click for rename / duplicate / delete) and a + for a new one -->
    <div class="arrangements" class:bar>
        <div class="picker">
            <SelectElem id="layout" data={activeLayout} fill>
                <MaterialButton class={isLocked ? "" : "context #layout"} title="panel.arrangements" on:click={() => (open = !open)} isActive={open}>
                    <span class="name"><HiddenInput value={activeName} id={"layout_" + activeLayout} on:edit={changeName} bind:edit allowEdit={!isLocked} /></span>
                    <Icon id="expand" size={1} white />
                </MaterialButton>
            </SelectElem>

            {#if open}
                <div class="menu">
                    {#if !masterId}
                        <button on:click={pickMaster}><T id="show.master_arrangement" /></button>
                    {/if}
                    {#each sortedLayouts as layout}
                        <button class:active={layout.id === activeLayout} on:click={() => (layout.id === masterId ? pickMaster() : pick(layout.id, layout.name))}>{layout.name}</button>
                    {/each}
                </div>
            {/if}
        </div>

        <MaterialButton disabled={!hasGroups || isLocked} on:click={addLayout} title="show.new_arrangement" center>
            <Icon id="add" size={1.1} white />
        </MaterialButton>
    </div>
{/if}

<style>
    .arrangements {
        display: flex;
        align-items: center;
        gap: 4px;
        flex-shrink: 0;
        padding: 4px 8px;
        border-bottom: 1px solid var(--primary-lighter);
    }
    .arrangements.bar {
        padding: 0;
        border-bottom: none;
    }

    .picker {
        position: relative;
        flex: 1;
        min-width: 0;
    }

    .arrangements :global(button) {
        min-height: 28px;
        padding: 0 0.8em !important;
    }
    .picker :global(.selectElem button) {
        width: 100%;
        justify-content: space-between;
    }

    .name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: start;
    }

    .menu {
        position: absolute;
        top: calc(100% + 2px);
        left: 0;
        right: 0;
        z-index: 20;
        display: flex;
        flex-direction: column;
        max-height: 240px;
        overflow-y: auto;
        border: 1px solid var(--primary-lighter);
        border-radius: 4px;
        background-color: var(--primary-darker);
        box-shadow: 0 4px 12px rgb(0 0 0 / 0.4);
    }
    .menu button {
        padding: 6px 12px;
        border: none;
        background: none;
        color: var(--text);
        font-family: inherit;
        font-size: inherit;
        text-align: start;
        cursor: pointer;
    }
    .menu button:hover {
        background-color: var(--hover);
    }
    .menu button.active {
        background-color: var(--primary-darkest);
        color: var(--secondary);
    }
</style>
