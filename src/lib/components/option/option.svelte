<script lang="ts">
	export let backgroundName: string = '/background/animals.jpg';
	export let testName: string = '';
	export let navigateTo: string = '/tests';
	export let id: number;
</script>

<a
	id={`option-wrapper-${id}`}
	style="background-image: url({backgroundName})"
	class="group relative box-content flex h-full w-full cursor-pointer items-center justify-center overflow-hidden bg-opacity-80 bg-cover bg-center transition duration-200 after:relative after:left-0 after:top-0 after:h-full after:w-full after:bg-black after:bg-opacity-30 after:transition-all after:duration-500 after:content-[''] hover:after:opacity-10"
	href={navigateTo}
>
	<div
		id="option"
		class="absolute z-10 font-sans text-4xl font-bold text-white transition duration-300 group-hover:-translate-y-1 md:text-4xl xl:text-6xl"
	>
		{testName}
	</div>
</a>
