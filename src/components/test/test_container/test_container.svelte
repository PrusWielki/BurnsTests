<script lang="ts">
	import TestComponent from '../test_component/test_component.svelte';
</script>

<div
	id="test-grid"
	class="fixed left-0 top-0 -z-10 grid h-screen w-screen grid-rows-3 sm:grid-cols-3 sm:grid-rows-none"
>
	<TestComponent />
	<TestComponent />
	<TestComponent />
</div>
