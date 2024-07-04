<script>
    import { createEventDispatcher } from "svelte";
    import { addLog } from "../requests/logRequests";
    import TypeDropdown from "./TypeDropdown.svelte";

    const dispatch = createEventDispatcher()

    let title = ''
    let type = 0
    let notes = ''
    let date = ''
    let images = []

    function handleFileChange(event) {
        images = Array.from(event.target.files);
    }

    async function postLog() {
        try {
            const response = await addLog(title, type, date, notes, images)
            dispatch('logAdded')
        } catch (error) {
            const validationErrors = error.data
        }
    }
</script>
<div class="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-zinc-500/75">
    <div class="bg-white w-3/4">
        <div class="px-5 py-2 mb-5 border-b-2 bg-zinc-200">
            <h1 class="text-3xl">Create a new log</h1>
        </div>

        <div class="px-10 mb-10">
            <label for="title">Log Title</label>
            <input type="text" id="title" bind:value={title} />

            <label for="types">Select Type</label>
            <TypeDropdown on:typeChange={e => type = e.detail.typeId} hasAllOption={false} />

            <label for="notes">Notes (optional)</label>
            <textarea id="notes" bind:value={notes} />

            <label for="date">Log data</label>
            <input type="date" id="date" bind:value={date} />

            <label for="image">Upload an image</label>
            <input type="file" id="image" multiple on:change={handleFileChange}/>
        </div>

        <div class="flex justify-between items-center px-5 py-2 border-b-2 bg-zinc-200">
            <button class="px-2 py-1 rounded bg-red-400">Cancel</button>
            <button class="px-2 py-1 rounded bg-green-400" on:click={postLog}>Save</button>
        </div>
    </div>
</div>