<script lang="ts">
	import { TITLE } from '$lib/cms/home/home';
	import { fade } from 'svelte/transition';
	let scrollY: number = 0;
	let homepageWrapper: HTMLElement;
	let slidesContainer: HTMLElement;
	let upperSectionIndex = 3;
	let slidesReady = false;

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
	2. Horizontal scroll section, something dark, elegant, transitions, description of the system
	3. If I want to animate the transitions between slides then it cant be handled via scroll into view, 
	unless I use gsap or that svelte slides library*/
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div id="homepage-wrapper" class="max-h-screen sm:overflow-hidden" bind:this={homepageWrapper}>
	<a
		id="title-container"
		href="/"
		class="absolute left-12 top-4 cursor-pointer font-sans font-semibold text-slate-100 decoration-wavy hover:text-cyan-300 hover:underline"
	>
		{TITLE}
	</a>
	<a
		id="github-link"
		class="absolute right-12 top-4 cursor-pointer font-extrabold decoration-wavy hover:text-cyan-300 hover:underline"
		href="https://github.com/PrusWielki/BurnsTests"
	>
		GitHub
	</a>
	<div id="homepage-container" class="flex min-h-screen w-full flex-col" on:wheel|passive={onWheel}>
		<div id="section-0" class="flex h-screen w-full flex-row">
			<div
				id="homepage-hero-title-button-container"
				class="flex h-full w-full flex-col items-center justify-center bg-zinc-950 pb-8 pt-12 text-center sm:w-full"
			>
				<div
					id="hero-title"
					class="z-10 px-2 font-sans text-3xl font-semibold text-slate-100 sm:text-5xl"
				>
					How are you feeling today?
				</div>
				<div
					id="hero-description"
					class="z-10 mt-6 max-w-lg px-2 font-sans text-2xl text-slate-300 sm:text-3xl"
				>
					Explore how modern science can help you to feel better today
				</div>
				<div id="buttons-container" class="relative mt-8 flex flex-row items-center">
					<div id="login-button-container" class="group relative">
						<div
							id="button-glow"
							class="absolute -inset-2/3 rounded-full bg-gradient-radial from-cyan-500 opacity-30 blur-2xl transition-all duration-1000 group-hover:-inset-full group-hover:opacity-40 group-hover:duration-500"
						/>
						<a
							href="/login"
							class="relative z-10 text-xl text-slate-100 decoration-wavy transition duration-75 hover:-translate-y-0.5 hover:text-cyan-300 hover:underline hover:shadow-lg sm:text-2xl"
						>
							Login</a
						>
					</div>
					<div id="slash-container" class="px-2 text-3xl text-slate-100">/</div>
					<div id="register-button-container" class="group relative">
						<div
							id="button-glow"
							class="absolute -inset-2/3 rounded-full bg-gradient-radial from-cyan-500 opacity-30 blur-2xl transition-all duration-1000 group-hover:-inset-full group-hover:opacity-40 group-hover:duration-500"
						/>
						<a
							href="/register"
							class="relative z-10 text-xl text-slate-100 decoration-wavy transition duration-75 hover:-translate-y-0.5 hover:text-cyan-300 hover:underline hover:shadow-lg sm:text-2xl"
						>
							Register</a
						>
					</div>
				</div>

				<div id="gif-container" class="group relative mt-12 px-4 sm:mt-12 sm:w-1/2 sm:px-0">
					<div
						id="gif-glow"
						class="absolute -bottom-1/3 -left-px -right-px -top-1/3 rounded-sm bg-gradient-radial from-cyan-500 opacity-25 blur-lg transition-all duration-1000 group-hover:opacity-30 group-hover:duration-500 sm:-inset-full sm:rounded-full"
					/>
					<img
						src="homepage_gif.gif"
						alt="gif showing main functionalities"
						class="relative z-10 h-full w-full blur-none"
					/>
				</div>
			</div>
			{#if slidesReady && ((windowWidth > 640 && currentSlide === 0) || (windowWidth <= 640 && scrollY < 10))}
				<p
					class="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xl font-extrabold capitalize"
					in:fade={{ duration: 200 }}
				>
					Scroll for more
				</p>
			{/if}
		</div>
		{#if slidesReady}
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
		{/if}
	</div>
</div>
