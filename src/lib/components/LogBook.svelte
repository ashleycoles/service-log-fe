<script>
    import { getLogs } from "../requests/logRequests"
    import LogBookSummary from "./LogBookSummary.svelte"
    import SingleLogModal from "./SingleLogModal.svelte"

    const response = getLogs()

    let logToDisplayId
</script>

<main class="container mx-auto">
    {#await response}
        Loading...
    {:then logs} 
        {#each logs.data as log (log.id)}
            <LogBookSummary id={log.id} title={log.title} type={log.type.name} date={log.date} on:displayLog={e => logToDisplayId = e.detail.id}/>
        {/each}
    {/await}

    {#if logToDisplayId}
        <SingleLogModal id={logToDisplayId} />
    {/if}
</main>