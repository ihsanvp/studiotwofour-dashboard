<script lang="ts">
    import { link, location } from "svelte-spa-router";
    import Icon from "@iconify/svelte";

    export let icon: string;
    export let href: string;

    $: isActive = $location == href;
</script>

<a
    class="flex w-full p-3 hover:bg-primary-100 text-sm rounded gap-5 items-center border border-white text-primary-900"
    class:active={isActive}
    {href}
    use:link
>
    <span class="text-primary-600 text-xl">
        <Icon {icon} />
    </span>
    <span>
        <slot />
    </span>
</a>

<style>
    .active {
        @apply bg-primary-50 border border-primary-300 z-10 font-bold text-primary-900;
    }
</style>
