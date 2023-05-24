<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { getTestDataByDate } from '../../../../hooks/test_data';
	export let data: PageData;
	let { supabase } = data;
	type TestDataResponse = Awaited<ReturnType<typeof getTestDataByDate>>;
	type TestDataResponseSuccess = TestDataResponse['data'];

	let testData: TestDataResponseSuccess;
	let dateFrom: Date = new Date(1995, 11, 17);
	let dateTo: Date = new Date();

	$: getTestDataByDate(supabase, dateFrom, dateTo).then((response) => {
		testData = response.data;
	});
</script>

<div
	id="statistics-main-wrapper"
	class="flex h-screen w-screen flex-col items-center justify-center px-4 py-12"
	in:fly={{ y: -screen.height / 2, duration: 1000 }}
/>
<svg width="300" height="100">
	<!-- x axis -->
	{#if testData !== null}
		{#each testData as test}
			<!-- need to somehow access the next element also here :) and then draw the lines :)-->
			<line />
		{/each}
	{/if}
	<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
	<g class="x" transform="translate(0,120)">
		<text x="0">0</text>
		<text x="60">2</text>
		<text x="120">4</text>
		<text x="180">6</text>
		<text x="240">8</text>
		<text x="300">10</text>
	</g>

	<!-- y axis -->
	<line x1="0" x2="0" y1="0" y2="100" />
	<g class="y" transform="translate(-10,0)">
		<text y="100">0</text>
		<text y="50">50</text>
		<text y="0">100</text>
	</g>
</svg>
