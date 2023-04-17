<script lang="ts">
	import { fade } from 'svelte/transition';
	export const title: string = 'test';
	export const questions: Array<string> = ['question 1'];
	export const onClick: Function = () => {};
	export const minRange: number = 0;
	export const maxRange: number = 4;
	export const helpDescription: string = '';
</script>

<div
	class="absolute z-10 flex h-full w-1/3 flex-col items-center justify-center"
	transition:fade={{ delay: 300, duration: 500 }}
>
	<div>{title}</div>
	{#each questions as question}
		<div class="text-white">{question}</div>
		<button class="btn">jk</button>
	{/each}
</div>
