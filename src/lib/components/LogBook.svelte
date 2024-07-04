<script>
    import { getLogs } from "../requests/logRequests"
    import LogBookSummary from "./LogBookSummary.svelte"
    import SingleLogModal from "./SingleLogModal.svelte"
    import TypeDropdown from "./TypeDropdown.svelte"

    let selectedType
    $: response = getLogs(selectedType ?? null)

    let logToDisplayId
</script>

<main class="container mx-auto">
    <div class="mb-5">
        <TypeDropdown on:typeChange={e => selectedType = e.detail.typeId}/>
    </div>
    {#await response}
        Loading...
    {:then logs} 
        {#each logs.data as log (log.id)}
            <LogBookSummary id={log.id} title={log.title} type={log.type.name} date={log.date} on:displayLog={e => logToDisplayId = e.detail.id}/>
        {/each}

        {#if logs.data.length === 0}
            <p>No logs found</p>
        {/if}
    {/await}

    {#if logToDisplayId}
        <SingleLogModal id={logToDisplayId} />
    {/if}
</main>