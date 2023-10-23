<script lang="ts">
	import { TEST_NAMES } from '$lib/cms/tests/tests';
	import { _getTestData } from './+page';

	let testData: ReturnType<typeof _getTestData>;
	let testName: string | null = 'Choose a test';
	const updateTestData = (testName: string | null) => {
		if (testName) testData = _getTestData(testName.toLowerCase());
	};
	$: updateTestData(testName);

	// 1. Write an server action to save tests
	// 2. Add some help modal
	// 3. Auto scroll on select click
</script>

<section id="test-wrapper" class="w-full h-full bg-base-100">
	<div class="container px-6 py-20 mx-auto flex flex-col items-center gap-8 w-full">
		<select
			bind:value={testName}
			class="select select-bordered !px-4 select-accent sm:text-2xl w-full max-w-xs"
		>
			<option disabled selected class="text-center p-0 m-0">Choose a test</option>
			{#each TEST_NAMES as test}
				<option class="text-center p-0 m-0" value={test}>{test}</option>
			{/each}
		</select>
		{#if testData}
			<form class="flex flex-col items-center w-full max-w-4xl">
				{#each testData.questions as question, index}
					<div class="flex flex-col sm:flex-row items-center justify-center sm:gap-2 w-full">
						<p
							class="sm:w-1/2 py-4 w-full sm:justify-start text-center sm:text-start text-xl sm:text-2xl"
						>
							{index + 1}.{' '}{question}
						</p>
						<div class="sm:w-1/2 w-full sm:justify-end">
							<input
								required
								type="range"
								min={testData.minRange}
								max={testData.maxRange}
								value="25"
								class="range range-accent range-sm sm:range-md"
								step={1}
							/>
							<div class="w-full flex justify-between text-xs px-2">
								{#each Array(testData.maxRange - testData.minRange + 1) as _, number}
									<span>{number + 1}</span>
								{/each}
							</div>
						</div>
					</div>
					<div class="divider"></div>
				{/each}
				<textarea class="textarea textarea-bordered w-full" placeholder="additional information"
				></textarea>
				<div class="divider"></div>
				<button class="btn btn-primary w-full" type="submit">Save answers</button>
			</form>
		{/if}
	</div>
</section>
