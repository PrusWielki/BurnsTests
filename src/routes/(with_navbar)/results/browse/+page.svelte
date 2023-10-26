<script lang="ts">
	import { getPagination } from '$lib/hooks/pagination';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import type { getTestsData } from '$lib/hooks/test_data';
	import { TITLES } from '$lib/cms/tests/titles';
	import { browser } from '$app/environment';
	export let data: PageData;
	type TestDataResponse = Awaited<ReturnType<typeof getTestsData>>;
	type TestDataResponseSuccess = TestDataResponse['data'];

	let { testData } = data;
	let page: number = 0;
	let type: string = 'All';
	let paginationResult: { from: number; to: number };
	let filteredTestData: TestDataResponseSuccess | undefined;
	let returnedTestData: TestDataResponseSuccess | undefined = testData;
	let fetching: boolean = false;
	let resultsContainer: HTMLElement | undefined = undefined;
	let scrollY: number = 0;

	if (browser) {
		window.addEventListener('scroll', () => {
			if (
				!fetching &&
				resultsContainer?.scrollHeight &&
				scrollY > resultsContainer?.scrollHeight - 1000
			) {
				fetching = true;
				page++;
			}
		});
	}

	const updateTestsData = async (from: number, to: number) => {
		if (from !== 0) {
			await fetch(`/api/tests?from=${from}&to=${to}`, { method: 'GET' }).then((result) => {
				result.json().then((resultData) => {
					returnedTestData = resultData.data.data;
					if (testData) testData = testData.concat(resultData.data.data);
					fetching = false;
				});
			});
		}
	};

	const filterTestData = (type: string, testData: TestDataResponseSuccess) => {
		if (type !== 'All') filteredTestData = testData?.filter((test) => test.type === type && test);
		else filteredTestData = testData;
	};

	$: paginationResult = getPagination(page, 20);
	$: updateTestsData(paginationResult.from, paginationResult.to);
	$: filterTestData(type, testData);
</script>

<svelte:window bind:scrollY />
<section bind:this={resultsContainer} class="bg-base-100">
	<div
		id="main-results-wrapper"
		class="flex w-screen flex-col items-center justify-center container mx-auto px-4 py-20"
		in:fly={{ y: -screen.height / 2, duration: 500 }}
	>
		<div id="filters-container" class="flex flex-col items-center justify-center py-2 w-full">
			<p class="mb-2 text-center text-xl sm:text-2xl font-semibold">Filters</p>
			<select
				bind:value={type}
				class="select select-bordered !px-4 select-accent sm:text-2xl text-xl w-full max-w-sm"
			>
				<option disabled selected class="text-center p-0 m-0">Choose a test</option>
				<option class="text-center p-0 m-0" value="All">All</option>
				{#each TITLES as title}
					<option class="text-center p-0 m-0" value={title}>{title}</option>
				{/each}
			</select>
		</div>
		{#if filteredTestData != null}
			<div
				class="flex flex-col divide-y-[1px] divide-neutral-focus w-full sm:text-2xl text-xl mt-6"
			>
				<div
					class="grid [&_p]:font-semibold grid-cols-[1fr_0.5fr_1fr] items-center lg:grid-cols-[1.5fr_1fr_0.8fr_1fr_1.5fr] w-full justify-center text-center odd:bg-base-200 even:bg-base-100 py-4"
				>
					<div class="lg:block hidden" />
					<p>Type</p>
					<p>Questions Sum</p>
					<p>Date</p>
					<div class="lg:block hidden" />
				</div>

				{#each filteredTestData as test}
					<div
						class="grid grid-cols-[1fr_0.5fr_1fr] items-center lg:grid-cols-[1.5fr_1fr_0.8fr_1fr_1.5fr] w-full justify-center text-center odd:bg-base-200 even:bg-base-100 py-4"
					>
						<div class="lg:block hidden" />
						<p>{test.type}</p>
						<p>{test.questions_sum}</p>
						<p>{test.created_at.substring(0, 10)}</p>
						<div class="lg:block hidden" />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
