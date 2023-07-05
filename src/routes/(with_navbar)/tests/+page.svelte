<script lang="ts">
	import { TEST_NAMES, BACKGROUND_NAMES } from '$lib/cms/tests/tests';
	import Option from '$lib/components/option/option.svelte';
</script>

<div id="home-grid-wrapper" class="overflow-hidden">
	<div id="home-grid" class="flex h-screen w-screen flex-col sm:flex-row">
		{#each TEST_NAMES as testName, index}
			<Option
				{testName}
				backgroundName={BACKGROUND_NAMES[index]}
				navigateTo={`/tests/${testName.toLowerCase()}`}
			/>
		{/each}
	</div>
</div>
