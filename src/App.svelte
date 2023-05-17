<script lang="ts">
    import Router from "svelte-spa-router";
    import IndexPage from "./pages/IndexPage.svelte";
    import LoginPage from "./pages/LoginPage.svelte";
    import PrivatePage from "./components/PrivatePage.svelte";
    import { isLoggedIn } from "./stores/test";
    import { onMount } from "svelte";

    const routes = {
        "/": IndexPage,
        "/login": LoginPage,
    };

    onMount(() => {
        setTimeout(() => {
            console.log("run");
            isLoggedIn.set(false);
        }, 3000);
    });
</script>

<Router {routes} />
