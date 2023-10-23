<script lang="ts">
	import { getPagination } from '../../../../lib/hooks/pagination';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { getTestsData } from '../../../../lib/hooks/test_data';
	import { TITLES } from '$lib/cms/tests/titles';
	export let data: PageData;
	type TestDataResponse = Awaited<ReturnType<typeof getTestsData>>;
	type TestDataResponseSuccess = TestDataResponse['data'];

	let { testData, supabase } = data;
	let page: number = 0;
	let type: string = 'All';
	let paginationResult: { from: number; to: number };
	let filteredTestData: TestDataResponseSuccess | undefined;
	let returnedTestData: TestDataResponseSuccess | undefined = testData;

	const updateTestsData = (from: number, to: number) => {
		if (from !== 0) {
			getTestsData(from, to, supabase).then((result) => {
				if (testData !== null && result.data !== null) {
					returnedTestData = result.data;
					testData = testData.concat(result.data);
				}
			});
		}
	};

	const filterTestData = (type: string, testData: TestDataResponseSuccess) => {
		if (type !== 'All') filteredTestData = testData?.filter((test) => test.type === type && test);
		else filteredTestData = testData;
	};

	$: paginationResult = getPagination(page);
	$: updateTestsData(paginationResult.from, paginationResult.to);
	$: filterTestData(type, testData);
</script>

<div class="bg-gray-700">
	<div
		id="main-results-wrapper"
		class="dynamic-full-screen flex w-screen flex-col items-center justify-center px-4 py-12"
		in:fly={{ y: -screen.height / 2, duration: 500 }}
	>
		<div id="filters-container" class="flex-col items-center justify-center py-2">
			<p class="mb-2 text-center text-xl sm:text-2xl text-slate-100">Filters</p>
			<select
				bind:value={type}
				class=" bg-gray-700 text-slate-100 border border-slate-100 rounded-md px-2 py-2 text-lg sm:text-xl"
			>
				<option value="All">All</option>
				{#each TITLES as title}
					<option value={title}>{title}</option>
				{/each}
			</select>
		</div>
		{#if filteredTestData != null}
			<div
				id="test-result-title-row"
				class=" mb-6 grid text-slate-100 w-full grid-cols-3 items-center justify-center gap-2 border-b-[1px] text-center md:w-1/2"
			>
				<h1 class="text-xl sm:text-2xl">Type</h1>
				<h1 class="text-xl sm:text-2xl">Questions Sum</h1>
				<h1 class="text-xl sm:text-2xl">Date</h1>
			</div>
			<div
				id="test-result-container"
				class="leanscroll text-slate-100 flex max-h-96 w-full flex-col gap-3 divide-y-[1px] overflow-auto md:w-1/2"
			>
				{#each filteredTestData as test}
					<div
						id="test-result"
						class="grid w-full grid-cols-3 items-center justify-center gap-2 text-center"
					>
						<p class="text-xl sm:text-2xl" id="test-name">{test.type}</p>
						<p class="text-xl sm:text-2xl" id="test-sum">{test.questions_sum}</p>
						<p class="text-xl sm:text-2xl" id="test-created">
							{test.created_at.substring(0, 10)}
						</p>
					</div>
				{/each}
			</div>
			{#if returnedTestData && returnedTestData.length >= paginationResult.to - paginationResult.from + 1}
				<button
					class="mt-2 bg-zinc-950 py-2 px-4 rounded-md hover:-translate-y-1 text-slate-100"
					on:click={() => {
						page++;
					}}>show more</button
				>
			{/if}
		{/if}
	</div>
</div>
