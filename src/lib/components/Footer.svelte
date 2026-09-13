<script lang="ts">
	import { navLinks } from '$lib/data/nav';
	import { site } from '$lib/data/site';

	const year = new Date().getFullYear();
</script>

<footer class="relative border-t border-white/5">
	<div class="mx-auto max-w-7xl px-6 py-12">
		<div class="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
			<div class="flex items-center gap-2.5">
				<span
					class="flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-br from-accent-indigo to-accent-cyan text-sm font-bold text-obsidian-950"
				>
					H
				</span>
				<div>
					<div class="font-display text-sm font-semibold text-white">
						HARDRIVE<span class="text-accent-cyan">TECH</span>
					</div>
					<div class="font-mono text-[11px] text-slate-500">{site.role}</div>
				</div>
			</div>

			<nav class="flex flex-wrap items-center gap-6">
				{#each navLinks as link (link.href)}
					<a href={link.href} class="text-sm text-slate-400 transition hover:text-white">
						{link.label}
					</a>
				{/each}
			</nav>

			<div class="flex items-center gap-4">
				<a
					href={site.social.github}
					target="_blank"
					rel="noreferrer noopener"
					class="text-sm text-slate-400 transition hover:text-white"
				>
					GitHub
				</a>
			</div>
		</div>

		<div
			class="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center"
		>
			<p class="text-xs text-slate-500">
				© {year}
				{site.handle}. All rights reserved.
			</p>
			<p class="font-mono text-[11px] text-slate-500">Built with SvelteKit · Svelte 5 · Tailwind CSS</p>
		</div>
	</div>
</footer>
