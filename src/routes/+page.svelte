<script lang="ts">
	import HomeContainer from '../components/home/home_container/home_container.svelte';
	import TestContainer from '../components/test/test_container/test_container.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	console.log(data);
</script>

<HomeContainer {data} />
