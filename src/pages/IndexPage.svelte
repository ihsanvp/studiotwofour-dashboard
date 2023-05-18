<script>
    import { link } from "svelte-spa-router";
    import PrivatePage from "../components/PrivatePage.svelte";
    import { authHandlers } from "~/stores/authStore";
    import DashboardLayout from "~/components/DashboardLayout.svelte";
</script>

<PrivatePage>
    <DashboardLayout>
        <h1>Index</h1>
        <a href="/login" use:link>Login</a>
        <button on:click={authHandlers.logout}>Logout</button>
        <div>Check Deployment</div>
    </DashboardLayout>
</PrivatePage>
