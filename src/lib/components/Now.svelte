<script lang="ts">
	import { nowItems } from '$lib/data/now';
	import { getAccentClasses } from '$lib/utils/accent';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
</script>

<section id="now" class="relative py-28">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading
			eyebrow="Currently"
			title="What I'm Building Right Now"
			description="Pulled straight from each project's own roadmap — not a highlight reel, just what's actually in progress this week."
		/>

		<div class="mt-16 grid gap-5 lg:grid-cols-3">
			{#each nowItems as item (item.project)}
				{@const accent = getAccentClasses(item.accent)}
				<a
					href={item.href}
					target="_blank"
					rel="noreferrer noopener"
					aria-label={`Follow progress on ${item.project} on GitHub`}
					class="group flex flex-col rounded-2xl border border-white/10 bg-obsidian-850/60 p-6 transition hover:border-white/20"
				>
					<div class="flex items-center gap-2">
						<span class={`relative flex h-2 w-2`}>
							<span
								class={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${accent.dot}`}
							></span>
							<span class={`relative inline-flex h-2 w-2 rounded-full ${accent.dot}`}></span>
						</span>
						<span class="font-mono text-xs tracking-wide text-slate-500 uppercase">In progress</span>
					</div>
					<h3 class="mt-4 font-display text-lg font-semibold text-white">{item.project}</h3>
					<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{item.detail}</p>
					<span
						class={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${accent.text} transition group-hover:gap-2.5`}
					>
						Follow along
						<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
							<path
								d="M5 12h14M13 6l6 6-6 6"
								stroke="currentColor"
								stroke-width="1.75"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>
