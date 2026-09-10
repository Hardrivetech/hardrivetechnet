<script lang="ts">
	import { site } from '$lib/data/site';

	const principles = [
		{
			title: 'Performance First',
			body: 'Every architectural decision is measured against frame budgets, memory footprint, and cache behavior — not just correctness.'
		},
		{
			title: 'Systems Thinking',
			body: 'Software is designed as a system of interacting parts, from silicon to UI, with explicit data flow and failure handling.'
		},
		{
			title: 'Clean Architecture',
			body: 'Modular, typed, and testable code that stays maintainable as scope grows — no shortcuts that become tomorrow\u2019s liability.'
		},
		{
			title: 'Correctness by Design',
			body: 'Sanitizers, static analysis, and rigorous unit testing are part of the build, not an afterthought.'
		}
	];

	const stats = [
		{ label: 'CODING SINCE', value: String(site.codingSince) },
		{ label: 'BASE', value: site.location },
		{ label: 'FOCUS', value: 'Engines / Embedded / Web' },
		{ label: 'STATUS', value: 'Available for select work' }
	];
</script>

<section id="about" class="relative py-28">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid gap-16 lg:grid-cols-2 lg:items-start">
			<div>
				<div
					class="mb-4 flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-accent-cyan uppercase"
				>
					<span class="h-px w-6 bg-accent-cyan/50"></span>
					About Me
				</div>
				<h2 class="text-3xl font-semibold text-balance text-white sm:text-4xl">
					I'd rather it work than look good in a slide deck.
				</h2>
				<p class="mt-6 text-balance text-slate-400">
					{site.description}
				</p>
				<p class="mt-4 text-slate-400">
					I work as an independent systems engineer rather than as part of a generalist shop.
					My projects span custom game engine architecture, Windows systems automation,
					embedded hardware builds, and secure Android engineering — all held to a single
					standard: software should be fast, correct, and built to last.
				</p>

				<div class="mt-10 grid grid-cols-2 gap-6">
					{#each stats as stat (stat.label)}
						<div class="border-l-2 border-accent-indigo/40 pl-4">
							<div class="font-mono text-[11px] tracking-wide text-slate-500">{stat.label}</div>
							<div class="mt-1 text-sm font-medium text-slate-200">{stat.value}</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="grid gap-5 sm:grid-cols-2">
				{#each principles as principle (principle.title)}
					<div
						class="rounded-2xl border border-white/10 bg-obsidian-850/60 p-6 transition hover:border-white/20"
					>
						<h3 class="font-display text-base font-semibold text-white">{principle.title}</h3>
						<p class="mt-3 text-sm leading-relaxed text-slate-400">{principle.body}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
