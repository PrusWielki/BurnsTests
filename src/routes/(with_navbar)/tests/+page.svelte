<script lang="ts">
	import { TEST_NAMES, BACKGROUND_NAMES } from '$lib/cms/tests/tests';
	import Option from '$lib/components/option/option.svelte';
</script>

<div
	id="home-grid"
	class="grid h-screen w-screen grid-rows-3 overflow-hidden sm:grid-cols-3 sm:grid-rows-none"
>
	{#each TEST_NAMES as testName, index}
		<Option
			{testName}
			backgroundName={BACKGROUND_NAMES[index]}
			navigateTo={`/tests/${testName.toLowerCase()}`}
		/>
	{/each}
</div>
