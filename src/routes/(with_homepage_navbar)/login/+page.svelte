<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	export let data: PageData;
	let { supabase } = data;
	let email: string;
</script>

<div
	id="login_main_container"
	class="dynamic-full-screen flex w-screen flex-col items-center justify-center bg-zinc-950 px-6"
>
	<div class="">Welcome Back</div>
	<form
		id="login-form"
		action="?/login"
		method="POST"
		class="auth-form flex w-full flex-col items-center justify-center gap-4 sm:gap-8"
		in:fade={{ duration: 200 }}
	>
		<input
			type="text"
			name="email"
			class="rounded-sm border border-slate-100 bg-transparent px-2 py-2 text-2xl text-slate-100 sm:text-3xl"
			bind:value={email}
			placeholder="Email"
		/>

		<input
			type="password"
			name="password"
			class="rounded-sm border border-slate-100 bg-transparent px-2 py-2 text-2xl text-slate-100 sm:text-3xl"
			placeholder="Password"
		/>

		<button
			id="submit-button"
			type="submit"
			class=" group relative z-10 mt-8 text-2xl font-semibold text-slate-100 decoration-wavy transition duration-75 hover:text-cyan-300 hover:underline sm:text-3xl"
			><div
				id="button-glow"
				class="absolute -inset-2/3 rounded-full bg-gradient-radial from-cyan-500 opacity-5 blur-xl transition-all duration-1000 group-hover:-inset-full group-hover:opacity-20 group-hover:duration-500"
			/>
			Login</button
		>
	</form>
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
		class="mt-6 text-lg italic text-slate-100 decoration-wavy transition duration-75 hover:text-cyan-300 hover:underline"
		>Forgot Password?</button
	>
</div>
