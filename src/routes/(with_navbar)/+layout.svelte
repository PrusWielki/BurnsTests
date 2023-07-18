<script lang="ts">
	import { fly } from 'svelte/transition';
	// import { browser } from '$app/environment';
</script>

<div
	id="navbar-container"
	class="fixed left-1/2 z-30 flex w-full -translate-x-1/2 flex-row justify-center gap-1 px-1 py-1"
	in:fly={{ y: -screen.height / 2, duration: 500 }}
>
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
		href="/tests"
		id="navbar-tests-button"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="btn z-30 w-28 rounded-sm border-b-2 border-l-0 border-r-0 border-t-0 bg-transparent text-xl font-bold text-slate-100 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
		>Tests</a
	>
	<a
		href="/results"
		id="navbar-results-button"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="btn z-30 w-28 rounded-sm border-b-2 border-l-0 border-r-0 border-t-0 bg-transparent text-xl font-bold text-slate-100 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
		>Results</a
	>
	<a
		href="/logout"
		id="navbar-logout-button"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		type="submit"
		class="btn z-30 w-28 rounded-sm border-b-2 border-l-0 border-r-0 border-t-0 bg-transparent text-xl font-bold text-slate-100 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:fixed sm:right-2 sm:text-2xl"
		>logout</a
	>
</div>
<slot />
