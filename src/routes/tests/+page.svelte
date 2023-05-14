<script lang="ts">
	import { TEST_NAMES, BACKGROUND_NAMES } from '$lib/cms/tests/tests';
	import { QUESTION_SET } from '$lib/cms/tests/questions';
	import { TITLES } from '$lib/cms/tests/titles';
	import { MAX_RANGES, MIN_RANGES } from '$lib/cms/tests/ranges';
	import { TEST_DESCRIPTION_HELP } from '$lib/cms/tests/description';
	import Option from '$lib/components/home/option/option.svelte';
	import TestComponent from '$lib/components/test/test_component/test_component.svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	export let data: PageData;

	let active: Array<boolean> = [false, false, false];
	let activeIndex: number = 0;
	const checkIfActive = (active: Array<boolean>) => {
		for (let i = 0; i < active.length; i++) {
			if (active[i] === true) {
				activeIndex = i;
				return true;
			}
		}
		return false;
	};
	const onSave = async (answerSet: Array<number>, title: string, description: string) => {
		console.log(data.session);
		if (data.session) {
			const { error } = await data.supabase.from('Tests').insert({
				questions: answerSet,
				user_id: data.session.user.id,
				type: title,
				description: description,
				created_at: new Date(),
				questions_sum: answerSet.reduce((a, b) => a + b, 0)
			});
			if (error) console.log(error);
		}
	};
</script>

<div
	id="home-grid"
	class="grid h-screen w-screen grid-rows-3 overflow-hidden sm:grid-cols-3 sm:grid-rows-none"
>
	<form action="/logout" method="GET" class="fixed left-2 top-2 z-30 sm:left-10 sm:top-10">
		<button
			in:fly={{ y: -screen.height / 2, duration: 1000 }}
			type="submit"
			class="btn bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
			>logout</button
		>
	</form>
	<button
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="btn fixed right-2 top-2 z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:right-10 sm:top-10 sm:text-2xl"
		on:click={() => goto('/results')}>Results</button
	>
	{#if !checkIfActive(active)}
		{#each TEST_NAMES as testName, index}
			<div id="option-container" class="grid grid-cols-1 grid-rows-1">
				<Option
					bind:active={active[index]}
					{testName}
					backgroundName={BACKGROUND_NAMES[index]}
					allowOnClick
				/>
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
			{onSave}
		/>
	{/if}
</div>
