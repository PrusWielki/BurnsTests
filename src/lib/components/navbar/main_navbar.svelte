<script lang="ts">
	import { fly } from 'svelte/transition';
	// import { browser } from '$app/environment';
</script>

<div
	id="navbar-container"
	class="fixed left-1/2 z-30 flex w-full -translate-x-1/2 flex-row justify-center gap-1 bg-black bg-opacity-20 px-1 py-1 backdrop-blur-sm"
	in:fly={{ y: -screen.height / 2, duration: 500 }}
>
	<a
		href="/tests"
		id="navbar-tests-button"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="z-40 w-28 rounded-sm border-b-2 border-l-0 border-r-0 border-t-0 border-black bg-transparent py-1 text-center text-xl font-bold uppercase text-slate-100 transition duration-75 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg sm:text-2xl"
		>Tests</a
	>
	<!-- <a
		href="/methods"
		id="navbar-tests-button"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="z-40 text-center  w-28 hover:bg-black py-1 uppercase border-black  rounded-sm border-b-2 border-l-0 border-r-0 border-t-0 bg-transparent text-xl font-bold text-slate-100 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
		>Methods</a
	> -->
	<a
		href="/results"
		id="navbar-results-button"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		class="z-40 w-28 rounded-sm border-b-2 border-l-0 border-r-0 border-t-0 border-black bg-transparent py-1 text-center text-xl font-bold uppercase text-slate-100 transition duration-75 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg sm:text-2xl"
		>Results</a
	>
	<a
		href="/logout"
		id="navbar-logout-button"
		in:fly={{ y: -screen.height / 2, duration: 1000 }}
		type="submit"
		class="z-40 w-28 rounded-sm border-b-2 border-l-0 border-r-0 border-t-0 border-black bg-transparent py-1 text-center text-xl font-bold uppercase text-slate-100 transition duration-75 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg sm:fixed sm:right-2 sm:text-2xl"
		>logout</a
	>
</div>
