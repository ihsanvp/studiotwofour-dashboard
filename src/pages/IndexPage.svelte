<script>
    import { link } from "svelte-spa-router";
    import PrivatePage from "../components/PrivatePage.svelte";
</script>

<PrivatePage>
    <h1>Index</h1>
    <a href="/login" use:link>Login</a>
</PrivatePage>
