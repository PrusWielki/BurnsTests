<script lang="ts">
	let features = [
		{ title: 'Tests', description: 'See where You stand in different areas of mental health.' },
		{
			title: 'Methods',
			description: 'Choose from a variety of methods to resolve Your mental turmoil.'
		},
		{ title: 'Statistics', description: 'Explore how Your moods change over time.' },
		{
			title: 'AI',
			description:
				'Leverage cutting-edge artificial intelligence technology to help You improve even faster.'
		}
	];
</script>

<div class="flex flex-col sm:flex-row gap-8 w-full items-center sm:items-start sm:justify-between">
	{#each features as feature}
		<div class="card w-56 card-compact bg-base-200 shadow-xl">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
			<div class="card-body items-center">
				<h2 class="card-title text-center">{feature.title}</h2>
				<p class="text-center [text-wrap:balance]">
					{feature.description}
				</p>
			</div>
		</div>
	{/each}
</div>
