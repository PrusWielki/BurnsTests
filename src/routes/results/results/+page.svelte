<script lang="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	export let data: PageData;
	console.log(data);
</script>

<div
	id="main-results-container"
	class="flex h-screen w-screen flex-col items-center justify-center px-12 py-12"
	in:fly={{ y: -screen.height / 2, duration: 1000 }}
>
	<form action="/logout" method="GET" class="fixed left-2 top-2 z-30 sm:left-10 sm:top-10">
		<button
			in:fly={{ y: -screen.height / 2, duration: 1000 }}
			type="submit"
			class="btn bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
			>logout</button
		>
	</form>
	<button
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="btn fixed right-2 top-2 z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:right-10 sm:top-10 sm:text-2xl"
		on:click={() => goto('/results')}>Back</button
	>
	<div
		id="test-result-title-row"
		class="mb-12 grid grid-cols-3 items-center justify-center gap-2 text-center"
	>
		<div class="text-xl text-zinc-300 sm:text-2xl">Type</div>
		<div class="text-xl text-zinc-300 sm:text-2xl">Questions Sum</div>
		<div class="text-xl text-zinc-300 sm:text-2xl">Date</div>
	</div>
	{#if data.testData != null}
		{#each data.testData as testData}
			<div id="test-result" class="grid grid-cols-3 items-center justify-center gap-2 text-center">
				<div class="text-xl text-zinc-300 sm:text-2xl" id="test-name">{testData.type}</div>
				<div class="text-xl text-zinc-300 sm:text-2xl" id="test-sum">{testData.questions_sum}</div>
				<div class="text-xl text-zinc-300 sm:text-2xl" id="test-created">
					{testData.created_at.substring(0, 10)}
				</div>
			</div>
		{/each}
	{/if}
</div>
