<script lang="ts">
    import { link } from "svelte-spa-router";

    export let href: string;
</script>

<a {href} class={$$props.class} use:link>
    <slot />
</a>
