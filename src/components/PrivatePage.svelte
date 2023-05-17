<script lang="ts">
    import { replace } from "svelte-spa-router";
    import { isLoggedIn } from "../stores/test";

    isLoggedIn.subscribe((state) => {
        console.log(state);
        if (!state) {
            replace("/login");
        }
    });
</script>

{#if $isLoggedIn}
    <slot />
{/if}
