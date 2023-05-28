<script lang="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	// import { browser } from '$app/environment';
</script>

<div id="navbar-container" class="fixed right-0 z-30 flex flex-row gap-1 px-1 py-1">
	<!-- {#if browser && history.length > 2}
		<a
			id="navbar-tests-button"
			in:fly={{ y: -screen.height / 2, duration: 1000 }}
			class="btn z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
			on:click={() => history.back()}
			on:keydown={() => history.back()}>Go Back</a
		>
	{/if} -->
	<a
		id="navbar-tests-button"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="btn z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
		on:click={() => goto('/tests')}
		on:keydown={() => goto('/tests')}>Tests</a
	>
	<a
		id="navbar-results-button"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="btn z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
		on:click={() => goto('/results')}
		on:keydown={() => goto('/results')}>Results</a
	>
	<a
		id="navbar-logout-button"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		type="submit"
		class="btn z-30 bg-transparent text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
		on:click={() => goto('/logout')}
		on:keydown={() => goto('/logout')}>logout</a
	>
</div>
<slot />
