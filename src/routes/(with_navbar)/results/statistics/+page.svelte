<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { getTestDataByDate } from '../../../../hooks/test_data';
	export let data: PageData;
	let { supabase } = data;
	type TestDataResponse = Awaited<ReturnType<typeof getTestDataByDate>>;
	type TestDataResponseSuccess = TestDataResponse['data'];

	let testData: TestDataResponseSuccess;
	let dateFrom: Date = new Date(2023, 4, 10);
	let dateTo: Date = new Date();

	const getTestData = (dateFrom: Date, dateTo: Date) => {
		getTestDataByDate(supabase, dateFrom, dateTo).then((response) => {
			testData = response.data;
			console.log(testData);
		});
	};
	$: getTestData(dateFrom, dateTo);
</script>

<div
	id="statistics-main-wrapper"
	class="flex h-screen w-screen flex-col items-center justify-center px-4 py-12"
	in:fly={{ y: -screen.height / 2, duration: 1000 }}
/>
<svg width="300" height="100">
	<!-- x axis -->
	{#if testData !== null && testData !== undefined}
		{#each Array(testData.length - 1) as _, index}
			<!-- need to somehow access the next element also here :) and then draw the lines :)-->
			<line
				x1={index * 5}
				y1={testData[index].questions_sum * 5}
				x2={(index + 1) * 5}
				y2={testData[index + 1].questions_sum * 5}
				style="stroke:rgb(255,255,255);stroke-width:2"
			/>
		{/each}
	{/if}
	<g class="x" transform="translate(0,120)">
		<text x="0">0</text>
		<text x="60">2</text>
		<text x="120">4</text>
		<text x="180">6</text>
		<text x="240">8</text>
		<text x="300">10</text>
	</g>
</svg>
