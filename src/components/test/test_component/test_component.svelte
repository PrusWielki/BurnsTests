<script lang="ts">
	export const title: string = 'test';
	export const questions: Array<string> = ['question 1'];
	export const onClick: Function = () => {};
	export const minRange: number = 0;
	export const maxRange: number = 4;
	export const helpDescription: string = '';
	// Do something like that: animate the cards on some kind of onunload, dont render tests beforehand, add animation from below
</script>

<div class="flex h-full w-full max-w-xl flex-col items-center justify-center">
	<div>{title}</div>
	{#each questions as question}
		<div class="text-white">{question}</div>
	{/each}
</div>
