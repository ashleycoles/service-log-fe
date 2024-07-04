<script>
    export let action, text, colour = 'yellow'
    const validColours = ['green', 'yellow', 'red', 'zinc']

    if (!validColours.includes(colour)) {
        colour = 'zinc'
    }
</script>

<button class="bg-{colour}-400 hover:bg-{colour}-500 rounded px-2 py-1" on:click={action}>{text}</button>