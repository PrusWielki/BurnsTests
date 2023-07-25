<script lang="ts">
	import { TITLE } from '$lib/cms/home/home';

	let scrollY: number = 0;
	let homepageWrapper: HTMLElement;
	let slidesContainer: HTMLElement;
	let upperSectionIndex = 3;

	let windowWidth: number;
	let currentSlide: number = 0;
	let scrolling: boolean = false;

	$: if (homepageWrapper && slidesContainer) {
		homepageWrapper.addEventListener('scrollend', (event) => {
			scrolling = false;
		});
		slidesContainer.addEventListener('scrollend', (event) => {
			scrolling = false;
		});
	}

	const onWheel = (event: WheelEvent) => {
		if (!scrolling) {
			scrollY += event.deltaY;
			if (windowWidth > 640 && event.deltaY != 0) {
				if (event.deltaY > 0 && currentSlide < upperSectionIndex) {
					currentSlide += 1;
					let element = document.getElementById(`section-${currentSlide}`);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth' });
						scrolling = true;
					}
				} else if (event.deltaY < 0 && currentSlide > 0) {
					currentSlide -= 1;
					let element = document.getElementById(`section-${currentSlide}`);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth' });
						scrolling = true;
					}
				}
			}
		}
	};

	/*2 sections:
	1. Hero with CTA to login/register, short text, image on the right
	2. Horizontal scroll section, something dark, elegant, transitions, description of the system
	3. If I want to animate the transitions between slides then it cant be handled via scroll into view, 
	unless I use gsap or that svelte slides library*/
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div id="homepage-wrapper" class="max-h-screen sm:overflow-hidden" bind:this={homepageWrapper}>
	<div id="homepage-container" class="flex min-h-screen w-full flex-col" on:wheel|passive={onWheel}>
		<div id="section-0" class="flex h-screen w-full flex-row">
			<div
				id="homepage-hero-title-button-container"
				class="flex h-full w-full flex-col items-center justify-center bg-zinc-900 text-center sm:w-1/2"
			>
				<div id="hero-title" class="max-w-xs font-sans text-2xl font-bold text-slate-300">
					Here comes the text, mroe text more text moreorm eo
				</div>
				<div id="buttons-container" class=" mt-12 flex flex-col">
					<a
						href="/login"
						class="btn text-xl text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-xl"
						>Login</a
					>
					<a
						href="/register"
						class="btn text-xl text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-xl"
						>Register</a
					>
				</div>
			</div>
			{#if windowWidth > 640}
				<div id="image-container" class="h-full w-1/2">
					<img
						src="/background/animals.jpg"
						alt="animals"
						class="h-full w-full bg-cover opacity-90 brightness-90"
					/>
				</div>
			{/if}
		</div>
		<div
			id="slides-container"
			bind:this={slidesContainer}
			class="no-scrollbar flex h-screen w-full snap-y flex-col overflow-x-auto sm:flex-row"
		>
			<div id="section-1" class="h-screen shrink-0 snap-start sm:h-full sm:basis-full">
				Slide 1 content
			</div>
			<div id="section-2" class="h-screen shrink-0 snap-start sm:h-full sm:basis-full">
				Slide 2 content
			</div>
			<div id="section-3" class="h-screen shrink-0 snap-start sm:h-full sm:basis-full">
				Slide 3 content
			</div>
		</div>
	</div>
</div>
