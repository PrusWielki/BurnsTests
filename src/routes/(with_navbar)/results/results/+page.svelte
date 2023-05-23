<script lang="ts">
	import { getPagination } from '../../../../hooks/pagination';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	export let data: PageData;
	let { testData, supabase } = data;
	let page: number = 0;
	let paginationResult: { from: number; to: number };
	$: paginationResult = getPagination(page);
	const getTestsData = async (from: number, to: number) => {
		const { data } = await supabase
			.from('Tests')
			.select()
			.order('created_at', { ascending: false })
			.range(from, to);
		return data;
	};
	const updateTestsData = (from: number, to: number) => {
		if (from !== 0) {
			getTestsData(from, to).then((result) => {
				if (testData !== null && result !== null) {
					testData = testData.concat(result);
				}
			});
		}
	};
	$: updateTestsData(paginationResult.from, paginationResult.to);
</script>

<div
	id="main-results-wrapper"
	class="flex h-screen w-screen flex-col items-center justify-center px-4 py-12"
	in:fly={{ y: -screen.height / 2, duration: 1000 }}
>
	{#if testData != null}
		<div
			id="test-result-title-row"
			class=" mb-12 grid w-full grid-cols-3 items-center justify-center gap-2 text-center md:w-1/2"
		>
			<div class="text-xl text-zinc-300 sm:text-2xl">Type</div>
			<div class="text-xl text-zinc-300 sm:text-2xl">Questions Sum</div>
			<div class="text-xl text-zinc-300 sm:text-2xl">Date</div>
		</div>
		<div
			id="test-result-container"
			class="leanscroll flex max-h-96 w-full flex-col overflow-auto md:w-1/2"
		>
			{#each testData as test}
				<div
					id="test-result"
					class="grid w-full grid-cols-3 items-center justify-center gap-2 text-center"
				>
					<div class="text-xl text-zinc-300 sm:text-2xl" id="test-name">{test.type}</div>
					<div class="text-xl text-zinc-300 sm:text-2xl" id="test-sum">{test.questions_sum}</div>
					<div class="text-xl text-zinc-300 sm:text-2xl" id="test-created">
						{test.created_at.substring(0, 10)}
					</div>
				</div>
			{/each}
		</div>
		<button
			class="btn mt-2"
			on:click={() => {
				page++;
			}}>show more</button
		>
	{/if}
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
