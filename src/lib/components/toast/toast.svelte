<script>
	import { fade, fly } from 'svelte/transition';
	import notificationMessage from '$lib/store/notification';
	let message = '';
	notificationMessage.subscribe((value) => {
		message = value;
	});
</script>

{#if message}
	<div transition:fade class="toast toast-top toast-center top-12 z-50">
		<div class="alert alert-success px-10">
			<p>{message}</p>
		</div>
	</div>
{/if}
