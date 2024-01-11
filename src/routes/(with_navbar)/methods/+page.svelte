<script lang="ts">
	import { METHODS } from '$lib/cms/methods/main_methods';

	const goodForColorBadgeMap = {
		Anxiety: 'border-primary',
		Depression: 'border-secondary',
		Anger: 'border-accent',
		Addictions: 'border-warning',
		Relationships: 'border-info',
		Happiness: 'border-success'
	};
	// Maybe let's make it a simple list for now with filtering, each method should have some badges corresponding what it is useful for
	// Plus something like 'help me choose' that asks a couple of questions and lists best fitting methods with some descriptions. This can be done via openAI even
</script>

<section class="w-full h-full bg-base-100">
	<div class="container px-6 py-20 mx-auto flex flex-col items-center w-full">
		<h1>filters</h1>
		<p>Click on one of the methods to use it.</p>

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
									class={`rounded-box px-4 py-2 border border-solid sm:text-lg text-base-content ${goodForColorBadgeMap[goodFor]}`}
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
