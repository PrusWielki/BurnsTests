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
	class="dynamic-full-screen flex w-screen flex-col items-center justify-center gap-2 px-6"
	in:fly={{ y: -600 }}
>
	<input
		type="password"
		name="password"
		class="w-3/4 rounded-sm border border-slate-100 bg-transparent px-2 py-2 text-2xl text-slate-100 sm:w-1/4 sm:text-3xl"
		placeholder="Password"
		bind:value={password}
	/>

	<input
		type="password"
		name="repeat-password"
		class="w-3/4 rounded-sm border border-slate-100 bg-transparent px-2 py-2 text-2xl text-slate-100 sm:w-1/4 sm:text-3xl"
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
		class="relative z-10 mt-8 w-3/4 rounded-md bg-slate-500 px-4 py-2 text-2xl font-semibold text-slate-100 transition-transform duration-200 ease-linear hover:-translate-y-1 sm:w-1/4 sm:text-3xl"
		>Reset Password</button
	>
</div>
