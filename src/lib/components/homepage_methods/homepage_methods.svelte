<script>
	import { METHODS } from '$lib/cms/home/methods';
</script>

<div class=" pb-10 flex flex-col items-center gap-4 mx-auto">
	<h1 class="text-2xl sm:text-4xl 2xl:text-5xl font-bold">Approaches</h1>
	<p class=" text-lg sm:text-xl [text-wrap:balance] text-center">
		We have collected the best of the best approaches to mental health so that You can reach Your
		feeling good goals from the comfort of your home
	</p>
</div>
{#each METHODS as method, index}
	<div
		id={`section-${index + 1}`}
		class="flex shrink-0 snap-start items-center justify-center bg-base-100 pb-24 pt-6 sm:h-full sm:basis-full"
	>
		<div
			id="cbt-method-main-container"
			class="z-20 flex h-full w-full items-center justify-center px-4"
		>
			<div
				id="cbt-article-container"
				class="prose prose-slate text-center sm:prose-xl prose-h2:font-extrabold"
				contenteditable="false"
				bind:innerHTML={method}
			/>
		</div>
	</div>
{/each}
