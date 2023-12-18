<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import HomepageNavbar from '$lib/components/navbar/homepage_navbar.svelte';
</script>

<div class="min-h-[100svh] bg-base-100 justify-between flex flex-col">
	<HomepageNavbar />
	<slot />
	<Footer />
</div>
