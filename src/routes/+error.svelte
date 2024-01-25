<script>
	import { goto } from '$app/navigation';
</script>

<section class="w-full flex items-center dynamic-full-screen bg-base-100">
	<div class="container px-6 py-20 mx-auto flex flex-col items-center w-full gap-4">
		<h1 class="text-4xl sm:text-6xl text-error font-extrabold">ERROR</h1>
		<button
			class="btn btn-primary text-lg sm:text-2xl"
			on:click={() => {
				goto('/');
			}}>Go back to homepage</button
		>
	</div>
</section>
