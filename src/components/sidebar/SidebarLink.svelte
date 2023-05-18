<script lang="ts">
    import { link, location } from "svelte-spa-router";
    import Icon from "@iconify/svelte";
    import cx from "classnames";

    export let icon: string;
    export let href: string;

    $: isActive = $location == href;
</script>

<a
    class={cx(
        "flex w-full p-3 hover:bg-primary-100 text-sm rounded gap-5 items-center border border-white text-primary-900",
        {
            "!bg-primary-50 !border-primary-300 !z-10 !font-bold !text-primary-900":
                isActive,
        }
    )}
    {href}
    use:link
>
    <span class={cx("text-primary-600 text-xl")}>
        <Icon {icon} />
    </span>
    <span>
        <slot />
    </span>
</a>
