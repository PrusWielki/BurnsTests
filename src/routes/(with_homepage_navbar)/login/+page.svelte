<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { BASE_URL } from '$lib/constants/url';
	export let data: PageData;
	export let form;
	let { supabase } = data;
	let email: string;
</script>

<div id="login_main_wrapper" class="my-auto w-full bg-base-100 px-6 py-16 sm:gap-12">
	<div class="flex flex-col w-full items-center gap-3 max-w-xl mx-auto">
		<h1 class="text-center text-2xl font-bold sm:text-3xl mb-3">Welcome Back</h1>
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
		<p>Or</p>
		<button
			class="btn btn-neutral w-fit btn-outline gap-2"
			on:click={() => {
				supabase.auth.signInWithOAuth({
					provider: 'google',
					options: {
						redirectTo: `${BASE_URL}auth/callback`
					}
				});
			}}
		>
			<p
				class="py-1 bg-[linear-gradient(to_right,theme(colors.red.500),theme(colors.yellow.500),theme(colors.green.500),theme(colors.blue.500))] inline-block text-transparent bg-clip-text"
			>
				Login with Google
			</p>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="32"
				height="32"
				viewBox="0 0 48 48"
			>
				<path
					fill="#FFC107"
					d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
				></path><path
					fill="#FF3D00"
					d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
				></path><path
					fill="#4CAF50"
					d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
				></path><path
					fill="#1976D2"
					d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
				></path>
			</svg></button
		>
		{#if form?.error}
			<div class="absolute bottom-20 text-2xl font-semibold text-accent sm:bottom-32 sm:text-3xl">
				{form?.error}
			</div>
		{/if}
	</div>
</div>
