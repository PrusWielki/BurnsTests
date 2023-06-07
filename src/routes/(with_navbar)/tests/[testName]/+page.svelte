<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { insertTest } from '../../../../hooks/test_data';
	import { browser } from '$app/environment';

	export let data: PageData;
	export let title: string = data.title || 'test';
	export let questions: Array<string> = data.questions || ['question 1'];
	export let minRange: number = data.minRange || 0;
	export let maxRange: number = data.maxRange || 4;
	export let helpDescription: Array<string> = data.helpDescription || ['help'];
	export let generalHelpDescription = data.generalHelpDescription;
	export let answerSet: Array<number> = Array(questions.length);
	let showResults: boolean = false;
	let description: string = '';
	let scrolled: boolean = false;
	let windowWidth: number;
	let scrollY: number;

	if (browser) {
		window.onscroll = function (e) {
			scrolled = true;
		};
	}
	for (let i = 0; i < questions.length; ++i) answerSet[i] = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} bind:scrollY />
<div
	id="test-page-wrapper"
	class={`flex w-screen flex-col ${
		showResults && 'flex-col-reverse'
	} items-center justify-center sm:flex sm:h-screen sm:grid-rows-none sm:flex-row sm:place-content-start`}
>
	<div
		id="test-wrapper "
		class={`flex h-screen place-items-center bg-zinc-600 transition-all duration-500 ${
			showResults ? '-order-1 sm:w-1/4' : 'sm:w-3/4'
		}`}
	>
		<div
			id="test-container"
			class="flex h-5/6 w-full flex-col items-center gap-4 rounded-md bg-zinc-600 px-1 py-14 sm:gap-12 sm:px-4"
			in:fade={{ duration: 300 }}
		>
			<h1 class="mx-auto text-center font-sans text-4xl font-bold capitalize text-zinc-300">
				{title}
			</h1>
			<div
				id="question-set-container"
				class="leanscroll flex flex-col gap-8 overflow-auto px-4 py-4 sm:w-4/5 sm:gap-16"
			>
				{#each questions as question, index}
					<div class="grid grid-cols-2 gap-4">
						<p id={`question-${index}`} class="font-sans text-lg text-zinc-300">
							{index + 1 + '. ' + question}
						</p>
						<div>
							<input
								type="range"
								id={`${index}`}
								min={minRange}
								max={maxRange}
								bind:value={answerSet[index]}
								class="range range-sm"
								step={1}
								disabled={showResults}
							/>
							<div class="flex w-full justify-between px-2 text-xs">
								{#each Array(maxRange + 1) as _, i}
									<span class="text-zinc-300">{i}</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
				<div id="description-container" class="grid grid-cols-2 gap-4">
					<p class="font-sans text-lg text-zinc-300">Description</p>
					<textarea
						bind:value={description}
						class="textarea-bordered textarea bg-transparent"
						placeholder="..."
					/>
				</div>
			</div>
			<button
				id="save-button"
				class="btn w-3/4 font-semibold text-zinc-300 hover:-translate-y-0.5 hover:shadow-md sm:w-1/4"
				disabled={showResults}
				on:click={() => {
					if (data.session) {
						// insertTest(data.supabase, answerSet, title, description, data.session.user.id);
						showResults = true;
					}
				}}>save</button
			>
			{#if scrollY < 200 && window.innerWidth < 640}
				<p
					class="absolute bottom-4 font-sans text-xl font-extrabold capitalize text-zinc-300"
					out:fade={{ duration: 500 }}
					in:fade={{ duration: 500 }}
				>
					Scroll for more
				</p>
			{/if}
		</div>
	</div>
	<div
		id="prose-wrapper"
		class={`leanscroll flex h-screen items-center  overflow-auto px-4 transition-all duration-500 ${
			showResults ? 'order-1 sm:w-3/4' : 'sm:w-1/4'
		} `}
	>
		<article
			class={`prose-lg text-center text-zinc-300 sm:prose-xl ${
				showResults && 'sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2'
			}`}
			in:fade={{ duration: 300 }}
		>
			{#if showResults}
				<div id="results-prose-container" in:fade={{ duration: 300 }}>
					<h1>Total Score</h1>
					<h3>{answerSet.reduce((a, b) => a + b, 0)}</h3>
					<h1>Meaning of the score</h1>
					{#each helpDescription as description, index}
						{index}. {description} <br />
					{/each}
				</div>
			{:else}
				<div id="results-prose-container">
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

<style>
	.leanscroll::-webkit-scrollbar {
		width: 4px;
		margin-left: 10px;
	}
	.leanscroll::-webkit-scrollbar-thumb {
		background: #d4d4d8;
		border-radius: 2px;
	}
</style>
