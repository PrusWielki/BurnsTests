<script>
	import { goto } from '$app/navigation';
</script>

<div>
	<button class="btn-primary" on:click={() => goto('/login')}>Login</button>
	<button class="btn-secondary" on:click={() => goto('/register')}>Register</button>
</div>
