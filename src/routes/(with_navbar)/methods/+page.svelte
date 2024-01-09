<script lang="ts">
	import { METHODS } from '$lib/cms/methods/main_methods';

	const goodForColorBadgeMap = {
		Anxiety: 'border-blue-800',
		Depression: 'border-white-800',
		Anger: 'border-red-800',
		Addictions: 'border-green-800',
		Relationships: 'border-pink-800',
		Happines: 'border-yellow-800'
	};
	// Maybe let's make it a simple list for now with filtering, each method should have some badges corresponding what it is useful for
	// Plus something like 'help me choose' that asks a couple of questions and lists best fitting methods with some descriptions. This can be done via openAI even
</script>

<section class="w-full h-full bg-base-100">
	<div class="container px-6 py-20 mx-auto flex flex-col items-center w-full">
		<div>filters</div>
		{#each METHODS as method}
			<div class="grid grid-cols-2 items-center text-center w-full">
				<h1>Method</h1>
				<h1>Good For</h1>
			</div>
			<div class="mt-6 grid grid-cols-2 items-center text-center w-full">
				<h1>{method.name}</h1>
				<div class="flex flex-row overflow-auto sm:flex-wrap gap-2 sm:justify-center w-full px-1">
					{#each method.goodFor as goodFor}
						<div class={`rounded-xl border border-solid p-2 ${goodForColorBadgeMap[goodFor]}`}>
							{goodFor}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
