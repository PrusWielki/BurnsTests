<script lang="ts">
	import Option from '../../components/home/option/option.svelte';
	import { BACKGROUND_NAMES } from '../../cms/results/results';
	import { goto } from '$app/navigation';
</script>

<div
	id="results-main-container"
	class="grid h-screen w-screen grid-rows-2 overflow-hidden sm:grid-cols-2 sm:grid-rows-none"
>
	<button
		class="btn fixed left-2 top-2 z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:left-10 sm:top-10 sm:text-2xl"
		on:click={() => goto('/tests')}>Tests</button
	>
	<Option testName="Results" backgroundName={BACKGROUND_NAMES[0]} />
	<Option testName="Statistics" backgroundName={BACKGROUND_NAMES[1]} />
</div>
