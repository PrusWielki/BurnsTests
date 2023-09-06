<script lang="ts">
	import Option from '$lib/components/option/option.svelte';
	import { BACKGROUND_NAMES } from '$lib/cms/results/results';
	import { fly } from 'svelte/transition';
</script>

<div
	id="results-main-container"
	class="dynamic-full-screen grid w-screen grid-rows-2 overflow-hidden bg-zinc-950 sm:grid-cols-2 sm:grid-rows-none"
	in:fly={{ y: -screen.height / 2, duration: 500 }}
>
	<Option
		id={0}
		testName="Results"
		backgroundName={BACKGROUND_NAMES[0]}
		navigateTo="/results/results"
	/>

	<Option
		id={1}
		testName="Statistics"
		backgroundName={BACKGROUND_NAMES[1]}
		navigateTo="/results/statistics"
	/>
</div>
