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
        {
            href: "/ads",
            icon: "fluent:window-ad-20-filled",
            label: "Ad Banners",
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
