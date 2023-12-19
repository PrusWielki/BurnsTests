<script lang="ts">
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { BASE_URL } from '$lib/constants/url.js';
	export let form;
	export let data;
	let { supabase } = data;
</script>

<div id="register_main_wrapper" class="my-auto w-full bg-base-100 px-6 py-16 sm:gap-12">
	<div class="flex flex-col w-full items-center gap-6 max-w-xl mx-auto">
		<h1 class="text-center text-2xl font-bold sm:text-3xl">Glad to see You</h1>
		<h2 class="text-center font-semibold max-w-md [text-wrap:balance]">
			Just a few more steps before You can start feeling better
		</h2>
		<form
			id="register-form"
			action="?/register"
			method="POST"
			class="flex w-full flex-col items-center justify-center gap-4 sm:gap-8"
			in:fade={{ duration: 200 }}
			use:enhance
		>
			<input
				type="text"
				name="email"
				class="w-3/4 input input-bordered border-base-content md:w-1/2 lg:w-2/3"
				placeholder="Email i.e. newuser@mail.com"
			/>

			<input
				type="password"
				name="password"
				class="w-3/4 input input-bordered md:w-1/2 lg:w-2/3 border-base-content"
				placeholder="Password i.e. secretpassword123"
			/>
			<input
				type="password"
				name="passwordRepeated"
				class="w-3/4 input input-bordered md:w-1/2 lg:w-2/3 border-base-content"
				placeholder="Repeat Password"
			/>
			<button
				id="submit-button"
				type="submit"
				class="w-3/4 md:w-1/2 lg:w-2/3 btn btn-primary text-xl"
			>
				Register</button
			>
		</form>
		<button
			on:click={() => {
				supabase.auth.signInWithOAuth({
					provider: 'google'
				});
			}}>Sign Up with Google</button
		>
		{#if form?.error}
			<div class="absolute bottom-20 text-lg font-semibold text-accent sm:bottom-32 sm:text-3xl">
				{form?.error}
			</div>
		{/if}
	</div>
</div>
