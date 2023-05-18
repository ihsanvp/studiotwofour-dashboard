<script lang="ts">
    import Router from "svelte-spa-router";
    import IndexPage from "./pages/IndexPage.svelte";
    import LoginPage from "./pages/LoginPage.svelte";
    import { onMount } from "svelte";
    import { auth } from "~/lib/firebase/firebaseClient";
    import { authStore } from "~/stores/authStore";
    import UsersPage from "./pages/UsersPage.svelte";

    const routes = {
        "/": IndexPage,
        "/users": UsersPage,
        "/login": LoginPage,
    };

    onMount(() =>
        auth.onAuthStateChanged(async (user) => {
            authStore.set({
                isLoading: false,
                user:
                    (user && {
                        id: user.uid,
                        email: user.email as string,
                    }) ||
                    null,
            });
        })
    );
</script>

<Router {routes} />
