<script lang="ts">
	import { TEST_NAMES } from '$lib/cms/tests/tests';
	import { _getTestData } from './+page';

	let testData: ReturnType<typeof _getTestData>;
	let testName: string | null;
	const updateTestData = (testName: string | null) => {
		if (testName) testData = _getTestData(testName.toLowerCase());
	};
	$: updateTestData(testName);
	$: console.log(testData);
</script>

<div id="test-wrapper" class="w-full h-full bg-base-100">
	<div class="container pt-20 mx-auto flex justify-center">
		<select bind:value={testName} class="select select-bordered sm:text-lg w-full max-w-xs">
			<option disabled selected>Choose a test</option>
			{#each TEST_NAMES as test}
				<option value={test}>{test}</option>
			{/each}
		</select>
	</div>
</div>
