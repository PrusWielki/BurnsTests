<script lang="ts">
	import { fade } from 'svelte/transition';
	import { MEDIA_SM } from '$lib/constants/media_query';
	import HomepageMethods from '$lib/components/homepage_methods/homepage_methods.svelte';
	import HomepageFeatures from '$lib/components/homepage_features/homepage_features.svelte';
	let scrollY: number = 0;
	let homepageWrapper: HTMLElement;
	let windowWidth: number;
</script>

<svelte:window bind:innerWidth={windowWidth} bind:scrollY />
<div id="homepage-wrapper" class="overflow-x-clip bg-base-100" bind:this={homepageWrapper}>
	<div id="homepage-container" class="flex h-full w-full flex-col">
		<section id="section-0" class="flex dynamic-full-screen w-full flex-row">
			<div
				id="homepage-hero-title-button-container"
				class="flex py-14 w-full flex-col items-center my-auto text-center sm:w-full"
			>
				<h1
					id="hero-title"
					class="z-10 px-2 font-sans text-4xl lg:text-5xl font-bold 2xl:text-6xl [text-wrap:balance] sm:[text-wrap:normal]"
					in:fade={{ duration: 200 }}
				>
					How are you feeling today?
				</h1>
				<h2
					id="hero-description"
					class="z-10 mt-6 max-w-lg px-2 font-sans text-2xl xl:text-3xl text-base-content"
					in:fade={{ duration: 200 }}
				>
					Explore how modern science can serve You to feel good and be more productive
				</h2>
				<div
					id="buttons-container"
					class="relative mt-8 flex flex-row items-center"
					in:fade={{ duration: 200 }}
				>
					<div id="register-button-container" class="group relative">
						<div
							id="button-glow"
							class="absolute -inset-2/3 rounded-full bg-gradient-radial from-accent opacity-5 blur-xl transition-all duration-1000 group-hover:-inset-full group-hover:opacity-20 group-hover:duration-500"
						/>
						<a
							href="/register"
							class="relative btn btn-outline z-10 text-2xl capitalize font-bold transition duration-75 xl:text-3xl"
						>
							<p class="z-10">Get started</p>
						</a>
					</div>
				</div>

				<div
					id="gif-container"
					class="group relative mt-6 px-4 sm:w-5/12 sm:px-0 xl:mt-12 xl:w-2/5"
				>
					<div
						id="gif-glow"
						class="absolute -bottom-1/3 -left-px -right-px -top-1/3 rounded-sm bg-gradient-radial from-accent to-base-100 opacity-25 blur-2xl sm:-inset-full sm:rounded-full"
					/>

					<img
						src="homepage_gif.gif"
						alt="gif showing main functionalities"
						class="relative z-10 h-full w-full blur-none rounded-lg"
						in:fade={{ duration: 200 }}
					/>
				</div>
			</div>
			{#if windowWidth > MEDIA_SM && scrollY < 100}
				<p
					class="absolute bottom-2 left-1/2 -translate-x-1/2 font-sans text-xl font-extrabold capitalize"
					in:fade={{ duration: 200 }}
				>
					Scroll for more
				</p>
			{/if}
		</section>
		<div class="container mx-auto px-4 sm:py-14 py-8 z-20">
			<HomepageFeatures />
		</div>
		<div class="container mx-auto px-4 py-8">
			<HomepageMethods />
		</div>
	</div>
</div>
