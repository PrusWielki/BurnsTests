<script lang="ts">
	import { TITLE } from '$lib/cms/home/home';
	import { fade } from 'svelte/transition';
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
	id="register_main_container"
	class="flex h-screen w-screen flex-col items-center justify-center bg-zinc-950 px-6"
>
	<form
		id="register-form"
		action="?/register"
		method="POST"
		class="auth-form flex w-full flex-col items-center justify-center gap-4"
		in:fade={{ duration: 200 }}
	>
		<div class="grid grid-cols-2" id="register-email-grid">
			<label
				id="register-email-label"
				for="email"
				class="text-center text-2xl text-slate-100 sm:text-3xl"
			>
				Email
			</label>
			<input
				type="text"
				name="email"
				class="input-bordered input rounded-sm bg-transparent"
				placeholder="..."
			/>
		</div>
		<div class="grid grid-cols-2" id="register-password-grid">
			<label
				id="register-password-label"
				for="password"
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
			id="register-submit-button"
			type="submit"
			class=" group relative z-10 mt-8 text-2xl font-semibold text-slate-100 decoration-wavy transition duration-75 hover:text-cyan-300 hover:underline sm:text-3xl"
			><div
				id="button-glow"
				class="absolute -inset-2/3 rounded-full bg-gradient-radial from-cyan-500 opacity-5 blur-xl transition-all duration-1000 group-hover:-inset-full group-hover:opacity-20 group-hover:duration-500"
			/>
			Register</button
		>
	</form>
</div>
