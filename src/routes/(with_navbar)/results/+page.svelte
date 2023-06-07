<script lang="ts">
	import Option from '$lib/components/option/option.svelte';
	import { BACKGROUND_NAMES } from '$lib/cms/results/results';
</script>

<div
	id="results-main-container"
	class="grid h-screen w-screen grid-rows-2 overflow-hidden sm:grid-cols-2 sm:grid-rows-none"
>
	<Option testName="Results" backgroundName={BACKGROUND_NAMES[0]} navigateTo="/results/results" />

	<Option
		testName="Statistics"
		backgroundName={BACKGROUND_NAMES[1]}
		navigateTo="/results/statistics"
	/>
</div>
