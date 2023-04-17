<script lang="ts">
	import { fly } from 'svelte/transition';
	export const title: string = 'test';
	export const questions: Array<string> = ['question 1'];
	export const onClick: Function = () => {};
	export const minRange: number = 0;
	export const maxRange: number = 4;
	export const helpDescription: string = '';
</script>

<div
	class=" z-10 flex h-full w-full max-w-xl flex-col items-center justify-center"
	transition:fly={{ y: -screen.height / 2, duration: 1000, delay: 1000 }}
>
	<div>{title}</div>
	{#each questions as question}
		<div class="text-white">{question}</div>
		<button class="btn">jk</button>
	{/each}
</div>
