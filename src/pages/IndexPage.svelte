<script>
    import { link } from "svelte-spa-router";
    import { logout } from "~/stores/auth";
    import Dashboard from "~/components/dashboard/Dashboard.svelte";
</script>

<Dashboard>
    <h1>Index</h1>
    <a href="/login" use:link>Login</a>
    <button on:click={logout}>Logout</button>
    <div>Check Deployment</div>
</Dashboard>
