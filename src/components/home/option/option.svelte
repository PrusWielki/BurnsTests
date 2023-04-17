<script lang="ts">
	// import animals from '$lib/assets/background/animals.jpg';
	import { fly } from 'svelte/transition';
	export let backgroundName: string = '/background/animals.jpg';
	export let testName: string = '';
	export let active: boolean = false;
</script>

<div
	id="option-wrapper"
	style=" background-image: url({backgroundName})"
	class={`${
		active ? '-translate-y-full transition duration-700' : ''
	} group flex h-full w-full cursor-pointer items-center  justify-center bg-opacity-80  bg-cover bg-center after:relative after:left-0 after:top-0 after:h-1/3 after:w-full after:bg-black after:bg-opacity-30 after:transition-all after:duration-500 after:content-[''] hover:after:opacity-10 sm:h-screen after:sm:h-full`}
	on:click={() => {
		active = true;
	}}
	on:keypress={() => {
		active = true;
	}}
	transition:fly={{ y: -screen.height, duration: 2000 }}
>
	<div
		id="option"
		class="absolute z-10 font-sans text-2xl font-bold text-white transition duration-300 group-hover:-translate-y-1 md:text-6xl"
	>
		{testName}
	</div>
</div>
