<script>
    import LogBookSummary from "./LogBookSummary.svelte"
    import SingleLogModal from "./SingleLogModal.svelte"
    import TypeDropdown from "./TypeDropdown.svelte"
    import {logs} from "../stores/logs"

    let selectedType

    $: logs.refresh(selectedType)

    let logToDisplayId
</script>

<main class="container mx-auto">
    <div class="mb-5">
        <TypeDropdown on:typeChange={e => selectedType = e.detail.typeId}/>
    </div>

    {#each $logs as log (log.id)}
        <LogBookSummary id={log.id} title={log.title} type={log.type.name} date={log.date} on:displayLog={e => logToDisplayId = e.detail.id}/>
    {/each}

    {#if logs.length === 0}
        <p>No logs found</p>
    {/if}

    {#if logToDisplayId}
        <SingleLogModal id={logToDisplayId} />
    {/if}
</main>