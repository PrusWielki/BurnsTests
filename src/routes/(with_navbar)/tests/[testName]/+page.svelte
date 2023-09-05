<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	import { insertTest } from '../../../../hooks/test_data';
	import { browser } from '$app/environment';
	import { MEDIA_SM } from '$lib/constants/media_query';

	export let data: PageData;
	export let title: string = data.title || 'test';
	export let questions: Array<string> = data.questions || ['question 1'];
	export let minRange: number = data.minRange || 0;
	export let maxRange: number = data.maxRange || 4;
	export let helpDescription: Array<string> = data.helpDescription || ['help'];
	export let generalHelpDescription = data.generalHelpDescription;
	export let answerSet: Array<number> = Array(questions.length);
	export let scoresMeaningRanges: Array<string> = data.scoresMeaningRanges;
	export let scoresMeaningShortDescription: Array<string> = data.scoresMeaningShortDescription;
	let showResults: boolean = false;
	let description: string = '';
	let windowWidth: number;
	let scrollY: number = 0;
	let questionsContainer: HTMLElement;

	for (let i = 0; i < questions.length; ++i) answerSet[i] = 0;

	function scrollIntoView(id: number) {
		const el = questionsContainer.querySelector('#question-' + (id + 1).toString());
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}

	const onScroll = (event: any) => {
		scrollY = event.currentTarget.scrollTop;
	};
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div
	id="test-page-wrapper"
	class={`flex w-screen flex-col ${
		showResults && 'flex-col-reverse'
	}   dynamic-full-screen snap-y snap-mandatory overflow-auto sm:flex sm:grid-rows-none sm:flex-row sm:place-content-start`}
	on:scroll={onScroll}
>
	<div
		id="test-wrapper "
		class={`dynamic-full-screen flex snap-start items-center justify-center bg-zinc-600 px-1 py-14 transition-all duration-500 sm:px-4 ${
			showResults ? '-order-1 sm:w-2/6' : 'sm:w-4/6'
		}`}
	>
		<div
			id="test-container"
			class="flex h-5/6 w-fit flex-col items-center gap-4 rounded-md bg-zinc-600 sm:w-full sm:gap-12"
			in:fade={{ duration: 300 }}
		>
			<h1 class=" text-center font-sans text-4xl font-bold capitalize text-slate-100">
				{title}
			</h1>
			<div
				id="question-set-container"
				bind:this={questionsContainer}
				class="leanscroll flex flex-col gap-8 overflow-auto px-4 py-4 sm:w-4/5 sm:gap-16"
			>
				{#each questions as question, index}
					<div class="grid grid-cols-2 gap-4">
						<p id={`question-${index}`} class="font-sans text-lg text-slate-100">
							{index + 1 + '. ' + question}
						</p>
						<div>
							<input
								type="range"
								id={`${index}`}
								min={minRange}
								max={maxRange}
								bind:value={answerSet[index]}
								class=""
								step={1}
								disabled={showResults}
								on:change={() => scrollIntoView(index)}
							/>
							<div class="flex w-full justify-between px-2 text-xs">
								{#each Array(maxRange + 1) as _, i}
									<span class="text-slate-100">{i}</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
				<div id="description-container" class="grid grid-cols-2 gap-4">
					<p class="font-sans text-lg">Description</p>
					<textarea
						bind:value={description}
						class="textarea-bordered textarea bg-transparent"
						placeholder="..."
					/>
				</div>
			</div>
			<button
				id="save-button"
				class="btn w-3/4 font-semibold hover:-translate-y-0.5 hover:shadow-md sm:w-1/4"
				disabled={showResults}
				on:click={() => {
					if (data.session) {
						insertTest(data.supabase, answerSet, title, description, data.session.user.id);
						showResults = true;
						document.body.scrollIntoView();
					}
				}}>save</button
			>
			{#if scrollY < 1 && windowWidth < MEDIA_SM}
				<p
					class="absolute bottom-4 font-sans text-xl font-extrabold capitalize"
					in:fade={{ duration: 500 }}
				>
					Scroll for more
				</p>
			{/if}
		</div>
	</div>
	<div
		id="prose-wrapper"
		class={` dynamic-full-screen flex snap-start  items-center px-1 py-6 transition-all duration-500 ${
			showResults ? 'order-1 sm:w-4/6' : 'sm:w-2/6'
		} `}
	>
		<article
			class={`flex h-full items-center pb-6 pt-14 text-center sm:py-14`}
			in:fade={{ duration: 300 }}
		>
			{#if showResults}
				<div
					class="leanscroll prose prose-xl flex h-full flex-col overflow-auto px-4 text-zinc-200 sm:h-fit"
					id="results-prose-container "
					in:fade={{ duration: 300 }}
				>
					<h2>Total Score</h2>
					<h3>{answerSet.reduce((a, b) => a + b, 0)}</h3>
					<h2>Meaning of the score</h2>
					{#each scoresMeaningRanges as scoreMeaningRange, index}
						{scoreMeaningRange}. {scoresMeaningShortDescription[index]}<br />
					{/each}
				</div>
			{:else}
				<div
					class=" leanscroll prose prose-xl flex h-full flex-col overflow-auto px-4 text-zinc-200 sm:block sm:h-fit"
					id="help-prose-container"
				>
					<h1>Help</h1>
					<p>
						{generalHelpDescription}
					</p>
					<h3>Meaning of the scale:</h3>
					<p>
						{#each helpDescription as description, index}
							{index}. {description} <br />
						{/each}
					</p>
				</div>
			{/if}
		</article>
	</div>
</div>
