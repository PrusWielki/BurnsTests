<script lang="ts">
	import Option from '$lib/components/home/option/option.svelte';
	import { BACKGROUND_NAMES } from '$lib/cms/results/results';
	import { goto } from '$app/navigation';
</script>

<div
	id="results-main-container"
	class="grid h-screen w-screen grid-rows-2 overflow-hidden sm:grid-cols-2 sm:grid-rows-none"
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
		on:click={() => goto('/results/statistics')}
		on:keypress={() => goto('/results/statistics')}
	>
		<Option testName="Statistics" backgroundName={BACKGROUND_NAMES[1]} />
	</div>
</div>
