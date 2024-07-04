<script>
    export let image
    const baseUrl = 'http://localhost:8000/images/'
</script>

<img class="max-h-64 max-w-full" src={`${baseUrl}${image}`} alt="" />