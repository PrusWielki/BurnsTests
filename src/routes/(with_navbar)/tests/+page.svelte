<script lang="ts">
	import { TEST_NAMES, BACKGROUND_NAMES } from '$lib/cms/tests/tests';
	import { fly } from 'svelte/transition';
</script>

<div
	id="home-grid"
	class="grid h-screen w-screen grid-rows-3 overflow-hidden sm:grid-cols-3 sm:grid-rows-none"
>
	{#each TEST_NAMES as testName, index}
		<a
			id="option-wrapper"
			style="background-image: url({BACKGROUND_NAMES[index]})"
			class="group flex h-full w-full cursor-pointer items-center justify-center bg-opacity-80 bg-cover bg-center after:relative after:left-0 after:top-0 after:h-full after:w-full after:bg-black after:bg-opacity-30 after:transition-all after:duration-500 after:content-[''] hover:after:opacity-10 sm:h-screen"
			href={`/tests/${testName.toLowerCase()}`}
			in:fly={{ y: -screen.height / 2, duration: 1000 }}
		>
			<div
				id="option"
				class="absolute z-10 font-sans text-4xl font-bold text-white transition duration-300 group-hover:-translate-y-1 md:text-4xl xl:text-6xl"
			>
				{testName}
			</div>
		</a>
	{/each}
</div>
