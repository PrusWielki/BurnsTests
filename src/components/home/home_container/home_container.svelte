<script lang="ts">
	import { TEST_NAMES, BACKGROUND_NAMES } from '../../../cms/home/home';
	import { QUESTION_SET } from '../../../cms/tests/questions';
	import { TITLES } from '../../../cms/tests/titles';
	import { MAX_RANGES, MIN_RANGES } from '../../../cms/tests/ranges';
	import { TEST_DESCRIPTION_HELP } from '../../../cms/tests/description';
	import Option from '../option/option.svelte';
	import TestComponent from '../../test/test_component/test_component.svelte';

	let active: Array<boolean> = [false, false, false];
	let activeIndex: number = 0;
	const checkIfActive = (active: Array<boolean>) => {
		for (let i = 0; i < active.length; i++) {
			if (active[i] === true) {
				console.log('tru');
				activeIndex = i;
				return true;
			}
		}
		return false;
	};
	$: console.log(active);
</script>

<div
	id="home-grid"
	class="grid h-screen w-screen grid-rows-3 overflow-hidden sm:grid-cols-3 sm:grid-rows-none"
>
	{#if !checkIfActive(active)}
		{#each TEST_NAMES as testName, index}
			<div id="option-container" class="grid grid-cols-1 grid-rows-1">
				<Option bind:active={active[index]} {testName} backgroundName={BACKGROUND_NAMES[index]} />
			</div>
		{/each}
	{:else}
		<Option
			bind:active={active[activeIndex]}
			testName={TEST_NAMES[activeIndex]}
			backgroundName={BACKGROUND_NAMES[activeIndex]}
		/>
		<TestComponent
			bind:active={active[activeIndex]}
			questions={QUESTION_SET[activeIndex]}
			title={TITLES[activeIndex]}
			maxRange={MAX_RANGES[activeIndex]}
			minRange={MIN_RANGES[activeIndex]}
			helpDescription={TEST_DESCRIPTION_HELP[activeIndex]}
		/>
	{/if}
</div>
