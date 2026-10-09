<!-- THIS MODE WILL SHOW ALL THE ELEMENTS IN YOUR PROJECT! -->

<script lang="ts">
    import { onDestroy } from "svelte"
    import type { ProjectShowRef } from "../../../../types/Projects"
    import { activeFocus, activeProject, activeShow, outputs, projects, resized, selected, showsCache } from "../../../stores"
    import Icon from "../../helpers/Icon.svelte"
    import { getActiveOutputs } from "../../helpers/output"
    import { getSlideElement } from "../../helpers/slideLinks"
    import T from "../../helpers/T.svelte"
    import Loader from "../../main/Loader.svelte"
    import Center from "../../system/Center.svelte"
    import { getAllProjectItems } from "./focus"
    import { getProjectItemsSignature } from "./projectSignature"
    import FocusItem from "./FocusItem.svelte"
    import ArrangementBar from "../ArrangementBar.svelte"
    import { openArrangementBars } from "../arrangementBar"
    import ArrangementToggle from "../ArrangementToggle.svelte"
    import NextTimerButton from "../NextTimerButton.svelte"
    import { hasNewerUpdate } from "../../../utils/common"
    import { openProjectItem, shouldKeepProjectScroll } from "../project"
    import { debugLog, isDebugging } from "../../helpers/debugLog"

    export let normalView = false

    $: projectId = $activeProject || ""
    $: project = $projects[projectId]

    let projectUpdating: any = null
    $: if (project?.shows) initScroll()
    function initScroll() {
        if (projectUpdating) clearTimeout(projectUpdating)
        projectUpdating = setTimeout(() => {
            if (isScrolling) clearTimeout(isScrolling)
            isScrolling = null
            projectUpdating = null
            if (normalView) scrollToActive()
            if (!normalView && $activeFocus.id) {
                const shows = project?.shows || []
                if (active.index !== undefined && shows[active.index]?.id === active.id) {
                    activeFocus.set(active)
                } else {
                    activeFocus.set({ ...active, index: getProjectItemIndex(active.id, active.type, outputShowLayout) })
                }
            }
        }, 100)
    }

    let listElem: HTMLElement | undefined
    let fromTop = 0 // 25px on Windows

    $: outputId = getActiveOutputs($outputs, true, true, true)[0] || ""
    $: output = $outputs[outputId]
    $: outputShowId = output?.out?.slide?.id
    $: outputShowLayout = output?.out?.slide?.layout
    $: outputShowProjectIndex = output?.out?.slide?.projectIndex
    $: outputIndex = output?.out?.slide?.index

    $: active = (normalView ? $activeShow : $activeFocus) || { id: "", index: undefined, type: undefined }
    let scrollingToActive: any = null
    let previousId = ""
    // auto scroll to the active item when it changes (not on every outputted slide change, so the view stays where the user scrolled)
    $: if (active) scrollToActive()
    async function scrollToActive() {
        if (!listElem || isScrolling || projectUpdating || shouldKeepProjectScroll()) {
            if (listElem && shouldKeepProjectScroll()) debugLog("SCROLL", "project view scroll skipped (moving on with key/timer)")
            return
        }

        // wait until both output and active has updated if they update at mostly the same time
        if (await hasNewerUpdate("FOCUS_SCROLL")) return
        if (!listElem || shouldKeepProjectScroll()) return

        let currentId = active.id || ""
        let slideIndex = active.id === outputShowId ? outputIndex || 0 : 0
        let currentType = active.type

        let index = active.index
        if (index === undefined) {
            if (outputShowProjectIndex !== undefined) {
                index = outputShowProjectIndex
            } else {
                if (outputShowId) currentId = outputShowId
                if (outputShowId) currentType = undefined
                index = getProjectItemIndex(currentId, currentType, normalView ? project?.shows[active.index ?? -1]?.layout : outputShowLayout)
            }
        }

        if (index < 0) return

        const targetKey = `${currentId}:${index}`
        if (!outputShowId && previousId === targetKey) return
        previousId = targetKey

        let id = "id_" + getId(currentId) + "_" + index
        let elem = listElem.querySelector("#" + id) as HTMLElement
        if (!elem) return
        let elemTop = elem?.offsetTop || 0
        const slide = getSlideElement(elem?.querySelector(".grid"), slideIndex)
        let slideTop = slide ? elemTop + slide.offsetTop : elemTop

        // don't scroll if already visible
        const currentScrollPos = listElem.closest(".center")?.scrollTop || 0
        const currentViewHeight = listElem.closest(".center")?.clientHeight || 0
        if (slideTop - currentScrollPos > -250 && slideTop - currentScrollPos < currentViewHeight - 200) return

        // smooth scrolling time
        if (scrollingToActive) clearTimeout(scrollingToActive)
        scrollingToActive = setTimeout(() => {
            scrollingToActive = null
        }, 3000)

        // scroll to active elem!
        debugLog("SCROLL", `project view scrolls to "${currentId}" #${index} (slide ${slideIndex}) at ${Math.round(slideTop - fromTop - 80)}px, was at ${Math.round(currentScrollPos)}px`)
        const MARGIN = 80
        listElem.closest(".center")?.scrollTo(0, slideTop - fromTop - MARGIN)
    }

    function getProjectItemIndex(id: string, type?: string, layout?: string) {
        const shows = project?.shows || []

        // Match the exact item first when we know the type/layout.
        let index = shows.findIndex((item) => item.id === id && (!type || item.type === type) && (!layout || item.layout === layout))
        if (index !== -1) return index

        // Fallbacks keep media and other non-show items scrollable.
        index = shows.findIndex((item) => item.id === id && (!type || item.type === type))
        if (index !== -1) return index

        index = shows.findIndex((item) => item.id === id && (!layout || item.layout === layout))
        if (index !== -1) return index

        return shows.findIndex((item) => item.id === id)
    }

    let scrollContainer: HTMLElement | null = null
    $: if (listElem) setScrollListener()
    function setScrollListener() {
        if (!listElem?.closest(".center")) return

        fromTop = (listElem.children[0] as HTMLElement)?.offsetTop || 0
        const container = listElem.closest(".center") as HTMLElement
        if (scrollContainer !== container) {
            scrollContainer?.removeEventListener("scroll", scrolling)
            scrollContainer = container
            scrollContainer.addEventListener("scroll", scrolling)
        }

        // Trigger once when list is ready so initial active media/show gets centered.
        scrollToActive()
    }

    $: sidebarClosed = $resized.leftPanel < 5

    let isScrolling: any = null
    function scrolling(e: any) {
        if (scrollingToActive || !listElem || !project?.shows || projectUpdating) return

        if (isScrolling) clearTimeout(isScrolling)
        isScrolling = setTimeout(() => {
            isScrolling = null
        }, 500)

        if (sidebarClosed || normalView) return

        let scrollTop = e.target.scrollTop

        let focusedId = ""
        let items = listElem.querySelectorAll(".focusId")
        ;[...items].forEach((a) => {
            let top = (a as HTMLElement).offsetTop - fromTop
            if (top <= scrollTop) focusedId = a.id
        })

        if (!focusedId) return

        // set to activeFocus
        let index = Number(focusedId.split("_")[2])
        let projectItem = project.shows[index]
        if (!projectItem) return

        activeFocus.set({ id: projectItem.id, index, type: projectItem.type })
    }

    function getId(text: string) {
        if (typeof text !== "string") return ""
        return text.replace(/[^a-zA-Z0-9]+/g, "")
    }

    function selectItem(index: number, force = false) {
        if (!normalView) return
        const isActive = $activeShow?.id === project?.shows[index]?.id && $activeShow?.index === index
        // forced when the layout of the item must be set before something uses it
        if (isActive && !force) return
        openProjectItem(projectId, index)
    }

    // Include arrangement/metadata changes but avoid remounting all thumbnails
    // when slide contents change. Do not mutate the stored project references.
    let projectsItemsList: ProjectShowRef[] = []
    // "played" only marks items in the project list and changes every time the project moves on: reloading the whole view for it made it flash
    $: projectItems = getProjectItemsSignature(project?.shows || [], (id) => $showsCache[id]?.name)
    $: if (projectItems) projectsItemsList = (project?.shows || []).map((item) => ({ ...item }))
    $: logProjectItemsChange(projectItems)

    let previousProjectItems = ""
    function logProjectItemsChange(current: string) {
        if (!isDebugging()) return
        if (previousProjectItems && previousProjectItems !== current) {
            const before = JSON.parse(previousProjectItems)
            const after = JSON.parse(current)
            const changes: string[] = []
            for (let i = 0; i < Math.max(before.length, after.length); i++) {
                const keys = Object.keys({ ...before[i], ...after[i] }).filter((key) => JSON.stringify(before[i]?.[key]) !== JSON.stringify(after[i]?.[key]))
                if (keys.length) changes.push(`#${i} ${after[i]?.name || before[i]?.name || ""}: ${keys.join(", ")}`)
            }
            debugLog("UI", `project view list changed (reloads the list): ${changes.join(" | ") || "order/length"}`)
        }
        previousProjectItems = current
    }

    // the list is replaced when loaded, the old one stays on screen meanwhile (an {#await} would show the loader and rebuild every thumbnail)
    let projectList: any[] | null = null
    let loadToken = 0
    $: loadProjectList(projectsItemsList)
    async function loadProjectList(items: ProjectShowRef[]) {
        const token = ++loadToken
        const started = Date.now()
        const result = await getAllProjectItems(items)
        if (token !== loadToken) return
        if (isDebugging()) debugLog("UI", `project view list ready: ${result.length} items, loaded in ${Date.now() - started}ms${projectList === null ? " (first load: loader shown)" : " (old list stayed on screen)"}`)
        projectList = result
    }

    onDestroy(() => {
        scrollContainer?.removeEventListener("scroll", scrolling)
        if (projectUpdating) clearTimeout(projectUpdating)
        if (isScrolling) clearTimeout(isScrolling)
        if (scrollingToActive) clearTimeout(scrollingToActive)
    })
</script>

{#if projectList === null}
    <Center>
        <Loader />
    </Center>
{:else if projectList.length}
    <div class="list" bind:this={listElem}>
        {#each projectList as item, i (item.id + ":" + i)}
            <div id={"id_" + getId(item.id) + "_" + i} class="focusId" class:selected={normalView && active.id === item.id && active.index === i} role="none" on:mousedown={() => selectItem(i)} on:focusin={() => selectItem(i)} on:click={() => selectItem(i)}>
                <div class="name {item.type === 'section' ? '' : 'context #project_header'}" style={item.color ? `${item.type === "section" ? "" : `background-color: color-mix(in srgb, ${item.color} 20%, var(--primary-darkest));`}border-bottom: 2px solid ${item.color}` : ""} on:contextmenu={() => selected.set({ id: "show", data: [{ index: i, id: item.id, type: item.type }] })}>
                    <button class="title" type="button" aria-label={item.name} on:click={() => selectItem(i)}>
                        <Icon id={item.icon || "noIcon"} custom={(item.type || "show") === "show"} white right />
                        <p>{item.name}</p>
                        {#if item.layoutInfo?.name}<span class="arrangement">{item.layoutInfo.name}</span>{/if}
                    </button>
                    {#if normalView && (item.type || "show") === "show"}
                        <ArrangementToggle showId={item.id} key={item.id + ":" + i} select={() => selectItem(i)} />
                        <NextTimerButton showId={item.id} layout={item.layout} select={() => selectItem(i, true)} />
                    {/if}
                </div>
                {#if normalView && (item.type || "show") === "show" && $openArrangementBars.includes(item.id + ":" + i)}
                    <ArrangementBar showId={item.id} layout={item.layout} index={i} />
                {/if}
                <FocusItem show={{ ...item, index: i }} continuous />
            </div>
        {/each}
    </div>
{:else}
    <Center faded>
        <T id="empty.general" />
    </Center>
{/if}

<style>
    .list {
        display: flex;
        flex-direction: column;
    }

    .selected > .name {
        box-shadow: inset 3px 0 var(--secondary);
    }

    .arrangement {
        margin-left: auto;
        opacity: 0.6;
        font-size: 0.85em;
    }

    .name {
        width: 100%;
        background-color: var(--primary-darkest);
        font-weight: 600;

        display: flex;
        align-items: center;
    }

    .title {
        flex: 1;
        min-width: 0;
        border: 0;
        border-radius: 0;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
        padding: 4px 8px;

        display: flex;
        align-items: center;
    }
</style>
