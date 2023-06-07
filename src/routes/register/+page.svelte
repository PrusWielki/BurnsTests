<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div
	id="register_main_container"
	class="flex h-screen w-screen flex-col items-center justify-center px-6"
	in:fly={{ y: -600 }}
>
	<a
		href="/"
		class="btn mb-8 text-2xl text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-3xl"
		>Back</a
	>
	<form
		id="register-form"
		action="?/register"
		method="POST"
		class="auth-form flex w-full flex-col items-center justify-center gap-4"
	>
		<div class="grid grid-cols-2" id="register-email-grid">
			<label
				id="register-email-label"
				for="email"
				class="text-center text-2xl text-slate-300 sm:text-3xl"
			>
				Email
			</label>
			<input type="text" name="email" class="input-bordered input" placeholder="..." />
		</div>
		<div class="grid grid-cols-2" id="register-password-grid">
			<label
				id="register-password-label"
				for="password"
				class="text-center text-2xl text-slate-300 sm:text-3xl"
			>
				Password
			</label>
			<input type="password" name="password" class="input-bordered input" placeholder="..." />
		</div>
		<button
			id="register-submit-button"
			type="submit"
			class="btn text-2xl text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-3xl"
			>Register</button
		>
	</form>
</div>
