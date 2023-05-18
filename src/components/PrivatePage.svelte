<script lang="ts">
    import { replace } from "svelte-spa-router";
    import { authStore } from "~/stores/authStore";

    authStore.subscribe((state) => {
        if (!state.isLoading && !state.user) {
            replace("/login");
        }
    });
</script>

{#if $authStore.user}
    <slot />
{/if}
