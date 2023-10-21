<script lang="ts">
	import ThemePicker from '../theme_picker/theme_picker.svelte';
	import { TITLE } from '$lib/cms/home/home';
</script>

<a
	id="title-container"
	href="/"
	class="absolute left-4 top-4 z-10 cursor-pointer font-sans font-semibold decoration-wavy hover:text-accent hover:underline sm:left-12"
>
	{TITLE}
</a>
<ThemePicker class="absolute top-4 sm:right-40 right-24" />
<a
	target="_blank"
	rel="noopener noreferrer"
	id="github-link"
	class="absolute right-4 top-4 z-10 cursor-pointer font-extrabold decoration-wavy hover:text-accent hover:underline sm:right-12"
	href="https://github.com/PrusWielki/BurnsTests"
>
	GitHub
</a>
