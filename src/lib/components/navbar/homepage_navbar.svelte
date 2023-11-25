<script lang="ts">
	import ThemePicker from '../theme_picker/theme_picker.svelte';
	import { TITLE } from '$lib/cms/home/home';
</script>

<div class="w-full fixed z-50 top-0 backdrop-blur-md">
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
				href="/login"
				class="relative z-10 font-sans font-semibold decoration-wavy transition duration-75 hover:text-accent hover:underline"
			>
				Login</a
			>
		</div>
	</div>
</div>
