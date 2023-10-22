<script lang="ts">
	import { TITLE } from '$lib/cms/home/home';
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{ y: -screen.height / 2, duration: 500 }}
	class="navbar fixed top-0 backdrop-blur-sm z-50 bg-base-100 bg-opacity-90"
>
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/tests">Tests</a></li>
				<li>
					<label>Results</label>
					<ul class="p-2">
						<li><a href="/results/statistics">Statistics</a></li>
						<li><a href="/results/results">Browse</a></li>
					</ul>
				</li>
				<li><a href="/methods">Methods</a></li>
			</ul>
		</div>
		<a href="/tests" class="btn btn-ghost normal-case text-xl">{TITLE}</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 py-0">
			<li><a href="/tests" class="text-lg">Tests</a></li>
			<li tabindex="0">
				<details>
					<summary class="text-lg">Results</summary>
					<ul class="p-2">
						<li><a class="text-lg" href="/results/statistics">Statistics</a></li>
						<li><a class="text-lg" href="/results/results">Browse</a></li>
					</ul>
				</details>
			</li>
			<li><a href="/methods" class="text-lg">Methods</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/logout" class="btn btn-ghost sm:text-lg">Logout</a>
	</div>
</div>
