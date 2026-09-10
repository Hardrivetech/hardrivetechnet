<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { getAccentClasses } from '$lib/utils/accent';
	import Badge from '$lib/components/Badge.svelte';

	let { project }: { project: Project } = $props();

	const accent = $derived(getAccentClasses(project.accent));

	const statusLabel: Record<Project['status'], string> = {
		active: 'Active Development',
		stable: 'Stable Release',
		'r&d': 'R&D'
	};

	let mouseX = $state(50);
	let mouseY = $state(50);
	let hovering = $state(false);

	function handlePointerMove(event: PointerEvent) {
		const target = event.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		mouseX = ((event.clientX - rect.left) / rect.width) * 100;
		mouseY = ((event.clientY - rect.top) / rect.height) * 100;
	}
</script>

<article
	class={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-obsidian-850/60 p-8 transition duration-300 hover:border-white/20 ${project.span === 'lg' ? 'lg:p-10' : ''}`}
	style={`--mx: ${mouseX}%; --my: ${mouseY}%`}
	onpointermove={handlePointerMove}
	onpointerenter={() => (hovering = true)}
	onpointerleave={() => (hovering = false)}
>
	<div
		class={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 ${accent.glow}`}
	></div>
	<div
		class="pointer-events-none absolute inset-0 transition-opacity duration-300"
		style={`opacity: ${hovering ? 1 : 0}; background: radial-gradient(480px circle at var(--mx) var(--my), rgba(255,255,255,0.06), transparent 60%)`}
	></div>

	<div class="relative flex items-start justify-between">
		<span class="font-mono text-4xl font-bold text-white/10 select-none">{project.index}</span>
		<span
			class={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] tracking-wide uppercase ${accent.border} ${accent.bgSoft} ${accent.text}`}
		>
			<span class={`h-1.5 w-1.5 rounded-full ${accent.dot}`}></span>
			{statusLabel[project.status]}
		</span>
	</div>

	<div class="relative mt-6">
		<p class={`font-mono text-xs tracking-[0.2em] uppercase ${accent.text}`}>
			{project.category}
		</p>
		<h3 class="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
		<p class="mt-3 text-sm font-medium text-slate-300">{project.tagline}</p>
		<p class="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>
	</div>

	<div class="relative mt-6 flex flex-wrap gap-2">
		{#each project.stack as tech (tech)}
			<Badge label={tech} />
		{/each}
	</div>

	<div class="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
		{#each project.highlights as highlight (highlight.label)}
			<div>
				<div class="text-[11px] text-slate-500">{highlight.label}</div>
				<div class="mt-1 font-mono text-xs font-medium text-slate-200">{highlight.value}</div>
			</div>
		{/each}
	</div>

	<div class="relative mt-8 flex items-center gap-4">
		<a
			href={project.repoHref}
			target="_blank"
			rel="noreferrer noopener"
			aria-label={`View ${project.name} repository on GitHub`}
			class="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/[0.08]"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.97 10.97 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
				/>
			</svg>
			View Repository
		</a>
		{#if project.liveHref}
			<a
				href={project.liveHref}
				target="_blank"
				rel="noreferrer noopener"
				aria-label={`View live demo of ${project.name}`}
				class={`text-sm font-medium ${accent.text} transition hover:opacity-80`}
			>
				Live Demo →
			</a>
		{/if}
	</div>
</article>
