<script>
    import { createEventDispatcher } from "svelte";
    import { logTypes } from "../stores/logTypes"

    const dispatch = createEventDispatcher()

    function onChange(e) {
        dispatch('typeChange', {
            typeId: e.target.value == 0 ? null : e.target.value
        })
    }

</script>

<select on:change={onChange} class="bg-zinc-100 p-3">
    <option disabled selected>Select Log Type</option>
    <option value="0">All</option>
    {#each $logTypes as type (type.id)}
        <option value={type.id}>{type.name}</option>
    {/each}
</select>