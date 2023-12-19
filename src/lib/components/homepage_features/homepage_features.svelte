<script lang="ts">
	let features = [
		{
			title: 'Tests',
			description: 'See where You stand in different areas of mental health.',
			img: 'homepage_images/tests.png',
			comingSoon: false
		},
		{
			title: 'Methods',
			description: 'Choose from a variety of methods to resolve Your mental turmoil.',
			img: 'homepage_images/tests.png',
			comingSoon: true
		},
		{
			title: 'Statistics',
			description: 'Explore how Your moods change over time.',
			img: 'homepage_images/statistics.png',
			comingSoon: false
		},
		{
			title: 'AI',
			description:
				'Leverage cutting-edge artificial intelligence technology to help You improve even faster.',
			img: 'homepage_images/tests.png',
			comingSoon: true
		}
	];
</script>

<div class="flex flex-col justify-around sm:pt-16 sm:gap-8">
	<div class="flex flex-col gap-4 text-center [text-wrap:balance] sm:gap-6">
		<h1 class="text-2xl sm:text-4xl 2xl:text-5xl font-bold">What You will find inside</h1>
		<p class=" text-lg sm:text-xl">
			We make use of variety of modern technologies and protocols to make it all worth Your time
		</p>
	</div>
	<div
		class="flex flex-col py-12 sm:flex-row gap-8 sm:gap-4 w-full items-center sm:items-start sm:justify-between"
	>
		{#each features as feature}
			<div class="card w-full card-compact bg-base-200 shadow-xl">
				{#if feature.comingSoon}
					<div class="w-full h-full flex justify-center items-center pt-8">
						<div class="badge badge-primary py-3 font-semibold">COMING SOON!</div>
					</div>
				{:else}
					<figure>
						<img src={feature.img} alt={feature.title} />
					</figure>
				{/if}

				<div class="card-body items-center">
					<h2 class="card-title text-center font-bold">
						{feature.title}
					</h2>
					<p class="text-center text-lg [text-wrap:balance]">
						{feature.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
