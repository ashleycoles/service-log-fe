<script>
    import { createEventDispatcher } from "svelte";
    import Button from "../atoms/Button.svelte";
    import HostedImage from "../atoms/HostedImage.svelte";
    import { getLog } from "../requests/logRequests";

    const dispatch = createEventDispatcher()

    export let id;

    const response = getLog(id);
</script>

<div class="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-zinc-500/75">
    <div class="bg-white w-3/4">
        {#await response}
            Loading...
        {:then log}
            <div class="flex justify-between items-center px-5 py-2 mb-5 border-b-2 bg-zinc-200">
                <h1 class="text-3xl">
                    <span class="font-bold">{log.data.type.name}</span> - {log.data.title}
                </h1>
                <div>
                    <span class="text-xl">{log.data.date}</span>
                    <Button text="Close" action={() => dispatch('close')} colour='wat' />
                </div>
            </div>

            <div class="px-10 mb-10">
                {#if log.data.notes}
                    <p class="mb-10">{log.data.notes}</p>
                {/if}

                <div class="flex flex-wrap">
                    {#each log.data.images as image (image.id)}
                        <HostedImage image={image.file} />
                    {/each}
                </div>
            </div>
        {/await}
    </div>
</div>
