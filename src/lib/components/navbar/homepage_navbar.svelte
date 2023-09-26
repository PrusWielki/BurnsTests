<script lang="ts">
	import ThemePicker from '../theme_picker/theme_picker.svelte';
	import { TITLE } from '$lib/cms/home/home';
</script>

<a
	id="title-container"
	href="/"
	class="absolute left-4 top-4 z-10 cursor-pointer font-sans font-semibold text-slate-100 decoration-wavy hover:text-cyan-300 hover:underline sm:left-12"
>
	{TITLE}
</a>
<ThemePicker class="absolute top-4 right-40" />
<a
	target="_blank"
	rel="noopener noreferrer"
	id="github-link"
	class="absolute right-4 top-4 z-10 cursor-pointer font-extrabold text-slate-100 decoration-wavy hover:text-cyan-300 hover:underline sm:right-12"
	href="https://github.com/PrusWielki/BurnsTests"
>
	GitHub
</a>
