<script lang="ts">
    import { push, replace as replaceRedirect } from "svelte-spa-router";

    export let path: string;
    export let replace = false;

    if (replace) {
        replaceRedirect(path);
    } else {
        push(path);
    }
</script>
