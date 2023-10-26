<script lang="ts">
	import { TEST_NAMES } from '$lib/cms/tests/tests';
	import { _getTestData } from './+page';
	import { enhance } from '$app/forms';
	import { showNotification } from '$lib/hooks/show-notification';
	import { GENERAL_TEST_DESCRIPTION_HELP, TEST_DESCRIPTION_HELP } from '$lib/cms/tests/description';
	import { fade } from 'svelte/transition';
	import {
		SCORES_MEANING_RANGES,
		SCORES_MEANING_SHORT_DESCRIPTION
	} from '$lib/cms/tests/scores_meaning';
	import { text } from '@sveltejs/kit';
	export let form;
	let modal: HTMLDialogElement;
	let results: HTMLElement;

	let testData: ReturnType<typeof _getTestData>;
	let testName: string | null = 'Choose a test';

	let questionsContainer: HTMLElement;

	const updateTestData = (testName: string | null) => {
		if (testName) testData = _getTestData(testName.toLowerCase());
	};
	const setToast = (state: boolean | undefined) => {
		switch (state) {
			case true:
				showNotification('Saved!', 2000);
				break;
			case false:
				showNotification('Something went wrong!', 2000);
				break;
		}
	};

	function scrollIntoView(id: number) {
		const el = questionsContainer.querySelector('#question-' + (id + 1).toString());
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}

	$: updateTestData(testName);
	$: setToast(form?.success);
	$: results &&
		results.scrollIntoView({
			behavior: 'smooth'
		});
</script>

<section id="test-wrapper" class="w-full h-full bg-base-100">
	<div class="container px-6 py-20 mx-auto flex flex-col items-center w-full">
		<form
			class="flex flex-col items-center w-full max-w-4xl gap-4"
			method="post"
			action="?/saveTest"
			use:enhance={() => {
				return async ({ update }) => {
					update({ reset: false });
				};
			}}
		>
			<select
				name="testName"
				bind:value={testName}
				class="select select-bordered !px-4 select-accent sm:text-2xl text-xl w-full max-w-xs"
			>
				<option disabled selected class="text-center p-0 m-0">Choose a test</option>
				{#each TEST_NAMES as test}
					<option class="text-center p-0 m-0" value={test}>{test}</option>
				{/each}
			</select>
			{#if testData}
				<button
					class="btn btn-outline btn-info"
					type="button"
					on:click={() => {
						modal.showModal();
					}}>instructions</button
				>
				<dialog bind:this={modal} class="modal">
					<div class="modal-box prose prose-lg sm:prose-xl grid sm:leanscroll text-center">
						<h3 class="font-bold text-lg">Instructions</h3>
						<p>
							{GENERAL_TEST_DESCRIPTION_HELP.find((value) => value.test === testName)?.data}
						</p>
						<table
							class="table table-zebra w-fit place-self-center text-center sm:text-xl my-0 sm:my-2"
						>
							<thead>
								<tr>
									<th />
									<th class="sm:text-xl">Intenisty</th>
									<th class="sm:text-xl">Meaning</th><th />
								</tr>
							</thead>
							<tbody>
								{#each TEST_DESCRIPTION_HELP.find((value) => value.test === testName)?.data || '' as text, index}
									<tr><td /><td>{index}</td><td>{text}</td><td /></tr>
								{/each}
							</tbody>
						</table>

						<button
							type="button"
							on:click={() => {
								modal.close();
							}}
							class="btn w-full sm:w-1/2 btn-primary sm:btn-lg justify-self-center">close</button
						>
					</div>
					<form method="dialog" class="modal-backdrop">
						<button type="submit">close</button>
					</form>
				</dialog>
				<div class="w-full" bind:this={questionsContainer}>
					{#each testData.questions as question, index}
						<div class="flex flex-col sm:flex-row items-center justify-center sm:gap-2 w-full">
							<p
								id={`question-${index}`}
								class="sm:w-1/2 py-4 w-full sm:justify-start text-center sm:text-start text-xl sm:text-2xl"
							>
								{index + 1}.{' '}{question}
							</p>
							<div class="sm:w-1/2 w-full sm:justify-end">
								<input
									required
									type="range"
									name={`question-${index}`}
									min={testData.minRange}
									max={testData.maxRange}
									value={0}
									class="range range-accent range-sm sm:range-md"
									step={1}
									disabled={form?.success}
									on:change={() => scrollIntoView(index)}
								/>
								<div class="w-full flex justify-between text-xs px-2">
									{#each Array(testData.maxRange - testData.minRange + 1) as _, number}
										<span>{number}</span>
									{/each}
								</div>
							</div>
						</div>
						<div class="divider"></div>
					{/each}
					<textarea
						class="textarea textarea-bordered w-full text-xl sm:text-2xl"
						name="description"
						placeholder="additional information"
					></textarea>
					<div class="divider"></div>
				</div>
				<button class="btn btn-primary w-full" type="submit" disabled={form?.success}
					>Save answers</button
				>
			{/if}
		</form>
		{#if form?.success}
			<div bind:this={results} class="divider"></div>
			<div in:fade class="prose sm:prose-2xl prose-xl py-8 text-center">
				<h1 class="bg-gradient-to-br bg-clip-text text-transparent from-primary to-85% to-accent">
					Results
				</h1>
				<h2>Your total score:</h2>
				<h2>{form.total}</h2>
				<progress class="progress progress-accent w-full" value={form.total} max="100"></progress>
				<h4>Meaning:</h4>

				{#each SCORES_MEANING_RANGES.find((value) => value.test === testName)?.data || '' as range, index}
					<div class="grid grid-cols-2 [&_p]:my-2">
						<p>{range}</p>
						<p>
							{SCORES_MEANING_SHORT_DESCRIPTION.find((value) => value.test === testName)?.data[
								index
							]}
						</p>
					</div>
					<div class="divider"></div>
				{/each}
			</div>
		{/if}
	</div>
</section>
