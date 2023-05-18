<script lang="ts">
    import { link, location } from "svelte-spa-router";
    import Icon from "@iconify/svelte";

    export let icon: string;
    export let href: string;

    $: isActive = $location == href;
</script>

<a
    class="flex w-full p-3 hover:bg-sky-100 text-sm rounded gap-5 items-center border border-white"
    class:active={isActive}
    {href}
    use:link
>
    <span class="text-blue-600 text-xl">
        <Icon {icon} />
    </span>
    <span>
        <slot />
    </span>
</a>

<style>
    .active {
        @apply bg-blue-50 border border-blue-300 z-10;
    }
</style>
