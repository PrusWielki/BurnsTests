<script lang="ts">
	export const title: string = 'test';
	export const questions: Array<string> = ['question 1'];
	export const onClick: Function = () => {};
	export const minRange: number = 0;
	export const maxRange: number = 4;
	export const helpDescription: string = '';
</script>

<div class="max-w-xl flex flex-col">
	<div>{title}</div>
	{#each questions as question}
		<div>{question}</div>
	{/each}
</div>
