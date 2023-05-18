<script>
    import { link } from "svelte-spa-router";
    import PrivatePage from "../components/PrivatePage.svelte";
    import { authHandlers, authStore } from "~/stores/authStore";
</script>

<PrivatePage>
    <h1>Index</h1>
    <a href="/login" use:link>Login</a>
    <button on:click={authHandlers.logout}>Logout</button>
    >
</PrivatePage>
