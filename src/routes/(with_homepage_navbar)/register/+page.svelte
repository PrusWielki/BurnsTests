<script lang="ts">
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
	export let form;
</script>

<div
	id="register_main_container"
	class="dynamic-full-screen flex w-full flex-col items-center justify-center gap-8 bg-base-100 px-6 sm:gap-12"
>
	<h1 class="text-center text-2xl font-bold sm:text-3xl">Glad to see You</h1>
	<form
		id="register-form"
		action="?/register"
		method="POST"
		class="flex w-full flex-col items-center justify-center gap-4 sm:gap-8"
		in:fade={{ duration: 200 }}
		use:enhance
	>
		<input
			type="text"
			name="email"
			class="w-3/4 input input-bordered sm:w-1/4"
			placeholder="Email"
		/>

		<input
			type="password"
			name="password"
			class="w-3/4 input input-bordered sm:w-1/4"
			placeholder="Password"
		/>
		<input
			type="password"
			name="passwordRepeated"
			class="w-3/4 input input-bordered sm:w-1/4"
			placeholder="Repeat Password"
		/>
		<button id="submit-button" type="submit" class="w-3/4 sm:w-1/4 btn btn-neutral">
			Register</button
		>
	</form>
	{#if form?.error}
		<div class="absolute bottom-20 text-lg font-semibold text-accent sm:bottom-32 sm:text-3xl">
			{form?.error}
		</div>
	{/if}
</div>
