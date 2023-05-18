<script lang="ts">
    import Gaurd from "../gaurd/Gaurd.svelte";
    import Header from "../header/Header.svelte";
    import Sidebar from "../sidebar/Sidebar.svelte";

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

<Gaurd redirect="/login">
    <Header />
    <Sidebar {links} />
    <main class="pt-16 pl-64">
        <slot />
    </main>
</Gaurd>
