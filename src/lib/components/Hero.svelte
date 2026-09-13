<script lang="ts">
	let latencyText = 'Measuring...';
	let latencyTone = 'text-slate-300';

	if (typeof window !== 'undefined' && 'performance' in window) {
		const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
		if (nav?.responseStart && nav?.requestStart) {
			const latency = Math.round(nav.responseStart - nav.requestStart);
			latencyText = latency > 0 ? `${latency}ms avg` : 'Measuring...';
			latencyTone = latency > 50 ? 'text-red-400' : 'text-slate-300';
		}
	}

	const telemetry = [
		{ label: 'STATUS', value: 'AVAILABLE', tone: 'text-accent-emerald' },
		{ label: 'FOCUS', value: 'ENGINES / SYSTEMS / MOBILE', tone: 'text-slate-300' },
		{ label: 'LATENCY', value: latencyText, tone: latencyTone },
		{ label: 'BUILD', value: 'v2.4.1-stable', tone: 'text-accent-cyan' }
	];
</script>

<section id="top" class="relative flex min-h-screen items-center pt-16">
		<div class="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
			<div>
				<div
					class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5 font-mono text-xs tracking-wide text-accent-cyan opacity-0 animate-fade-in-up"
				>
					<span class="relative flex h-1.5 w-1.5">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"
						></span>
						<span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-cyan"></span>
					</span>
					SYSTEMS & SOFTWARE ENGINEER
				</div>

				<h1 class="text-4xl leading-[1.08] font-bold text-balance text-white sm:text-5xl lg:text-6xl opacity-0 animate-fade-in-up animation-delay-100">
					I engineer the systems
					<span
						class="bg-linear-to-r from-accent-indigo-bright via-accent-cyan to-accent-violet bg-clip-text text-transparent"
					>
						most developers won't touch.
					</span>
				</h1>

				<p class="mt-6 max-w-xl text-balance text-lg text-slate-400 opacity-0 animate-fade-in-up animation-delay-200">
					I'm an independent systems engineer building game engines, automating Windows
					internals, and shipping secure embedded and Android software — precision work where
					correctness and performance are non-negotiable.
				</p>

				<div class="mt-10 flex flex-wrap items-center gap-4">
					<a
						href="#projects"
						class="group relative inline-flex items-center gap-2 rounded-md bg-linear-to-r from-accent-indigo to-accent-indigo-bright px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/20 transition-all duration-300 hover:shadow-accent-indigo/40 hover:brightness-110 hover:-translate-y-0.5"
					>
						View Top Projects
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M5 12h14M13 6l6 6-6 6"
								stroke="currentColor"
								stroke-width="1.75"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
					<a
						href="#contact"
						class="group relative inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/2 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-white/30 hover:bg-white/6 hover:-translate-y-0.5"
					>
						Get in Touch
					</a>
				</div>

				<div class="mt-14 grid grid-cols-3 gap-6 border-t border-white/5 pt-8 sm:max-w-md">
					<div class="opacity-0 animate-fade-in-up animation-delay-300">
						<div class="font-display text-2xl font-semibold text-white">4+</div>
						<div class="mt-1 text-xs text-slate-500">Shipped side projects</div>
					</div>
					<div class="opacity-0 animate-fade-in-up animation-delay-400">
						<div class="font-display text-2xl font-semibold text-white">0</div>
						<div class="mt-1 text-xs text-slate-500">Corporate meetings attended</div>
					</div>
					<div class="opacity-0 animate-fade-in-up animation-delay-500">
						<div class="font-display text-2xl font-semibold text-white">100%</div>
						<div class="mt-1 text-xs text-slate-500">Solo-built, start to finish</div>
					</div>
				</div>
			</div>

			<div class="relative">
				<div
					class="glass-panel rounded-xl border border-white/10 p-1 shadow-2xl shadow-black/40 animate-float opacity-0 animate-fade-in-up animation-delay-600"
				>
					<div class="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
						<span class="h-2.5 w-2.5 rounded-full bg-red-400/70"></span>
						<span class="h-2.5 w-2.5 rounded-full bg-yellow-400/70"></span>
						<span class="h-2.5 w-2.5 rounded-full bg-emerald-400/70"></span>
						<span class="ml-3 font-mono text-[11px] text-slate-500">whoami --watch</span>
					</div>
					<div class="space-y-3 p-6 font-mono text-[13px]">
						<p class="text-slate-500">$ whoami</p>
						{#each telemetry as row (row.label)}
							<div class="flex items-center justify-between gap-4">
								<span class="text-slate-500">{row.label}</span>
								<span class={row.tone}>{row.value}</span>
							</div>
						{/each}
						<div class="flex items-center gap-2 pt-2 text-slate-500">
							<span class="text-accent-cyan">›</span>
							<span class="inline-block h-4 w-2 animate-pulse bg-accent-cyan/70"></span>
						</div>
					</div>
				</div>

				<div
					class="absolute -right-6 -bottom-6 hidden rounded-lg border border-white/10 bg-obsidian-800/80 px-4 py-3 font-mono text-[11px] text-slate-400 shadow-xl backdrop-blur sm:block opacity-0 animate-fade-in-up animation-delay-700"
				>
					<span class="text-accent-emerald">✓</span> zero-allocation hot path
				</div>
			</div>
		</div>
		<style>
			@keyframes fade-in-up {
				from {
					opacity: 0;
					transform: translateY(10px);
				}
				to {
					opacity: 1;
					transform: translateY(0);
				}
			}
			.animate-fade-in-up {
				animation: fade-in-up 0.6s ease-out forwards;
			}
		</style>
	</section>
