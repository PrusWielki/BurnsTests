<script lang="ts">
	import { fade } from 'svelte/transition';
	import { supabase } from '../../../database/supabaseClient';
	import type { PageData } from './$types';

	export let data: PageData;

	export let title: string = 'test';
	export let questions: Array<string> = ['question 1'];
	export let minRange: number = 0;
	export let maxRange: number = 4;
	export let helpDescription: Array<string> = ['help'];
	export let answerSet: Array<number> = [];
	export let active: boolean = false;
	let openTooltip: boolean = false;
</script>

<div
	id="test-wrapper"
	class="absolute z-10 flex h-full w-screen items-center justify-center"
	transition:fade={{ delay: 300, duration: 500 }}
>
	<div
		id="test-container"
		class="flex h-4/6 max-h-fit w-full flex-col items-center justify-between gap-4 rounded-md bg-zinc-600 py-4 sm:w-3/6"
	>
		<div id="back-title-help-container" class="flex w-full justify-between px-2">
			<div
				class="btn w-1/5 text-zinc-300"
				on:click={() => {
					active = !active;
				}}
				on:keypress={() => {
					active = !active;
				}}
			>
				back
			</div>
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
			class="leanscroll flex max-h-96 flex-col gap-4 overflow-auto px-4 py-4"
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
				<textarea class="textarea-bordered textarea bg-transparent" placeholder="..." />
			</div>
		</div>
		<button
			id="save-button"
			class="btn w-1/4 font-semibold text-zinc-300 hover:-translate-y-0.5 hover:shadow-md"
			on:click={async () => {
				const { error } = await data.supabase.from('Tests').insert({ questions: answerSet });
				if (error) console.log(error);
				active = !active;
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
