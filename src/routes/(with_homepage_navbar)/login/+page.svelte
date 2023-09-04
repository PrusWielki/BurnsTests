<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
	export let data: PageData;
	export let form;
	let { supabase } = data;
	let email: string;
</script>

<div
	id="login_main_container"
	class="dynamic-full-screen flex w-screen flex-col items-center justify-center gap-8 bg-zinc-950 px-6 sm:gap-12"
>
	<h1 class="text-center text-2xl font-bold text-slate-100 sm:text-3xl">Welcome Back</h1>
	<form
		id="login-form"
		action="?/login"
		method="POST"
		class="auth-form flex w-full flex-col items-center justify-center gap-4 sm:gap-8"
		in:fade={{ duration: 200 }}
		use:enhance
	>
		<input
			type="text"
			name="email"
			class="w-3/4 rounded-sm border border-slate-100 bg-transparent px-2 py-2 text-2xl text-slate-100 sm:w-1/4 sm:text-3xl"
			bind:value={email}
			placeholder="Email"
		/>

		<input
			type="password"
			name="password"
			class="w-3/4 rounded-sm border border-slate-100 bg-transparent px-2 py-2 text-2xl text-slate-100 sm:w-1/4 sm:text-3xl"
			placeholder="Password"
		/>

		<button
			id="submit-button"
			type="submit"
			class="relative z-10 mt-8 w-3/4 rounded-md bg-slate-500 px-4 py-2 text-2xl font-semibold text-slate-100 transition-transform duration-200 ease-linear hover:-translate-y-1 sm:w-1/4 sm:text-3xl"
		>
			Login</button
		>
		<button
			on:click={async () => {
				if (!email) alert('Please enter email');
				else {
					await supabase.auth.resetPasswordForEmail(email, {
						redirectTo: 'https://burns-tests.vercel.app/updatepassword'
					});
					alert('Check your email inbox');
				}
			}}
			class="text-lg italic text-slate-100 decoration-wavy transition duration-75 hover:text-cyan-300 hover:underline"
			>Forgot Password?</button
		>
	</form>
	{#if form?.error}
		<div class="absolute bottom-20 text-2xl font-semibold text-cyan-500 sm:bottom-32 sm:text-3xl">
			{form?.error}
		</div>
	{/if}
</div>
