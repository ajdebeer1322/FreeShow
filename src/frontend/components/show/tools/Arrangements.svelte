<script lang="ts">
    import { uid } from "uid"
    import type { ClickEvent } from "../../../../types/Main"
    import { activeProject, activeShow, editingProjectTemplate, projects, projectTemplates, showsCache } from "../../../stores"
    import { getAccess } from "../../../utils/profile"
    import { keysToID, sortByName } from "../../helpers/array"
    import { duplicate } from "../../helpers/clipboard"
    import { history } from "../../helpers/history"
    import Icon from "../../helpers/Icon.svelte"
    import T from "../../helpers/T.svelte"
    import HiddenInput from "../../inputs/HiddenInput.svelte"
    import MaterialButton from "../../inputs/MaterialButton.svelte"
    import SelectElem from "../../system/SelectElem.svelte"

    // The arrangements (layouts) of the active show: choose one, create a new one (copy of the current, or empty with Ctrl), rename or delete from the context menu.

    $: showId = $activeShow?.id || ""
    $: currentShow = $showsCache[showId] || {}
    $: layouts = currentShow.layouts
    $: activeLayout = currentShow.settings?.activeLayout
    $: layoutSlides = layouts?.[activeLayout]?.slides || []

    $: isTemplate = !!$editingProjectTemplate
    $: projectId = isTemplate ? $editingProjectTemplate : $activeProject
    $: store = isTemplate ? projectTemplates : projects
    $: project = $store[projectId!]

    $: sortedLayouts = sortByName(keysToID(layouts || {}))

    let profile = getAccess("shows")
    $: isLocked = currentShow?.locked || profile.global === "read" || profile[currentShow?.category || ""] === "read"

    // new arrangements need a show with groups
    $: hasGroups = layoutSlides.some((a) => a && currentShow?.slides?.[a.id]?.group && currentShow?.slides?.[a.id]?.group !== ".")

    function addLayout(e: ClickEvent) {
        if (!e.detail.ctrl) {
            duplicate({ id: "layout" })
            return
        }

        history({ id: "UPDATE", newData: { key: "layouts", subkey: uid() }, oldData: { id: showId }, location: { page: "show", id: "show_layout" } })
    }

    let edit: string | boolean = false

    function changeName(e: any) {
        let currentLayout = e.detail?.id?.slice("layout_".length)
        if (!currentLayout || isLocked) return

        const newName = e.detail.value
        history({ id: "UPDATE", newData: { key: "layouts", keys: [currentLayout], subkey: "name", data: newName }, oldData: { id: showId }, location: { page: "show", id: "show_key" } })

        const showIndex = $activeShow?.index
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
        if (!$showsCache[showId]) return

        showsCache.update((a) => {
            if (a[showId]) {
                if (!a[showId].settings) a[showId].settings = { activeLayout: "", template: null }
                a[showId].settings.activeLayout = id
            }
            return a
        })

        // set active layout in project
        if (sortedLayouts?.length < 2) return
        const showIndex = $activeShow?.index
        if (($activeShow?.type === undefined || $activeShow?.type === "show") && showIndex !== undefined && projectId && project?.shows?.[showIndex]) {
            store.update((a) => {
                if (a[projectId!]?.shows?.[showIndex]) {
                    a[projectId!].shows[showIndex].layout = id
                    a[projectId!].shows[showIndex].layoutInfo = layoutInfo
                }
                return a
            })
        }
    }
</script>

{#if layouts && !currentShow.reference}
    <div class="arrangements">
        <h4><T id="panel.arrangements" /></h4>

        <div class="list">
            {#each sortedLayouts as layout}
                <SelectElem id="layout" data={layout.id} fill={!edit || edit === layout.id}>
                    <MaterialButton
                        class={isLocked ? "" : "context #layout"}
                        on:click={() => {
                            if (!edit) setLayout(layout.id, { name: layout.name })
                        }}
                        isActive={activeLayout === layout.id}
                    >
                        <HiddenInput value={layout.name} id={"layout_" + layout.id} on:edit={changeName} bind:edit allowEdit={!isLocked} />
                    </MaterialButton>
                </SelectElem>
            {/each}

            <MaterialButton disabled={!hasGroups || isLocked} on:click={addLayout} title="show.new_arrangement" center>
                <Icon id="add" size={1.1} white />
            </MaterialButton>
        </div>
    </div>
{/if}

<style>
    .arrangements {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex-shrink: 0;
        padding: 8px 10px;
        border-bottom: 1px solid var(--primary-lighter);
    }

    h4 {
        margin: 0;
        font-size: 0.75em;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.6;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
    }

    .list :global(button) {
        min-height: 28px;
        padding: 0 0.8em !important;
    }
    .list :global(button.active) {
        background-color: var(--primary-darkest) !important;
    }
</style>
