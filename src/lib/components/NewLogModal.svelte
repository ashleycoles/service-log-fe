<script>
    import { createEventDispatcher } from "svelte";
    import { addLog } from "../requests/logRequests";
    import TypeDropdown from "./TypeDropdown.svelte";
    import Button from "../atoms/Button.svelte";

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
        <div class="flex justify-between items-center px-5 py-2 mb-5 border-b-2 bg-zinc-200">
            <h1 class="text-3xl">Create a new log</h1>
            <Button text="Close" action={() => dispatch('close')} colour='wat' />
        </div>

        <div class="grid grid-cols-2 px-10 mb-10">

            <div class="flex flex-col justify-between">
                <div>
                    <label for="title">Log Title</label>
                    <input class="border p-3" type="text" id="title" bind:value={title} />
                </div>
    
                <div>
                    <label for="types">Select Type</label>
                    <TypeDropdown on:typeChange={e => type = e.detail.typeId} hasAllOption={false} />
                </div>

                <div>
                    <label for="date">Log data</label>
                    <input class="border p-3" type="date" id="date" bind:value={date} />
                </div>

            </div>

            
            <div class="flex flex-col justify-between">
                <div class="mb-4">
                    <label class="block mb-2" for="notes">Notes (optional)</label>
                    <textarea class="border w-full p-3" rows="5" id="notes" bind:value={notes} />
                </div>
    
                <div>
                    <label for="image">Upload an image</label>
                    <input type="file" id="image" multiple on:change={handleFileChange}/>
                </div>
            </div>
          
        </div>

        <div class="flex justify-between items-center px-5 py-2 border-b-2 bg-zinc-200">
            <Button text="Cancel" colour="red" action={() => dispatch('close')} />
            <Button text="Save" colour="green" action={postLog} />
        </div>
    </div>
</div>