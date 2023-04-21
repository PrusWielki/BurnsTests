<script lang="ts">
	import HomeContainer from '../../components/home/home_container/home_container.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<HomeContainer {data} />
