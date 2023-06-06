<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	export let data: PageData;
	let { supabase } = data;
	let email: string;
</script>

<div
	id="login_main_container"
	class="flex h-screen w-screen flex-col items-center justify-center px-6"
	in:fly={{ y: -600 }}
>
	<a
		class="btn mb-8 text-2xl text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-3xl"
		href="/">Back</a
	>
	<form
		action="?/login"
		method="POST"
		class="auth-form flex w-full flex-col items-center justify-center gap-4"
	>
		<div class="grid grid-cols-2">
			<label for="" class="text-center text-2xl text-slate-300 sm:text-3xl"> Email </label>
			<input
				type="text"
				name="email"
				class="input-bordered input"
				bind:value={email}
				placeholder="..."
			/>
		</div>
		<div class="grid grid-cols-2">
			<label for="" class="text-center text-2xl text-slate-300 sm:text-3xl"> Password </label>
			<input type="password" name="password" class="input-bordered input" placeholder="..." />
		</div>
		<button
			type="submit"
			class="btn text-2xl text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-3xl"
			>Login</button
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
		class="btn mt-6 text-2xl text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-3xl"
		>Reset Password</button
	>
</div>
