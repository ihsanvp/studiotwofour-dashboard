<script lang="ts">
    import { logout, auth } from "~/stores/auth";
    import {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    } from "@rgossiaux/svelte-headlessui";
    import Icon from "@iconify/svelte";
    import Link from "~/components/link/Link.svelte";
</script>

<Menu as="div" class="relative">
    <MenuButton
        class="py-2 px-4 bg-primary-100 hover:bg-primary-200 text-primary-700 text-sm rounded flex items-center gap-3 justify-center"
    >
        <span>{$auth.user.email}</span>
        <span class="text-2xl"><Icon icon="mdi:chevron-down" /></span>
    </MenuButton>
    <MenuItems
        class="absolute top-11 right-0 flex flex-col bg-white border p-1 rounded w-60"
    >
        <MenuItem>
            <Link
                class="px-3 py-2 flex items-center gap-3 rounded hover:bg-primary-500 hover:text-white text-sm group"
                href="/account-settings"
            >
                <span
                    class="text-xl text-primary-500 group-hover:text-primary-200"
                >
                    <Icon icon="mdi:user-circle-outline" />
                </span>
                <span> Account settings </span>
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
                class="px-3 py-2 flex items-center gap-3 rounded hover:bg-primary-500 hover:text-white text-sm group"
                href="/account-settings"
            >
                <span
                    class="text-xl text-primary-500 group-hover:text-primary-200"
                >
                    <Icon icon="tabler:settings" />
                </span>
                <span> Preferences </span>
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
                class="px-3 py-2 flex items-center gap-3 rounded hover:bg-primary-500 hover:text-white text-sm group"
                href="/account-settings"
            >
                <span
                    class="text-xl text-primary-500 group-hover:text-primary-200"
                >
                    <Icon icon="pajamas:appearance" />
                </span>
                <span> Appearance </span>
            </Link>
        </MenuItem>
        <div class="my-2 w-full border-t" />
        <MenuItem>
            <button
                class="px-3 py-2 w-full flex items-center justify-between rounded hover:bg-red-600 hover:text-white text-sm text-red-600"
                on:click={logout}
            >
                <span>Logout</span>
                <span class="text-xl">
                    <Icon icon="heroicons-outline:logout" />
                </span>
            </button>
        </MenuItem>
    </MenuItems>
</Menu>
