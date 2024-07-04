<script>
    import LogBookSummary from "./LogBookSummary.svelte"
    import SingleLogModal from "./SingleLogModal.svelte"
    import TypeDropdown from "./TypeDropdown.svelte"
    import NewLogModal from "./NewLogModal.svelte"
    import {logs} from "../stores/logs"

    let selectedType
    let addingLog = false

    $: logs.refresh(selectedType)

    let logToDisplayId

    function closeNewLogModal() {
        addingLog = false
        logs.refresh(selectedType)
    }
</script>

<main class="container mx-auto">
    <div class="flex justify-between mb-5">
        <TypeDropdown on:typeChange={e => selectedType = e.detail.typeId}/>
        <button on:click={() => addingLog = true}>New Log</button>
    </div>

    {#each $logs as log (log.id)}
        <LogBookSummary id={log.id} title={log.title} type={log.type.name} date={log.date} on:displayLog={e => logToDisplayId = e.detail.id}/>
    {/each}

    {#if $logs.length === 0}
        <p>No logs found</p>
    {/if}

    {#if logToDisplayId}
        <SingleLogModal id={logToDisplayId} />
    {/if}

    {#if addingLog}
        <NewLogModal on:logAdded={closeNewLogModal} />
    {/if}
</main>