<script lang="ts">
	import { TEST_NAMES, BACKGROUND_NAMES } from '$lib/cms/tests/tests';
	import Option from '$lib/components/option/option.svelte';
	import { fade, fly } from 'svelte/transition';
	import { MEDIA_SM } from '$lib/constants/media_query';

	let windowWidth: number;
	let currentOption: number = 2;
	let scrollX: number = 0;
	let scrollY: number = 0;
	let homeGrid: HTMLElement;
	let scrolling: boolean = false;

	$: if (homeGrid) {
		homeGrid.addEventListener('scrollend', (event) => {
			scrolling = false;
		});
	}

	const onWheel = (event: WheelEvent) => {
		if (!scrolling) {
			if (windowWidth > MEDIA_SM && event.deltaY != 0) {
				if (event.deltaY > 0 && currentOption < TEST_NAMES.length - 1) {
					if (currentOption === 0) currentOption = 3;
					else currentOption += 1;
					let element = document.getElementById(`option-home-wrapper-${currentOption}`);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth' });
						scrolling = true;
					}
				} else if (event.deltaY < 0 && currentOption > 0) {
					currentOption = Math.floor(currentOption / 3);
					let element = document.getElementById(`option-home-wrapper-${currentOption}`);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth' });
						scrolling = true;
					}
				}
			}
		}
	};
	const onScroll = (event: any) => {
		scrollX = event.currentTarget.scrollLeft;
		scrollY = event.currentTarget.scrollTop;
	};
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div id="home-grid-wrapper" class="flex h-screen w-screen justify-center overflow-hidden">
	<div
		id="home-grid"
		class=" carousel-center carousel h-full w-full snap-y flex-col items-center sm:absolute sm:flex-row"
		on:scroll={onScroll}
		on:wheel|passive={onWheel}
		bind:this={homeGrid}
		in:fly={{ y: -screen.height / 2, duration: 500 }}
	>
		{#each TEST_NAMES as testName, index}
			<div
				id={`option-home-wrapper-${index}`}
				class="h-1/3 w-full shrink-0 grow sm:h-full sm:basis-1/3"
			>
				<Option
					{testName}
					backgroundName={BACKGROUND_NAMES[index]}
					navigateTo={`/tests/${testName.toLowerCase()}`}
				/>
			</div>
		{/each}
	</div>
	{#if (windowWidth > MEDIA_SM && scrollX < 200) || (windowWidth < MEDIA_SM && scrollY < 100)}
		<p
			class="absolute bottom-4 font-sans text-xl font-extrabold capitalize sm:text-3xl"
			in:fade={{ duration: 200 }}
		>
			Scroll for more
		</p>
	{/if}
</div>
