<script lang="ts">
	import ThemePicker from '../theme_picker/theme_picker.svelte';
	import { TITLE } from '$lib/cms/home/home';
</script>

<div class="w-full fixed z-10 top-0">
	<div class="container mx-auto px-4 py-4 flex flex-row justify-between">
		<a
			id="title-container"
			href="/"
			class=" cursor-pointer font-sans font-semibold decoration-wavy hover:text-accent hover:underline sm:left-12"
		>
			{TITLE}
		</a>
		<div class="flex flex-row gap-8">
			<ThemePicker class="" />
			<a
				target="_blank"
				rel="noopener noreferrer"
				id="github-link"
				class=" z-10 cursor-pointer font-extrabold decoration-wavy hover:text-accent hover:underline sm:right-12"
				href="https://github.com/PrusWielki/BurnsTests"
			>
				GitHub
			</a>
		</div>
	</div>
</div>
