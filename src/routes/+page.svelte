<script lang="ts">
	import { TITLE } from '$lib/cms/home/home';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { Geolocation } from '@capacitor/geolocation';
	import type { Position } from '@capacitor/geolocation';

	let loc: Position;
	async function getCurrentPosition() {
		const res = await Geolocation.getCurrentPosition();
		loc = res;
	}
</script>

<div
	id="homepage-wrapper"
	class="flex h-screen w-screen items-center justify-center bg-[url(/background/wave.svg)] bg-cover"
>
	<div
		id="homepage-container"
		class="flex flex-col items-center justify-center gap-4"
		in:fly={{ y: -600 }}
	>
		<div id="Title" class="mb-28 text-center text-4xl font-bold sm:text-5xl">
			{TITLE}
		</div>
		<div id="Login-Register-Container" class="flex flex-row gap-4">
			<a
				href="/login"
				class="btn text-2xl text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-3xl"
				>Login</a
			>
			<a
				href="/register"
				class="btn text-2xl text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-3xl"
				>Register</a
			>
		</div>
	</div>
	<div>
		<h1>Geolocation</h1>
		<p>Your location is:</p>
		<p>Latitude: {loc?.coords.latitude}</p>
		<p>Longitude: {loc?.coords.longitude}</p>

		<button on:click={getCurrentPosition}> Get Current Location </button>
	</div>
</div>
