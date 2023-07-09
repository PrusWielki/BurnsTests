<script lang="ts">
	import { TEST_NAMES, BACKGROUND_NAMES } from '$lib/cms/tests/tests';
	import Option from '$lib/components/option/option.svelte';
	import { fade } from 'svelte/transition';

	let windowWidth: number;
	let scrollX: number;
	let scrollY: number;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div id="home-grid-wrapper" class="flex h-screen w-screen justify-center overflow-hidden">
	<div
		id="home-grid"
		class=" carousel-center carousel h-full w-full snap-y flex-col items-center sm:absolute sm:flex-row"
		on:scroll={(event) => {
			scrollX = event.currentTarget.scrollLeft;
			scrollY = event.currentTarget.scrollTop;
		}}
		on:wheel={(event) => {
			if (windowWidth > 640 && event.deltaY != 0) {
				event.currentTarget.scrollTo({
					left: event.currentTarget.scrollLeft + 1.2 * event.deltaY + event.deltaX,
					behavior: 'instant'
				});
			}
		}}
	>
		{#each TEST_NAMES as testName, index}
			<div id="option-home-wrapper" class="h-1/3 w-full shrink-0 grow sm:h-full sm:basis-1/3">
				<Option
					{testName}
					backgroundName={BACKGROUND_NAMES[index]}
					navigateTo={`/tests/${testName.toLowerCase()}`}
				/>
			</div>
		{/each}
	</div>
	{#if (windowWidth > 640 && scrollX < 200) || (windowWidth < 640 && scrollY < 100)}
		<p
			class="absolute bottom-4 font-sans text-xl font-extrabold capitalize sm:text-3xl"
			out:fade={{ duration: 200 }}
			in:fade={{ duration: 200 }}
		>
			Scroll for more
		</p>
	{/if}
</div>
