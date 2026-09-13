<script lang="ts">
	import { skillCategories } from '$lib/data/skills';
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
					class="group relative rounded-2xl border border-white/10 bg-obsidian-850/60 p-6 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
				>
					<div class="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
					<div class="relative">
						<h3 class="font-display text-lg font-semibold text-white transition-colors group-hover:text-accent-cyan">{category.title}</h3>
						<p class="mt-2 text-sm text-slate-400 transition-colors group-hover:text-slate-300">{category.description}</p>
						<div class="mt-5 flex flex-wrap gap-2">
							{#each category.skills as skill (skill)}
								<span class="inline-flex items-center rounded-md border border-white/10 bg-white/3 px-2.5 py-1 font-mono text-[11px] tracking-tight text-slate-300 transition-transform group-hover:scale-105">
									{skill}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
