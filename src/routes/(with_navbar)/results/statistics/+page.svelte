<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { getTestDataByDate } from '../../../../lib/hooks/test_data';
	import { Line, Radar } from 'svelte-chartjs';
	import { lineData } from '$lib/cms/results/statistics';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		Filler,
		RadialLinearScale
	} from 'chart.js';
	import { TITLES } from '$lib/cms/tests/titles';
	import { browser } from '$app/environment';
	import chroma from 'chroma-js';

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		Filler,
		Title,

		RadialLinearScale
	);
	export let data: PageData;
	let { supabase } = data;
	type TestDataResponse = Awaited<ReturnType<typeof getTestDataByDate>>;
	type TestDataResponseSuccess = TestDataResponse['data'];

	let testData: TestDataResponseSuccess | undefined;
	let dateFrom: Date = new Date(2023, 1, 10);
	let dateTo: Date = new Date();
	let dataPoints: Array<number> = [];
	let labels: Array<string> = [];
	let type: string = 'Anxiety';

	// Charts Colors
	let textColor: string = '#666';
	let backgroundColor: string = '#fff';

	const getTestData = (dateFrom: Date, dateTo: Date, type: string) => {
		getTestDataByDate(supabase, dateFrom, dateTo).then((response) => {
			testData = response.data;
			testData = testData?.filter((test) => test.type === type);
		});
	};
	const extractDataPoints = (testData: TestDataResponseSuccess | undefined) => {
		dataPoints = [];
		labels = [];
		if (testData)
			testData?.forEach((test) => {
				dataPoints.push(test.questions_sum);
				labels.push(test.created_at.substring(0, 10));
			});
		lineData.datasets[0].data = dataPoints;
		lineData.labels = labels;
	};

	function changeColor() {
		let colorSplit = getComputedStyle(document.documentElement).getPropertyValue('--bc').split(' ');
		textColor = chroma
			.oklch(parseFloat(colorSplit[0]), parseFloat(colorSplit[1]), parseFloat(colorSplit[2]))
			.hex();

		colorSplit = getComputedStyle(document.documentElement).getPropertyValue('--p').split(' ');
		backgroundColor = chroma
			.oklch(parseFloat(colorSplit[0]), parseFloat(colorSplit[1]), parseFloat(colorSplit[2]))
			.hex();
	}
	if (browser) {
		changeColor();
		let observer = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				if (mutation.type === 'attributes') {
					changeColor();
				}
			});
		});
		let documentHtml = document.querySelector('html');
		if (documentHtml)
			observer.observe(documentHtml, {
				attributes: true //configure it to listen to attribute changes
			});
	}
	$: getTestData(dateFrom, dateTo, type);
	$: extractDataPoints(testData);

	const radarData = {
		labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
		datasets: [
			{
				label: 'My First Dataset',
				data: [65, 59, 90, 81, 56, 55, 40]
			}
		]
	};
</script>

<div id="statistics-main-wrapper" class="bg-base-100 h-full w-full">
	<div
		class="flex flex-col items-center px-4 py-20 container mx-auto"
		in:fly={{ y: -screen.height / 2, duration: 500 }}
	>
		<div id="filters-container" class="flex-col items-center justify-center py-2 w-full sm:w-fit">
			<p class="mb-2 text-center text-xl sm:text-2xl">Filters</p>
			<select
				bind:value={type}
				class="select select-bordered !px-8 select-accent sm:text-2xl text-xl w-full text-center sm:text-start sm:w-fit sm:max-w-md"
			>
				{#each TITLES as title}
					<option value={title}>{title}</option>
				{/each}
			</select>
		</div>
		<div class="relative sm:h-96 h-80 w-full" id="line-container">
			<Line
				data={lineData}
				options={{
					responsive: true,
					backgroundColor: backgroundColor,
					scales: {
						y: {
							ticks: { color: textColor }
						},
						x: {
							ticks: { color: textColor }
						}
					},

					maintainAspectRatio: false
				}}
			/>
		</div>
		<!-- <p class="mb-2 mt-6 text-center text-xl sm:text-2xl">Your overall profile</p>
		<div class="relative sm:h-96 h-80 flex justify-center">
			<Radar
				data={radarData}
				options={{
					responsive: true,
					backgroundColor: backgroundColor
				}}
			/>
		</div> -->
	</div>
</div>
