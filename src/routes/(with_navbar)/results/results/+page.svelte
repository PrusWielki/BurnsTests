<script lang="ts">
	import { getPagination } from '../../../../hooks/pagination';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;

	let { testData, supabase } = data;
	let page: number = 0;
	let type: string = 'All';
	let paginationResult: { from: number; to: number };
	$: paginationResult = getPagination(page);

	const getTestsData = async (from: number, to: number) => {
		const { data } = await supabase
			.from('Tests')
			.select()
			.order('created_at', { ascending: false })
			.range(from, to);
		return data;
	};
	type TestDataResponse = Awaited<ReturnType<typeof getTestsData>>;
	// type MoviesResponseSuccess = TestDataResponse['data'];
	let filteredTestData: TestDataResponse | undefined;
	const updateTestsData = (from: number, to: number) => {
		if (from !== 0) {
			getTestsData(from, to).then((result) => {
				if (testData !== null && result !== null) {
					testData = testData.concat(result);
				}
			});
		}
	};
	const filterTestData = (type: string, testData: TestDataResponse) => {
		if (type !== 'All') filteredTestData = testData?.filter((test) => test.type === type && test);
		else filteredTestData = testData;
	};
	$: updateTestsData(paginationResult.from, paginationResult.to);
	$: filterTestData(type, testData);
</script>

<div
	id="main-results-wrapper"
	class="flex h-screen w-screen flex-col items-center justify-center px-4 py-12"
	in:fly={{ y: -screen.height / 2, duration: 1000 }}
>
	<div id="filters-container" class="flex-col items-center justify-center py-2">
		<p class="text-center text-xl text-zinc-300 sm:text-2xl">Filters</p>
		<select bind:value={type} class="select-bordered select">
			<option value="All">All</option>
			<option value="Depression">Depression</option>
			<option value="Anxiety">Anxiety</option>
			<option value="Relationships">Relationships</option>
		</select>
	</div>
	{#if filteredTestData != null}
		<div
			id="test-result-title-row"
			class=" mb-12 grid w-full grid-cols-3 items-center justify-center gap-2 text-center md:w-1/2"
		>
			<h1 class="text-xl text-zinc-300 sm:text-2xl">Type</h1>
			<h1 class="text-xl text-zinc-300 sm:text-2xl">Questions Sum</h1>
			<h1 class="text-xl text-zinc-300 sm:text-2xl">Date</h1>
		</div>
		<div
			id="test-result-container"
			class="leanscroll flex max-h-96 w-full flex-col overflow-auto md:w-1/2"
		>
			{#each filteredTestData as test}
				<div
					id="test-result"
					class="grid w-full grid-cols-3 items-center justify-center gap-2 text-center"
				>
					<p class="text-xl text-zinc-300 sm:text-2xl" id="test-name">{test.type}</p>
					<p class="text-xl text-zinc-300 sm:text-2xl" id="test-sum">{test.questions_sum}</p>
					<p class="text-xl text-zinc-300 sm:text-2xl" id="test-created">
						{test.created_at.substring(0, 10)}
					</p>
				</div>
			{/each}
		</div>
		<button
			class="btn mt-2"
			on:click={() => {
				page++;
			}}>show more</button
		>
	{/if}
</div>

<style>
	.leanscroll::-webkit-scrollbar {
		width: 4px;
		margin-left: 10px;
	}
	.leanscroll::-webkit-scrollbar-thumb {
		background: slateblue;
		border-radius: 2px;
	}
</style>
