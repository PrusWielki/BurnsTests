<script lang="ts">
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	export let data: PageData;
	let { supabase } = data;
	let password: string;
	let repeatedPassword: string;
</script>

<div
	id="login_main_container"
	class="dynamic-full-screen flex w-full flex-col items-center justify-center gap-8 bg-base-100 px-6 sm:gap-12"
	in:fly={{ y: -600 }}
>
	<input
		type="password"
		name="password"
		class="w-3/4 input input-bordered sm:w-1/4"
		placeholder="Password"
		bind:value={password}
	/>

	<input
		type="password"
		name="repeat-password"
		class="w-3/4 input input-bordered sm:w-1/4"
		placeholder="Repeat Password"
		bind:value={repeatedPassword}
	/>

	<button
		on:click={async () => {
			if (password === repeatedPassword) {
				await supabase.auth.updateUser({ password: repeatedPassword });
				goto('/login');
			}
		}}
		class="w-3/4 sm:w-1/4 btn btn-neutral">Reset Password</button
	>
</div>
