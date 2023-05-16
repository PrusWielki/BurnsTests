<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
</script>

<div id="navbar" class="fixed top-0 -z-10 h-16 w-screen bg-transparent">
	<button
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="btn fixed right-2 top-2 z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:right-10 sm:top-10 sm:text-2xl"
		on:click={() => goto('/results')}>Results</button
	>
</div>
<slot />
