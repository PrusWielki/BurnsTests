<script lang="ts">
	// import animals from '$lib/assets/background/animals.jpg';
	import { fly } from 'svelte/transition';
	export let backgroundName: string = '/background/animals.jpg';
	export let testName: string = '';
	export let active: boolean = false;
</script>

<div
	id="option-wrapper"
	style="background-image: url({backgroundName})"
	class={`${
		active ? 'absolute after:bg-opacity-50' : 'after:bg-opacity-30 hover:after:opacity-10'
	} group flex h-full w-full cursor-pointer items-center justify-center bg-opacity-80 bg-cover bg-center after:relative after:left-0 after:top-0 after:h-full after:w-full after:bg-black  after:transition-all after:duration-500 after:content-['']  sm:h-screen`}
	on:click={() => {
		active = true;
	}}
	on:keypress={() => {
		active = true;
	}}
	transition:fly={{ y: -screen.height / 2, duration: 1000 }}
>
	{#if !active}
		<div
			id="option"
			class={`absolute ${
				active && 'top-1/4'
			} z-10 font-sans font-bold text-white transition duration-300 group-hover:-translate-y-1 sm:text-xl md:text-4xl xl:text-6xl`}
		>
			{testName}
		</div>
	{/if}
</div>
