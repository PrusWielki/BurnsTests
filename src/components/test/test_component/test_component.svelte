<script lang="ts">
	import { fade } from 'svelte/transition';
	export let title: string = 'test';
	export let questions: Array<string> = ['question 1'];
	export let minRange: number = 0;
	export let maxRange: number = 4;
	// export let helpDescription: string = '';
	export let answerSet: Array<number> = [];
	export let active: boolean = false;
</script>

<div
	id="test-container"
	class="absolute z-10 flex h-full w-1/3 flex-col items-center justify-center gap-4"
	transition:fade={{ delay: 300, duration: 500 }}
>
	<div class="text-center font-sans text-4xl font-bold capitalize text-zinc-400">{title}</div>
	{#each questions as question, index}
		<div class="grid grid-cols-2">
			<div id={`question-${index}`} class="font-sans text-lg text-zinc-300">
				{question}
			</div>
			<div>
				<input
					type="range"
					min={minRange}
					max={maxRange}
					value={answerSet[index]}
					class="range range-sm"
					step={1}
				/>
				<div class="flex w-full justify-between px-2 text-xs">
					{#each Array(maxRange + 1) as _, i}
						<span>{i}</span>
					{/each}
				</div>
			</div>
		</div>
	{/each}
	<button id="save-button" class="btn font-semibold" on:click={() => (active = !active)}
		>save</button
	>
</div>
