<script>
	import { TITLE } from '../cms/home/home';
	import { goto } from '$app/navigation';
</script>

<div
	id="homepage-wrapper"
	class="flex h-screen w-screen items-center justify-center bg-[url(/background/wave.svg)] bg-cover"
>
	<div id="homepage-container" class="flex flex-col items-center justify-center gap-4">
		<div id="Title" class="mb-28 text-center text-xl text-zinc-300 sm:text-4xl">{TITLE}</div>
		<div id="Login-Register-Container" class="flex flex-row gap-4">
			<button
				class="btn text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
				on:click={() => goto('/login')}>Login</button
			>
			<button
				class="btn text-slate-300 transition duration-75 hover:-translate-y-0.5 hover:shadow-lg sm:text-2xl"
				on:click={() => goto('/register')}>Register</button
			>
		</div>
	</div>
</div>
