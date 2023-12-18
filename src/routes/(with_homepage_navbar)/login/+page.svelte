<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
	export let data: PageData;
	export let form;
	let { supabase } = data;
	let email: string;
</script>

<div id="login_main_wrapper" class="my-auto w-full bg-base-100 px-6 py-16 sm:gap-12">
	<div class="flex flex-col w-full items-center gap-6 max-w-xl mx-auto">
		<h1 class="text-center text-2xl font-bold sm:text-3xl">Welcome Back</h1>
		<form
			id="login-form"
			action="?/login"
			method="POST"
			class="flex w-full flex-col items-center justify-center gap-4 sm:gap-8"
			in:fade={{ duration: 200 }}
			use:enhance
		>
			<input
				type="text"
				name="email"
				class="w-3/4 input border-base-content input-bordered md:w-1/2 lg:w-2/3"
				bind:value={email}
				placeholder="Email"
			/>

			<input
				type="password"
				name="password"
				class="w-3/4 input input-bordered md:w-1/2 border-base-content lg:w-2/3"
				placeholder="Password"
			/>

			<button
				id="submit-button"
				type="submit"
				class="w-3/4 md:w-1/2 lg:w-2/3 btn btn-primary text-xl"
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
				class="text-lg italic decoration-wavy transition duration-75 hover:text-accent hover:underline"
				>Forgot Password?</button
			>
		</form>
		{#if form?.error}
			<div class="absolute bottom-20 text-2xl font-semibold text-accent sm:bottom-32 sm:text-3xl">
				{form?.error}
			</div>
		{/if}
	</div>
</div>
