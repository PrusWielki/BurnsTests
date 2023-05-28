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
	class="flex h-screen w-screen flex-col items-center justify-center gap-2 px-6"
	in:fly={{ y: -600 }}
>
	<div class="grid grid-cols-2">
		<label for="" class="text-center text-slate-300 sm:text-2xl"> Password </label>
		<input
			type="password"
			name="password"
			class="input-bordered input"
			placeholder="..."
			bind:value={password}
		/>
	</div>
	<div class="grid grid-cols-2">
		<label for="" class="text-center text-slate-300 sm:text-2xl"> Repeat Password </label>
		<input
			type="password"
			name="repeat-password"
			class="input-bordered input"
			placeholder="..."
			bind:value={repeatedPassword}
		/>
	</div>

	<button
		on:click={async () => {
			if (password === repeatedPassword) {
				await supabase.auth.updateUser({ password: repeatedPassword });
				goto('/login');
			}
		}}
		class="btn mt-6 text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
		>Reset Password</button
	>
</div>
