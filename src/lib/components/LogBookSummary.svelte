<script>
    import { createEventDispatcher } from "svelte";

    export let id, title, type, date

    const dispatch = createEventDispatcher()

    function displayLog() {
        dispatch('displayLog', {
            id
        })
    }
</script>

<button class="w-full flex justify-between border rounded-sm py-4 px-5 mb-5 bg-zinc-50 " on:click={displayLog}>
    <h3 class="text-xl"><span class="font-bold">{type}</span> - {title}</h3>
    <div>{date}</div>
</button>