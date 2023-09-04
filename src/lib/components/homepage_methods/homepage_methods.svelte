<script>
	import { METHODS } from '$lib/cms/home/methods';
</script>

{#each METHODS as method, index}
	<div
		id={`section-${index + 1}`}
		class="flex shrink-0 snap-start items-center justify-center bg-zinc-950 pb-24 pt-6 sm:h-full sm:basis-full sm:py-0"
	>
		<div
			id="cbt-method-main-container"
			class="z-20 flex h-full w-full items-center justify-center px-4"
		>
			<div
				id="cbt-article-container"
				class="prose prose-slate text-center sm:prose-2xl prose-h1:text-slate-100 prose-h3:text-slate-100"
				contenteditable="false"
				bind:innerHTML={method}
			/>
		</div>
	</div>
{/each}
