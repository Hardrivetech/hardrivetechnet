<script lang="ts">
	import { skillCategories } from '$lib/data/skills';
	import Badge from '$lib/components/Badge.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
</script>

<section id="stack" class="relative py-28">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading
			eyebrow="Technical Expertise"
			title="Stack &amp; Core Competencies"
			description="The languages, engines, and tooling I actively use to design, build, and ship performance-critical software."
		/>

		<div class="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each skillCategories as category (category.title)}
				<div
					class="rounded-2xl border border-white/10 bg-obsidian-850/60 p-6 transition hover:border-white/20"
				>
					<h3 class="font-display text-lg font-semibold text-white">{category.title}</h3>
					<p class="mt-2 text-sm text-slate-400">{category.description}</p>
					<div class="mt-5 flex flex-wrap gap-2">
						{#each category.skills as skill (skill)}
							<Badge label={skill} />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
