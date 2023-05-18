<script lang="ts">
    import Gaurd from "../gaurd/Gaurd.svelte";
    import Header from "../header/Header.svelte";
    import Sidebar from "../sidebar/Sidebar.svelte";
    import cx from "classnames";

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
        {
            href: "/assets",
            icon: "tabler:folders",
            label: "Assets",
        },
    ];
</script>

<Gaurd redirect="/login">
    <Header />
    <Sidebar {links} />
    <main
        class={cx("pt-16 pl-64", {
            "pr-96": $$slots.right,
        })}
    >
        <slot />
    </main>
    {#if $$slots.right}
        <aside
            class="fixed right-0 bottom-0 top-16 border-l border-gray-300 w-96"
        >
            <slot name="right" />
        </aside>
    {/if}
</Gaurd>
