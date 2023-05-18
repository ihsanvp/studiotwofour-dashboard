<script lang="ts">
    import { authHandlers, authStore } from "~/stores/authStore";
    import { push } from "svelte-spa-router";
    import logoImg from "~/assets/images/logo.png";

    let email: string;
    let password: string;

    async function onSubmit() {
        if (email && password) {
            try {
                await authHandlers.login(email, password);
            } catch (err) {
                console.log(err);
            }
        }
        if ($authStore.user) {
            push("/");
        }
    }
</script>

<nav
    class="fixed top-0 left-0 right-0 h-16 border-b border-gray-300 bg-white z-20 flex"
>
    <div class="h-full flex items-center justify-center gap-5 px-5">
        <img class="w-10 h-10 object-contain" src={logoImg} alt="logo" />
        <div class="font-semibold text-lg text-primary-900">Studiotwofour</div>
    </div>
</nav>
<main class="pt-16">
    <div class="container mx-auto py-60">
        <div class="flex flex-col gap-8">
            <h1 class="text-4xl mb-3 font-semibold text-primary-950">
                Login to Studiotwofour
            </h1>
            <form
                class="flex flex-col w-full max-w-2xl gap-5"
                on:submit|preventDefault={onSubmit}
            >
                <label
                    class="flex w-full flex-col text-gray-700 font-normal gap-2"
                    for="email"
                >
                    <span>Email</span>
                    <input
                        class="w-full border border-primary-900 p-3 rounded active:outline-primary-500 focus:outline-primary-500"
                        type="email"
                        id="email"
                        bind:value={email}
                    />
                </label>
                <label
                    class="flex w-full flex-col text-gray-700 font-normal gap-2"
                    for="password"
                >
                    <span>Password</span>
                    <input
                        class="w-full border border-primary-900 p-3 rounded active:outline-primary-500 focus:outline-primary-500"
                        type="password"
                        id="password"
                        bind:value={password}
                    />
                </label>
                <button
                    class="w-80 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded cursor-pointer font-semibold mt-3 active:outline-primary-700 focus:outline-primary-700"
                    type="submit">Log In</button
                >
            </form>
        </div>
    </div>
</main>
