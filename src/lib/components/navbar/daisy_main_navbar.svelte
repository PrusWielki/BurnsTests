<script lang="ts">
	import { TITLE } from '$lib/cms/home/home';
	import { fly } from 'svelte/transition';
	import ThemePicker from '../theme_picker/theme_picker.svelte';
	let resultsMenu: HTMLElement;
</script>

<div class="w-full fixed top-0 backdrop-blur-sm z-50 bg-base-100 bg-opacity-60">
	<div in:fly={{ y: -screen.height / 2, duration: 500 }} class="navbar container mx-auto">
		<div class="navbar-start">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<div class="dropdown">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
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
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 [&_a]:text-lg [&_label]:text-lg"
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
					<li><a href="/logout" class="mt-4 font-semibold">Logout</a></li>
				</ul>
			</div>
			<a href="/tests" class="btn btn-ghost normal-case text-xl">{TITLE}</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1 py-0">
				<li><a href="/tests" class="text-lg">Tests</a></li>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<li tabindex="0">
					<details bind:this={resultsMenu}>
						<summary bind:this={resultsMenu} class="text-lg">Results</summary>
						<ul class="p-2">
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<li
								on:click={() => {
									resultsMenu.removeAttribute('open');
								}}
								on:keydown={() => {
									resultsMenu.removeAttribute('open');
								}}
							>
								<a class="text-lg" href="/results/statistics">Statistics</a>
							</li>
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<li
								on:click={() => {
									resultsMenu.removeAttribute('open');
								}}
								on:keydown={() => {
									resultsMenu.removeAttribute('open');
								}}
							>
								<a class="text-lg" href="/results/results">Browse</a>
							</li>
						</ul>
					</details>
				</li>
				<li><a href="/methods" class="text-lg">Methods</a></li>
			</ul>
		</div>
		<div class="navbar-end flex">
			<ThemePicker class="dropdown-end px-4" />
			<a href="/logout" class="btn btn-ghost sm:text-lg hidden lg:flex">Logout</a>
		</div>
	</div>
</div>
