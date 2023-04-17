<script lang="ts">
	import { TEST_NAMES, BACKGROUND_NAMES } from '../../../cms/home/home';
	import Option from '../option/option.svelte';
	import TestComponent from '../../test/test_component/test_component.svelte';
	let active: Array<boolean> = [false, false, false];
</script>

<div
	id="home-grid"
	class="grid h-screen w-screen grid-rows-3 overflow-hidden sm:grid-cols-3 sm:grid-rows-none"
>
	{#each TEST_NAMES as testName, index}
		<div id="option-container" class="grid grid-cols-1 grid-rows-1">
			{#if active[index] === false}
				<Option bind:active={active[index]} {testName} backgroundName={BACKGROUND_NAMES[index]} />
			{:else}
				<TestComponent bind:active={active[index]} />
			{/if}
		</div>
	{/each}
</div>
