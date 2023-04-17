<script lang="ts">
	import { TEST_NAMES, BACKGROUND_NAMES } from '../../../cms/home/home';
	import Option from '../option/option.svelte';
	let active: Array<boolean> = [false, false, false];
</script>

<div id="home-grid" class="grid h-screen w-screen grid-rows-3 sm:grid-cols-3 sm:grid-rows-none">
	{#each TEST_NAMES as testName, index}
		<Option bind:active={active[index]} {testName} backgroundName={BACKGROUND_NAMES[index]} />
	{/each}
</div>
