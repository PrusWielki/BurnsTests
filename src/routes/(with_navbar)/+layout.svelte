<script lang="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
</script>

<button
	in:fly={{ y: -screen.height / 2, duration: 1000 }}
	class="btn fixed right-2 top-2 z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:right-10 sm:top-10 sm:text-2xl"
	on:click={() => goto('/results')}>Results</button
>
<button
	in:fly={{ y: -screen.height / 2, duration: 1000 }}
	class="btn fixed right-2 top-2 z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:right-10 sm:top-10 sm:text-2xl"
	on:click={() => goto('/tests')}>Tests</button
>
<form action="/logout" method="GET" class="fixed left-2 top-2 z-30 sm:left-10 sm:top-10">
	<button
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		type="submit"
		class="btn bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
		>logout</button
	>
</form>
<slot />
