<script lang="ts">
	import { featuredProjects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';

	const spanClasses: Record<'lg' | 'md', string> = {
		lg: 'lg:col-span-7',
		md: 'lg:col-span-5'
	};
</script>

<section id="projects" class="relative py-28">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading
			eyebrow="Selected Work"
			title="Things I've Built"
			description="A cross-section of my most technically demanding personal projects — from engine architecture to embedded builds and Android security engineering."
		/>

		<div class="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
			{#each featuredProjects as project (project.slug)}
				<div class={spanClasses[project.span]}>
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>
