<script lang="ts">
	import { METHODS } from '$lib/cms/methods/main_methods';

	const goodForColorBadgeMap = {
		Anxiety: 'border-blue-800',
		Depression: 'border-white-800',
		Anger: 'border-red-800',
		Addictions: 'border-green-800',
		Relationships: 'border-pink-800',
		Happiness: 'border-yellow-800'
	};
	// Maybe let's make it a simple list for now with filtering, each method should have some badges corresponding what it is useful for
	// Plus something like 'help me choose' that asks a couple of questions and lists best fitting methods with some descriptions. This can be done via openAI even
</script>

<section class="w-full h-full bg-base-100">
	<div class="container px-6 py-20 mx-auto flex flex-col items-center w-full">
		<h1>filters</h1>

		<div class="mt-6 flex flex-col items-center w-full">
			<div
				class="grid grid-cols-2 items-center text-center w-full odd:bg-base-200 even:bg-base-100 py-4"
			>
				<h1 class="sm:text-2xl font-bold">Method</h1>
				<h1 class="sm:text-2xl font-bold">Good For</h1>
			</div>
			<div class="divider my-0 w-full h-[2px]" />
			{#each METHODS as method}
				<div class="even:bg-base-200 odd:bg-base-100 w-full">
					<div class="grid grid-cols-2 gap-1 items-center text-center w-full py-4">
						<h2
							class="sm:text-xl font-semibold decoration-wavy transition duration-75 hover:text-accent hover:underline cursor-pointer"
						>
							{method.name}
						</h2>
						<div
							class="flex flex-row overflow-auto sm:flex-wrap gap-2 sm:justify-center w-full leanscroll"
						>
							{#each method.goodFor as goodFor}
								<p
									class={`rounded-xl border border-solid p-2 sm:text-lg ${goodForColorBadgeMap[goodFor]}`}
								>
									{goodFor}
								</p>
							{/each}
						</div>
					</div>
					<div class="divider my-0 w-full h-[2px]" />
				</div>
			{/each}
		</div>
	</div>
</section>
