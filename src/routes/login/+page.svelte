<script lang="ts">
	import type { PageData } from './$types';
	import { TITLE } from '$lib/cms/home/home';
	export let data: PageData;
	let { supabase } = data;
	let email: string;
</script>

<a
	id="title-container"
	href="/"
	class="absolute left-12 top-4 cursor-pointer font-sans font-semibold text-slate-100 decoration-wavy hover:text-cyan-300 hover:underline"
>
	{TITLE}
</a>
<a
	id="github-link"
	class="absolute right-12 top-4 cursor-pointer font-extrabold decoration-wavy hover:text-cyan-300 hover:underline"
	href="https://github.com/PrusWielki/BurnsTests"
>
	GitHub
</a>
<div
	id="login_main_container"
	class="flex h-screen w-screen flex-col items-center justify-center bg-zinc-950 px-6"
>
	<form
		id="login-form"
		action="?/login"
		method="POST"
		class="auth-form flex w-full flex-col items-center justify-center gap-4"
	>
		<div id="login-email-grid" class="grid grid-cols-2">
			<label id="email-label" for="email" class="text-center text-2xl text-slate-300 sm:text-3xl">
				Email
			</label>
			<input
				type="text"
				name="email"
				class="input-bordered input"
				bind:value={email}
				placeholder="..."
			/>
		</div>
		<div id="login-password-grid" class="grid grid-cols-2">
			<label
				id="password-label"
				for="password"
				class="text-center text-2xl text-slate-300 sm:text-3xl"
			>
				Password
			</label>
			<input type="password" name="password" class="input-bordered input" placeholder="..." />
		</div>
		<button
			id="submit-button"
			type="submit"
			class=" text-2xl text-slate-100 decoration-wavy transition duration-75 hover:text-cyan-300 hover:underline sm:text-3xl"
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
		class="mt-6 text-2xl text-slate-100 decoration-wavy transition duration-75 hover:text-cyan-300 hover:underline sm:text-3xl"
		>Reset Password</button
	>
</div>
