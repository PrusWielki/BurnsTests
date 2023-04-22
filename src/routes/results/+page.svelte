<script lang="ts">
	import Option from '../../components/home/option/option.svelte';
	import { BACKGROUND_NAMES } from '../../cms/results/results';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
</script>

<div
	id="results-main-container"
	class="grid h-screen w-screen grid-rows-2 overflow-hidden sm:grid-cols-2 sm:grid-rows-none"
>
	<form action="/logout" method="GET" class="fixed left-2 top-2 z-30 sm:left-10 sm:top-10">
		<button
			type="submit"
			class="btn bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
			in:fly={{ y: -screen.height / 2, duration: 1000 }}>logout</button
		>
	</form>
	<button
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="btn fixed right-2 top-2 z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:right-10 sm:top-10 sm:text-2xl"
		on:click={() => goto('/tests')}>Tests</button
	>
	<div
		id="option-wrapper"
		on:click={() => goto('/results/results')}
		on:keypress={() => goto('/results/results')}
	>
		<Option testName="Results" backgroundName={BACKGROUND_NAMES[0]} />
	</div>
	<div
		id="option-wrapper"
		on:click={() => goto('/results/results')}
		on:keypress={() => goto('/results/statistics')}
	>
		<Option testName="Statistics" backgroundName={BACKGROUND_NAMES[1]} />
	</div>
</div>
