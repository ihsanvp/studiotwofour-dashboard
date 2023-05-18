<script lang="ts">
    import DashboardLink from "./DashboardLink.svelte";

    const links = [
        {
            href: "/",
            icon: "tabler:chart-pie",
            label: "Overview",
        },
        {
            href: "/users",
            icon: "tabler:users",
            label: "Users",
        },
    ];
</script>

<nav
    class="fixed top-0 left-0 right-0 h-16 border-b border-gray-300 bg-white z-20"
>
    content
</nav>
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
<main class="pt-16 pl-64">
    <slot />
</main>
