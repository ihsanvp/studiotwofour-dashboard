<script lang="ts">
    import DashboardLink from "./DashboardLink.svelte";

    interface Link {
        href: string;
        icon: string;
        label: string;
    }

    export let links: Link[];
</script>

<aside
    class="fixed top-0 left-0 bottom-0 w-64 bg-white z-10 pt-16 border-r border-gray-300"
>
    <div class="p-2 flex flex-col gap-0">
        {#each links as link}
            <DashboardLink href={link.href} icon={link.icon}
                >{link.label}</DashboardLink
            >
        {/each}
    </div>
</aside>
