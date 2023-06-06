<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { insertTest } from '../../../../hooks/test_data';

	export let data: PageData;
	export let title: string = data.title || 'test';
	export let questions: Array<string> = data.questions || ['question 1'];
	export let minRange: number = data.minRange || 0;
	export let maxRange: number = data.maxRange || 4;
	export let helpDescription: Array<string> = data.helpDescription || ['help'];
	export let backgroundName: string = data.backgroundName || '';
	export let answerSet: Array<number> = Array(questions.length);
	let openTooltip: boolean = false;
	let description: string = '';

	for (let i = 0; i < questions.length; ++i) answerSet[i] = 0;
</script>

<div id="test-wrapper" class=" flex h-screen w-screen items-center justify-center">
	<img
		class=" absolute -z-10 h-screen w-screen bg-opacity-50 bg-cover blur-sm"
		src={backgroundName}
		alt="Background"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
	/>
	<div
		id="test-container"
		class="flex h-5/6 max-h-fit w-full flex-col items-center justify-between gap-4 rounded-md bg-zinc-600 py-4 sm:h-4/6 sm:w-3/6"
		in:fade={{ delay: 300, duration: 300 }}
	>
		<div id="back-title-help-container" class="flex w-full justify-between px-2">
			<a class="btn w-1/5 text-zinc-300" href="/tests"> back </a>
			<div class="mx-auto text-center font-sans text-4xl font-bold capitalize text-zinc-300">
				{title}
			</div>
			<div
				class={` ${openTooltip && 'tooltip-open'} tooltip tooltip-left w-1/5`}
				data-tip={helpDescription.map((description, index) => index + '.   ' + description + '  ')}
			>
				<div
					class="btn w-full text-zinc-300"
					on:click={() => {
						openTooltip = !openTooltip;
					}}
					on:keypress={() => {
						openTooltip = !openTooltip;
					}}
				>
					help
				</div>
			</div>
		</div>
		<div
			id="question-set-container"
			class="leanscroll flex flex-col gap-4 overflow-auto px-4 py-4 sm:max-h-96"
		>
			{#each questions as question, index}
				<div class="grid grid-cols-2 gap-4">
					<div id={`question-${index}`} class="font-sans text-lg text-zinc-300">
						{index + 1 + '. ' + question}
					</div>
					<div>
						<input
							type="range"
							min={minRange}
							max={maxRange}
							bind:value={answerSet[index]}
							class="range range-sm"
							step={1}
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
				<div class="font-sans text-lg text-zinc-300">Description</div>
				<textarea
					bind:value={description}
					class="textarea-bordered textarea bg-transparent"
					placeholder="..."
				/>
			</div>
		</div>
		<button
			id="save-button"
			class="btn w-1/4 font-semibold text-zinc-300 hover:-translate-y-0.5 hover:shadow-md"
			on:click={() => {
				if (data.session)
					insertTest(data.supabase, answerSet, title, description, data.session.user.id);
			}}>save</button
		>
	</div>
</div>

<style>
	.leanscroll::-webkit-scrollbar {
		width: 4px;
		margin-left: 10px;
	}
	.leanscroll::-webkit-scrollbar-thumb {
		background: slateblue;
		border-radius: 2px;
	}
</style>