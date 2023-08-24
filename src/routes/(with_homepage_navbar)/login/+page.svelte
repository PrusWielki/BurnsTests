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
	<form
		id="login-form"
		action="?/login"
		method="POST"
		class="auth-form flex w-full flex-col items-center justify-center gap-4"
		in:fade={{ duration: 200 }}
	>
		<div id="login-email-grid" class="grid grid-cols-2">
			<label
				id="email-label"
				for="email-label"
				class="text-center text-2xl text-slate-100 sm:text-3xl"
			>
				Email
			</label>
			<input
				type="text"
				name="email"
				class="input-bordered input rounded-sm bg-transparent"
				bind:value={email}
				placeholder="..."
			/>
		</div>
		<div id="login-password-grid" class="grid grid-cols-2">
			<label
				id="password-label"
				for="password-label"
				class="text-center text-2xl text-slate-100 sm:text-3xl"
			>
				Password
			</label>
			<input
				type="password"
				name="password"
				class="input-bordered input rounded-sm bg-transparent"
				placeholder="..."
			/>
		</div>
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
		>Reset Password</button
	>
	<button
		on:click={async () => {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
				options: {
					queryParams: {
						access_type: 'offline',
						prompt: 'consent'
					},
					redirectTo: 'https://burns-tests.vercel.app/tests/'
				}
			});
		}}
		class="mt-6 text-lg italic text-slate-100 decoration-wavy transition duration-75 hover:text-cyan-300 hover:underline"
	>
		Log in with Google
	</button>
</div>
