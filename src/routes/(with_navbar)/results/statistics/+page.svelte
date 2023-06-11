<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { getTestDataByDate } from '../../../../hooks/test_data';
	import { Line } from 'svelte-chartjs';
	import { lineData } from './data.js';

	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
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
		console.log(dataPoints);
		lineData.datasets[0].data = dataPoints;
		lineData.labels = labels;
	};
	$: getTestData(dateFrom, dateTo, type);
	$: extractDataPoints(testData);
</script>

<div
	id="statistics-main-wrapper"
	class="flex h-screen w-screen flex-col items-center justify-center px-4 py-12"
	in:fly={{ y: -screen.height / 2, duration: 1000 }}
>
	<div id="filters-container" class="flex-col items-center justify-center py-2">
		<p class="mb-2 text-center text-xl sm:text-2xl">Filters</p>
		<select bind:value={type} class="select-bordered select">
			<option value="Depression">Depression</option>
			<option value="Anxiety">Anxiety</option>
			<option value="Relationships">Relationships</option>
		</select>
	</div>
	<Line data={lineData} options={{ responsive: true }} />
</div>
