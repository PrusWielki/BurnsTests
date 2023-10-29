<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { getTestDataByDate } from '../../../../lib/hooks/test_data';
	import { Line } from 'svelte-chartjs';
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
		Filler
	} from 'chart.js';
	import { TITLES } from '$lib/cms/tests/titles';
	import { browser } from '$app/environment';

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		Filler
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
	let color: string = '#666';

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
	function hslToHex(h: number, s: number, l: number) {
		l /= 100;
		const a = (s * Math.min(l, 1 - l)) / 100;
		const f = (n: number) => {
			const k = (n + h / 30) % 12;
			const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
			return Math.round(255 * color)
				.toString(16)
				.padStart(2, '0');
		};
		return `#${f(0)}${f(8)}${f(4)}`;
	}

	function changeColor() {
		color = getComputedStyle(document.documentElement).getPropertyValue('--bc');
		let splitHSL = color.split(' ');
		color = hslToHex(
			+splitHSL[0],
			+splitHSL[1].slice(0, splitHSL[1].length - 1),
			+splitHSL[2].slice(0, splitHSL[2].length - 1)
		);
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
</script>

<div class="bg-base-100 h-full w-screen">
	<div
		id="statistics-main-wrapper"
		class="flex flex-col items-center px-4 py-20"
		in:fly={{ y: -screen.height / 2, duration: 500 }}
	>
		<div id="filters-container" class="flex-col items-center justify-center py-2">
			<p class="mb-2 text-center text-xl sm:text-2xl">Filters</p>
			<select
				bind:value={type}
				class="select select-bordered !px-4 select-accent sm:text-2xl text-xl w-full max-w-sm"
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
					color: color,
					scales: {
						y: {
							ticks: { color: color }
						},
						x: {
							ticks: { color: color }
						}
					},

					maintainAspectRatio: false
				}}
			/>
		</div>
	</div>
</div>
