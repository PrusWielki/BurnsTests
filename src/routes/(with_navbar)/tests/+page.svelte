<script lang="ts">
	import { TEST_NAMES, BACKGROUND_NAMES } from '$lib/cms/tests/tests';
	import Option from '$lib/components/option/option.svelte';
</script>

<div
	id="home-grid"
	class="carousel-center carousel h-screen w-screen snap-y flex-col items-center justify-center px-48 sm:absolute sm:snap-x sm:flex-row sm:gap-5"
>
	{#each TEST_NAMES as testName, index}
		<div class="">
			<Option
				{testName}
				backgroundName={BACKGROUND_NAMES[index]}
				navigateTo={`/tests/${testName.toLowerCase()}`}
			/>
		</div>
	{/each}
</div>

<style>
</style>
