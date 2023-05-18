<script lang="ts">
    import DashboardHeader from "./DashboardHeader.svelte";
    import DashboardSidebar from "./DashboardSidebar.svelte";

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

<DashboardHeader />
<DashboardSidebar {links} />
<main class="pt-16 pl-64">
    <slot />
</main>
