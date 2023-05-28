<script lang="ts">
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	export let data: PageData;
	let { supabase } = data;
</script>

<div
	id="login_main_container"
	class="flex h-screen w-screen flex-col items-center justify-center px-6"
	in:fly={{ y: -600 }}
>
	<button
		class="btn mb-8 text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
		on:click={() => {
			goto('/');
		}}>Back</button
	>
	<form
		action="?/login"
		method="POST"
		class="auth-form flex w-full flex-col items-center justify-center gap-4"
	>
		<div class="grid grid-cols-2">
			<label for="" class="text-center text-slate-300 sm:text-2xl"> Email </label>
			<input type="text" name="email" class="input-bordered input" placeholder="..." />
		</div>
		<div class="grid grid-cols-2">
			<label for="" class="text-center text-slate-300 sm:text-2xl"> Password </label>
			<input type="password" name="password" class="input-bordered input" placeholder="..." />
		</div>
		<button
			type="submit"
			class="btn text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
			>Login</button
		>
	</form>
	<button
		on:click={async () => {
			await supabase.auth.resetPasswordForEmail('hello@example.com', {
				redirectTo: 'https://burns-tests.vercel.app/updatepassword'
			});
		}}
		class="btn mt-6 text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
		>Reset Password</button
	>
</div>
